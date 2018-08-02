<template lang="pug">
  #app
    img(src='https://javiermartinezoliveros.github.io/tastasmusic/dist/logo.png')
    h1 TasTasMusic
    select(v-model="selectedCountry")
      option(v-for="country in countries" :value="country.value") {{ country.name }}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'
//primero se importan los componentes, etc
export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries:[
      { name: 'Argentina', value: 'argentina' },
      { name: 'Colombia', value: 'colombia' },
      { name: 'España', value: 'spain' },
      ],
      selectedCountry: 'argentina',
      loading: true
    }
  },
  components: {
    Artist: Artist,
    Spinner
    //aca se le dice q el componente de artist es artist, como tienen el mismo nombre se puede poner solo Artist
  },
  methods: {
    refreshArtist() {
      const self = this
      this.loading = true
      this.artists = []
      getArtists(this.selectedCountry)
        .then(function (artists) {
          self.loading = false
          self.artists = artists
        })
    }
  },
  mounted() {
    this.refreshArtist()
  },
  watch: {
    selectedCountry() {
      this.refreshArtist()
    }
  }
  //watch es un metodo q le dice mira cuando algo cambie, en este caso el valor de country
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
