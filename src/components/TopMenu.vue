<template>
    <div class="w-full h-full flex justify-between items-center bg-[#cccccc] px-4">

        <div class="left-content w-[85%] h-full flex justify-center items-center ">

            <!-- Logo -->
            <div class="logo w-[150px] h-full flex flex-col justify-center items-center round-lg">
                <div class="w-full h-full flex justify-center items-center">
                    <span class="text-[2rem] font-extrabold text-#2B376B]">
                        THY
                    </span>
                </div>
                <div class="w-full h-full flex justify-center items-center">
                    <span class="text-[0.7rem] bg-[#2B376B] text-white rounded-md px-2 py-[2px]">
                        COMPUTER-SHOP
                    </span>
                </div>
            </div>

            <!-- Search -->
            <div class="search w-full h-full flex justify-center items-center">
                <div class="relative w-[600px] h-[40px]">
                    <input type="text" placeholder="Search for..."
                        class="w-full h-full pl-4 pr-[100px] rounded-lg border border-gray-300 outline-none" />
                    <v-btn color="orange" class="!absolute !top-0 !right-0 !h-full !rounded-lg !z-10 !text-white"
                        style="min-width: 80px;">
                        Search
                    </v-btn>
                </div>
            </div>


        </div>

        <div class="right-content w-[15%] h-full grid grid-cols-3 items-center ">
            <div class="w-full h-full flex flex-col justify-center items-center box-one">
                <v-btn width="50" height="50" rounded="lg" color="blue">
                    <Icon icon="iconamoon:shopping-card" width="30" height="30" />
                </v-btn>
            </div>
            <div class="w-full h-full flex justify-center items-center box-two">
                <v-btn width="50" height="50" rounded="lg" color="blue">
                    <Icon icon="mdi:heart-outline" width="30" height="30" />
                </v-btn>
            </div>
            <div class="w-full h-full flex justify-center items-center box-two">
                <v-btn width="50" height="50" rounded="lg" color="blue">
                    <Icon icon="mdi:user-outline" width="30" height="30" />
                </v-btn>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>