<template>
  <v-app class="main">
    <v-navigation-drawer
      class="side header"
      flat
      clipped
      v-model="drawer"
      enable-resize-watcher
      fixed
      app>
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
      height="100px"
      fixed
      class="header"
      app
      flat
      :clipped-left="clipped"
      clipped
    >
      <v-toolbar-items>
        <v-btn block flat @click.stop="drawer = !drawer">
          <v-icon large>menu</v-icon>
        </v-btn>
        <v-btn flat>
        <img src="@/assets/dialog_medium.png" height="100%">
        </v-btn>
      </v-toolbar-items>
      <v-spacer>
        <v-text-field prepend-icon="search" size="12" solo-inverted flat full-width clearable placeholder="search"></v-text-field>
      </v-spacer>
      <v-toolbar-items>
        <v-btn block flat @click.stop="rightDrawer = !rightDrawer">
          <v-icon large>menu</v-icon>
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      class="side header"
      flat
      clipped
      enable-resize-watcher
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >

    </v-navigation-drawer>
    <v-footer
      class="footer"
      fixed
      :inset="inset"
      height="120px"
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      inset: false,
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
      title: 'Sply.me'

    }
  },
  name: 'App'
}
</script>
