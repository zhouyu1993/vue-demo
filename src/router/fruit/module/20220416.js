import { rfs, ssw3, zhgj, zj } from '../address'
import {
  HFS100,
  LM,
  LWC,
  MHT,
  PPG,
  QX,
  SDMG,
  SXM,
  WG,
  XBL,
  YJM,
} from '../fruit'

const _PPG = {
  ...PPG,
  money: 40,
}

const t1 = [
  {
    name: '瑜',
    address: zj,
    fruit: [
      {
        ...YJM,
        money: 20,
      },
      QX,
    ],
  },
  {
    name: '尧望巍来',
    address: zj,
    fruit: [
      MHT,
      {
        ...SXM,
        money: 21.5,
      },
    ],
  },
  {
    name: 'John',
    address: zj,
    fruit: [LWC],
  },
  {
    name: 'dhm',
    address: zj,
    fruit: [QX],
  },
  {
    name: '杨',
    address: zj,
    fruit: [LM],
  },
  {
    name: '瓶子瓶',
    address: zj,
    fruit: [HFS100, HFS100],
  },
]

const t2 = [
  {
    name: '牧牧',
    address: ssw3,
    fruit: [
      XBL,
      {
        ...WG,
        money: 24,
      },
    ],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [
      _PPG,
      _PPG,
      {
        ...YJM,
        money: 24,
      },
      {
        ...SDMG,
        money: 24,
      },
    ],
  },
  {
    name: '霞姐',
    address: zhgj,
    fruit: [MHT, MHT],
  },
  {
    name: '小淼淼',
    address: rfs,
    fruit: [_PPG],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
