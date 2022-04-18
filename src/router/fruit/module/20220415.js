import { b, fryj, ssw1, ssw3, ymc, zj, zx1, zx2, zx3 } from '../address'
import {
  CM,
  GH,
  LM,
  LWC,
  MHT,
  PPG,
  QX,
  SG,
  SXM,
  WG,
  XBL,
  XFQ,
  XH,
  XM,
  XTM,
  YJM,
} from '../fruit'

const _XM = {
  ...XM,
  money: 25,
}

const _PPG = {
  ...PPG,
  money: 40,
}

const _XFQ = {
  ...XFQ,
  money: 34,
}

const t1 = [
  {
    name: 'momo',
    address: ymc,
    fruit: [
      _XM,
      {
        ...YJM,
        money: 10,
      },
    ],
  },
  {
    name: '龚文琴',
    address: zx1,
    fruit: [LM, QX],
  },
  {
    name: '臧粤',
    address: zj,
    fruit: [MHT, XBL],
  },
  {
    name: 'Goldy',
    address: zx1,
    fruit: [LM, _XM],
  },
  {
    name: 'YY',
    address: zx2,
    fruit: [
      LM,
      XBL,
      {
        ...WG,
        money: 12,
      },
      {
        ...SG,
        money: 17,
      },
    ],
  },
  {
    name: 'kxzn2006',
    address: zj,
    fruit: [
      _PPG,
      _PPG,
      {
        ...XH,
        money: 88,
      },
    ],
  },
  {
    name: '蒋杨',
    address: zx3,
    fruit: [
      {
        ...SXM,
        money: 39,
      },
    ],
  },
  {
    name: 'YJTX_ZJ🍭',
    address: zx1,
    fruit: [LWC, _XM],
  },
  {
    name: '天使布瓦',
    address: zx3,
    fruit: [_XM, XBL],
  },
  {
    name: 'pengmin',
    address: zx1,
    fruit: [XTM, XTM, CM, CM],
  },
  {
    name: '季宝儿',
    address: zj,
    fruit: [
      _XFQ,
      XTM,
      {
        ...GH,
        money: 30,
      },
    ],
  },
  {
    name: '多瑞',
    address: zx1,
    fruit: [LWC, _XM],
  },
  {
    name: '瑜',
    address: zj,
    fruit: [
      {
        ...YJM,
        money: 13,
      },
    ],
  },
  {
    name: '一纸留年',
    address: zx1,
    fruit: [
      _PPG,
      _PPG,
      {
        ...SXM,
        money: 23,
      },
    ],
  },
  {
    name: 'miss',
    address: b,
    fruit: [
      {
        ...YJM,
        money: 13.4,
      },
      _XM,
      XBL,
    ],
  },
  {
    name: '杨小姐的春夏秋冬',
    address: ymc,
    fruit: [_PPG],
  },
  {
    name: 'lizy',
    address: zx2,
    fruit: [_PPG],
  },
  {
    name: '飞雪',
    address: zx2,
    fruit: [
      XBL,
      {
        ...WG,
        money: 30,
      },
      {
        ...LM,
        money: 17.5,
      },
    ],
  },
  {
    name: '游泳的鱼',
    address: zx1,
    fruit: [XTM, XTM, _XM, CM, LWC],
  },
]

const t2 = [
  {
    name: '97栋603',
    address: fryj,
    fruit: [_PPG, LWC],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [_PPG, _PPG, _PPG],
  },
  {
    name: '雲 ❤',
    address: ssw1,
    fruit: [_PPG],
  },
  {
    name: 'Vicky',
    address: fryj,
    fruit: [_PPG],
  },
  {
    name: '香',
    address: ssw3,
    fruit: [CM],
  },
  {
    name: '阿崔',
    address: ssw1,
    fruit: [
      {
        ...XH,
        money: 29,
      },
      {
        ...YJM,
        money: 29,
      },
    ],
  },
  {
    name: 'F. TIBTO🌈',
    address: ssw3,
    fruit: [CM],
  },
  {
    name: 'Ocean',
    address: ssw3,
    fruit: [
      {
        ...XH,
        money: 28,
      },
    ],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
