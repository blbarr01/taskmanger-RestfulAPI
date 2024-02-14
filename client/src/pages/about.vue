<script setup>
import Task from '@/components/task.vue';

let dt = {
        user_id: "65834d8950dd28c54fbaa0df",
        title:"Walk the dog",
        notes: ["walk for at least 1/2 mile", "watch out  for cats"]
        }
</script>

<template>
  <Task :task="dt"/>
</template>