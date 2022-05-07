import { ssw3, xca3, xcb3, zj, zx1, zx2 } from '../address'
import {
  FL,
  HLG,
  LM,
  PPG,
  QT,
  SG,
  SXM,
  WG,
  XFQ,
  XG,
  XJ,
  XL,
  YJM,
  YT,
} from '../fruit'
import zao from '../zao'

const t1 = [
  zao('臧粤', zj, [[HLG, 18], [XJ, 15], [SG, 15]]),
  zao('瓶子', zj, [[LM, 26]]),
  zao('FacelessMan', zx1, [[PPG, 49], [XG, 42]]),
  zao('Liyr', zj, [[WG, 35], [XJ, 22.5], [XG, 36.6]]),
  zao('阳光男孩', zj, [[XJ, 15], [FL, 10.5]]),
  zao('小恐龙，一把年纪', zj, [[XJ, 11.5], [SXM, 23.5]]),
  zao('Yting', zj, [[FL, 26], [XG, 32]]),
  zao('杨桃', zj, [[XFQ, 17]]),
  zao('岳文卿', zj, [[YJM, 13.6]]),
  zao('瑜', zj, [[LM, 26]]),
  zao('zhx', zx2, [[YJM, 15.2], [XJ, 6.2]]),
  zao('lizy', zx2, [[XL, 19]]),
  zao('Goldy', zx1, [[XG, 37]]),
  zao('颢妈', zx2, [[YJM, 17]]),
  zao('游泳的鱼', zx1, [[XG, 59], [XJ, 13]]),
]

const t2 = [zao('露西', ssw3, [[PPG, 49]])]

const t3 = [
  zao('C', xcb3, [[YT, 35]]),
  zao('马马', xca3, [[QT, 17]]),
  zao('曾小敏', xca3, [[LM, 26], [QT, 17]]),
]

export default [].concat(t1, t2, t3)
