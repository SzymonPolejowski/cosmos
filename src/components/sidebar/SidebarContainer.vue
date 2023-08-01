<template>
    <aside>
        <div class="wrapper">
        <h2>
            <router-link to="/">    
                COSMOS VIEWER
            </router-link>
        </h2>
        <FavoriteContainer />
        <div class="user-info">
            <div class="user-icon">
                {{ userIcon }}
            </div>
            <div v-if="!isEdited" class="user-name">
                <span v-if="user === ''" class="user-name_empty">Empty</span>
                <div v-if="user !== ''">{{ user }}</div> 
            </div>
            <div v-if="isEdited" class="user-name">
                <input 
                    type="text"
                    v-model="user"
                    id="userInput"
                    ref="userInput"
                    @keyup.enter="handleUserChange">
            </div>
            <div 
                class="user-action"
                tabindex="0"
                @click="showUserSetting"
                @keyup.enter="showUserSetting"
                v-if="!isEdited">
                <img src="@/assets/vectors/settings.svg"/>
            </div>
            <div 
                class="user-action"
                tabindex="0"
                @click="handleUserChange"
                @keyup.enter="handleUserChange"
                v-if="isEdited">
                <img src="@/assets/vectors/check-mark.svg"/>
            </div>
            <Transition name="left-fade">
                <div
                    class="user-info_empty"
                    v-if="user === '' && openEmptyInfo && !isEdited">
                    <div class="bold-text">
                        No user ID entered
                    </div>
                    <p>Enter ID in order to reserve platforms</p>
                    <div class="user-info_empty_left">
                        <button @click="handleCloseUserEmpty">Got it!</button>
                    </div>
                </div>
            </Transition>
        </div>
        </div>
    </aside>
</template>

<script>
import FavoriteContainer from './FavoriteContainer.vue'
import { store } from '@/store'

export default {
    name: 'SidebarContainer',
    components: {
        FavoriteContainer
    },
  data() {
    return {
        isEdited: false,
        openEmptyInfo: true
    }
  },
  computed: {
        userIcon() {
            return store.userIcon
        },
        user() {
            return store.userID
        }
  },
  methods: {
    handleUserChange() {
        this.isEdited = !this.isEdited

        if (this.isEdited == false) {
            store.changeUserID(this.user)
        }
        else {
            this.$nextTick(() => {
                console.log(this.$refs.userInput)
                this.$refs.userInput.focus()
            })
        }
    },
    handleCloseUserEmpty() {
        this.openEmptyInfo = false
    },
    showUserSetting() {
        store.showUserSetting()
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/config';

.wrapper {
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    grid-template-columns: 100%;
    height: 100%;
    overflow-x: hidden;
}

aside {
    background-color: $sidebar_color;
    height: 100dvh;
    z-index: 99;
    position: relative;

    h2 {
        font-size: 1.5rem;
        font-weight: 800;
        font-style: italic;
        margin: 2rem;
        flex: 1;
        margin-block-end: 0;
    }

    .user-info {
        background-color: $bg_color;
        margin: 1rem;
        border-radius: $border_radius;
        display: flex;
        align-items: center;
        position: relative;

        .user-icon {
            background-color: rgba($white,.2);
            margin: 1rem;
            padding: .5rem;
            font-size: 1.25rem;
            height: 3rem;
            width: 3rem;
            border-radius: $border_radius_max;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
        }

        .user-name {
            font-size: 1.25rem;
            font-weight: 500;
            flex: 1;
            position: relative;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

            > div {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                width: 100%;
            }
        }

        .user-name_empty {
            color: #676b80;
        }

        .user-action {
            @include outline;

            margin: 1rem;
            padding: .5rem;
            border-radius: $border_radius_max;
            height: 3rem;
            width: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: 1px transparent solid;

            &:hover {
                border: $border;
            }

            img {
                height: 1.25em;
            }
        }

        input {
            @include outline;

            background: none;
            border: none;
            border-bottom: $border;
            font-weight: 500;
            font-family: inherit;
            font-size: inherit;
            width: 100%;
            color: $white;
        }

        .user-info_empty {
            position: absolute;
            right: 0;
            left: 0;
            bottom: 100%;
            z-index: 9999999;
            translate: 0 -1rem;

            padding: 1rem;
            background-color: $white;
            border-radius: $border_radius;
            color: $bg_color;

            p {
                font-size: .9rem;
                margin-block: 0;
            }
        }

        .user-info_empty_left {
            margin-top: 1rem;
            display: flex;
            justify-content: flex-end;

            button {
                border: none;
                background-color: $bg_color;
                color: $white;
                padding: $s_padding;
                border-radius: $border_radius;
                cursor: pointer;
            }
        }
    }
}

.left-fade-enter-active,
.left-fade-leave-active {
  transition: all .3s ease;
}

.left-fade-enter-from,
.left-fade-leave-to {
  transform: translateX(-20%);
  opacity: 0;
}

</style>