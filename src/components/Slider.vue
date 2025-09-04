<template>
    <div class="w-full h-full flex justify-center items-center py-4 px-6 bg-[#eaeaeb]">
        <v-carousel hide-delimiters height="400" cycle :interval="3000">
            <template #prev>
                <v-btn icon class="bg-white/50 hover:bg-white">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </template>
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover rounded="lg"></v-carousel-item>
        </v-carousel>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface CarouselItem {
    src: string
}

const items = ref<CarouselItem[]>([
    { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
    { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
    { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
    { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' },
])
</script>

<style scoped></style>
