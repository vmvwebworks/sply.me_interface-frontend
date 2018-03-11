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
        <v-btn flat>
        <img src="@/assets/chat.png" height="100%">
        </v-btn>
      </td>
    </template>
    <template slot="footer" class="main">

    </template>
  </v-data-table>
</template>

<script>
export default {
  data () {
    return {
      perPageItems: [25,50,100,{"text":"All","value":-1}],
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
