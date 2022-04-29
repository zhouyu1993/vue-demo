import { ssw1, ssw3, vivo, xca3, ymc, zj, zx1, zx2, zx3 } from '../address'
import {
  FL,
  HFS85,
  HMG,
  LM,
  LWC,
  PPG,
  QX,
  SG,
  SXM,
  TM,
  WG,
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
    name: '岳文卿',
    address: zj,
    fruit: [
      newf(XG, 15 * 2),
      newf(HMG, 15 * 2),
      newf(FL, 18 * 2),
      newf(SXM, 25 * 2),
      newf(XJ, 30),
      newf(QX, 18),
      newf(PPG, 43),
    ],
  },
  {
    name: '龚文琴',
    address: zx1,
    fruit: [newf(QX, 18), newf(XJ, 15)],
  },
  {
    name: '张文燕',
    address: zx1,
    fruit: [newf(PPG, 43), newf(LM, 19.8)],
  },
  {
    name: '黑瞳',
    address: zj,
    fruit: [newf(LWC, 24), newf(XM, 17), newf(QX, 18), newf(YJM, 18)],
  },
  {
    name: '古金凤',
    address: zj,
    fruit: [newf(XJ, 14.5)],
  },
  {
    name: '臧粤',
    address: zj,
    fruit: [newf(XJ, 14.5)],
  },
  //
  {
    name: 'pengmin',
    address: zx1,
    fruit: [newf(TM, 15), newf(XJ, 6.8)],
  },
  {
    name: '尧望巍来',
    address: zj,
    fruit: [newf(PPG, 43), newf(XG, 39)],
  },
  {
    name: 'momo',
    address: ymc,
    fruit: [newf(FL, 18)],
  },
  {
    name: '杨桃',
    address: zj,
    fruit: [newf(FL, 18)],
  },
  {
    name: 'yadong',
    address: zj,
    fruit: [newf(FL, 18), newf(XFQ, 34), newf(XJ, 6.2)],
  },
  {
    name: 'bxs',
    address: zj,
    fruit: [newf(PPG, 43 * 2), newf(XJ, 14)],
  },
  {
    name: 'summer赵',
    address: zx1,
    fruit: [newf(HMG, 18)],
  },
  {
    name: '酒酿圆子_zxk',
    address: zx3,
    fruit: [newf(PPG, 43), newf(SXM, 9.8)],
  },
  {
    name: 'Yting',
    address: zj,
    fruit: [newf(LM, 19.8), newf(XJ, 6.5)],
  },
  {
    name: '游泳的鱼',
    address: zx1,
    fruit: [newf(TM, 15), newf(XJ, 9)],
  },
  {
    name: '恒',
    address: zx2,
    fruit: [newf(XM, 17), newf(HFS85, 27)],
  },
  {
    name: 'xzh',
    address: zx1,
    fruit: [
      newf(PPG, 43),
      newf(YJM, 30),
      newf(FL, 18),
      newf(XH, 20),
      newf(XJ, 6.6),
    ],
  },
  {
    name: 'kxzn2006',
    address: zj,
    fruit: [newf(PPG, 43 * 2), newf(LM, 19.8), newf(XJ, 6.6)],
  },
  {
    name: '小凡',
    address: zx2,
    fruit: [newf(XG, 15 * 2), newf(HMG, 15), newf(FL, 18), newf(SXM, 25)],
  },
  {
    name: '柠檬',
    address: zj,
    fruit: [newf(XJ, 15.2)],
  },
  {
    name: '丫丫',
    address: zx2,
    fruit: [newf(LM, 19.8), newf(XJ, 12.2), newf(QX, 18)],
  },
  {
    name: '颢妈',
    address: zx2,
    fruit: [newf(LM, 19.8), newf(XM, 17), newf(XJ, 16.2), newf(YJM, 21)],
  },
  {
    name: 'miss',
    address: zx1,
    fruit: [newf(XM, 17), newf(FL, 18), newf(XJ, 10)],
  },
  {
    name: 'FacelessMan',
    address: zx1,
    fruit: [newf(WG, 35), newf(XG, 15), newf(HMG, 15), newf(FL, 18)],
  },
  {
    name: '小恐龙，一把年纪',
    address: zj,
    fruit: [newf(SXM, 42), newf(QX, 18)],
  },
  {
    name: '姗',
    address: zj,
    fruit: [newf(SG, 20), newf(FL, 18)],
  },
  {
    name: 'Fanfan',
    address: zx2,
    fruit: [newf(XG, 21.3), newf(XJ, 13.5), newf(HMG, 16.5), newf(YJM, 16.5)],
  },
  {
    name: '就知道吃',
    address: zj,
    fruit: [newf(XG, 46)],
  },
  {
    name: '包包',
    address: vivo,
    fruit: [newf(XG, 15)],
  },
]

const t2 = [
  {
    name: '河清海晏',
    address: ssw3,
    fruit: [newf(LM, 19.8)],
  },
  {
    name: '木木',
    address: ssw3,
    fruit: [newf(XM, 17), newf(QX, 18)],
  },
  {
    name: 'warm',
    address: ssw3,
    fruit: [newf(YJM, 15.2), newf(LM, 19.8), newf(XH, 21), newf(XJ, 7.6)],
  },
  {
    name: 'Honey',
    address: ssw1,
    fruit: [
      newf(XM, 17),
      newf(SXM, 10.4),
      newf(HMG, 16.4),
      newf(YJM, 7.7),
      newf(XJ, 6),
    ],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(PPG, 43 * 2)],
  },
  {
    name: '龙女',
    address: ssw1,
    fruit: [newf(LM, 19.8), newf(XH, 19)],
  },
]

const t3 = [
  {
    name: 'Li.Zhang',
    address: xca3,
    fruit: [newf(LM, 19.8), newf(XM, 17), newf(LWC, 24), newf(TM, 15)],
  },
  {
    name: 'Roos Roos A Capella 🥀',
    address: xca3,
    fruit: [newf(SG, 20)],
  },
]

export default [].concat(t1, t2, t3)
