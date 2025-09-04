<template>
  <div class="slider-container w-full h-[400px]">
    <!-- Hero Swiper with full height -->
    <Swiper :slides-per-view="1" :space-between="0" :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }" :pagination="{
        clickable: true,
        dynamicBullets: true,
      }" :navigation="true" :modules="modules" class="hero-swiper w-full h-full" :loop="true">
      <SwiperSlide v-for="slide in heroSlides" :key="slide.id" class="relative">
        <div class="slide-content w-full h-full relative overflow-hidden">
          <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />

          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white px-6 max-w-4xl">
              <h1 class="text-4xl md:text-6xl font-bold mb-4">
                {{ slide.title }}
              </h1>
              <p class="text-lg md:text-xl mb-8 opacity-90">
                {{ slide.description }}
              </p>
              <button
                class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
                @click="handleCTA(slide.id)">
                {{ slide.buttonText }}
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Debug log
console.log('Slider component is loading...')

// Define types
interface HeroSlide {
  id: number
  title: string
  description: string
  image: string
  buttonText: string
}

// Swiper modules
const modules = [Navigation, Pagination, Autoplay]

// Hero slides data
const heroSlides = ref<HeroSlide[]>([
  {
    id: 1,
    title: 'Welcome to Our Store',
    description: 'Discover amazing products with unbeatable prices and quality',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    buttonText: 'Shop Now'
  },
  {
    id: 2,
    title: 'New Collection',
    description: 'Explore our latest arrivals and trending items',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    buttonText: 'View Collection'
  },
  {
    id: 3,
    title: 'Special Offers',
    description: 'Get up to 50% off on selected items this week only',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    buttonText: 'Get Deals'
  }
])

// Handle CTA button clicks
const handleCTA = (slideId: number) => {
  console.log(`CTA clicked for slide ${slideId}`)
  // Add your navigation logic here
}

console.log('Hero slides data:', heroSlides.value)
</script>

<style scoped>
.slider-container {
  position: relative;
}

/* Ensure swiper takes full height */
.hero-swiper {
  height: 100% !important;
}

/* Custom navigation buttons */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: white;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(0, 0, 0, 0.6);
  transform: scale(1.1);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px;
  font-weight: bold;
}

/* Custom pagination */
:deep(.swiper-pagination) {
  bottom: 20px !important;
}

:deep(.swiper-pagination-bullet) {
  background: rgba(255, 255, 255, 0.5);
  width: 12px;
  height: 12px;
  margin: 0 8px;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background: white;
  transform: scale(1.3);
}

/* Responsive text */
@media (max-width: 768px) {
  .slide-content h1 {
    font-size: 2rem !important;
  }

  .slide-content p {
    font-size: 1rem !important;
  }
}
</style>