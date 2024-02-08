<template>
    <li class="border-2 rounded border-gray-400 my-2 p-4 flex flex-row">
        <div class="info container m-auto">
            <h4 class="text-lg text-blue-600" >{{ props.title }}</h4>
            <ul v-if="notes" class="ml-4 list-disc">
                <li v-for="note in notes">{{note}}</li>
            </ul>
            <p>{{ props.completed_status }}</p>
            <label for="completed">completed:</label>
            <input type="checkbox" name="completed" id="">
        </div>
        <div id="options" class="container m-auto flex flex-col gap-4">
            <button type="button"
            class="bg-blue-700 text-white hover:bg-blue-300 hover:text-black rounded-lg">
                update
            </button>
            <button type="button" @click="handleDelete(props.id)"
            class="bg-slate-300 text-blue-800 hover:bg-red-600 hover:text-white rounded-lg">
                delete
            </button>
        </div>
    </li>
</template>

<script setup>
const props = defineProps(['id','title','notes','completed_status'])

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



</script>

