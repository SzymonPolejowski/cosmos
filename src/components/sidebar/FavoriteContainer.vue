<template>
<div 
    class="favorite-container"
    v-if="favorite !== null">
    <transition-group name="left-fade">
        <FavoriteButton
            v-for="f in favorite"
            v-bind:key="f.id"
            :row="f"
            @click.stop="viewRow(f.id)"
            @keyup.enter="viewRow(f.id)"/>
        </transition-group>
</div>
<div 
    class="favorite-container favorite-container_empty"
    v-if="favorite === null">
    <div class="favorite-icon">
        🌟
    </div>
    <div class="favorite-icon-desc">
        Save platform here using stars!
    </div>
</div>
</template>

<script>
import FavoriteButton from './FavoriteButton.vue';
import { store } from '@/store'

export default {
    name: 'FavoriteContainer',
    components: {
        FavoriteButton
    },
    computed: {
        favorite() {
            return store.stars.length === 0 ?
                null :
                this.table_rows.filter(e => store.stars.includes(e.id)).sort((a, b) => this.sortByNames(a, b))
        },
        stars() {
            return store.stars
        },
        table_rows() {
            return store.table_rows
        }
    },
    methods: {
        sortByNames(a, b) {
        const [nameA, nameB] = [a, b].map(e => e.name.toLowerCase())

        return (nameA > nameB) ? 1 : -1
        },
        viewRow(id) {
            store.updateSelectedToView(id)
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/config';

.favorite-container {
    padding: .25rem 1rem;
    overflow-y: auto;

    &.favorite-container_empty {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        user-select: none;

        .favorite-icon {
            font-size: 5rem;
        }

        .favorite-icon-desc {
            padding-top: 1rem;
            font-weight: 600;
        }
    }
}
</style>