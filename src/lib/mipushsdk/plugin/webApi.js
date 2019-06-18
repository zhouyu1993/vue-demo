function getBattery () {
  return new Promise((resolve, reject) => {
    if (window.navigator.getBattery) {
      navigator.getBattery().then(res => resolve(res))
    } else {
      reject('该设备暂不支持获取电量信息')
    }
  })
}

function getNetworkType () {
  return new Promise((resolve, reject) => {
    const network_info = window.navigator.connection

    if (network_info) {
      resolve(network_info)
    } else {
      reject('该设备暂不支持获取网络类型')
    }
  })
}

export {
  getBattery,
  getNetworkType,
}

export default {
  getBattery,
  getNetworkType,
}
