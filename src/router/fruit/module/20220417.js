import { mlxq, ssw3 } from '../address'
import { HFS95, LM, LWC, MHT, SDMG, SXM, WG, XBL, XH, YJM } from '../fruit'

const t1 = []

const t2 = [
  {
    name: '潇湘',
    address: ssw3,
    fruit: [
      {
        ...SXM,
        money: 32.5,
      },
      HFS95,
      {
        ...SDMG,
        money: 31,
      },
      LWC,
    ],
  },
  {
    name: '奶茶珍珠vivi',
    address: ssw3,
    fruit: [LWC, LM],
  },
  {
    name: 'Laura',
    address: ssw3,
    fruit: [XBL],
  },
  {
    name: 'Eudora',
    address: ssw3,
    fruit: [
      {
        ...WG,
        money: 20,
      },
      {
        ...SDMG,
        money: 22.5,
      },
    ],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [XBL, XBL],
  },
  {
    name: '杜晶',
    address: mlxq,
    fruit: [
      MHT,
      {
        ...XH,
        money: 41,
      },
      {
        ...YJM,
        money: 13,
      },
    ],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
