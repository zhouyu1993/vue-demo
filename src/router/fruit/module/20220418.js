import {
  fryj,
  rfs,
  ssw1,
  ssw3,
  xca3,
  xcb3,
  zj,
  zx1,
  zx2,
  zx3,
} from '../address'
import {
  DCM,
  FL,
  HFS100,
  LM,
  LWC,
  MHT,
  PPG,
  QX,
  SXM,
  TM,
  WG,
  XBL,
  XH,
  XJ,
  XL,
  XM,
  YJM,
} from '../fruit'

const _PPG = {
  ...PPG,
  money: 45,
}
const _DCM = {
  ...DCM,
  money: 15,
}
const _XM = {
  ...XM,
  money: 20,
}

const pick = 1
const pay = 1

const t1 = [
  {
    name: '张文燕',
    address: zj,
    fruit: [_PPG, _DCM, _XM],
  },
  {
    name: 'Anne',
    address: zx1,
    fruit: [LWC, TM],
  },
  {
    name: '栀子花',
    address: zj,
    fruit: [_XM],
  },
  {
    name: 'pengmin',
    address: zx1,
    fruit: [LWC, HFS100],
  },
  {
    name: '岳文卿',
    address: zj,
    fruit: [LWC, XL],
  },
  {
    name: '舍予',
    address: zx1,
    fruit: [_PPG],
  },
  {
    name: 'summer',
    address: zx1,
    fruit: [XBL],
  },
  {
    name: 'bxs',
    address: zj,
    fruit: [_DCM],
  },
  {
    name: '流云',
    address: zj,
    fruit: [
      {
        ...WG,
        money: 35,
      },
      {
        ...SXM,
        money: 27,
      },
    ],
  },
  {
    name: '酒酿圆子_zxk',
    address: zx3,
    fruit: [_PPG],
  },
  {
    name: '瑜',
    address: zj,
    fruit: [
      _DCM,
      {
        ...YJM,
        money: 21.6,
      },
    ],
  },
  {
    name: '游泳的鱼',
    address: zx1,
    fruit: [TM, LM],
  },
  {
    name: '恒',
    address: zx2,
    fruit: [_DCM, _XM],
  },
  {
    name: '一米阳光',
    address: zj,
    fruit: [LWC],
  },
  {
    name: '丫丫',
    address: zx2,
    fruit: [
      XBL,
      {
        SXM,
        money: 40,
      },
    ],
  },
  {
    name: '天使布瓦',
    address: zx3,
    fruit: [_DCM, XBL],
  },
  {
    name: '瓶子',
    address: zx2,
    fruit: [LWC],
  },
]

const t2 = [
  {
    name: '。',
    address: fryj,
    fruit: [_DCM],
  },
  {
    name: 'MAN LIN',
    address: fryj,
    fruit: [_DCM, _DCM, XL],
  },
  {
    name: '玲珑',
    address: rfs,
    fruit: [_PPG, XBL],
    pay,
  },
  {
    name: '孙云玲',
    address: rfs,
    fruit: [
      MHT,
      {
        ...XH,
        money: 20,
      },
      _PPG,
    ],
    pay,
  },
  {
    name: '李倩',
    address: fryj,
    fruit: [_DCM],
    pick,
  },
  {
    name: '。雅赞  媛媛👶👶',
    address: ssw1,
    fruit: [
      {
        ...XJ,
        money: 13.7,
      },
      {
        ...YJM,
        money: 12,
      },
      {
        ...XH,
        money: 31,
      },
      QX,
    ],
    pick,
  },
  {
    name: 'lqy',
    address: ssw3,
    fruit: [_DCM],
    pick,
  },
  {
    name: '东云',
    address: fryj,
    fruit: [_PPG],
  },
  {
    name: '露西',
    address: ssw3,
    fruit: [_PPG, _PPG, _PPG, _PPG],
  },
  {
    name: '晶针姑🍄',
    address: ssw3,
    fruit: [XBL],
  },
  {
    name: '旺旺孙冰冰🧊',
    address: ssw3,
    fruit: [FL],
  },
  {
    name: '大敏',
    address: ssw1,
    fruit: [
      {
        ...XJ,
        money: 8.6,
      },
      QX,
      FL,
      HFS100,
    ],
  },
]

const t3 = [
  {
    name: '雨滴答滴答',
    address: xcb3,
    fruit: [
      _DCM,
      LM,
      {
        ...XJ,
        money: 9,
      },
    ],
  },
  {
    name: '深海',
    address: xcb3,
    fruit: [_DCM],
  },
  {
    name: '_______',
    address: xca3,
    fruit: [XBL],
  },
  {
    name: 'Roos Roos A Capella 🥀',
    address: xcb3,
    fruit: [XBL],
  },
]

export default [].concat(t1, t2, t3)
