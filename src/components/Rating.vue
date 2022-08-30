<template>
    <div>
        <ul>
            <li :class="{ active: star <= activeStars}" v-for="star in maxStars" class="star"></li>
        </ul>
        <div class="summary">{{ activeStars}} of {{ maxStars }}</div>
    </div>
</template>

<script setup>

defineProps({
    maxStars: Number,
    activeStars: Number
})

</script>

<style lang="scss" scoped>

</style>