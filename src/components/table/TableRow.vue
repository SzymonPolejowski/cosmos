<template>
    <tr
    tabindex="0">
        <td>{{ row.icon }}</td>
        <td class="name">{{ row.name }}</td>
        <td v-if="row.status === 0">
            <span class="pin green_pin">AVAILABLE</span>
        </td>
        <td v-if="row.status === 1">
            <span class="pin red_pin" :data-blocker="row.blocker">BLOCKED</span>
        </td>
        <td v-if="row.status === 2">
            <span class="pin blue_pin">REGRESSION</span>
        </td>
        <td v-if="row.status === 3">
            <span class="pin yellow_pin" :data-reserver="row.reserver">RESERVED</span>
        </td>
        <td>
            <CopyPin
                :text="row.DUT.IP"
            />
        </td>
        <td>
            <CopyPin
                v-if="row?.Controller?.IP"
                :text="row.Controller.IP"
            />
        </td>
        <td>
            <CopyPin
                :text="row.WPS.IP"
            />
        </td>
        <td>{{ row.owner }}</td>
        <td>
            <span 
                class="star"
                v-if="star === false"
                @click.stop.prevent="toggleStar"
                @keyup.enter.stop.prevent="toggleStar"
                tabindex="0"
                >
                    <img src="@/assets/vectors/star-lined.svg">
                </span>
            <span 
                :class="[clicked ? activeClass : notActiveClass]" 
                v-if="star === true" 
                @click.stop.prevent="toggleStar"
                @keyup.enter.stop.prevent="toggleStar"
                tabindex="0">
                    <img src="@/assets/vectors/star-filled.svg">
            </span>
        </td>
    </tr>
</template>

<script>
import CopyPin from '@/components/share/CopyPin.vue'
import { store } from '@/store'

export default {
    name: 'TableRow',
    props: ['row'],
    inject: ['popPopout'],
    components: {
        CopyPin
    },
    methods: {
        toggleStar() {
            this.clicked = true
            
            if (
                store.stars.length === 0 ||
                !store.stars.includes(this.row.id)
                ) {
                store.addId(this.row.id)
                this.popPopout(`Added ${this.row.name} to stared`)
            }
            else {
                store.removeId(this.row.id)
                this.popPopout(`Removed ${this.row.name} from stared`)
            }

            setTimeout(() => {
                this.clicked = false
            },1000)
        }
    },
    data() {
        return {
            stars: store.stars,
            clicked: false,
            activeClass: 'star filled clicked',
            notActiveClass: 'star filled'
        }
    },
    computed: {
        isSelectedToView() {
            return store.selectedToView === this.row.id
        },
        selectedToView() {
            return store.selectedToView
        },
        star() {
            let stars = store.stars
            
            if (stars === null || stars === "")
                return false

            if (!stars.includes(this.row.id))
                return false
            
            return true
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/config';

td img {
    height: 1em;
}

td {
    margin: 1rem 0;
    user-select: none;
    cursor: pointer;

    &:first-child {
        border-radius: $border_radius_small 0 0 $border_radius_small;
    }

    &:last-child {
        border-radius: 0 $border_radius_small $border_radius_small 0;
    }
}

tr {
    @include outline;

    &:hover td {
        background-color: rgba($white,.1);
    }
}

.pin {
    $pin_color: $white;
    padding: .25rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 18px;
    display: inline-flex;
    align-items: center;
    background-color: mix($bg_color, $pin_color, 70%);
    color: $pin_color;
    user-select: none;
    position: relative;

    &::before {
        content: "";
        height: .65rem;
        width: .65rem;
        display: block;
        border-radius: 99999px;
        margin-right: .5rem;
        background-color: $pin_color;
    }

    &::after {
        content: "Test text sample";
        position: absolute;
        top: 50%;
        right: 0;
        background-color: mix($bg_color, $pin_color, 70%);
        color: $pin_color;
        translate: calc(100% - 1rem) -50%;
        white-space: nowrap;
        z-index: 99999999999;
        padding: .5rem 1rem;
        border-radius: 18px;
        opacity: 0;
        transition: all .3s ease-in-out;
        user-select: none;
        pointer-events: none;
    }

    &:hover::after {
        translate: calc(100% + 1rem) -50%;
        opacity: 1;
    }
}

.green_pin {
    $pin_color: $pin_green;
    background-color: mix($bg_color, $pin_color, 70%);
    color: $pin_color;

    &::before {
        background-color: $pin_color;
    }

    &::after {
        background-color: mix($bg_color, $pin_color, 70%);
        color: $pin_color;
        content: "Free to reserve";
    }
}

.red_pin {
    $pin_color: $pin_red;
    background-color: mix($bg_color, $pin_color, 70%);
    color: $pin_color;

    &::before {
        background-color: $pin_color;
    }

    &::after {
        background-color: mix($bg_color, $pin_color, 70%);
        color: $pin_color;
        content: "Blocked by " attr(data-blocker);   
    }
}

.yellow_pin {
    $pin_color: $pin_yellow;
    background-color: mix($bg_color, $pin_color, 70%);
    color: $pin_color;

    &::before {
        background-color: $pin_color;
    }

    &::after {
        background-color: mix($bg_color, $pin_color, 70%);
        color: $pin_color;
        content: "Reserved by " attr(data-reserver);
    }
}

.blue_pin {
    $pin_color: $pin_blue;
    background-color: mix($bg_color, $pin_color, 70%);
    color: $pin_color;

    &::before {
        background-color: $pin_color;
    }

    &::after {
        background-color: mix($bg_color, $pin_color, 70%);
        color: $pin_color;
        content: "Used in regression";
    }
}

.star {
    @include outline;

    display: inline-flex;
    padding: .5rem;
    position: relative;
    border-radius: 99999px;
    cursor: pointer;
    border: 1px transparent solid;

    &:hover {
        background-color: rgba($white,.2);
        border: $border;
    }
}

.star.clicked::after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 99999px;
    border: #d8c733 dotted 2px;
    translate: 0;
    animation: filled .8s ease-out forwards;
}

@keyframes filled {
    0% {
        transform: scale(0);
        opacity: 1;
    }

    50% {
        transform: scale(1.3);
        opacity: 1;
    }

    100% {
        transform: scale(1.5);
        opacity: 0;
    }

}
</style>