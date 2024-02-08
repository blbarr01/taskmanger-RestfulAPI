<template>
    <h2> task page</h2>
    <main class="grid grid-cols-2 container mx-auto gap-2">
        <section>
            <Suspense>
                <tasklist/>
            </Suspense>
        </section>
        <section>
            <TaskForm v-if="showForm"/>
            <button type="button" @click="()=> showForm = !showForm"
            class="bg-slate-300 text-blue-800 hover:bg-slate-200 hover:text-blue-900 
            text-5xl rounded-lg p-6 ">
                new task
            </button>
        </section>
        
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
