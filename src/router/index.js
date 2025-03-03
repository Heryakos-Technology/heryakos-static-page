import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import AboutUs from '../views/AboutUs.vue'
=======
import ContactUs from '../views/ContactUs.vue'
import ServicePage from '../views/ServicePage.vue'


>>>>>>> 6f3d90437f6d1bae84fb5cb0fff53475ef5a94e8

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
<<<<<<< HEAD
   
=======

>>>>>>> 6f3d90437f6d1bae84fb5cb0fff53475ef5a94e8
  ],
})

export default router
