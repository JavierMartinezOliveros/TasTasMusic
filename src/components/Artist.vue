<template lang="pug">
  li.artist
    h2: a(:href="artist.url" target="_blank") {{ artist.name }}
    img(:src="artist.image[2]['#text']")
</template>

<script>
export default {
  name: 'artist',//aca va que busca del json
  props: [ 'artist' ]//que propiedades recibe ese json
}
</script>

<style lang="stylus" scoped>
/*scoped limita los estilos para q solo afecten ciertoas fragmentos en este caso solo Artist.vue*/
li.artist
  display block
  margin 10px 0
</style>