<template>
    <div class="w-full h-[70px] flex justify-between items-center px-4 relative">

        <!-- Left Content -->
        <div class="left-content w-1/2 sm:w-[85%] h-full flex items-center gap-2">

            <!-- Logo -->
            <div class="logo w-[150px] h-full flex flex-col justify-center items-center round-lg">
                <div class="w-full h-full flex justify-center items-center">
                    <span class="text-[2rem] font-extrabold text-[#2B376B]">
                        THY
                    </span>
                </div>
                <div class="w-full h-full flex justify-center items-center">
                    <span class="text-[0.7rem] bg-[#2B376B] text-white rounded-md px-2 py-[2px]">
                        COMPUTER-SHOP
                    </span>
                </div>
            </div>

            <!-- Search (tablet/laptop only) -->
            <div class="hidden sm:flex w-full h-full justify-center items-center">
                <div class="relative w-[600px] h-[40px]">
                    <input type="text" placeholder="Search for..."
                        class="w-full h-full pl-4 pr-[100px] rounded-lg border border-gray-300 outline-none" />
                    <v-btn color="orange"
                        class="!w-[80px] !min-w-[80px] !absolute !top-0 !right-0 !h-full !rounded-md !z-10 !text-white"
                        style="min-width: 80px;">
                        Search
                    </v-btn>
                </div>
            </div>

        </div>

        <!-- Right Content -->
        <div class="right-content w-1/2 sm:w-[15%] h-full flex justify-end items-center gap-2">

            <!-- Menu button on mobile only -->
            <v-btn icon class="block sm:!hidden" @click="toggleMenu">
                <Icon icon="mdi:menu" width="30" height="30" />
            </v-btn>

            <!-- Buttons on tablet/laptop only -->
            <div class="hidden sm:flex gap-2  justify-center items-center">
                <v-btn class="!w-[40px] !h-[40px] !min-w-[40px] !px-0 !py-0 flex items-center justify-center"
                    rounded="lg" color="blue">
                    <Icon icon="iconamoon:shopping-card" width="30" height="30" />
                </v-btn>

                <v-btn class="!w-[40px] !h-[40px] !min-w-[40px] !px-0 !py-0 flex items-center justify-center"
                    rounded="lg" color="blue">
                    <Icon icon="mdi:heart-outline" width="30" height="30" />
                </v-btn>

                <v-btn class="!w-[40px] !h-[40px] !min-w-[40px] !px-0 !py-0 flex items-center justify-center"
                    rounded="lg" color="blue">
                    <Icon icon="mdi:user-outline" width="30" height="30" />
                </v-btn>
            </div>
        </div>

        <!-- Mobile dropdown menu (only visible on mobile when menuOpen is true) -->
        <div v-if="menuOpen"
            class="absolute top-[70px] left-0 w-full bg-[#eaeaeb] flex-col items-center gap-2 p-2 block sm:!hidden z-20">
            <v-btn width="90%" rounded="lg" color="blue" @click="closeMenu">
                <Icon icon="iconamoon:shopping-card" width="30" height="30" class="mr-2" />
                <span>Cart</span>
            </v-btn>
            <v-btn width="90%" rounded="lg" color="blue" @click="closeMenu">
                <Icon icon="mdi:heart-outline" width="30" height="30" class="mr-2" />
                <span>Wishlist</span>
            </v-btn>
            <v-btn width="90%" rounded="lg" color="blue" @click="closeMenu">
                <Icon icon="mdi:user-outline" width="30" height="30" class="mr-2" />
                <span>Account</span>
            </v-btn>
        </div>

    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
    menuOpen.value = false;
};

// Close menu when clicking outside
const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement;
    const menu = document.querySelector('.absolute.top-\\[70px\\]');
    const menuButton = document.querySelector('.sm\\:hidden');

    if (menu && menuButton && !menu.contains(target) && !menuButton.contains(target)) {
        menuOpen.value = false;
    }
};

// Close menu when screen size changes to desktop
const handleResize = () => {
    if (window.innerWidth >= 640) { // sm breakpoint
        menuOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped></style>