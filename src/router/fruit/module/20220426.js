import { fryj, ssw1, ssw3, tsgy, zj, zx1, zx2, zx3 } from '../address'
import {
  CM,
  FL,
  HFS85,
  LM,
  LWC,
  PPG,
  QX,
  SG,
  SXM,
  WG,
  XBL,
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
    fruit: [newf(XJ, 8)],
  },
  {
    name: 'summer',
    address: zj,
    fruit: [newf(XJ, 19.5)],
  },
  {
    name: '怡泉',
    address: zj,
    fruit: [newf(XJ, 16)],
  },
  {
    name: '岳文卿',
    address: zj,
    fruit: [newf(XJ, 16)],
  },
  {
    name: '刘先生',
    address: zj,
    fruit: [newf(CM, 16)],
  },
  {
    name: '巧手仁心',
    address: zj,
    fruit: [newf(CM, 16)],
  },
  {
    name: '宋昊',
    address: zj,
    fruit: [newf(SXM, 25.3), newf(QX, 18)],
  },
  {
    name: '悠',
    address: zx3,
    fruit: [newf(FL)],
  },
  {
    name: '荷塘月色',
    address: zx2,
    fruit: [newf(PPG, 43)],
  },
  {
    name: '龚文琴',
    address: zx1,
    fruit: [newf(XBL, 18)],
  },
  {
    name: 'F',
    address: zx3,
    fruit: [newf(HFS85, 27), newf(QX, 18)],
  },
  {
    name: 'kxzn2006',
    address: zj,
    fruit: [newf(PPG, 43), newf(XH)],
  },
  {
    name: '机智姐么么哒✨',
    address: zj,
    fruit: [newf(SG, 20)],
  },
  {
    name: '瑜',
    address: zj,
    fruit: [newf(PPG, 43), newf(YJM, 16.5)],
  },
  {
    name: 'Hammer',
    address: zx2,
    fruit: [newf(XJ, 9), newf(XM, 17)],
  },
  {
    name: '一只榴莲',
    address: zx1,
    fruit: [newf(PPG, 43), newf(PPG, 43)],
  },
  {
    name: 'summer2',
    address: zx1,
    fruit: [newf(LWC, 22)],
  },
  {
    name: '坐着抻懒腰',
    address: zj,
    fruit: [newf(XBL, 18), newf(LM, 35), newf(QX, 18)],
  },
  {
    name: '燕儿飞',
    address: zj,
    fruit: [newf(YJM), newf(QX, 18)],
  },
  {
    name: 'SaltSweet',
    address: zj,
    fruit: [newf(YJM), newf(LM, 35)],
  },
  {
    name: '胡小琴（Cathy）',
    address: zj,
    fruit: [newf(PPG, 43)],
  },
]

const t2 = [
  {
    name: 'MAN LIN',
    address: fryj,
    fruit: [newf(CM, 16), newf(LWC, 22)],
  },
  {
    name: '韩歹歹',
    address: ssw3,
    fruit: [
      newf(WG, 35),
      newf(LM, 17.5),
      newf(XJ, 16),
      newf(QX, 18),
      newf(XM, 19),
      newf(YJM, 9),
    ],
  },
  {
    name: '大敏',
    address: ssw1,
    fruit: [newf(XH, 27.8), newf(XJ, 8.7)],
  },
  {
    name: '꧁༺盼༒盼༻꧂',
    address: fryj,
    fruit: [newf(CM, 16 * 2), newf(XJ, 16)],
  },
  {
    name: 'F. TIBTO🌈 ',
    address: ssw3,
    fruit: [newf(CM, 16)],
  },
  {
    name: '丁倩',
    address: tsgy,
    fruit: [newf(LM, 35)],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(PPG, 43 * 4)],
  },
  {
    name: '雪精灵',
    address: ssw3,
    fruit: [newf(CM, 16)],
  },
  {
    name: '旺旺孙冰冰🧊',
    address: ssw3,
    fruit: [newf(FL, 18), newf(PPG, 43)],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
