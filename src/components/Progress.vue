<template>
  <ul class="flex flex-col gap-2 | h-fit | absolute left-16 top-12 | text-2xl text-white">
    <li v-for="(item, itemIndex) in items"
        :key="item"
        :class="itemIndex === index ? '' : 'opacity-50'"
        @click="emit('update:index', itemIndex)">
      <button class="flex items-center gap-2">
        <span class="bg-gray-400 w-1 h-1"></span>
        <span>{{ item }}</span>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {ref} from "vue"

defineProps<{
  index: number
}>()

const emit = defineEmits<{
  (e: 'update:index', index: number): void
}>()

const items = ref([
  'Overview',
  'Interest',
  'Career',
  'Contact',
])
</script>

<style scoped lang="scss">
/*li {
  &:before {
    content: '·';
    margin-right: .5rem;
  }
}*/
</style>