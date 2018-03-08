<template>
  <div>
    <v-toolbar class="subHeader">
      <v-tabs centered v-model="tabs" slider-color="selector" color="transparent">
        <v-tab>
          <v-icon x-large>map</v-icon> Region
        </v-tab>
        <v-tab>
          <v-icon x-large>list</v-icon> Details
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-container fluid>
      <v-tabs-items v-model="tabs">
        <v-tab-item v-for="n in 2" :key="n">
          <v-card>
            <v-card-text>
              {{ text }}
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  name: 'App'
}
</script>
