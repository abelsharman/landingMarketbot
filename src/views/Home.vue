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
@font-face 
    font-family: 'Cera Pro'
    src: '@/assets/CeraPro/CeraPro-Italic.ttf'
    font-weight: normal
    font-style: italic

@font-face 
    font-family: 'Cera Pro'
    src: '@/assets/CeraPro/CeraPro-BlackItalic.ttf'
    font-weight: 900
    font-style: italic


@font-face 
    font-family: 'Cera Pro'
    src: '@/assets/CeraPro/CeraPro-Regular.ttf'
    font-weight: normal
    font-style: normal


@font-face 
    font-family: 'Cera Pro'
    src: '@/assets/CeraPro/CeraPro-Light.ttf'
    font-weight: 300
    font-style: normal

@font-face 
    font-family: 'Cera Pro'
    src: '@/assets/CeraPro/CeraPro-BoldItalic.ttf'
    font-weight: bold
    font-style: italic


@font-face 
    font-family: 'Cera Pro'
    src: '@/assets/CeraPro/CeraPro-Black.ttf'
    font-weight: 900
    font-style: normal



@font-face 
    font-family: 'Cera Pro'
    src: '@/assets/CeraPro/CeraPro-Medium.ttf'
    font-weight: 500
    font-style: normal


@font-face 
    font-family: 'Cera Pro'
    src: '@/assets/CeraPro/CeraPro-Bold.ttf'
    font-weight: bold
    font-style: normal


@font-face 
    font-family: 'Cera Pro'
    src: '@/assets/CeraPro/CeraPro-Thin.ttf'
    font-weight: 100
    font-style: normal
    

@font-face 
    font-family: 'Cera Pro'
    src: '@/assets/CeraPro/CeraPro-MediumItalic.ttf'
    font-weight: 500
    font-style: italic

@font-face 
    font-family: 'Cera Pro'
    src: '@/assets/CeraPro/CeraPro-LightItalic.ttf'
    font-weight: 300
    font-style: italic


@font-face 
    font-family: 'Cera Pro'
    src: '@/assets/CeraPro/CeraPro-ThinItalic.ttf'
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

