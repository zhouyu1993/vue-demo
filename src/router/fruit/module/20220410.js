import { rcgy, mlxq, ssw3, fryj, ssw1 } from '../address'
import { HFS100, XH, PPG, XFQ, LWC, WG, HFS85, QX } from '../fruit'

const t1 = [
  {
    name: 'bxs',
    address: rcgy,
    fruit: [HFS100],
    pick: 1,
    // pay: 1,
  },
]

const t2 = [
  {
    name: '杜晶',
    address: mlxq,
    fruit: [
      {
        ...XH,
        money: 27,
      },
      HFS100,
      {
        ...PPG,
        money: 35,
      },
    ],
    pick: 1,
    // pay: 1,
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [
      PPG,
      XFQ,
      {
        ...XH,
        money: 42,
      },
    ],
    pick: 1,
    // pay: 1,
  },
  {
    name: '孙芳',
    address: fryj,
    fruit: [HFS100, LWC],
  },
  {
    name: '潇湘',
    address: ssw3,
    fruit: [WG, HFS85],
  },
  {
    name: '大敏',
    address: ssw1,
    fruit: [
      {
        ...XH,
        money: 27,
      },
      HFS85,
      QX,
    ],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
