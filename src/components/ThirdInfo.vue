<template>
  <div class="flex flex-col | absolute top-1/2 left-16 -translate-y-1/2 | pb-40">
    <h2 class="leading-none text-black text-outline-2 transition-all duration-500"
        :class="text1"
        style="font-size: 26rem;  ">Career</h2>
  </div>
  <Transition>
    <div v-if="index === 2"
         class="absolute right-0 | w-1/2 h-full | bg-white">
      <div class="w-full h-full | absolute top-0 left-0" style="background: linear-gradient(0deg, rgba(0,0,0,.2) 0%, rgba(255,255,255, 1) 33%,rgba(255,0,0,0) 100%);"></div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {ref, watch} from "vue"

const props = defineProps<{
  index: number
}>()

const text1 = ref()

watch(() => props.index,
    (value) => {
      if (value === 2) {
        text1.value = 'opacity-100 translate-y-0'
      } else {
        text1.value = 'opacity-0 translate-y-10'
      }
    }, {immediate: true})
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 300ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>