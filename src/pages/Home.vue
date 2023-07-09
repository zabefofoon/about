<template>
  <main class="h-full | relative"
        ref="el">
    <section class="w-full h-full | flex | relative bg-purple-300">
      <div class="flex items-center justify-center | absolute right-0 | w-1/2 h-full">
        <img class="w-10/12" src="@/assets/image/liquid.png"
             alt="liquid"/>
      </div>
      <div class="flex flex-col | absolute top-1/2 left-16 -translate-y-1/2 | pb-40">
        <h2 class="text-bold leading-none"
            style="font-size: 26rem;">Front End</h2>
        <p class="leading-none"
           style="font-size: 6rem;">Vue, Typescript, TailwindCss</p>
      </div>
      <div class="absolute bottom-20 left-16">
        <p class="text-3xl leading-relaxed korean">
          안녕하세요. 만드는 것을 좋아하는 웹 프론트엔드 개발자 정상우 입니다.<br/>
          Vue3와 Typescript TailwindCss로 개발하는 것을 즐기고 있으며,<br/>
          기술에 대해 고집없이 유연한 사고를 가지려 항상 노력하고 있습니다.
        </p>
      </div>
    </section>
    <div class="absolute top-0 left-0 z-index-1 | w-full h-full | pointer-events-none"
         style="background: linear-gradient(140deg, rgba(0,0,255,.2) 0%, rgba(255,0,0,.1) 100%)"></div>
  </main>
</template>
<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue"

defineProps<{
  updateKey: number
}>()

const el = ref<HTMLDivElement>()
const index = ref(0)
const MAX_INDEX = 5
const increaseIndex = () => {
  index.value++
  if (index.value > MAX_INDEX) index.value = 0
}

const decreaseIndex = () => {
  index.value--
  if (index.value < 0) index.value = MAX_INDEX
}

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
</script>
