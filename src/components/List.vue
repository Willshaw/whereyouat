<template>
  <div class="hello">
    <h1>We will list things here</h1>
    <router-link
      class="link"
      :to="{ path: '/item/hp' }"
      v-for="(item, key) in items"
      :key="key"
    >{{key}}</router-link>
  </div>
</template>

<script>
import items from "../assets/items";

export default {
  name: "List",
  data: function() {
    return {
      items: items
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
