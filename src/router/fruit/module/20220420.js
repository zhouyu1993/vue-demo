import { ssw1, ssw3, xca3, zhgj, zj, zx1, zx2 } from '../address'
import {
  CM,
  CM15,
  FL,
  HFS100,
  LWC,
  LWC22,
  PPG,
  PPG45,
  QX,
  SXM,
  WG,
  WG35,
  XBL,
  XFQ,
  XH,
  XJ,
  XM,
  YJM,
} from '../fruit'
import newf from '../newf'

const t1 = [
  {
    name: '就知道吃',
    address: zj,
    fruit: [LWC22],
  },
  {
    name: '张文燕',
    address: zj,
    fruit: [
      PPG45,
      CM15,
      {
        ...XJ,
        money: 13,
      },
      FL,
    ],
  },
  {
    name: '小恐龙，一把年纪',
    address: zj,
    fruit: [
      {
        ...HFS100,
        money: 30,
      },
      newf(XM, 17),
    ],
  },
  {
    name: 'kxzn2006',
    address: zj,
    fruit: [CM15, CM15],
  },
  {
    name: '姗',
    address: zj,
    fruit: [XBL],
  },
  {
    name: '一只榴莲',
    address: zx1,
    fruit: [newf(WG, 35)],
  },
  {
    name: '瑜',
    address: zj,
    fruit: [newf(YJM, 22.3)],
  },
  {
    name: 'lizy',
    address: zx2,
    fruit: [newf(HFS100, 30), newf(XJ, 8)],
  },
  {
    name: 'Fanfan',
    address: zx2,
    fruit: [newf(XM, 17), newf(XJ, 8.3)],
  },
  {
    name: '小莉向前冲',
    address: zx2,
    fruit: [newf(XJ, 39), newf(XM, 17 * 2), XBL],
  },
]

const t2 = [
  {
    name: '旺旺孙冰冰🧊',
    address: ssw3,
    fruit: [FL],
  },
  {
    name: '大敏',
    address: ssw1,
    fruit: [
      WG35,
      {
        ...XJ,
        money: 7.8,
      },
    ],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(PPG, 45 * 4), newf(XFQ, 34)],
  },
  {
    name: '蓓蕊童菱',
    address: ssw3,
    fruit: [newf(XFQ, 21), newf(XH, 22)],
  },
  {
    name: '静待雨落',
    address: ssw1,
    fruit: [newf(LWC, 22 * 2), newf(QX, 18)],
  },
  {
    name: '吴亚琴',
    address: zhgj,
    fruit: [newf(WG, 35), newf(XJ, 4.2), newf(LWC, 22)],
  },
  {
    name: 'ccc',
    address: ssw3,
    fruit: [newf(CM, 15)],
  },
  {
    name: '木木',
    address: ssw3,
    fruit: [newf(SXM, 13), newf(XH, 30)],
  },
  {
    name: 'Eudora',
    address: ssw3,
    fruit: [newf(SXM, 12)],
  },
]

const t3 = [
  {
    name: 'Li.Zhang',
    address: xca3,
    fruit: [newf(PPG, 45), newf(HFS100, 30)],
  },
  {
    name: '曾小敏',
    address: xca3,
    fruit: [newf(XM, 17), newf(XH, 18.6), newf(XBL, 22)],
  },
]

export default [].concat(t1, t2, t3)
