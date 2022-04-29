import { rfs, ssw1, ssw3, zj, zx1, zx2, zx3 } from '../address'
import {
  CM,
  FL,
  HFS100,
  HFS85,
  LWC,
  MHT,
  PPG,
  QX,
  SXM,
  TM,
  WG,
  XBL,
  XFQ,
  XG,
  XH,
  XJ,
  XM,
  YJM,
} from '../fruit'
import newf from '../newf'

const t1 = [
  {
    name: 'yadong',
    address: zj,
    fruit: [newf(LWC, 22), newf(XJ, 7), newf(SXM, 21)],
  },
  {
    name: '大橙子',
    address: zx2,
    fruit: [
      newf(XG, 64),
      newf(FL, 18),
      newf(TM, (15 / 2) * 3),
      newf(XJ, 9),
      newf(CM, 19),
      newf(FL, 18),
      newf(FL, 18),
      newf(XM, 19),
      newf(TM, 15),
    ],
  },
  {
    name: '小恐龙，一把年纪',
    address: zj,
    fruit: [newf(SXM, 18.7), newf(YJM, 21)],
  },
  {
    name: '杨桃',
    address: zj,
    fruit: [newf(FL, 18)],
  },
  {
    name: '萱爸',
    address: zj,
    fruit: [newf(CM, 19)],
  },
  {
    name: '瑜',
    address: zj,
    fruit: [newf(YJM, 19), newf(XBL, 19)],
  },
  {
    name: '栀子花',
    address: zj,
    fruit: [newf(HFS85, 27), newf(WG, 35)],
  },
  {
    name: 'summer赵',
    address: zx1,
    fruit: [newf(FL, 18), newf(FL, 18)],
  },
  {
    name: 'Liyr',
    address: zj,
    fruit: [newf(XH, 24.5), newf(PPG, 45), newf(SXM, 22)],
  },
  {
    name: '皮皮卡丘',
    address: zj,
    fruit: [newf(TM, 15), newf(YJM, 23.5)],
  },
  {
    name: 'dhm',
    address: zj,
    fruit: [newf(CM, 19)],
  },
  {
    name: '徐女士',
    address: zx2,
    fruit: [newf(XM, 19), newf(QX, 18), newf(XJ, 8.5)],
  },
  {
    name: '颢妈',
    address: zx2,
    fruit: [newf(XM, 19), newf(YJM, 22.5)],
  },
  {
    name: '蒋杨',
    address: zx3,
    fruit: [newf(XJ, 9.6), newf(HFS100, 32)],
  },
]

const t2 = [
  {
    name: '大敏',
    address: ssw1,
    fruit: [newf(XJ, 7.8), newf(FL, 18)],
  },
  {
    name: '玲珑',
    address: rfs,
    fruit: [newf(XJ, 4.1), newf(MHT, 10)],
  },
  {
    name: '雲 ❤',
    address: ssw1,
    fruit: [newf(MHT, 10), newf(XBL, 19)],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(PPG, 45 * 2), newf(XFQ, (34 / 2) * 3)],
  },
  {
    name: 'F. TIBTO🌈',
    address: ssw3,
    fruit: [newf(CM, 19), newf(XM, 19), newf(XJ, 7.4), newf(YJM, 27.5)],
  },
  {
    name: 'Eudora',
    address: ssw3,
    fruit: [newf(XG, 22.6), newf(XJ, 6.8)],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
