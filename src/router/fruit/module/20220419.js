import { ssw1, ssw3, zhgj, zj, zx1, zx2, zx3 } from '../address'
import { DCM, FL, LM, LWC, MHT, PPG, WG, XH, XJ, XM, YJM } from '../fruit'

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
const pay = 1

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
  },
  {
    name: 'XUE',
    address: zx1,
    fruit: [_LWC],
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
        money: 10,
      },
      MHT,
    ],
  },
  {
    name: 'FacelessMan',
    address: zx1,
    fruit: [_DCM, _XM],
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
        money: 20,
      },
    ],
  },
]

const t2 = []

const t3 = [
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
        money: 20,
      },
    ],
  },
]

export default [].concat(t1, t2, t3)
