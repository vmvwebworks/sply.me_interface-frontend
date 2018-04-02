<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs6>
        <v-flex>
          <v-text-field
            <v-text-field flat solo-inverted label="Username" v-model="Username"></v-text-field>
          </v-text-field>
        </v-flex>
        <v-flex>
          <v-select :items="region" v-model="e1" label="Region" flat solo-inverted full-width prepend-icon="map" hide-details></v-select>
        </v-flex>
        <v-flex>
          <v-select :items="language" v-model="e1" label="Language" flat solo-inverted full-width prepend-icon="map" hide-details></v-select>
        </v-flex>
      </v-flex>
      <v-flex xs6>
        <v-card class="side" flat>
        <v-card-title primary-title>
          <div>
            <div class="display-3 primary--text">Price</div>
            <span class="primary--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>
      </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      e1: null,
      e2: 'Arkansas',
      e3: null,
      e4: null,
      items: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ],
      region: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ]
    }
  }
}
</script>
