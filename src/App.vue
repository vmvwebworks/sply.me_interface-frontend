<template>
  <v-app class="main">
    <v-navigation-drawer class="side header" flat :clipped="clipped" :inset="inset" v-model="drawer" enable-resize-watcher fixed app>
      <v-list class="side">
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      class="header"
      app
      flat
      tabs
      :clipped-left="clipped"
      clipped
    >
      <v-btn icon  @click.stop="drawer = !drawer">
        <v-icon >menu</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-toolbar-title v-text="slogan"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer class="footer"
      inset
      height="120px"
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      inset: true,
      clipped: true,
      flat: true,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      right: true,
      rightDrawer: false,
      title: 'Sply.me',
      slogan: '¡Habla y toma mi dinero!'
    }
  },
  name: 'App'
}
</script>
