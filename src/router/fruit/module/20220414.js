import {
  fryj,
  rfs,
  ssw1,
  ssw3,
  xca3,
  xcb3,
  zj,
  zx1,
  zx2,
  zx3,
} from '../address'
import {
  DCM,
  GH,
  HFS100,
  LM,
  PPG,
  QX,
  SDMG,
  SXM,
  WG,
  XBL,
  XH,
  XM,
  XTM,
  YJM,
} from '../fruit'

const _DCM = {
  ...DCM,
  money: 15,
}

const _PPG = {
  ...PPG,
  money: 40,
}

const _XM = {
  ...XM,
  money: 28,
}

const pick = 1
const pay = 1

const t1 = [
  {
    name: 'YY',
    address: zx2,
    fruit: [
      {
        ...XTM,
        money: 200,
      },
      {
        ...WG,
        money: 90,
      },
      {
        ...GH,
        money: 70,
      },
    ],
  },
  {
    name: 'bxs',
    address: zj,
    fruit: [_DCM],
  },
  {
    name: 'F',
    address: zx3,
    fruit: [
      {
        ...SXM,
        money: 36,
      },
    ],
  },
  {
    name: '龚文琴',
    address: zx1,
    fruit: [_DCM, _PPG],
  },
  {
    name: '小爽爽',
    address: zj,
    fruit: [XBL],
  },
  {
    name: 'summer',
    address: zx1,
    fruit: [QX],
  },
  {
    name: '瓶子瓶',
    address: zj,
    fruit: [_PPG, _XM],
  },
  {
    name: '坐着抻懒腰',
    address: zj,
    fruit: [_DCM, _XM],
  },
  {
    name: '瑜',
    address: zj,
    fruit: [
      _PPG,
      {
        ...YJM,
        money: 16,
      },
      HFS100,
    ],
  },
  {
    name: '芳芳',
    address: zj,
    fruit: [
      LM,
      {
        ...SXM,
        money: 23,
      },
    ],
  },
  {
    name: '恒',
    address: zx2,
    fruit: [_DCM, HFS100],
  },
  {
    name: '宋昊',
    address: zj,
    fruit: [XTM, LM],
  },
  {
    name: '涂小勇',
    address: zj,
    fruit: [
      {
        ...YJM,
        money: 8,
      },
      _PPG,
    ],
  },
  {
    name: '黄志强',
    address: zx2,
    fruit: [
      XBL,
      XBL,
      _DCM,
      {
        ...SDMG,
        money: 29,
      },
      {
        ...GH,
        money: 13,
      },
    ],
  },
]

const t2 = [
  {
    name: 'Honey',
    address: ssw1,
    fruit: [
      _DCM,
      {
        ...YJM,
        money: 8,
      },
      {
        ...XH,
        money: 24,
      },
    ],
  },
  {
    name: '旺旺孙冰冰🧊',
    address: ssw3,
    fruit: [QX],
  },
  {
    name: '孙云玲',
    address: rfs,
    fruit: [
      {
        ...XH,
        money: 40,
      },
    ],
  },
  {
    name: 'F. TIBTO🌈',
    address: ssw3,
    fruit: [
      _DCM,
      {
        ...YJM,
        money: 14.2,
      },
    ],
  },
  {
    name: 'MAN LIN',
    address: fryj,
    fruit: [_DCM, _DCM],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [_PPG],
  },
  {
    name: '小周周',
    address: fryj,
    fruit: [_DCM, _DCM],
  },
  {
    name: '李倩',
    address: fryj,
    fruit: [_DCM],
  },
]

const t3 = [
  {
    name: '一夕樱',
    address: xcb3,
    fruit: [_DCM],
  },
  {
    name: 'Moon',
    address: xca3,
    fruit: [_DCM],
  },
  {
    name: 'Roos',
    address: xcb3,
    fruit: [XBL],
  },
  {
    name: 'AA',
    address: xcb3,
    fruit: [_DCM],
  },
  {
    name: 'w',
    address: xcb3,
    fruit: [_DCM, XBL],
  },
  {
    name: 'staunch',
    address: xcb3,
    fruit: [_DCM],
  },
]

export default [].concat(t1, t2, t3)
