<template>
  <div class="searchbar-container">
    <label for="search">
    <div 
      :class="showBackground ? 'searchbar background' : 'searchbar'">
      <input 
        type="text" 
        id="search" 
        placeholder="Search by names, IPs, MAC, SN..."
        :value="searchInput"
        @input="e => this.$emit('inputChange', e)">
      <img src="@/assets/vectors/Satelite.svg">
    </div>
  </label>
  </div>
</template>

<script>
import { store } from "@/store";

export default {
  name: 'SearchbarContainer',
  props: ['searchInput'],
  emits: ['update:searchInput', 'inputChange'],
  computed: {
    showBackground() {
      return store.userSettings.showBackground.value
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/config';

.searchbar-container {
  margin: 2rem;
  margin-bottom: 1rem;
}

.searchbar {
  @include outline-within;

  width: 100%;
  max-width: 800px;
  background-color: $dark_color;
  border-radius: $border_radius;
  padding: 1rem;
  display: flex;
  cursor: text;

  &.background {
    background-image: $searchbar_image;
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-size: contain;
  }

  input {
    font-size: 1rem;
    flex: 1;
    border: none;
    background: none;
    outline: none;
    color: $font_color;
    font-weight: 600;

    &::placeholder {
      color: lighten($primary_color, 50%);
    }
  }

  img {
    height: 1.5rem;
  }
}
</style>
