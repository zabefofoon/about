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
    <FifthInfo :index="index"/>
    <div class="absolute top-0 left-0 z-index-1 | w-full h-full | pointer-events-none"
         style="background: linear-gradient(140deg, rgba(0,0,255,.2) 0%, rgba(255,0,0,.1) 100%)"></div>
    <Progress :index="index"
              @update:index="setIndex"/>
    <Navigator @increase="increaseIndex()"
               @decrease="decreaseIndex()"/>
    <img class="deco | absolute | w-1/4 lg:w-60 | opacity-10 pointer-events-none"
         src="@/assets/image/deco.png"/>
  </main>
</template>
<script setup lang="ts">
import {ref, watch} from "vue"
import HomeIntro from "@/components/HomeIntro.vue"
import FirstInfo from "@/components/FirstInfo.vue"
import SecondInfo from "@/components/SecondInfo.vue"
import ThirdInfo from "@/components/ThirdInfo.vue"
import FourthInfo from "@/components/FourthInfo.vue"
import FifthInfo from "@/components/FifthInfo.vue"
import Progress from "@/components/Progress.vue"

import debounce from "lodash.debounce"
import Navigator from "@/components/Navigator.vue"
import {useRoute, useRouter} from "vue-router"

const router = useRouter()
const route = useRoute()

const el = ref<HTMLDivElement>()

const MAX_INDEX = 5
const getDefaultIndex = () => {
  const result = route.query.section ? Number(route.query.section) : 0
  return isNaN(result) ? 0 : result
}
const index = ref<number>(getDefaultIndex())
const setIndex = (value: number) => index.value = value

const increaseIndex = debounce(() => {
  index.value++
  if (index.value > MAX_INDEX) index.value = 0
}, 250, {leading: true, trailing: false})

const decreaseIndex = debounce(() => {
  index.value--
  if (index.value < 0) index.value = MAX_INDEX
}, 250, {leading: true, trailing: false})

const canvasXPos = ref('xl:left-1/4')
const setCanvasXPos = (value: string) => canvasXPos.value = value
const canvasXPosMap: {[key in number]: string} = {
  0: 'xl:left-1/4',
  1: 'xl:-left-1/4',
  2: 'xl:left-1/2 xl:-translate-x-1/2',
  3: 'xl:left-1/2 xl:-translate-x-1/2',
  4: 'xl:left-1/2 xl:-translate-x-1/2',
  5: 'xl:left-1/2 xl:-translate-x-1/2',
}
const background = ref('bg-purple-900')
const setBackground = (value: string) => background.value = value
const backgroundMap: {[key in number]: string} = {
  0: 'bg-purple-900',
  1: 'bg-blue-800',
  2: 'bg-orange-500',
  3: 'bg-green-500',
  4: 'bg-red-500',
  5: 'bg-black',
}

const replacePageQueryByIndex = (index: number) => {
  index === 0
      ? router.replace({query: undefined})
      : router.replace({query: {section: index}})
}

watch(index,
    (index) => {
      setCanvasXPos(canvasXPosMap[index])
      setBackground(backgroundMap[index])
      replacePageQueryByIndex(index)
    }, {immediate: true})


const keyMap: {[key in string]: () => void} = {
  ArrowDown: increaseIndex,
  ArrowUp: decreaseIndex
}
window.addEventListener('keydown', ({code}: KeyboardEvent) => keyMap[code]())


const wheelHandler = (event: WheelEvent) => {
  event.deltaY > 0
      ? increaseIndex()
      : decreaseIndex()
}


let clientY = 0
const pointerenterHandler = (event: TouchEvent) => clientY = event.changedTouches[0].clientY
const pointerleaveHandler = (event: TouchEvent) => {
  if (Math.abs(clientY - event.changedTouches[0].clientY) > 80)
    clientY > event.changedTouches[0].clientY
        ? increaseIndex()
        : decreaseIndex()
}

watch(() => route.query.section,
    () => {
      const result = route.query.section ? Number(route.query.section) : 0
      const index = isNaN(result) ? 0 : result
      setIndex(index)
    })
</script>

<style scoped lang="scss">
.deco {
  left: 0;
  transform: rotate(-90deg);
  @media (min-width: 1280px) {
    left: unset;
    right: 0;
    transform: rotate(0);
  }
}
</style>
