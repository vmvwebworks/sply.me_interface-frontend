// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import {
  Vuetify,
  VApp,
  VAvatar,
  VCard,
  VDataTable,
  VDialog,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VSelect,
  VStepper,
  VSubheader,
  VRadioGroup,
  VToolbar,
  VTextField,
  VTabs,
  transitions
} from 'vuetify'
import './assets/style/main.styl'
Vue.use(Vuetify, {
  components: {
    VApp,
    VAvatar,
    VCard,
    VDataTable,
    VDialog,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VSelect,
    VStepper,
    VSubheader,
    VRadioGroup,
    VToolbar,
    VTextField,
    VTabs,
    transitions
  },
  theme: {
    primary: '#D4D2D4',
    secondary: '#2C3A47',
    thirdy: '#F1654C',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#282830',
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
require('dotenv').config()
Vue.use(VueChartkick, { Chartkick })
window.Chartkick = Chartkick
Chartkick.options = {
  colors: ['#EB6361', '#EE543A']
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
