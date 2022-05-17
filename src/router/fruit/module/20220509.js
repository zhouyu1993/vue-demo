import { fryj, vivo, xca3, zj, zx1, zx2, zx3 } from '../address'
import { FL, HFS, HLG, LM, LWC, SXM, WG, XFQ, XG, XJ, YJM, YT } from '../fruit'
import zao from '../zao'

const t1 = [
  zao('一只榴莲', zx1, [[HFS, 27]]),
  zao('小娇', zx1, [[HFS, 27]]),
  zao('宠儿', zx2, [[YT, 35 * 2]]),
  zao('岳文卿', zj, [[HLG, 18], [HFS, 27]]),
  zao('包包', vivo, [[XG, 27]]),
  zao('莞芊', zx1, [[XG, 15], [XFQ, 17]]),
  zao('柠檬', zj, [[XJ, 15], [LWC, 24], [XJ, 15]]),
  zao('悠', zx3, [[FL, 15]]),
  zao('蒋杨', zx3, [[SXM, 15], [YJM, 15], [SXM, 15]]),
  zao('xsj', zx2, [[LWC, 24]]),
  zao('Yting', zj, [[HFS, 27]]),
  zao('瑜', zj, [[HLG, 18], [(WG, 35)]]),
]

const t2 = [zao('蓓蕊童菱', fryj, [[XG, 24]])]

const t3 = [zao('曾小敏', xca3, [[SXM, 24], [LM, 26]])]

export default [].concat(t1, t2, t3)
