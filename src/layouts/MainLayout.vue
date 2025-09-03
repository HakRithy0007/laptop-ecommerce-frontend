<template>
   <div class="whole-content w-full h-full bg-red-500">

      <!-- Top Header -->
      <div class="top-header h-[30px]">
         <TopHeader />
      </div>

      <!-- Top Menu -->
      <div class="top-menu h-[70px]">
         <TopMenu />
      </div>

   </div>
</template>

<script setup lang="ts">
import TopHeader from '@/components/TopHeader.vue';
import TopMenu from '@/components/TopMenu.vue';

</script>