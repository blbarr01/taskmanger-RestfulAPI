<template>
    <ul>
        <Task v-for="task in tasks" 
        :key="task._id"
        :task = task
        />
    </ul>
</template>

<script setup>
    import Task from "@/components/Task/Task.vue"
    import {ref} from 'vue'

    const res = await fetch('http://localhost:8000/api/tasks')
    const tasks = ref(await res.json())
</script>
