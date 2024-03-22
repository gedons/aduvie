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
                    <a href="signup.html" :class="{ 'hh/[0.15]': page === 'home', 'sh': page === 'home' && stickyMenu }"
                        class="lk gh dk rg tc wf xf _l gi hi  bg-sky">Book Your Event</a>
                </div>
            </div>
            <!-- Navigation Links -->
        </div>
    </header>
    <!-- ===== Header End ===== -->
    >

    <!-- ===== Contact Start ===== -->
    <section class="i pg fh rm ji gp uq">
        <!-- Bg Shapes -->

        <img src="../assets/images/shape-03.svg" alt="Shape" class="h ca u" />
        <img src="../assets/images/shape-07.svg" alt="Shape" class="h w da ee" />
        <img src="../assets/images/shape-12.svg" alt="Shape" class="h p s" />
        <img src="../assets/images/shape-13.svg" alt="Shape" class="h r q" />

        <!-- Section Title Start -->
        <div>
            <div class="animate_top bb ze rj ki xn vq">
                <h2 class="fk vj pr kk wm on/5 gq/2 bb _b">
                    Let’s Stay Connected
                </h2>
                <p class="bb on/5 wo/5 hq">
                    Have questions about hosting your event at Aduvie Events? Ready to start planning the celebration of
                    a lifetime? Get in touch with us today – we're here to help!
                </p>
            </div>


        </div>
        <!-- Section Title End -->

        <div class="i va bb ye ki xn wq jb mo">
            <div class="tc uf sn tf rn un zf xl:gap-10">
                <div class="animate_top w-full mn/5 to/3 vk sg hh sm yh rq i pg">
                    <!-- Bg Shapes -->
                    <img src="../assets/images/shape-03.svg" alt="Shape" class="h la x wd" />
                    <img src="../assets/images/shape-06.svg" alt="Shape" class="h la ma ne kf" />

                    <div class="fb">
                        <h4 class="wj kk wm cc">Email Address</h4>
                        <p><a href="#">support@startup.com</a></p>
                    </div>
                    <div class="fb">
                        <h4 class="wj kk wm cc">Office Location</h4>
                        <p>76/A, Green valle, Califonia USA.</p>
                    </div>
                    <div class="fb">
                        <h4 class="wj kk wm cc">Phone Number</h4>
                        <p><a href="#">+234 54 3433 2231</a></p>
                    </div>
                    <div class="fb">
                        <h4 class="wj kk wm cc">Skype Email</h4>
                        <p><a href="#">example@yourmail.com</a></p>
                    </div>

                    <span class="rc nd rh tm lc fb"></span>

                    <div>
                        <h4 class="wj kk wm qb">Social Media</h4>
                        <ul class="tc wf fg">
                            <li>
                                <a href="https://www.facebook.com/aduvieschool?mibextid=ZbWKwL"
                                    class="c tc wf xf ie ld rg ml il tl hover:bg-white">
                                    <svg class="th lm ml il" width="11" height="20" viewBox="0 0 11 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.83366 11.3752H9.12533L10.042 7.7085H6.83366V5.87516C6.83366 4.931 6.83366 4.04183 8.667 4.04183H10.042V0.96183C9.74316 0.922413 8.61475 0.833496 7.42308 0.833496C4.93433 0.833496 3.16699 2.35241 3.16699 5.14183V7.7085H0.416992V11.3752H3.16699V19.1668H6.83366V11.3752Z"
                                            fill="#478AC9" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href=" https://x.com/aduvieschool?s=20"
                                    class="c tc wf xf ie ld rg ml il tl hover:bg-white">
                                    <svg class="th lm ml il" width="20" height="16" viewBox="0 0 20 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.3153 2.18484C18.6155 2.4944 17.8733 2.6977 17.1134 2.78801C17.9144 2.30899 18.5138 1.55511 18.8001 0.666844C18.0484 1.11418 17.2244 1.42768 16.3654 1.59726C15.7885 0.979958 15.0238 0.57056 14.1901 0.432713C13.3565 0.294866 12.5007 0.436294 11.7558 0.835009C11.0108 1.23372 10.4185 1.86739 10.0708 2.63749C9.72313 3.40759 9.63963 4.27098 9.83327 5.09343C8.30896 5.01703 6.81775 4.62091 5.45645 3.93079C4.09516 3.24067 2.89423 2.27197 1.93161 1.08759C1.59088 1.67284 1.41182 2.33814 1.41278 3.01534C1.41278 4.34451 2.08928 5.51876 3.11778 6.20626C2.50912 6.1871 1.91386 6.02273 1.38161 5.72685V5.77451C1.38179 6.65974 1.68811 7.51766 2.24864 8.20282C2.80916 8.88797 3.58938 9.3582 4.45703 9.53376C3.89201 9.68688 3.29956 9.70945 2.72453 9.59976C2.96915 10.3617 3.44595 11.0281 4.08815 11.5056C4.73035 11.9831 5.50581 12.2478 6.30594 12.2627C5.51072 12.8872 4.60019 13.3489 3.62642 13.6213C2.65264 13.8938 1.63473 13.9716 0.630859 13.8503C2.38325 14.9773 4.4232 15.5756 6.50669 15.5737C13.5586 15.5737 17.415 9.73176 17.415 4.66535C17.415 4.50035 17.4104 4.33351 17.4031 4.17035C18.1537 3.62783 18.8016 2.95578 19.3162 2.18576L19.3153 2.18484Z"
                                            fill="#478AC9" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/aduvieeventscentre?igsh=MXQxa214Y3phNmt4dQ=="
                                    class="c tc wf xf ie ld rg ml il tl hover:bg-white">
                                    <svg class="th lm ml il" width="19" height="18" viewBox="0 0 19 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.36198 2.58327C4.36174 3.0695 4.16835 3.53572 3.82436 3.87937C3.48037 4.22301 3.01396 4.41593 2.52773 4.41569C2.0415 4.41545 1.57528 4.22206 1.23164 3.87807C0.887991 3.53408 0.69507 3.06767 0.695313 2.58144C0.695556 2.09521 0.888943 1.62899 1.23293 1.28535C1.57692 0.941701 2.04333 0.748781 2.52956 0.749024C3.01579 0.749267 3.48201 0.942654 3.82566 1.28664C4.1693 1.63063 4.36222 2.09704 4.36198 2.58327ZM4.41698 5.77327H0.750313V17.2499H4.41698V5.77327ZM10.2103 5.77327H6.56198V17.2499H10.1736V11.2274C10.1736 7.87244 14.5461 7.56077 14.5461 11.2274V17.2499H18.167V9.98077C18.167 4.32494 11.6953 4.53577 10.1736 7.31327L10.2103 5.77327Z"
                                            fill="#478AC9" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
                    <form action="https://formbold.com/s/unique_form_id" method="POST">
                        <div class="tc sf yo ap zf ep qb">
                            <div class="vd to/2">
                                <label class="rc ac" for="fullname">Full name</label>
                                <input type="text" name="fullname" id="fullname" placeholder="Devid Wonder"
                                    class="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" />
                            </div>

                            <div class="vd to/2">
                                <label class="rc ac" for="email">Email address</label>
                                <input type="email" name="email" id="email" placeholder="example@gmail.com"
                                    class="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" />
                            </div>
                        </div>

                        <div class="tc sf yo ap zf ep qb">
                            <div class="vd to/2">
                                <label class="rc ac" for="phone">Phone number</label>
                                <input type="text" name="phone" id="phone" placeholder="+234 54 3433 223"
                                    class="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" />
                            </div>

                            <div class="vd to/2">
                                <label class="rc ac" for="subject">Subject</label>
                                <input type="text" for="subject" id="subject" placeholder="Type your subject"
                                    class="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" />
                            </div>
                        </div>

                        <div class="fb">
                            <label class="rc ac" for="message">Message</label>
                            <textarea placeholder="Message" rows="4" name="message" id="message"
                                class="vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci"></textarea>
                        </div>

                        <div class="tc xf">
                            <button class="vc rg lk gh ml il hi gi _l bg-[#478AC9]">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- ===== Contact End ===== -->



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
                                    <svg class="vh ul cl il" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_48_1505)">
                                            <path
                                                d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                                                fill="#478AC9" />
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
                                <li><a href="#" class="sc xl vb hover:text-[#478AC9]">Home</a></li>
                                <li><a href="#" class="sc xl vb hover:text-[#478AC9]">Gallery</a></li>
                                <li><a href="#" class="sc xl vb hover:text-[#478AC9]">Blog</a></li>
                                <li><a href="#" class="sc xl vb hover:text-[#478AC9]">Contact Us</a></li>
                            </ul>
                        </div>

                        <div class="animate_top">
                            <h4 class="kk wm tj ec">Services</h4>

                            <ul>
                                <li><a href="#" class="sc xl vb hover:text-[#478AC9]">Catering Services</a></li>
                                <li><a href="#" class="sc xl vb hover:text-[#478AC9]">Décor and Design</a></li>
                                <li><a href="#" class="sc xl vb hover:text-[#478AC9]">On-Site Staffing</a></li>
                                <li><a href="#" class="sc xl vb hover:text-[#478AC9]">Vendor Coordination</a></li>
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
                        <li><a href="#" class="xl hover:text-[#478AC9]">English</a></li>
                        <li><a href="#" class="xl hover:text-[#478AC9]">Privacy Policy</a></li>
                        <li><a href="#" class="xl hover:text-[#478AC9]">Support</a></li>
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
            latestBlogPost: [],
            //back_url: 'http://localhost:5000',
            back_url: 'https://aduvieapi.onrender.com'
        };
    },

    created() {
        this.getAllSliderImages();
        this.getLatestBlogPost();
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
        getLatestBlogPost() {
            axios.get(`${api}/blogs/latest`).then((response) => {
                this.latestBlogPost = response.data;
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
    background-color: #478AC9;
    color: #f9fafb;
}
</style>