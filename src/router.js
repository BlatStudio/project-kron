import VueRouter from 'vue-router'
import Home from './components/Home.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

// router.beforeEach((to, from, next) => {
//   Scroll(0, {
//     maxDuration: 200,
//   }).then( () => {
//     next();
//   })
// })

export default router 