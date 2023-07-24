<template>
  <section class="dissolve-transition | w-full h-full | flex flex-col justify-end | absolute top-0 left-0"
           :class="index === 3 ? 'pointer-events-auto' : 'pointer-events-none'">
    <div class="flex flex-col | w-full | absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 | pb-40">
      <h2 class="dissolve-transition title | leading-none text-center text-red-500 text-outline-2 duration-500"
          :class="dissolve">Contact</h2>
      <p class="dissolve-transition sub-title | leading-none text-red-500 text-outline-1 text-center duration-500 delay-100"
         :class="dissolve">Let`s make it together</p>
      <div class="dissolve-transition description | w-fit | mt-20 mx-auto | leading-relaxed korean text-white text-center duration-500 delay-200"
           :class="dissolve">
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
        <div class="flex justify-center gap-4">
          <a href="https://github.com/zabefofoon/about"
             target="_blank"
             class="w-full | mt-12 border rounded-full cursor-pointer hover:bg-white hover:text-red-500">
            About more
          </a>
        </div>
      </div>
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
      dissolve.value = value === 3
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

.title {
  font-size: max(80px, 26rem);
  @media (min-width: 1280px) {
    font-size: max(36px, 26rem);
  }
}

.sub-title {
  font-size: max(28px, 6rem);
  @media (min-width: 1280px) {
    font-size: max(28px, 6rem);
  }
}

.description {
  font-size: clamp(15px, 2rem, 24px);
  @media (min-width: 1280px) {
    font-size: max(18px, 1.8rem);
  }
}
</style>