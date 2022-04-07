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
  </div>
</template>

<style scoped>
.choose-date {
  margin: 50px 0;
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
      return dateFormate(date.getTime(), 'YYMMDD')
    },
  },
  mounted() {
    json.forEach((value) => {
      value.item.forEach((item) => {
        item.money = item.fruit
          .map((item) => item.money)
          .reduce((prev, next) => prev + next)
      })

      value.money = value.item
        .map((item) => item.money)
        .reduce((prev, next) => prev + next)
    })

    this.json = json

    this.renderLine()
    this.renderColumn()
  },
  methods: {
    renderLine() {
      const data = this.json

      console.log(data)

      const chart = new Chart({
        container: 'line',
        autoFit: true,
        height: 400,
      })

      chart.data(data)

      chart.scale('money', {
        nice: true,
      })

      chart
        .line()
        .position('time*money')
        .label('money', {
          offset: 15,
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
      const data = item[0].item

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
          return items.map((item) => ({
            ...item,
            value: `(${item.data.fruit
              .map((item) => item.name + item.money)
              .join('+')})=${item.value}`,
          }))
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
    openDatetimePicker() {
      this.$refs.datetimePicker.open()
    },
    handleConfirm(date) {
      this.date = date
      this.renderColumn()
    },
  },
}
</script>
