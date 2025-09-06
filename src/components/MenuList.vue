<template>
    <div
        class="w-full h-[60px] flex justify-center items-center gap-2 overflow-x-auto scrollbar-hide bg-[#faf9f9] px-6">
        <v-btn v-for="(item, index) in menuData" :key="index" variant="plain"
            class="menubtn transition-all font-poppins font-extrabold duration-300 ease-in-out relative"
            :class="activeBtn === index ? 'active-tab' : 'bg-red-500 text-gray-900 hover:bg-green-200'"
            @click="setActive(index)">
            {{ item.title }}
        </v-btn>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const activeBtn = ref<number>(0);
const menuData = [
    { title: "Home" },
    { title: "Laptop" },
    { title: "Monitor" },
    { title: "Brand" },
    { title: "About" },
    { title: "Contact Us" }
];

function setActive(n: number) {
    activeBtn.value = n;
    localStorage.setItem("activeBtn", String(n));
}

onMounted(() => {
    const saved = localStorage.getItem("activeBtn");
    if (saved) {
        activeBtn.value = Number(saved);
    }
});
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.menubtn {
    position: relative;
}

.menubtn::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: #069BDA;
    transition: all 0.2s ease-in-out;
}

.active-tab.menubtn {
    color: #069BDA;
}

.active-tab.menubtn::before {
    width: 100%;
}
</style>
