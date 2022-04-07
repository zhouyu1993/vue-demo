const routers = [
  'home',
  'music',
  'salary-tax-calculator',
  'rose',
  'force-refresh',
  'midc',
  'todos',
  'todo',
  'test',
  'fruit',
]

const routes = routers.map(router => {
  let path = `/${router}`
  let name = router
  let component = async () => await import(`./${router}`)

  if (router === 'home') {
    path = '/'
  } else if (router === 'todo') {
    path = '/todo/:id'
    component = async () => await import('./todos/todo')
  } else if (router === 'test') {
    path = '/test/:id'
    component = async () => await import('./test')
  }

  return {
    path,
    name,
    component,
  }
})

export default [
  {
    path: '/error',
    name: 'error',
    component: async () => await import(`./error`),
    meta: {
      scrollToTop: true,
    },
  },
  ...routes,
]
