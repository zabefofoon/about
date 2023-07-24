<template>
  <div class="flex h-full mx-auto"
       style="max-width: 2560px;">
    <div class="w-full h-full | flex flex-col justify-between">
      <Header/>
      <div class="h-full overflow-hidden | relative">
        <router-view/>
        <GNB/>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import GNB from "@/components/GNB.vue"
</script>

<style scoped>

</style>
