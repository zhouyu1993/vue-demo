import { fryj, ssw1, ssw3, zx2 } from '../address'
import { HMG, LM, PPG, QX, SXM, WG, XG, YJM } from '../fruit'
import newf from '../newf'

const t1 = [
  {
    name: '飞雪',
    address: zx2,
    fruit: [newf(YJM, 16.8), newf(HMG, 17.7), newf(LM, 19.8)],
  },
]

const t2 = [
  {
    name: 'Laura',
    address: ssw3,
    fruit: [newf(SXM, 22.5), newf(QX, 18 * 2)],
  },
  {
    name: '柠檬树',
    address: ssw1,
    fruit: [newf(PPG, 45 * 2), newf(YJM, 532), newf(XG, 49)],
  },
  {
    name: '大敏',
    address: ssw1,
    fruit: [newf(LM, 19.8)],
  },
  {
    name: 'Z',
    address: fryj,
    fruit: [newf(LM, 19.8)],
  },
  {
    name: '牧牧',
    address: ssw3,
    fruit: [newf(WG, 35), newf(QX, 18)],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(PPG, 45), newf(PPG, 45)],
  },
  {
    name: '草莓星人',
    address: fryj,
    fruit: [newf(WG, 35), newf(LM, 19.8)],
  },
  {
    name: 'ocean',
    address: ssw3,
    fruit: [newf(LM, 19.8)],
  },
  {
    name: '木木',
    address: ssw3,
    fruit: [newf(SXM, 20)],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
