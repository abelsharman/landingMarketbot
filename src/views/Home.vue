<template>
  <div class="page">
    <Header />
    <Platform />
    <Examples />
    <Associate />
    <Create />
    <Execute />
    <Mood />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Platform from '@/components/Platform.vue'
import Examples from '@/components/Examples.vue'
import Associate from '@/components/Associate.vue'
import Create from '@/components/Create.vue'
import Execute from '@/components/Execute.vue'
import Mood from '@/components/Mood.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Platform,
    Examples,
    Associate,
    Create,
    Execute,
    Mood,
  }
}
</script>


<style lang="sass">



@font-face 
    font-family: 'Cera Pro'
    src: url('../assets/CeraPro-Regular.woff')
    font-weight: normal
    font-style: normal


@font-face 
    font-family: 'Cera Pro'
    src: url('../assets/CeraPro-Light.woff')
    font-weight: 300
    font-style: normal

@font-face 
    font-family: 'Cera Pro'
    src: url('../assets/CeraPro-BoldItalic.woff')
    font-weight: bold
    font-style: italic


@font-face 
    font-family: 'Cera Pro'
    src: url('../assets/CeraPro-Black.woff')
    font-weight: 900
    font-style: normal



@font-face 
    font-family: 'Cera Pro'
    src: url('../assets/CeraPro-Medium.woff')
    font-weight: 500
    font-style: normal


@font-face 
    font-family: 'Cera Pro'
    src: url('../assets/CeraPro-Bold.woff')
    font-weight: bold
    font-style: normal


@font-face 
    font-family: 'Cera Pro'
    src: url('../assets/CeraPro-Thin.woff')
    font-weight: 100
    font-style: normal
    

@font-face 
    font-family: 'Cera Pro'
    src: url('../assets/CeraPro-MediumItalic.woff')
    font-weight: 500
    font-style: italic

@font-face 
    font-family: 'Cera Pro'
    src: url('../assets/CeraPro-LightItalic.woff')
    font-weight: 300
    font-style: italic


@font-face 
    font-family: 'Cera Pro'
    src: url('../assets/CeraPro-ThinItalic.woff')
    font-weight: 100
    font-style: italic
@media screen and (min-width:1200px)
  $padddingForSite: calc((100vw - 1200px) / 2)
  .page
    padding: 0 $padddingForSite
  


  
*
  font-family: 'Cera Pro'
.page
  background-color: #f9f9f9

</style>

