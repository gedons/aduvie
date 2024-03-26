<template>
    <!-- ===== Header Start ===== -->
    <header class="g s r vd ya cj bg-white" :class="{ 'hh sm _k dj bl ll': stickyMenu }">
        <div class="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
            <div class="vd to/4 tc wf yf">
                <a href="index.html">
                    <img src="../assets/images/main.jpeg" alt="Logo Light" class="w-20 h-14" />
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
                                class="xl hover:bg-sky hover:text-yellow-50 rounded-lg px-3 py-3">Home</router-link>
                        </li>
                        <li><router-link :to="{ name: 'FrontGallery' }" active-class="active"
                                exact-active-class="active"
                                class="xl hover:bg-sky hover:text-yellow-50 rounded-lg px-3 py-3">Gallery</router-link>
                        </li>
                        <li><router-link :to="{ name: 'Blog' }" active-class="active" exact-active-class="active"
                                class="xl hover:bg-sky hover:text-yellow-50 rounded-lg px-3 py-3">Blog</router-link>
                        </li>
                        <li><router-link :to="{ name: 'Contact' }" active-class="active" exact-active-class="active"
                                class="xl hover:bg-sky hover:text-yellow-50 rounded-lg px-3 py-3">Contact
                                Us</router-link></li>
                    </ul>
                </nav>

                <!-- mobile Navigation -->
                <nav>
                    <ul class="tc _o sf yo cg ep" v-if="!menuOpen">
                        <li><router-link :to="{ name: 'Index' }" active-class="active" exact-active-class="active"
                                class="xl hover:bg-sky hover:text-yellow-50 rounded-lg px-3 py-3">Home</router-link>
                        </li>
                        <li><router-link :to="{ name: 'FrontGallery' }" active-class="active"
                                exact-active-class="active"
                                class="xl hover:bg-sky hover:text-yellow-50 rounded-lg px-3 py-3">Gallery</router-link>
                        </li>
                        <li><router-link :to="{ name: 'Blog' }" active-class="active" exact-active-class="active"
                                class="xl hover:bg-sky hover:text-yellow-50 rounded-lg px-3 py-3">Blog</router-link>
                        </li>
                        <li><router-link :to="{ name: 'Contact' }" active-class="active" exact-active-class="active"
                                class="xl hover:bg-indigo-500 hover:text-yellow-50 rounded-lg px-3 py-3">Contact
                                Us</router-link></li>
                    </ul>
                </nav>

                <div class="tc wf ig pb no">
                    <router-link :to="{name: 'Book'}" :class="{ 'hh/[0.15]': page === 'home', 'sh': page === 'home' && stickyMenu }"
                    class="lk gh dk rg tc wf xf _l gi hi  bg-sky">Book Your Event</router-link>
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
                    Welcome to Our Gallery
                </h2>
                <p class="bb on/5 wo/5 hq">
                    Our gallery showcases the creativity, elegance, and joy that we bring to every occasion.
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
                <div v-if="galleryImages.length === 0" class="p-2.5 xl:p-5">
                    <p class="font-semibold text-sm leading-5 text-gray-700">No Image Available!!!</p>
                </div>
                <!-- Gallery Item -->
                <div v-else v-for="gallery in galleryImages" :key="gallery._id" class="animate_top sg vk rm xm mb-7">
                    <div class="c rc i z-1 pg">
                        <img class="w-full h-48 border rounded-lg" :src="`${back_url}${gallery.imageUrl}`" alt="Blog" />

                        <div class="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                            <button @click="openModal(`${back_url}${gallery.imageUrl}`)"
                                class="vc ek rg lk gh sl ml il gi hi bg-sky hover:bg-sky">View Picture</button>

                        </div>
                    </div>

                    <div class="yh">
                        <div class="tc uf wf ag jq">

                            <div class="tc wf ag">
                                <img src="../assets/images/icon-calender.svg" alt="Calender" />
                                <p>{{ formatDate(gallery.createdAt) }}</p>
                            </div>
                        </div>
                        <h4 class="ek tj ml il kk wm xl eq lb hover:text-sky">
                            <!-- <router-link :to="{ name: 'BlogView', params: { title: blog.title } }"> {{ blog.title
                                }}</router-link> -->
                            <a @click="openModal(`${back_url}${gallery.imageUrl}`)" class="cursor-pointer ">{{
                              gallery.galleryText }}</a>
                        </h4>
                    </div>
                </div>
                <!-- Modal component -->
                <Modal :showModal="isModalVisible" :selectedImage="selectedImage" @close-modal="closeModal" />

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
                            <img src="../assets/images/main.jpeg" alt="Logo" class="om w-40" />
                            <img src="../assets/images/logo-dark.svg" alt="Logo" class="xc nm" />
                        </a>

                        <p class="lc fb"> Aduvie Event Center, where every moment is an occasion to remember!</p>

                        <ul class="tc wf cg">
                            <li>
                                <a href="https://www.facebook.com/aduvieschool?mibextid=ZbWKwL">
                                    <svg class="vh ul cl il" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_48_1499)">
                                            <path
                                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                                                fill="#478AC9" />
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
                                <a href=" https://x.com/aduvieschool?s=20">
                                    <svg class="vh ul cl il" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_48_1502)">
                                            <path
                                                d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                                                fill="#478AC9" />
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
                                <a href="https://www.instagram.com/aduvieeventscentre?igsh=MXQxa214Y3phNmt4dQ==">
                                    <svg width="18px" height="19px" viewBox="0 0 20 20" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        fill="#000000">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title>instagram [#167]</title>
                                            <desc>Created with Sketch.</desc>
                                            <defs> </defs>
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                                                fill-rule="evenodd">
                                                <g id="Dribbble-Light-Preview"
                                                    transform="translate(-340.000000, -7439.000000)" fill="#478AC9">
                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                        <path
                                                            d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                                                            id="instagram-[#167]"> </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="vd ro tc sf rn un gg vn">
                        <div class="animate_top">
                            <h4 class="kk wm tj ec">Quick Links</h4>

                            <ul>
                                <li><router-link :to="{ name: 'Index' }"
                                        class="sc xl vb hover:text-[#478AC9]">Home</router-link></li>
                                <li><router-link :to="{ name: 'FrontGallery' }"
                                        class="sc xl vb hover:text-[#478AC9]">Gallery</router-link></li>
                                <li><router-link :to="{ name: 'Blog' }"
                                        class="sc xl vb hover:text-[#478AC9]">Blog</router-link></li>
                                <li><router-link :to="{ name: 'Contact' }" class="sc xl vb hover:text-[#478AC9]">Contact
                                        Us</router-link></li>
                            </ul>
                        </div>

                        <div class="animate_top">
                            <h4 class="kk wm tj ec">Events</h4>

                            <ul>
                                <li><router-link :to="{name: 'Decor'}" class="sc xl vb hover:text-[#478AC9]">Décor and Design</router-link></li>
                                <li><router-link :to="{name: 'Staffing'}" class="sc xl vb hover:text-[#478AC9]">On-Site Staffing</router-link></li>
                                <li><router-link :to="{name: 'Vendor'}" class="sc xl vb hover:text-[#478AC9]">Vendor Coordination</router-link></li>
                            </ul>
                        </div>

                        <div class="animate_top">
                            <h4 class="kk wm tj ec">Services</h4>

                            <ul>
                                <li><router-link :to="{name: 'Catering'}" class="sc xl vb hover:text-[#478AC9]">Catering Services</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Top -->

            <!-- Footer Bottom -->
            <div class="bh ch pm tc uf sf yo wf xf ap cg fp bj">
                <div class="animate_top">
                    <ul class="tc wf gg">
                        <li><a href="#" class="xl hover:text-[#478AC9]">English</a></li>
                        <li><a href="#" class="xl hover:text-[#478AC9]">Privacy Policy</a></li>
                        <li><a href="#" class="xl hover:text-[#478AC9]">Support</a></li>
                    </ul>
                </div>

                <div class="animate_top">
                    <p>&copy; 2024 Aduvie Events Center. All rights reserved</p>
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
import Modal from './Modal.vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
        Modal
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
            galleryImages: [],
            //back_url: 'http://localhost:5000',
            isModalVisible: false,
            selectedImage: '',
            back_url: 'https://aduvieapi.onrender.com'
        };
    },

    created() {
        this.getAllGalleryImages();
    },

    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        async getAllGalleryImages() {
            try {
                const response = await axios.get(`${api}/galleries/gallery`);
                this.galleryImages = response.data;
                this.loading = false;
            } catch (error) {
                console.error('Error fetching gallery images:', error.response.data);
                this.$toast.error('Failed to fetch gallery images.');
                this.loading = false;
            }
        },
        formatDate(date) {
            return moment(date).fromNow();
        },
        openModal(imageUrl) {
            this.selectedImage = imageUrl;
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
};
</script>

<style scoped>
.active {
    background-color: #478AC9;
    color: #f9fafb;
}
</style>