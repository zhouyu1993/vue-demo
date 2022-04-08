import { a, c, d, f, h, i, j, l } from '../address'
import {
  PPG,
  HFS,
  WG,
  LWC,
  XM,
  XTM,
  XH,
  XFQ,
  LM,
  DCM,
  GL,
  SDMG,
  SG,
} from '../fruit'

const t1 = [
  {
    name: '小娇',
    address: a,
    fruit: [
      {
        ...XH,
        money: 22.8,
      },
    ],
  },
  {
    name: '柳林风声',
    address: d,
    fruit: [WG],
  },
  {
    name: 'soledad',
    address: d,
    fruit: [WG],
  },
  {
    name: 'Liyr',
    address: d,
    fruit: [
      {
        ...SDMG,
        money: 37,
      },
    ],
  },
  {
    name: '姗',
    address: d,
    fruit: [WG],
  },
  {
    name: 'XUE',
    address: a,
    fruit: [LWC],
  },
  {
    name: 'John',
    address: d,
    fruit: [LWC],
  },
  {
    name: '杨小姐的春夏秋冬',
    address: f,
    fruit: [WG],
  },
  {
    name: '赵艳华',
    address: a,
    fruit: [XM],
  },
  {
    name: '冯娅',
    address: a,
    fruit: [
      {
        ...LM,
        money: 17.5,
      },
      DCM,
    ],
  },
  {
    name: '丫丫',
    address: c,
    fruit: [WG],
  },
  {
    name: 'yadong',
    address: d,
    fruit: [HFS],
  },
  {
    name: '瑜',
    address: d,
    fruit: [
      DCM,
      {
        ...SDMG,
        money: 20.5,
      },
    ],
  },
  {
    name: '杨琦',
    address: c,
    fruit: [LM],
  },
  {
    name: '恒',
    address: c,
    fruit: [DCM],
  },
  {
    name: '皮皮卡丘',
    address: d,
    fruit: [XTM],
  },
  {
    name: '小豆丁',
    address: d,
    fruit: [HFS, XTM],
  },
  {
    name: 'lipple',
    address: d,
    fruit: [
      HFS,
      {
        ...XH,
        money: 23,
      },
    ],
  },
  {
    name: '不要哭',
    address: c,
    fruit: [
      {
        ...SG,
        money: 67,
      },
    ],
  },
]

const t2 = [
  {
    name: 'Laura',
    address: j,
    fruit: [LM, DCM],
  },
  {
    name: '抱抱熊',
    address: h,
    fruit: [DCM],
  },
  {
    name: '喜乐平安',
    address: h,
    fruit: [DCM],
  },
  {
    name: '露西',
    address: j,
    fruit: [PPG, XFQ],
  },
  {
    name: '雅赞  媛媛',
    address: i,
    fruit: [
      LWC,
      {
        ...XH,
        money: 28.8,
      },
      {
        ...XFQ,
        money: 33.4,
      },
      GL,
    ],
  },
  {
    name: 'XM. TIBTO🌈',
    address: j,
    fruit: [DCM],
  },
  {
    name: '鸢之羽',
    address: i,
    fruit: [DCM],
  },
  {
    name: '贾',
    address: h,
    fruit: [XFQ],
  },
  {
    name: '杺',
    address: j,
    fruit: [WG, DCM],
  },
  {
    name: 'Honey',
    address: i,
    fruit: [XM, DCM],
  },
  {
    name: '木木',
    address: h,
    fruit: [XM],
  },
  {
    name: '王玮',
    address: h,
    fruit: [
      {
        ...PPG,
        money: 70,
      },
    ],
  },
]

const t3 = [
  {
    name: 'HFS',
    address: l,
    fruit: [LWC],
  },
  {
    name: '荷包蛋爱笑',
    address: l,
    fruit: [DCM, GL],
  },
]

export default [].concat(t1, t2, t3)
