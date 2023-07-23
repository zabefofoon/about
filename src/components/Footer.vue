<template>
  <footer class="main-black | text-gray-200">
    <div class="conveyor | flex">
      <div class="footer | whitespace-nowrap">
        Web Front End Engineer, 1995.05, Vue2, Vue3, Nuxt3, Javascript, Typescript, Css, Scss, TailwindCss, Web Front End
        Engineer, 1995.05, Vue2, Vue3, Nuxt3, Javascript, Typescript, Css, Scss, TailwindCss, Web Front End Engineer,
        1995.05, Vue2, Vue3, Nuxt3, Javascript, Typescript, Css, Scss, TailwindCss,
      </div>
      <div class="footer | whitespace-nowrap">
        Web Front End Engineer, 1995.05, Vue2, Vue3, Nuxt3, Javascript, Typescript, Css, Scss, TailwindCss, Web Front End
        Engineer, 1995.05, Vue2, Vue3, Nuxt3, Javascript, Typescript, Css, Scss, TailwindCss, Web Front End Engineer,
        1995.05, Vue2, Vue3, Nuxt3, Javascript, Typescript, Css, Scss, TailwindCss,
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
  font-size: 16px;
  padding: 8px 12px;

  @media (min-width: 1280px) {
    font-size: 20px;
    padding: 12px 0;
  }
}

.conveyor {
  animation: conveyor 30s linear infinite;

  @media (min-width: 1280px) {
    animation: conveyor 60s linear infinite;
  }
}

@keyframes conveyor {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>