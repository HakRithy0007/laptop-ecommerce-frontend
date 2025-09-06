<template>
  <div class="w-full h-full flex flex-col justify-center items-center py-6 rounded-lg">
    <div class="feature-text w-full h-full flex justify-center items-center mb-4">
      <h2 class="font-poppins font-bold text-[2rem]">
        PROMOTION !
      </h2>
    </div>
    <div class="w-full h-full grid grid-cols-4 gap-4">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="w-full h-full flex justify-center items-center rounded-lg shadow-xl"
      >
        <span>
          <img :src="feature.img" class="w-full h-full rounded-lg" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  { img: "/src/assets/images/feature/feature1.png" },
  { img: "/src/assets/images/feature/feature2.png" },
  { img: "/src/assets/images/feature/feature3.png" },
  { img: "/src/assets/images/feature/feature1.png" }
]
</script>

<style scoped>
</style>
