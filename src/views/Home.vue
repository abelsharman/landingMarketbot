<template>
  <div class="page">
    <Header />
    <Platform />
    <Examples />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Platform from '@/components/Platform.vue'
import Examples from '@/components/Examples.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Platform,
    Examples
  }
}
</script>


<style lang="sass">
@import @/style/fonts.sass
@media screen and (min-width:1200px)
  $padddingForSite: calc((100vw - 1200px) / 2)
  .page
    padding: 0 $padddingForSite
  


  
*
  font-family: 'Cera Pro'
.page
  background-color: #f9f9f9

</style>

