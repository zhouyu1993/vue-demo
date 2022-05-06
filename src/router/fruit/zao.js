import newf from './newf'

export default function zao(name, address, fruit) {
  return {
    name,
    address,
    fruit: fruit.map((item) => newf(item[0], item[1])),
  }
}
