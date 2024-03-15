import { createRouter, createWebHistory } from "vue-router";
import store from '../store';

import Index from '../views/Index.vue';
import Login from '../views/Login.vue';


// import UserAccount from '../views/User/UserAccount.vue';
// import UpdateAccount from '../views/User/UpdateAccount.vue';
// import ChangePassword from '../views/User/ChangePassword.vue';
// import PendingOrders from '../views/User/PendingOrders.vue';
// import UserOrders from '../views/User/UserOrders.vue';

// import UserProducts from '../views/Shop.vue';
// import ProductCategory from '../views/ProductCategory.vue';
// import UserOrder from '../views/UserOrder.vue';
// import ProductDetails from '../views/ProductDetails.vue';
// import SearchResults from '../views/SearchResults.vue';
// import Cart from '../views/Cart.vue';
// import Terms from '../views/Terms.vue';
// import Contact from '../views/Contact.vue';
// import About from '../views/About.vue'

// import Dashboard from '../views/Admin/Dashboard.vue';
// import Categories from '../views/Admin/Categories.vue';
// import Products from '../views/Admin/Products.vue';
// import AddProduct from '../views/Admin/AddProduct.vue';
// import Orders from '../views/Admin/Orders.vue';
// import Customers from '../views/Admin/Customers.vue';
// import CustomerOrder from '../views/Admin/CustomerOrder.vue';
// import Settings from '../views/Admin/Settings.vue';
// import Banner from '../views/Admin/Banner.vue';
// import NewBanner from '../views/Admin/NewBanner.vue';

 

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

    //user front routes
    // { path: "/shop", name: "UserProducts", component: UserProducts }, 
    // { path: "/checkout", name: "UserOrder", component: UserOrder }, 
    // { path: '/category/:categoryId',name: 'ProductCategory', component: ProductCategory},
    // { path: "/product/:id/:productName", name: "ProductDetails", component: ProductDetails },  
    // { path: '/cart', name: 'Cart', component: Cart},
    // { path: "/terms", name: "Terms", component: Terms },  
    // { path: "/about", name: "Terms", component: About },  
    // { path: "/contact", name: "Contact", component: Contact },  
    // {
    //   path: '/user/account',
    //   name: 'UserAccount',
    //   component: UserAccount,
    //   meta: {
    //     requiresAuth: true,  
    //     isUser: true, 
    //   },
    // },
    // {
    //   path: '/user/manage-account',
    //   name: 'UpdateAccount',
    //   component: UpdateAccount,
    //   meta: {
    //     requiresAuth: true,  
    //     isUser: true, 
    //   },
    // },
    // {
    //   path: '/user/change-password',
    //   name: 'ChangePassword',
    //   component: ChangePassword,
    //   meta: {
    //     requiresAuth: true,  
    //     isUser: true, 
    //   },
    // },

    // {
    //   path: '/user/all-orders',
    //   name: 'UserOrders',
    //   component: UserOrders,
    //   meta: {
    //     requiresAuth: true,  
    //     isUser: true, 
    //   },     
    // },

    // {
    //   path: '/search-results',
    //   name: 'SearchResults',
    //   component: SearchResults,
    // },


    // {
    //   path: '/user/pending-orders',
    //   name: 'PendingOrders',
    //   component: PendingOrders,
    //   meta: {
    //     requiresAuth: true,  
    //     isUser: true, 
    //   },
    // },


    // //end user routes



    // //admin routes
    // {
    //   path: '/admin/dashboard',
    //   name: 'Dashboard',
    //   component: Dashboard,      
    //   meta: {
    //     requiresAuth: true,
    //     isAdmin: true,
    //   },
    // },

    // //category
    // { path: "/admin/categories", name: "Categories", component: Categories, meta: { requiresAuth: true, isAdmin: true, }, },  
    // { path: "/admin/category/:id", name: "CategoryEdit",  meta: { requiresAuth: true, isAdmin: true, }, },  
       

    // //products
    // { path: "/admin/products", name: "Products", component: Products, meta: { requiresAuth: true, isAdmin: true, }, },  
    // { path: "/admin/products/:id", name: "ProductEdit",  meta: { requiresAuth: true, isAdmin: true, }, },  
    // { path: "/admin/product/newproduct", name: "AddProduct", component: AddProduct, meta: { requiresAuth: true, isAdmin: true, }, },    

    // //admin order
    // { path: "/admin/orders", name: "Orders", component: Orders, meta: { requiresAuth: true, isAdmin: true, }, },  

    // //admin customers
    // { path: "/admin/customers", name: "Customers", component: Customers, meta: { requiresAuth: true, isAdmin: true, }, }, 
    // { path: "/admin/:userId/orders", name: "CustomerOrder", component: CustomerOrder, meta: { requiresAuth: true, isAdmin: true, }, },  

    // //admin settings
    // { path: "/admin/settings", name: "Settings", component: Settings, meta: { requiresAuth: true, isAdmin: true, }, },

    //  //admin banner
    //  { path: "/admin/banner", name: "Banner", component: Banner, meta: { requiresAuth: true, isAdmin: true, }, },
    //  { path: "/admin/newbanner", name: "NewBanner", component: NewBanner, meta: { requiresAuth: true, isAdmin: true, }, },
    //end admin routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAdminLoggedIn = store.getters['isAdminAuthenticated'];
  const isUserLoggedIn = store.getters['isUserAuthenticated'];

  const isAdminRoute = to.matched.some((record) => record.meta.isAdmin);
  const isUserRoute = to.matched.some((record) => record.meta.isUser);

  if (isAdminRoute && !isAdminLoggedIn) {
    // Redirect if admin route and not logged in as admin
    next('/admin/login');
  } else if (isUserRoute && !isUserLoggedIn) {
    // Redirect if user route and not logged in as user
    next('/login');
  } else {
    next(); // Proceed to the route
  }
});


export default router;