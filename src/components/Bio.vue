<template>
  <v-container grid-list-md>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs8 offset-xs2>
          <p>
            Hitzak - words in Basque - is a Paris-based musical collective featuring
            a French guitarist and composer, a Scottish spoken-word performer, and their
            many friends. There were ten people in the group at the last count!
            The band's first album, Little Black Book, was released in September 2015,
            and they are in the process of writing its follow-up.
          </p><br />
        </v-flex>

        <v-flex
        v-for="card in members"
        xs12
        v-bind="{ [`md${card.flex}`]: true}"
        :key="card.name"
        >
          <Card
          :image="card.avatar"
          :height="card.flex == 6 ? '450px' : '350px'"
          :title="card.name"
          :subtitle="card.job"></Card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import Card from './custom/Card.vue'
export default {
  name: 'Bio',
  components: {
    Card
  },
  data () {
    return {
      members: [
        {
          flex: 6,
          name: 'Alex',
          avatar: '/photos/members/alex.png',
          job: 'Guitar / Composition'
        },
        {
          flex: 6,
          name: 'Stuart',
          avatar: '/photos/members/stuart.png',
          job: 'Voice / Writing',
        },
        {
          flex: 4,
          name: 'Guillaume',
          avatar: '/photos/members/guillaume.png',
          job: 'Keyboard / Saxo',
        },
        {
          flex: 4,
          name: 'Antoine',
          avatar: '/photos/members/antoine.png',
          job: 'Violin'
        },
        {
          flex: 4,
          name: 'Amélie',
          avatar: '/photos/members/amelie.png',
          job: 'Accordion',
        },
        {
          flex: 4,
          name: 'Clémentine',
          avatar: '/photos/members/clementine.png',
          job: 'Vocals'
        },
        {
          flex: 4,
          name: 'Alexandra',
          avatar: '/photos/members/alexandra.png',
          job: 'Vocals',
        },
        {
          flex: 4,
          name: 'Stéphane',
          avatar: '/photos/members/stephane.png',
          job: 'Double bass'
        },
        {
          flex: 4,
          name: 'Mathieu',
          avatar: '/photos/members/mathieu.png',
          job: 'Percussions'
        },
        {
          flex: 4,
          name: 'Thomas',
          avatar: '/photos/members/thomas.png',
          job: 'Cajon',
        }
      ]
    }
  },
}
</script>

<style scoped>
</style>
