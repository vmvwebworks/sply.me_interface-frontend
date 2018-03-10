<template>
  <div>
    <v-toolbar flat class="subHeader">
      <v-tabs grow icons-and-text centered v-model="tabs" slider-color="selector" color="transparent">
        <v-tab>
          <v-icon x-large>map</v-icon> Region
        </v-tab>
        <v-tab>
          <v-icon x-large>list</v-icon> Details
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item >
      </v-tab-item>
      <v-tab-item >
        <userslist></userslist>
      </v-tab-item>
    </v-tabs-items>

  </div>
</template>
<script>
import UsersList from '../components/UsersList.vue'
export default {
  data () {
    return {
      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  components: {
    userslist: UsersList
  },
  name: 'App'
}
</script>
