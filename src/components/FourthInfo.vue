<template>
  <section
    class="dissolve-transition | w-full h-full | flex flex-col justify-end | absolute top-0 left-0"
    :class="index === 3 ? 'pointer-events-auto' : 'pointer-events-none'"
  >
    <div class="flex flex-col | w-full h-full | pb-40 | relative">
      <h2
        class="dissolve-transition title | leading-none text-center text-green-500 text-outline-2 duration-500"
        :class="dissolve"
      >
        Personal
      </h2>
      <ul
        class="dissolve-transition mx-auto | grid grid-cols-3 justify-center gap-x-[12px] lg:gap-x-[20px] gap-y-[24px] | absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 | duration-500 delay-100"
        :class="dissolveApps"
      >
        <li class="flex-shrink-0">
          <a href="https://zabefofoon.github.io/mm-guide/" target="_blank">
            <figure class="flex flex-col gap-[8px]">
              <img class="w-full rounded-[12px]" src="@/assets/image/mm.png" />
              <figcaption class="text-[16px] leading-none text-white text-center">
                Markup Manager
              </figcaption>
            </figure>
          </a>
        </li>
        <li class="flex-shrink-0">
          <a href="https://zabefofoon.github.io/memoku-guide" target="_blank">
            <figure class="flex flex-col gap-[8px]">
              <img class="w-full rounded-[12px]" src="@/assets/image/memoku.png" />
              <figcaption class="leading-none text-[16px] text-white text-center">
                Memoku
              </figcaption>
            </figure>
          </a>
        </li>
        <li class="flex-shrink-0">
          <a href="https://econostatsus.netlify.app/" target="_blank">
            <figure class="flex flex-col gap-[8px]">
              <img class="w-full rounded-[12px]" src="@/assets/image/EconoStatsUs.png" />
              <figcaption class="leading-none text-[16px] text-white text-center">
                Econo Stats US
              </figcaption>
            </figure>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  index: number
}>()

const dissolve = ref()
const dissolveApps = ref()

watch(
  () => props.index,
  (value) => {
    dissolve.value = value === 3 ? 'opacity-100 mr-0' : 'opacity-0 -mr-80'
    dissolveApps.value = value === 3 ? 'opacity-100' : 'opacity-0'
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.dissolve-transition {
  transition-property: opacity, transform, margin;
  transition-duration: 500ms;
  transition-timing-function: ease;
}

.title {
  position: absolute;
  top: 12px;
  right: 0;
  transform-origin: 100% 100%;
  transform: translate(0%, -100%) rotate(-90deg);
  font-size: max(80px, 26rem);
  @media (min-width: 1280px) {
    font-size: max(36px, 16rem);
  }
}
</style>
