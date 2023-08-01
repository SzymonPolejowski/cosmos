<template>
    <thead>
        <tr>
            <th></th>
            <th
                :class="isActive('name') ? activeClass : inactiveClass"
                @click="handleClick('name')"
                :data-arrow="isActive('name') ? orderAsc ? '↓' : '↑' : '↑'"
            >Platform name</th>
            <th
                :class="isActive('status') ? activeClass : inactiveClass"
                @click="handleClick('status')"
                :data-arrow="isActive('status') ? orderAsc ? '↓' : '↑' : '↑'"
            >Status</th>
            <th
                :class="isActive('DUT') ? activeClass : inactiveClass"
                @click="handleClick('DUT')"
                :data-arrow="isActive('DUT') ? orderAsc ? '↓' : '↑' : '↑'"
            >DUT IP</th>
            <th
                :class="isActive('Controller') ? activeClass : inactiveClass"
                @click="handleClick('Controller')"
                :data-arrow="isActive('Controller') ? orderAsc ? '↓' : '↑' : '↑'"
            >Controller IP</th>
            <th
                :class="isActive('WPS') ? activeClass : inactiveClass"
                @click="handleClick('WPS')"
                :data-arrow="isActive('WPS') ? orderAsc ? '↓' : '↑' : '↑'"
            >WPS IP</th>
            <th
                :class="isActive('owner') ? activeClass : inactiveClass"
                @click="handleClick('owner')"
                :data-arrow="isActive('owner') ? orderAsc ? '↓' : '↑' : '↑'"
            >Owner</th>
            <th></th>
        </tr>
    </thead>
</template>

<script>

import { store } from '@/store'

export default {
    name: 'TableHeader',
    methods: {
        handleClick(name) {
            store.changeOrderAsc(name === store.sortBy ? !store.orderAsc : false)
            store.changeSortBy(name)
        },
        isActive(name) {
            return name === store.sortBy
        }
    },
    data(){
        return {
            activeClass: "table-header-sort active",
            inactiveClass: "table-header-sort",
        }
    },
    computed: {
        orderAsc() {
            return store.orderAsc
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/config';
thead {
    border-radius: 18px;
    position: sticky;
    top: 0;
    z-index: 9;

    th {
        background-color: $dark_color;
        padding: 1rem 0;
        font-weight: 400;
        font-size: 1rem;
        color: $third_color;

        &:first-child {
            border-radius: $border_radius_small 0 0 $border_radius_small;
        }

        &:last-child {
            border-radius: 0 $border_radius_small $border_radius_small 0;
        }

        &.table-header-sort {
            &.active  {
                color: $white;

                &::after {
                    content: attr(data-arrow);
                    margin-left: .5rem;
                    opacity: 1;
                }
            }

            &::after {
                content: '↑';
                margin-left: .5rem;
                opacity: 0;
            }

            &:hover::after {
                opacity: 1;
            }
        }
    }
}
</style>