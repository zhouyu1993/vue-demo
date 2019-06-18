export const SDK_VERSION = '1.0.0'
export const SDK_VERSION_CODE = 1

export const WS_URI = 'ws://10.38.163.29:5222'
export const REGISTER_URI = location.port ? '/mipush/pass/register' : 'http://10.38.163.29:9085/pass/register'

export const CONN = 'CONN'
export const BIND = 'BIND'
export const SECMSG = 'SECMSG'
export const PING = 'PING'
export const KICK = 'KICK'
export const NOTIFY = 'NOTIFY'
export const NOTITY = 'NOTITY'
export const UBND = 'UBND'
export const CLOSE = 'CLOSE'

export const CHID = 5

export const SERVER = 'xiaomi.com'

export const DEVICE_TYPE = 'wst'

export const CONN_VERSION = 106

export const BIND_METHOD = 'XMPUSH-PASS'

export const PING_TIMEOUT_MS = 11000

export const ErrorType = {
  UNKNOWN: { code: 0, desc: 'UNKNOWN' },
  FETCH_TOKEN_FAIL: { code: 1, desc: 'FETCH_TOKEN_FAIL' },
  LOGIN_FAIL: { code: 2, desc: 'LOGIN_FAIL' },
  WEB_SOCKET_ERR: { code: 3, desc: 'WEB_SOCKET_ERR' },

  // PULL_MSG_FAIL: { code: 4, desc: 'PULL_MSG_FAIL' },
  // ACK_MSG_FAIL: { code: 6, desc: 'ACK_MSG_FAIL' },
  // NOT_LOGIN: { code: 7, desc: 'NOT_LOGIN' },
  WEB_SOCKET_NOT_SUPPORT: { code: 8, desc: 'WEB_SOCKET_NOT_SUPPORT' },
  // FETCH_TOKEN_FUN_NOT_REGISTER: { code: 9, desc: 'FETCH_TOKEN_FUN_NOT_REGISTER' },
  // INTERNET_DISCONNECTED: { code: 10, desc: 'INTERNET_DISCONNECTED' },

  WEB_SOCKET_NOT_OPEN: { code: 11, desc: 'WEB_SOCKET_NOT_OPEN' },
  WEB_SOCKET_INACTIVE: { code: 12, desc: 'WEB_SOCKET_INACTIVE' },
  WEB_SOCKET_RECONNECTING: { code: 13, desc: 'WEB_SOCKET_RECONNECTING' },
}
