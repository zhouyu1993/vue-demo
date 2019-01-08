<template>
  <div class="salary-tax-calculator">
    <h3>工资(个税)计算器</h3>
    <div class="layout-flex-acjc">
      <div class="lable">
        税前工资
      </div>
      <div class="input">
        <input type="number" v-model="money">
      </div>
    </div>
    <div class="layout-flex-acjc">
      <div class="lable">
        社保总额
      </div>
      <div class="input">
        <input type="number" v-model="shebao">
      </div>
    </div>
    <h6>社保基数*(养老保险比例20%+医疗保险8%+失业保险0.5%)</h6>
    <div class="layout-flex-acjc">
      <div class="lable">
        公积金总额
      </div>
      <div class="input">
        <input type="number" v-model="gongjijin">
      </div>
    </div>
    <h6>公积金基数*公积金比例(8%-12%)</h6>
    <div class="submit-wrap">
      <button class="submit" @click="submit">计算</button>
    </div>
    <div class="result">
      <h3>年度收入总额{{youMoneySum}}</h3>
      <h6>每月收入列表</h6>
      <ul>
        <li v-for="youMoney in youMoneys">{{youMoney}}</li>
      </ul>
      <h3>年度交税总额{{taxSum}}</h3>
      <h6>每月交税列表</h6>
      <ul>
        <li v-for="tax in taxs">{{tax}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'salary-tax-calculator',
  data () {
    return {
      money: 0,
      shebao: 0,
      gongjijin: 0,
      taxSum: 0,
      taxs: [],
      youMoneySum: 0,
      youMoneys: [],
    }
  },
  methods: {
    calculator (money, shebao, gongjijin) {
      var ed = money - shebao - gongjijin - 5000

      var taxSum = 0
      var taxs = []
      var youMoneySum = 0
      var youMoneys = []

      for (var i = 1; i <= 12; i++) {
        var eds = ed * i

        var tax = 0
        if (eds <= 36000) {
          tax = eds * 0.03 - taxSum
        } else if (eds > 36000 && eds <= 144000) {
          tax = eds * 0.1 - 2520 - taxSum
        } else if (eds > 144000 && eds <= 300000) {
          tax = eds * 0.2 - 16920 - taxSum
        } else if (eds > 300000 && eds <= 420000) {
          tax = eds * 0.25 - 31920 - taxSum
        } else if (eds > 420000 && eds <= 660000) {
          tax = eds * 0.3 - 52920 - taxSum
        } else if (eds > 660000 && eds <= 960000) {
          tax = eds * 0.35 - 85920 - taxSum
        } else if (eds > 960000) {
          tax = eds * 0.45 - 181920 - taxSum
        }
        taxSum += tax

        var youMoney = money - shebao - gongjijin - tax
        youMoneySum += youMoney

        taxs.push(tax)
        youMoneys.push(youMoney)
      }

      return {
        taxSum,
        taxs,
        youMoneySum,
        youMoneys,
      }
    },
    submit () {
      const {
        taxSum,
        taxs,
        youMoneySum,
        youMoneys,
      } = this.calculator(this.money, this.shebao, this.gongjijin)

      this.taxSum = taxSum
      this.taxs = taxs
      this.youMoneySum = youMoneySum
      this.youMoneys = youMoneys
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
@import '../../assets/css/rem';

.salary-tax-calculator {
  input {
    min-width: rem(300);
    padding: rem(10);
    border: 1px solid #ddd;
  }

  h3, h6 {
    margin-bottom: rem(20);
    text-align: center;
  }

  .layout-flex-acjc {
    margin-bottom: rem(20);
  }

  .lable {
    flex: 1;
    margin-right: rem(20);
    text-align: right;
  }

  .input {
    flex: 2;
  }

  .submit-wrap {
    text-align: center;
  }

  .submit {
    padding: rem(10) rem(30);
    font-size: rem(30);
    line-height: rem(50);
    color: #fff;
    background-color: blue;
    border-radius: rem(20);
  }

  ul {
    text-align: center;
  }
}
</style>
