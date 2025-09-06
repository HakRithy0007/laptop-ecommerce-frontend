<template>
   <div class="whole-content w-full h-full">

      <!-- Top Header -->
      <!-- <div class="top-header">
         <TopHeader />
      </div> -->



      <!-- Top Menu -->
      <div class="top-menu px-4">
         <TopMenu />
      </div>

      <!-- Menu List -->
      <div class="menu-list mb-2 shadow-md">
         <MenuList />
      </div>

      <!-- Anouncement -->
      <div class="anouncement mb-2">
         <Anouncement />
      </div>

      <!-- Slider -->
      <div class="slider px-4">
         <Slider />
      </div>


      <!-- Feature Product-->
      <div class="feature-product px-4">
         <FeatureProduct />
      </div>

      <!-- Comming Soon -->
      <!-- <div class="comming-soon bg-white h-[400px] mb-4">
         <CommingSoon />
      </div> -->

      <!-- New Arrival -->
      <!-- <div class="new-arrival bg-white h-[400px] px-4 my-4">
         <NewArrival />
      </div> -->


   </div>
</template>

<script setup lang="ts">
import TopHeader from '@/components/zzz/TopHeader.vue';
import TopMenu from '@/components/TopMenu.vue';
import MenuList from '@/components/MenuList.vue';
import Slider from '@/components/Slider.vue';
import FeatureProduct from '@/components/zzz/FeatureProduct.vue';
import Anouncement from '@/components/Anouncement.vue';
import CommingSoon from '@/components/zzz/ComingSoon.vue';
import NewArrival from '@/components/zzz/NewArrival.vue';
</script>