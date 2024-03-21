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

    <!-- ===== Blog Single Start ===== -->
    <section class="gj qp gr hj rp hr">
        <div class="bb ze ki xn 2xl:ud-px-0">
            <div class="tc sf yo zf kq">
                <div class="ro">
                    <div
                        class="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                        <img :src="`${back_url}/${blogPost.image}`" alt="Blog" />

                        <h2 class="ek vj 2xl:ud-text-title-lg kk wm nb gb">{{ blogPost.title }}</h2>

                        <ul class="tc uf cg 2xl:ud-gap-15 fb">
                            <li><span class="rc kk wm">Author: </span> Admin</li>
                            <li><span class="rc kk wm">Published On: </span> {{ formatDate(blogPost.createdAt) }}</li>

                        </ul>

                        <p class="ob" v-html="blogPost.content">
                        </p>




                        <ul class="tc wf bg sb">
                            <li>
                                <p class="sj kk wm tb">Share On:</p>
                            </li>
                            <li>
                                <a href="#" class="tc wf xf yd ad rg ml il ih wk">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_47_28)">
                                            <path
                                                d="M11.6663 11.25H13.7497L14.583 7.91663H11.6663V6.24996C11.6663 5.39163 11.6663 4.58329 13.333 4.58329H14.583V1.78329C14.3113 1.74746 13.2855 1.66663 12.2022 1.66663C9.93967 1.66663 8.33301 3.04746 8.33301 5.58329V7.91663H5.83301V11.25H8.33301V18.3333H11.6663V11.25Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_47_28">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="tc wf xf yd ad rg ml il jh wk">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_47_47)">
                                            <path
                                                d="M18.4683 4.71327C17.8321 4.99468 17.1574 5.1795 16.4666 5.26161C17.1947 4.82613 17.7397 4.14078 17.9999 3.33327C17.3166 3.73994 16.5674 4.02494 15.7866 4.17911C15.2621 3.61792 14.5669 3.24574 13.809 3.12043C13.0512 2.99511 12.2732 3.12368 11.596 3.48615C10.9187 3.84862 10.3802 4.42468 10.0642 5.12477C9.74812 5.82486 9.67221 6.60976 9.84825 7.35744C8.46251 7.28798 7.10686 6.92788 5.86933 6.30049C4.63179 5.67311 3.54003 4.79248 2.66492 3.71577C2.35516 4.24781 2.19238 4.85263 2.19326 5.46827C2.19326 6.67661 2.80826 7.74411 3.74326 8.36911C3.18993 8.35169 2.64878 8.20226 2.16492 7.93327V7.97661C2.16509 8.78136 2.44356 9.56129 2.95313 10.1842C3.46269 10.807 4.17199 11.2345 4.96075 11.3941C4.4471 11.5333 3.90851 11.5538 3.38576 11.4541C3.60814 12.1468 4.04159 12.7526 4.62541 13.1867C5.20924 13.6208 5.9142 13.8614 6.64159 13.8749C5.91866 14.4427 5.0909 14.8624 4.20566 15.1101C3.32041 15.3577 2.39503 15.4285 1.48242 15.3183C3.0755 16.3428 4.93 16.8867 6.82409 16.8849C13.2349 16.8849 16.7408 11.5741 16.7408 6.96827C16.7408 6.81827 16.7366 6.66661 16.7299 6.51827C17.4123 6.02508 18.0013 5.41412 18.4691 4.71411L18.4683 4.71327Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_47_47">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="tc wf xf yd ad rg ml il kh wk">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_47_50)">
                                            <path
                                                d="M11.1417 1.74502C9.14781 1.47074 7.12195 1.92715 5.43827 3.02999C3.75459 4.13283 2.52679 5.80761 1.98158 7.74508C1.43637 9.68255 1.61059 11.7519 2.47205 13.5709C3.33351 15.3899 4.82404 16.8359 6.66841 17.6417C6.61854 17.0015 6.66432 16.3575 6.80425 15.7309C6.95841 15.0317 7.88425 11.1784 7.88425 11.1784C7.69989 10.7651 7.60775 10.3167 7.61425 9.86419C7.61425 8.62669 8.32841 7.70336 9.21675 7.70336C9.37634 7.70103 9.53455 7.7331 9.68064 7.79738C9.82673 7.86166 9.95727 7.95665 10.0634 8.07588C10.1695 8.19511 10.2487 8.33578 10.2955 8.48835C10.3424 8.64091 10.3559 8.80178 10.3351 8.96002C10.3351 9.71002 9.85342 10.845 9.60175 11.91C9.55201 12.1053 9.54886 12.3096 9.59254 12.5064C9.63621 12.7031 9.72551 12.8869 9.85321 13.0428C9.98092 13.1987 10.1435 13.3225 10.3278 13.4041C10.5121 13.4857 10.713 13.5228 10.9142 13.5125C12.4959 13.5125 13.5559 11.4867 13.5559 9.09502C13.5559 7.26169 12.3417 5.88836 10.1034 5.88836C9.56789 5.86755 9.03373 5.95579 8.53336 6.14773C8.03298 6.33968 7.57684 6.63131 7.19262 7.00493C6.8084 7.37855 6.50413 7.82636 6.29827 8.32117C6.09241 8.81598 5.98926 9.34746 5.99508 9.88336C5.97122 10.4778 6.163 11.0608 6.53508 11.525C6.60461 11.5769 6.65538 11.65 6.67973 11.7333C6.70408 11.8166 6.70069 11.9055 6.67008 11.9867C6.63175 12.14 6.53508 12.5059 6.49675 12.64C6.48877 12.6855 6.47023 12.7285 6.4426 12.7655C6.41497 12.8026 6.37904 12.8326 6.33769 12.8532C6.29634 12.8738 6.25073 12.8844 6.20454 12.8841C6.15835 12.8838 6.11286 12.8727 6.07175 12.8517C4.91841 12.39 4.37508 11.1209 4.37508 9.67169C4.37508 7.29919 6.36175 4.45919 10.3367 4.45919C13.5001 4.45919 15.6034 6.77336 15.6034 9.24836C15.6034 12.5059 13.7892 14.955 11.1084 14.955C10.7077 14.9678 10.3103 14.8794 9.95286 14.6979C9.59541 14.5164 9.2895 14.2477 9.06342 13.9167C9.06342 13.9167 8.58175 15.8467 8.48675 16.2117C8.29282 16.8423 8.00667 17.4407 7.63758 17.9875C8.40675 18.2209 9.20591 18.3375 10.0092 18.3342C11.1039 18.3351 12.188 18.12 13.1994 17.7013C14.2108 17.2827 15.1297 16.6686 15.9035 15.8943C16.6772 15.12 17.2907 14.2007 17.7086 13.1889C18.1266 12.1772 18.3409 11.093 18.3393 9.99836C18.3382 7.98586 17.6091 6.04169 16.2864 4.52484C14.9638 3.00799 13.137 2.02091 11.1434 1.74586L11.1417 1.74502Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_47_50">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="tc wf xf yd ad rg ml il lh wk">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_47_53)">
                                            <path
                                                d="M5.78353 4.16665C5.78331 4.60867 5.6075 5.03251 5.29478 5.34491C4.98207 5.65732 4.55806 5.8327 4.11603 5.83248C3.674 5.83226 3.25017 5.65645 2.93776 5.34373C2.62536 5.03102 2.44997 4.60701 2.4502 4.16498C2.45042 3.72295 2.62622 3.29912 2.93894 2.98671C3.25166 2.67431 3.67567 2.49892 4.1177 2.49915C4.55972 2.49937 4.98356 2.67517 5.29596 2.98789C5.60837 3.30061 5.78375 3.72462 5.78353 4.16665ZM5.83353 7.06665H2.5002V17.5H5.83353V7.06665ZM11.1002 7.06665H7.78353V17.5H11.0669V12.025C11.0669 8.97498 15.0419 8.69165 15.0419 12.025V17.5H18.3335V10.8916C18.3335 5.74998 12.4502 5.94165 11.0669 8.46665L11.1002 7.06665Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_47_53">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>

                <div class="jn/2 so">

                    <div class="animate_top">
                        <h4 class="tj kk wm qb">More Posts</h4>
                        <div v-if="loading" class="flex justify-center items-center mt-3">
                            <svg class="w-10 h-10" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fill-rule="evenodd">
                                    <g transform="translate(2 1)" stroke="#000" stroke-width="1.5">
                                        <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#000">
                                            <animate attributeName="fill-opacity" begin="0s" dur="1.3s"
                                                values="1;0;0;0;0;0;0;0" calcMode="linear" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#000">
                                            <animate attributeName="fill-opacity" begin="0s" dur="1.3s"
                                                values="0;1;0;0;0;0;0;0" calcMode="linear" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#000">
                                            <animate attributeName="fill-opacity" begin="0s" dur="1.3s"
                                                values="0;0;1;0;0;0;0;0" calcMode="linear" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#000">
                                            <animate attributeName="fill-opacity" begin="0s" dur="1.3s"
                                                values="0;0;0;1;0;0;0;0" calcMode="linear" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#000">
                                            <animate attributeName="fill-opacity" begin="0s" dur="1.3s"
                                                values="0;0;0;0;1;0;0;0" calcMode="linear" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#000">
                                            <animate attributeName="fill-opacity" begin="0s" dur="1.3s"
                                                values="0;0;0;0;0;1;0;0" calcMode="linear" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#000">
                                            <animate attributeName="fill-opacity" begin="0s" dur="1.3s"
                                                values="0;0;0;0;0;0;1;0" calcMode="linear" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#000">
                                            <animate attributeName="fill-opacity" begin="0s" dur="1.3s"
                                                values="0;0;0;0;0;0;0;1" calcMode="linear" repeatCount="indefinite" />
                                        </circle>
                                    </g>
                                </g>
                            </svg>
                        </div>

                        <div v-else>
                            <div v-if="blogPosts.length === 0" class="p-2.5 xl:p-5">
                                <p class="font-semibold text-sm leading-5 text-gray-700">No Blog Available!!!</p>
                            </div>
                            <div v-else v-for="blog in blogPosts" :key="blog._id" class="tc fg 2xl:ud-gap-6 qb">
                                <img class="w-32 h-auto" :src="`${back_url}/${blog.image}`" alt="Blog" />
                                <h5 class="wj kk wm xl bn ml il">
                                    <router-link :to="{ name: 'BlogView', params: { id: blog._id } }">{{ blog.title
                                        }}</router-link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ===== Blog Single End ===== -->


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
            blogPost: [],
            blogPosts: [],
            //back_url: 'http://localhost:5000',
            back_url: 'https://aduvieapi.onrender.com'
        };
    },

    mounted() {
        this.fetchBlogPost();
        this.getBlogPost();
    },

    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        async fetchBlogPost() {
            try {
                const response = await axios.get(`${api}/blogs/single/${this.$route.params.id}`);
                this.blogPost = response.data;
            } catch (error) {
                console.error('Error fetching blog post:', error.response.data);
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