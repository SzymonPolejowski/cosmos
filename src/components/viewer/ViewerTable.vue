<template>
<div class="viewer-table">
    <div class="viewer-table_header">
        {{ title }}
    </div>
    
    <div 
        class="viewer-table_row"
        v-for="row in data"    
        v-bind:key="row.id"
    >
        <span>{{ row.title }}</span>
        <CopyPin v-if="row.isCopiable"
            :text="row.value"
        />
        <span v-if="!row.isCopiable">
            {{ row.value }}
        </span>
    </div>
</div>
</template>

<script>
import CopyPin from '@/components/share/CopyPin.vue'

export default {
    name: 'ViewerTable',
    props: ['data', 'title'],
    components: {
        CopyPin
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/config';

.viewer-table {
    width: 100%;
    background-color: $table_color;
    border-radius: $border_radius;
    margin-bottom: 2rem;

    > div {
        padding: 1rem;
    }

    .viewer-table_header {
        background-color: $table_header_color;
        border-radius: $border_radius $border_radius 0 0;
        font-weight: 600;
    }

    .copy_pin {
        background-color: #676767;
    }

    .viewer-table_row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: $table_border;

        &:last-child {
            border-bottom: none;
        }
    }
}
</style>
