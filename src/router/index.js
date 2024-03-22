import { createRouter, createWebHistory } from "vue-router";
import store from '../store';

import Index from '../views/Index.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Admin/Index.vue';
import Events from '../views/Admin/Events.vue';
import AddEvent from '../views/Admin/AddEvent.vue';
import UserBooking from '../views/Admin/UserBooking.vue';


const routes = [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: Login,
    },

    // //admin routese
    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      component: Dashboard,      
      meta: {
        requiresAuth: true,
      },
    },

    { path: "/admin/events", name: "Events", component: Events, meta: { requiresAuth: true }}, 
    { path: "/admin/addevent", name: "AddEvent", component: AddEvent, meta: { requiresAuth: true }},  
    { path: "/admin/userbookings", name: "UserBooking", component: UserBooking, meta: { requiresAuth: true }},  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
 
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const loggedIn = localStorage.getItem('adminToken');
    if (!loggedIn) {
      next('/admin/login');
    } else {
      next();
    }
  } else {
    next(); 
  }
});


export default router;