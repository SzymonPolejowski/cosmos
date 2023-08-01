<template>
  <main
    @click="removeView()"
    :class="!isSidebarShown && `no-sidebar`"
  >
    <SidebarContainer
      v-if="isSidebarShown"
    />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.params?.id"/>
      </transition>
    </router-view>
    <Transition name="viewer">
      <ViewerContainer 
        v-if="selectedToView !== null"
        :viewedRow="selectedRow"
        />
  </Transition>
  <Transition name="bottom-fade">
    <div 
    v-if="isPopupVisible"
    class="popup">
      {{ popoutText }}
    </div>
  </Transition>
  <Transition name="left-fade">
    <div 
    v-if="isAlertVisible"
    class="alter">
      <div class="bold-text">!! Scheduled inaccessibility</div>
      <p>
        In {{ this.isAlertVisible }} service wont be available
      </p>
      <div class="flex-left">
          <button
            @click="handleCloseAlert"
          >
            Got it
          </button>
      </div>
    </div>
  </Transition>
  <Transition name="bottom-fade">
    <div 
    v-if="isUserSettingVisible"
    class="user-settings">
    <div class="user-settings-block">
      <div
        class="user-settings-icons-list">
        <div
          :class="userIcon === activeUserIcon ? 'user-settings-icon active' : 'user-settings-icon'"
          v-for="userIcon in userIconList"
          v-bind:key="userIcon"
          @click="setUserIcon(userIcon)"
        >
          {{ userIcon }}
        </div>
      </div>
      <div class="user-settings-id">
        <div>
          User ID
        </div>
        <input 
          type="text"
          v-model="user"
          id="userInput"
          ref="userInput"
          @change="handleUserChange">
      </div>
      <div class="user-settings-toggle"
        v-for="setting in userSettings"
        v-bind:key="setting"
      >
        <div>
          {{ setting.title }}
        </div>
        <div>
          <label class="toggle"
          tabindex="0">
            <input 
              type="checkbox"
              :checked="setting.value"
              @click="setting.set(!setting.value)"
            >
            <div class="toggle-slider">
            </div>
          </label>
        </div>
      </div>
      <div class="flex-left">
        <button
          @click="hideUserSetting"
        >
          Close
        </button>
      </div>
    </div>
    </div>
  </Transition>
</main>
</template>

<script>
import SidebarContainer from '@/components/sidebar/SidebarContainer.vue'
import ViewerContainer from '@/components/viewer/ViewerContainer.vue'
import onEsc from '@/mixins/onEsc.js'
import { store } from '@/store'

export default {
  name: 'App',
  mixins: [onEsc],
  data() {
    return {
      isPopupVisible: false,
      popoutText: "",
      popoutTimeout: null,
      isAlertVisible: store.inaccessibilityAlert || false,
      userIconList: store.userIconList,
      activeUserIcon: store.userIcon,
      user: store.userID
    }
  },
  methods: {
    onEsc() {
      store.updateSelectedToView(null)
      store.hideUserSetting()
    },
    removeView() {
      store.updateSelectedToView(null)
    },
    popPopout(text) {
      clearTimeout(this.popoutTimeout)
      this.popoutText = text
      this.isPopupVisible = true
      this.popoutTimeout = setTimeout(() => this.isPopupVisible = false, 3000)
    },
    handleCloseAlert() {
      this.isAlertVisible = false
    },
    hideUserSetting() {
      store.hideUserSetting()
    },
    setUserIcon(icon) {
      this.activeUserIcon = icon
      store.setUserIcon(this.activeUserIcon)
    },
    handleUserChange() {
      store.changeUserID(this.user)
    }
  },
  components: {
    ViewerContainer,
    SidebarContainer
  },
  computed: {
    selectedToView() {
      return store.selectedToView
    },
    selectedRow() {
      return store.table_rows.filter(e => e.id === this.selectedToView)[0]
    },
    isUserSettingVisible() {
      return store.isUserSettingVisible
    },
    userSettings() {
      return store.userSettings
    },
    isSidebarShown() {
      return this.$route.name !== 'info'
    }

  },
  provide(){
    return {
      popPopout: text => this.popPopout(text)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;0,900;1,900&display=swap');
@import '@/scss/config';


* {
  box-sizing: border-box;
}

html,body {
    font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  margin: 0;
  height: 100dvh;
  width: 100%;
  overflow-x: hidden;
  max-width: 100vw;
  overflow-y: hidden;
  color: $font_color;
  background-color: $sidebar_color;
}

a {
  color: inherit;
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(5rem);
  opacity: 0;
}

.alter {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 9999;
  padding: 1rem;
  background-color: $alert_color;
  border-radius: $border_radius;

  p {
    font-size: .9rem;
    margin-block: 0;
  }

  button {
    margin-top: 1rem;

    background-color: $white;
    border: none;
    border-radius: $border_radius_small;
    padding: $s_padding;

    cursor: pointer;
  }
}

.flex-left {
  display: flex;
  justify-content: flex-end;
}

.bold-text {
  font-weight: 700;
}

.popup {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  translate: -50% 0;
  z-index: 999999999;
  background-color: $popup_color;
  padding: $m_padding;
  border-radius: $border_radius;
}

.user-settings {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;

  background-color: rgba($dark_grey, 0.9);

  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;

  .user-settings-block {
    background-color: $bg_color;
    padding: 2rem;
    border-radius: $border_radius;
  }

  .user-settings-icons-list {
    display: flex;
    background-color: rgba($white,.1);
    border-radius: $border_radius;
    padding: 0 .5rem;
    margin-bottom: 1rem;
  }

  .user-settings-icon {
    background-color: rgba($white,.2);
    margin: 1rem .5rem;
    padding: .5rem;
    font-size: 1.25rem;
    height: 3rem;
    width: 3rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;

    &.active {
      background-color: rgba($white,.4);
    }
  }

  .user-settings-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;

    .user-settings-title-text {
      font-weight: 600;
      font-size: 1rem;
    }

    .user-settings-title-button {
      padding: .5rem;
      border-radius: 9999px;
      height: 2rem;
      width: 2rem;
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
  }

  .user-settings-toggle,
  .user-settings-id {
    padding: .5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user-settings-id input {
    @include outline;

    border-radius: $border-radius;
    border: $border;
    background-color: transparent;
    font: inherit;
    color: inherit;
    padding: $s_padding;
    text-align: right;

    &::placeholder {
        color: $border_color
    }
  }

  button {
    margin-top: 1rem;
    margin-left: 1rem;

    background-color: $white;
    border: none;
    border-radius: $border-radius_small;
    padding: $s_padding;

    cursor: pointer;

    &.green {
      background-color: $green;
      color: $white;
    }
  }
}

.toggle {
  @include outline;
  
  position: relative;
  display: inline-block;
  height: 1.5rem;
  width: 3rem;
  cursor: pointer;


  input {
    display: none;
  }

  .toggle-slider {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: $grey;
    border-radius: $border_radius;

    &::after {
      content: "";
      position: absolute;
      top: .25rem;
      left: .25rem;
      bottom: .25rem;
      background-color: $primary_color;
      width: 1rem;
      border-radius: $border-radius;
      transform: translateX(0rem);
      transition: all .1s ease-in-out;
    }
  }

  input:checked + .toggle-slider {
    background-color: $white;

    &::after {
      transform: translateX(1.5rem);
    }
  }
}

button {
  white-space: nowrap;
}

.flex-beetwen {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
