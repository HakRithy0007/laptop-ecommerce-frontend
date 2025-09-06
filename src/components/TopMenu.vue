<template>
    <div class="w-full h-[60px] flex justify-between items-center relative">

        <div class="w-1/2 h-full flex justify-center items-center gap-4">
            <!-- Logo -->
            <div class="w-[10%] h-full flex justify-center items-center">
                <img src="/src/assets/images/logo/logo.png" alt="logo" class="w-full h-full">
            </div>

            <!-- Search bar with icon -->
            <div class="w-[90%] h-full flex justify-start items-center">
                <div class="relative w-[400px]">
                    <input type="text" class="w-full h-[40px] font-poppins rounded-xl border border-gray-500 outline-none px-6"
                        placeholder="Search for product !!!">
                    <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                        <Icon icon="material-symbols:search-rounded" width="24" height="24" />
                    </span>
                </div>
            </div>
        </div>

        <div class="w-1/2 h-full flex justify-end items-center gap-4">

            <v-btn variant="tonal">
                <Icon icon="mingcute:notification-line" width="24" height="24" />
            </v-btn>

            <v-btn variant="tonal">
                <span class="cart-icon mb-1">
                    <Icon icon="famicons:cart-outline" width="24" height="24" />
                </span>
                <span class="bought-text text-[1rem] px-2">
                    2
                </span>
            </v-btn>

            <v-btn variant="tonal">
                <span class="user-avatar">
                    <v-avatar color="surface-variant" class="!w-[27px] !h-[27px]">
                        <img src="/src/assets/images/users/user1.webp" alt="user">
                    </v-avatar>
                </span>
                <span class="name-text text-[1rem] px-2">
                    John Wick
                </span>
            </v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>
