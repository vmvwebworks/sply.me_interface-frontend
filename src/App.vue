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
      clipped-left
      clipped-right

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

    <v-content fluid wrap>
      <router-view/>
    </v-content>
    <v-navigation-drawer style="overflow: scroll; max-height: 480px;"
      class="side header"
      flat
      clipped
      :right="right"
      v-model="rightDrawer"

      app
    >
    <v-flex>
      <v-toolbar color="secondary" flat>
        <v-toolbar-items>
          <v-text-field prepend-icon="search" solo-inverted flat full-width clearable placeholder="search"></v-text-field>
        </v-toolbar-items>
      </v-toolbar>
      <v-list two-line >
        <v-subheader>
          Following
        </v-subheader>
        <v-list-tile avatar v-for="item in items2" :key="item.text" @click="">
          <v-list-tile-action>
            <v-icon v-if="item.icon">star</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-avatar>
            <img :src="`https://randomuser.me/api/portraits/men/${item.avatar}.jpg`" alt="">
          </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
    </v-flex>
    </v-navigation-drawer>
    <v-footer
      class="footer"
      :inset="inset"
      fixed
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
      items: [
        {
        icon: 'person',
        title: 'Profile settings'
        },
        {
        icon: 'event_available',
        title: 'Subscription'
        },
        {
        icon: 'payment',
        title: 'Payment info'
        }
      ],
      items2: [
          { icon: false, text: 'Jason Oner', avatar: 78 },
          { text: 'Travis Howard', avatar: 28 },
          { text: 'Ali Connors', avatar: 38 },
          { text: 'Cindy Baker', avatar: 48 },
          { text: 'wei xanler', avatar: 68 },
          { text: 'gari esneider', avatar: 57 }
      ],
      right: true,
      rightDrawer: false,
      title: 'Sply.me'
    }
  },
  name: 'App'
}
</script>
