<template>
<div :class="showBackground ? 'home background' : 'home'" 
  @scroll="scrollHandler"
  tabindex="-1"
  :style="{backgroundPositionY: -0.5 * scrollDistance + 'px'}">
  <div>
    <nav>
      <SearchbarContainer
        :searchInput="searchInput"
        @inputChange="handleSearchbar"
        @contextmenu="handleContextmenu"
      />
      <FiltersContainer/>
    </nav>
    <TableContainer
    :table_rows="filteredList"
    @click.stop=""/>
    <Transition name="btt">
      <div 
      v-if="isScrolled" 
      v-on:click="scrollUp"
      class="back-to-top"></div>
    </Transition>
  </div>
  <footer>
  Make by 🛸 and ETH FW Tech Team: dpiotr1x and spolejox
  </footer>
</div>
</template>

<script>
// @ is an alias to /src
import SearchbarContainer from '@/components/searchbar/SearchbarContainer.vue'
import FiltersContainer from '@/components/filters/FilterContainer.vue'
import TableContainer from '@/components/table/TableContainer.vue'
import { store } from '@/store'

export default {
  name: 'HomeView',
  components: {
    FiltersContainer,
    TableContainer,
    SearchbarContainer
  },
  inject: ['popPopout'],
  data() {
    return {
      isScrolled: false,
      searchInput: "",
      table_rows: store.table_rows,
      tempList: [],
      scrollDistance: 0
    }
  },
  methods: {
    handleSearchbar(e) {
      this.searchInput = e.target.value
    },
    handleContextmenu(e) {
      if (!this.clearOnRightClick)
        return

      e.preventDefault()
      this.searchInput = ""
    },
    isSearched(filled) {
      return filled !== null && filled !== undefined && filled.toLowerCase().includes(this.searchInput.toLowerCase())
    },
    scrollHandler(e) {
      this.isScrolled = e.target.scrollTop > 50,
      this.scrollDistance = e.target.scrollTop
    },
    scrollUp() {
      document.querySelector(".home").scrollTo({top: 0, behavior: 'smooth'});
    },
    handleFocusOut() {
        store.updateSelectedToView(null)
    },
    sortByNames(a, b) {
      const [nameA, nameB] = [a, b].map(e => e.name.toLowerCase())

      return (nameA > nameB) ? 1 : -1
    },
    sortByStatus(a, b) {
      const [statusA, statusB] = [a, b].map(e => e.status)

      return (statusA > statusB) ? 1 : -1
    },
    sortByDUTIP(a, b) {
      const [IPA, IPB] = [a, b].map(e => e?.DUT?.IP || 'zzzzzzzzzz')

      return (IPA > IPB) ? 1 : -1
    },
    sortByControllerIP(a, b) {
      const [IPA, IPB] = [a, b].map(e => e?.Controller?.IP || 'zzzzzzzzzz')

      console.log([IPA, IPB])

      return (IPA > IPB) ? 1 : -1
    },
    sortByWPSIP(a, b) {
      const [IPA, IPB] = [a, b].map(e => e?.WPS?.IP || 'zzzzzzzzzz')

      return (IPA > IPB) ? 1 : -1
    },
    sortByOwner(a, b) {
      const [ownerA, ownerB] = [a, b].map(e => e?.owner || 'zzzzzzzzzz')

      return (ownerA > ownerB) ? 1 : -1
    }
  },
  computed: {
    filteredList() {
      let tempList = this.table_rows

      if (this.sortBy === 'name')
        tempList = tempList.sort((a, b) => this.sortByNames(a, b))
      else if (this.sortBy === 'DUT')
        tempList = tempList.sort((a, b) => this.sortByDUTIP(a, b))
      else if (this.sortBy === 'status')
        tempList = tempList.sort((a, b) => this.sortByStatus(a, b))
      else if (this.sortBy === 'Controller')
        tempList = tempList.sort((a, b) => this.sortByControllerIP(a, b))
      else if (this.sortBy === 'WPS')
        tempList = tempList.sort((a, b) => this.sortByWPSIP(a, b))
      else if (this.sortBy === 'owner')
        tempList = tempList.sort((a, b) => this.sortByOwner(a, b))

      if (this.orderAsc)
        tempList = tempList.reverse()

      tempList = tempList.filter(row => row.status !== 4)

      if (store.showAvalible === true)
        tempList = tempList.filter(row => row.status === 0)

      if (this.usedFilters.length !== 0) 
        tempList = tempList.filter(row => this.usedFilters.includes(row.project))


      return this.searchInput === "" ? tempList: tempList.filter(row => {
        const searchBy = [
          row.name,
          row.DUT.IP,
          row.DUT.MAC,
          row?.Controller?.IP,
          row.WPS.IP,
          row.owner
        ]

        return (searchBy.some(e => this.isSearched(e)))
      })
    },
    usedFilters() {
      return store.usedFilters
    },
    showBackground() {
      return store.userSettings.showBackground.value
    },
    clearOnRightClick() {
      return store.userSettings.clearOnRightClick.value
    },
    sortBy() {
      return store.sortBy
    },
    orderAsc() {
      return store.orderAsc
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/config';

.home {
  background-color: $bg_color;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  border-radius: $border_radius 0 0 $border_radius;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.background {
    background-image: $home_image;
    background-position-y: 0;
    background-size: contain;
    background-repeat: no-repeat;
  }
}

main {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 5fr;
  height: 100dvh;

  &.no-sidebar {
    grid-template-columns: 1fr;
  }
}

h1 {
  margin: 2rem;
  font-size: 3rem;
  font-weight: 800;
  font-style: italic;
  margin-bottom: 0;
}

.back-to-top {
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  width: 4rem;
  height: 4rem;
  background-color: $dark_color;
  border-radius: $border_radius_max;
  background-image: $arrow_image;
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    animation: back-to-top .6s ease-in-out forwards;
  }
}

@keyframes back-to-top {
  0% {
    background-position: center center;
  }

  50% {
    background-position: center -150%;
  }

  50.0001% {
    background-position: center 150%;
  }

  100% {
    background-position: center center;
  }
}

.btt-enter-active,
.btt-leave-active {
  transition: all .2s ease;
}

.btt-enter-from,
.btt-leave-to {
  translate: 0 2rem;
  opacity: 0;
}

.viewer-enter-active,
.viewer-leave-active {
  transition: translate .3s cubic-bezier(0,.64,.14,1);
}

.viewer-enter-from,
.viewer-leave-to {
  translate: 100% 0;
}

footer {
  padding: 2rem;
  background-color: #303652;
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
.bottom-fade-enter-active,
.bottom-fade-leave-active {
  transition: all .3s ease;
}

.bottom-fade-enter-from,
.bottom-fade-leave-to {
  transform: translateY(20%);
  opacity: 0;
}
</style>