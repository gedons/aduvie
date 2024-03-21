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

    <!-- ===== Swipper Start ===== -->
    <section class="mt-28">
        <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
        delay: 4500,
        disableOnInteraction: false,
    }" :pagination="{
        clickable: true,
    }" :navigation="false" :modules="modules">
            <div v-if="sliderImages.length === 0" class="p-2.5 xl:p-5">
                <swiper-slide>

                    <div class="transition bg-cover  bg-no-repeat bg-center  py-[10rem]"
                        v-bind:style="{ 'background-image': 'url(' + bgImage + ')' }">
                        <div class="container pl-[6rem] max-md:pl-2">
                            <h1 class="max-md:text-4xl text-6xl text-white bg-opacity-40 font-medium mb-4 capitalize">
                                Aduvie Event<br> Center
                            </h1>
                            <p class="text-white bg-opacity-40 max-md:text-[14px]">Let us raise a glass to your next
                                special occasion at Aduvie Event Center, <br>
                                where memories are made and shared with love.</p>
                            <div class="mt-12">
                                <a href="#" class="bg-[#000]  hover:bg-primary text-white px-8 py-3 font-medium 
                            rounded-md  hover:text-white">Book now</a>
                            </div>
                        </div>
                    </div>

                </swiper-slide>
            </div>
            <swiper-slide v-else v-for="slider in sliderImages" :key="slider._id">

                <div class="transition bg-cover bg-no-repeat bg-center py-[10rem]"
                    v-bind:style="{ 'background-image': 'url(' + back_url + slider.imageUrl + ')' }">
                    <div class="container pl-[6rem] max-md:pl-2">
                        <h1 class="max-md:text-4xl text-6xl text-white bg-opacity-40 font-medium mb-4 capitalize">
                            {{ slider.HeaderText }}
                        </h1>
                        <p class="text-white bg-opacity-40 max-md:text-[14px]">{{ slider.BodyText }}</p>
                        <div class="mt-12">
                            <router-link :to="{ name: 'Index' }" class="bg-[#000]  hover:bg-primary text-white px-8 py-3 font-medium 
                        rounded-md  hover:text-white">Book Now</router-link>
                        </div>
                    </div>
                </div>

            </swiper-slide>


        </swiper>
    </section>
    <!-- ===== Swipper End ===== -->


    <!-- ===== Small Features Start ===== -->
    <section class="flex justify-center">
        <div class="container py-12">
            <div>
                <div class="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
                    <div class=" rounded-sm px-3 py-6 flex justify-center items-center gap-3">
                        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M19 9.77806V16.2C19 17.8801 19 18.7202 18.673 19.3619C18.3854 19.9264 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9264 5.32698 19.3619C5 18.7202 5 17.8801 5 16.2V9.7774M21 12L15.5668 5.96393C14.3311 4.59116 13.7133 3.90478 12.9856 3.65138C12.3466 3.42882 11.651 3.42887 11.0119 3.65153C10.2843 3.90503 9.66661 4.59151 8.43114 5.96446L3 12M14 12C14 13.1045 13.1046 14 12 14C10.8954 14 10 13.1045 10 12C10 10.8954 10.8954 9.99996 12 9.99996C13.1046 9.99996 14 10.8954 14 12Z"
                                    stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                        </svg>
                        <div>
                            <h4 class="font-medium text-center capitalize text-[14px]">Versatile Spaces</h4>
                            <p class="text-gray-500 text-[12px]">From gatherings to grand celebrations.</p>
                        </div>
                    </div>
                    <div
                        class="border-l border-[#848484] max-md:border-none  rounded-sm px-3 py-6 flex justify-center items-center gap-3">
                        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M16.3426 21H21L17 15.5H21L16.881 10H21L14.0435 3L9.5 7.5M3 16L7.42372 11.9784C7.8038 11.6329 7.99384 11.4601 8.20914 11.3947C8.39876 11.337 8.60124 11.337 8.79086 11.3947C9.00616 11.4601 9.1962 11.6329 9.57628 11.9784L14 16M5 14.1818V19.4C5 19.9601 5 20.2401 5.10899 20.454C5.20487 20.6422 5.35785 20.7951 5.54601 20.891C5.75992 21 6.03995 21 6.6 21H10.4C10.9601 21 11.2401 21 11.454 20.891C11.6422 20.7951 11.7951 20.6422 11.891 20.454C12 20.2401 12 19.9601 12 19.4L12 14.1818"
                                    stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                        </svg>
                        <div>
                            <h4 class="font-medium text-center capitalize text-[14px]">Scenic Surroundings</h4>
                            <p class="text-gray-500 text-[12px]">Enjoy a lush, luxury and breathtaking view.</p>
                        </div>
                    </div>
                    <div
                        class="border-l border-[#848484] max-md:border-none rounded-sm px-3 py-6 flex justify-center items-center gap-3">
                        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z"
                                    fill="#6366F1"></path>
                            </g>
                        </svg>
                        <div>
                            <h4 class="font-medium text-center capitalize text-[14px]">Modern Amenities</h4>
                            <p class="text-gray-500 text-[12px]">Latest technologies available on ground.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ===== Small Features End ===== -->

    <!-- ===== Counter Start ===== -->
    <section class="i pg qh rm ji hp mt-8">
        <img src="../assets/images/shape-11.svg" alt="Shape" class="of h ga ha ke" />

        <div class="bb ze i va ki xn br grid grid-cols-1 ">
            <div class="tc uf sn tn xf un gg">
                <div class="animate_top me/5 ln rj">
                    <h2 class="gk vj zp or kk wm hc">1000</h2>
                    <p class="ek bk aq">Banquet Seat</p>
                </div>
                <div class="animate_top me/5 ln rj">
                    <h2 class="gk vj zp or kk wm hc">200</h2>
                    <p class="ek bk aq">Car Parking</p>
                </div>
                <div class="animate_top me/5 ln rj">
                    <h2 class="gk vj zp or kk wm hc">865</h2>
                    <p class="ek bk aq">Theatre Seat</p>
                </div>
                <div class="animate_top me/5 ln rj">
                    <h2 class="gk vj zp or kk wm hc">3</h2>
                    <p class="ek bk aq">Dressing Room</p>
                </div>
            </div>
        </div>
    </section>
    <!-- ===== Counter End ===== -->


    <!-- ===== About Start ===== -->
    <section class="ji gp uq 2xl:ud-py-35 pg">
        <div class="bb ze ki xn wq">
            <div class="tc wf gg qq">
                <!-- About Images -->
                <div class="animate_left xc gn gg jn/2 i flex flex-col-reverse md:flex-row">
                    <div>

                        <img src="../assets/images/1.jpg" alt="About" class="ib border rounded-lg lg:mt-20" />
                        <img src="../assets/images/2.jpg" alt="About" class="border rounded-lg lg:mt-20" />
                    </div>
                    <div>

                        <img src="../assets/images/3.jpg" alt="About" class="ob gb w-52 border rounded-lg lg:mt-20" />
                        <img src="../assets/images/shape-06.svg" alt="Shape" />
                    </div>
                </div>

                <!-- About Content -->
                <div class="animate_right jn/2">
                    <h4 class="ek yj mk gb">Why Aduvie Events</h4>
                    <h2 class="fk vj zp pr kk wm qb">We understand that selecting the perfect venue is crucial for the
                        success of your event.</h2>
                    <p class="uo">Our event center boasts modern and versatile spaces equipped with state-of-the-art
                        amenities, ensuring a seamless experience for you and your guests.</p>

                    <a href="https://www.youtube.com/channel/UCjsIVVWohM4fC4MaHbIX0vQ" data-fslightbox
                        class="vc wf hg mb">
                        <span class="tc wf xf be dd rg i gh ua">
                            <span class="nf h vc yc vd rg gh qk -ud-z-1"></span>
                            <img src="../assets/images/icon-play.svg" alt="Play" />
                        </span>
                        <span class="kk">See Videos</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- ===== About End ===== -->

    <!-- ===== Services Start ===== -->
    <section class="lj tp kr">
        <!-- Section Title Start -->
        <div>
            <div class="animate_top bb ze rj ki xn vq">
                <h2 class="fk vj pr kk wm on/5 gq/2 bb _b">
                    We Offer The Best Quality Service for You
                </h2>
                <p class="bb on/5 wo/5 hq">
                    We offer a comprehensive range of services designed to make your event planning experience seamless
                    and stress-free,
                    from intimate gatherings to large-scale celebrations.
                </p>
            </div>


        </div>
        <!-- Section Title End -->

        <div class="bb ze ki xn yq mb en">
            <div class="wc qf pn xo ng">
                <!-- Service Item -->
                <div class="animate_top sg oi pi zq ml il am cn _m">
                    <img src="../assets/images/icon-04.svg" alt="Icon" />
                    <h4 class="ek zj kk wm nb _b">Event Planning Assistance</h4>
                    <p>Our experienced event planners are here to guide you through every step of the planning process.
                    </p>
                </div>

                <!-- Service Item -->
                <div class="animate_top sg oi pi zq ml il am cn _m">
                    <img src="../assets/images/icon-05.svg" alt="Icon" />
                    <h4 class="ek zj kk wm nb _b">Catering Services</h4>
                    <p>Indulge in a culinary experience like no other with our in-house catering services.</p>
                </div>

                <!-- Service Item -->
                <div class="animate_top sg oi pi zq ml il am cn _m">
                    <img src="../assets/images/icon-06.svg" alt="Icon" />
                    <h4 class="ek zj kk wm nb _b">Décor and Design</h4>
                    <p>Transform our event spaces into your dream setting with our expert décor and design services.</p>
                </div>

                <!-- Service Item -->
                <div class="animate_top sg oi pi zq ml il am cn _m">
                    <img src="../assets/images/icon-07.svg" alt="Icon" />
                    <h4 class="ek zj kk wm nb _b">Vendor Coordination</h4>
                    <p>Planning an event often requires the involvement of various vendors, from florists to
                        photographers.</p>
                </div>

                <!-- Service Item -->
                <div class="animate_top sg oi pi zq ml il am cn _m">
                    <img src="../assets/images/icon-05.svg" alt="Icon" />
                    <h4 class="ek zj kk wm nb _b">Venue Customization</h4>
                    <p>We understand that every event is unique, which is why we offer customizable event spaces.</p>
                </div>

                <!-- Service Item -->
                <div class="animate_top sg oi pi zq ml il am cn _m">
                    <img src="../assets/images/icon-06.svg" alt="Icon" />
                    <h4 class="ek zj kk wm nb _b">On-Site Staffing</h4>
                    <p> Rest assured that your event will run smoothly with our dedicated on-site staff.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- ===== Services End ===== -->

    <!-- ===== Blog Start ===== -->
    <section class="ji gp uq">
        <!-- Section Title Start -->
        <div>
            <div class="animate_top bb ze rj ki xn vq">
                <h2 x-text="sectionTitle" class="fk vj pr kk wm on/5 gq/2 bb _b">
                    Latest Blogs & News
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
                <div v-if="latestBlogPost.length === 0" class="p-2.5 xl:p-5">
                    <p class="font-semibold text-sm leading-5 text-gray-700">No Blog Available!!!</p>
                </div>
                <!-- Blog Item -->
                <div v-else v-for="blog in latestBlogPost" :key="blog._id" class="animate_top sg vk rm xm">
                    <div class="c rc i z-1 pg">
                        <img class="w-full h-48 border rounded-lg" :src="`${back_url}/${blog.image}`" alt="Blog" />

                        <div class="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                            <router-link :to="{ name: 'BlogView', params: { title: blog.title } }"
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
                            <router-link :to="{ name: 'BlogView', params: { title: blog.title } }"> {{ blog.title
                                }}</router-link>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ===== Blog End ===== -->

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
                                <a href="#" class="c tc wf xf ie ld rg ml il tl">
                                    <svg class="th lm ml il" width="11" height="20" viewBox="0 0 11 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.83366 11.3752H9.12533L10.042 7.7085H6.83366V5.87516C6.83366 4.931 6.83366 4.04183 8.667 4.04183H10.042V0.96183C9.74316 0.922413 8.61475 0.833496 7.42308 0.833496C4.93433 0.833496 3.16699 2.35241 3.16699 5.14183V7.7085H0.416992V11.3752H3.16699V19.1668H6.83366V11.3752Z"
                                            fill="" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="c tc wf xf ie ld rg ml il tl">
                                    <svg class="th lm ml il" width="20" height="16" viewBox="0 0 20 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.3153 2.18484C18.6155 2.4944 17.8733 2.6977 17.1134 2.78801C17.9144 2.30899 18.5138 1.55511 18.8001 0.666844C18.0484 1.11418 17.2244 1.42768 16.3654 1.59726C15.7885 0.979958 15.0238 0.57056 14.1901 0.432713C13.3565 0.294866 12.5007 0.436294 11.7558 0.835009C11.0108 1.23372 10.4185 1.86739 10.0708 2.63749C9.72313 3.40759 9.63963 4.27098 9.83327 5.09343C8.30896 5.01703 6.81775 4.62091 5.45645 3.93079C4.09516 3.24067 2.89423 2.27197 1.93161 1.08759C1.59088 1.67284 1.41182 2.33814 1.41278 3.01534C1.41278 4.34451 2.08928 5.51876 3.11778 6.20626C2.50912 6.1871 1.91386 6.02273 1.38161 5.72685V5.77451C1.38179 6.65974 1.68811 7.51766 2.24864 8.20282C2.80916 8.88797 3.58938 9.3582 4.45703 9.53376C3.89201 9.68688 3.29956 9.70945 2.72453 9.59976C2.96915 10.3617 3.44595 11.0281 4.08815 11.5056C4.73035 11.9831 5.50581 12.2478 6.30594 12.2627C5.51072 12.8872 4.60019 13.3489 3.62642 13.6213C2.65264 13.8938 1.63473 13.9716 0.630859 13.8503C2.38325 14.9773 4.4232 15.5756 6.50669 15.5737C13.5586 15.5737 17.415 9.73176 17.415 4.66535C17.415 4.50035 17.4104 4.33351 17.4031 4.17035C18.1537 3.62783 18.8016 2.95578 19.3162 2.18576L19.3153 2.18484Z"
                                            fill="" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="c tc wf xf ie ld rg ml il tl">
                                    <svg class="th lm ml il" width="19" height="18" viewBox="0 0 19 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.36198 2.58327C4.36174 3.0695 4.16835 3.53572 3.82436 3.87937C3.48037 4.22301 3.01396 4.41593 2.52773 4.41569C2.0415 4.41545 1.57528 4.22206 1.23164 3.87807C0.887991 3.53408 0.69507 3.06767 0.695313 2.58144C0.695556 2.09521 0.888943 1.62899 1.23293 1.28535C1.57692 0.941701 2.04333 0.748781 2.52956 0.749024C3.01579 0.749267 3.48201 0.942654 3.82566 1.28664C4.1693 1.63063 4.36222 2.09704 4.36198 2.58327ZM4.41698 5.77327H0.750313V17.2499H4.41698V5.77327ZM10.2103 5.77327H6.56198V17.2499H10.1736V11.2274C10.1736 7.87244 14.5461 7.56077 14.5461 11.2274V17.2499H18.167V9.98077C18.167 4.32494 11.6953 4.53577 10.1736 7.31327L10.2103 5.77327Z"
                                            fill="" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="c tc wf xf ie ld rg ml il tl">
                                    <svg class="th lm ml il" width="22" height="14" viewBox="0 0 22 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.82308 0.904297C7.40883 0.904297 7.95058 0.95013 8.44558 1.0858C8.89476 1.16834 9.32351 1.33772 9.70783 1.58446C10.069 1.81088 10.3394 2.12896 10.5191 2.53688C10.6997 2.9448 10.7895 3.44438 10.7895 3.98796C10.7895 4.62321 10.6547 5.1668 10.3394 5.57471C10.069 5.98355 9.61799 6.34563 9.07716 6.61788C9.84349 6.84521 10.4292 7.25313 10.7895 7.79672C11.1507 8.34122 11.3762 9.02138 11.3762 9.7923C11.3762 10.4275 11.2405 10.9711 11.015 11.4249C10.7895 11.8786 10.4292 12.2865 10.0232 12.5588C9.58205 12.8506 9.09443 13.0651 8.58124 13.1931C8.04041 13.3297 7.49958 13.4205 6.95874 13.4205H0.916992V0.904297H6.82308ZM6.46191 5.98263C6.95783 5.98263 7.36391 5.84696 7.67924 5.62055C7.99458 5.39413 8.13024 4.9853 8.13024 4.48663C8.13024 4.21438 8.08441 3.94213 7.99458 3.76155C7.90474 3.58005 7.76908 3.44346 7.58941 3.3078C7.40883 3.21705 7.22824 3.1263 7.00274 3.08138C6.77724 3.03555 6.55266 3.03555 6.28133 3.03555H3.66699V5.98355H6.46283L6.46191 5.98263ZM6.59758 11.3341C6.86799 11.3341 7.13841 11.2883 7.36391 11.2434C7.59159 11.2001 7.80692 11.1071 7.99458 10.9711C8.17826 10.8384 8.33193 10.6685 8.44558 10.4725C8.53541 10.246 8.62616 9.9738 8.62616 9.65663C8.62616 9.02138 8.44558 8.56763 8.08533 8.25046C7.72416 7.97822 7.22824 7.84255 6.64249 7.84255H3.66699V11.335H6.59758V11.3341ZM15.2986 11.2883C15.6588 11.6513 16.1997 11.8328 16.9211 11.8328C17.417 11.8328 17.868 11.6971 18.2282 11.4707C18.5894 11.1985 18.8149 10.9262 18.9047 10.654H21.1139C20.7527 11.742 20.2119 12.513 19.4914 13.0116C18.7691 13.4654 17.9129 13.7376 16.8762 13.7376C16.2128 13.7396 15.5551 13.6165 14.9374 13.3746C14.3816 13.1661 13.886 12.8235 13.4946 12.3773C13.0759 11.9598 12.7665 11.4457 12.5935 10.8804C12.368 10.291 12.2772 9.65663 12.2772 8.93063C12.2772 8.25047 12.368 7.61613 12.5935 7.0258C12.8103 6.45755 13.1311 5.93468 13.5395 5.48396C13.9456 5.07605 14.4415 4.71396 14.9823 4.48663C15.5843 4.24469 16.2274 4.12143 16.8762 4.12363C17.6425 4.12363 18.319 4.26021 18.9047 4.57738C19.4914 4.89455 19.9415 5.25755 20.3027 5.80205C20.6711 6.32503 20.9456 6.90819 21.1139 7.52538C21.2037 8.15972 21.2487 8.79497 21.2037 9.52005H14.667C14.667 10.246 14.9374 10.9262 15.2986 11.2892V11.2883ZM18.1384 6.52713C17.8231 6.20996 17.3272 6.02846 16.7405 6.02846C16.3353 6.02846 16.0191 6.11922 15.7487 6.25488C15.4782 6.39147 15.2986 6.57297 15.118 6.75447C14.952 6.92978 14.8422 7.15067 14.8027 7.3888C14.7568 7.61613 14.7119 7.79672 14.7119 7.97822H18.7691C18.6792 7.29805 18.4537 6.84522 18.1384 6.52713ZM14.1711 1.76596H19.2201V2.99063H14.172V1.76596H14.1711Z"
                                            fill="" />
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
                            <button class="vc rg lk gh ml il hi gi _l">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- ===== Contact End ===== -->

    <!-- ===== CTA Start ===== -->
    <section class="i pg gh ji">
        <!-- Bg Shape -->
        <img class="h p q" src="../assets/images/shape-16.svg" alt="Bg Shape" />

        <div class="bb ye i z-10 ki xn dr">
            <div class="tc uf sn tn un gg">
                <div class="animate_left to/2">
                    <h2 class="fk vj zp pr lk ac">
                        Event Gallery
                    </h2>
                    <p class="lk">
                        Explore our gallery to see snapshots of past events hosted.
                        Get inspired by stunning décor, joyful celebrations, and satisfied smiles captured within our
                        walls.
                    </p>
                </div>
                <div class="animate_right bf">
                    <router-link :to="{name: 'FrontGallery'}" class="vc ek kk hh rg ol il cm gi hi">
                        Event Gallery
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <!-- ===== CTA End ===== -->

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
            latestBlogPost: [],
            //back_url: 'http://localhost:5000',
            back_url:'https://aduvieapi.onrender.com'
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
    background-color: #6366f1;
    color: #f9fafb;
}
</style>