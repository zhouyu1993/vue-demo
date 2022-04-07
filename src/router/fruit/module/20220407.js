import { a, c, d, f, h, i, j, l } from '../address'
import { A, C, D, E, F, G, H, I, J, K, L, M, N } from '../fruit'

const t1 = [
  {
    name: '小娇',
    address: a,
    fruit: [
      {
        ...H,
        money: 22.8,
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
        money: 37,
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
    fruit: [
      {
        ...J,
        money: 17.5,
      },
      K,
    ],
  },
  {
    name: '丫丫',
    address: c,
    fruit: [D],
  },
  {
    name: 'yadong',
    address: d,
    fruit: [C],
  },
  {
    name: '瑜',
    address: d,
    fruit: [
      K,
      {
        ...M,
        money: 20.5,
      },
    ],
  },
  {
    name: '杨琦',
    address: c,
    fruit: [J],
  },
  {
    name: '恒',
    address: c,
    fruit: [K],
  },
  {
    name: '皮皮卡丘',
    address: d,
    fruit: [G],
  },
  {
    name: '小豆丁',
    address: d,
    fruit: [C, G],
  },
  {
    name: 'lipple',
    address: d,
    fruit: [
      C,
      {
        ...H,
        money: 23,
      },
    ],
  },
  {
    name: '不要哭',
    address: c,
    fruit: [
      {
        ...N,
        money: 67,
      },
    ],
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
  {
    name: '喜乐平安',
    address: h,
    fruit: [K],
  },
  {
    name: '露西',
    address: j,
    fruit: [A, I],
  },
  {
    name: '雅赞  媛媛',
    address: i,
    fruit: [
      E,
      {
        ...H,
        money: 28.8,
      },
      {
        ...I,
        money: 33.4,
      },
      L,
    ],
  },
  {
    name: 'F. TIBTO🌈',
    address: j,
    fruit: [K],
  },
  {
    name: '鸢之羽',
    address: i,
    fruit: [K],
  },
  {
    name: '贾',
    address: h,
    fruit: [I],
  },
  {
    name: '杺',
    address: j,
    fruit: [D, K],
  },
  {
    name: 'Honey',
    address: i,
    fruit: [F, K],
  },
  {
    name: '木木',
    address: h,
    fruit: [F],
  },
  {
    name: '王玮',
    address: h,
    fruit: [
      {
        ...A,
        money: 70,
      },
    ],
  },
]

const t3 = [
  {
    name: 'C',
    address: l,
    fruit: [E],
  },
  {
    name: '荷包蛋爱笑',
    address: l,
    fruit: [K, L],
  },
]

export default [].concat(t1, t2, t3)
