<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <SiteHeader/>
  <RouterView />
  <SiteFooter/>
</template>

<style scoped>

</style>
