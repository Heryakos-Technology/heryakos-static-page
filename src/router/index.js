import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import ServicePage from '../views/ServicePage.vue'
import BlogPage from '@/views/BlogPage.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'ContactUs',
      component: ContactUs,
    },
    {

      path: '/service',
      name: 'ServicePage',
      component: ServicePage,
    },
    {

      path: '/blog',
      name: 'BlogPage',
      component: BlogPage,
    },

    {
      path: '/about',
      name: "AboutUs",
      component: AboutUs
    },


  ],
})

export default router
