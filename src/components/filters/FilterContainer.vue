<template>
    <div class="filters-container"
    @wheel="handleWhell">
        <FilterButton 
            text="Available" 
            :avaliableButton="true"/>
        <div class="seperator"></div>
        <FilterButton v-for="(filter, index) in Projects" v-bind:key="index" :text=filter />
    </div>    
</template>

<script>
import FilterButton from './FilterButton.vue'
import { store } from '@/store'

export default {
    name: 'FiltersContainer',
    components: {
        FilterButton
    },
    data() {
        return {
            Projects: ["CPK", "CVL", "MEV", "Race"]
        }
    },
    computed: {
        usedFilters() {
            return store.usedFilters
        }
    },
    methods: {
        handleWhell(e) {
            let box = document.querySelector(".filters-container")
            e.preventDefault()
            box.scroll({
                left: box.scrollLeft + e.deltaY
            })
            console.log(e.target.scrollLeft, e.deltaY)
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/config';

.filters-container {
    padding: $m_padding;
    margin-top: -1rem;
    margin-bottom: -1rem;
    display: flex;
    flex-flow: row;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth; 

    > * {
        margin: 0 .5rem;
    }

    > *:first-child {
        margin-left: 0;
    }

    > *:last-child {
        margin-right: 0;
    }

    .seperator {
        border-left: $border
    }

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
