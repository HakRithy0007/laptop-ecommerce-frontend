<template>
    <div class="w-full h-full ">
        <div class="coming-soon w-full h-[60px] flex justify-between items-center px-6">
            <div class="left">
                <span class="text-[1.5rem] font-poppins font-bold">New Arrival</span>
            </div>
            <div class="right">
                <v-btn class="!w-[100px] !h-[30px] !bg-orange-500 !text-white !text-[0.7rem]">Load more</v-btn>
            </div>
        </div>
        <v-divider></v-divider>
        <div class="swiper-container w-full relative mt-6">
            <swiper :modules="[Pagination, Navigation]" :slides-per-view="6" :space-between="12"
                :pagination="{ clickable: true }" :navigation="true" class="mySwiper">
                <swiper-slide v-for="slide in slides" :key="slide.id">
                    <div class="slide-content">
                        <!-- <div class="ribbon">COMING SOON</div> -->
                        <v-chip
                            class="!w-[80px] !min-w-[50px] !h-[20px] !absolute !bg-red-500 !text-white !top-1 !left-1 !rounded-md">
                            Coming Soon
                        </v-chip>

                        <div class="image-wrapper">
                            <img :src="slide.image" alt="product" />
                        </div>
                        <div class="details">
                            <p class="price">${{ slide.price }}</p>
                            <p class="code">{{ slide.code }}</p>
                            <p class="name">{{ slide.title }}</p>
                            <p class="desc">{{ slide.content }}</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface SlideData {
    id: number
    title: string
    content: string
    price: number
    code: string
    image: string
}

const slides = ref<SlideData[]>([
    { id: 1, title: 'ASUS Vivobook S 14 Flip', content: 'TP3402VA...', price: 769, code: 'LUVK-3520', image: '/src/assets/images/laptop/mac1.png' },
    { id: 2, title: 'Printer Epson EcoTank', content: 'A3+ Color', price: 460, code: 'PRE-LI4150', image: '/src/assets/images/laptop/mac1.png' },
    { id: 3, title: 'LED Monitor Dell 23.8"', content: 'S2425H', price: 138, code: 'MOD-S2425H', image: '/src/assets/images/laptop/mac1.png' },
    { id: 4, title: 'Dell 23.8 P2425H', content: 'FHD', price: 175, code: 'MOD-P2425H', image: '/src/assets/images/laptop/mac1.png' },
    { id: 5, title: 'UPS PROLINK 2KVA', content: 'LCD, USB', price: 300, code: 'UP-902ES', image: '/src/assets/images/laptop/mac1.png' },
    { id: 6, title: 'Logitech M330', content: 'Silent Plus', price: 16, code: 'MSL-M330BK', image: '/src/assets/images/laptop/mac1.png' },
    { id: 7, title: 'Logitech M331', content: 'Silent Plus', price: 16, code: 'MSL-M331BK', image: '/src/assets/images/laptop/mac1.png' },
    { id: 8, title: 'Logitech M332', content: 'Silent Plus', price: 16, code: 'MSL-M332BK', image: '/src/assets/images/laptop/mac1.png' },
    { id: 9, title: 'Logitech M333', content: 'Silent Plus', price: 16, code: 'MSL-M333BK', image: '/src/assets/images/laptop/mac1.png' },
    { id: 10, title: 'Extra Item', content: 'Scroll test', price: 99, code: 'EXTRA-01', image: '/src/assets/images/laptop/mac1.png' }
])
</script>

<style scoped>
.mySwiper {
    width: 97%;
}

.slide-content {
    background: #fff;
    border: 1px solid #eee;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
}

.image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    height: 160px;
    padding: 12px;
}

.image-wrapper img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.details {
    padding: 10px;
    text-align: left;
}

.details .price {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 4px;
}

.details .code {
    color: #666;
    font-size: 12px;
    margin-bottom: 6px;
}

.details .name {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
}

.details .desc {
    color: #666;
    font-size: 12px;
}

/* -------------------- Swiper Arrows -------------------- */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    width: 32px;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    color: #fff;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
    background-color: rgba(0, 0, 0, 0.8);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
    font-size: 16px;
    color: #fff;
}

:deep(.swiper-button-next) {
    right: 4px;
    /* closer to the edge */
}

:deep(.swiper-button-prev) {
    left: 4px;
    /* closer to the edge */
}
</style>
