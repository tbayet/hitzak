<template>
  <v-container fluid grid-list-xl>
  <div  v-if="windowWidth >= 768" class="container-book">
    <div class="contained-book">
      <booklet v-if="windowWidth >= 768" ref="book"
      :enableControl="false" :displayPageNumber="false">
        <div class="page cover">
          <article class="content lbb" @click="nextPage()">
          </article>
          <article class="content lbb-back" @click="prevPage()">
          </article>
        </div>

        <div class="page" v-for="(song, j) in songs"
        :key="j" v-if="j % 2 == 0">
          <article class="content" @click="nextPage()">
            <div class="lyrics-container">
              <h1>{{song.title}}</h1>
              <p class="text-xs-left lyrics">
                <span v-for="(line, i) in song.text" :key="i">
                  {{line}} <br>
                </span>
              </p>
            </div>
            <p class="song-comment" v-if="song.comment">
              * <i>{{song.comment}}</i>
            </p>
          </article>

          <article v-if="j + 1 < songs.length" class="content" @click="prevPage()">
            <div class="lyrics-container">
              <h1>{{songs[j + 1].title}}</h1>
              <p class="text-xs-left lyrics">
                <span v-for="(line, i) in songs[j + 1].text" :key="i">
                  {{line}} <br>
                </span>
              </p>
            </div>
            <p class="song-comment" v-if="songs[j + 1].comment">
              * <i>{{songs[j + 1].comment}}</i>
            </p>
          </article>
        </div>

        <div class="page back">
          <article class="content lbb-back-end" @click="nextPage()">
          </article>
          <article class="content lbb" @click="prevPage()">
          </article>
        </div>
      </booklet>
    </div>
  </div>

  <v-expansion-panel v-else expand>
    <v-expansion-panel-content v-for="(song, j) in songs" :key="j">
      <div slot="header"><h1>{{songs[j].title}}</h1></div>
      <v-card>
        <v-card-text class="grey lighten-3">
          <p class="text-xs-left lyrics-small">
            <span v-for="(line, i) in song.text" :key="i">
              {{line}} <br>
            </span>
          </p>
          <p class="song-comment-small" v-if="song.comment">
            * <i>{{song.comment}}</i>
          </p>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>

  </v-container>
</template>

<script>
import booklet from 'vue-booklet'
import 'vue-booklet/dist/lib/vue-booklet.min.css'

const jsonSongs = require("../assets/lyrics.json")
export default {
  name: 'Lyrics',
  components: {
    booklet
  },
  methods: {
    nextPage () {
      this.$refs.book.nextPage()
    },
    prevPage () {
      this.$refs.book.prevPage()
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      });
    })
  },
  data () {
    return {
      songs: jsonSongs,
      windowWidth: window.innerWidth
    }
  }
}
</script>

<style scoped>

.container-book {
  position: relative;
  width: 100%;
}
.contained-book {
  position: relative;
  padding-bottom: calc(100% * 5 / 8);
}
.vue-booklet {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: initial !important;
  max-height: initial !important;
}

.lyrics-container {
  position: relative;
  max-height: 90%;
  overflow-y: auto;
  margin-left: 8%;
}
h1 {
  padding-top: 10px;
  font-size: 3vw;
  font-family: 'Walter Turncoat', cursive;
  padding-bottom: 15px;
}
.lyrics {
  font-family: 'Architects Daughter', cursive;
  font-size: 1.2vw;
  line-height: 2vw;
}
.lyrics-small {
  font-family: 'Architects Daughter', cursive;
  font-size: 2.5vw;
  line-height: 4vw;
}
.song-comment {
  position: absolute;
  margin: 3%;
  bottom: 0;
  font-size: 1vw;
}
.song-comment-small {
  font-size: 2.2vw;
}
.cover, .back {
  border-color: #FAFAFA !important;
  background: none !important;
  background-color: #FAFAFA !important;
}
.lbb {
  border: none !important;
  background-image: url('/lbb.png');
  background-repeat: no-repeat;
  background-size: 80% 100%;
  background-position: 40% 0;
}
.lbb-back, .lbb-back-end {
  background:
    linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
  background-size: 20px 20px;
  background-color: rgb(45, 45, 60) !important;
}
.lbb-back {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.lbb-back-end {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>
