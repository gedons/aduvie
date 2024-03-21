import { createRouter, createWebHistory } from "vue-router";
import store from '../store';

import Index from '../views/Index.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Admin/Index.vue';
import Events from '../views/Admin/Events.vue';
import AddEvent from '../views/Admin/AddEvent.vue';
import UserBooking from '../views/Admin/UserBooking.vue';
import Blogs from '../views/Admin/Blogs.vue';
import AddBlog from '../views/Admin/AddBlog.vue';
import ViewBlog from '../views/Admin/ViewBlog.vue';
import AdminSetting from '../views/Admin/AdminSetting.vue';
import Slider from '../views/Admin/Slider.vue';
import AddSlider from '../views/Admin/AddSlider.vue';
import Gallery from '../views/Admin/Gallery.vue';
import AddGallery from '../views/Admin/AddGallery.vue';
import FrontGallery from '../views/FrontGallery.vue';
import Blog from '../views/Blog.vue';
import BlogView from '../views/BlogView.vue';
import Contact from '../views/Contact.vue';
import Book from '../views/Book.vue';



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

    // front routes
    { path: "/gallery", name: "FrontGallery", component: FrontGallery }, 
    { path: "/blog", name: "Blog", component: Blog }, 
    { path: "/blog/post/:id", name: "BlogView", component: BlogView }, 
    { path: "/contact", name: "Contact", component: Contact },  
    { path: "/book-event", name: "Book", component: Book }, 

    // //admin routes
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
    { path: "/admin/blogs", name: "Blogs", component: Blogs, meta: { requiresAuth: true }}, 
    { path: "/admin/addblog", name: "AddBlog", component: AddBlog, meta: { requiresAuth: true }},  
    { path: "/admin/blog/post/:id", name: "ViewBlog", component: ViewBlog, meta: { requiresAuth: true }},  
    { path: "/admin/userbookings", name: "UserBooking", component: UserBooking, meta: { requiresAuth: true }},  
    { path: "/admin/adminsettings", name: "AdminSetting", component: AdminSetting, meta: { requiresAuth: true }}, 
    { path: "/admin/slider", name: "Slider", component: Slider, meta: { requiresAuth: true }}, 
    { path: "/admin/addslider", name: "AddSlider", component: AddSlider, meta: { requiresAuth: true }}, 
    { path: "/admin/gallery", name: "Gallery", component: Gallery, meta: { requiresAuth: true }},  
    { path: "/admin/addgallery", name: "AddGallery", component: AddGallery, meta: { requiresAuth: true }}, 
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