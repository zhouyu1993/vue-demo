import { ssw1, ssw3, zj, zx1, zx2, zx3 } from '../address'
import { DCM, FL, LM, LWC, MHT, PPG, QX, WG, XH, XJ, XM, YJM } from '../fruit'

const _DCM = {
  ...DCM,
  money: 15,
}
const _WG = {
  ...WG,
  money: 35,
}
const _LWC = {
  ...LWC,
  money: 22,
}
const _PPG = {
  ...PPG,
  money: 45,
}
const _XM = {
  ...XM,
  money: 20,
}

const pick = 1
// const pay = 1

const t1 = [
  {
    name: '宠儿',
    address: zx2,
    fruit: [_DCM, _WG, FL],
  },
  {
    name: '龚文琴',
    address: zx1,
    fruit: [
      _LWC,
      _PPG,
      {
        ...XJ,
        money: 8,
      },
    ],
    pick,
  },
  {
    name: 'XUE',
    address: zx1,
    fruit: [_LWC],
    pick,
  },
  {
    name: 'F',
    address: zx3,
    fruit: [LM, MHT],
  },
  {
    name: 'Angelia',
    address: zx1,
    fruit: [_DCM],
    pick,
  },
  {
    name: 'Jane',
    address: zx2,
    fruit: [MHT],
  },
  {
    name: 'summer',
    address: zx1,
    fruit: [_DCM],
    pick,
  },
  {
    name: '团子',
    address: zx2,
    fruit: [
      {
        ...XJ,
        money: 8,
      },
      MHT,
    ],
  },
  {
    name: '瑜',
    address: zj,
    fruit: [
      {
        ...XJ,
        money: 7.3,
      },
      MHT,
    ],
    pick,
  },
  {
    name: 'FacelessMan',
    address: zx1,
    fruit: [_DCM, _XM],
    pick,
  },
  {
    name: '丫丫',
    address: zx2,
    fruit: [_DCM],
  },
  {
    name: '快乐至上',
    address: zx2,
    fruit: [
      _DCM,
      {
        ...XJ,
        money: 8,
      },
    ],
  },
  {
    name: 'kxzn2006',
    address: zj,
    fruit: [
      _DCM,
      {
        ...YJM,
        money: 26.5,
      },
    ],
    pick,
  },
  {
    name: '蓝天',
    address: zj,
    fruit: [_PPG],
    pick,
  },
]

const t2 = [
  {
    name: '露西',
    address: ssw3,
    fruit: [_PPG, _PPG],
  },
  {
    name: '鸢之羽',
    address: ssw1,
    fruit: [
      _DCM,
      {
        ...XH,
        money: 24.5,
      },
    ],
  },
  {
    name: '雪精灵',
    address: ssw3,
    fruit: [_DCM, MHT, LM],
  },
  {
    name: 'Laura',
    address: ssw3,
    fruit: [LM, QX],
  },
  {
    name: '阿崔',
    address: ssw1,
    fruit: [
      {
        ...XH,
        money: 32.5,
      },
      FL,
    ],
  },
  {
    name: 'ccc',
    address: ssw3,
    fruit: [LM, _DCM],
  },
  {
    name: '小周周',
    address: ssw3,
    fruit: [
      MHT,
      {
        ...XH,
        money: 31,
      },
    ],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
