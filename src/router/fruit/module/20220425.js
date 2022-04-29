import { ssw3, ymc, zj, zx1, zx2, zx3 } from '../address'
import {
  FL,
  HMG,
  LWC,
  MHT,
  SXM,
  TM,
  WG,
  XBL,
  XFQ,
  XG,
  XL,
  XM,
  YJM,
} from '../fruit'
import newf from '../newf'

const t1 = [
  {
    name: '燕儿飞',
    address: ymc,
    fruit: [newf(SXM, 30)],
  },
  {
    name: '舍予',
    address: zx1,
    fruit: [newf(YJM, 18.5)],
  },
  {
    name: '天使布瓦',
    address: zx3,
    fruit: [newf(XM, 19), newf(XBL, 19)],
  },
  {
    name: '酒酿圆子_zxk',
    address: zx3,
    fruit: [newf(WG, 35)],
  },
  {
    name: '萱爸',
    address: zj,
    fruit: [newf(XL, 22)],
  },
  {
    name: '颢妈',
    address: zx2,
    fruit: [newf(YJM, 19.6)],
  },
  {
    name: 'lucy',
    address: zx2,
    fruit: [newf(YJM, 10.8), MHT],
  },
  {
    name: '一毫米月光',
    address: zj,
    fruit: [newf(LWC, 22)],
  },
  {
    name: 'FacelessMan',
    address: zj,
    fruit: [MHT, MHT, newf(XG, 20), newf(HMG, 20)],
  },
  {
    name: '宠儿',
    address: zx2,
    fruit: [newf(YJM, 19), newf(WG, 35), FL, FL],
  },
  {
    name: 'Pengmin',
    address: zx1,
    fruit: [newf(YJM, 9.5), newf(TM, 15), newf(LWC, 28)],
  },
  {
    name: '张文燕',
    address: zj,
    fruit: [newf(XG, 56), newf(XM, 19), newf(YJM, 19)],
  },
]

const t2 = [
  {
    name: 'Laura',
    address: ssw3,
    fruit: [newf(YJM, 20.5), newf(FL, 18)],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(XBL, 19 * 2), newf(XFQ, (34 / 2) * 3)],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
