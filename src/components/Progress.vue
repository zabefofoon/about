<template>
  <ul class="progress | hidden xl:flex flex-col | h-fit | absolute | text-white">
    <li v-for="(item, itemIndex) in items"
        :key="item"
        :class="itemIndex === index ? '' : 'opacity-50'"
        @click="emit('update:index', itemIndex)">
      <button class="flex items-center">
        <span class="indicator bg-gray-400"></span>
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
.progress {
  font-size: 14px;

  top: 20px;
  left: 20px;

  button {
    gap: 6px;

    .indicator {
      width: 3px;
      height: 1px;
    }
  }
}
</style>