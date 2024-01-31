<template>
    <ul>
        <Task v-for="task in tasks" 
        :key="task._id"
        :id = task._id
        :title="task.title"
        :notes="task.notes"
        :completed_status="task.completed_status"
        />
    </ul>
    <button type="button"
    class="bg-slate-300 rounded-lg
    sticky bottom-2 right-2
     text-blue-800 
     text-5xl
     p-6
     ">
        +
    </button>
</template>

<script setup>
    import Task from "@/components/task.vue"
    import {ref} from 'vue'

    const res = await fetch('http://localhost:8000/api/tasks')
    console.log(res.status);
    console.log(res.statusText);
    const tasks = ref(await res.json())
    console.log(tasks.value);
</script>
