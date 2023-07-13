<template>
  <div class="flex flex-col | absolute top-1/2 left-16 -translate-y-1/2 | pb-40">
    <h2 class="leading-none text-purple-900 text-outline-2 transition-all duration-500"
        :class="text1"
        style="font-size: 26rem;  ">Front End</h2>
    <p class="leading-none text-purple-900 text-outline-1 transition-all duration-500 delay-100"
       :class="text2"
       style="font-size: 6rem;">Vue, Typescript, TailwindCss</p>
  </div>
  <div class="absolute bottom-20 left-16">
    <p class="text-3xl leading-relaxed korean text-white transition-all duration-500 delay-200"
       :class="text2">
      안녕하세요. 만드는 것을 좋아하는 웹 프론트엔드 개발자 정상우 입니다.<br/>
      Vue3와 Typescript TailwindCss로 개발하는 것을 즐기고 있으며,<br/>
      기술에 대해 고집없는 유연한 사고를 가지려 항상 노력하고 있습니다.
    </p>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue"

const props = defineProps<{
  index: number
}>()

const text1 = ref()
const text2 = ref()
const text3 = ref()


watch(() => props.index,
    (value) => {
      if (value === 0) {
        text1.value = 'opacity-100 translate-y-0'
        text2.value = 'opacity-100 translate-y-0'
        text3.value = 'opacity-100 translate-y-0'
      } else {
        text1.value = 'opacity-0 translate-y-10'
        text2.value = 'opacity-0 translate-y-10'
        text3.value = 'opacity-0 translate-y-10'
      }
    }, {immediate: true})
</script>

<style scoped>

</style>