import { mlxq, ssw1, ssw3 } from '../address'
import { HFS, LM, LWC, PPG, QX, XG, XM } from '../fruit'
import newf from '../newf'

const t1 = []

const t2 = [
  {
    name: '雪精灵',
    address: ssw3,
    fruit: [newf(XM, 17), newf(QX, 18)],
  },
  {
    name: '阿崔',
    address: ssw1,
    fruit: [newf(HFS, 27), newf(QX, 18), newf(LM, 19.8)],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(PPG, 49), newf(PPG, 49)],
  },
  {
    name: '杜晶',
    address: mlxq,
    fruit: [newf(XG, 41)],
  },
  {
    name: '海清河宴',
    address: ssw3,
    fruit: [newf(LWC, 24), newf(LM, 19.8)],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
