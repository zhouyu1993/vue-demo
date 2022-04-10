<template>
  <div class="fruit">
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
  padding: 20px;

  .chart,
  .choose-date {
    margin-bottom: 50px;
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

    this.json = json

    this.renderLine()
    this.renderColumn()
    this.renderColumn2()
  },
  methods: {
    renderLine() {
      const data = this.json

      console.log(data)

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

      chart.render()
    },
    renderColumn() {
      const item = this.json.filter(
        (item) => item.time === dateFormate(this.date.getTime(), 'YYMMDD')
      )
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
      const item = this.json.filter(
        (item) => item.time === dateFormate(this.date.getTime(), 'YYMMDD')
      )
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
