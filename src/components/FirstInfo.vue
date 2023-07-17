<template>
  <section class="w-full h-full | flex flex-col justify-end | absolute top-0 left-0 | p-32 pb-80 md:pb-20 xl:p-0"
           :class="index === 0 ? 'pointer-events-auto' : 'pointer-events-none'">
    <div class="flex flex-col | xl:absolute xl:top-1/2 xl:left-16 xl:-translate-y-1/2 | md:pb-20 xl:pb-40">
      <h2 class="main-title | leading-none text-purple-900 text-outline-2 dissolve-transition"
          :class="dissolve">Front End</h2>
      <p class="sub-title | pb-40 sm-20 xl:pb-0 | leading-none text-purple-900 text-outline-1 dissolve-transition delay-100"
         :class="dissolve">Vue, Typescript, TailwindCss</p>
    </div>
    <div class="xl:absolute xl:bottom-20 xl:left-16"
         :class="index === 0 ? 'pointer-events-auto' : 'pointer-events-none'">
      <p class="description | leading-relaxed korean text-white dissolve-transition delay-200"
         :class="dissolve">
        안녕하세요. 만드는 것을 좋아하는 웹 프론트엔드 개발자 정상우 입니다.<br class="hidden sm:block"/>
        Vue3와 Typescript TailwindCss로 개발하는 것을 즐기고 있으며,<br class="hidden sm:block"/>
        기술에 대해 고집없는 유연한 사고를 가지려 항상 노력하고 있습니다.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, watch} from "vue"

const props = defineProps<{
  index: number
}>()

const dissolve = ref()

watch(() => props.index,
    (value) => {
      dissolve.value = value === 0
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
    }, {immediate: true})
</script>

<style scoped lang="scss">
.dissolve-transition {
  transition-property: opacity, transform;
  transition-duration: 500ms;
  transition-timing-function: ease;
}

.main-title {
  font-size: 30rem;

  @media (min-width: 1280px) {
    font-size: 26rem;
  }
}

.sub-title {
  font-size: 12rem;

  @media (min-width: 1280px) {
    font-size: 6rem;
  }
}

.description {
  font-size: max(15px, 3rem);

  @media (min-width: 1280px) {
    font-size: 1.8rem;
  }
}
</style>