<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-toolbar
          fixed
          flat
          tabs>
        <v-tabs
          centered
          color="subHeader"
          slot="extension"
          slider-color="selector"
          v-model="model"
        >

          <v-tab
            v-for="i in 3"
            :key="i"
            :href="`#tab-${i}`"
          >
            Item {{ i }}
          </v-tab>
        </v-tabs>
        </v-toolbar>
        <img src="https://i2.wp.com/www.perusmart.com/wp-content/uploads/2015/07/shut_up_and_take_my_money_by_lolikips-d34yx16.png?fit=700%2C394" alt="Vuetify.js" class="mb-5">
        <v-tabs-items v-model="model">
          <v-tab-item
            v-for="i in 3"
            :key="i"
            :id="`tab-${i}`"
          >
            <v-card flat>
              <v-card-text v-text="text"></v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <!-- <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5"> -->
        <blockquote>
          &#8220;Speak and take my money.&#8221;
          <footer>
            <small>
              <em>&mdash;Philip J.Fray</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
blockquote {
  color: #d2dae2;
}
</style>
<script>
export default {
  data () {
    return {
      model: 'tab-2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  name: 'App'
}
</script>
