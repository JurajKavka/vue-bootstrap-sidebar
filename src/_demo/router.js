import VueRouter from 'vue-router'
import HomePage from './HomePage.vue'
import AboutPage from './AboutPage.vue'
import ContactPage from './ContactPage.vue'
import ChildItem1 from './ChildItem1.vue'
import ChildItem2 from './ChildItem2.vue'
import PageNotFound from './PageNotFound.vue'

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/dropdown/child-item-1', component: ChildItem1, name: 'child-item-1' },
  { path: '/dropdown/child-item-2', component: ChildItem2, name: 'child-item-2' },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/contact', component: ContactPage, name: 'contact' },
  { path: '*', component: PageNotFound },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})

