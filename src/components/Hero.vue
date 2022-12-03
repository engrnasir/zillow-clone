<script setup>
    import {ref} from 'vue'
    let searchKey = ref('')

</script>
<template>
    <div class="container">
        <h1 class="slogan text-shadow">Find it. Tour it. Own it.</h1>
    </div>
</template>
<style scoped>
.container{
    @apply w-full h-80 flex flex-col items-center justify-center ;   
}

.slogan{
    @apply font-open-sans text-3xl font-extrabold text-white mb-6;
}
</style>