import { createRouter, createWebHistory } from "vue-router";
import store from '../store';

import Index from '../views/Index.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Admin/Index.vue';
import Events from '../views/Admin/Events.vue';
import AddEvent from '../views/Admin/AddEvent.vue';
import UserBooking from '../views/Admin/UserBooking.vue';
import ViewUserBooking from '../views/Admin/ViewUserBooking.vue';
import Blogs from '../views/Admin/Blogs.vue';
import AddBlog from '../views/Admin/AddBlog.vue';
import ViewBlog from '../views/Admin/ViewBlog.vue';
import AdminSetting from '../views/Admin/AdminSetting.vue';
import Slider from '../views/Admin/Slider.vue';
import AddSlider from '../views/Admin/AddSlider.vue';
import Gallery from '../views/Admin/Gallery.vue';
import AddGallery from '../views/Admin/AddGallery.vue';
import AdminContact from '../views/Admin/Contact.vue';
import SendEmail from '../views/Admin/SendEmail.vue';
import ViewSendEmail from '../views/Admin/ViewSendEmail.vue';
import FrontGallery from '../views/FrontGallery.vue';
import Blog from '../views/Blog.vue';
import BlogView from '../views/BlogView.vue';
import Contact from '../views/Contact.vue';
import Book from '../views/Book.vue';
import Vendor from '../views/Vendor.vue';
import Staffing from '../views/Staffing.vue';
import Catering from '../views/Catering.vue';
import Decor from '../views/Decor.vue';



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
    { path: "/catering", name: "Catering", component: Catering }, 
    { path: "/vendor", name: "Vendor", component: Vendor }, 
    { path: "/decor", name: "Decor", component: Decor }, 
    { path: "/staffing", name: "Staffing", component: Staffing }, 

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
    { path: "/admin/blogs", name: "Blogs", component: Blogs, meta: { requiresAuth: true }}, 
    { path: "/admin/addblog", name: "AddBlog", component: AddBlog, meta: { requiresAuth: true }},  
    { path: "/admin/blog/post/:id", name: "ViewBlog", component: ViewBlog, meta: { requiresAuth: true }},  
    { path: "/admin/userbookings", name: "UserBooking", component: UserBooking, meta: { requiresAuth: true }},  
    { path: "/admin/userbookings/:id", name: "ViewUserBooking", component: ViewUserBooking, meta: { requiresAuth: true }}, 
    { path: "/admin/adminsettings", name: "AdminSetting", component: AdminSetting, meta: { requiresAuth: true }}, 
    { path: "/admin/slider", name: "Slider", component: Slider, meta: { requiresAuth: true }}, 
    { path: "/admin/addslider", name: "AddSlider", component: AddSlider, meta: { requiresAuth: true }}, 
    { path: "/admin/gallery", name: "Gallery", component: Gallery, meta: { requiresAuth: true }},  
    { path: "/admin/addgallery", name: "AddGallery", component: AddGallery, meta: { requiresAuth: true }}, 
    { path: "/admin/contact", name: "AdminContact", component: AdminContact, meta: { requiresAuth: true }}, 
    { path: "/admin/sendemail", name: "SendEmail", component: SendEmail, meta: { requiresAuth: true }}, 
    { path: "/admin/sendemail/:id", name: "ViewSendEmail", component: ViewSendEmail, meta: { requiresAuth: true }}, 
];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
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