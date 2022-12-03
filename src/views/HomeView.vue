<script setup>
import {ref, onMounted} from 'vue';
import Navbar from '../components/Navbar.vue'
import SearhBar from '../components/SearchBar.vue'
import Recommendation from '../components/Recommendation.vue'
import Card from '../components/Card.vue'
import Dropdowns from '../components/Dropdowns.vue'
import Footer from '../components/Footer.vue'


let cards = ref([
  {
    image:'https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.png',
    title:'Buy a home',
    snippet:'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else',
    button:'Browse Home'
  },
  {
    image:'https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Sell_a_home.png',
    title:'Sell a home',
    snippet:'No matter what path you take to sell your home, we can help you navigate a successful sale.',
    button:'See your options'
  },
  {
    image:'https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.png',
    title:'Rent a home',
    snippet:'Your next place is closer than you think. Explore the possibilities, and discover a rental you’ll love.',
    button:'Find rentals'
  }
])

onMounted(()=>{
  window.addEventListener('scroll',(e)=>{
    const searchbar = document.getElementById('searchbarId')
    if(searchbar.offsetTop<410){
      searchbar.classList.add('invisible')
    }else{
      searchbar.classList.remove('invisible')
    }
    console.log(searchbar.offsetTop);
  })
})
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <Navbar/>
      <div class="container">
        <h1 class="slogan text-shadow">Find it. Tour it. Own it.</h1>
        <SearhBar/>
      </div>
    </header>
    <div id="searchbarId" class="sticky w-full bg-white top-0 z-50 flex justify-center shadow-lg">
      <SearhBar/>
    </div>
    <main>
      <Recommendation/>
      <div class="cards">
        <router-link to=""><Card :info="cards[0]"/></router-link>
        <router-link to=""><Card :info="cards[1]"/></router-link>
        <router-link to=""><Card :info="cards[2]"/></router-link>
      </div>
      <Dropdowns/>
      <Footer/>
    </main>
  </div>
</template>
<style scoped>
.header{
  @apply w-full bg-hero-pattern bg-cover bg-no-repeat bg-center flex flex-col items-center; 
}
.container{
    @apply w-full h-80 flex flex-col items-center justify-center relative;   
}
.slogan{
    @apply font-open-sans text-3xl font-extrabold text-white mb-6;
}
.cards{
  @apply bg-gray-50 px-10 py-12 pb-20
    grid max-[840px]:grid-cols-1 grid-cols-3 gap-4 justify-items-center;
}
.cards a{
  @apply w-full;
}

</style>

