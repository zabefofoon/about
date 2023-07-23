<template>
  <footer class="main-black | text-gray-200 | overflow-scroll">
    <div class="footer | flex items-center | whitespace-nowrap">
      Front end, 1995.05, Vue2, Vue3, Nuxt3, Javascript, Typescript, Css, Scss, TailwindCss
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
footer {
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .footer {
    font-size: 16px;
    padding: 8px 12px 12px 12px;

    @media (min-width: 1280px) {
      font-size: 20px;
      padding: 12px 20px 20px 20px;
    }
  }
}
</style>