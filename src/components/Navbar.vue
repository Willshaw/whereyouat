<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" :to="{ path: '/' }">{{title}}</router-link>

        </nav>
</template>

<script>
    export default {
        props: [ 'title' ]
    }
</script>
