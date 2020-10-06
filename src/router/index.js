import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blog/:uid',
    name: 'post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '/*',
    name: 'not-found',
    component: () => import( '../views/NotFound.vue')
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: () => import( '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
