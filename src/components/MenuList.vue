<template>
    <div class="w-full h-[60px] flex justify-center items-center gap-2 overflow-x-auto scrollbar-hide px-6 bg-gray-100">
        <v-btn v-for="n in 8" :key="n" variant="plain" :ripple="false"
            :class="activeBtn === n ? '!bg-pink-500 text-white' : ''" @click="activeBtn = n">
            Button {{ n }}
        </v-btn>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeBtn = ref<number | null>(null)
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
