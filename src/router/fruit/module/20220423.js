import { fryj, ssw3 } from '../address'
import { FL, PPG, QX, TM, WG, XBL, XFQ, XG, XH, XJ, XM } from '../fruit'
import newf from '../newf'

const t1 = []

const t2 = [
  {
    name: '小手😘🇨🇳 ',
    address: ssw3,
    fruit: [newf(XBL, 18)],
  },
  {
    name: '牧牧',
    address: ssw3,
    fruit: [newf(XBL, 18), newf(TM, 15), newf(WG, 35)],
  },
  {
    name: '旺旺孙冰冰🧊',
    address: ssw3,
    fruit: [newf(FL, 18)],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [newf(PPG, 45 * 3), newf(XFQ, (34 / 2) * 3)],
  },
  {
    name: '王玮',
    address: fryj,
    fruit: [newf(PPG, 45), newf(XJ, 8.5), newf(XM, 19)],
  },
  {
    name: 'ocean',
    address: ssw3,
    fruit: [newf(XG, 27.6), newf(QX, 18), newf(XH, 19.5)],
  },
]

const t3 = []

export default [].concat(t1, t2, t3)
