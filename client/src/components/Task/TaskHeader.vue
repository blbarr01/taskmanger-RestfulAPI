<template>
<!-- title and respective input -->
    <h4 v-if="!showEdit" :class="[ 'text-blue-600', 'cursor-pointer']"
    @click="toggleEdit">
        {{task.title}}
    </h4>
    <input v-else type="text" ref="input" name="task-title" :placeholder="task.title" 
    :class="['text-black']" @blur="(event)=>{toggleEdit(); updateTitle(event.target.value)}"/>
</template>

<script setup>
    import {inject, ref} from "vue";
    const {task, updateTitle} = inject('task')
    const showEdit = ref(false)
    
    const toggleEdit = () => {
        console.log('toggle edit fired');
        showEdit.value = !showEdit.value} 
    


</script>

<style>

</style>
