<template>
    <div id="app">
        <div class="container">
            <search />
        </div>
    </div>
</template>

<script>
import Search from '@/components/search'

export default {
    name: 'App',

    components: {
        Search
    }
}
</script>

<style>
.container {
    max-width: 1600px;
    margin: 20vh auto;
    display: flex;
    justify-content: center;
}
</style>
