<template>
    <div>
        <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
            <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false"
                class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"></div>

            <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
                class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
                <div class="flex items-center justify-center mt-8">
                    <div class="flex items-center">
                        <svg class="w-12 h-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                                fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                                fill="white"></path>
                        </svg>

                        <span class="mx-2 text-2xl font-semibold text-white">Dashboard</span>
                    </div>
                </div>

                <nav class="mt-10">
                    <router-link :to="{ name: 'Dashboard' }"
                        class="flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                        </svg>

                        <span class="mx-3">Dashboard</span>
                    </router-link>

                    <!-- event link start -->
                    <router-link :to="{ name: 'Events' }"
                        class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <circle cx="9.00098" cy="6" r="4" fill="#6B7280"></circle>
                                <ellipse cx="9.00098" cy="17.001" rx="7" ry="4" fill="#6B7280"></ellipse>
                                <path
                                    d="M20.9996 17.0005C20.9996 18.6573 18.9641 20.0004 16.4788 20.0004C17.211 19.2001 17.7145 18.1955 17.7145 17.0018C17.7145 15.8068 17.2098 14.8013 16.4762 14.0005C18.9615 14.0005 20.9996 15.3436 20.9996 17.0005Z"
                                    fill="#6B7280"></path>
                                <path
                                    d="M17.9996 6.00073C17.9996 7.65759 16.6565 9.00073 14.9996 9.00073C14.6383 9.00073 14.292 8.93687 13.9712 8.81981C14.4443 7.98772 14.7145 7.02522 14.7145 5.99962C14.7145 4.97477 14.4447 4.01294 13.9722 3.18127C14.2927 3.06446 14.6387 3.00073 14.9996 3.00073C16.6565 3.00073 17.9996 4.34388 17.9996 6.00073Z"
                                    fill="#6B7280"></path>
                            </g>
                        </svg>

                        <span class="mx-3">Events</span>
                    </router-link>
                    <!-- event link end -->

                    <!-- bookin link start -->
                    <router-link :to="{ name: 'UserBooking' }"
                        class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                        <svg fill="#6B7280" class="w-6 h-6" version="1.1" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512" xml:space="preserve">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M507.42,127.508L462.683,14.156C459.312,5.614,451.061,0,441.876,0H70.122c-9.184,0-17.434,5.614-20.807,14.156 L4.579,127.508c-5.78,14.65,5.027,30.58,20.807,30.58h8.889c0,22.999,0,320.098,0,331.544C34.275,501.985,44.29,512,56.643,512 c21.816,0,375.62,0,398.713,0c12.353,0,22.368-10.015,22.368-22.368c0-11.445,0-308.541,0-331.544h8.889 C502.361,158.088,513.211,142.187,507.42,127.508z M432.987,467.264H342.28v-79.972c0-12.353-10.015-22.368-22.368-22.368 H192.087c-12.353,0-22.368,10.015-22.368,22.368v79.972H79.011v-132.22c15.434,0,335.888,0,353.976,0V467.264z M432.987,290.308 H342.28v-79.972c0-12.353-10.013-22.368-22.368-22.368H192.087c-12.38,0-22.368,10.042-22.368,22.368v79.972H79.011v-132.22 h353.976V290.308z">
                                            </path>
                                            <path
                                                d="M119.484,232.704h9.763c12.353,0,22.368-10.015,22.368-22.368c0-12.353-10.015-22.368-22.368-22.368h-9.763 c-12.353,0-22.368,10.015-22.368,22.368C97.116,222.689,107.131,232.704,119.484,232.704z">
                                            </path>
                                            <path
                                                d="M382.753,232.704h9.763c12.353,0,22.368-10.015,22.368-22.368c0-12.353-10.015-22.368-22.368-22.368h-9.763 c-12.353,0-22.368,10.015-22.368,22.368C360.385,222.689,370.4,232.704,382.753,232.704z">
                                            </path>
                                            <path
                                                d="M119.484,409.658h9.763c12.353,0,22.368-10.015,22.368-22.368c0-12.353-10.015-22.368-22.368-22.368h-9.763 c-12.353,0-22.368,10.015-22.368,22.368C97.116,399.643,107.131,409.658,119.484,409.658z">
                                            </path>
                                            <path
                                                d="M382.753,409.658h9.763c12.353,0,22.368-10.015,22.368-22.368c0-12.353-10.015-22.368-22.368-22.368h-9.763 c-12.353,0-22.368,10.015-22.368,22.368C360.385,399.645,370.4,409.658,382.753,409.658z">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>

                        <span class="mx-3">User Bookings</span>
                    </router-link>
                    <!-- bookin link end -->


                    <!-- paged link start -->
                    <li class="list-none mt-4">
                        <a class="group relative flex items-center gap-2.5  py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                            href="#" @click="pageDropdown">
                            <svg fill="#6B7280" class="w-6 h-6" version="1.1" id="Icons"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 32 32" xml:space="preserve">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M22,16c-4.4,0-8,3.6-8,8c0,1.6,0.5,3.2,1.4,4.6c0.2,0.3,0.5,0.4,0.8,0.4s0.6-0.2,0.8-0.4c0.7-1,1.7-1.8,2.9-2.2l4.3-6 c0.3-0.4,0.9-0.6,1.4-0.2c0.4,0.3,0.6,0.9,0.2,1.4L22.6,26c1.7,0.2,3.3,1.1,4.3,2.5c0.2,0.3,0.5,0.4,0.8,0.4c0.3,0,0.6-0.2,0.8-0.4 c0.9-1.3,1.4-2.9,1.4-4.6C30,19.6,26.4,16,22,16z">
                                    </path>
                                    <g>
                                        <path
                                            d="M12,24c0-5.5,4.5-10,10-10c3.3,0,6.2,1.6,8,4V7c0-1.7-1.3-3-3-3H5C3.3,4,2,5.3,2,7v18c0,1.7,1.3,3,3,3h7.8 C12.3,26.7,12,25.4,12,24z M12.1,7.6c0.1-0.1,0.1-0.2,0.2-0.3c0.4-0.4,1-0.4,1.4,0c0.1,0.1,0.2,0.2,0.2,0.3C14,7.7,14,7.9,14,8 c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.2,0.3C13.5,8.9,13.3,9,13,9c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.2-0.1-0.3-0.2 c-0.1-0.1-0.2-0.2-0.2-0.3C12,8.3,12,8.1,12,8C12,7.9,12,7.7,12.1,7.6z M9.1,7.6c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2 C10,6.9,10.4,7,10.7,7.3c0.1,0.1,0.2,0.2,0.2,0.3C11,7.7,11,7.9,11,8c0,0.3-0.1,0.5-0.3,0.7C10.5,8.9,10.3,9,10,9 C9.7,9,9.5,8.9,9.3,8.7C9.1,8.5,9,8.3,9,8C9,7.9,9,7.7,9.1,7.6z M6.3,7.3c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1 C6.7,7,6.7,7,6.8,7c0.1,0,0.3,0,0.4,0c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.2,0.3 C8,7.7,8,7.9,8,8c0,0.1,0,0.3-0.1,0.4C7.9,8.5,7.8,8.6,7.7,8.7C7.5,8.9,7.3,9,7,9S6.5,8.9,6.3,8.7C6.1,8.5,6,8.3,6,8 C6,7.7,6.1,7.5,6.3,7.3z M7,14h5c0.6,0,1,0.4,1,1s-0.4,1-1,1H7c-0.6,0-1-0.4-1-1S6.4,14,7,14z M9,19H7c-0.6,0-1-0.4-1-1s0.4-1,1-1 h2c0.6,0,1,0.4,1,1S9.6,19,9,19z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            Pages
                            <svg class="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                                :class="{ 'rotate-180': (selected === 'Forms') }" width="20" height="20"
                                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                    fill="" />
                            </svg>
                        </a>

                        <!-- Dropdown Menu Start -->
                        <div v-show="selected === 'Page'" class="overflow-hidden"
                            :class="(selected === 'Page') ? 'block' : 'hidden'">
                            <ul class="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                <li>
                                    <router-link :to="{ name: 'Slider' }"
                                        class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out text-gray-500 hover:text-white">Slider</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'Slider' }" 
                                        class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out text-gray-500 hover:text-white"
                                        >Gallery</router-link>
                                </li>
                                
                                
                            </ul>
                        </div>
                        <!-- Dropdown Menu End -->
                    </li>
                    <!-- pages link end -->

                    <!-- blog link start -->
                    <router-link :to="{ name: 'Blogs' }"
                        class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="none" stroke="#6B7280" stroke-width="2"
                                    d="M5,16 C3.343,16 2,17.343 2,19 C2,20.657 3.343,22 5,22 C6.657,22 8,20.657 8,19 C8,17.343 6.657,16 5,16 L5,16 L5,16 Z M5,1 C14.925,1 23,9.075 23,19 L23,19 M18,19 C18,11.832 12.168,6 5,6 M13,19 C13,14.589 9.411,11 5,11 M2,11 L2,19 L2,19">
                                </path>
                            </g>
                        </svg>

                        <span class="mx-3">Blog</span>
                    </router-link>
                    <!-- blog link end -->

                    <!-- settings link start -->
                    <router-link :to="{ name: 'AdminSetting' }"
                        class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                            </path>
                        </svg>

                        <span class="mx-3">Settings</span>
                    </router-link>
                    <!-- settings link end -->

                    <!-- logout link start -->
                    <a @click="logoutAdmin"
                        class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 cursor-pointer">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z"
                                    fill="#6B7280"></path>
                            </g>
                        </svg>

                        <span class="mx-3">Logout</span>
                    </a>
                    <!-- logout link end -->
                </nav>
            </div>
            <div class="flex flex-col flex-1 overflow-hidden">
                <header class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
                    <div class="flex items-center">
                        <button @click="sidebarOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>

                        <div class="relative mx-4 lg:mx-0">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                </svg>
                            </span>

                            <input class="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600"
                                type="text" placeholder="Search">
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="relative">
                            <button @click="toggleNotification" class="flex mx-4 text-gray-600 focus:outline-none">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                </svg>
                            </button>

                            <div @click="closeNotification" v-show="notificationOpen"
                                class="fixed inset-0 z-10 w-full h-full" style="display: none;"></div>

                            <div v-show="notificationOpen"
                                class="absolute right-0 z-10 mt-2 overflow-hidden bg-white rounded-lg shadow-xl w-80"
                                style="width: 20rem; display: none;">
                                <a href="#"
                                    class="flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600">
                                    <img class="object-cover w-8 h-8 mx-1 rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                                        alt="avatar">
                                    <p class="mx-2 text-sm">
                                        <span class="font-bold" href="#">Sara Salah</span> replied on the <span
                                            class="font-bold text-indigo-400" href="#">Upload Image</span> artical . 2m
                                    </p>
                                </a>

                            </div>
                        </div>

                        <div class="relative">
                            <button @click="toggleDropdown"
                                class="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                                <img class="object-cover w-full h-full"
                                    src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                                    alt="Your avatar">
                            </button>

                            <div @click="closeDropdown" v-show="dropdownOpen" class="fixed inset-0 z-10 w-full h-full"
                                style="display: none;"></div>

                            <div v-show="dropdownOpen"
                                class="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl"
                                style="display: none;">
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Settings</a>
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</a>
                            </div>
                        </div>
                    </div>
                </header>

                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">

                    <div class="container px-6 py-8 mx-auto">
                        <h3 class="text-3xl font-medium text-gray-700">Dashboard</h3>

                        <div class="mt-4">
                            <div class="flex flex-wrap -mx-6">
                                <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                                    <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                                        <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                                            <svg class="w-8 h-8 text-white" viewBox="0 0 28 30" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>

                                        <div class="mx-5">
                                            <h4 class="text-2xl font-semibold text-gray-700">{{ totalBlog }}</h4>
                                            <div class="text-gray-500">Blog Posts</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                                    <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                                        <div class="p-3 bg-orange-600 bg-opacity-75 rounded-full">
                                            <svg class="w-8 h-8 text-white" viewBox="0 0 28 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>

                                        <div class="mx-5">
                                            <h4 class="text-2xl font-semibold text-gray-700">{{totalEvent}}</h4>
                                            <div class="text-gray-500">Total Events</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                    <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                                        <div class="p-3 bg-green-600 bg-opacity-75 rounded-full">
                                            <svg fill="#ffffff" class="w-8 h-8" viewBox="0 0 1024 1024"
                                                xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M277.675 981.521c5.657 0 10.24-4.583 10.24-10.24V499.514c0-5.651-4.588-10.24-10.24-10.24h-81.92c-5.652 0-10.24 4.589-10.24 10.24v471.767c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V499.514c0-28.271 22.924-51.2 51.2-51.2h81.92c28.276 0 51.2 22.929 51.2 51.2v471.767c0 28.278-22.922 51.2-51.2 51.2zm275.456-40.96c5.657 0 10.24-4.583 10.24-10.24V408.777c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v562.504c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V408.777c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v562.504c0 28.278-22.922 51.2-51.2 51.2zm275.456-40.016c5.657 0 10.24-4.583 10.24-10.24V318.974c0-5.651-4.588-10.24-10.24-10.24h-81.92c-5.652 0-10.24 4.589-10.24 10.24v653.251c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V318.974c0-28.271 22.924-51.2 51.2-51.2h81.92c28.276 0 51.2 22.929 51.2 51.2v653.251c0 28.278-22.922 51.2-51.2 51.2zM696.848 40.96l102.39.154c11.311.017 20.494-9.138 20.511-20.449S810.611.171 799.3.154L696.91 0c-11.311-.017-20.494 9.138-20.511 20.449s9.138 20.494 20.449 20.511z">
                                                    </path>
                                                    <path
                                                        d="M778.789 20.571l-.307 101.827c-.034 11.311 9.107 20.508 20.418 20.542s20.508-9.107 20.542-20.418l.307-101.827C819.783 9.384 810.642.187 799.331.153s-20.508 9.107-20.542 20.418z">
                                                    </path>
                                                    <path
                                                        d="M163.84 317.682h154.184a51.207 51.207 0 0036.211-14.999L457.208 199.71a10.263 10.263 0 017.237-3.003h159.754a51.235 51.235 0 0036.198-14.976l141.13-141.13c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0L631.447 152.755a10.265 10.265 0 01-7.248 2.992H464.445a51.226 51.226 0 00-36.201 14.999L325.271 273.719a10.244 10.244 0 01-7.248 3.003H163.839c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </div>

                                        <div class="mx-5">
                                            <h4 class="text-2xl font-semibold text-gray-700"> {{totalBooking}} </h4>
                                            <div class="text-gray-500">User Bookings</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div class="flex flex-wrap -mx-6">
                                <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                    <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                                        <div class="p-3 bg-green-600 bg-opacity-75 rounded-full">
                                            <svg fill="#ffffff" class="w-8 h-8" viewBox="0 0 1024 1024"
                                                xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M277.675 981.521c5.657 0 10.24-4.583 10.24-10.24V499.514c0-5.651-4.588-10.24-10.24-10.24h-81.92c-5.652 0-10.24 4.589-10.24 10.24v471.767c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V499.514c0-28.271 22.924-51.2 51.2-51.2h81.92c28.276 0 51.2 22.929 51.2 51.2v471.767c0 28.278-22.922 51.2-51.2 51.2zm275.456-40.96c5.657 0 10.24-4.583 10.24-10.24V408.777c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v562.504c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V408.777c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v562.504c0 28.278-22.922 51.2-51.2 51.2zm275.456-40.016c5.657 0 10.24-4.583 10.24-10.24V318.974c0-5.651-4.588-10.24-10.24-10.24h-81.92c-5.652 0-10.24 4.589-10.24 10.24v653.251c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V318.974c0-28.271 22.924-51.2 51.2-51.2h81.92c28.276 0 51.2 22.929 51.2 51.2v653.251c0 28.278-22.922 51.2-51.2 51.2zM696.848 40.96l102.39.154c11.311.017 20.494-9.138 20.511-20.449S810.611.171 799.3.154L696.91 0c-11.311-.017-20.494 9.138-20.511 20.449s9.138 20.494 20.449 20.511z">
                                                    </path>
                                                    <path
                                                        d="M778.789 20.571l-.307 101.827c-.034 11.311 9.107 20.508 20.418 20.542s20.508-9.107 20.542-20.418l.307-101.827C819.783 9.384 810.642.187 799.331.153s-20.508 9.107-20.542 20.418z">
                                                    </path>
                                                    <path
                                                        d="M163.84 317.682h154.184a51.207 51.207 0 0036.211-14.999L457.208 199.71a10.263 10.263 0 017.237-3.003h159.754a51.235 51.235 0 0036.198-14.976l141.13-141.13c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0L631.447 152.755a10.265 10.265 0 01-7.248 2.992H464.445a51.226 51.226 0 00-36.201 14.999L325.271 273.719a10.244 10.244 0 01-7.248 3.003H163.839c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </div>

                                        <div class="mx-5">
                                            <h4 class="text-2xl font-semibold text-gray-700">{{ totalAdmin }}</h4>
                                            <div class="text-gray-500">Admin Account</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <h3 class="text-3xl font-medium text-gray-700">Events</h3>
                        </div>

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
                        <div v-else class="flex flex-col mt-8">
                            <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <div
                                    class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                                    <table class="min-w-full">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                    Name</th>
                                                <th
                                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                    Event Date</th>
                                                <th
                                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                    User Email</th>
                                                <th
                                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                    Status</th>
                                                <th
                                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                    Actions</th>

                                            </tr>
                                        </thead>
                                        <div v-if="events.length === 0" class="p-2.5 xl:p-5">
                                            <p class="font-semibold text-sm leading-5 text-gray-700">No Event
                                                Available!!!</p>
                                        </div>
                                        <tbody v-for="event in events" :key="event._id" class="bg-white">
                                            <tr>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 font-semibold text-gray-900">
                                                        {{ event.name }}</div>
                                                </td>

                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 font-semibold text-gray-900"> {{
                formatDate(event.date) }}</div>
                                                </td>

                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 font-semibold text-gray-900">
                                                        {{ event.email }}
                                                    </div>
                                                </td>

                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 font-semibold text-gray-900">
                                                        <!-- Apply color based on event status -->
                                                        <div v-if="event.status === 'pending'"
                                                            class="text-sm text-yellow-500">
                                                            Pending
                                                        </div>
                                                        <div v-else-if="event.status === 'booked'"
                                                            class="text-sm text-red-500">
                                                            Booked
                                                        </div>
                                                        <div v-else-if="event.status === 'completed'"
                                                            class="text-sm text-green-500">
                                                            Completed
                                                        </div>
                                                    </div>
                                                </td>

                                                <td
                                                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                    <button @click="openEditModal(event)"
                                                        class=" text-sm px-2 py-2 font-semibold text-gray-900  hover:text-gray-800">Edit</button>
                                                    <button @click="openDeleteModal(event)"
                                                        class=" text-sm font-semibold px-2 py-2 text-red-500 hover:text-red-400">Delete</button>
                                                </td>
                                            </tr>



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

        <!-- edit modal modal -->
        <div>
            <div id="modal-bg" class="w-full h-full  bg-[#848A97] top-0 absolute hidden opacity-80"></div>
            <div id="modal-box"
                class="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[25vh] flex-col justify-between items-center gap-2 -translate-y-1/2 p-6 bg-[#FFFFFF] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute hidden">
                <!-- Modal content -->
                <!-- Edit category form -->
                <form v-if="isEditMode" @submit.prevent="editEvent">
                    <label class="mb-2.5 mt-3 block text-black">
                        Event Name
                    </label>
                    <input type="text" placeholder="Edit name" v-model="editedEvent.name"
                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gray-900 active:border-gray-900 disabled:cursor-default disabled:bg-whiter" />
                    <label class="mb-2.5 mt-3 block text-black">
                        Event Date
                    </label>
                    <input type="date" placeholder="Edit date" v-model="editedEvent.date"
                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gray-900 active:border-gray-900 disabled:cursor-default disabled:bg-whiter" />
                    <label class="mb-2.5 mt-3 block text-black">
                        User Email
                    </label>
                    <input type="text" placeholder="Edit email" v-model="editedEvent.email"
                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gray-900 active:border-gray-900 disabled:cursor-default disabled:bg-whiter" />

                    <label class="mb-2.5 mt-3 block text-black">
                        Status
                    </label>
                    <select v-model="editedEvent.status"
                        class="mt-3 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gray-900 active:border-gray-900 disabled:cursor-default disabled:bg-whiter">
                        <option value="pending">Pending</option>
                        <option value="booked">Booked</option>
                        <option value="completed">Completed</option>
                    </select>
                    <textarea rows="4" placeholder="Edit Event" v-model="editedEvent.description"
                        class="mt-3 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-gray-900 active:border-gray-900 disabled:cursor-default disabled:bg-whiter"></textarea>
                    <button class="bg-gray-900 px-3 py-2 rounded-md mt-3 text-white text-sm font-semibold"
                        type="submit">Update</button>
                </form>

                <button id="modal-close" class="p-3 w-full text-gray-900  hover:bg-gray-200 rounded-md mt-3"
                    @click="closeModal">Close</button>
            </div>
        </div>
        <!-- modal end -->


        <!-- delete modal -->
        <div>
            <div id="modal-bg4" class="w-full h-full  bg-[#848A97] top-0 absolute hidden opacity-80"></div>
            <div id="modal-box4"
                class="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[25vh] flex-col justify-between items-center gap-2 -translate-y-1/2 p-6 bg-[#FFFFFF] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute hidden">
                <!-- Delete confirmation -->
                <div v-if="isDeleteMode">
                    <p class="font-semibold">Are you sure you want to delete this event?</p>
                    <div class="flex gap-3">
                        <button class="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md mt-3 text-white"
                            @click="confirmDelete(event)">Yes</button>
                        <button class="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md mt-3 text-white"
                            @click="closeModal1">No</button>
                    </div>
                </div>
                <button id="modal-close" class="p-3 w-full text-gray-900  hover:bg-gray-200 rounded-md mt-3"
                    @click="closeModal1">Close</button>
            </div>
        </div>
        <!-- modal end -->

    </div>

</template>

<script>
import axios from 'axios';
import api from '../../api';
import moment from 'moment';
export default {
    data() {
        return {

            sidebarOpen: false,
            notificationOpen: false,
            dropdownOpen: false,
            selected: '',
            page: '',
            events: [],
            totalAdmin: 0,
            totalBlog: 0,
            totalEvent: 0,
            totalBooking : 0,
            isEditMode: false,
            isDeleteMode: false,
            editedEvent: {},
            deleteEvent: {},

        };
    },

    created() {
        this.fetchEvents();
        this.fetchAdminCount();
        this.fetchBlogCount();
        this.fetchEventCount();
        this.fetchBookingCount();
    },
    methods: {

        fetchEvents() {
            axios.get(`${api}/events/all`).then((response) => {
                this.events = response.data;
                this.loading = false;
            })
                .catch((error) => {
                    console.error('Error getting events:', error);
                    this.loading = false;
                });
        },

        async updateEventStatus(event) {
            try {
                const adminToken = localStorage.getItem('adminToken');
                const response = await axios.put(`${api}/events/status`, {
                    eventId: event._id,
                    status: event.status
                }, {
                    headers: {
                        Authorization: `Bearer ${adminToken}`
                    }
                });
                console.log(response.data);
            } catch (error) {
                console.error('Error updating event status:', error.response.data);
            }
        },

        async editEvent() {
            try {
                const adminToken = localStorage.getItem('adminToken');
                const config = {
                    headers: {
                        Authorization: `Bearer ${adminToken}`,
                    },
                };

                if (!adminToken) {
                    localStorage.removeItem('adminToken');
                    this.$router.push({ name: 'Login' });
                    return;
                }
                await axios.put(`${api}/events/${this.editedEvent._id}`, this.editedEvent, config)
                    .then((success) => {
                        if (success) {
                            this.$toast.success('Event Updated Successfully.', {
                                timeout: 3000,
                            });
                            this.closeModal();
                            this.fetchEvents();
                        } else {
                            this.$toast.error('An Error Occured. try again!', {
                                timeout: 9000,
                            });
                        }
                    });
            }
            catch (error) {
                if (error) {
                    this.$toast.error('Event not added. try again!', {
                        timeout: 3000,
                    });
                }
            }
        },

        async confirmDelete() {
            try {
                const adminToken = localStorage.getItem('adminToken');
                const config = {
                    headers: {
                        Authorization: `Bearer ${adminToken}`,
                    },
                };

                if (!adminToken) {
                    localStorage.removeItem('adminToken');
                    this.$router.push({ name: 'Login' });
                    return;
                }
                await axios.delete(`${api}/events/${this.deleteEvent._id}`, config)
                    .then((success) => {
                        if (success) {
                            this.$toast.success('Event Deleted Successfully.', {
                                timeout: 3000,
                            });
                            this.closeModal1();
                            const eventId = this.deleteEvent._id;
                            this.events = this.events.filter(event => event._id !== eventId);
                            this.events.sort((a, b) => {
                                const dateA = new Date(a.createdAt).getTime();
                                const dateB = new Date(b.createdAt).getTime();
                                return dateB - dateA;
                            });
                        } else {
                            this.$toast.error('An Error Occured. try again!', {
                                timeout: 9000,
                            });
                        }
                    });


            } catch (error) {
                console.error('Error deleting Event', error);
                // Handle error
            }
        },

        fetchAdminCount() {
            axios.get(`${api}/auth/admin/total-admin`).then((response) => {
                this.totalAdmin = response.data.totalAdmin;
            })
                .catch((error) => {
                    console.error('Error getting admins:', error);
                });
        },

        fetchBlogCount() {
            axios.get(`${api}/blogs/total-blog`).then((response) => {
                this.totalBlog = response.data.totalBlog;
            })
                .catch((error) => {
                    console.error('Error getting blogs:', error);
                });
        },

        fetchEventCount() {
            axios.get(`${api}/events/total-event`).then((response) => {
                this.totalEvent = response.data.totalEvent;
            })
                .catch((error) => {
                    console.error('Error getting events:', error);
                });
        },

        fetchBookingCount() {
            axios.get(`${api}/bookings/total-booking`).then((response) => {
                this.totalBooking = response.data.totalBooking;
            })
                .catch((error) => {
                    console.error('Error getting bookings:', error);
                });
        },

        logoutAdmin() {
            localStorage.removeItem('adminToken');
            this.$router.push({ name: 'Login' });
        },

        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen;
        },
        toggleNotifications() {
            this.notificationOpen = !this.notificationOpen;
        },
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        closeDropdown() {
            this.dropdownOpen = false;
        },
        toggleNotification() {
            this.notificationOpen = !this.notificationOpen;
        },
        closeNotification() {
            this.notificationOpen = false;
        },

        pageDropdown() {
            this.selected = (this.selected === 'Page') ? '' : 'Page';
        },
        formatDate(date) {
            return moment(date).fromNow();
        },

        openEditModal(event) {
            this.isEditMode = true;
            this.editedEvent = { ...event };
            document.getElementById('modal-bg').classList.remove('hidden');
            document.getElementById('modal-box').classList.remove('hidden');
        },

        openDeleteModal(event) {
            this.isDeleteMode = true;
            this.deleteEvent = { ...event };
            document.getElementById('modal-bg4').classList.remove('hidden');
            document.getElementById('modal-box4').classList.remove('hidden');
        },

        closeModal() {
            document.getElementById('modal-bg').classList.add('hidden');
            document.getElementById('modal-box').classList.add('hidden');
        },

        closeModal1() {
            document.getElementById('modal-bg4').classList.add('hidden');
            document.getElementById('modal-box4').classList.add('hidden');
        },


    }
}
</script>