<template>
  <div class="flex h-full">
    <div class="w-full h-full | flex flex-col justify-between">
      <Header/>
      <div class="h-full | relative">
        <router-view/>
        <Progress/>
      </div>
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
