<template>
    <div class="w-full h-full flex justify-between items-center bg-[#2B376B] px-4">

        <!-- Left content -->
        <div class="left-content tele-phone w-full h-full flex justify-start items-center gap-4">
            <div class="text-white flex justify-center items-center">
                <span class="phone-icon">
                    <Icon icon="ic:baseline-phone" width="24" height="24" />
                </span>
                <span class="tele-phone">
                    123456789
                </span>
            </div>
            <div class="text-white flex justify-center items-center">
                <span class="phone-icon">
                    <Icon icon="ic:baseline-phone" width="24" height="24" />
                </span>
                <span class="tele-phone">
                    987654321
                </span>
            </div>
            <div class="text-white flex justify-center items-center gap-2">
                <span class="phone-icon">
                    <Icon icon="mdi:truck" width="24" height="24" />
                </span>
                <span class="tele-phone">
                    Delivery within 2hours / Delivery 25 Provinces
                </span>
            </div>
        </div>

        <!-- Right content -->
        <div class="left-content tele-phone w-full h-full flex justify-end items-center gap-2">
            <div class="text-white flex justify-center items-center cursor-pointer">
                <span class="phone-icon">
                    <Icon icon="fe:facebook" width="24" height="24" />
                </span>
            </div>
            <div class="text-white flex justify-center items-center cursor-pointer">
                <span class="phone-icon">
                    <Icon icon="streamline-logos:tiktok-logo-block" width="24" height="24" />
                </span>
            </div>
            <div class="text-white flex justify-center items-center cursor-pointer">
                <span class="phone-icon">
                    <Icon icon="ant-design:instagram-filled" width="24" height="24" />
                </span>
            </div>
            <div class="text-white flex justify-center items-center cursor-pointer">
                <span class="phone-icon">
                    <Icon icon="uil:telegram" width="24" height="24" />
                </span>
            </div>
            <div class="text-white flex justify-center items-center cursor-pointer">
                <span class="phone-icon">
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