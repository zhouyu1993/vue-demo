import {
  mlxq,
  rfs,
  ssw1,
  ssw3,
  tsgy,
  xca3,
  xcb3,
  ymc,
  zj,
  zx1,
  zx2,
  zx3,
} from '../address'
import {
  CM,
  FL,
  HFS100,
  HFS85,
  LM,
  LWC,
  MHT,
  PPG,
  QX,
  SDMG,
  SXM,
  TM,
  XBL,
  XFQ,
  XG,
  XJ,
  XM,
  YJM,
} from '../fruit'
import newf from '../newf'

const t1 = [
  {
    name: '小恐龙，一把年纪',
    address: zj,
    fruit: [newf(HFS85, 27)],
  },
  {
    name: '栀子花',
    address: zj,
    fruit: [newf(SXM, 22.6)],
  },
  {
    name: 'SaltSweet',
    address: ymc,
    fruit: [newf(FL, 18)],
  },
  {
    name: '悠',
    address: zx3,
    fruit: [newf(FL, 18)],
  },
  {
    name: '涂小勇',
    address: zj,
    fruit: [
      newf(HFS100, 32),
      newf(XJ, 8.8),
      newf(YJM, 12.8),
      newf(PPG, 45),
      newf(LM, 35),
      newf(TM, 15),
      newf(MHT, 10),
    ],
  },
  {
    name: '飞雪',
    address: zx2,
    fruit: [newf(SDMG, 51)],
  },
  {
    name: '冯娅',
    address: zx1,
    fruit: [newf(SXM, 11.5), newf(XBL, 19)],
  },
  {
    name: '丫丫',
    address: zx2,
    fruit: [newf(XBL, 19)],
  },
  {
    name: 'FacelessMan',
    address: zx1,
    fruit: [newf(CM, 15)],
  },
  {
    name: '瑜',
    address: zj,
    fruit: [newf(PPG, 45), newf(XG, 51)],
  },
  {
    name: '燕儿飞',
    address: ymc,
    fruit: [newf(FL, 18)],
  },
  {
    name: '杨',
    address: zj,
    fruit: [newf(XM, 17)],
  },
  {
    name: '栗栗子🎀',
    address: zj,
    fruit: [newf(XM, 17)],
  },
]

const t2 = [
  {
    name: 'ocean',
    address: ssw3,
    fruit: [newf(SXM, 20.5)],
  },
  {
    name: '小面包',
    address: ssw1,
    fruit: [newf(LWC, 22)],
  },
  {
    name: '杜晶',
    address: mlxq,
    fruit: [newf(XBL, 19 * 2), newf(CM, 15), newf(QX, 18)],
  },
  {
    name: '丁倩',
    address: tsgy,
    fruit: [LM],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(PPG, 45 * 2), newf(XFQ, (34 / 2) * 3), newf(YJM, 24)],
  },
  {
    name: 'littlecuicui',
    address: ssw3,
    fruit: [newf(LWC, 22), newf(XBL, 19), newf(XM, 17)],
  },
  {
    name: 'Maggie.G',
    address: ssw3,
    fruit: [newf(FL, 18)],
  },
  {
    name: '雅赞  媛媛👶👶',
    address: ssw1,
    fruit: [newf(XBL, 19), newf(XJ, 9), newf(YJM, 12.3)],
  },
  {
    name: '___゛猛虎嗅蔷薇',
    address: rfs,
    fruit: [newf(XM, 17)],
  },
]

const t3 = [
  {
    name: 'C',
    address: xcb3,
    fruit: [LM],
  },
  {
    name: '曾小敏',
    address: xca3,
    fruit: [newf(TM, 15)],
  },
]

export default [].concat(t1, t2, t3)
