const files = require.context('./module', true, /\.js/)

const data = []

files.keys().forEach((pathName) => {
  Object.values(files(pathName)).forEach((item) => {
    data.push({
      time: pathName.slice(2, -3),
      item,
    })
  })
})

export default data
