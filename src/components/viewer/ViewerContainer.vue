<template>
    <div 
        :class="showBackground ? 'viewer background' : 'viewer'"
        tabindex="0"
        @focusout="handleFocusOut"
        @click.stop=""
        @scroll="scrollHandler"
        :style="{backgroundPositionY: -0.5 * scrollDistance + 'px'}">
        <div class="viewer-header">
            <div 
                class="viewer-header-button"
                @click="removeView()"
                @keyup.enter.stop.prevent="removeView()"
                tabindex="0">
                <img src="@/assets/vectors/x-mark.svg" />
            </div>
            <div class="viewer-icon">
                {{ viewedRow.icon  }}
            </div>
            <div 
                class="star viewer-header-button"
                v-if="star === false"
                @click.stop.prevent="toggleStar"
                @keyup.enter.stop.prevent="toggleStar"
                tabindex="0"
                >
                    <img src="@/assets/vectors/star-lined-grey.svg">
            </div>
            <div 
                v-if="star === true"
                :class="[clicked ? activeClass : notActiveClass]" 
                @click.stop.prevent="toggleStar"
                @keyup.enter.stop.prevent="toggleStar"
                tabindex="0"
                >
                    <img src="@/assets/vectors/star-filled.svg">
            </div>
        </div>
        <h3>
            {{ viewedRow.name }}
        </h3>
        <div class="viewer-body">
            <div 
                class="viewer-status green_viewer-status"
                v-if="viewedRow.status === 0"
                >
                <span>
                This platform is available
                </span>
                <button
                    class="viewer-status_button"
                    @click.stop="toggleReservePanel"
                >
                    Reserve it
                </button>
            </div>
            <div 
                class="viewer-status red_viewer-status"
                v-if="viewedRow.status === 1"
                >
                <span>This platform is blocked by {{ viewedRow.blocker }}</span>
            </div>
            <div 
                class="viewer-status blue_viewer-status"
                v-if="viewedRow.status === 2"
                >
                <span>This platform is used in regression</span>
                <button
                    class="viewer-status_button"
                    @click.stop="toggleReservePanel"
                >
                    Reserve it
                </button>
            </div>
            <div 
                class="viewer-status yellow_viewer-status"
                v-if="viewedRow.status === 3"
                >
                <span>This platform is reserved by {{ viewedRow.reserver }}</span>
            </div>

            <div
                v-if="isReservePanelVisible"
                class="viewer-reserve"
            >
                <div class="date">
                    <span>
                        End of resevation: 
                    </span>
                    <input type="date" />
                </div>

                <div
                    class="flex-left"
                >
                    <router-link :to="`/edit/${viewedRow.id}`"
                        class="viewer-reserve-cancel">
                        Cancel
                    </router-link>
                    <router-link :to="`/edit/${viewedRow.id}`"
                        class="viewer-reserve-button">
                        Reserve
                    </router-link>
                </div>
            </div>

            <p style="white-space: pre-wrap;">
                {{ viewedRow.desc }}
            </p>
            <ViewerTable 
                title="DUT"
                :data="DUTData.filter(e => e.value != null)"
            />
            <ViewerTable 
                v-if="ControllerData !== null"
                title="Controller"
                :data="ControllerData.filter(e => e.value != null)"
            />
            <ViewerTable 
                title="WPS"
                :data="WPSData.filter(e => e.value != null)"
            />
            <ViewerTable v-if="viewedRow.Inventory"
                title="Inventory"
                :data="InventoryData.filter(e => e.value != null || e.title != null)"
            />

            <div class="flex-left">
                <router-link :to="`/edit/${viewedRow.id}`"
                    class="viewer-edit-button">
                    Edit information
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ViewerTable from '@/components/viewer/ViewerTable.vue'
import { store } from '@/store'

export default {
    name: 'ViewerContainer',
    props: ['viewedRow'],
    inject: ['popPopout'],
    components: {
        ViewerTable
    },
    computed: {
        ControllerData() {
            return this.viewedRow.Controller != undefined ? [{
                id: 0,
                title: "IP",
                value: this.viewedRow?.Controller?.IP,
                isCopiable: true
            },{
                id: 1,
                title: "MAC",
                value: this?.viewedRow.Controller?.MAC,
                isCopiable: true
            },{
                id: 2,
                title: "SN",
                value: this?.viewedRow.Controller?.SN,
                isCopiable: true
            }] : null
        },
        DUTData() {
            return [{
                id: 0,
                title: "IP",
                value: this.viewedRow.DUT.IP,
                isCopiable: true
            },{
                id: 1,
                title: "MAC",
                value: this.viewedRow.DUT.MAC,
                isCopiable: true
            },{
                id: 2,
                title: "SN",
                value: this.viewedRow.DUT.SN,
                isCopiable: true
            },{
                id: 3,
                title: "BMC IP",
                value: this.viewedRow.DUT.BMC,
                isCopiable: true
            },{
                id: 4,
                title: "KVM IP",
                value: this.viewedRow.DUT.KVM,
                isCopiable: true
            }]
        },
        WPSData() {
            return [{
                id: 0,
                title: "IP",
                value: this.viewedRow.WPS.IP,
                isCopiable: true
            },{
                id: 1,
                title: "Socket",
                value: this.viewedRow.WPS.Socket,
                isCopiable: false
            }]
        },
        InventoryData() {
            return this.viewedRow.Inventory.map(e=> ({title: e.name, value: e.info}))
        },
        star() {
            let stars = store.stars
            
            if (stars === null || stars === "")
                return false

            if (!stars.includes(this.viewedRow.id))
                return false
            
            return true
        },
        showBackground() {
        return store.userSettings.showBackground.value
        }
    },
    data() {
        return {
            clicked: false,
            activeClass: 'star filled clicked viewer-header-button',
            notActiveClass: 'star filled viewer-header-button',
            scrollDistance: 0,
            isReservePanelVisible: false
        }
    },
    mounted() {
        this.$el.focus()
    },
    methods: {
        removeView() {
            store.updateSelectedToView(null)
        },
        toggleStar() {
            this.clicked = true

            console.log(store.stars, this.clicked)

            if (
                store.stars.length === 0 ||
                !store.stars.includes(this.viewedRow.id)
                ) {
                store.addId(this.viewedRow.id)
                this.star = true
                console.log(this.popPopout)
                this.popPopout(`Added ${this.viewedRow.name} to stared`)
            }
            else {
                store.removeId(this.viewedRow.id)
                this.star = false
                this.popPopout(`Removed ${this.viewedRow.name} from stared`)
            }
        },
        scrollHandler(e) {
        this.scrollDistance = e.target.scrollTop
        },
        watch: {
            $route (){
                this.removeView()
            }
        },
        toggleReservePanel() {
            this.isReservePanelVisible = !this.isReservePanelVisible
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/config';

.viewer {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 35vw;
  min-width: 600px;
  background-color: $black;
  border-radius: $border_radius 0 0 $border_radius;
  z-index: 99;
  overflow-y: auto;

  h3 {
    text-align: center;
  }

  &.background {
    background-image: $viewer_image;
    background-position-y: 0;
    background-repeat: no-repeat;
    background-size: contain;
  }

  display: flex;
  flex-direction: column;
  outline: none;

  .viewer-status {
    display: flex;
    background-color: $copypin_color;
    padding: 1rem 1rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-radius: $border_radius;
    font-weight: 600;

    span {
        display: inline-flex;
        align-items: center;

        &::before {
            content: "";
            height: .65rem;
            width: .65rem;
            display: block;
            border-radius: $border_radius_max;
            margin-right: .5rem;
            background-color: $white;
        }
    }
  }

  .viewer-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .viewer-header-button {
    margin: 1rem;
    padding: .5rem;
    border-radius: $border_radius_max;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px transparent solid;

        &:hover {
            border: $border;
            background-color: rgba($white,.2);
        }
    }

    .viewer-body {
        padding: 2rem;
        padding-top: 0;
    }

  .viewer-icon {
    font-size: 3rem;
    padding: 2rem;
    padding-bottom: 0;
  }

  .green_viewer-status {
    $pin_color: $pin_green;
    background-color: mix($bg_color, $pin_color, 70%);
    color: $pin_color;

    span::before {
        background-color: $pin_color;
    }
  }

  .red_viewer-status {
    $pin_color: $pin_red;
    background-color: mix($bg_color, $pin_color, 70%);
    color: $pin_color;

    span::before {
        background-color: $pin_color;
    }
  }

  .yellow_viewer-status {
    $pin_color: $pin_yellow;
    background-color: mix($bg_color, $pin_color, 70%);
    color: $pin_color;

    span::before {
        background-color: $pin_color;
    }
  }

  .blue_viewer-status {
    $pin_color: $pin_blue;
    background-color: mix($bg_color, $pin_color, 70%);
    color: $pin_color;

    span::before {
        background-color: $pin_color;
    }
  }
}

.viewer-status_button {
    border-radius: $border_radius;
    border: none;
    background-color: rgba($white, .25);
    color: $white;
    font-size: 1em;
    padding: $s_padding;
    margin: -.25rem 0;
    cursor: pointer;
}

.viewer-edit-button {
    border: none;
    color: $white;
    background-color: $blue;
    border-radius: $border_radius_small;
    padding: $s_padding;
}

.viewer-reserve-button {
    border: none;
    $pin_color: $pin_green;
    background-color: mix($bg_color, $pin_color, 70%);
    color: $pin_color;
    border-radius: $border-radius_small;
    padding: $s_padding;
}

.viewer-reserve {
    margin-top: 1rem;
    background-color: $table_color;
    padding: 1rem 1rem;
    border-radius: $border_radius;

    .date {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    input[type="date"] {
        background-color: mix($table_color, $white, 70%);
        color: $white;
        border: none;
        padding: $s_padding;
        border-radius: $border_radius;

        &::-webkit-calendar-picker-indicator {
            filter: invert(1);
        }
    }
    .viewer-reserve-cancel {
        border: none;
        $pin_color: $white;
        background-color: mix($table_color, $pin_color, 70%);
        color: $pin_color;
        border-radius: $border-radius_small;
        padding: $s_padding;

    }

    .flex-left {
        gap: 1rem;
      }
}
</style>