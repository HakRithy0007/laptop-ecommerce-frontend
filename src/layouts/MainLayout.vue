<template>
   <div class="whole-content w-full h-full bg-[#cccccc]">

      <!-- Top Header -->
      <div class="top-header h-[40px]">
         <TopHeader />
      </div>

      <!-- Top Menu -->
      <div class="top-menu h-[70px]">
         <TopMenu />
      </div>

      <!-- Menu List -->
      <div class="menu-list h-[60px]">
         <MenuList />
      </div>

      <!-- Slider -->
      <div class="slider h-[400px]">
         <!-- <Slider /> -->
      </div>

      <!-- Feature Product-->
      <div class="feature-product h-[250px]">
         <FeatureProduct />
      </div>

   </div>
</template>

<script setup lang="ts">
import TopHeader from '@/components/TopHeader.vue';
import TopMenu from '@/components/TopMenu.vue';
import MenuList from '@/components/MenuList.vue';
import Slider from '@/components/Slider.vue';
import FeatureProduct from '@/components/FeatureProduct.vue';
</script>