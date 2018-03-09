// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {
  Vuetify,
  VApp,
  VDataTable,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VTextField,
  VTabs,
  transitions
} from 'vuetify'
import './assets/style/main.styl'
Vue.use(Vuetify, {
  components: {
    VApp,
    VDataTable,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTextField,
    VTabs,
    transitions
  },
  theme: {
    primary: '#EDEBED',
    secondary: '#2C3A47',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#E4E4E4',
    success: '#4CAF50',
    warning: '#FFC107',
    main: '#1e272e',
    header: '#57606f',
    subHeader: '#557780',
    selector: '#E67E22',
    footer: '#2f3542',
    side: '#485460'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
