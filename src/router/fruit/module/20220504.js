import { ssw1, ssw3 } from '../address'
import { LWC, PPG, QX, WG, XG, YJM } from '../fruit'
import newf from '../newf'

const t1 = []

const t2 = [
  {
    name: '小面包',
    address: ssw1,
    fruit: [newf(LWC, 24), newf(QX, 18)],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(PPG, 49), newf(PPG, 49)],
  },
  {
    name: '柠檬树',
    address: ssw1,
    fruit: [newf(XG, 110), newf(WG, 70), newf(YJM, 60)],
  },
  {
    name: '牧牧',
    address: ssw3,
    fruit: [newf(WG, 35), newf(LWC, 24)],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
