<template>
  <header class="main-black | flex items-center | text-gray-200">
    <div class="content">Jung Sang Woo</div>
    <a class="hidden lg:flex items-center | ml-auto"
       href="https://github.com/zabefofoon/about"
       target="_blank">
      <i class="github | icon icon-github"></i>
    </a>
    <button class="bar | flex items-center lg:hidden | ml-auto"
            @click="clickBarHandler">
      <i v-if="isActiveNav" class="icon icon-close"></i>
      <i v-else class="icon icon-bar"></i>
    </button>
  </header>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router"
import {computed} from "vue"

const router = useRouter()
const route = useRoute()

const isActiveNav = computed(() => route.query.nav === 'true')
const clickBarHandler = () => {
  if (isActiveNav.value) {
    const query = {...route.query, nav: undefined}
    router.replace({query})
  } else {
    const query = {...route.query, nav: 'true'}
    router.replace({query})
  }
}

</script>

<style scoped lang="scss">
header {
  padding: 8px 12px;
  @media (min-width: 1280px) {
    padding: 12px 20px;
  }

  .content {
    font-size: 16px;
    @media (min-width: 1280px) {
      font-size: 20px;
    }
  }

  .github {
    font-size: 28px;
  }

  .bar {
    font-size: 24px;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 300ms ease;
  transform: rotate(0);
}

.v-enter-from,
.v-leave-to {
  transform: rotate(180deg);
}
</style>