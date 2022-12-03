<script setup>
import {ref} from 'vue'
let links = ref([
    {title:'About', path:''},
    {title:'Zestimates', path:''},
    {title:'Research', path:''},
    {title:'Careers', path:''},
    {title:'Help', path:''},
    {title:'Advertise', path:''},
    {title:'Fair Housing Guide', path:''},
    {title:'Terms of use', path:''},
    {title:'Privacy Portal', path:''},
    {title:'Cookie Preference', path:''},
    {title:'Blog', path:''},
    {title:'AI', path:''},
    {title:'Mobile Apps', path:''},
    {title:'Trulia', path:''},
    {title:'StreetEasy', path:''},
    {title:'HotPads', path:''},
    {title:'Out East', path:''},
    {title:'ShowingTime', path:''},
])
</script>
<template>
    <footer class="flex flex-col items-center">
        <div class="links-wrapper">
            <ul class="lists">
                <li v-for="(link, index) in links" :key="index"><router-link :to="link.path">{{link.title}}</router-link></li>
            </ul>
            <p class="text-center text-blue-500 text-xs mt-3 hover:underline"><a href="">Do Not Sell My Personal Information→</a></p>
        </div>
        <div class="about-wrapper">
            <p>Zillow Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please</p>
            <p class="mb-4"><a href="">Let us know</a></p>

            <p>Zillow, Inc. holds real estate brokerage <a href="">licences</a> in multiple states. Zillow (Canada), Inc. holds real estate brokerage <a href="">licences</a> in multiple provinces.</p>
            <p><a href="">§ 442-H New York Standard Operating Procedures</a></p>
            <p><a href="">§ New York Fair Housing Notice</a></p>
            <p>TREC: <a href="">Information about brokerage services, Consumer protection notice</a></p>
            <p>California DRE #1522444</p>
            <p class="mb-4"><a href=""> Contact Zillow, Inc. Brokerage</a></p>

            <p>For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.</p>
        </div>
        <div class="flex pb-4">
            <a href="" class="mr-3"><img src="https://s.zillowstatic.com/pfs/static/app-store-badge.svg" alt=""></a>
            <a href=""><img src="https://s.zillowstatic.com/pfs/static/google-play-badge.svg" alt=""></a>
        </div>
        <div class="flex items-center mb-8 max-[540px]:flex-col">
            <a href=""><img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" class="pb-3"></a>
            <div class="flex items-center">
            <p class="text-sm m-2 opacity-50">follow us:</p>
                <a href=""><img src="../assets/facebook.png" alt="" class="h-5 mr-2"></a>
                <a href=""><img src="../assets/instagram.png" alt="" class="h-5 mr-2"></a>
                <a href=""><img src="../assets/tik-tok.png" alt="" class="h-5 mr-2"></a>
                <a href=""><img src="../assets/twitter.png" alt="" class="h-5 mr-2"></a>
            </div>
            <div class="flex items-center">
                <p class="text-sm m-2 opacity-50">© 2006-2022 Zillow</p>
                <a href=""><img src="../assets/house.png" alt="" class="h-5"></a>
            </div>
        </div>
        <img src="https://s.zillowstatic.com/pfs/static/footer-art.svg" alt="" class="mb-1">
    </footer>
</template>
<style scoped>
.links-wrapper{
    @apply py-8 border-b ;
}
.lists{
    @apply w-full flex items-center justify-center flex-wrap text-center;
}
.lists li{
    @apply w-max m-2 text-xs hover:underline;
}

.about-wrapper{
    @apply w-4/5 py-5 text-center text-xs; 
}
.about-wrapper a{
    @apply text-blue-600 underline;
}

</style>