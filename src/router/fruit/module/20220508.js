import { fryj, ssw3 } from '../address'
import { LM, LWC, PPG, QX, SXM, XG } from '../fruit'
import zao from '../zao'

const t1 = []

const t2 = [
  zao('YR', ssw3, [[XG, 49.6]]),
  zao('王玮', fryj, [[XG, 35], [PPG, 49]]),
  zao('王淼', ssw3, [[XG, 33]]),
  zao('露西', ssw3, [[PPG, 27], [XG, 49]]),
  zao('谢女士', fryj, [[SXM, 11.8], [QX, 18], [LWC, 24], [LM, 13]]),
]

const t3 = []

export default [].concat(t1, t2, t3)
