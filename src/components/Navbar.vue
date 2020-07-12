<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img
            class="logo-small"
            src="https://res.cloudinary.com/willshawmedia/image/upload/c_thumb,w_50,g_face/v1594585217/whereyouat/logo-small.png"
        >
        <router-link class="navbar-brand" :to="{ path: '/' }">{{title}}</router-link>

    </nav>
</template>

<script>
    export default {
        props: [ 'title' ]
    }
</script>

<style scoped>
</style>
