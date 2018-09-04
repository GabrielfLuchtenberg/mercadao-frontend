<template>
  <div class="home">
     <!-- <slider></slider> -->

    <product-container></product-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/features/HelloWorld.vue'
import Slider from '@/features/slidebanner/Slider'
import { mapGetters } from 'vuex'
import productContainer from '@/features/product/Container'
export default {
  name: 'home',
  components: {
    HelloWorld,Slider,productContainer
  },
  computed:{
    ...mapGetters('authentication',['isAuthenticated'])
  }
}
</script>
