<template>
  <div class="embla | w-full | relative | cursor-grab active:cursor-grabbing">
    <div class="embla__viewport | overflow-hidden | py-20 px-40 lg:px-80"
         ref="emblaNode">
      <div class="embla__container | flex | -ml-20 lg:-ml-8">
        <div v-for="(content, index) in contents"
             :key="index + content.title"
             class="embla__slide | h-full min-w-0 | pl-20 lg:pl-8">
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
import {onBeforeUnmount, onMounted, ref} from "vue"
import {SlideContent} from "@/models/SlideContent"
import uzen from "@/assets/image/uzen.png"
import incross from "@/assets/image/incross.png"
import aiCompony from "@/assets/image/ai_compony.svg"

const [emblaNode, emblaApi] = emblaCarouselVue({
  align: 'center',
  dragFree: true
})

const contents = ref<SlideContent[]>([
  SlideContent.of({
    image: uzen,
    date: '19.12 ~ 23.11',
    title: 'eCommerce 전문 기업 Uzen 입사',
    description: `‘G1 Commerce Cloud’ 라는 솔루션 사업을 담당하는 PS사업부에서 프론트엔드 개발팀에 속하고 있습니다.`,
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
href="https://www.youtube.com/watch?v=q4FDsWlW_DE"
target="_blank">AWS Summit Seoul 2023 시연 자료</a><br/>
<a class="korean | mr-3 | underline decoration-1"
href="https://zerogram.co.kr/exhibitions/305"
target="_blank">제로그램 사용 예시</a><br/>
<a class="korean | mr-3 | underline decoration-1"
href="https://bylynn.shop/exhibitions/69"
target="_blank">바이린 사용 예시</a>
    `
  }),
  SlideContent.of({
    image: uzen,
    date: '23.06',
    title: '<a class="korean-bold | underline decoration-1" href="https://bylynn.shop" target="_blank">Bylynn</a> 구축 및 운영',
    description: 'Vue3/Typescript/Scss/Spring Boot로 만들었으며, 제로그램과는 다르게 SPA 및 반응형 웹을 시도했습니다. 홈/검색/상품목록/상품상세/브랜드관/기획전/콘텐츠 등 여러 부분을 맡았습니다.',
    caption: `
<a class="korean | mr-3 | underline decoration-1"
href="https://bylynn.shop"
target="_blank">바이린</a>
    `
  }),
  SlideContent.of({
    image: incross,
    date: '23.11',
    title: '미디어 렙사 Incross 입사',
    description: `기술연구소 서비스개발팀에서 프론트엔드로 일하였으며, 'SKT T deal'과 광고 플랫폼 운영에 기여를 하였습니다.`,
    caption: `
<a class="korean | mr-3 | underline decoration-1"
href="https://tdeal.kr"
target="_blank">T deal</a>
    `
  }),
  SlideContent.of({
    image: aiCompony,
    date: '24.08',
    title: '스타트업 에이아이컴퍼니 입사',
    description: `프론트엔드로써, 짤스튜디오 운영 및 MCN전용 리포트 사이트 등의 프로젝트에 참여 했습니다.`,
    caption: `
<a class="korean | mr-3 | underline decoration-1"
href="https://zzal.studio/"
target="_blank">짤 스튜디오</a>
    `
  })
])

const keydownHandler = ({code}: KeyboardEvent) => {
  if (code === 'ArrowRight')
    emblaApi.value?.scrollNext()
  else if (code === 'ArrowLeft')
    emblaApi.value?.scrollPrev()
}

onMounted(() => window.addEventListener('keydown', keydownHandler))

onBeforeUnmount(() => window.removeEventListener('keydown', keydownHandler))
</script>

<style scoped lang="scss">
.embla {
  .embla__slide {
    flex: 0 0 min(400px, 95%);
    @media (min-width: 1280px) {
      flex: 0 0 40%;
    }

    .date {
      font-size: 12px;

      @media (min-width: 1280px) {
        font-size: max(12px, 1.6rem);
      }
    }

    .title {
      font-size: 15px;

      @media (min-width: 1280px) {
        font-size: clamp(15px, 1.6rem, 20px);
      }
    }

    .description {
      font-size: 14px;

      @media (min-width: 1280px) {
        font-size: clamp(15px, 1.6rem, 20px);
      }
    }

    .caption {
      font-size: 12px;

      @media (min-width: 1280px) {
        font-size: clamp(12px, 1.6rem, 14px);
      }
    }
  }
}
</style>