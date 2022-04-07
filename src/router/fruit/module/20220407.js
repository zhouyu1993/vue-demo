import { a, c, d, f, h, j, l } from '../address.js'
import { D, E, F, H, J, K, M } from '../fruit'

const t1 = [
  {
    name: '小娇',
    address: a,
    fruit: [
      {
        ...H,
        money: 16,
      },
    ],
  },
  {
    name: '柳林风声',
    address: d,
    fruit: [D],
  },
  {
    name: 'soledad',
    address: d,
    fruit: [D],
  },
  {
    name: 'Liyr',
    address: d,
    fruit: [
      {
        ...M,
        money: 40,
      },
    ],
  },
  {
    name: '姗',
    address: d,
    fruit: [D],
  },
  {
    name: 'XUE',
    address: a,
    fruit: [E],
  },
  {
    name: 'John',
    address: d,
    fruit: [E],
  },
  {
    name: '杨小姐的春夏秋冬',
    address: f,
    fruit: [D],
  },
  {
    name: '赵艳华',
    address: a,
    fruit: [F],
  },
  {
    name: '冯娅',
    address: a,
    fruit: [J, K],
  },
  {
    name: '丫丫',
    address: c,
    fruit: [D],
  },
]

const t2 = [
  {
    name: 'Laura',
    address: j,
    fruit: [J, K],
  },
  {
    name: '抱抱熊',
    address: h,
    fruit: [K],
  },
]

const t3 = [
  {
    name: 'C',
    address: l,
    fruit: [E],
  },
]

export default [].concat(t1, t2, t3)
