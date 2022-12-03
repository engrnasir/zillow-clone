<script setup>
const props = defineProps({
  info:Object
})
</script>
<template>
    <div class="card-wrapper">
        <img :srcset="info.image" alt="" class="thumbnail">
        <h3 class="title">{{info.title}}</h3>
        <p class="snippet">{{info.snippet}}</p>
        <button>{{info.button}}</button>
    </div>
</template>

<style scoped>
.card-wrapper{
    @apply flex flex-col  items-center justify-center text-center w-full h-96 p-6 bg-white shadow-lg rounded-sm font-open-sans
    transition-all ease-in cursor-pointer
    hover:scale-105 hover:shadow-2xl ;
}
.thumbnail{
    @apply w-full mb-2 max-[840px]:max-w-xs;
}
.title{
    @apply font-bold text-xl text-gray-700 capitalize mb-3;
}
.snippet{
    @apply text-gray-700 px-2 py-3 text-sm;
}
.card-wrapper button{
    @apply border border-blue-800 rounded-sm text-blue-700 p-1 px-2 mt-3 capitalize transition-all ease-in;
}
.card-wrapper:hover>button{
    @apply bg-blue-600 text-white;
}
</style>