<template>
<!-- title and respective input -->
    <h4 v-if="!showEdit" :class="[ 'text-blue-600', 'cursor-pointer']"
    @click="toggleEdit">
        {{task.title}}
    </h4>
    <input v-else type="text" ref="input" name="task-title" :placeholder="task.title" 
    :class="['text-black']" @blur="[updateTitle($event.target.value)]"/>
</template>

<script setup>
    import {inject, ref} from "vue";
    const task = inject('task')
    const emit = defineEmits(['update'])
    console.log('printing from header - ',task.value.title );
   
    const input = ref(null)
    const showEdit = ref(false)
    
    const toggleEdit = () => showEdit.value = !showEdit.value 
    
    function updateTitle(title){
        toggleEdit()
        if(!title){
            return
        }
        task.value.title = title
        console.log('update emits');
        emit('update', title)
    }

</script>

<style>

</style>
