<template>
  <ul class="h-fit | absolute left-8 bottom-4 | text-gray-200 text-sm">
    <li class="flex items-center gap-2">
      <div class="bg-gray-500 w-0.5 h-0.5"
      :class="['w-2']"></div>
      <span>Intro</span>
    </li>
    <li class="flex items-center gap-2 | opacity-30">
      <div class="bg-gray-500 w-0.5 h-0.5"></div>
      <span>Career</span>
    </li>
    <li class="flex items-center gap-2 | opacity-30">
      <div class="bg-gray-500 w-0.5 h-0.5"></div>
      <span>Contact</span>
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
/*li {
  &:before {
    content: '·';
    margin-right: .5rem;
  }
}*/
</style>