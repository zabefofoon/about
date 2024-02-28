<template>
  <nav class="main-black | w-full h-full | absolute top-0 left-0"
       :class="isActiveNav ? 'show' : 'hide'">
    <ul class="flex flex-col items-center justify-center | h-full">
      <li v-for="(item, index) in items"
          :key="item">
        <router-link :to="{query: {section: index}}"
                     :class="[`active:${getTextColorByIndex(index)}`, checkMatchedQuery(index) ? getTextColorByIndex(index) : 'text-white']">
          <button>{{ item }}</button>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {computed, ref} from "vue"
import {useRoute} from "vue-router"

const route = useRoute()

const isActiveNav = computed(() => route.query.nav === 'true')

const items = ref([
  'Overview',
  'Interest',
  'Personal',
  'Career',
  'Contact',
])


const textMap: {[key in number]: string} = {
  0: 'text-purple-500',
  1: 'text-blue-500',
  2: 'text-orange-500',
  3: 'text-red-500'
}
const getTextColorByIndex = (index: number) => textMap[index]

const checkMatchedQuery = (index: number) => {
  return (!route.query.section && index === 0)
      || route.query.section === String(index)
}
</script>

<style scoped lang="scss">
nav {
  transition: transform 150ms ease;
  transform-origin: 0 0;

  font-size: 36px;

  &.show {
    transform: scaleY(100%);
  }

  &.hide {
    transform: scaleY(0);
  }
}
</style>