import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '@/views/ContactUs.vue'
import ServicePage from '@/views/ServicePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs,
    },
    {

      path: '/service',
      name: 'ServicePage',
      component: ServicePage,
    },

    {
      path: '/about',
      name: "AboutUs",
      component: AboutUs
    },

  ],
})

export default router
