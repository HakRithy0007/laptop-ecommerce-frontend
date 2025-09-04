<template>
    <div class="swiper-container w-full">
        <swiper :slidesPerView="6" :spaceBetween="10" :pagination="{
            clickable: true,
        }" class="mySwiper">
            <swiper-slide v-for="slide in slides" :key="slide.id">
                <div class="slide-content">
                    <h3>{{ slide.title }}</h3>
                    <p>{{ slide.content }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

interface SlideData {
    id: number
    title: string
    content: string
}

const slides = ref<SlideData[]>([
    { id: 1, title: 'Slide 1', content: 'This is slide 1 content' },
    { id: 2, title: 'Slide 2', content: 'This is slide 2 content' },
    { id: 3, title: 'Slide 3', content: 'This is slide 3 content' },
    { id: 4, title: 'Slide 4', content: 'This is slide 4 content' },
    { id: 5, title: 'Slide 5', content: 'This is slide 5 content' },
    { id: 6, title: 'Slide 6', content: 'This is slide 6 content' },
    { id: 7, title: 'Slide 7', content: 'This is slide 7 content' },
    { id: 8, title: 'Slide 8', content: 'This is slide 8 content' },
    { id: 9, title: 'Slide 9', content: 'This is slide 9 content' }
])

</script>

<style scoped>
.swiper-container {
    padding: 20px;
    max-width: 100%;
    margin: 0 auto;
}

.mySwiper {
    width: 100%;
    height: 450px;
    margin-bottom: 20px;
}

.slide-content {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.slide-content:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.slide-content h3 {
    font-size: 18px;
    font-weight: 600;
    color: #495057;
    margin-bottom: 10px;
}

.slide-content p {
    color: #6c757d;
    font-size: 14px;
    line-height: 1.4;
}

.slide-number {
    font-size: 12px;
    color: #adb5bd;
    margin-top: 10px;
}

/* Auto slides specific styles */
.auto-swiper {
    height: 150px;
}

.auto-slide {
    width: auto !important;
    min-width: 200px;
    max-width: 400px;
}

.auto-content {
    min-height: 120px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
}

.auto-content h3 {
    color: white;
}

/* Custom pagination styles */
:deep(.swiper-pagination-bullet) {
    background: #6c757d;
    opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
    background: #007bff;
    opacity: 1;
}
</style>