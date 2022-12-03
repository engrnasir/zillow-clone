
<script setup>
import {ref} from 'vue'

let showDropdowns = ref([false, false, false, false])
let col1Links = ref(['Browse all homes','Albuquerque real estate','Atlanta real estate','Austin real estate','Baltimore real estate','Boston real estate','Calgary real estate','Charlotte real estate','Chicago real estate','Cleveland real estate','Colorado Springs real estate','Columbus real estate','Dallas real estate','Denver real estate','Detroit real estate','Edmonton real estate','El Paso real estate','Fort Worth real estate','Fresno real estate','Houston real estate','Indianapolis real estate','Jacksonville real estate','Kansas City real estate','Las Vegas real estate','Long Beach real estate','Los Angeles real estate','Louisville real estate','Memphis real estate','Mesa real estate','Miami real estate','Milwaukee real estate','Minneapolis real estate','Nashville real estate','New Orleans real estate','New York real estate','Oakland real estate','Oklahoma real estate','Omaha real estate','Ottawa real estate','Philadelphia real estate','Phoenix real estate','Portland real estate','Raleigh real estate','Sacramento real estate','San Antonio real estate','San Diego real estate','San Francisco real estate','San Jose real estate','Seattle real estate','Toronto real estate','Tucson real estate','Tulsa real estate','Vancouver real estate','Virginia Beach real estate','Washington DC real estate','Wichita real estate'])
let col2Links = ref(['Rental Buildings','Atlanta apartments for rent','Austin apartments for rent','Baltimore apartments for rent','Boston apartments for rent','Bronx NYC apartments for rent','Brooklyn NYC apartments for rent','Charlotte apartments for rent','Chicago apartments for rent','Dallas apartments for rent','Denver apartments for rent','Houston apartments for rent','Jersey City apartments for rent','Long Beach apartments for rent','Manhattan NYC apartments for rent','Miami apartments for rent','Minneapolis apartments for rent','New York City apartments for rent','Oakland apartments for rent','Oklahoma City apartments for rent','Philadelphia apartments for rent','Queens NYC apartments for rent','Sacramento apartments for rent','San Francisco apartments for rent','Seattle apartments for rent','Washington DC apartments for rent','Atlanta houses for rent','Austin houses for rent','Boston houses for rent','Charlotte houses for rent','Columbus houses for rent','Fort Worth houses for rent','Fresno houses for rent','Houston houses for rent','Indianapolis houses for rent','Jacksonville houses for rent','Las Vegas houses for rent','Memphis houses for rent','Milwaukee houses for rent','Nashville houses for rent','Oakland houses for rent','Oklahoma City houses for rent','Philadelphia houses for rent','Phoenix houses for rent','Portland houses for rent','San Antonio houses for rent','San Francisco houses for rent','San Jose houses for rent','Tampa houses for rent','Tucson houses for rent','Washington DC houses for rent'])
let col3Links = ref(['Current mortgage rates','Alaska mortgage rates','Alabama mortgage rates','Arkansas mortgage rates','Arizona mortgage rates','California mortgage rates','Colorado mortgage rates','Connecticut mortgage rates','Delaware mortgage rates','Florida mortgage rates','Georgia mortgage rates','Hawaii mortgage rates','Iowa mortgage rates','Idaho mortgage rates','Illinois mortgage rates','Indiana mortgage rates','Kansas mortgage rates','Kentucky mortgage rates','Louisiana mortgage rates','Massachusetts mortgage rates','Maryland mortgage rates','Maine mortgage rates','Michigan mortgage rates','Minnesota mortgage rates','Missouri mortgage rates','Mississippi mortgage rates','Montana mortgage rates','North Carolina mortgage rates','North Dakota mortgage rates','Nebraska mortgage rates','New Hampshire mortgage rates','New Jersey mortgage rates','New Mexico mortgage rates','Nevada mortgage rates','New York mortgage rates','Ohio mortgage rates','Oklahoma mortgage rates','Oregon mortgage rates','Pennsylvania mortgage rates','Rhode Island mortgage rates','South Carolina mortgage rates','South Dakota mortgage rates','Tennessee mortgage rates','Texas mortgage rates','Utah mortgage rates','Virginia mortgage rates','Vermont mortgage rates','Washington mortgage rates','Wisconsin mortgage rates','West Virginia mortgage rates','Wyoming mortgage rates'])
let col4Links = ref(['California', 'Texas', 'New York', 'Florida', 'Illinois', 'Pennsylvania', 'Ohio', 'Michigan', 'Georgia', 'North Carolina', 'New Jersey', 'Virginia', 'Washington', 'Massachusetts', 'Indiana', 'Arizona', 'Tennessee', 'Missouri', 'Maryland', 'Wisconsin', 'Minnesota', 'Colorado', 'Alabama', 'South Carolina', 'Louisiana', 'Kentucky', 'Oregon', 'Oklahoma', 'Connecticut', 'Iowa', 'Mississippi', 'Arkansas', 'Kansas', 'Utah', 'Nevada', 'New Mexico', 'West Virginia', 'Nebraska', 'Idaho', 'Hawaii', 'Maine', 'New Hampshire', 'Rhode Island', 'Montana', 'Delaware', 'South Dakota', 'Alaska', 'North Dakota', 'Vermont', 'Washington, DC', 'Wyoming', 'Puerto Rico', 'Virgin Islands' ])




</script>
<template>
    <div class="dropdown-wrapper">
        <div class="lists">
            <div class="heading" @click="showDropdowns[0]=!showDropdowns[0]">
                <h3>Real Estate</h3>
                <img src="../assets/down-chevron.png" alt="">
            </div>
            <ul v-show="showDropdowns[0]">
                <li v-for="(link,i) in col1Links" :key="i"><router-link to="">{{link}}</router-link></li>
            </ul>
        </div>
        <div class="lists" @click="showDropdowns[1]=!showDropdowns[1]">
            <div class="heading">
                <h3>Rentals</h3>
                <img src="../assets/down-chevron.png" alt="">
            </div>
            <ul v-show="showDropdowns[1]">
                <li v-for="(link,i) in col2Links" :key="i"><router-link to="">{{link}}</router-link></li>
            </ul>
        </div>
        <div class="lists" @click="showDropdowns[2]=!showDropdowns[2]">
            <div class="heading">
                <h3>Mortgage Rates</h3>
                <img src="../assets/down-chevron.png" alt="">
            </div>
            <ul v-show="showDropdowns[2]">
                <li v-for="(link,i) in col3Links" :key="i"><router-link to="">{{link}}</router-link></li>
            </ul>
        </div>
        <div class="lists" @click="showDropdowns[3]=!showDropdowns[3]">
            <div class="heading border-none">
                <h3>Browse Homes</h3>
                <img src="../assets/down-chevron.png" alt="">
            </div>
            <ul v-show="showDropdowns[3]">
                <li v-for="(link,i) in col4Links" :key="i"><router-link to="">{{link}}</router-link></li>
            </ul>
        </div>
    </div>
</template>
<style>
.dropdown-wrapper{
    @apply px-6 py-8 flex justify-center border-b flex-wrap max-[480px]:px-4   ;
}
.lists{
    @apply px-8 py-2 max-[480px]:w-full;
}
.lists ul{
    @apply text-center text-sm text-blue-600;
}
.heading{
    @apply flex items-center pr-3 border-r cursor-pointer max-[480px]:border-none;
}
.heading img{
    @apply w-4 ml-8;
}
.heading h3{
    @apply text-sm font-medium hover:underline ;
}
</style>