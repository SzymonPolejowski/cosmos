<template>
    <div class="edit-container">
        <div
            class="edit-inputs inventory"
                v-for="(item, index) in platform.Inventory"
                v-bind:key="item">
            <div class="edit-input">
                <label for="WPS.IP">Name</label>
                <input 
                    type="text" 
                    name="WPS.IP" 
                    id="WPS.IP"
                    placeholder="Name of component"
                    v-model="item.name">
            </div>
            <div class="edit-input inventory">
                <label for="WPS.Socket">Info</label>
                <input 
                    type="text" 
                    name="WPS.Socket" 
                    id="WPS.Socket"
                    placeholder="Additional information"
                    v-model="item.info">
            </div>
            <div
                class="edit-input-flex"
            >
                <div
                    class="edit-input-remove"
                    @click="removeInventoryRow(index)"
                >
                    -
                </div> 
            </div>
        </div>
        <div
            class="edit-inputs inventory"
            >
            <div></div>
            <div></div>
            <div
                class="edit-inventory-add"
                @click="addInventoryRow">
            +
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import { store } from '@/store'
    export default {
        name: 'EditInventory',
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
        },
        methods: {
            addInventoryRow() {
                this.platform.Inventory = [...this.platform.Inventory, {name: '', info: ''}]
            },
            removeInventoryRow(index) {
                this.platform.Inventory.splice(index, 1)
            }
        }
    }
    </script>

<style lang="scss">
@import '@/scss/_config.scss';
.edit-inventory-add-box {
    display: flex;
    justify-content: center;
}

.edit-inventory-add {
    @include outline;

    display: flex;
    justify-content: center;
    align-items: center;
    $pin_color: $pin_green;
    background-color: mix($bg_color, $pin_color, 70%);
    color: $pin_color;
    text-align: center;
    border-radius: $border-radius_max;
    aspect-ratio: 1/1;
    height: 2.5rem;
    cursor: pointer;

    &:hover {
        background-color: mix($bg_color, $pin_color, 80%);
    }
}

.edit-inputs.inventory {
    grid-template-columns: 1fr 1fr auto;
}

.edit-input-flex {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
}

.edit-input-remove {
    @include outline;
    
    display: flex;
    justify-content: center;
    align-items: center;
    $pin_color: $pin_red;
    background-color: mix($bg_color, $pin_color, 70%);
    color: $pin_color;
    text-align: center;
    border-radius: $border-radius_max;
    aspect-ratio: 1/1;
    height: 2.5rem;
    cursor: pointer;

    &:hover {
        background-color: mix($bg_color, $pin_color, 80%);
    }
}
</style>