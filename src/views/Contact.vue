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


    <!-- ===== Contact Start ===== -->
    <section class="i pg fh rm ji gp uq mt-20 md:mt-0">
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
                        <p><a href="#">support@auduvieevents.com</a></p>
                    </div>
                    <div class="fb">
                        <h4 class="wj kk wm cc">Office Location</h4>
                        <p>1 Aduvie Close, Off Aduvie Way, Jahi, Jiru, Nigeria</p>
                    </div>
                    <div class="fb">
                        <h4 class="wj kk wm cc">Phone Number</h4>
                        <p><a href="#">+234 803 718 5130</a></p>
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
                </div>

                <div class="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
                    <form @submit.prevent="submitContactForm">
                        <div class="tc sf yo ap zf ep qb">
                            <div class="vd to/2">
                                <label class="rc ac" for="fullname">Full name</label>
                                <input type="text" v-model="name" placeholder="Devid Wonder"
                                    class="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" required />
                            </div>

                            <div class="vd to/2">
                                <label class="rc ac" for="email">Email address</label>
                                <input type="email" v-model="email" placeholder="example@gmail.com"
                                    class="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" required />
                            </div>
                        </div>

                        <div class="tc sf yo ap zf ep qb">
                            <div class="vd to/2">
                                <label class="rc ac" for="phone">Phone number</label>
                                <input type="text" v-model="phone" placeholder="+234 54 3433 223"
                                    class="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" required />
                            </div>

                            <div class="vd to/2">
                                <label class="rc ac" for="subject">Subject</label>
                                <input type="text" v-model="subject" placeholder="Type your subject"
                                    class="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" required />
                            </div>
                        </div>

                        <div class="fb">
                            <label class="rc ac" for="message">Message</label>
                            <textarea placeholder="Message" rows="4" v-model="message"
                                class="vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci"></textarea>
                        </div>

                        <div class="tc xf">
                            <button v-if="loading" :disabled="loading" :class="{
        'cursor-not-allowed': loading,
        'hover:bg-gray-700': loading,
    }" class="vc rg lk gh ml il hi gi _l bg-[#478AC9]">
                                <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                Sending...
                            </button>
                            <button v-else class="vc rg lk gh ml il hi gi _l bg-[#478AC9]">Send Message</button>
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
            loading: false,
            menuOpen: true,
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            //back_url: 'http://localhost:5000',
            back_url: 'https://aduvieapi.onrender.com'
        };
    },


    methods: {

        async submitContactForm() {
            try {
                this.loading = true;
                const response = await axios.post(`${api}/contacts/submit`, {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    subject: this.subject,
                    message: this.message
                });
                this.$toast.success('Message sent successfully. We will be in touch', {
                    timeout: 3000,
                });
                this.name = '';
                this.email = '';
                this.phone = '';
                this.subject = '';
                this.message = '';
                this.loading = false;
            } catch (error) {
                console.error('Error submitting contact form:', error.response.data);
                this.$toast.error('An error occurred while sending a form. Please try again later.', {
                    timeout: 3000,
                });
                this.loading = false;
            }
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
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