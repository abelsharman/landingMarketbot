<template>
  <div class="page">
    <Header />
    <Platform />
    <Examples />
    <Associate />
    <Create />
    <Execute />
    <Mood />
    <Company />
    <Team />
    <Setting />
    <Footer />
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
import Company from '@/components/Company.vue'
import Team from '@/components/Team.vue'
import Setting from '@/components/Setting.vue'
import Footer from '@/components/Footer.vue'


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
    Company,
    Team,
    Setting,
    Footer
  }
}
</script>


<style lang="sass">




@media screen and (min-width:1200px)
  $padddingForSite: calc((100vw - 1200px) / 2)
  .page
    padding: 0 $padddingForSite
  


*
  scroll-behavior: smooth

*
  font-family: 'Cera Pro'
.page
  background-color: #f9f9f9


@media screen and (min-width: 456px)
  .page
    background-color: #f9f9f9
    overflow-x: hidden
  body
    overflow-x: hidden

</style>

