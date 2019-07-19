import queryString from 'query-string'

import util from './plugin/util'

import {
  getBattery,
  getNetworkType,
} from './plugin/webApi'

import {
  fetch
} from './plugin/fetch'

import {
  SDK_VERSION,
  SDK_VERSION_CODE,

  WS_URI,
  REGISTER_URI,

  CONN,
  BIND,
  SECMSG,
  PING,
  KICK,
  NOTIFY,
  NOTITY,
  UBND,
  CLOSE,

  CHID,
  SERVER,
  DEVICE_TYPE,
  CONN_VERSION,
  BIND_METHOD,
  PING_TIMEOUT_MS,

  ErrorType,

} from './plugin/constant'

import {
  version_name,
  version_code,

  package_name,

  app_id,
  app_key,

} from './config'

const {
  ClientHeader,

  XMMsgConn,
  XMMsgConnResp,
  XMMsgBind,
  XMMsgBindResp,
  XMMsgPing,
  XMMsgKick,
  XMMsgNotify,

} = require('./proto/channel').default

const {
  XmPushActionContainer,
  XmPushActionRegistration,
  XmPushActionRegistrationResult,
  XmPushActionUnRegistration,
  XmPushActionUnRegistrationResult,
  XmPushActionNotification,
  XmPushActionSendMessage,
  XmPushActionAckMessage,
  XmPushActionCommand,
  XmPushActionCommandResult,
  XmPushActionSubscription,
  XmPushActionSubscriptionResult,
  XmPushActionUnSubscription,
  XmPushActionUnSubscriptionResult,

  Target,
  ActionType,
  Platform,

} = require('./proto/xmpush').default

function MiPushSDK () {
  let subscribeSuccess
  let subscribeFail
  let unsubscribeSuccess
  let unsubscribeFail
  let pushCallback

  let xmpush_uuid
  let resource
  let device_userId
  let xmpush_deviceToken = {}
  let retryNumber = 0

  let uuid = 'websocket'
  let token
  let ssecurity
  let securityKey

  let ws = null
  let wsActiveClose = false
  let wsReconnect = false

  let timeoutObj
  let serverTimeoutObj
  const heartCheck = {
    reset: function () {
      if (timeoutObj) {
        clearTimeout(timeoutObj)
      }

      if (serverTimeoutObj) {
        clearTimeout(serverTimeoutObj)
      }

      return this
    },
    start: function () {
      timeoutObj = setTimeout(function () {
        sendPing()

        serverTimeoutObj = setTimeout(function () {
          console.error(ErrorType.WEB_SOCKET_INACTIVE.desc, ErrorType.WEB_SOCKET_INACTIVE.code)

          closeWebSocket()
        }, PING_TIMEOUT_MS)
      }, PING_TIMEOUT_MS)
    }
  }

  let network_info = {}
  const window_navigator = window.navigator

  let packetIdCount = 0
  let challenge

  /**
   * get_uuid 获取 uuid
   * @return {String} uuid
   */
  async function get_uuid () {
    let xmpush_uuid
    try {
      xmpush_uuid = window.localStorage.getItem('xmpush_uuid')
    } catch (e) {
      console.error(e)
    }
    if (!xmpush_uuid) {
      xmpush_uuid = `${DEVICE_TYPE}-${util.randomStr()}`

      try {
        window.localStorage.setItem('xmpush_uuid', xmpush_uuid)
      } catch (e) {
        console.error(e)
      }
    }

    return xmpush_uuid
  }

  /**
   * get_deviceUserId 获取用户唯一标识
   * @param  {[type]} uuid [description]
   * @return {[type]}      [description]
   */
  async function get_deviceUserId (uuid) {
    const device_userId = uuid || await get_uuid()

    return device_userId
  }

  async function get_deviceToken ({ device_userId, }) {
    const requestToken = {
      appid: app_id,
      apptoken: app_key,
      packagename: package_name,
      devid: device_userId,
    }

    let xmpush_requestToken
    try {
      xmpush_requestToken = window.localStorage.getItem('xmpush_requestToken')
    } catch (e) {
      console.error(e)
    }

    let xmpush_deviceToken
    try {
      xmpush_deviceToken = window.localStorage.getItem('xmpush_deviceToken')
      if (xmpush_deviceToken) {
        xmpush_deviceToken = JSON.parse(xmpush_deviceToken)
      }
    } catch (e) {
      console.error(e)
    }

    if (xmpush_requestToken !== JSON.stringify(requestToken) || !xmpush_deviceToken) {
      let data
      try {
        const json = await fetch(REGISTER_URI, {}, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: queryString.stringify(requestToken),
        })

        if (json.code === 0) {
          data = json.data
        }
      } catch (e) {
        console.error(e)
      }

      if (data) {
        retryNumber = 0

        xmpush_deviceToken = {
          uuid: data.userId,
          token: data.token,
          ssecurity: data.ssecurity,
        }

        try {
          window.localStorage.setItem('xmpush_deviceToken', JSON.stringify(xmpush_deviceToken))
        } catch (e) {
          console.error(e)
        }

        try {
          window.localStorage.setItem('xmpush_requestToken', JSON.stringify(requestToken))
        } catch (e) {
          console.error(e)
        }
      } else if (retryNumber < 3) {
        retryNumber++

        xmpush_deviceToken = await get_deviceToken({
          device_userId,
        })
      }
    }

    return xmpush_deviceToken
  }

  function generateHeaderId () {
    const timestamp = Date.now()
    const headerId = `websocket${timestamp}${packetIdCount}`

    packetIdCount++
    packetIdCount %= 1000

    return headerId
  }

  function buildClientHeader (cmd, headerId) {
    const clientHeader = new ClientHeader()
    // channelId，通道id，业务id。1代表miliao，5代表mipush
    clientHeader.chid = (cmd === PING ? 0 : CHID)
    // userId，用户id。如一开始没有，初始化为 'web' 或 'websocket'
    clientHeader.uuid = uuid
    clientHeader.server = SERVER
    clientHeader.resource = resource
    // 命令，CONN、BIND、SECMSG、PING 等
    clientHeader.cmd = cmd
    if (cmd === SECMSG) {
      // 子命令，通常与 SECMSG 命令结合使用
      clientHeader.subcmd = 'websocket'
    }
    // 随机，？？？
    clientHeader.id = headerId

    console.log(clientHeader)

    const clientHeaderEncode = ClientHeader.encode(clientHeader).finish()

    return clientHeaderEncode
  }

  function generateSig (challenge, headerId, token, resource, uuid, security) {
    const tmpStr =
      BIND_METHOD +
      '&challenge=' +
      challenge +
      '&chid=' +
      CHID +
      '&client_attrs=' +
      '&cloud_attrs=' +
      '&from=' +
      uuid +
      '@xiaomi.com/' +
      resource +
      '&id=' +
      headerId +
      '&kick=0' +
      '&to=xiaomi.com' +
      '&token=' +
      token +
      '&' +
      security

    const tmpArray = new Uint8Array(util.str2ab(tmpStr))

    const tmpKey = util.ab2str(util.sha1(tmpArray))

    return window.btoa(tmpKey)
  }

  function sendMsg (cmd, headerId, payload = '') {
    if (!headerId) {
      headerId = generateHeaderId()
    }

    const header = buildClientHeader(cmd, headerId)

    const data = util.buildPacketV5(header, payload)

    if (ws && ws.readyState === 1) {
      ws.send(data)

      console.log(cmd, WS_URI)
    } else {
      console.error(ErrorType.WEB_SOCKET_NOT_OPEN.desc, ErrorType.WEB_SOCKET_NOT_OPEN.code)
    }
  }

  async function sendConn () {
    try {
      network_info = await getNetworkType()
    } catch (e) {
      console.error(e)
    }

    const xMMsgConn = new XMMsgConn()
    // 通信信令的version
    xMMsgConn.version = CONN_VERSION
    // 机型
    xMMsgConn.model = window_navigator.appName || ''
    // 机型版本号，操作系统版本名称
    xMMsgConn.os = window_navigator.appVersion || ''
    // 即 <stream:stream> 中的 uid，sha1(IMEI) 得到的一个字串 ？？？
    xMMsgConn.udid = 'websocket'
    // sdk版本号
    xMMsgConn.sdk = SDK_VERSION_CODE
    // 连接网络类型，如 'wifi'
    xMMsgConn.connpt = network_info.effectiveType || ''
    // 系统地区或系统语言，如 CN 或 zh
    xMMsgConn.locale = window_navigator.language || ''
    xMMsgConn.andver = window_navigator.userAgent || ''

    const payload = XMMsgConn.encode(xMMsgConn).finish()

    sendMsg(CONN, undefined, payload)
  }

  function sendBind () {
    const headerId = generateHeaderId()

    const sig = generateSig(
      challenge,
      headerId,
      token,
      resource,
      uuid,
      ssecurity
    )

    const bind = new XMMsgBind()
    // 登录获取的 token
    bind.token = token
    bind.kick = '0'
    bind.method = BIND_METHOD
    bind.sig = sig

    const payload = XMMsgBind.encode(bind).finish()

    sendMsg(BIND, headerId, payload)
  }

  async function sendSecmsg (pushAction, action) {
    const target = new Target()
    // channelId，通道id，业务id。1代表miliao，5代表mipush
    target.channelId = CHID
    // 登录获取的 uuid
    target.userId = uuid
    target.server = SERVER
    target.resource = resource
    // 平台 ？？？
    target.platform = Platform.Hybrid
    // 登录获取的 token
    target.token = token

    console.log(target)

    const xmPushActionContainer = new XmPushActionContainer()
    xmPushActionContainer.action = action
    // 是否加密
    xmPushActionContainer.encryptAction = false
    // ？？？
    xmPushActionContainer.isRequest = true
    // ？？？
    xmPushActionContainer.pushAction = pushAction
    xmPushActionContainer.appid = app_id
    xmPushActionContainer.packageName = package_name
    // ？？？
    xmPushActionContainer.target = target

    const payload = XmPushActionContainer.encode(xmPushActionContainer).finish()

    sendMsg(SECMSG, undefined, payload)
  }

  function sendPing () {
    const ping = new XMMsgPing()

    const payload = XMMsgPing.encode(ping).finish()

    sendMsg(PING, undefined, payload)
  }

  function sendRegistration () {
    const xmPushActionRegistration = new XmPushActionRegistration()
    // 登录获取的 uuid
    xmPushActionRegistration.id = uuid
    xmPushActionRegistration.appId = app_id
    xmPushActionRegistration.packageName = package_name

    xmPushActionRegistration.appVersion = version_name
    xmPushActionRegistration.appVersionCode = version_code

    // xiaomi AppKey
    xmPushActionRegistration.token = app_key
    xmPushActionRegistration.pushSdkVersionName = SDK_VERSION
    xmPushActionRegistration.pushSdkVersionCode = SDK_VERSION_CODE

    console.log('xmPushActionRegistration: ', xmPushActionRegistration)

    const payload = XmPushActionRegistration.encode(xmPushActionRegistration).finish()

    sendSecmsg(payload, ActionType.Registration)
  }

  function sendUnRegistration (regId = '') {
    const xmPushActionUnRegistration = new XmPushActionUnRegistration()
    // 登录获取的 uuid
    xmPushActionUnRegistration.id = uuid
    xmPushActionUnRegistration.appId = app_id
    xmPushActionUnRegistration.packageName = package_name

    xmPushActionUnRegistration.appVersion = version_name
    xmPushActionUnRegistration.appVersionCode = version_code

    // xiaomi AppKey
    xmPushActionUnRegistration.token = app_key
    xmPushActionUnRegistration.pushSdkVersionName = SDK_VERSION
    xmPushActionUnRegistration.pushSdkVersionCode = SDK_VERSION_CODE

    xmPushActionUnRegistration.regId = regId

    console.log('xmPushActionUnRegistration: ', xmPushActionUnRegistration)

    const payload = XmPushActionUnRegistration.encode(xmPushActionUnRegistration).finish()

    sendSecmsg(payload, ActionType.UnRegistration)
  }

  async function sendCollectData () {
    const xmPushActionNotification = new XmPushActionNotification()
    // 登录获取的 uuid
    xmPushActionNotification.id = uuid
    xmPushActionNotification.appId = app_id
    xmPushActionNotification.packageName = package_name

    // 通知类型
    xmPushActionNotification.type = 'quickapp_upload_deviceinfo'

    let battery_info = ''
    try {
      battery_info = await getBattery()
    } catch (e) {
      console.error(e)
    }

    xmPushActionNotification.extra = JSON.stringify({
      uuid,
      device_userId,
      battery_info: JSON.stringify(battery_info),
      device_info: JSON.stringify(window_navigator),
      network_info: JSON.stringify(network_info),
    })

    console.log('sendCollectData.xmPushActionNotification: ', xmPushActionNotification)

    const payload = XmPushActionNotification.encode(xmPushActionNotification).finish()

    sendSecmsg(payload, ActionType.Notification)
  }

  function sendAckMessage (xmPushActionSendMessage) {
    const xmPushActionAckMessage = new XmPushActionAckMessage()
    // 消息ID
    xmPushActionAckMessage.id = xmPushActionSendMessage.message.id

    xmPushActionAckMessage.appId = app_id
    xmPushActionAckMessage.packageName = package_name

    // 消息时间
    xmPushActionAckMessage.messageTs = xmPushActionSendMessage.message.createAt
    // ？？？
    xmPushActionAckMessage.request = xmPushActionSendMessage
    // ？？？
    xmPushActionAckMessage.category = xmPushActionSendMessage.category
    // ？？？
    xmPushActionAckMessage.isOnline = xmPushActionSendMessage.message.isOnline
    // ？？？
    xmPushActionAckMessage.passthrough = 0

    console.log('xmPushActionAckMessage: ', XmPushActionAckMessage)

    const payload = XmPushActionAckMessage.encode(xmPushActionAckMessage).finish()

    sendSecmsg(payload, ActionType.AckMessage)
  }

  function sendCommand ({
    cmdName,
    cmdArgs,
  }) {
    const xmPushActionCommand = new XmPushActionCommand()
    // 登录获取的 uuid
    xmPushActionCommand.id = uuid
    xmPushActionCommand.appId = app_id
    xmPushActionCommand.packageName = package_name

    xmPushActionCommand.cmdName = cmdName
    xmPushActionCommand.cmdArgs = cmdArgs

    console.log(`${cmdName}.xmPushActionCommand: `, xmPushActionCommand)

    const payload = XmPushActionCommand.encode(xmPushActionCommand).finish()

    sendSecmsg(payload, ActionType.Command)
  }

  function sendSubscription (topic) {
    const xmPushActionSubscription = new XmPushActionSubscription()
    xmPushActionSubscription.id = uuid
    xmPushActionSubscription.appId = app_id
    xmPushActionSubscription.packageName = package_name
    xmPushActionSubscription.topic = topic

    console.log('xmPushActionSubscription: ', xmPushActionSubscription)

    const payload = XmPushActionSubscription.encode(xmPushActionSubscription).finish()

    sendSecmsg(payload, ActionType.Subscription)
  }

  function sendUnSubscription (topic) {
    const xmPushActionUnSubscription = new XmPushActionUnSubscription()
    xmPushActionUnSubscription.id = uuid
    xmPushActionUnSubscription.appId = app_id
    xmPushActionUnSubscription.packageName = package_name
    xmPushActionUnSubscription.topic = topic

    console.log('xmPushActionUnSubscription: ', xmPushActionUnSubscription)

    const payload = XmPushActionUnSubscription.encode(xmPushActionUnSubscription).finish()

    sendSecmsg(payload, ActionType.UnSubscription)
  }

  async function handleConn (msg) {
    const xMMsgConnResp = XMMsgConnResp.decode(msg)

    console.log('xMMsgConnResp: ', xMMsgConnResp)

    challenge = xMMsgConnResp.challenge // 用于加密校验 ？？？

    if (wsReconnect) {
      sendMsg(UBND)
    }

    setTimeout(() => {
      sendBind()

      wsReconnect = false
    }, wsReconnect ? 1000 : 0)
  }

  async function handleBind (msg) {
    const xMMsgBindResp = XMMsgBindResp.decode(msg)

    console.log('xMMsgBindResp: ', xMMsgBindResp)

    const loginState = xMMsgBindResp.result

    if (loginState) {
      let xmpush_regId
      try {
        xmpush_regId = window.localStorage.getItem('xmpush_regId')
      } catch (e) {
        console.error(e)
      }

      if (xmpush_regId) {
        subscribeSuccess(xmpush_regId)

        sendCollectData()
      } else {
        sendRegistration()
      }
    } else {
      console.error(xMMsgBindResp.errorReason)

      subscribeFail(ErrorType.LOGIN_FAIL.desc, ErrorType.LOGIN_FAIL.code)
    }
  }

  async function handleSecmsg (msg, rc4Key) {
    const secMsgStr = util.rc4(util.ab2str(msg), rc4Key)
    const secMsgPayload = new Uint8Array(util.str2ab(secMsgStr))

    const xmPushActionContainer = XmPushActionContainer.decode(secMsgPayload)

    console.log('xmPushActionContainer: ', xmPushActionContainer)

    const action = xmPushActionContainer.action
    const pushAction = xmPushActionContainer.pushAction

    if (action === ActionType.Registration) {
      // action === 1
      const xmPushActionRegistrationResult = XmPushActionRegistrationResult.decode(pushAction)

      console.log('xmPushActionRegistrationResult: ', xmPushActionRegistrationResult)

      const xmpush_regId = xmPushActionRegistrationResult.regId

      try {
        window.localStorage.setItem('xmpush_regId', xmpush_regId)
      } catch (e) {
        console.error(e)
      }

      subscribeSuccess(xmpush_regId)

      sendCollectData()
    } if (action === ActionType.UnRegistration) {
      // action === 2
      const xmPushActionUnRegistrationResult = XmPushActionUnRegistrationResult.decode(pushAction)

      console.log('xmPushActionUnRegistrationResult: ', xmPushActionUnRegistrationResult)

      wsActiveClose = true
      closeWebSocket()

      window.localStorage.removeItem('xmpush_uuid')
      window.localStorage.removeItem('xmpush_deviceToken')
      window.localStorage.removeItem('xmpush_regId')

      unsubscribeSuccess()
    } else if (action === ActionType.Subscription) {
      // action === 3
      const xmPushActionSubscriptionResult = XmPushActionSubscriptionResult.decode(pushAction)

      console.log('xmPushActionSubscriptionResult: ', xmPushActionSubscriptionResult)

      const reason = xmPushActionSubscriptionResult.reason

      console.warn(reason)
    } if (action === ActionType.UnSubscription) {
      // action === 4
      const xmPushActionUnSubscriptionResult = XmPushActionUnSubscriptionResult.decode(pushAction)

      console.log('xmPushActionUnSubscriptionResult: ', xmPushActionUnSubscriptionResult)
    } else if (action === ActionType.SendMessage) {
      // action === 5
      const xmPushActionSendMessage = XmPushActionSendMessage.decode(pushAction)

      console.log('xmPushActionSendMessage: ', xmPushActionSendMessage)

      sendAckMessage(xmPushActionSendMessage)

      const metaInfo = xmPushActionContainer.metaInfo || {}
      const { title = '', description = '', url = '/' } = metaInfo

      if (title && description) {
        alert(`${title}-${description}-${url}`)
      }

      if (pushCallback) {
        pushCallback({
          source: 'websoket',
          xmPushActionContainer,
          xmPushActionSendMessage,
        })
      }
    } else if (action === ActionType.Notification) {
      // action === 9
      const xmPushActionNotification = XmPushActionNotification.decode(pushAction)

      console.log('xmPushActionNotification: ', xmPushActionNotification)
    } else if (action === ActionType.Command) {
      // action === 10
      const xmPushActionCommandResult = XmPushActionCommandResult.decode(pushAction)

      console.log('xmPushActionCommandResult: ', xmPushActionCommandResult)

      const reason = xmPushActionCommandResult.reason

      console.warn(reason)
    }
  }

  function handlePing (msg) {
    const xMMsgPing = XMMsgPing.decode(msg)

    console.log('xMMsgPing: ', xMMsgPing)
  }

  function handleKick (msg) {
    const xMMsgKick = XMMsgKick.decode(msg)

    console.log('xMMsgKick: ', xMMsgKick)

    wsActiveClose = XMMsgKick.type !== 'kick'

    closeWebSocket()
  }

  function handleNotify (msg) {
    const xMMsgNotify = XMMsgNotify.decode(msg)

    console.log('xMMsgNotify: ', xMMsgNotify)
  }

  function handleUnknownCmd (msg, cmd) {
    console.log('UnknownCmd: ', msg, cmd)
  }

  function handleMsg (arrayBuffer) {
    const type = Object.prototype.toString.call(arrayBuffer)

    if (type.slice(8, type.length - 1) !== 'ArrayBuffer') {
      return
    }

    const dataView = new DataView(arrayBuffer)
    const headerLen = dataView.getUint16(8)
    const payloadLen = dataView.getUint32(10)
    const receivedCrc = dataView.getUint32(14 + headerLen + payloadLen)
    const actualCrc = util.adler32(arrayBuffer.slice(0, 14 + headerLen + payloadLen))

    if (receivedCrc !== actualCrc) {
      return
    }

    const bufferHeader = new Uint8Array(
      arrayBuffer.slice(14, 14 + headerLen)
    )
    const bufferPayload = new Uint8Array(
      arrayBuffer.slice(14 + headerLen, 14 + headerLen + payloadLen)
    )

    const clientHeader = ClientHeader.decode(bufferHeader)
    const cmd = clientHeader.cmd

    console.log('handleMsg.clientHeader.cmd: ', cmd)

    switch (cmd) {
      case CONN:
        handleConn(bufferPayload)
        break
      case BIND:
        handleBind(bufferPayload)
        break
      case SECMSG:
        handleSecmsg(bufferPayload, securityKey + '_' + clientHeader.id)
        break
      case PING:
        handlePing(bufferPayload)
        break
      case KICK:
        handleKick(bufferPayload)
        break
      case NOTIFY:
        console.log('%cFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF', 'color: #ff397e')
        handleNotify(bufferPayload)
        break
      case NOTITY:
        console.log('%cTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT', 'color: #b242ce')
        handleNotify(bufferPayload)
        break
      default:
        handleUnknownCmd(bufferPayload, cmd)
    }
  }

  function initWebSocket () {
    wsActiveClose = false

    if ('WebSocket' in window) {
      ws = new window.WebSocket(WS_URI)
      ws.onopen = function () {
        heartCheck.reset().start()

        sendConn()
      }
      ws.onmessage = function (e) {
        heartCheck.reset().start()

        // e.data 是 Blob，需转为 ArrayBuffer
        const fr = new FileReader()
        fr.onload = function (evt) {
          handleMsg(evt.target.result)
        }
        fr.readAsArrayBuffer(e.data)
      }
      ws.onclose = function (e) {
        console.log('ws.onclose: ', e, '啦啦啦')

        ws = null

        if (!e.wasClean && !wsActiveClose) {
          console.error(ErrorType.WEB_SOCKET_RECONNECTING.desc, ErrorType.WEB_SOCKET_RECONNECTING.code)

          wsReconnect = true

          initWebSocket()
        }
      }
      ws.onerror = function (e) {
        console.error('ws.onerror: ', e, '啦啦啦')

        console.error(ErrorType.WEB_SOCKET_ERR.desc, ErrorType.WEB_SOCKET_ERR.code)
      }
    } else {
      console.error(ErrorType.WEB_SOCKET_NOT_SUPPORT.desc, ErrorType.WEB_SOCKET_NOT_SUPPORT.code)
    }
  }

  function closeWebSocket () {
    if (ws && ws.readyState === 1) {
      heartCheck.reset()

      sendMsg(CLOSE)

      ws.close()
    } else {
      console.error(ErrorType.WEB_SOCKET_NOT_OPEN.desc, ErrorType.WEB_SOCKET_NOT_OPEN.code)
    }
  }

  /**
   * registerMiPush 客户端注册设备，由开发者选择注册 MiPushSDK 时机。建议在程序启动时调用此方法
   * @param  {Bumber} type        设置消息类型
   * @param  {Boolean} connect    是否开启应用内长连接
   * @return {String} deviceToken 设备唯一标识符
   */
  async function registerMiPush ({ type, connect, } = {}) {
    console.log('registerMiPush: ', type, connect)

    // 获取 xmpush_uuid
    xmpush_uuid = await get_uuid()

    // 获取 resource
    resource = xmpush_uuid.slice(0, 15)

    // 获取 device_userId
    device_userId = await get_deviceUserId(xmpush_uuid)

    // 获取 deviceToken
    xmpush_deviceToken = await get_deviceToken({
      device_userId,
    })

    return xmpush_deviceToken
  }

  /**
   * bindDeviceToken 绑定deviceToken
   * @param  {String} deviceToken 注册推送服务时SDK请求PNS建立连接后获得的deviceToken
   * @return {[type]}             [description]
   */
  async function bindDeviceToken (deviceToken) {
    console.log('bindDeviceToken: ', xmpush_deviceToken)

    uuid = deviceToken.uuid
    token = deviceToken.token
    ssecurity = deviceToken.ssecurity
    securityKey = window.atob(ssecurity)

    initWebSocket()
  }

  this.registerMiPush = async ({ type, connect, } = {}) => {
    return registerMiPush({ type, connect, })
  }

  this.bindDeviceToken = async (deviceToken) => {
    bindDeviceToken(deviceToken)
  }

  this.unregisterMiPush = async (regId) => {
    sendUnRegistration(regId)
  }

  // 为指定用户设置别名，在成功注册设备并绑定DeviceToken后调用
  this.setAlias = (cmdArgs = ['rainjoy-001']) => {
    if (!cmdArgs) return console.error('cmdArgs 不能为空')

    sendCommand({
      cmdName: 'set-alias',
      cmdArgs,
    })
  }

  // 取消指定用户的别名，在成功注册设备并绑定DeviceToken后调用
  this.unsetAlias = (cmdArgs = ['rainjoy-001']) => {
    if (!cmdArgs) return console.error('cmdArgs 不能为空')

    sendCommand({
      cmdName: 'unset-alias',
      cmdArgs,
    })
  }

  // 为指定用户设置帐号，在成功注册设备并绑定DeviceToken后调用
  this.setAccount = (cmdArgs = ['rainjoy-002']) => {
    if (!cmdArgs) return console.error('cmdArgs 不能为空')

    sendCommand({
      cmdName: 'set-account',
      cmdArgs,
    })
  }

  // 取消指定用户的帐号，在成功注册设备并绑定DeviceToken后调用
  this.unsetAccount = (cmdArgs = ['rainjoy-002']) => {
    if (!cmdArgs) return console.error('cmdArgs 不能为空')

    sendCommand({
      cmdName: 'unset-account',
      cmdArgs,
    })
  }

  this.subscribeTopic = (topic = 'rainjoy') => {
    if (!topic) return console.error('topic 不能为空')

    sendSubscription(topic)
  }

  this.unsubscribeTopic = (topic = 'rainjoy') => {
    if (!topic) return console.error('topic 不能为空')

    sendUnSubscription(topic)
  }

  this.getAllAliasAsync = async () => {}

  this.getAllAccountAsync = async () => {}

  this.getAllTopicAsync = async () => {}

  // 获取SDK版本号
  this.getSDKVersion = () => {
    return SDK_VERSION
  }

  // 获取设备的regId，在成功注册设备并绑定DeviceToken后调用
  this.getRegIdAsync = async () => {
    let xmpush_regId = ''
    try {
      xmpush_regId = window.localStorage.getItem('xmpush_regId')
    } catch (e) {
      console.error(e)
    }

    return xmpush_regId
  }

  this.sendCollectData = async () => {
    sendCollectData()
  }

  this.subscribe = async ({
    success = (data) => {
      console.log(data)
    },
    fail = (data, code) => {
      console.error(data, code)
    },
  } = {}) => {
    subscribeSuccess = success
    subscribeFail = fail

    const xmpush_deviceToken = await registerMiPush()

    if (xmpush_deviceToken) {
      bindDeviceToken(xmpush_deviceToken)
    } else {
      subscribeFail(ErrorType.FETCH_TOKEN_FAIL.desc, ErrorType.FETCH_TOKEN_FAIL.code)
    }
  }

  this.unsubscribe = async ({
    success = (data) => {
      console.log(data)
    },
    fail = (data, code) => {
      console.error(data, code)
    },
  } = {}) => {
    unsubscribeSuccess = success
    unsubscribeFail = fail

    console.log(unsubscribeFail)

    sendUnRegistration()
  }

  this.on = ({
    callback = (data) => {
      console.log('push.on.callback: ', data)
    },
  } = {}) => {
    pushCallback = callback
  }

  this.off = () => {
    pushCallback = null
  }
}

export default MiPushSDK
