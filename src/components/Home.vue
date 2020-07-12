<template>
<div>

    <Navbar title="Where you at?" />

    <img
        class="logo-big"
        src="https://res.cloudinary.com/willshawmedia/image/upload/v1594585217/whereyouat/logo-big.png"
    >

   <p>
       "Where you at?" is here to let you know how far you've got through a 
       TV Series or Collection of books.
   </p>

   <p>
       Not every book or series (or season) is the same length,
       there could be more chapters/episodes, so knowing how far you are
       through the entire collection can be hard to work out.
    </p>

    <p>Choose a product from the list below to find out how far you are through...</p>

   <router-link class="navbar-brand" :to="{ path: '/list' }">Choose a product</router-link>

</div>
</template>

<script>
import items from "../assets/items";
import Navbar from './Navbar';

export default {
    name: "List",
    components: {
        Navbar
    },
    data: function() {
        return {
          items: items
        };
    }
};
</script>

<style scoped>
    .logo-big {
        width: 100%;
        max-width: 500px;
    }
</style>
