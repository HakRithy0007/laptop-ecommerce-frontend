<template>
    <div class=" flex items-center h-8 p-2 overflow-hidden mt-4 rounded-md shadow-xl">
        <div class="marquee-container">
            <div class="marquee-text text-[#000000c5] text-[1rem] font-noto tracking-wide font-hanuman">
                Founded in 1996, PTC Computer has rapidly grown to become a leading provider of IT Product and Solution
                in Cambodia. Our journey began with a simple mission: to deliver high-quality, reliable technology
                solutions to individuals and businesses across the country. Over the years, we've built a reputation for
                excellence, innovation, and customer-centric service.
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.marquee-container {
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    width: 100%;
}

.marquee-text {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 60s linear infinite;
}

.mega-img {
    color: rgb(2, 2, 2);
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}
</style>
