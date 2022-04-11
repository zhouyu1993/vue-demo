import { zj, zx1, zx2, zx3, fryj, ssw3, xcb3, ssw1 } from '../address'
import {
  LM,
  GL,
  WG,
  LWC,
  HFS85,
  XM,
  SXM,
  DCM,
  PPG,
  XH,
  YT,
  HFS100,
  QX,
} from '../fruit'

const pick = 1
const pay = 1

const _WG = {
  ...WG,
  money: 20,
}

const t1 = [
  {
    name: '姗',
    address: zj,
    fruit: [LM],
    pick,
    pay,
  },
  {
    name: 'Liyr',
    address: zj,
    fruit: [GL],
    pick,
    pay,
  },
  {
    name: '刘先生',
    address: zj,
    fruit: [_WG],
    pick,
  },
  {
    name: '宋昊',
    address: zj,
    fruit: [LM, LWC],
    pick,
    pay,
  },
  {
    name: 'Anne',
    address: zx1,
    fruit: [HFS85, _WG],
    pick,
  },
  {
    name: '黑瞳',
    address: zj,
    fruit: [HFS85, XM],
    pick,
    pay,
  },
  {
    name: 'pengmin',
    address: zx1,
    fruit: [
      {
        ...LWC,
        money: 36,
      },
    ],
    pick,
  },
  {
    name: 'F',
    address: zx3,
    fruit: [
      {
        ...SXM,
        money: 43,
      },
    ],
    pick,
    pay,
  },
  {
    name: 'sharon',
    address: zj,
    fruit: [HFS100, DCM],
    pick,
    pay,
  },
  {
    name: 'xianping',
    address: zx2,
    fruit: [HFS85],
    pick,
  },
  {
    name: '胡小琴',
    address: zj,
    fruit: [PPG],
    pick,
  },
  {
    name: '栀子花',
    address: zj,
    fruit: [HFS85],
    pick,
  },
  {
    name: '瑜',
    address: zj,
    fruit: [PPG],
    pick,
  },
  {
    name: 'kxzn2006',
    address: zj,
    fruit: [
      PPG,
      {
        ...XH,
        money: 42,
      },
    ],
    pick,
  },
  {
    name: 'YJTX_ZJ🍭',
    address: zx1,
    fruit: [PPG],
    pick,
    pay,
  },
  {
    name: '坐着抻懒腰',
    address: zj,
    fruit: [GL],
    pick,
    pay,
  },
  {
    name: '萱爸',
    address: zj,
    fruit: [DCM, GL],
    pick,
  },
  {
    name: '小娇',
    address: zx1,
    fruit: [PPG],
    pick,
  },
]

const t2 = [
  {
    name: 'MAN LIN',
    address: fryj,
    fruit: [
      {
        ...DCM,
        money: 40,
      },
    ],
    pick,
  },
  {
    name: '抱抱熊',
    address: fryj,
    fruit: [DCM],
    pick,
    pay,
  },
  {
    name: 'lqy',
    address: ssw3,
    fruit: [HFS85],
    pick,
    pay,
  },
  {
    name: '小周周',
    address: fryj,
    fruit: [DCM, _WG],
    pick,
    pay,
  },
  {
    name: '朱颜辞镜',
    address: fryj,
    fruit: [DCM, XM],
    pick,
  },
  {
    name: 'Laura',
    address: ssw3,
    fruit: [DCM],
    pick,
    pay,
  },
  {
    name: '小手😘🇨🇳',
    address: ssw3,
    fruit: [
      {
        ...XH,
        money: 19.5,
      },
    ],
    pick,
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [
      {
        ...PPG,
        money: 100,
      },
      QX,
    ],
    pick,
  },
  {
    name: '牧牧',
    address: ssw3,
    fruit: [_WG, XM],
    pick,
    pay,
  },
  {
    name: '韩歹歹',
    address: ssw3,
    fruit: [_WG],
    pick,
    pay,
  },
  {
    name: '王皓',
    address: ssw1,
    fruit: [
      {
        ...XH,
        money: 18.6,
      },
    ],
    pick,
  },
  {
    name: '晶针姑🍄',
    address: ssw3,
    fruit: [DCM],
    pick,
    pay,
  },
]

const t3 = [
  {
    name: '荷包蛋爱笑',
    address: xcb3,
    fruit: [YT],
    pick,
  },
]

export default [].concat(t1, t2, t3)
