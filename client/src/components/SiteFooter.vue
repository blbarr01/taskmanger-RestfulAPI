<template>
    <footer>
        <p>all rights reserver</p>
        <div class="socials">
            <p>facebook</p>
            <p>twitter</p>
            <p>instagram</p>
        </div>
    </footer>
</template>

<script setup>

</script>

<style>
    .socials{
        display: flex;
        flex-direction: row;
        gap: 1em;
        cursor: pointer;
    }
    footer{
        border-top: 1px solid #8d898980;
        position: fixed;
        bottom: 0;
    }
</style>
