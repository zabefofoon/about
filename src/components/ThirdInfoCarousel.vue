<template>
  <div class="embla | h-full | relative">
    <div class="embla__viewport | h-full | p-20 | overflow-hidden"
         ref="emblaNode">
      <div class="embla__container | h-full | flex">
        <div v-for="(content, index) in contents"
             :key="index + content.title"
             class="embla__slide | flex flex-col items-center justify-center gap-16 | h-full min-w-0 | relative | ml-12 | shadow-md bg-white">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 | w-full h-full | opacity-10"
               style="max-width: 50%;max-height: 50%;">
            <img v-if="content.image"
                 class="w-full h-full object-contain"
                 :src="content.image"
                 :alt="content.title"/>
          </div>
          <div class="flex flex-col items-start"
               :style="{width: content.description ? '80%' : 'auto'}">
            <h2 class="korean | text-2xl">{{ content.date }}</h2>
            <h2 class="korean | text-5xl" v-html="content.title"></h2>
          </div>
          <p v-if="content.description"
             class="korean text-3xl leading-normal"
             style="width: 80%"
             v-html="content.description"></p>
          <p v-if="content.caption"
             class="korean text-2xl leading-normal"
             style="width: 80%"
             v-html="content.caption"></p>
        </div>
      </div>
    </div>
    <button v-if="canScrollPrev"
            class="embla__prev | absolute top-1/2 left-4 -translate-y-1/2 | flex items-center"
            @click="prev">
      <i class="icon icon-left | text-6xl"></i>
    </button>
    <button v-if="canScrollNext"
            class="embla__next | absolute top-1/2 right-4 -translate-y-1/2 | flex items-center"
            @click="next">
      <i class="icon icon-right | text-6xl"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import {onMounted, ref} from "vue"
import {SlideContent} from "@/models/SlideContent"
import hknu from "@/assets/image/hknu.svg"
import uzen from "@/assets/image/uzen.png"

const [emblaNode, emblaApi] = emblaCarouselVue({})

const prev = () => emblaApi.value?.scrollPrev()
const next = () => emblaApi.value?.scrollNext()

//const canScrollNext = computed(() => emblaApi.value?.canScrollNext())

const canScrollPrev = ref(false)
const canScrollNext = ref(true)

onMounted(() => {
  emblaApi.value?.on('select', () => {
    canScrollPrev.value = emblaApi.value?.canScrollPrev() || false
    canScrollNext.value = emblaApi.value?.canScrollNext() || false
  })
})

const contents = ref<SlideContent[]>([
  SlideContent.of({
    image: hknu,
    date: '14.03 ~ 20.02',
    title: '한경대학교 시각디자인학과',
    description: '',
    caption: ''
  }),
  SlideContent.of({
    image: uzen,
    date: '19.12 ~',
    title: 'eCommerce 전문 기업 Uzen 입사',
    description: `
    ‘G1 Commerce Cloud’ 라는 솔루션 사업을 담당하는 PS사업부에서 프론트엔드 개발팀에 속하고 있습니다.<br/><br/>
    플랫폼 Api 와의 연계 및 프론트 화면 구축, 필요한 Ui 라이브러리 제작, 간단한 CMS인 ‘페이지빌더’ 제작 등에 기여하고 있습니다.
    `,
    caption: `
    <a class="korean | mr-3 | underline decoration-1"
    href="https://www.jobkorea.co.kr/Starter/interview/View/22359?Page=3&IsFavorOn=0"
    target="_blank">직무 인터뷰</a>
    `
  }),
  SlideContent.of({
    image: uzen,
    date: '21.04',
    title: '<a class="korean | underline decoration-1" href="https://www.zerogram.co.kr" target="_blank">Zerogram</a> 구축',
    description: 'Vue2/Spring Boot로 만들었으며, 홈/검색/상품목록/상품상세/매장안내/기획전/콘텐츠 등 여러 부분을 맡았습니다.',
    caption: `
<a class="korean | mr-3 | underline decoration-1"
href="https://www.zerogram.co.kr"
target="_blank">제로그램</a>
    `
  }),
  SlideContent.of({
    image: uzen,
    date: '21.11',
    title: '페이지빌더 제작',
    description: 'Vue3/Typescript/Scss로 만들었으며, 고객사가 자유롭게 페이지를 구성하고 싶을 때를 대비해서 제작한 CMS 입니다.',
    caption: `
<a class="korean | mr-3 | underline decoration-1"
target="_blank">예시 동영상</a>
<a class="korean | mr-3 | underline decoration-1"
href="https://zerogram.co.kr/exhibitions/305"
target="_blank">제로그램 사용 예시</a>
<a class="korean | mr-3 | underline decoration-1"
href="https://bylynn.shop/exhibitions/69"
target="_blank">바이린 사용 예시</a>
    `
  }),
  SlideContent.of({
    image: uzen,
    date: '23.06',
    title: '<a class="korean | underline decoration-1" href="https://bylynn.shop" target="_blank">Bylynn</a> 구축',
    description: 'Vue3/Typescript/Scss/Spring Boot로 만들었으며, 제로그램과는 다르게 SPA 및 반응형 웹을 시도했습니다. 홈/검색/상품목록/상품상세/브랜드관/기획전/콘텐츠 등 여러 부분을 맡았습니다.',
    caption: `
<a class="korean | mr-3 | underline decoration-1"
href="https://bylynn.shop"
target="_blank">바이린</a>
    `
  })
])

</script>

<style scoped lang="scss">
.embla {
  .embla__slide {
    flex: 0 0 80%;
  }
}

</style>