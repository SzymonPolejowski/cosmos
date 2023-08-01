<template>
<button 
    @click="clickHandler()"
    :class="[isActive ?'active' : '']"
    tabindex="0">
    {{ text }}
</button>
</template>

<script>
import { store } from "@/store";

export default {
    name: 'FiltersButton',
    props: ['text', 'avaliableButton'],
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        clickHandler() {
            if (this.avaliableButton == true)
                store.changeShowAvalible(!this.isActive)
            
            else
                this.isActive ? store.removeFilter(this.text) : store.addFilter(this.text)
    
            this.isActive = !this.isActive
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/config';

button {
    @include outline;

    border: none;
    padding: .5rem 2rem;
    color: inherit;
    border-radius: 18px;
    font-size: 1rem;
    cursor: pointer;
    white-space: nowrap;
    border: $border;
    background-color: rgba($bg_color, .8);


    &.active {
        background-color: $border_color;
    }
}
</style>
