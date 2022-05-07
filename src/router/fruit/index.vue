<template>
  <div class="fruit">
    <Button type="primary" class="just-month" @click="justMonth">
      只看本月
    </Button>
    <div>合计：{{ money }}元</div>
    <div class="chart" id="line"></div>
    <Button type="primary" class="choose-date" @click="openDatetimePicker">
      选择日期：{{ date | dateFormate }}
    </Button>
    <DatetimePicker
      ref="datetimePicker"
      type="date"
      v-model="date"
      @confirm="handleConfirm"
    />
    <div class="chart" id="column"></div>
    <Button type="primary" class="choose-date" @click="openDatetimePicker">
      选择日期：{{ date | dateFormate }}
    </Button>
    <div class="chart" id="column2"></div>
  </div>
</template>

<style lang="scss" scoped>
.fruit {
  padding: 0 20px 20px;

  .chart,
  .choose-date {
    margin-bottom: 50px;
  }

  .just-month {
    display: block;
    margin: 0 auto;
  }
}
</style>

<script>
import { Chart } from '@antv/g2'
import { Button, DatetimePicker } from 'mint-ui'
import json from './json.js'
import dateFormate from '../..//plugins/dateFormate'

export default {
  components: {
    Button,
    DatetimePicker,
  },
  data() {
    return {
      json: {},
      money: 0,
      date: new Date(),
    }
  },
  filters: {
    dateFormate(date) {
      return dateFormate(date.getTime(), 'YY-MM-DD')
    },
  },
  mounted() {
    json.forEach((value) => {
      value.item.forEach((item) => {
        item.money = Number(
          item.fruit
            .map((item) => item.money)
            .reduce((prev, next) => prev + next)
            .toFixed(2)
        )
      })

      value.money = Number(
        value.item
          .map((item) => item.money)
          .reduce((prev, next) => prev + next)
          .toFixed(2)
      )
    })

    if (this.$route.query.month) {
      const today = dateFormate(this.date.getTime(), 'YYMM')
      this.json = json.filter((item) => {
        return item.time.slice(0, 6) === today
      })
    } else {
      this.json = json
    }

    this.money = this.json
      .map((item) => item.money)
      .reduce((prev, next) => prev + next)
      .toFixed(2)

    this.renderLine()
    this.renderColumn()
    this.renderColumn2()
  },
  methods: {
    getWeek(date) {
      const week = date.getDay()
      switch (week) {
        case 1:
          return '周一'
        case 2:
          return '周二'
        case 3:
          return '周三'
        case 4:
          return '周四'
        case 5:
          return '周五'
        case 6:
          return '周六'
        case 0:
          return '周日'
        default:
          return ''
      }
    },
    renderLine() {
      const data = this.json

      console.log(data)

      if (this.chartLine) {
        this.chartLine.changeData(data)

        return
      }

      const chart = new Chart({
        container: 'line',
        autoFit: true,
        height: 400,
        appendPadding: [20, 0, 0, 0],
      })

      chart.data(data)

      chart.scale('money', {
        nice: true,
      })

      chart
        .line()
        .position('time*money')
        .label('money', {
          offset: 20,
          style: {
            fill: '#000',
            fontSize: 10,
          },
        })

      chart.tooltip({
        shared: true,
        title: (title) => {
          const y = title.slice(0, 4)
          const m = title.slice(4, 6)
          const d = title.slice(6, 8)
          const ymd = [y, m, d].join('-')
          return `${ymd}【${this.getWeek(new Date(ymd))}】`
        },
      })

      chart.render()

      this.chartLine = chart
    },
    renderColumn() {
      const today = dateFormate(this.date.getTime(), 'YYMMDD')
      const item = this.json.filter((item) => item.time === today)
      const data = (item[0] && item[0].item) || []

      console.log(data)

      if (this.chartColumn) {
        this.chartColumn.changeData(data)

        return
      }

      const chart = new Chart({
        container: 'column',
        autoFit: true,
        height: 400,
      })

      chart.data(data)

      chart.scale('money', {
        nice: true,
      })

      chart.tooltip({
        shared: true,
        customItems: (items) => {
          const money = Number(
            items
              .map((item) => item.data.money)
              .reduce((prev, next) => prev + next)
              .toFixed(2)
          )

          return [
            {
              name: `${items.length}人总计`,
              value: money,
            },
          ].concat(
            items.map((item) => ({
              ...item,
              value: `(${item.data.fruit
                .map((item) => item.name + item.money)
                .join('+')})=${item.value}${item.data.pay ? '【付】' : ''}`,
              ...(item.data.pick ? { name: `${item.name}【送】` } : {}),
            }))
          )
        },
      })

      chart
        .interval()
        .position('address*money')
        .color('name')
        .adjust([
          {
            type: 'dodge',
            marginRatio: 0,
          },
        ])

      chart.interaction('active-region')

      chart.render()

      this.chartColumn = chart
    },
    renderColumn2() {
      const today = dateFormate(this.date.getTime(), 'YYMMDD')
      const item = this.json.filter((item) => item.time === today)
      const data = (item[0] && item[0].item) || []

      const obj = {}
      data.forEach((item) => {
        item.fruit.forEach((fruit) => {
          if (obj[fruit.name]) {
            obj[fruit.name] += 1
          } else {
            obj[fruit.name] = 1
          }
        })
      })

      const arr = []
      for (const key in obj) {
        arr.push({
          name: key,
          value: obj[key],
        })
      }

      arr.sort((prev, next) => prev.value - next.value)

      console.log(arr)

      if (this.chartColumn2) {
        this.chartColumn2.changeData(arr)

        return
      }

      const chart = new Chart({
        container: 'column2',
        autoFit: true,
        height: 400,
        appendPadding: [10, 0, 0, 0],
      })

      chart.data(arr)

      chart.scale('value', {
        nice: true,
      })

      chart
        .interval()
        .position('name*value')
        .label('value', {
          offset: 10,
          style: {
            fill: '#000',
            fontSize: 10,
          },
        })
        .color('name')

      chart.render()

      this.chartColumn2 = chart
    },
    justMonth() {
      const today = dateFormate(this.date.getTime(), 'YYMM')
      this.json = json.filter((item) => {
        return item.time.slice(0, 6) === today
      })

      this.money = this.json
        .map((item) => item.money)
        .reduce((prev, next) => prev + next)
        .toFixed(2)

      this.renderLine()
    },
    openDatetimePicker() {
      this.$refs.datetimePicker.open()
    },
    handleConfirm(date) {
      this.date = date
      this.renderColumn()
      this.renderColumn2()
    },
  },
}
</script>
