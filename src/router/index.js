import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditView from '../views/EditView.vue'
import EditGeneral from '@/components/edit/EditGeneral.vue'
import EditDUT from '@/components/edit/EditDUT.vue'
import EditController from '@/components/edit/EditController.vue'
import EditWPS from '@/components/edit/EditWPS.vue'
import EditInventory from '@/components/edit/EditInventory.vue'
import InfoView from '../views/InfoView.vue'
import { store } from '../store.js'

const routes = [
  {
    path: '/',
    alias: '/search/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Search Platforms - Cosmos Viewer'
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditView,
    props: true,
    meta: {
      title: `Edit Platform - Cosmos Viewer`
    },
    children: [{
      path: '',
      alias: 'general',
      name: 'EditGeneral',
      component: EditGeneral
    },{
      path: 'DUT',
      name: 'EditDUT',
      component: EditDUT
    },{
      path: 'Controller',
      name: 'EditController',
      component: EditController
    },{
      path: 'WPS',
      name: 'EditWPS',
      component: EditWPS
    },{
      path: 'Inventory',
      name: 'EditInventory',
      component: EditInventory
    }]
  },
  {
    path: '/info/:id',
    name: 'info',
    component: InfoView,
    props: true,
    meta: {
      title: `Home - Cosmos Viewer`
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((toRoute, fromRoute, nextRoute) => {
  window.document.title = toRoute?.meta?.title || 'Cosmos Viewer',
  store.updateSelectedToView(null)
  nextRoute();
})

export default router
