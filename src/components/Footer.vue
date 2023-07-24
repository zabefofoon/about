<template>
  <footer class="main-black | flex items-center | text-gray-200">
    <div class="content">
      Front end, 1995.05, Vue, Typescript, Scss
    </div>
    <a class="flex lg:hidden items-center | ml-auto"
       href="https://github.com/zabefofoon/about"
       target="_blank">
      <i class="github | icon icon-github"></i>
    </a>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
footer {
  padding: 8px 12px 12px 12px;

  @media (min-width: 1280px) {
    padding: 12px 20px 20px 20px;
  }

  .content {
    font-size: 16px;

    @media (min-width: 1280px) {
      font-size: 20px;
    }
  }

  .github {
    font-size: 24px;
  }
}
</style>