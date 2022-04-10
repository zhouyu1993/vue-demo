import { zxrcgy, mlxq, ssw3 } from '../address'
import { HFS100, XH, PPG, XFQ } from '../fruit'

const t1 = [
  {
    name: 'bxs',
    address: zxrcgy,
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
]

const t3 = []

export default [].concat(t1, t2, t3)
