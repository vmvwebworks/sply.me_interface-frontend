<template>
  <v-data-table
    :headers="headers"
    :items="items"
    expand
    class="elevation-1"
    :rows-per-page-items="perPageItems"
  >
    <template slot="items" slot-scope="props">
      <td class="display-1 info--text text-xs-center">{{ props.item.username }}</td>
      <td class="display-1 info--text text-xs-center" >{{ props.item.language }}</td>
      <td class="display-1 info--text text-xs-center">{{ props.item.region }}</td>
      <td class="display-1 info--text text-xs-center">{{ props.item.price }}</td>
      <td class="display-1 info--text text-xs-center">{{ props.item.available }}</td>
      <td class="justify-center layout px-0">
        <v-btn @click.stop="dialog = true" flat>
          <img src="@/assets/chat.png" height="100%">
        </v-btn>
        <v-dialog v-model="dialog" hide-overlay max-width="800">
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step step="1" :complete="e1 > 1">Choose request type (service/exchange)</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2" :complete="e1 > 2">Joining list</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3">Confirmation</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card>
                  <v-card-text style="height: 300px;">
                    <v-radio-group v-model="radioGroup" row>
                      <v-radio label="Service" value="service" prepend-icon="compare_arrows"></v-radio>
                      <v-radio label="Exchange" value="exchange"></v-radio>
                    </v-radio-group>
                  </v-card-text>
                </v-card>
                </v-card>
                <v-btn @click.native="e1 = 2">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
                <v-card>
                  <v-data-table :headers="joinedList" :items="items" hide-actions  >
                    <template slot="items" slot-scope="props">
                      <td>{{ props.item.username }}</td>
                      <td class="justify-center layout px-0">
                        <v-btn icon class="mx-0">
                          <v-icon color="teal">edit</v-icon>
                        </v-btn>
                      </td>
                    </template>
                  </v-data-table>
                </v-card>
                <v-btn @click.native="e1 = 3">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>
              <v-stepper-content step="3">
                <v-card></v-card>
                <v-btn @click.native="e1 = 1">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-dialog>
      </td>
    </template>
    <template slot="footer" class="main">
    </template>
  </v-data-table>
</template>

<script>
export default{
  data () {
    return {
      dialog: false,
      e1: 0,
      perPageItems: [25, 50, 100, {'text': 'All', 'value': -1}],
      joinedList: [
        {
          text: 'Username',
          align: 'center',
          value: 'username'
        },
        {
          text: 'Accept',
          align: 'center',
          value: 'accept'
        }
      ],
      headers: [
        {
          text: 'Username',
          align: 'center',
          sortable: true,
          value: 'username'
        },
        {
          text: 'Language',
          align: 'center',
          sortable: true,
          value: 'language'
        },
        {
          text: 'Region',
          align: 'center',
          sortable: true,
          value: 'region'
        },
        { text: 'Price',
          align: 'center',
          sortable: true,
          value: 'price'
        },
        {
          text: 'Available',
          align: 'center',
          sortable: true,
          value: 'available'
        },
        {
          text: 'request',
          align: 'center',
          value: 'request'
        }
      ],
      items: [
        {

          username: 'xac',
          language: 'english',
          region: 'England',
          price: 24,
          available: true
        },
        {

          username: 'raian',
          language: 'english',
          region: 'England',
          price: 36,
          available: true
        },
        {

          username: 'Güiliam',
          language: 'english',
          region: 'England',
          price: 30,
          available: false
        },
        {

          username: 'maiquel',
          language: 'english',
          region: 'England',
          price: 16,
          available: false
        },
        {

          username: 'Güiliam',
          language: 'english',
          region: 'England',
          price: 30,
          available: false
        },
        {

          username: 'maiquel',
          language: 'english',
          region: 'England',
          price: 16,
          available: false
        },
        {

          username: 'estiven',
          language: 'english',
          region: 'England',
          price: 22,
          available: true
        }
      ]
    }
  }
}
</script>
