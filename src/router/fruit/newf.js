export default function newf(fruit, money) {
  money = money || fruit.money
  return {
    ...fruit,
    money,
  }
}
