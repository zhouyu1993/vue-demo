import { fryj, ssw3, ymc, zj, zx1, zx2 } from '../address'
import {
  HFS85,
  LWC,
  MHT,
  PPG,
  QX,
  SDMG,
  SXM,
  TM,
  XBL,
  XG,
  XJ,
  XL,
  XM,
  YJM,
} from '../fruit'
import newf from '../newf'

const t1 = [
  {
    name: 'FacelessMan',
    address: zx1,
    fruit: [
      {
        ...YJM,
        money: 17,
      },
    ],
  },
  {
    name: '丁丁',
    address: zj,
    fruit: [
      {
        ...XL,
        money: 22,
      },
    ],
  },
  {
    name: '燕儿飞 ',
    address: ymc,
    fruit: [
      {
        ...HFS85,
        money: 27,
      },
    ],
  },
  {
    name: '小豆丁',
    address: zj,
    fruit: [
      {
        ...HFS85,
        money: 27,
      },
      MHT,
    ],
  },
  {
    name: '瑜',
    address: zj,
    fruit: [
      {
        ...HFS85,
        money: 27,
      },
      {
        ...XJ,
        money: 8,
      },
    ],
  },
  {
    name: '小恐龙，一把年纪',
    address: zj,
    fruit: [
      {
        ...QX,
        money: 18,
      },
    ],
  },
  {
    name: 'summer',
    address: zx1,
    fruit: [newf(SXM, 20), newf(YJM, 15.2), newf(PPG, 45)],
  },
  {
    name: '瓶子瓶',
    address: zj,
    fruit: [newf(LWC, 22)],
  },
  {
    name: '岳文卿',
    address: zj,
    fruit: [newf(XM, 19), newf(QX, 18), newf(YJM, 16)],
  },
  {
    name: 'Anne',
    address: zx1,
    fruit: [newf(HFS85, 27), MHT],
  },
  {
    name: 'dhm',
    address: zj,
    fruit: [newf(HFS85, 27)],
  },
  {
    name: '游泳的鱼',
    address: zx1,
    fruit: [newf(TM, 15)],
  },
  {
    name: 'Goldy',
    address: zx1,
    fruit: [newf(PPG, 45)],
  },
  {
    name: '一只榴莲',
    address: zx1,
    fruit: [newf(XBL, 19), newf(XG, 59)],
  },
  {
    name: 'lizy',
    address: zx2,
    fruit: [newf(SDMG, 23.6)],
  },
  {
    name: '皮皮卡丘',
    address: zj,
    fruit: [newf(XG, 51)],
  },
  {
    name: 'J a ne',
    address: zj,
    fruit: [newf(PPG, 45), newf(QX, 18)],
  },
  {
    name: '张文燕',
    address: zj,
    fruit: [newf(PPG, 45), newf(QX, 18)],
  },
  {
    name: '颢妈',
    address: zx2,
    fruit: [newf(YJM, 22.5)],
  },
]

const t2 = [
  {
    name: 'F. TIBTO🌈',
    address: ssw3,
    fruit: [newf(XJ, 7), newf(YJM, 40)],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(PPG, 90), newf(XJ, 30), newf(YJM, 20)],
  },
  {
    name: '110',
    address: fryj,
    fruit: [newf(MHT, 20)],
  },
  {
    name: '楼上202',
    address: fryj,
    fruit: [newf(PPG, 45), newf(YJM, 10)],
  },
  {
    name: 'Maggie.G',
    address: ssw3,
    fruit: [newf(XJ, 9.2)],
  },
  {
    name: 'MAN LIN',
    address: fryj,
    fruit: [newf(PPG, 45)],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
