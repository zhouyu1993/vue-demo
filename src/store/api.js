const isDev = location.port

export default {
  cyqq: isDev ? '/cyqq' : 'https://c.y.qq.com',
  forward: isDev ? '/forward' : 'http://47.105.150.105',
  bzqll: isDev ? '/bzqll' : 'https://api.bzqll.com',
}
