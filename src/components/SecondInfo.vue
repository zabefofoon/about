<template>
  <div class="flex flex-col | absolute top-1/2 right-16 -translate-y-1/2 | pb-40">
    <h2 class="leading-none text-blue-800 text-outline-2 transition-all duration-500"
        :class="text1"
        style="font-size: 26rem;  ">Interest</h2>
    <p class="leading-none text-blue-800 text-outline-1 text-right transition-all duration-500 delay-100"
       :class="text2"
       style="font-size: 6rem;">No Code World</p>
  </div>
  <div class="absolute bottom-20 right-16">
    <div class="flex flex-col gap-8 | transition-all duration-500 delay-200"
         :class="text2">
      <p class="text-3xl leading-relaxed korean text-white text-right">
        웹 개발을 하면서, 코드가 필요하지 않은 세상을 만들고 싶습니다.<br/>
        제작자도 쉽게 웹을 만들 수 있고, 사용자도 좋은 경험을 누릴수 있게<br/>
        고민을 하면서 진행중인 작업물 “MM”을 소개합니다.
      </p>
      <div class="flex gap-6">
        <a href="https://musical-speculoos-19071a.netlify.app/"
           target="_blank"
           class="block w-full">
          <button class="flex items-center justify-center gap-4 | w-full | border text-white py-4 rounded-full shadow-lg hover:shadow-sm hover:bg-white hover:text-blue-800 transition-all">
            <span class="text-3xl">Show Video</span>
          </button>
        </a>
        <a href="https://musical-speculoos-19071a.netlify.app/"
           target="_blank"
           class="block w-full">
          <button class="flex items-center justify-center gap-4 | w-full | border text-white py-4 rounded-full shadow-lg hover:shadow-sm hover:bg-white hover:text-blue-800 transition-all">
            <span class="text-3xl">Go To MM</span>
          </button>
        </a>
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
      if (value === 1) {
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