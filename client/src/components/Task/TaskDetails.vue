<template>
<!-- the respective notes  -->
    <ul class="ml-4 list-decimal">
        <li v-for="note in props.notes">{{note}}</li>
    </ul>

<!-- the completion status -->
    <label for="completed">completed:</label>
    <input type="checkbox" name="completed" :check="props.completed_status">

</template>

<script setup>
    const props = defineProps(['notes', 'completed_status'])
</script>

<style>

</style>
