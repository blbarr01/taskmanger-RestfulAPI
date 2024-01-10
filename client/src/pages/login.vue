<template>
    <h2 class="text-2xl text-center">Sign in </h2>
    <form @submit.prevent="onSubmit" action="sign-in" id="login-form" class="container flex flex-col mx-auto">
        <label for="email">email</label>
        <input v-model="email" type="email" id="email" name="email" class="text-black w-1/3">

        <label for="password">password</label>
        <input v-model="password" type="password" name="password" id="password" class="text-black w-1/3">
            
        <button class="mt-4 border-2 border-blue-400 w-1/4 hv">sign in</button>
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
