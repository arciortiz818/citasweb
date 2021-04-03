<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<style lang="scss">
  
</style>


<script>
import LoginLayout from './views/layouts/LoginLayout';
import MainLayout from './views/layouts/MainLayout';
import {mapState} from 'vuex'

export default {
    components: {
      LoginLayout, MainLayout
    },  
    computed: {
      ...mapState(["layout"])
    }
}
</script>