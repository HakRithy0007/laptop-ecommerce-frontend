<template>
  <div class="w-full h-full flex justify-center items-center py-2 rounded-md px-6 mt-4 pb-6 bg-[#faf9f9] shadow-xl">
    <div class="w-full h-full grid grid-cols-4 gap-4 mt-2">
      <div v-for="(feature, index) in features" :key="index"
        class="w-full h-full flex justify-center items-center rounded-lg shadow-xl cursor-pointer transform transition duration-300 hover:scale-101">
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
