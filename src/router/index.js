import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import PostPage from '@/pages/PostPage'

import 'vue-material-design-icons/styles.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/post',
      name: 'PostPage',
      component: PostPage
    }
  ]
})
