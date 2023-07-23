<template>
  <div class="embla | w-full | relative">
    <div class="embla__viewport | overflow-hidden | py-20 px-40 md:px-80"
         ref="emblaNode">
      <div class="embla__container | flex | -ml-20 md:-ml-8">
        <div v-for="(content, index) in contents"
             :key="index + content.title"
             class="embla__slide | h-full min-w-0 | pl-20 md:pl-8">
          <div class="flex flex-col items-center justify-center gap-8 | w-full aspect-square | relative | p-32 | shadow-md shadow-orange-800 bg-white">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 | w-full h-full | opacity-10 pointer-events-none"
                 style="max-width: 50%;max-height: 50%;">
              <img v-if="content.image"
                   class="w-full h-full object-contain"
                   :src="content.image"
                   :alt="content.title"/>
            </div>
            <div class="flex flex-col items-start"
                 :style="{width: content.description ? '100%' : 'auto'}">
              <h2 class="korean date">{{ content.date }}</h2>
              <h2 class="korean-bold title font-bold" v-html="content.title"></h2>
            </div>
            <p v-if="content.description"
               class="korean description | leading-normal"
               v-html="content.description"></p>
            <p v-if="content.caption"
               class="korean caption | w-full | leading-normal"
               v-html="content.caption"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import {ref} from "vue"
import {SlideContent} from "@/models/SlideContent"
import hknu from "@/assets/image/hknu.svg"
import uzen from "@/assets/image/uzen.png"

const [emblaNode] = emblaCarouselVue({
  align: 'center',
  dragFree: true
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
    ‘G1 Commerce Cloud’ 라는 솔루션 사업을 담당하는 PS사업부에서 프론트엔드 개발팀에 속하고 있습니다.<div class="h-12 md:h-4"></div>
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
    title: '<a class="korean-bold | underline decoration-1" href="https://www.zerogram.co.kr" target="_blank">Zerogram</a> 구축',
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
    flex: 0 0 95%;

    @media (min-width: 768px) {
      flex: 0 0 40%;
    }

    .date {
      font-size: max(12px, 3rem);

      @media (min-width: 768px) {
        font-size: max(12px, 1.6rem);
      }
    }

    .title {
      font-size: max(15px, 4rem);

      @media (min-width: 768px) {
        font-size: max(15px, 1.6rem);
      }
    }

    .description {
      font-size: max(15px, 4rem);

      @media (min-width: 768px) {
        font-size: max(15px, 1.6rem);
      }
    }

    .caption {
      font-size: max(12px, 3rem);

      @media (min-width: 768px) {
        font-size: max(12px, 1.6rem);
      }
    }
  }
}

</style>