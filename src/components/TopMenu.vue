<template>
    <div class="w-full h-[60px] flex justify-between items-center relative px-4 bg-[#faf9f9]">

        <div class="w-1/2 h-full flex justify-center items-center gap-4">

            <!-- LOGO -->
            <div class="w-[10%] h-full flex justify-center items-center">
                <img src="/src/assets/images/logo/logo.png" alt="logo" class="w-full h-full">
            </div>

            <!-- SEARCH -->
            <div class="w-[90%] h-full flex justify-start items-center">
                <div class="relative w-[400px]">
                    <input type="text"
                        class="w-full h-[40px] font-poppins rounded-xl border border-gray-500 outline-none px-6"
                        placeholder="Search for product !!!">
                    <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                        <Icon icon="material-symbols:search-rounded" width="24" height="24" />
                    </span>
                </div>
            </div>
        </div>

        <div class="w-1/2 h-full flex justify-end items-center gap-4">

            <!-- NOTIFICATION -->
            <v-dialog max-width="500" height="400" transition="dialog-transition" :scrim="true">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn v-bind="activatorProps" variant="tonal">
                        <Icon icon="mingcute:notification-line" width="24" height="24" />
                    </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card>
                        <div class="title flex justify-center items-center h-[60px] gap-2">
                            <span class="nofitication-icon">
                                <Icon icon="mingcute:notification-line" width="24" height="24" />
                            </span>
                            <span class="text-[1.5rem] font-poppins">NOTIFICATION</span>
                        </div>

                        <v-divider :thickness="3"></v-divider>

                        <v-card-text class="flex justify-center items-center font-poppins">
                            No Notifications !!!
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn @click="isActive.value = false" class="!bg-blue-500 !text-white font-poppins">
                                Mark all read
                            </v-btn>

                            <v-btn @click="isActive.value = false" class="!bg-red-500 !text-white font-poppins">
                                Close
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>

            <!-- CART -->
            <v-dialog max-width="500" height="400" transition="dialog-transition" :scrim="true">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn v-bind="activatorProps" variant="tonal">
                        <Icon icon="famicons:cart-outline" width="24" height="24" />
                        <span class="bought-text text-[1rem] px-2 font-bold text-red-400">
                            0
                        </span>
                    </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card>
                        <div class="title flex justify-center items-center h-[60px] gap-2">
                            <span class="nofitication-icon">
                                <Icon icon="famicons:cart-outline" width="24" height="24" />
                            </span>

                            <span class="text-[1.5rem] font-poppins">SHOPPING-CART</span>
                        </div>

                        <v-divider :thickness="3"></v-divider>

                        <v-card-text class="flex justify-center items-center font-poppins">
                            No ITEM IN CART !!!
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn @click="isActive.value = false" class="!bg-red-500 !text-white font-poppins">
                                Close
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>

            <!-- USER -->
            <v-dialog max-width="500" height="400" transition="dialog-transition" :scrim="true">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn v-bind="activatorProps" variant="tonal">
                        <v-avatar color="surface-variant" class="!w-[27px] !h-[27px]">
                            <img src="/src/assets/images/users/user1.webp" alt="user">
                        </v-avatar>
                        <span class="name-text text-[1rem] px-2">
                            John Wick
                        </span>
                    </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card>
                        <div class="title flex justify-center items-center h-[60px] gap-2">
                            <span class="nofitication-icon">
                                <Icon icon="lucide:user" width="24" height="24" />
                            </span>

                            <span class="text-[1.5rem] font-poppins">YOUR INFO</span>
                        </div>

                        <v-divider :thickness="3"></v-divider>

                        <v-card-text class="flex justify-center items-center font-poppins">
                            No ITEM IN CART !!!
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn @click="isActive.value = false" class="!bg-red-500 !text-white font-poppins">
                                Close
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>

        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>
