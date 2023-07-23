<template>
  <section class="w-full h-full | flex flex-col justify-end | absolute top-0 left-0 | dissolve-transition"
           :class="index === 2 ? 'pointer-events-auto' : 'pointer-events-none'">
    <h3 class="title | absolute bottom-16 | leading-none text-orange-500 text-outline-2 dissolve-transition duration-500"
        :class="dissolve">Career</h3>
    <Transition>
      <div v-if="index === 2"
           class="absolute left-0 | w-full h-full">
        <div class="w-full | absolute top-1/2 left-0 -translate-y-1/2 | flex items-center justify-center">
          <ThirdInfoCarousel/>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import {ref, watch} from "vue"
import ThirdInfoCarousel from "@/components/ThirdInfoCarousel.vue"

const props = defineProps<{
  index: number
}>()

const dissolve = ref()

watch(() => props.index,
    (value) => {
      dissolve.value = value === 2
          ? 'opacity-50 translate-y-0'
          : 'opacity-0 translate-y-20'
    }, {immediate: true})
</script>

<style scoped lang="scss">
.dissolve-transition {
  transition: opacity 300ms ease, transform 300ms ease;
}

.v-enter-active,
.v-leave-active {
  transition: all 300ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.title {
  font-size: clamp(80px, 40rem, 200px);
  @media (min-width: 1280px) {
    font-size: 26rem;
  }
}
</style>