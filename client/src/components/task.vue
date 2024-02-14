<template>
    <li class="border-2 rounded border-gray-400 my-2 p-4 gap-4 flex flex-row">
        <div  class="info container m-auto border-blue-200 border-2 p-2">

        <!-- title and respective input -->
            <h4 :class="[showEdit? 'hidden':'', 'text-lg', 'text-blue-600', 'cursor-pointer']"
            @click="showEdit = !showEdit">
                {{props.task.title }}
            </h4>
            <input type="text" name="task-title" :placeholder="props.task.title"
            :class="[showEdit?'':'hidden', 'text-black']" @blur="updateTitle($event)">
        <!-- the respective notes  -->
            <ul v-if="props.task.notes" class="ml-4 list-decimal">
                <li v-for="note in props.task.notes">{{note}}</li>
            </ul>
        
        <!-- the completion status -->
            <label for="completed">completed:</label>
            <input type="checkbox" name="completed" :check="props.task.completed_status">
        </div>

        <div id="options" class="container mx-auto flex flex-col gap-4 place-items-start pl-4">
            <button type="button" @click="handleUpdate(props.task._id)"
            class="bg-blue-700 text-white hover:bg-green-700 hover:text-black rounded-lg py-4 px-2 w-1/3">
                update
            </button>
            <button type="button" @click="handleDelete(props.task._id)"
            class="bg-slate-300 text-blue-800 hover:bg-red-600 hover:text-white rounded-lg py-4 px-2 w-1/3">
                delete
            </button>
        </div>
    </li>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({task:Object})

const showEdit = ref(false)


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

function updateTitle(event){
    showEdit.value = !showEdit.value
    if(!event.target.value) return
    props.task.title = event.target.value
}

</script>

