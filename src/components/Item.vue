<template>
<div class="item">

    <Navbar title="< Product List" path="/list" />

    <div class="container">

        <h1>{{ item.title }}</h1>

        <div class="row selectors">
            <div class="col">
                <select v-model="selected.section" class="form-control">
                    <option :value="-1">Choose section...</option>
                    <option 
                        :key="index" 
                        v-for="(section,index) in item.sections" 
                        :value="index"
                    >
                        {{section.title}}
                    </option>
                </select>
            </div>
            <div class="col">
                <select 
                    v-model="selected.sub_section" :disabled="selected.section === -1"
                    class="form-control"
                >
                    <option :value="-1">Choose sub section...</option>
                    <option 
                        v-for="(sub_section,index) in selected_subsections" 
                        :value="index"
                        :key="index"
                    >
                        {{sub_section}}
                    </option>
                </select>
            </div>
        </div>   

        <div class="row"> 
            <div class="col">
                <h2 v-html="status"></h2>
            </div>
        </div>

        <div class="sections row" v-for="(section,index) in item.sections" :key="index">
            <div class="col section">
                <div class="row">
                    <div class="col-3">
                        <h3 class="type-title">{{types[ item.type ].section}} {{index + 1}}</h3>
                    </div>
                    <div class="col">
                        <h3>{{section.title}}</h3>
                    </div>

                </div>
                <div 
                    class="sub_sections row" 
                    v-for="(sub_section,index) in section.sections"
                    :key="index"
                >
                    <div class="type-title col-3">
                        {{types[ item.type ].sub_section}}
                        {{index + 1}}
                    </div>
                    <div class="col">
                        {{sub_section}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import items from "../assets/items";
import Navbar from './Navbar';

export default {
    components: {
        Navbar
    },    
    data: function() {
        return {
            item: items[this.name],
            selected: {
                section: -1,
                sub_section: -1
            },
            types: {
                'book' : {
                    'label' : 'Book',
                    'section' : 'book',
                    'sub_section' : 'chapter'
                },
                'tv' : {
                    'label' : 'TV Series',
                    'section' : 'season',
                    'sub_section' : 'episode'
                }
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
                for (
                    let j = 0; 
                    j < this.item.sections[i].sections.length; 
                    j++
                ) {
                    total_sections++;
                    if (i === this.selected.section && j === this.selected.sub_section) {
                        current_section = total_sections;
                    }
                }
            }

            let percentage = Math.floor(
                                    (current_section / total_sections) * 100
                                );

            return `
                You are ${percentage}% of the way through.
                <br />
                ${current_section} out of ${total_sections}
            `;
        }
  }
};
</script>

<style scoped>
    .selectors {
        margin: 1em auto;
        padding: 1em 0;
        border: thin solid #CCC;
        border-width: thin 0;
    }

    .type-title {
        text-transform: capitalize;
    }

    .sub_sections:first-of-type {
        border-top: thin solid #CCC;
    }

    .sub_sections {
        padding: 0.25em 0;
        border-bottom: thin solid #CCC;
    }

    .sub_sections:hover {
        background-color: #EEE;
    }

    .sub_sections:last-of-type {
        margin-bottom: 2em;
    }    
</style>
