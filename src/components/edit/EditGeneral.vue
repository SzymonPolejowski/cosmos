<template>
<div class="edit-container">
    <div
        class="edit-textarea">
        <label>
            Description
        </label>
        <textarea 
            name="" 
            id="" 
            cols="30" 
            rows="10"
            v-model="platform.desc">
        </textarea>
    </div>
    <div
        class="edit-inputs">
        <div class="edit-input">
            <label for="owner">Owner</label>
            <input 
                type="text" 
                name="owner" 
                id="owner"
                placeholder="Insert owner of the platform"
                v-model="platform.owner">
        </div>
        <div class="edit-input">
            <label for="project">Project</label>
            <input 
                type="text" 
                name="project" 
                id="project"
                placeholder="Insert project"
                v-model="platform.project">
        </div>
    </div>
</div>
</template>

<script>
import { store } from '@/store'
export default {
    name: 'EditGeneral',
    data() {
        return {
            table_rows: store.table_rows
        }
    },
    computed: {
        platform() {
            return store.editedRow
        },
        selectedId() {
            return +this.$route.params?.id
        }
    }
}
</script>