<template>
  <div class="flex h-full mx-auto"
  style="max-width: 1920px;">
    <div class="w-full h-full | flex flex-col justify-between">
      <Header/>
      <div class="h-full overflow-hidden | relative">
        <router-view/>
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
</script>

<style scoped>

</style>
