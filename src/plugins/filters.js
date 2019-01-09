import dateFormate from './dateFormate'

export default function intall (Vue) {
  // 字符编码转义
  Vue.filter('unicodeTen', (input) => {
    const output = input.replace(/&#{1}[0-9]{1,};{1}/ig, (v) => {
      const code = v.replace(/&#(.*);/, '$1')
      return String.fromCodePoint(code)
    })
    return output
  })

  // 数字
  Vue.filter('fixNumber', (input, multiple = 100, decimal = 2) => {
    input = +input
    multiple = +multiple || 100

    return (input / multiple).toFixed(decimal).replace(/\.?0*$/, '')
  })

  // 时间格式化
  Vue.filter('dateFormate', dateFormate)
}
