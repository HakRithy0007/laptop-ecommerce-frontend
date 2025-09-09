<template>
    <div class="w-full h-[50px] flex justify-between items-center bg-gray-200 px-4 shadow-lg">

        <!-- Left content -->
        <div class="left-content tele-phone w-full h-full flex justify-start items-center gap-4">
            <div class="text-white flex justify-center items-center">
                <span class="phone-icon text-gray-600">
                    <Icon icon="ic:baseline-phone" width="24" height="24" />
                </span>
                <span class="tele-phone text-gray-600">
                    0966400081
                </span>
            </div>

            <div class="text-white flex justify-center items-center gap-2">
                <span class="phone-icon text-gray-600">
                    <Icon icon="mdi:truck" width="24" height="24" />
                </span>
                <span class="tele-phone text-gray-600">
                    Delivery 24 Provinces
                </span>
            </div>
        </div>

        <!-- Right content -->
        <div class="left-content hidden sm:flex tele-phone w-full h-full justify-end items-center gap-2">
            <div class="text-white flex justify-center items-center cursor-pointer">
                <v-btn variant="tonal">
                    <Icon icon="fe:facebook" width="24" height="24" class="text-gray-600" />
                </v-btn>
            </div>
            <div class="text-white flex justify-center items-center cursor-pointer">
                <span class="phone-icon text-gray-600">
                    <Icon icon="streamline-logos:tiktok-logo-block" width="24" height="24" />
                </span>
            </div>
            <div class="text-white flex justify-center items-center cursor-pointer">
                <span class="phone-icon text-gray-600">
                    <Icon icon="ant-design:instagram-filled" width="24" height="24" />
                </span>
            </div>
            <div class="text-white flex justify-center items-center cursor-pointer">
                <span class="phone-icon text-gray-600">
                    <Icon icon="uil:telegram" width="24" height="24" />
                </span>
            </div>
            <div class="text-white flex justify-center items-center cursor-pointer">
                <span class="phone-icon text-gray-600">
                    <Icon icon="iconoir:youtube-solid" width="24" height="24" />
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>