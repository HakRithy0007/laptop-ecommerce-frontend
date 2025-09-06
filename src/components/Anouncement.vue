<template>
    <div class=" flex items-center h-6 p-2 overflow-hidden bg-[#0000000a]">
        <div class="marquee-container">
            <div class="marquee-text text-[#000000c5] text-[14px] font-noto tracking-wide font-hanuman">
                ផ្ទះសំណាក់ ប៉ូឡូ វៃ៉ខ្សច់ស សូមស្វាគមន៏ តើអ្នកធ្លាបឃើញពិធីរៀបការណ៍ បែបប្រពៃណីបរទេសដែលឫទេ ?
                បើសិនជាអ្នកចង់ដឹងចង់ឃើញ ទាំងនេះមាននៅ OC beach club at Ocheteal beach ខេត្តព្រះសីហនុ រីករាយថ្ងៃថ្មី
                អារម្មណ៏ថ្មី ជីវិតថ្មី ថ្ងៃសំរាក់កាយ សប្បាយចិត្
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
    animation: marquee 30s linear infinite;
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
