import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = (resolve) => {
  import('@/views/Home').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
