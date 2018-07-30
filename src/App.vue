<template>
  <v-app>
    <v-toolbar app dark :class="{'c-transparent' : !scrolled}">
      <v-tabs fixed-tabs dark color="transparent">
        <v-tab flat to="dates">Dates</v-tab>
        <v-tab flat to="/bio">Bio</v-tab>
        <v-tab flat to="/lyrics">Lyrics</v-tab>
        <v-tab flat to="/gallery">Gallery</v-tab>
      </v-tabs>

      <v-btn href="https://www.youtube.com/user/hitzakband/videos" title="Youtube" target="_blank" icon>
        <v-icon>fab fa-youtube</v-icon>
      </v-btn>
      <v-btn href="https://hitzak.bandcamp.com/" title="Bandcamp" target="_blank" icon>
        <v-icon>fab fa-bandcamp</v-icon>
      </v-btn>
      <v-btn href="https://www.facebook.com/hitzakband/" title="Facebook" target="_blank" icon>
        <v-icon>fab fa-facebook</v-icon>
      </v-btn>
    </v-toolbar>

    <v-parallax dark height="380" src="/photos/bataclan_scene.png">
      <v-layout align-center column justify-center>
        <h1> Hitzak </h1>
      </v-layout>
    </v-parallax>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  title: 'Hitzak',
  methods: {
    handleScroll () {
      if ((window.scrollY > 300 && !this.scrolled)
        || (window.scrollY < 300 && this.scrolled))
        this.scrolled = !this.scrolled
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data () {
    return {
      title: 'Hitzak',
      scrolled: false
    }
  }
}
</script>

<style scoped>

.c-transparent {
  opacity: 0.7;
}
h1 {
  font-size: 5em;
  text-shadow: 5px 5px 5px black;
}

</style>
