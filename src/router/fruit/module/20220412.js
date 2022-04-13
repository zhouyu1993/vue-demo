import { ymc, zj, zx1, ssw1, zx2, ssw3, rfs } from '../address'
import {
  XM,
  WG,
  HFS85,
  CM,
  YJM,
  XH,
  LWC,
  LM,
  SXM,
  SDMG,
  QX,
  PPG,
} from '../fruit'

const _WG = {
  ...WG,
  money: 20,
}

const pick = 1
const pay = 1

const t1 = [
  {
    name: '小莉向前冲',
    address: zx1,
    fruit: [
      {
        ...XM,
        money: 60,
      },
      {
        ..._WG,
        money: 40,
      },
      {
        ...HFS85,
        money: 52,
      },
    ],
    pick,
    pay,
  },
  {
    name: '丁丁',
    address: zj,
    fruit: [HFS85],
    pick,
  },
  {
    name: '小恐龙，一把年纪',
    address: zj,
    fruit: [HFS85],
    pick,
    pay,
  },
  {
    name: 'momo',
    address: ymc,
    fruit: [
      CM,
      {
        ...YJM,
        money: 9.4,
      },
    ],
    pick,
    pay,
  },
  {
    name: 'FacelessMan',
    address: zx1,
    fruit: [
      {
        ...YJM,
        money: 15.3,
      },
    ],
    pick,
  },
  {
    name: '涂小勇',
    address: zj,
    fruit: [LWC],
    pick,
    pay,
  },
  {
    name: '瑜',
    address: zj,
    fruit: [
      {
        ...YJM,
        money: 12,
      },
      HFS85,
    ],
    pick,
  },
  {
    name: '就知道吃',
    address: zj,
    fruit: [_WG, LM],
    pick,
  },
  {
    name: '一毫米月光',
    address: zj,
    fruit: [
      {
        ...SXM,
        money: 27,
      },
      LM,
      {
        ...SDMG,
        money: 27.6,
      },
    ],
    pick,
  },
  {
    name: '颢妈',
    address: zx2,
    fruit: [QX],
    pick,
    pay,
  },
  {
    name: 'zhx',
    address: zx2,
    fruit: [_WG],
    pick,
    pay,
  },
  {
    name: 'Fanfan',
    address: zx2,
    fruit: [_WG],
    pick,
    pay,
  },
]

const t2 = [
  {
    name: '阿崔',
    address: ssw1,
    fruit: [
      {
        ...XH,
        money: 23,
      },
      {
        ...YJM,
        money: 10,
      },
    ],
    pick,
    pay,
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [
      PPG,
      XM,
      {
        ...SDMG,
        money: 50,
      },
    ],
    pick,
  },
  {
    name: '雪精灵',
    address: ssw3,
    fruit: [CM, XM],
    pick,
  },
  {
    name: '小面包',
    address: ssw1,
    fruit: [LWC, LWC],
    pick,
  },
  {
    name: '羽羽',
    address: ssw3,
    fruit: [HFS85],
    pick,
  },
  {
    name: '鸢之羽',
    address: ssw1,
    fruit: [
      CM,
      {
        ...SDMG,
        money: 25,
      },
    ],
    pick,
    pay,
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
    pick,
    pay,
  },
  {
    name: 'F. TIBTO🌈',
    address: ssw3,
    fruit: [CM],
    pick,
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
