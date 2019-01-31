const isDev = location.port

export default {
  cyqq: isDev ? '/cyqq' : 'https://c.y.qq.com',
  forward: isDev ? '/forward' : 'http://47.105.150.105',
}
