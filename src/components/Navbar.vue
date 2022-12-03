<script setup>
    import {ref} from 'vue'
    let hide=ref(true)
</script>
<template>
    <nav class="w-full p-4 py-6 flex items-center justify-between">
        <img src="../assets/menu.png" alt="" class="w-6" @click="(hide=false)">
        <img src="https://s.zillowstatic.com/pfs/static/z-logo-white.svg" alt="" class="shadow-md">
        <button class="text-white">Sign in</button>
    </nav>
    <nav class="nav" :class="hide?'hide':''">
        <img src="../assets/close.png" alt="" :class="hide?'hide':''" class="w-4 absolute top-3 left-8 min-[840px]:hidden" @click="(hide=true)">
        <ul class="left-menu">
            <li><p><a href="google.com">Buy</a><img src="../assets/down-chevron.png" alt="" class="w-7 border-l pl-2 hidden max-[840px]:inline-block"></p>
                <ul class="submenus">
                    <li>
                        <ul class="submenu">
                            <li><b>Homes for sales:</b></li>
                            <li><router-link to="">Homes for sale</router-link></li>
                            <li><router-link to="">Foreclosures</router-link></li>
                            <li><router-link to="">For sale by owner</router-link></li>
                            <li><router-link to="">Open houses</router-link></li>
                            <li><router-link to="">New construction</router-link></li>
                            <li><router-link to="">Coming soon</router-link></li>
                            <li><router-link to="">Recent home sales</router-link></li>
                            <li><router-link to="">All homes</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <ul class="submenu">
                            <li><b>Renter Hub</b></li>
                            <li><router-link to="">Contacted rentals</router-link></li>
                            <li><router-link to="">Your rental</router-link></li>
                            <li><router-link to="">Messages</router-link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><p><a href="#">Rent</a><img src="../assets/down-chevron.png" alt="" class="w-7 border-l pl-2 hidden max-[840px]:inline-block"></p>
                <ul class="submenus">
                    <li>
                        <ul class="submenu">
                            <li><b>Search for rentals</b></li>
                            <li><router-link to="">Rental buildings</router-link></li>
                            <li><router-link to="">Apartments for rent</router-link></li>
                            <li><router-link to="">Houses for rent</router-link></li>
                            <li><router-link to="">All rental listings</router-link></li>
                            <li><router-link to="">All rental buildings</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <ul class="submenu">
                            <li><b>Renter Hub</b></li>
                            <li><router-link to="">Contacted rentals</router-link></li>
                            <li><router-link to="">Your rental</router-link></li>
                            <li><router-link to="">Messages</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <ul class="submenu">
                            <li><b>Resources</b></li>
                            <li><router-link to="">Affordability calculator</router-link></li>
                            <li><router-link to="">Renters guide</router-link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><p><a href="#">Sell</a><img src="../assets/down-chevron.png" alt="" class="w-7 border-l pl-2 hidden max-[840px]:inline-block"></p>
                <ul class="submenus">
                    <li>
                        <ul class="submenu">
                            <li><b>Resources</b></li>
                            <li><router-link to="">Explore your options</router-link></li>
                            <li><router-link to="">See your home's Zestimate</router-link></li>
                            <li><router-link to="">Home values</router-link></li>
                            <li><router-link to="">Sellers guide</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <ul class="submenu">
                            <li><b>Selling options</b></li>
                            <li><router-link to="">Post For Sale by Owner</router-link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><p><a href="#">Home Loans</a><img src="../assets/down-chevron.png" alt="" class="w-7 border-l pl-2 hidden max-[840px]:inline-block"></p>
                <ul class="submenus">
                    <li>
                        <ul class="submenu">
                            <li><b>Shop mortgages</b></li>
                            <li><router-link to="">Mortgage lenders</router-link></li>
                            <li><router-link to="">HELOC lenders</router-link></li>
                            <li><router-link to="">Mortgage rates</router-link></li>
                            <li><router-link to="">Refinance rates</router-link></li>
                            <li><router-link to="">All mortgage rates</router-link></li>
                        </ul>
                    </li>
                    
                    <li>
                        <ul class="submenu">
                            <li><b>Calculators</b></li>
                            <li><router-link to="">Mortgage calculator</router-link></li>
                            <li><router-link to="">Refinance calculator</router-link></li>
                            <li><router-link to="">Affordability calculator</router-link></li>
                            <li><router-link to="">Amortization calculator</router-link></li>
                            <li><router-link to="">Debt-to-Income calculator</router-link></li>
                        </ul>
                    </li>
                    
                    <li>
                        <ul class="submenu">
                            <li><b>Resources</b></li>
                            <li><router-link to="">Lender reviews</router-link></li>
                            <li><router-link to="">Mortgage learning center</router-link></li>
                            <li><router-link to="">Mortgages app</router-link></li>
                            <li><router-link to="">Lender resource center</router-link></li>
                        </ul>
                    </li>
                    
                </ul>
            </li>
            <li><p><a href="#">Agent finder</a><img src="../assets/down-chevron.png" alt="" class="w-7 border-l pl-2 hidden max-[840px]:inline-block"></p>
                <ul class="submenus">
                    <li>
                        <ul class="submenu">
                            <li><b>Looking for pros?</b></li>
                            <li><router-link to="">Real estate agents</router-link></li>
                            <li><router-link to="">Property managers</router-link></li>
                            <li><router-link to="">Home inspectors</router-link></li>
                            <li><router-link to="">Other pros</router-link></li>
                            <li><router-link to="">Home improvement pros</router-link></li>
                            <li><router-link to="">Home builders</router-link></li>
                            <li><router-link to="">Real estate photographers</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <ul class="submenu">
                            <li><b>I'm a pro</b></li>
                            <li><router-link to="">Agent advertising</router-link></li>
                            <li><router-link to="">Agent resource center</router-link></li>
                            <li><router-link to="">Create a free agent account</router-link></li>
                            <li><router-link to="">Real estate business plan</router-link></li>
                            <li><router-link to="">Real estate agent scripts</router-link></li>
                            <li><router-link to="">Listing flyer templates</router-link></li>
                        </ul>
                    </li>   
                </ul>
            </li>
        </ul>
        <router-link to="">
            <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" class="logo">
        </router-link>
        <ul class="right-menu">
            <li><p><router-link to="">Manage Rentals</router-link><img src="../assets/down-chevron.png" alt="" class="w-7 border-l pl-2 hidden max-[840px]:inline-block"></p>
                <ul class="manage-submenu">
                    <li> 
                        <ul class="border-b border-b-gray-300">
                            <li><b>Rental Management Tools</b></li>
                            <li><router-link to="">List a rental</router-link></li>
                            <li><router-link to="">My Listings</router-link></li>
                            <li><router-link to="">Messages</router-link></li>
                            <li><router-link to="">Applications</router-link></li>
                            <li><router-link to="">Leases</router-link></li>
                            <li><router-link to="">Payments</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <ul class="">
                            <li><b>Learn More</b></li>
                            <li><router-link to="">Zillow Rental Manager</router-link></li>
                            <li><router-link to="">Price My Rental</router-link></li>
                            <li><router-link to="">Resource Center</router-link></li>
                            <li><router-link to="">Help Center</router-link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><router-link to="">Advertise</router-link></li>
            <li><a href="#">Help</a></li>
            <li><router-link to="">Sign in</router-link></li>
        </ul>
    </nav>
</template>
<style>
.nav{
    @apply absolute top-0 z-50 w-full flex justify-between items-center px-8 bg-white font-open-sans;
}
.right-menu,
.left-menu{
    @apply flex justify-between;
}
.right-menu>li,
.left-menu >li{
    @apply py-6 pr-3 hover:text-blue-400 text-sm;
}
.right-menu>li p,
.left-menu >li p{
    @apply w-full flex items-center justify-between
}
.submenus{
    @apply absolute top-16 left-0 w-full bg-white text-black p-4 
    border-solid border-t border-t-slate-100 z-50 shadow-md
    hidden hover:flex;
}

.submenus>li{
    @apply mr-2;
}
.left-menu li:hover .submenus
{
    @apply flex;
}
.submenu{
    @apply h-full p-3 pr-4 border-r border-r-gray-400;
}


.manage-submenu li,
.submenu li{
    @apply pb-2;
}
.manage-submenu li a,
.submenu li a{
    @apply text-blue-600 text-xs
    hover:text-black hover:underline;
}
.right-menu>li:hover>.manage-submenu{
    @apply inline-block;
}
.manage-submenu{
    @apply absolute right-12 top-16 bg-white text-black p-4 w-56 h-72 overflow-scroll overflow-x-hidden
    border-solid border-t border-t-slate-300 z-50 shadow-md
    hidden hover:inline-block
    max-[840px]:static max-[840px]:w-full max-[840px]:shadow-none max-[840px]:h-max max-[840px]:border-none
    ;
}

.logo{
    @apply h-8;
}

.hide{
    @apply max-[840px]:hidden;
}


/* Media query start */
@media only screen and (max-width:840px){
    .nav{
        @apply flex-col items-start justify-start px-0 pt-8 min-h-screen shadow-lg;
    }
    .submenus{
        @apply static flex-col shadow-none border-none top-0;
    }
    .right-menu,
    .left-menu{
        @apply w-full flex-col justify-start
    }
    .right-menu>li,
    .left-menu >li{
        @apply px-8 py-2 border-b;
    }
    .logo{
        @apply h-4 absolute top-2 left-1/2 -translate-x-1/2;
    }

    .submenu{
        @apply w-full p-3 pr-0 border-none;
    }



}
/* Media query End */
</style>