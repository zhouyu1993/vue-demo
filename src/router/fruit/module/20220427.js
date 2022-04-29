import { fryj, ssw1, ssw3, xcb3, ymc, zj, zx1, zx2 } from '../address'
import {
  FL,
  HMG,
  LM,
  LWC,
  PPG,
  QX,
  SXM,
  XBL,
  XG,
  XJ,
  XL,
  XM,
  YJM,
} from '../fruit'
import newf from '../newf'

const _LM = newf(LM, 25)
const _PPG = newf(PPG, 43)
const _QX = newf(QX, 18)
const _LWC = newf(LWC, 24)

const t1 = [
  {
    name: 'momo',
    address: ymc,
    fruit: [_LM],
  },
  {
    name: '龚文琴',
    address: zx1,
    fruit: [_PPG],
  },
  {
    name: '舍予',
    address: zx1,
    fruit: [_LM, newf(YJM, 19)],
  },
  {
    name: '岳文卿',
    address: zj,
    fruit: [_LM, newf(XG, 54)],
  },
  {
    name: '小恐龙，一把年纪',
    address: zj,
    fruit: [_QX, _LM],
  },
  {
    name: '杨桃',
    address: zj,
    fruit: [_LM],
  },
  {
    name: '栀子花',
    address: zj,
    fruit: [_LM],
  },
  {
    name: '一米阳光',
    address: zj,
    fruit: [_LM, _LWC],
  },
  {
    name: '小酒儿',
    address: zj,
    fruit: [_LM],
  },
  {
    name: '阳光男孩',
    address: zj,
    fruit: [newf(HMG, 20), FL, newf(XJ, 14)],
  },
  {
    name: '小莉向前冲',
    address: zx1,
    fruit: [newf(XJ, 11.4)],
  },
  {
    name: 'shar0n',
    address: zj,
    fruit: [_LM],
  },
  {
    name: 'BOnnieBecky',
    address: zj,
    fruit: [newf(LM, 140)],
  },
  {
    name: 'yadong',
    address: zj,
    fruit: [newf(XJ, 7)],
  },
  {
    name: '颢妈',
    address: zx2,
    fruit: [newf(XM, 17), _LM],
  },
  {
    name: 'FacelessMan',
    address: zx1,
    fruit: [_LM],
  },
  {
    name: '古金凤',
    address: zj,
    fruit: [newf(XJ, 7.9)],
  },
  {
    name: '芳芳',
    address: zj,
    fruit: [_LM, newf(XM, 17)],
  },
  {
    name: 'J a ne',
    address: zx2,
    fruit: [_PPG],
  },
  {
    name: 'dhm',
    address: zj,
    fruit: [_LM],
  },
  {
    name: 'bxs',
    address: zx2,
    fruit: [newf(XL, 9)],
  },
  {
    name: 'summer',
    address: zx2,
    fruit: [newf(XBL, 18)],
  },
  {
    name: 'Goldy',
    address: zx1,
    fruit: [_LM, newf(YJM, 9)],
  },
  {
    name: '游泳的鱼',
    address: zx1,
    fruit: [_LM, newf(YJM, 6.7)],
  },
  {
    name: 'summer2',
    address: zx1,
    fruit: [_QX, newf(SXM, 15.3)],
  },
  {
    name: '皮皮卡丘',
    address: zj,
    fruit: [_LM],
  },
]

const t2 = [
  {
    name: '雲 ❤ ',
    address: ssw1,
    fruit: [newf(LM, 25)],
  },
  {
    name: 'Z',
    address: fryj,
    fruit: [newf(LM, 25)],
  },
  {
    name: '97-603',
    address: fryj,
    fruit: [newf(LM, 25)],
  },
  {
    name: 'YR',
    address: ssw3,
    fruit: [newf(LM, 140)],
  },
  {
    name: 'ocean',
    address: ssw3,
    fruit: [newf(LM, 25), newf(SXM, 20.8)],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(PPG, 43 * 2)],
  },
  {
    name: 'brucezyz',
    address: ssw1,
    fruit: [newf(LM, 140)],
  },
  {
    name: 'brucezyz',
    address: ssw1,
    fruit: [newf(LM, 140)],
  },
]

const t3 = [
  {
    name: 'C',
    address: xcb3,
    fruit: [newf(LM, 25)],
  },
  {
    name: 'staunch',
    address: xcb3,
    fruit: [newf(XBL, 18)],
  },
  {
    name: '雨滴答滴答',
    address: xcb3,
    fruit: [newf(LM, 25), newf(XJ, 5.3), newf(XBL, 18)],
  },
  {
    name: '一夕樱',
    address: xcb3,
    fruit: [newf(LM, 25)],
  },
]

export default [].concat(t1, t2, t3)
