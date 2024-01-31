<template>
    <li class="border-2 rounded border-gray-400 my-2 w-1/4 pl-3 ">
        <h4 class="text-lg text-blue-600" >{{ props.title }}</h4>
        <p>{{ props.notes }}</p>
        <p>{{ props.completed_status }}</p>
        <label for="completed">completed:</label>
        <input type="checkbox" name="completed" id="">
    </li>
</template>

<script setup>
const props = defineProps(['id','title','notes','completed_status'])

</script>

