<template>
    <h2 class="text-2xl text-center my-6">Sign in </h2>
    <form @submit.prevent="onSubmit" id="login-form" class="flex flex-col 
    container bg-blue-950 rounded md:w-1/3 py-6 mx-auto space-y-4">
        <label class="hidden" for="email">email</label>
        <input v-model="email" type="email" id="email" 
        name="email" placeholder="email" class="text-black sm:w-1/2 mx-auto">

        <label class="hidden" for="password">password</label>
        <input v-model="password" type="password" name="password" 
        id="password" placeholder="password" class="text-black sm:w-1/2 mx-auto">
            
        <button class="my-4 mx-auto border-2 border-blue-400 
        w-1/4 rounded hover:bg-blue-400">sign in</button>
    </form>
    <p></p>
</template>

<script setup>
import {ref} from 'vue'

const email = ref('')
const password = ref('')

async function onSubmit(){
    const form_data = {
        "email": email.value,
        "password": password.value
    }

    const testData = {
            "email": "engineer@test.mail",
            "password": "linecutter"
    }

    const options = {
            "method":"POST",
            "headers":{
                "Content-Type": "application/json"
            },
            "mode":"cors",
            "body": JSON.stringify(testData) 
        }

    try {
        const res = await fetch("http://localhost:8000/api/auth/login/", options)   
        let data = await res.json()
        console.log(data);
    } catch (error) {
       console.error(error); 
    }
    

}

</script>

<style>

</style>
