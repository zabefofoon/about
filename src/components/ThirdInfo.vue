<template>
  <section class="w-full h-full | flex flex-col justify-end | absolute top-0 left-0 | transition-all"
           :class="index === 2 ? 'pointer-events-auto' : 'pointer-events-none'">
    <h3 class="absolute bottom-16 | leading-none text-orange-500 text-outline-2 transition-all duration-500"
        :class="text2"
        style="font-size: 26rem;">Career</h3>
    <div class="flex items-center justify-center | w-1/2 h-full">
      <ul class="flex flex-col gap-8 | leading-none text-white text-5xl transition-all duration-500"
          :class="text1">
        <li class="korean"><span class="text-2xl">14.03 ~ 20.02</span><br/>한경대 시각디자인과 졸업</li>
        <li class="korean"><span class="text-2xl">19.12~</span><br/>유젠 입사</li>
      </ul>
    </div>
    <Transition>
      <div v-if="index === 2"
           class="absolute right-0 | w-1/2 h-full | border-l border-l-orange-300">
        <div class="w-full h-full | absolute top-0 left-0 | flex items-center justify-center">
          <div class="w-full h-2/3">
            <ThirdInfoCarousel/>
          </div>
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
        text2.value = 'opacity-50 -translate-x-1/4 -translate-y-3/4 -rotate-90'
      } else {
        text1.value = 'opacity-0 translate-y-10'
        text2.value = 'opacity-0 -translate-x-1/2 -translate-y-3/4 -rotate-90'
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