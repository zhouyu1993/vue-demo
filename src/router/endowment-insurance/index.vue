<template>
  <div class="endowment-insurance">
    <input type="text" v-model="new_line" placeholder="新档次(最低500)" />
    <input
      type="text"
      v-model="new_line_num"
      placeholder="再缴几年(d最少2年，m最少4年。d、m最多8年)"
      class="long"
    />
    <input type="text" v-model="year" placeholder="多少岁" />
    <button @click="getData">确定</button>
    <Popup v-model="popupVisible">
      <div class="content">
        新档次{{ new_line || 500 }}元，再缴{{
          new_line_num > 2 ? new_line_num : 2
        }}年，d的养老保险:
        <p>个人缴费总额: {{ d_data.pay }}</p>
        <p>政府补贴总额: {{ d_data.perk }}</p>
        <p>个人账户总额: {{ d_data.total }}</p>
        <p>60岁后月领养老金: {{ d_data.m_annuity }}</p>
        <p>至{{ +year + 60 }}岁养老金总额: {{ d_data.annuity }}</p>
        <p>至{{ +year + 60 }}岁收益总额: {{ d_data.income }}</p>
      </div>
      <div class="content">
        新档次{{ new_line || 500 }}元，再缴{{
          new_line_num > 4 ? new_line_num : 4
        }}年，m的养老保险:
        <p>个人缴费总额: {{ m_data.pay }}</p>
        <p>政府补贴总额: {{ m_data.perk }}</p>
        <p>个人账户总额: {{ m_data.total }}</p>
        <p>60岁后月领养老金: {{ m_data.m_annuity }}</p>
        <p>至{{ +year + 60 }}岁养老金总额: {{ m_data.annuity }}</p>
        <p>至{{ +year + 60 }}岁收益总额: {{ m_data.income }}</p>
      </div>
    </Popup>
    <h1>d的养老保险</h1>
    <div class="chart" id="d_line"></div>
    <h1>m的养老保险</h1>
    <div class="chart" id="m_line"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/css/rem';

.endowment-insurance {
  h1 {
    margin: 40px 0;
  }

  input,
  button {
    border: 1px solid #bbb;
  }

  .long {
    width: rem(600);
  }

  .content {
    width: 100vw;
    padding: 20px;
  }
}
</style>

<script>
import { Chart } from '@antv/g2'
import { Popup } from 'mint-ui'

export default {
  name: 'endowment-insurance',
  components: {
    Popup,
  },
  data() {
    return {
      new_line: '',
      new_line_num: '',
      year: '',
      d_data: {},
      m_data: {},
      popupVisible: false,
    }
  },
  mounted() {
    const d_data = this.fetchData(4)
    const m_data = this.fetchData(2)
    console.log('mounted: ', d_data, m_data)

    this.renderLine(d_data, 'd_line')
    this.renderLine(m_data, 'm_line')
  },
  methods: {
    getData() {
      this.d_data = this.calculate(
        4,
        this.new_line || 500,
        Math.max(this.new_line_num || 2, 2),
        this.year || 0
      )
      this.m_data = this.calculate(
        2,
        this.new_line || 500,
        Math.max(this.new_line_num || 4, 4),
        this.year || 0
      )
      console.log('getData: ', this.d_data, this.m_data)

      this.popupVisible = true
    },
    fetchData(old_line_num = 4) {
      const new_line_arr = [500, 2500, 5000, 8000, 10000]
      const new_line_num_arr = [15 - old_line_num - 9, 8]
      const year_arr = [10, 15, 20]
      const data = []
      new_line_arr.forEach((new_line) => {
        new_line_num_arr.forEach((new_line_num) => {
          year_arr.forEach((year) => {
            const obj = this.calculate(
              old_line_num,
              new_line,
              new_line_num,
              year
            )
            const value = {
              new_line,
              new_line_num,
              year,
              ...obj,
              title: `${new_line}_${new_line_num}_${year}`,
            }
            data.push(value)
          })
        })
      })
      return data
    },
    calculate(old_line_num = 4, new_line = 2500, new_line_num = 2, year = 10) {
      // 个人缴费总额
      const pay =
        200 * old_line_num + 300 * 8 + 500 * 1 + new_line * new_line_num
      // 政府补贴总额
      const perk = 10 * old_line_num + 20 * 8 + 30 * 1 + 200 * new_line_num
      // 个人账户总额
      const total = pay + perk
      // 60岁后月领养老金
      const m_annuity = total / 139 + 200
      // 至X岁养老金总额
      const annuity = m_annuity * 12 * year
      // 至X岁收益总额
      const income = annuity - pay
      return {
        pay: Math.floor(pay),
        perk: Math.floor(perk),
        total: Math.floor(total),
        m_annuity: Math.floor(m_annuity),
        annuity: Math.floor(annuity),
        income: Math.floor(income),
      }
    },
    renderLine(data, container) {
      const chart = new Chart({
        container,
        autoFit: true,
        height: 400,
      })

      chart.data(data)

      chart.scale('income', {
        nice: true,
      })

      chart
        .line()
        .position('title*income')
        .label('income', {
          offset: 10,
          style: {
            fill: '#000',
            fontSize: 10,
          },
        })

      chart.render()
    },
  },
}
</script>
