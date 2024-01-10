<template>
      <nav class="flex justify-center gap-4 mb-4 border-2 border-rose-400 w-1/2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">login</RouterLink>
        <RouterLink to="/register">register</RouterLink>
      </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>

</style>
