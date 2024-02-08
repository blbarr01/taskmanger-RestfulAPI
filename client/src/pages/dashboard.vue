<template>
    <h2> task page</h2>
    <main>
        <Suspense>
            <tasklist/>
        </Suspense>
        <TaskForm v-if="showForm"/>
        <button type="button" @click="()=> showForm = !showForm"
        class="bg-slate-300 text-blue-800 hover:bg-slate-200 hover:text-blue-900 
        sticky bottom-2 right-2 text-5xl rounded-lg p-6 ">
            new task
        </button>
    </main>        
</template>

<script setup>
import TaskForm from '@/components/TaskForm.vue';
import tasklist from '@/components/tasklist.vue';
import { ref } from 'vue';
const showForm = ref(false)


</script>

<style>

</style>
