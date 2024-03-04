<template>
    <li class="border-2 rounded border-gray-400 my-2 p-4 gap-4 flex flex-row">
        <div  class="info container m-auto border-blue-200 border-2 p-2">
            <TaskHeader :title="task.title" @update="updateTitle"/>
            <TaskDetails v-if="task.notes" :notes ="task.notes"/>
        </div>
        
        <div id="options" class="container mx-auto flex flex-col gap-4 place-items-start pl-4">
            <button type="button" @click="handleUpdate(task._id)"
            class="bg-blue-700 text-white hover:bg-green-700 hover:text-black rounded-lg py-4 px-2 w-1/3">
                update
            </button>
            <button type="button" @click="handleDelete(task._id)"
            class="bg-slate-300 text-blue-800 hover:bg-red-600 hover:text-white rounded-lg py-4 px-2 w-1/3">
                delete
            </button>
        </div>
    </li>
</template>

<script setup>
import { ref, provide, isReactive, toRef, isRef, toValue } from 'vue';
import TaskHeader from './TaskHeader.vue';
import TaskDetails from './TaskDetails.vue';

const props = defineProps({task:Object})

let task = toRef(props.task)
console.log(isReactive(task), isRef(task));
provide('task', task)

async function handleDelete(id){
    let endpoint = `http://localhost:8000/api/tasks/${id}`
    const req = new Request(endpoint,{
            method:'Delete',
            mode:'cors',  
            headers:{
                'Content-Type': 'application/json'
            },
        });
    const res = await fetch(req)
    console.log(await res.json());
}

async function handleUpdate(){

}

function updateTitle(title){
    console.log('update initiated');
    console.log(toValue(task));
}



</script>

