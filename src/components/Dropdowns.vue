
<script setup>
import {ref} from 'vue'

let showDropdowns = ref([false, false, false, false])

</script>
<template>
    <div class="dropdown-wrapper">
        <div class="lists">
            <div class="heading" @click="showDropdowns[0]=!showDropdowns[0]">
                <h3>Real Estate</h3>
                <img src="../assets/down-chevron.png" alt="">
            </div>
            <ul v-show="showDropdowns[0]">
                <li v-for="i in 20" :key="i"><router-link to="">item1</router-link></li>
            </ul>
        </div>
        <div class="lists" @click="showDropdowns[1]=!showDropdowns[1]">
            <div class="heading">
                <h3>Real Estate</h3>
                <img src="../assets/down-chevron.png" alt="">
            </div>
            <ul v-show="showDropdowns[1]">
                <li v-for="i in 20" :key="i"><router-link to="">item1</router-link></li>
            </ul>
        </div>
        <div class="lists" @click="showDropdowns[2]=!showDropdowns[2]">
            <div class="heading">
                <h3>Real Estate</h3>
                <img src="../assets/down-chevron.png" alt="">
            </div>
            <ul v-show="showDropdowns[2]">
                <li v-for="i in 20" :key="i"><router-link to="">item1</router-link></li>
            </ul>
        </div>
        <div class="lists" @click="showDropdowns[3]=!showDropdowns[3]">
            <div class="heading border-none">
                <h3>Real Estate</h3>
                <img src="../assets/down-chevron.png" alt="">
            </div>
            <ul v-show="showDropdowns[3]">
                <li v-for="i in 20" :key="i"><router-link to="">item1</router-link></li>
            </ul>
        </div>
    </div>
</template>
<style>
.dropdown-wrapper{
    @apply px-10 py-8 flex justify-center border-b flex-wrap max-[480px]:px-4   ;
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