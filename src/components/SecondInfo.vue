<template>
  <section class="w-full h-full | flex flex-col justify-end | absolute top-0 left-0"
           :class="index === 1 ? 'pointer-events-auto' : 'pointer-events-none'">
    <div class="flex flex-col | xl:absolute xl:top-1/2 xl:right-16 xl:-translate-y-1/2 | md:pb-20 xl:pb-40">
      <h2 class="main-title | leading-none text-blue-800 text-outline-2 dissolve-transition duration-500"
          :class="dissolve">Interest</h2>
      <p class="sub-title | pb-40 sm-20 xl:pb-0 | leading-none text-blue-800 text-outline-1 xl:text-right dissolve-transition delay-100"
         :class="dissolve">No Code World</p>
    </div>
    <div class="xl:absolute xl:bottom-20 xl:right-16"
         :class="index === 1 ? 'pointer-events-auto' : 'pointer-events-none'">
      <div class="flex flex-col gap-20 md:gap-20 xl:gap-8 | dissolve-transition duration-500 delay-200"
           :class="dissolve">
        <p class="description | leading-relaxed korean text-white xl:text-right">
          웹 개발을 하면서, 코드가 필요하지 않은 세상을 만들고 싶습니다.<br class="hidden sm:block"/>
          제작자도 쉽게 웹을 만들 수 있고, 사용자도 좋은 경험을 누릴수 있게<br class="hidden sm:block"/>
          고민 하면서 진행중인 Mark up manager “MM”을 소개합니다.
        </p>
        <div class="flex flex-col md:flex-row gap-6">
          <a href="https://www.youtube.com/watch?v=tbR1realYeo"
             target="_blank"
             class="block w-full">
            <button class="flex items-center justify-center gap-4 | w-full | border text-white rounded-full shadow-lg hover:shadow-sm hover:bg-white hover:text-blue-800 transition-all">
              <span class="button | text-3xl">Show Video</span>
            </button>
          </a>
          <a href="https://musical-speculoos-19071a.netlify.app/"
             target="_blank"
             class="block w-full">
            <button class="flex items-center justify-center gap-4 | w-full | border text-white rounded-full shadow-lg hover:shadow-sm hover:bg-white hover:text-blue-800 transition-all">
              <span class="button | text-3xl">Go To MM</span>
            </button>
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
      dissolve.value = value === 1
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'

    }, {immediate: true})
</script>

<style scoped lang="scss">
section {
  padding: 20px;

  @media (min-width: 1280px) {
    padding: 0;
  }

  .dissolve-transition {
    transition-property: opacity, transform;
    transition-duration: 500ms;
    transition-timing-function: ease;
  }

  .main-title {
    font-size: min(30rem, 166px);

    @media (min-width: 1280px) {
      font-size: 26rem;
    }
  }

  .sub-title {
    font-size: clamp(24px, 12rem, 80px);

    @media (min-width: 1280px) {
      font-size: 6rem;
    }
  }

  .description {
    font-size: clamp(15px, 3rem, 18px);

    @media (min-width: 1280px) {
      font-size: clamp(15px, 1.8rem, 24px);
    }
  }

  .button {
    font-size: clamp(15px, 3rem, 18px);
    padding: 12px;


    @media (min-width: 1280px) {
      font-size: clamp(15px, 1.8rem, 18px);
      padding: 8px;
    }
  }
}

</style>