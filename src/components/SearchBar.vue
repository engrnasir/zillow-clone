<script setup>
    import {ref} from 'vue'
    let searchKey = ref('')

</script>
<template>
    <div class="wrapper">
        <div class="input-wrapper">
            <input type="text" placeholder="Enter address, neighbourhood, city or Zip" v-model="searchKey">
            <img src="../assets/search.png" alt="" class="icon">
        </div>
        <div class="result"  v-if="searchKey.length>0">
            <p class="result-item"><img src="../assets/loc.png" alt="" class="result-icon"> Current Location</p>                               
            <p class="result-item"><img src="../assets/search.png" alt="" class="result-icon"> Item1</p>                               
        </div>
    </div>
</template>
<style scoped>
.wrapper{
    @apply w-1/2 min-h-min flex flex-col items-center
    max-[840px]:w-2/3
    max-[540px]:w-80;
}
.input-wrapper{
    @apply w-full h-12 relative;
}
.input-wrapper input{
    @apply w-full h-full rounded-md text-black border-none px-2 focus:outline-blue-400 shadow-md
    max-[540px]:text-sm;
}
.icon{
    @apply w-6 absolute top-3 right-2 cursor-pointer;
}
.result{
    @apply w-10/12 bg-white pb-4 rounded-bl-xl rounded-br-xl;
}
.result .result-item{
    @apply px-4 py-2 cursor-pointer
        flex items-center
     hover:bg-blue-600 hover:text-white ;
}
.result .result-item .result-icon{
    @apply w-5 h-5 mr-2;
}

</style>