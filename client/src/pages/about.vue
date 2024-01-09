<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p @click="makereq">click to fetch</p>
  </div>
</template>

<script setup>
async function makereq(){
  try {
  const ep = new URL("http://localhost:8000/api/test/")
  const resp = await fetch(ep, {
      mode:"cors"
  })
  console.log(resp);
  const data = await resp.json()
  console.log(data);
  } catch (error) {
    console.error(error);  
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
