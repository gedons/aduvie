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
                    <router-link :to="{ name: 'Book' }"
                        :class="{ 'hh/[0.15]': page === 'home', 'sh': page === 'home' && stickyMenu }"
                        class="lk gh dk rg tc wf xf _l gi hi  bg-sky">Book Your Event</router-link>
                </div>
            </div>
            <!-- Navigation Links -->
        </div>
    </header>
    <!-- ===== Header End ===== -->

    <!-- ===== Team Start ===== -->
    <section class="i pg ji gp uq md:mt-0 mt-20">


        <!-- Section Title Start -->
        <div>
            <div class="animate_top bb ze rj ki xn vq">
                <h2 class="fk vj pr kk wm on/5 gq/2 bb _b">
                    Meet With Our Creative Team
                </h2>

            </div>

        </div>
        <!-- Section Title End -->

        <div class="bb ze i va ki xn xq jb jo">
            <div class="wc qf pn xo gg cp">
                <!-- Team Item -->
                <div class="animate_top rj">
                    <div class="c i pg z-1">
                        <img class="vd" src="../assets/images/team-01.png" alt="Team" />

                        <div class="ef im nl il">
                            <span class="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
                            <span class="h s p rc vd hd mh va"></span>
                            <div class="h s p vd ij jj xa">
                                <ul class="tc xf wf gg">
                                    <li>
                                        <a href="#">
                                            <svg class="uh vl ml il" width="10" height="18" viewBox="0 0 10 18"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="uh vl ml il" width="18" height="14" viewBox="0 0 18 14"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.4683 1.71333C16.8321 1.99475 16.1574 2.17956 15.4666 2.26167C16.1947 1.82619 16.7397 1.14085 16.9999 0.333333C16.3166 0.74 15.5674 1.025 14.7866 1.17917C14.2621 0.617982 13.5669 0.245803 12.809 0.120487C12.0512 -0.00482822 11.2732 0.123742 10.596 0.486211C9.91875 0.848679 9.38024 1.42474 9.06418 2.12483C8.74812 2.82492 8.67221 3.60982 8.84825 4.3575C7.46251 4.28805 6.10686 3.92794 4.86933 3.30055C3.63179 2.67317 2.54003 1.79254 1.66492 0.715833C1.35516 1.24788 1.19238 1.85269 1.19326 2.46833C1.19326 3.67667 1.80826 4.74417 2.74326 5.36917C2.18993 5.35175 1.64878 5.20232 1.16492 4.93333V4.97667C1.16509 5.78142 1.44356 6.56135 1.95313 7.18422C2.46269 7.80709 3.17199 8.23456 3.96075 8.39417C3.4471 8.53337 2.90851 8.55388 2.38576 8.45417C2.60814 9.14686 3.04159 9.75267 3.62541 10.1868C4.20924 10.6209 4.9142 10.8615 5.64159 10.875C4.91866 11.4428 4.0909 11.8625 3.20566 12.1101C2.32041 12.3578 1.39503 12.4285 0.482422 12.3183C2.0755 13.3429 3.93 13.8868 5.82409 13.885C12.2349 13.885 15.7408 8.57417 15.7408 3.96833C15.7408 3.81833 15.7366 3.66667 15.7299 3.51833C16.4123 3.02514 17.0013 2.41418 17.4691 1.71417L17.4683 1.71333Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="uh vl ml il" width="17" height="16" viewBox="0 0 17 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h4 class="yj go kk wm ob zb">Olivia Andrium</h4>
                    <p>Product Manager</p>
                </div>

                <!-- Team Item -->
                <div class="animate_top rj">
                    <div class="c i pg z-1">
                        <img class="vd" src="../assets/images/team-02.png" alt="Team" />

                        <div class="ef im nl il">
                            <span class="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
                            <span class="h s p rc vd hd mh va"></span>
                            <div class="h s p vd ij jj xa">
                                <ul class="tc xf wf gg">
                                    <li>
                                        <a href="#">
                                            <svg class="uh vl ml il" width="10" height="18" viewBox="0 0 10 18"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="uh vl ml il" width="18" height="14" viewBox="0 0 18 14"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.4683 1.71333C16.8321 1.99475 16.1574 2.17956 15.4666 2.26167C16.1947 1.82619 16.7397 1.14085 16.9999 0.333333C16.3166 0.74 15.5674 1.025 14.7866 1.17917C14.2621 0.617982 13.5669 0.245803 12.809 0.120487C12.0512 -0.00482822 11.2732 0.123742 10.596 0.486211C9.91875 0.848679 9.38024 1.42474 9.06418 2.12483C8.74812 2.82492 8.67221 3.60982 8.84825 4.3575C7.46251 4.28805 6.10686 3.92794 4.86933 3.30055C3.63179 2.67317 2.54003 1.79254 1.66492 0.715833C1.35516 1.24788 1.19238 1.85269 1.19326 2.46833C1.19326 3.67667 1.80826 4.74417 2.74326 5.36917C2.18993 5.35175 1.64878 5.20232 1.16492 4.93333V4.97667C1.16509 5.78142 1.44356 6.56135 1.95313 7.18422C2.46269 7.80709 3.17199 8.23456 3.96075 8.39417C3.4471 8.53337 2.90851 8.55388 2.38576 8.45417C2.60814 9.14686 3.04159 9.75267 3.62541 10.1868C4.20924 10.6209 4.9142 10.8615 5.64159 10.875C4.91866 11.4428 4.0909 11.8625 3.20566 12.1101C2.32041 12.3578 1.39503 12.4285 0.482422 12.3183C2.0755 13.3429 3.93 13.8868 5.82409 13.885C12.2349 13.885 15.7408 8.57417 15.7408 3.96833C15.7408 3.81833 15.7366 3.66667 15.7299 3.51833C16.4123 3.02514 17.0013 2.41418 17.4691 1.71417L17.4683 1.71333Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="uh vl ml il" width="17" height="16" viewBox="0 0 17 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h4 class="yj go kk wm ob zb">Jemse Kemorun</h4>
                    <p>Product Designer</p>
                </div>

                <!-- Team Item -->
                <div class="animate_top rj">
                    <div class="c i pg z-1">
                        <img class="vd" src="../assets/images/team-03.png" alt="Team" />

                        <div class="ef im nl il">
                            <span class="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
                            <span class="h s p rc vd hd mh va"></span>
                            <div class="h s p vd ij jj xa">
                                <ul class="tc xf wf gg">
                                    <li>
                                        <a href="#">
                                            <svg class="uh vl ml il" width="10" height="18" viewBox="0 0 10 18"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="uh vl ml il" width="18" height="14" viewBox="0 0 18 14"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.4683 1.71333C16.8321 1.99475 16.1574 2.17956 15.4666 2.26167C16.1947 1.82619 16.7397 1.14085 16.9999 0.333333C16.3166 0.74 15.5674 1.025 14.7866 1.17917C14.2621 0.617982 13.5669 0.245803 12.809 0.120487C12.0512 -0.00482822 11.2732 0.123742 10.596 0.486211C9.91875 0.848679 9.38024 1.42474 9.06418 2.12483C8.74812 2.82492 8.67221 3.60982 8.84825 4.3575C7.46251 4.28805 6.10686 3.92794 4.86933 3.30055C3.63179 2.67317 2.54003 1.79254 1.66492 0.715833C1.35516 1.24788 1.19238 1.85269 1.19326 2.46833C1.19326 3.67667 1.80826 4.74417 2.74326 5.36917C2.18993 5.35175 1.64878 5.20232 1.16492 4.93333V4.97667C1.16509 5.78142 1.44356 6.56135 1.95313 7.18422C2.46269 7.80709 3.17199 8.23456 3.96075 8.39417C3.4471 8.53337 2.90851 8.55388 2.38576 8.45417C2.60814 9.14686 3.04159 9.75267 3.62541 10.1868C4.20924 10.6209 4.9142 10.8615 5.64159 10.875C4.91866 11.4428 4.0909 11.8625 3.20566 12.1101C2.32041 12.3578 1.39503 12.4285 0.482422 12.3183C2.0755 13.3429 3.93 13.8868 5.82409 13.885C12.2349 13.885 15.7408 8.57417 15.7408 3.96833C15.7408 3.81833 15.7366 3.66667 15.7299 3.51833C16.4123 3.02514 17.0013 2.41418 17.4691 1.71417L17.4683 1.71333Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="uh vl ml il" width="17" height="16" viewBox="0 0 17 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h4 class="yj go kk wm ob zb">Avi Pestarica</h4>
                    <p>Web Designer</p>
                </div>
            </div>
        </div>
    </section>
    <!-- ===== Team End ===== -->


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
                                <li><router-link :to="{ name: 'Decor' }" class="sc xl vb hover:text-[#478AC9]">Décor and
                                        Design</router-link></li>
                                <li><router-link :to="{ name: 'Staffing' }"
                                        class="sc xl vb hover:text-[#478AC9]">On-Site
                                        Staffing</router-link></li>
                                <li><router-link :to="{ name: 'Vendor' }" class="sc xl vb hover:text-[#478AC9]">Vendor
                                        Coordination</router-link></li>
                            </ul>
                        </div>

                        <div class="animate_top">
                            <h4 class="kk wm tj ec">Services</h4>

                            <ul>
                                <li><router-link :to="{ name: 'Catering' }"
                                        class="sc xl vb hover:text-[#478AC9]">Catering
                                        Services</router-link></li>
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


    methods: {
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