<template>
<!-- the respective notes  -->
    <ul class="ml-4 list-decimal">
        <li v-for="(note, index) in task.notes" :key="index">{{note}}</li>
    </ul>

<!-- the completion status -->
    <label for="completed">completed:</label>
    <input type="checkbox" name="completed" :check="task.completed_status">

</template>

<script setup>
import { inject } from 'vue';

const {task} = inject('task')
console.log('loging from task details -', task);
</script>

<style>

</style>
