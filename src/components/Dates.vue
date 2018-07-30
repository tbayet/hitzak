<template>
  <v-container grid-list-md>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <v-data-table
              :headers="headers"
              :items="dates"
              :pagination.sync="pagination"
              hide-actions
              class="elevation-1"
            >
              <template slot="headerCell" slot-scope="props">
                <span>
                  {{ props.header.text }}
                </span>
              </template>
              <template slot="items" slot-scope="props">
                <tr :style="(dateUp(props.item.date)) ? {'background': '#ffffff', 'background': 'linear-gradient(to left, #ffffff 80%, #0cff00 100%)'} : {'background': '#ffffff', 'background': 'linear-gradient(to right, #ffffff 30%,#cccccc 100%)'}">
                  <td width="18%" class="text-xs-left">{{props.item.date}}</td>
                  <td width="42%" class="text-xs-left">{{props.item.place}} - <i>{{props.item.city}}</i></td>
                  <td width="30%" class="text-xs-left">{{props.item.name}}</td>
                  <td width="10%" class="text-xs-right px-2">
                    <v-btn :href="props.item.link" target="_blank" icon>
                      <v-icon>forward</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
            
            <div class="text-xs-center pt-2">
              <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
            </div>
          </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
const jsonDates = require("../assets/dates.json")

export default {
  name: 'Bio',
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0
      this.pagination.rowsPerPage = 10
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },
  methods: {
    dateUp: (str) => (new Date().getTime() < new Date(str).getTime())
  },
  data () {
    return {
      pagination: {},
      headers: [{
              text: 'Date',
              align: 'left',
              sortable: false,
              value: 'date'
            },{
              text: 'Place',
              align: 'left',
              sortable: false,
              value: 'place'
            },{
              text: 'Live',
              align: 'left',
              sortable: false,
              value: 'name'
            },{
              text: 'Link',
              align: 'center',
              sortable: false,
              value: 'link'
            }],
      dates: jsonDates
    }
  }
}
</script>

<style scoped>
</style>
