<template>
  <main class="h-full | relative"
        ref="el">
    <p class="absolute top-0 left-1/2 z-10 text-white text-4xl">{{ index }}</p>
    <section class="w-full h-full | flex | relative | transition-all"
             :class="background">
      <div class="flex items-center justify-center | absolute | w-full h-full | transition-all duration-500"
           :class="canvasXPos">
        <HomeIntro :index="index"/>
      </div>
      <FirstInfo :index="index"/>
      <SecondInfo :index="index"/>
      <ThirdInfo :index="index"/>
    </section>
    <div class="absolute top-0 left-0 z-index-1 | w-full h-full | pointer-events-none"
         style="background: linear-gradient(140deg, rgba(0,0,255,.2) 0%, rgba(255,0,0,.1) 100%)"></div>
    <Progress :index="index"
              @update:index="setIndex"/>
    <button class="flex flex-col items-center justify-center | absolute bottom-28 left-1/2 -translate-x-1/2 | text-white">
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
import {onBeforeUnmount, onMounted, ref, watch} from "vue"
import HomeIntro from "@/components/HomeIntro.vue"
import FirstInfo from "@/components/FirstInfo.vue"
import SecondInfo from "@/components/SecondInfo.vue"
import ThirdInfo from "@/components/ThirdInfo.vue"
import Progress from "@/components/Progress.vue"

import debounce from "lodash.debounce"

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

onMounted(() => {
  window.addEventListener('wheel', wheelHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('wheel', wheelHandler)
})

const canvasXPos = ref('left-1/4')
const background = ref('bg-purple-900')
watch(index,
    (value) => {
      if (value === 0) {
        canvasXPos.value = 'left-1/4'
        background.value = 'bg-purple-900'
      } else if (value === 1) {
        canvasXPos.value = '-left-1/4'
        background.value = 'bg-blue-800'
      } else if (value === 2) {
        canvasXPos.value = 'left-1/2 -translate-x-1/2'
        background.value = 'bg-orange-500'
      } else if (value === 3) {
        canvasXPos.value = 'left-1/2 -translate-x-1/2'
        background.value = 'bg-red-500'
      } else {
        canvasXPos.value = 'left-1/2 -translate-x-1/2'
        background.value = 'bg-black'
      }
    }, {immediate: true})
</script>
