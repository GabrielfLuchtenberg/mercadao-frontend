<script>
import Product from '@/features/product/Product'
export default {
    components:{
        Product
    },
    data(){
        return {
            product : {}
        }
    },
    created(){
        this.product = this.$route.params.productId
    }
}
</script>

<template>
    <b-container class="m-b-15">
        <product :product="product"></product>
    </b-container>
</template>


