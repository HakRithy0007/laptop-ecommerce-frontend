<template>
    <div class="w-full h-[60px] flex items-center gap-2 overflow-x-auto scrollbar-hide px-2">
        <v-btn v-for="n in 17" :key="n" variant="tonal">
            Button {{ n }}
        </v-btn>
    </div>
</template>

<script setup lang="ts">
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
