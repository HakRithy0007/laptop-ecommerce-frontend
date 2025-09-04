<template>
   <div class="whole-content w-full h-full bg-[#e5e7ee]">

      <!-- Top Header -->
      <div class="top-header h-[40px]">
         <TopHeader />
      </div>

      <!-- Top Menu -->
      <div class="top-menu">
         <TopMenu />
      </div>

      <!-- Menu List -->
      <div class="menu-list mb-4 shadow-md">
         <MenuList />
      </div>

      <!-- Slider -->
      <div class="slider">
         <Slider />
      </div>

      <!-- Feature Product-->
      <div class="feature-product">
         <FeatureProduct />
      </div>

      <!-- Comming Soon -->
      <div class="comming-soon bg-white h-[400px] mb-4">
         <CommingSoon />
      </div>

      <!-- New Arrival -->
      <div class="new-arrival bg-white h-[400px] mb-4">
         <NewArrival />
      </div>


   </div>
</template>

<script setup lang="ts">
import TopHeader from '@/components/TopHeader.vue';
import TopMenu from '@/components/TopMenu.vue';
import MenuList from '@/components/MenuList.vue';
import Slider from '@/components/Slider.vue';
import FeatureProduct from '@/components/FeatureProduct.vue';
import CommingSoon from '@/components/ComingSoon.vue';
import NewArrival from '@/components/NewArrival.vue';
</script>