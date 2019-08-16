# vue-csr

> A Vue.js project [client-side rendering]

the falsework based on `vue-cli`

```bash
vue init webpack [name]
```

## Build Setup

```bash
# change branch to dev
git checkout dev

# install dependencies
npm install # Or yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## For detailed explanation on how things work, Please look at these:

- [vue devtools](https://github.com/vuejs/vue-devtools/)
- [vue-cli](https://github.com/vuejs/vue-cli/)
- [vuejs-templates and webpack](http://vuejs-templates.github.io/webpack/)
- [docs for vue](https://vuejs.org/)
- [docs for vue-loader](https://vue-loader.vuejs.org/)
- [docs for vue-router](https://router.vuejs.org/)
- [docs for vuex](https://vuex.vuejs.org/)

## Other configuration

- `config/index.js` 中 `config.dev.proxyTable` 配置本地开发环境的接口跨域代理
- `config/index.js` 中配置 `build.assetsSubDirectory` 和 `build.assetsPublicPath` 来设置生产环境的静态文件路径。`package.json` 中 `scripts.deploy` 来设置对应正确上传路径(开发服务器)
- `static/manifest.json` 和 `index.html` 设置项目基本配置，如项目名称、描述、业务 id，静态资源路径
- `src/router/index.js` 设置 `router.base`
- `src/router/routes.js` 配置页面路由
- z-index 建议
  - 普通 absolute < 10
  - 普通 fixed < 50
  - 弹窗类 fixed 90 - 99
  - 通用组件 fixed 2000 - 3000

## Pages

- [vue-demo](https://zhouyu1993.github.io/awesome/vue-demo/)
