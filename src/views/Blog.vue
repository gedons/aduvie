<template>
    <!-- ===== Header Start ===== -->
    <header class="g s r vd ya cj bg-white" :class="{ 'hh sm _k dj bl ll': stickyMenu }">
        <div class="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
            <div class="vd to/4 tc wf yf">
                <a href="index.html">
                    <img src="../assets/images/aduvie.png" alt="Logo Light" class="w-32 h-16" />
                    <img class="xc nm" src="../assets/images/logo-dark.svg" alt="Logo Dark" />
                </a>

                <!-- Hamburger Toggle Button -->
                <button class="po rc" @click="toggleMenu">
                    <span class="rc i pf re pd">
                        <span class="du-block h q vd yc">
                            <span class="rc i r s eh um tg te rd eb ml jl dl" :class="{ 'ue el': menuOpen }"></span>
                            <span class="rc i r s eh um tg te rd eb ml jl fl" :class="{ 'ue qr': menuOpen }"></span>
                            <span class="rc i r s eh um tg te rd eb ml jl gl" :class="{ 'ue hl': menuOpen }"></span>
                        </span>
                        <span class="du-block h q vd yc lf">
                            <span class="rc eh um tg ml jl el h na r ve yc" :class="{ 'sd dl': menuOpen }"></span>
                            <span class="rc eh um tg ml jl qr h s pa vd rd" :class="{ 'sd rr': menuOpen }"></span>
                        </span>
                    </span>
                </button>
                <!-- Hamburger Toggle Button -->
            </div>

            <!-- Navigation Links -->
            <div class="vd wo/4 sd qo f ho oo wf yf" :class="{ 'd hh rm sr td ud qg ug jc yh': !menuOpen }">

                <!-- desktop Navigation -->
                <nav>
                    <ul class="tc _o sf yo cg ep lg:ml-10" v-if="menuOpen">
                        <li><router-link :to="{ name: 'Index' }" active-class="active" exact-active-class="active"
                                class="xl hover:bg-indigo-500 hover:text-yellow-50 rounded-lg px-3 py-3">Home</router-link>
                        </li>
                        <li><router-link :to="{ name: 'FrontGallery' }" active-class="active"
                                exact-active-class="active"
                                class="xl hover:bg-indigo-500 hover:text-yellow-50 rounded-lg px-3 py-3">Gallery</router-link>
                        </li>
                        <li><router-link :to="{ name: 'Blog' }" active-class="active" exact-active-class="active"
                                class="xl hover:bg-indigo-500 hover:text-yellow-50 rounded-lg px-3 py-3">Blog</router-link>
                        </li>
                        <li><router-link :to="{ name: 'Contact' }" active-class="active" exact-active-class="active"
                                class="xl hover:bg-indigo-500 hover:text-yellow-50 rounded-lg px-3 py-3">Contact
                                Us</router-link></li>
                    </ul>
                </nav>

                <!-- mobile Navigation -->
                <nav>
                    <ul class="tc _o sf yo cg ep" v-if="!menuOpen">
                        <li><router-link :to="{ name: 'Index' }" active-class="active" exact-active-class="active"
                                class="xl hover:bg-indigo-500 hover:text-yellow-50 rounded-lg px-3 py-3">Home</router-link>
                        </li>
                        <li><router-link :to="{ name: 'FrontGallery' }" active-class="active"
                                exact-active-class="active"
                                class="xl hover:bg-indigo-500 hover:text-yellow-50 rounded-lg px-3 py-3">Gallery</router-link>
                        </li>
                        <li><router-link :to="{ name: 'Blog' }" active-class="active" exact-active-class="active"
                                class="xl hover:bg-indigo-500 hover:text-yellow-50 rounded-lg px-3 py-3">Blog</router-link>
                        </li>
                        <li><router-link :to="{ name: 'Contact' }" active-class="active" exact-active-class="active"
                                class="xl hover:bg-indigo-500 hover:text-yellow-50 rounded-lg px-3 py-3">Contact
                                Us</router-link></li>
                    </ul>
                </nav>

                <div class="tc wf ig pb no">
                    <a href="signup.html" :class="{ 'hh/[0.15]': page === 'home', 'sh': page === 'home' && stickyMenu }"
                        class="lk gh dk rg tc wf xf _l gi hi  bg-indigo-500">Book Your Event</a>
                </div>
            </div>
            <!-- Navigation Links -->
        </div>
    </header>
    <!-- ===== Header End ===== -->

    <!-- ===== Blog Start ===== -->
    <section class="ji gp uq mt-20">
        <!-- Section Title Start -->
        <div>
            <div class="animate_top bb ze rj ki xn vq">
                <h2 x-text="sectionTitle" class="fk vj pr kk wm on/5 gq/2 bb _b">
                    Latest Blogs Post
                </h2>
                <p class="bb on/5 wo/5 hq">
                    Stay ahead of the curve with our insights into the latest trends shaping the event industry.
                </p>
            </div>


        </div>
        <!-- Section Title End -->

        <div class="bb ye ki xn vq jb jo">
            <div v-if="loading" class="flex justify-center items-center mt-3">
                <svg class="w-10 h-10" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(2 1)" stroke="#000" stroke-width="1.5">
                            <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#000">
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="1;0;0;0;0;0;0;0"
                                    calcMode="linear" repeatCount="indefinite" />
                            </circle>
                            <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#000">
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;1;0;0;0;0;0;0"
                                    calcMode="linear" repeatCount="indefinite" />
                            </circle>
                            <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#000">
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;1;0;0;0;0;0"
                                    calcMode="linear" repeatCount="indefinite" />
                            </circle>
                            <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#000">
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;1;0;0;0;0"
                                    calcMode="linear" repeatCount="indefinite" />
                            </circle>
                            <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#000">
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;1;0;0;0"
                                    calcMode="linear" repeatCount="indefinite" />
                            </circle>
                            <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#000">
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;1;0;0"
                                    calcMode="linear" repeatCount="indefinite" />
                            </circle>
                            <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#000">
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;0;1;0"
                                    calcMode="linear" repeatCount="indefinite" />
                            </circle>
                            <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#000">
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;0;0;1"
                                    calcMode="linear" repeatCount="indefinite" />
                            </circle>
                        </g>
                    </g>
                </svg>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-if="blogPosts.length === 0" class="p-2.5 xl:p-5">
                    <p class="font-semibold text-sm leading-5 text-gray-700">No Blog Available!!!</p>
                </div>
                <!-- Blog Item -->
                <div v-else v-for="blog in blogPosts" :key="blog._id" class="animate_top sg vk rm xm mb-7">
                    <div class="c rc i z-1 pg">
                        <img class="w-full h-48 border rounded-lg" :src="`${back_url}/${blog.image}`" alt="Blog" />

                        <div class="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                            <router-link :to="{ name: 'BlogView', params: { id: blog._id } }"
                                class="vc ek rg lk gh sl ml il gi hi bg-indigo-500 hover:bg-indigo-400">Read
                                More</router-link>
                        </div>
                    </div>

                    <div class="yh">
                        <div class="tc uf wf ag jq">
                            <div class="tc wf ag">
                                <img src="../assets/images/icon-man.svg" alt="User" />
                                <p>Admin</p>
                            </div>
                            <div class="tc wf ag">
                                <img src="../assets/images/icon-calender.svg" alt="Calender" />
                                <p>{{ formatDate(blog.createdAt) }}</p>
                            </div>
                        </div>
                        <h4 class="ek tj ml il kk wm xl eq lb">
                            <router-link :to="{ name: 'BlogView', params: { id: blog._id } }"> {{ blog.title
                                }}</router-link>
                        </h4>
                    </div>
                </div>


            </div>
        </div>
    </section>
    <!-- ===== Blog End ===== -->


    <!-- ===== Footer Start q===== -->
    <footer>
        <div class="bb ze ki xn 2xl:ud-px-0">
            <!-- Footer Top -->
            <div class="ji gp">
                <div class="tc uf ap gg fp">
                    <div class="animate_top zd/2 to/4">
                        <a href="index.html">
                            <img src="../assets/images/aduvie.png" alt="Logo" class="om" />
                            <img src="../assets/images/logo-dark.svg" alt="Logo" class="xc nm" />
                        </a>

                        <p class="lc fb"> Aduvie Event Center, where every moment is an occasion to remember!</p>

                        <ul class="tc wf cg">
                            <li>
                                <a href="https://www.facebook.com/aduvieschool/">
                                    <svg class="vh ul cl il" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_48_1499)">
                                            <path
                                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                                                fill="" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_48_1499">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/aduvieschool?lang=en">
                                    <svg class="vh ul cl il" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_48_1502)">
                                            <path
                                                d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                                                fill="" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_48_1502">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/aduvieaduvie/">
                                    <svg class="vh ul cl il" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_48_1505)">
                                            <path
                                                d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                                                fill="" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_48_1505">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="vd ro tc sf rn un gg vn">
                        <div class="animate_top">
                            <h4 class="kk wm tj ec">Quick Links</h4>

                            <ul>
                                <li><a href="#" class="sc xl vb">Home</a></li>
                                <li><a href="#" class="sc xl vb">Gallery</a></li>
                                <li><a href="#" class="sc xl vb">Blog</a></li>
                                <li><a href="#" class="sc xl vb">Contact Us</a></li>
                            </ul>
                        </div>

                        <div class="animate_top">
                            <h4 class="kk wm tj ec">Services</h4>

                            <ul>
                                <li><a href="#" class="sc xl vb">Catering Services</a></li>
                                <li><a href="#" class="sc xl vb">Décor and Design</a></li>
                                <li><a href="#" class="sc xl vb">On-Site Staffing</a></li>
                                <li><a href="#" class="sc xl vb">Vendor Coordination</a></li>
                            </ul>
                        </div>

                        <div class="animate_top">
                            <h4 class="kk wm tj ec">Newsletter</h4>
                            <p class="ac qe">Subscribe to receive updates</p>

                            <form action="#" method="POST">
                                <div class="i">
                                    <input type="text" placeholder="Email address"
                                        class="vd sm _g ch pm vk xm rg gm dm dn gi mi" />

                                    <button class="h q fi">
                                        <svg class="th vm ul" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_48_1487)">
                                                <path
                                                    d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                                                    fill="" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_48_1487">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Top -->

            <!-- Footer Bottom -->
            <div class="bh ch pm tc uf sf yo wf xf ap cg fp bj">
                <div class="animate_top">
                    <ul class="tc wf gg">
                        <li><a href="#" class="xl">English</a></li>
                        <li><a href="#" class="xl">Privacy Policy</a></li>
                        <li><a href="#" class="xl">Support</a></li>
                    </ul>
                </div>

                <div class="animate_top">
                    <p>&copy; 2024 Aduvie Events. All rights reserved</p>
                </div>
            </div>
            <!-- Footer Bottom -->
        </div>
    </footer>
    <!-- ===== Footer End ===== -->

</template>

<script>
import axios from 'axios';
import api from '../api';
import { Swiper, SwiperSlide } from 'swiper/vue';
import moment from 'moment';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bannerImage from '../assets/images/banner.jpg';
import bannerImage1 from '../assets/images/slide-3.jpg';
import bannerImage2 from '../assets/images/slide-4.jpg';
import bannerImage3 from '../assets/images/slide-2.jpg';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    data() {
        return {
            loading: true,
            menuOpen: true,
            bgImage: bannerImage,
            bgImage1: bannerImage1,
            bgImage2: bannerImage2,
            bgImage3: bannerImage3,
            sliderImages: [],
            blogPosts: [],
            //back_url: 'http://localhost:5000',
            back_url:'https://aduvieapi.onrender.com'
        };
    },

    created() {
        this.getAllSliderImages();
        this.getBlogPost();
    },

    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        async getAllSliderImages() {
            try {
                const response = await axios.get(`${api}/sliders/slider`);
                this.sliderImages = response.data;
                this.loading = false;
            } catch (error) {
                console.error('Error fetching slider images:', error.response.data);
                this.$toast.error('Failed to fetch slider images.');
                this.loading = false;
            }
        },
        getBlogPost() {
            axios.get(`${api}/blogs/all`).then((response) => {
                this.blogPosts = response.data;
                this.loading = false;
            })
                .catch((error) => {
                    console.error('Error getting blog posts:', error);
                    this.loading = false;
                });
        },
        formatDate(date) {
            return moment(date).fromNow();
        },
    }
};
</script>

<style scoped>
.active {
    background-color: #6366f1;
    color: #f9fafb;
}
</style>