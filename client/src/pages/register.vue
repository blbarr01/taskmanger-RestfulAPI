<template>
    <h2 class="text-2xl text-center">Register</h2>
    <form @submit.prevent="onSubmit" action="register" class="flex flex-col 
    gap-4 bg-blue-950 w-1/2 mx-auto space-y-4">
        <label class="hidden" for="email">email</label>
        <input type="email" id="email" name="email" placeholder="email" 
        class="text-black w-1/3 mx-auto">

        <label class="hidden" for="name">name</label>
        <input type="text" id="name" name="username" placeholder="user name"
        class="text-black w-1/3 mx-auto">

        <label for="password" class="hidden">password</label>
        <input type="password" name="password" id="password" placeholder="password"
        class="text-black w-1/3 mx-auto">

        <label for="conf" class="hidden">confirm password</label>
        <input type="password" name="conf" id="conf" placeholder="confirm password"
        class="text-black w-1/3 mx-auto">

        <button>register</button>
    </form>
</template>

<script setup>

    async function onSubmit(){

    }
</script>

<style>

</style>
