import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Course from '@/components/Course/Course'
import LightCourse from '@/components/LightCourse/LightCourse'
import Micro from '@/components/Micro/Micro'

Vue.use(Router)

export default new Router({
  linkActiveClass:'is-active',
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/home'   // 访问/，直接跳转到/home路径
 
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/course',
      name:'Course',
      component:Course
    },
    {
      path: '/light-course',
      name: 'LightCourse',
      component: LightCourse
    },
    {
      path: '/micro',
      name: 'Micro',
      component: Micro
    }
  ]
})
