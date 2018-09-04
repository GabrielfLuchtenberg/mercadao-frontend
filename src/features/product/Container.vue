<script>
import LeanProduct from '@/features/product/LeanProduct'
import { mapGetters } from 'vuex';

export default {
    components:{
        LeanProduct
    },
    computed:{
        ...mapGetters('products',['productsList'])
    },
    mounted(){
        this.$store.dispatch('products/getProductsAction')
    }
}
</script>

<template>
    <b-container>
        <div class="m-b-15">
            <b-row>
                <template v-for="(product) in productsList" >
                    <lean-product :product="product" :key="product.id" ></lean-product>
                </template>
            </b-row>
        </div>
    </b-container>
</template>
