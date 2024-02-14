<template>
    <div class="">
        <form @submit.prevent="handleSubmit"
            class="container border-2 border-slate-400 rounded flex flex-col my-4 py-4 gap-2 pl-4">
            <label for="title" class="hidden">task name</label>
            <input v-model="title" type="text" name="title" id="title" placeholder="task name" class="w-1/4 text-black">

            <!-- display notes to users  -->
            <ul v-if="notes" id="note-holder" class="list-disc ml-4">
                <li v-for="n,index in notes" :key="index">
                  {{n}} 
                    <span class="text-red-600 rounded-md bg-slate-300 hover:bg-slate-200  hover:text-red-700 px-2 ml-1 text-xl cursor-pointer"
                    @click="removeNote(n)">-</span>
                </li>
            </ul>
            <!--field to add new notes  -->
            <div class="flex flex-row gap-4">
                <label for="note" class="hidden">notes</label>
                <input type="text" name="note" id="note" placeholder="additional notes" v-model="newNote" class="text-black">
                <button type="button" class="bg-slate-300 text-blue-800  hover:bg-slate-200 hover:text-blue-900 rounded-lg p-2"
                @click="addNote">
                    add note
                </button>
            </div>
            <button type="submit"
            class="bg-slate-300 text-blue-800  hover:bg-slate-200 hover:text-blue-900 rounded-lg py-4  w-1/4"> 
                create task
            </button>
        </form>
        <section id="feedback">
            <p v-if="error">
                {{error}}
            </p>
            <p v-if="success">
                {{ success }}
            </p>
        </section>
    </div>
</template>

<script setup>
import { ref, toRaw } from 'vue';
const title = ref('')
const newNote = ref('')
const notes = ref([])
const error = ref("")
const success = ref("")

function addNote(){
    if(!newNote.value){
        return
    }
    notes.value.push(newNote.value)
    newNote.value = ""
}

function removeNote(n){
    notes.value = notes.value.filter((note) => note !== n)
}

function parseForm(){
    return{
        title:title.value,
        notes:toRaw(notes.value),
    }
}
async function handleSubmit() {
    if(!title.value){
        error.value = "all tasks must have a title"
        return 
    }
    error.value=""
    const formData = parseForm()
/* 
     const testData = {
        title:"secure lifesuport",
        notes:[
            'there are 8 wheezers',
            'they are connected to the hivemind'
        ]
    } 
 */
    const req = new Request("http://localhost:8000/api/tasks/",{
        method:'POST',
        mode:'cors',  
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(formData)
    });

    const res = await fetch(req)
    const data = await res.json(res)
    success.value = data['msg']
    setTimeout(()=>{
        success.value = ""
    }, 2000)
  }
</script>


