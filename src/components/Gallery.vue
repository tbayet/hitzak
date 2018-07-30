<template>
  <v-container>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap justify-center>
        <v-flex xs12 mb-1 text-xs-center>
          <h3>{{albums[selectedGallery].name}}</h3>
          <a v-if="albums[selectedGallery].auteur"
          :href="albums[selectedGallery].auteurLink" target="_blank"
          >
            crédits à {{albums[selectedGallery].auteur}}
          </a>
          <br v-else />
        </v-flex>
        <v-flex xs12>
          <v-carousel hide-delimiters style="background-color: black">
            <v-carousel-item class="c-fit"
              v-for="(photo, i) in albums[selectedGallery].photos"
              :key="i"
              :src="photo"
            >
            </v-carousel-item>
          </v-carousel>
        </v-flex>

        <v-flex style="text-align:center; cursor: pointer"
        xs12 sm5 md4 lg3 xl2 mt-3 v-for="(album, i) in albums" :key="i"
        >
          <div style="display:inline-block" v-on:click="selectGallery(i)">
            <Preview class="elevation-5"
            :pictures="album.photos" :title="album.name"
            ></Preview>
          </div>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import Preview from './custom/Preview.vue'
export default {
  name: 'Gallery',
  methods: {
    triggerClick() {
    }
  },
  components: {
    Preview
  },
  data () {
    return {
      selectGallery: (index) => {
        this.selectedGallery = index
      },
      albums: [
        {
          name: 'Bataclan',
          photos: [
            "/photos/bataclan/01.jpg",
            "/photos/bataclan/02.jpg",
            "/photos/bataclan/03.jpg",
            "/photos/bataclan/04.jpg",
            "/photos/bataclan/05.jpg",
            "/photos/bataclan/06.jpg",
            "/photos/bataclan/07.jpg",
            "/photos/bataclan/08.jpg",
            "/photos/bataclan/09.jpg",
            "/photos/bataclan/10.jpg",
            "/photos/bataclan/11.jpg",
            "/photos/bataclan/12.jpg",
            "/photos/bataclan/13.jpg",
            "/photos/bataclan/14.jpg",
            "/photos/bataclan/15.jpg"
          ],
          auteur: 'Alexandre FAU',
          auteurLink: 'https://500px.com/alexandrefau'
        },
        {
          name: 'Emergenza rounds',
          photos: [
            "/photos/emergenza/01.jpg",
            "/photos/emergenza/02.jpg",
            "/photos/emergenza/03.jpg",
            "/photos/emergenza/04.jpg",
            "/photos/emergenza/05.jpg",
            "/photos/emergenza/06.jpg",
            "/photos/emergenza/07.jpg",
            "/photos/emergenza/08.jpg",
            "/photos/emergenza/09.jpg",
            "/photos/emergenza/10.png",
            "/photos/emergenza/11.jpg",
            "/photos/emergenza/12.png",
            "/photos/emergenza/13.jpg",
            "/photos/emergenza/14.png",
            "/photos/emergenza/15.jpg",
            "/photos/emergenza/16.jpg",
            "/photos/emergenza/17.jpg",
            "/photos/emergenza/18.jpg",
            "/photos/emergenza/19.jpg",
            "/photos/emergenza/20.jpg",
            "/photos/emergenza/21.jpg"
          ],
          auteur: '',
          auteurLink: ''
        },
        {
          name: 'Emergenza rounds',
          photos: [
            "/photos/emergenza/01.jpg",
            "/photos/emergenza/02.jpg",
            "/photos/emergenza/03.jpg",
            "/photos/emergenza/04.jpg",
            "/photos/emergenza/05.jpg",
            "/photos/emergenza/06.jpg",
            "/photos/emergenza/07.jpg",
            "/photos/emergenza/08.jpg",
            "/photos/emergenza/09.jpg",
            "/photos/emergenza/10.png",
            "/photos/emergenza/11.jpg",
            "/photos/emergenza/12.png",
            "/photos/emergenza/13.jpg",
            "/photos/emergenza/14.png",
            "/photos/emergenza/15.jpg",
            "/photos/emergenza/16.jpg",
            "/photos/emergenza/17.jpg",
            "/photos/emergenza/18.jpg",
            "/photos/emergenza/19.jpg",
            "/photos/emergenza/20.jpg",
            "/photos/emergenza/21.jpg"
          ],
          auteur: '',
          auteurLink: ''
        },
        {
          name: 'Emergenza rounds',
          photos: [
            "/photos/emergenza/01.jpg",
            "/photos/emergenza/02.jpg",
            "/photos/emergenza/03.jpg",
            "/photos/emergenza/04.jpg",
            "/photos/emergenza/05.jpg",
            "/photos/emergenza/06.jpg",
            "/photos/emergenza/07.jpg",
            "/photos/emergenza/08.jpg",
            "/photos/emergenza/09.jpg",
            "/photos/emergenza/10.png",
            "/photos/emergenza/11.jpg",
            "/photos/emergenza/12.png",
            "/photos/emergenza/13.jpg",
            "/photos/emergenza/14.png",
            "/photos/emergenza/15.jpg",
            "/photos/emergenza/16.jpg",
            "/photos/emergenza/17.jpg",
            "/photos/emergenza/18.jpg",
            "/photos/emergenza/19.jpg",
            "/photos/emergenza/20.jpg",
            "/photos/emergenza/21.jpg"
          ],
          auteur: '',
          auteurLink: ''
        },
      ],
      selectedGallery: 0,
    }
  }
}
</script>

<style>
.c-fit img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
