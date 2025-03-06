import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import ServicePage from '../views/ServicePage.vue'
import BlogPage from '@/views/BlogPage.vue'
import PortfolioPage from '@/views/PortfolioPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Fixed to match import
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/service',
      name: 'ServicePage',
      component: ServicePage
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/works',
      name: 'PortfolioPage',
      component: PortfolioPage
    },
    {
      path: '/animate',
      name: 'Animation',
      component: Animation
    },
    
  ],
});

export default router;