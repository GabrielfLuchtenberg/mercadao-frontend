<script>
import Product from '@/features/product/Product'
export default {
    components:{
        Product
    },
    data(){
        return {
            productId : {}
        }
    },
    created(){
        this.productId = this.$route.params.productId
    }
}
</script>

<template>
    <b-container class="m-b-15">
        <product :productId="productId"></product>
    </b-container>
</template>


