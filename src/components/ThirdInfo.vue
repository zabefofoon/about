<template>
  <section class="w-full h-full | flex flex-col justify-end | absolute top-0 left-0 | transition-all"
           :class="index === 2 ? 'pointer-events-auto' : 'pointer-events-none'">
    <h3 class="absolute bottom-16 | leading-none text-orange-500 text-outline-2 transition-all duration-500"
        :class="text2"
        style="font-size: 26rem;">Career</h3>
    <Transition>
      <div v-if="index === 2"
           class="absolute left-0 | w-full h-full">
        <div class="w-full | absolute top-1/2 left-0 -translate-y-1/2 | flex items-center justify-center">
          <ThirdInfoCarousel/>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import {ref, watch} from "vue"
import ThirdInfoCarousel from "@/components/ThirdInfoCarousel.vue"

const props = defineProps<{
  index: number
}>()

const text1 = ref()
const text2 = ref()

watch(() => props.index,
    (value) => {
      if (value === 2) {
        text1.value = 'opacity-100 translate-y-0'
        text2.value = 'opacity-50 translate-y-0'
      } else {
        text1.value = 'opacity-0 translate-y-10'
        text2.value = 'opacity-0 translate-y-10'
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
  transform: translateX(100%);
}
</style>