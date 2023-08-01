<template>
    <div class="edit background">
        <h2>Edit platform information</h2>
        <div class="edit-wrapper">
            <nav
                class="edit-nav">
                <div
                    class="edit-nav-view-switcher"    
                >
                    <router-link :to="`/edit/${selectedId}`" class="switch">
                        General
                    </router-link>
                    <router-link :to="`/edit/${selectedId}/DUT`" class="switch">
                        DUT
                    </router-link>
                    <router-link :to="`/edit/${selectedId}/Controller`" class="switch">
                        Controller
                    </router-link>
                    <router-link :to="`/edit/${selectedId}/WPS`" class="switch">
                        WPS
                    </router-link>
                    <router-link :to="`/edit/${selectedId}/Inventory`" class="switch">
                        Inventory
                    </router-link>
                </div>
                <button
                    @click="updatePlatform"
                    :class="isUpdating && `updating`"
                >
                    ✔ Save
                </button>
            </nav>
            <div class="edit-icon-panel">
                <div class="edit-icon">
                    🚀
                </div>
                <div class="edit-icon-info">
                    <h3>{{ platform.name }}</h3>
                    <h4>#{{ platform.id }}</h4>
                </div>
            </div>
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component 
                    :is="Component" 
                    :key="$route.params?.id"
                    :platform="platform"/>
              </transition>
            </router-view>
        </div>
    </div>
</template>

<script>
import { store } from '@/store'

export default {
    name: 'EditView',
    inject: ['popPopout'],
    data() {
        return {
            table_rows: store.table_rows,
            viewedTab: 'General',
            isUpdating: false
        }
    },
    computed: {
        platform() {
            return store.editedRow
        },
        selectedId() {
            return +this.$route.params?.id
        },
        today() {
            const date = new Date()

            return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        }
    },
    created() {
        store.createCopy(this.selectedId)
    },
    methods: {
        updatePlatform() {
            this.isUpdating = true

            setTimeout(() => {
                store.updatePlatform(this.selectedId)
                this.isUpdating = false
                this.popPopout("Zapisano!")
            }, 2000)
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/_config.scss';

.edit {
    background-color: $bg_color;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    border-radius: $border_radius 0 0 $border_radius;
    display: flex;
    flex-direction: column;
    padding: $xl_padding;

    &.background {
        background-image: $edit_image;
        background-position-y: 0;
        background-size: contain;
        background-repeat: no-repeat;
    }

    h2 {
        font-size: 2rem;
        margin-block: 0;
        margin-bottom: 2rem;
    }

    .edit-wrapper {
        background-color: $sidebar_color;
        border-radius: $border_radius;
        flex: 1;
        overflow-x: hidden;
    }
}

.edit-nav {
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $sidebar_color;
    border-radius: $border_radius $border_radius 0 0;

    .edit-nav-view-switcher {
        display: flex;
        gap: 2rem;

        a {
            @include outline;
            position: relative;
            user-select: none;

            &::after {
                content: "";
                position: absolute;
                bottom: -4px;
                right: -4px;
                left: -4px;
                border-bottom: 1px $white solid;
                transform: scaleX(0);
                transition: transform .1s ease-in-out;
            }

            &:hover::after {
                transform: scaleX(.3);
            }

            &.router-link-exact-active::after {
                transform: scaleX(1);
            }
        }
    }

    button {
        @include outline;

        border: none;
        background-color: mix($bg_color, $pin_green, 70%);
        color: $pin_green;
        border-radius: $border-radius_small;
        font: inherit;
        font-size: 1rem;
        padding: $s_padding;
        position: relative;

        transition: all .1s ease-in-out;

        &::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            height: 1rem;
            width: 1rem;
            border-radius: $border-radius_max;
            border: .1rem solid $pin_green;
            border-bottom: .1rem solid transparent;
            animation: save-button 1s linear infinite;
            transform-origin: 0 0;
            opacity: 0;

            transition: opacity .3s ease-in-out;
        }

        &.updating {
            color: transparent;
            scale: 1.1;

            &::after {
                opacity: 1;
            }
        }
    }
}

@keyframes save-button {
    from {
        rotate: 0deg;
    }
    to {
        rotate: 359deg;
    }
}

.edit-container {
    margin: 0 4rem;
}

.edit-icon-panel {
    display: flex;
    align-content: center;
    margin: 0 4rem;
    margin-bottom: 2rem;

    .edit-icon {
        font-size: 4rem;
        margin-right: 2rem;
    }

    h3, h4 {
        padding-block: 0;
        margin-block: 0;
        font-weight: 600;
    }

    h3 {
        font-size: 2rem;
    }

    h4 {
        font-size: 1.25rem;
        color: $grey;
        font-style: italic;
    }

    .edit-icon-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

.edit-textarea {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}

label {
    margin-bottom: .5rem;
}

textarea {
    @include outline;

    border-radius: $border-radius;
    border: $border;
    background-color: transparent;
    font: inherit;
    color: inherit;
    padding: $s_padding;
    resize: none;
}

.edit-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
    padding-top: 1rem;
}

.edit-input {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 1rem;

    label {
        position: absolute;
        bottom: calc(100%);

    }

    input {
        @include outline;

        border-radius: $border-radius;
        border: $border;
        background-color: transparent;
        font: inherit;
        color: inherit;
        padding: $s_padding;

        &::placeholder {
            color: $border_color
        }

        &.invalid {
            border: 1px $red solid;
            background-color: rgba($red, .2);
        }
    }
}

</style>