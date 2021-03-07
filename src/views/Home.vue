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
    src: '@/style/CeraPro-Italic.eot'
    src: local('Cera Pro Italic'), local('@/style/CeraPro-Italic'), '@/style/CeraPro-Italic.eot?#iefix' format('embedded-opentype'), '@/style/CeraPro-Italic.woff' format('woff'),'@/style/CeraPro-Italic.ttf' format('truetype')
    font-weight: normal
    font-style: italic

@font-face 
    font-family: 'Cera Pro'
    src: '@/style/CeraPro-BlackItalic.eot'
    src: local('Cera Pro BlackItalic'), local('@/style/CeraPro-BlackItalic'), '@/style/CeraPro-BlackItalic.eot?#iefix' format('embedded-opentype'), '@/style/CeraPro-BlackItalic.woff' format('woff'),'@/style/CeraPro-BlackItalic.ttf' format('truetype')
    font-weight: 900
    font-style: italic


@font-face 
    font-family: 'Cera Pro'
    src: '@/style/CeraPro-Regular.eot'
    src: local('Cera Pro Regular'), local('@/style/CeraPro-Regular'), '@/style/CeraPro-Regular.eot?#iefix' format('embedded-opentype'), '@/style/CeraPro-Regular.woff' format('woff'),'@/style/CeraPro-Regular.ttf' format('truetype')
    font-weight: normal
    font-style: normal


@font-face 
    font-family: 'Cera Pro'
    src: '@/style/CeraPro-Light.eot'
    src: local('Cera Pro Light'), local('@/style/CeraPro-Light'), '@/style/CeraPro-Light.eot?#iefix' format('embedded-opentype'), '@/style/CeraPro-Light.woff' format('woff'),'@/style/CeraPro-Light.ttf' format('truetype')
    font-weight: 300
    font-style: normal

@font-face 
    font-family: 'Cera Pro'
    src: '@/style/CeraPro-BoldItalic.eot'
    src: local('Cera Pro BoldItalic'), local('@/style/CeraPro-BoldItalic'), '@/style/CeraPro-BoldItalic.eot?#iefix' format('embedded-opentype'), '@/style/CeraPro-BoldItalic.woff' format('woff'),'@/style/CeraPro-BoldItalic.ttf' format('truetype')
    font-weight: bold
    font-style: italic


@font-face 
    font-family: 'Cera Pro'
    src: '@/style/CeraPro-Black.eot'
    src: local('Cera Pro Black'), local('@/style/CeraPro-Black'), '@/style/CeraPro-Black.eot?#iefix' format('embedded-opentype'), '@/style/CeraPro-Black.woff' format('woff'),'@/style/CeraPro-Black.ttf' format('truetype')
    font-weight: 900
    font-style: normal



@font-face 
    font-family: 'Cera Pro'
    src: '@/style/CeraPro-Medium.eot'
    src: local('Cera Pro Medium'), local('@/style/CeraPro-Medium'), '@/style/CeraPro-Medium.eot?#iefix' format('embedded-opentype'), '@/style/CeraPro-Medium.woff' format('woff'),'@/style/CeraPro-Medium.ttf' format('truetype')
    font-weight: 500
    font-style: normal


@font-face 
    font-family: 'Cera Pro'
    src: '@/style/CeraPro-Bold.eot'
    src: local('Cera Pro Bold'), local('@/style/CeraPro-Bold'), '@/style/CeraPro-Bold.eot?#iefix' format('embedded-opentype'), '@/style/CeraPro-Bold.woff' format('woff'),'@/style/CeraPro-Bold.ttf' format('truetype')
    font-weight: bold
    font-style: normal


@font-face 
    font-family: 'Cera Pro'
    src: '@/style/CeraPro-Thin.eot'
    src: local('Cera Pro Thin'), local('@/style/CeraPro-Thin'), '@/style/CeraPro-Thin.eot?#iefix' format('embedded-opentype'), '@/style/CeraPro-Thin.woff' format('woff'),'@/style/CeraPro-Thin.ttf' format('truetype')
    font-weight: 100
    font-style: normal
    

@font-face 
    font-family: 'Cera Pro'
    src: '@/style/CeraPro-MediumItalic.eot'
    src: local('Cera Pro MediumItalic'), local('@/style/CeraPro-MediumItalic'), '@/style/CeraPro-MediumItalic.eot?#iefix' format('embedded-opentype'), '@/style/CeraPro-MediumItalic.woff' format('woff'),'@/style/CeraPro-MediumItalic.ttf' format('truetype')
    font-weight: 500
    font-style: italic

@font-face 
    font-family: 'Cera Pro'
    src: '@/style/CeraPro-LightItalic.eot'
    src: local('Cera Pro LightItalic'), local('@/style/CeraPro-LightItalic'), '@/style/CeraPro-LightItalic.eot?#iefix' format('embedded-opentype'), '@/style/CeraPro-LightItalic.woff' format('woff'),'@/style/CeraPro-LightItalic.ttf' format('truetype')
    font-weight: 300
    font-style: italic


@font-face 
    font-family: 'Cera Pro'
    src: '@/style/CeraPro-ThinItalic.eot'
    src: local('Cera Pro ThinItalic'), local('@/style/CeraPro-ThinItalic'), '@/style/CeraPro-ThinItalic.eot?#iefix' format('embedded-opentype'), '@/style/CeraPro-ThinItalic.woff' format('woff'),'@/style/CeraPro-ThinItalic.ttf' format('truetype')
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

