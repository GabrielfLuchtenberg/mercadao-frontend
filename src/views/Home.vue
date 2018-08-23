<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{isAuthenticated}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/features/HelloWorld.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed:{
    ...mapGetters('authentication',['isAuthenticated'])
  }
}
</script>
