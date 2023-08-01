<template>
    <table class="table-container">
        <TableHeader/>
        <tbody>
            <TableRow 
                v-for="row in table_rows" 
                v-bind:key="row.id"
                :row="row"
                @click="viewRow(row.id)"
                @keyup.enter="viewRow(row.id)"
                />
        </tbody>
    </table>
</template>

<script>
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'
import { store } from '@/store'

export default {
    name: 'TableContainer',
    components: {
        TableHeader,
        TableRow
    },
    props: ['table_rows'],
    methods: {
        viewRow(id) {
            store.updateSelectedToView(id)
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/config';

.table-container {
    margin: 2rem;
    width: calc(100% - 4rem);
    min-width: max-content;
    text-align: left;
    border: none;
    border-collapse: collapse;
    font-size: inherit;

    tbody {
        font-size: 1rem;
        font-weight: 700;
    }

    td, th {
        padding: 1rem;
    }

    tr {
        margin: 0;
        border-radius: $border_radius;
    }
}
</style>