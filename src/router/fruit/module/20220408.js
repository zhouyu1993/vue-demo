import { a, c, d, e, g, h, i, k, l } from '../address'
import {
  PPG,
  SXM,
  HFS100,
  WG,
  LWC,
  XM,
  XTM,
  XH,
  LM,
  DCM,
  GL,
  SDMG,
  SG,
  QX,
  YT,
  XFQ,
} from '../fruit'

const t1 = [
  {
    name: '臧粤',
    address: d,
    fruit: [DCM, GL],
    pick: 1,
    pay: 1,
  },
  {
    name: '蒋杨',
    address: e,
    fruit: [HFS100, DCM],
    pick: 1,
    pay: 1,
  },
  {
    name: '小酒儿',
    address: d,
    fruit: [WG],
    pick: 1,
    pay: 1,
  },
  {
    name: '就知道吃',
    address: d,
    fruit: [
      LWC,
      {
        ...SDMG,
        money: 20.3,
      },
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: '季宝儿',
    address: d,
    fruit: [
      WG,
      QX,
      {
        ...SDMG,
        money: 38,
      },
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: '萱爸',
    address: d,
    fruit: [DCM],
    pick: 1,
    pay: 1,
  },
  {
    name: '快乐至上',
    address: c,
    fruit: [
      {
        ...SG,
        money: 160,
      },
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: '恒',
    address: c,
    fruit: [
      {
        ...SXM,
        money: 27.5,
      },
      WG,
      DCM,
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: '涂小勇',
    address: c,
    fruit: [
      {
        ...PPG,
        money: 35,
      },
      GL,
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: '瑜',
    address: d,
    fruit: [QX],
    pick: 1,
    pay: 1,
  },
  {
    name: 'Goldy',
    address: a,
    fruit: [
      {
        ...PPG,
        money: 35,
      },
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: '岳文卿',
    address: d,
    fruit: [XM, DCM],
    pick: 1,
    pay: 1,
  },
  {
    name: '龚文琴',
    address: a,
    fruit: [
      {
        ...PPG,
        money: 35,
      },
      LWC,
      QX,
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: 'sharon',
    address: d,
    fruit: [LM, DCM],
    pick: 1,
    pay: 1,
  },
  {
    name: '游泳的鱼',
    address: a,
    fruit: [LM, DCM],
    pick: 1,
    pay: 1,
  },
  {
    name: 'pengmin',
    address: a,
    fruit: [
      {
        ...LWC,
        money: 36,
      },
      {
        ...XTM,
        money: 30,
      },
      {
        ...SDMG,
        money: 38,
      },
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: '冯娅',
    address: a,
    fruit: [QX],
    pick: 1,
    pay: 1,
  },
]

const t2 = [
  {
    name: 'MAN LIN',
    address: h,
    fruit: [
      {
        ...DCM,
        money: 40,
      },
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: '小面包',
    address: h,
    fruit: [LWC, DCM],
    pick: 1,
    pay: 1,
  },
  {
    name: '崔子贤，王皓',
    address: i,
    fruit: [
      WG,
      {
        ...XH,
        money: 24,
      },
      QX,
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: 'Honey',
    address: i,
    fruit: [
      DCM,
      {
        ...SDMG,
        money: 18,
      },
    ],
    pick: 1,
    pay: 1,
  },
  {
    name: '孙云玲',
    address: g,
    fruit: [YT],
    pick: 1,
    pay: 1,
  },
  {
    name: '贾',
    address: h,
    fruit: [
      {
        ...XFQ,
        money: 36,
      },
    ],
    pick: 1,
    pay: 1,
  },
]

const t3 = [
  {
    name: '郭先生',
    address: k,
    fruit: [DCM, GL],
    pick: 1,
    pay: 1,
  },
  {
    name: '一夕樱',
    address: l,
    fruit: [DCM],
    pick: 1,
    pay: 1,
  },
  {
    name: '瓜头不瓜',
    address: l,
    fruit: [XM],
    pick: 1,
    pay: 1,
  },
  {
    name: 'Roos Roos PPG Capella 🥀',
    address: l,
    fruit: [QX],
    pick: 1,
    pay: 1,
  },
  {
    name: '雨滴答滴答',
    address: l,
    fruit: [
      {
        ...SXM,
        money: 26,
      },
      LM,
    ],
    pick: 1,
    pay: 1,
  },
]

export default [].concat(t1, t2, t3)
