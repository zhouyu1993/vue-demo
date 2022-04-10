import { c, d, h, j } from '../address'
import { PPG, LM, XM, WG, XFQ } from '../fruit'

const _WG = {
  ...WG,
  money: 20,
}

const t1 = [
  {
    name: '杨琦',
    address: c,
    fruit: [
      PPG,
      {
        ...LM,
        money: 70,
      },
    ],
    pick: 1,
    // pay: 1,
  },
  {
    name: '王磊',
    address: d,
    fruit: [XM, _WG],
    pick: 1,
    pay: 1,
  },
]

const t2 = [
  {
    name: '小周周',
    address: h,
    fruit: [_WG],
    pick: 1,
    // pay: 1,
  },
  {
    name: '金女士',
    address: j,
    fruit: [
      LM,
      {
        ...PPG,
        money: 35,
      },
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: '星星',
    address: j,
    fruit: [
      {
        ...LM,
        money: 17.5,
      },
      _WG,
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: '木木',
    address: j,
    fruit: [XM],
    pick: 1,
    // pay: 1,
  },
  {
    name: '露西',
    address: j,
    fruit: [PPG, XFQ, PPG],
    pick: 1,
    // pay: 1,
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
