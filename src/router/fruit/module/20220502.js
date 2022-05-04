import { fryj, rfs, ssw1, ssw3 } from '../address'
import { HFS, HLG, LM, PPG, QT, QX, WG, XG, XJ, YJM, YT } from '../fruit'
import newf from '../newf'

const t1 = []

const t2 = [
  {
    name: '王玮',
    address: fryj,
    fruit: [newf(HFS, 27), newf(PPG, 49)],
  },
  {
    name: '孙云玲',
    address: rfs,
    fruit: [newf(YT, 105), newf(YJM, 22)],
  },
  {
    name: 'F. TIBTO🌈',
    address: ssw3,
    fruit: [newf(QX, 18), newf(LM, 19.8), newf(HLG, 18)],
  },
  {
    name: 'lqy',
    address: ssw3,
    fruit: [newf(HFS, 27), newf(WG, 35), newf(YJM, 23.5), newf(QX, 18)],
  },
  {
    name: '大敏',
    address: ssw1,
    fruit: [newf(XJ, 9.6), newf(LM, 19.8), newf(HFS, 27)],
  },
  {
    name: '筱月',
    address: fryj,
    fruit: [newf(XG, 23.5), newf(QX, 18)],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(PPG, 49), newf(PPG, 49)],
  },
  {
    name: '___゛猛虎嗅蔷薇',
    address: rfs,
    fruit: [newf(HLG, 18)],
  },
  {
    name: 'ocean',
    address: ssw3,
    fruit: [newf(HLG, 18), newf(QT, 33)],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
