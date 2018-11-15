const routers = [
  'home',
  'todos',
  'todo',
]

const routes = routers.map(router => {
  let path = `/${router}`
  let name = router
  let component = async () => await import(`./${router}`)

  if (router === 'home') {
    path = '/'
    name = 'home'
  } else if (router === 'todo') {
    path = '/todo/:id'
    component = async () => await import('./todos/todo')
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
