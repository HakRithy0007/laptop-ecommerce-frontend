<template>
   <div class="whole-content w-full h-full bg-gray-200">

      <!-- Top Header -->
      <div class="top-header">
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
      <div class="slider px-4">
         <Slider />
      </div>

      <!-- Anouncement -->
      <div class="anouncement px-4">
         <Anouncement />
      </div>

      <!-- Promotion Product-->
      <div class="promotion-product px-4">
         <Promotion />
      </div>

      <!-- Comming Soon -->
      <div class="comming-soon mb-2 px-4">
         <CommingSoon />
      </div>


   </div>
</template>

<script setup lang="ts">
import TopHeader from '@/components/TopHeader.vue';
import TopMenu from '@/components/TopMenu.vue';
import MenuList from '@/components/MenuList.vue';
import Slider from '@/components/Slider.vue';
import Promotion from '@/components/Promotion.vue';
import Anouncement from '@/components/Anouncement.vue';
import CommingSoon from '@/components/ComingSoon.vue';
</script>