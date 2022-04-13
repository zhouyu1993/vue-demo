import { hwyl, mlxq, ssw3, zj, zx1, zx2 } from '../address'
import { HFS100, LM, PPG, SDMG, SXM, XFQ, XH, XTM } from '../fruit'

const _XFQ = {
  ...XFQ,
  money: 34,
}

const _PPG = {
  ...PPG,
  money: 35,
}

const pick = 1
const pay = 1

const t1 = [
  {
    name: '小酒儿',
    address: zj,
    fruit: [LM],
    pick,
  },
  {
    name: '迷路小姐',
    address: hwyl,
    fruit: [HFS100, _XFQ],
    pick,
    pay,
  },
  {
    name: 'pengmin',
    address: zx1,
    fruit: [XTM],
    pick,
  },
  {
    name: '木春',
    address: zj,
    fruit: [LM],
    pick,
  },
  {
    name: '颢妈',
    address: zx2,
    fruit: [_XFQ],
    pick,
    pay,
  },
]

const t2 = [
  {
    name: '杜晶',
    address: mlxq,
    fruit: [
      _PPG,
      {
        ...XH,
        money: 20,
      },
    ],
    pick,
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [
      PPG,
      {
        ...SDMG,
        money: 50,
      },
    ],
    pick,
  },
  {
    name: 'ocean',
    address: ssw3,
    fruit: [
      {
        ...XH,
        money: 25,
      },
      {
        ...SXM,
        money: 26,
      },
    ],
    pick,
    pay,
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
