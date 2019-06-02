<template>
  <div>
    <h1>Choose a product</h1>
    <div class="link-list">
        <router-link
        class="link"
        :to="{ path: '/item/' + key }"
        v-for="(item, key) in items"
        :key="key"
        >
            {{item.title}}
            <em class="item-type">{{item.type}}</em>
        </router-link>
    </div>
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

<style scoped>
    .link-list {
        border-top: thin solid #CCC;
    }

    .link {
        display: block;
        padding: 0.5em;
        text-decoration: none;
        color: #000;
        border-bottom: thin solid #CCC;
    }

    .item-type {
        font-size: 0.75em;
    }

    .link:hover {
        background-color: #EEE;
    }
</style>
