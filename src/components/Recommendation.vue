<script setup>
import {ref} from 'vue'
let signIn = ref(false)
</script>

<template>
    <div class="recommendation-wrapper">
        <div class="signInMessage" v-if="!signIn">
            <h4>Get home recommendations</h4>
            <p>Sign in for a more personalized experience.</p>
            <button @click="(signIn=true)">Sign in</button>
        </div>
        <div class="images" :class="signIn? '':'noSignIn'">
            <a href=""> <img src="../assets/hero.jpg" alt=""></a>
            <a href=""> <img src="../assets/hero.jpg" alt=""></a>
            <a href=""> <img src="../assets/hero.jpg" alt=""></a>
        </div>
    </div>
</template>

<style>
    .recommendation-wrapper{
        @apply flex items-center justify-center pb-8 bg-white overflow-hidden;

    }
    .recommendation-wrapper .images{
        @apply flex items-center;
    }
    .recommendation-wrapper .images img{
        @apply h-36 mr-2;
    }
    .signInMessage{
        @apply flex flex-col items-center px-4;
    }
    .signInMessage h4{
        @apply text-lg font-semibold;
    }
    .signInMessage button{
        @apply border border-blue-800 rounded-sm text-blue-700 hover:bg-slate-100 p-1 px-2 mt-3;
    }
    .noSignIn img{
        @apply opacity-50;
    }
    
</style>