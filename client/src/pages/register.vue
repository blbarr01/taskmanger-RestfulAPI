<template>
    <h2 class="text-2xl text-center my-4">Register</h2>

    <form @submit.prevent="onSubmit" action="register" 
    class="flex flex-col gap-4 bg-blue-950 w-1/2 mx-auto space-y-4 py-4">
<!-- email -->
        <label class="hidden" for="email">email</label>
        <input type="email" id="email" name="email" placeholder="email" 
        class="text-black w-1/3 pt-1 mx-auto invalid:border-b-4 invalid:border-red-500">

<!-- name -->
        <label class="hidden" for="name">name</label>
        <input type="text" id="name" name="username" placeholder="user name"
        class="text-black w-1/3 pt-1 mx-auto">

<!-- password -->
        <label for="password" class="hidden">password</label>
        <input type="password" name="password" id="password" placeholder="password"
        @keyup="verify_password(password, $event)" v-model="password" 
        :class="[
            (!isValid.password || !isMatch) ? 'border-b-4 border-red-600' :'border-b-4 border-green-600',
            'text-black w-1/3 mx-auto pt-1' 
        ]">


<!-- confirm password -->
        <label for="conf" class="hidden">confirm password</label>
        <input  type="password" name="conf" id="conf" placeholder="confirm password"
        @blur="verify_match" v-model="conf"
        @keyup="verify_password(conf, $event)"
        :class="[
            (!isValid.conf || !isMatch) ? 'border-b-4 border-red-600' :'border-b-4 border-green-600',
            'text-black w-1/3 mx-auto pt-1' 
        ]">
        <div id="feedback" v-if="!isValid.conf"
        class="bg-red-600 mx-auto  w-1/3 p-2 rounded text-sm">
            <p>your password does not meet minimum requirements </p>
            <p>passwords must:</p>
            <ul class="list-disc container mx-2">
                <li >have 1 special character: </li>
                <li>have 1 number </li>
                <li>be 8 characters or longer</li>
            </ul>
            <p v-if="!isMatch">passwords do not match</p>
        </div>
<!-- submit button -->
        <button class="mx-auto border-2 border-blue-400 w-1/4 rounded hover:bg-blue-400 hover:p-2">Register</button>
    </form>
</template>

<script setup>
    import {ref} from 'vue'
    const email = ref('')
    const name = ref('')
    const password = ref('')
    const conf = ref('')
    const isMatch = ref(true)
    const isValid = ref({
        password:true,
        conf:true
    })

    function verify_password(p, event){
        // regex to check if password.length >= 8, and has 1 special character & 1 number
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(.{8,})$/;
        let caller_id = event.target.id

        if(!passwordRegex.test(p)){
            isValid.value[caller_id] = false
            return
        }
        isValid.value[caller_id] = true
        return
    }

    function verify_match(){
        password.value !== conf.value ? isMatch.value = false : isMatch.value = true
    }

    


    async function onSubmit(){

    }
</script>

