<template>
  <div class="home">
    <!-- <slider></slider> -->

    <product-container :products-list="productsList"></product-container>
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
    HelloWorld, Slider, productContainer
  },
  mounted () {
    this.$store.dispatch('products/getProductsAction')
  },
  computed: {
    ...mapGetters('authentication', ['isAuthenticated']),
    ...mapGetters('products', ['productsList'])
  }
}
</script>
