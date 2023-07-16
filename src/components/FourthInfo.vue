<template>
  <div class="flex flex-col | absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 | pb-40"
       :class="index === 3 ? 'pointer-events-auto' : 'pointer-events-none'">
    <h2 class="leading-none text-red-500 text-outline-2 transition-all duration-500"
        :class="text1"
        style="font-size: 26rem;  ">Contact</h2>
    <p class="leading-none text-red-500 text-outline-1 text-center transition-all duration-500 delay-100"
       :class="text2"
       style="font-size: 6rem;">Let`s make it together</p>
    <div class="w-fit | mt-20 mx-auto | text-3xl leading-relaxed korean text-white text-center transition-all duration-500 delay-200"
         :class="text3">
      <div class="flex gap-4">
        <p>Kakao: </p>
        <p>zabefofoon</p>
      </div>
      <div class="flex gap-4">
        <p>Gmail: </p>
        <p>zabefofoon@gmail.com</p>
      </div>
      <div class="flex gap-4">
        <p>Insta: </p>
        <p>sangwwoo</p>
      </div>
    </div>
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
      if (value === 3) {
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