<template>
    <div class="w-full h-[60px] flex justify-center items-center gap-2 overflow-x-auto scrollbar-hide px-6 bg-gray-100">
        <v-btn v-for="n in 6" :key="n" variant="plain" class="transition-all duration-300 ease-in-out rounded-lg"
            :class="activeBtn === n ? '!bg-pink-500 text-white shadow-md' : 'bg-red-500 text-gray-700 hover:bg-green-200'"
            @click="activeBtn = n">
            Button {{ n }}
        </v-btn>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeBtn = ref<number | null>(null);
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
