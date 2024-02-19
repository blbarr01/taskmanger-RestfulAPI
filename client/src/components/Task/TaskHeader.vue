<template>
<!-- title and respective input -->
    <h4 v-if="!showEdit" :class="[ 'text-blue-600', 'cursor-pointer']"
    @click="toggleEdit">
        {{displayTitle }}
    </h4>
    <input v-else type="text" ref="input" name="task-title" :placeholder="displayTitle" 
    :class="['text-black']" @blur="[updateTitle($event.target.value)]"/>
</template>

<script setup>
    import {ref} from "vue";
    const props = defineProps(['title'])
    const emit = defineEmits(['update'])

    const displayTitle = ref(props.title)
    const input = ref(null)
    const showEdit = ref(false)

    function updateTitle(title){
        toggleEdit()
        if(!title){
            return
        }
        displayTitle.value = title
        emit('update', title)
    }

    const toggleEdit = () => showEdit.value = !showEdit.value 
</script>

<style>

</style>
