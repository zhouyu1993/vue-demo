import { fryj, ssw1, ssw3, xca3, xcb3, zj, zx1, zx2 } from '../address'
import {
  FL,
  HFS,
  HLG,
  JG,
  LM,
  LWC,
  PPG,
  QX,
  WG,
  XG,
  XH,
  XJ,
  XL,
  YJM,
  YT,
} from '../fruit'
import newf from '../newf'
import zao from '../zao'

const t1 = [
  {
    name: '龚文琴',
    address: zx1,
    fruit: [newf(PPG, 49)],
  },
  {
    name: '小莉向前冲',
    address: zx1,
    fruit: [newf(XG, 53), newf(XJ, 45), newf(XJ, 13.5), newf(HFS, 11)],
  },
  {
    name: 'yadong',
    address: zj,
    fruit: [newf(XJ, 12.9)],
  },
  {
    name: '柠檬',
    address: zj,
    fruit: [newf(XJ, 11.6)],
  },
  {
    name: '巧手仁心',
    address: zj,
    fruit: [newf(WG, 35)],
  },
  zao('尧望巍来', zj, [[JG], [XL, 19]]),
  zao('宠儿', zx2, [[YT, 35]]),
  zao('0330weekly', zj, [[HFS, 27]]),
  zao('瓶子瓶', zj, [[LWC, 24], [YJM, 16.5]]),
  zao('John', zj, [[LWC, 24], [HFS, 27]]),
  zao('皮皮卡丘', zj, [[LWC, 24]]),
  zao('雨', zx1, [[LWC, 24], [XH, 31]]),
  zao('西瓜芝麻晴晴', zj, [[WG, 35]]),
  zao('荷塘月色', zx2, [[YT, 35]]),
  zao('一只榴莲', zx1, [[HFS, 16.6]]),
  zao('丫丫', zx2, [[XJ, 20], [HFS, 11.6], [LM, 26]]),
]

const t2 = [
  zao('露西', ssw3, [[PPG, 49]]),
  zao('福润园32栋110', fryj, [[PPG, 49], [WG, 35]]),
  zao('旺旺孙冰冰🧊', ssw3, [[FL, 26]]),
  zao('雪精灵', ssw3, [[HLG, 18]]),
  zao('晶针姑🍄', ssw3, [[YJM, 8.4], [XH, 30.3]]),
  zao('阿崔', ssw1, [[HFS, 27], [LM, 26 * 2], [QX, 18]]),
  zao('龙女', ssw1, [[HLG, 18], [HFS, 27]]),
]

const t3 = [
  zao('郭先生', xca3, [[FL, 26]]),
  zao('荷包蛋爱笑', xcb3, [[HFS, 27]]),
]

export default [].concat(t1, t2, t3)
