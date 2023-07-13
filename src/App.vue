<template>
  <div class="flex h-full">
    <div class="w-full h-full | flex flex-col justify-between">
      <Header/>
      <div class="h-full overflow-hidden | relative">
        <router-view/>
        <Progress/>
      </div>
      <button class="flex flex-col items-center justify-center | absolute bottom-28 left-1/2 -translate-x-1/2 | text-white">
        <span class="icon icon-up | text-3xl"></span>
        <span class="icon icon-wheel | text-4xl"></span>
        <span class="icon icon-down | text-3xl"></span>
      </button>
      <Footer/>
    </div>
    <Aside v-if="false"/>
  </div>

</template>

<script setup lang="ts">
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Aside from "@/components/Aside.vue"
import Progress from "@/components/Progress.vue"
</script>

<style scoped>

</style>
