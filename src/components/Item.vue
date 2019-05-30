<template>
  <div class="item">
    <h1>{{ item.title }}</h1>

    <select v-model="selected.section">
      <option :value="-1">Choose section...</option>
      <option :key="index" v-for="(section,index) in item.sections" :value="index">{{section.title}}</option>
    </select>
    
    <select v-model="selected.sub_section" :disabled="selected.section === -1">
      <option :value="-1">Choose sub section...</option>
      <option v-for="(sub_section,index) in selected_subsections" :value="index">{{sub_section}}</option>
    </select>

    <h2 v-html="status"></h2>

    <div class="sections" v-for="section in item.sections">
      <h2>{{section.title}}</h2>
      <div class="sub_sections" v-for="sub_section in section.sections">{{sub_section}}</div>
    </div>
  </div>
</template>

<script>
import items from "../assets/items";

export default {
  data: function() {
    return {
      item: items[this.name],
      selected: {
        section: -1,
        sub_section: -1
      }
    };
  },

  props: ["name"],

  computed: {
    selected_subsections: function() {
      if (this.selected.section === -1) {
        return [];
      }

      return this.item.sections[this.selected.section].sections;
    },
    status: function() {
      // default message
      if (this.selected.section === -1 || this.selected.sub_section === -1) {
        return "Choose a section and sub section";
      }

      // if we have sections and sub sections work everything out.
      let total_sections = 0;
      let current_section = 0;
      for (let i = 0; i < this.item.sections.length; i++) {
        for (let j = 0; j < this.item.sections[i].sections.length; j++) {
          total_sections++;
          if (i === this.selected.section && j === this.selected.sub_section) {
            current_section = total_sections;
          }
        }
      }

      let percentage = (current_section / total_sections) * 100;

      return `
        You are ${percentage} % of the way through.
        <br />
        ${current_section} out of ${total_sections}
      `;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>