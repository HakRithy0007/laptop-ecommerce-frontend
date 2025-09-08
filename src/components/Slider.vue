<template>
  <div class="slider-container w-full h-[400px] rounded-lg">
    <Swiper :slides-per-view="1" :space-between="0" :autoplay="{
      delay: 5000,
      disableOnInteraction: false
    }" :pagination="{
      clickable: true,
      dynamicBullets: true
    }" :navigation="true" :modules="modules" class="hero-swiper w-full h-full" :loop="true">
      <SwiperSlide v-for="slide in heroSlides" :key="slide.id" class="relative">
        <div class="slide-content w-full h-full relative overflow-hidden">
          <img :src="slide.image" class="w-full h-full object-cover" />
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

// Import local images from src/assets
import slide1 from '/src/assets/images/slide/slide1.png'
import slide2 from '/src/assets/images/slide/slide2.png'
import slide3 from '/src/assets/images/slide/slide3.png'

// Define types
interface HeroSlide {
  id: number
  image: string
}

// Swiper modules
const modules = [Navigation, Pagination, Autoplay]

// Hero slides data (using local images)
const heroSlides = ref<HeroSlide[]>([
  {
    id: 1,
    image: slide1
  },
  {
    id: 2,
    image: slide2
  },
  {
    id: 3,
    image: slide3
  },
])
</script>

<style scoped>
.slider-container {
  position: relative;
}

.hero-swiper {
  height: 100% !important;
}

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
