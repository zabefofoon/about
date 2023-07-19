<template>
  <main class="h-full | relative | overscroll-none"
        ref="el"
        :class="background"
        @wheel="wheelHandler"
        @touchstart="pointerenterHandler"
        @touchend="pointerleaveHandler">
    <HomeIntro :index="index"
               :class="canvasXPos"/>
    <FirstInfo :index="index"/>
    <SecondInfo :index="index"/>
    <ThirdInfo :index="index"/>
    <FourthInfo :index="index"/>
    <div class="absolute top-0 left-0 z-index-1 | w-full h-full | pointer-events-none"
         style="background: linear-gradient(140deg, rgba(0,0,255,.2) 0%, rgba(255,0,0,.1) 100%)"></div>
    <Progress :index="index"
              @update:index="setIndex"/>
    <button class="hidden xl:flex flex-col items-center justify-center | absolute xl:bottom-16 xl:left-1/2 xl:-translate-x-1/2 | text-white">
      <span class="icon icon-up | text-3xl"
            @click="decreaseIndex"></span>
      <span class="icon icon-wheel | text-4xl"
            @click="increaseIndex"></span>
      <span class="icon icon-down | text-3xl"
            @click="increaseIndex"></span>
    </button>
  </main>
</template>
<script setup lang="ts">
import {ref, watch} from "vue"
import HomeIntro from "@/components/HomeIntro.vue"
import FirstInfo from "@/components/FirstInfo.vue"
import SecondInfo from "@/components/SecondInfo.vue"
import ThirdInfo from "@/components/ThirdInfo.vue"
import Progress from "@/components/Progress.vue"

import debounce from "lodash.debounce"
import FourthInfo from "@/components/FourthInfo.vue"

defineProps<{
  updateKey: number
}>()

const el = ref<HTMLDivElement>()
const index = ref(0)
const setIndex = (value: number) => index.value = value
const MAX_INDEX = 4
const increaseIndex = debounce(() => {
  index.value++
  if (index.value > MAX_INDEX) index.value = 0
}, 250, {leading: true, trailing: false})

const decreaseIndex = debounce(() => {
  index.value--
  if (index.value < 0) index.value = MAX_INDEX
}, 250, {leading: true, trailing: false})


const wheelHandler = (event: WheelEvent) => {
  event.deltaY > 0
      ? increaseIndex()
      : decreaseIndex()
}


let clientY = 0

const pointerenterHandler = (event: TouchEvent) => {
  clientY = event.changedTouches[0].clientY
}
const pointerleaveHandler = (event: TouchEvent) => {
  if (Math.abs(clientY - event.changedTouches[0].clientY) > 72)
    clientY > event.changedTouches[0].clientY
        ? increaseIndex()
        : decreaseIndex()
}

const canvasXPos = ref('xl:left-1/4')
const background = ref('bg-purple-900')
watch(index,
    (value) => {
      if (value === 0) {
        canvasXPos.value = 'xl:left-1/4'
        background.value = 'bg-purple-900'
      } else if (value === 1) {
        canvasXPos.value = 'xl:-left-1/4'
        background.value = 'bg-blue-800'
      } else if (value === 2) {
        canvasXPos.value = 'xl:left-1/2 xl:-translate-x-1/2'
        background.value = 'bg-orange-500'
      } else if (value === 3) {
        canvasXPos.value = 'xl:left-1/2 xl:-translate-x-1/2'
        background.value = 'bg-red-500'
      } else {
        canvasXPos.value = 'xl:left-1/2 xl:-translate-x-1/2'
        background.value = 'bg-black'
      }
    }, {immediate: true})
</script>
