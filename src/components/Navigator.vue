<template>
  <button class="navigator | flex flex-col items-center justify-center | absolute | text-white opacity-80">
      <span class="icon icon-up"
            @click="emit('decrease')"></span>
    <span class="icon icon-wheel"
          @click="emit('increase')"></span>
    <span class="icon icon-down"
          @click="emit('increase')"></span>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'decrease'): void
  (e: 'increase'): void
}>()
</script>

<style scoped lang="scss">
.navigator {
  right: 12px;
  top: 12px;

  font-size: 12px;
  .icon-wheel {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    left: 50%;
    top: unset;
    right: unset;
    bottom: 24px;

    transform: translate(-50%, 0);

    font-size: 18px;

    .icon-wheel {
      font-size: 24px;
    }
  }
}
</style>