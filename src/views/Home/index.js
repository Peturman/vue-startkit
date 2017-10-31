const Home = (resolve) => {
  import('./Home.vue').then((module) => {
    resolve(module)
  })
}

export default {
  path: '/',
  name: 'home',
  component: Home,
  children: [{
    path: ':id',
    name: 'songlistdetail',
    component: Home
  }]
}
