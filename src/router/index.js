import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/HomeView'),
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About/AboutView'),
  },
  {
    path: '/Partice',
    name: 'Menu',
    component: () => import('../views/Pratice/Menu'),
  },
  {
    path: '/project-1',
    name: 'ProjectOne',
    component: () => import('../views/Pratice/ProjectOne'),
  },
  {
    path: '/counter',
    name: 'ProjectTwo',
    component: () => import('../views/Pratice/ProjectTwo'),
  },
  {
    path: '/search',
    name: 'ProjectThree',
    component: () => import('../views/Pratice/ProjectThree'),
  },
  {
    path: '/project-4',
    name: 'ProjectFour',
    component: () => import('../views/Pratice/ProjectFour'),
  },
  {
    path: '/project-5',
    name: 'ProjectFive',
    component: () => import('../views/Pratice/ProjectFive'),
  },
  {
    path: '/project-6',
    name: 'ProjectSix',
    component: () => import('../views/Pratice/ProjectSix'),
  },
  {
    path: '/project-7',
    name: 'ProjectSeven',
    component: () => import('../views/Pratice/ProjectSeven'),
  },
  {
    path: '/project-8',
    name: 'ProjectEight',
    component: () => import('../views/Pratice/ProjectEight'),
  },
  {
    path: '/project-9',
    name: 'ProjectNine',
    component: () => import('../views/Pratice/ProjectNine'),
  },
  {
    path: '/project-10',
    name: 'ProjectTen',
    component: () => import('../views/Pratice/ProjectTen'),
  },
  {
    path: '/project-11',
    name: 'ProjectEleven',
    component: () => import('../views/Pratice/ProjectEleven'),
  },
  {
    path: '/project-12',
    name: 'ProjectTwelve',
    component: () => import('../views/Pratice/ProjectTwelve'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
