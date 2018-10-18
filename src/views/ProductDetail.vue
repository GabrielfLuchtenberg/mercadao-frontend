<script>
import Product from '@/features/product/Product'
import LeanProduct from '@/features/product/LeanProduct'
import ProductService from '@/services/product'
export default {
    components: {
        Product, LeanProduct
    },
    data () {
        return {
            relatedProductList: null,
            // productId: {},
        }
    },
    watch: {
        productId: function (val) {

            // console.log(val)
            ProductService.getRelated(val)
                .then(res => this.relatedProductList = res.data)
        }
    },
    computed: {
        productId () {
            return this.$route.params.productId
        }
    },

    mounted () {
        ProductService.getRelated(this.productId)
            .then(res => this.relatedProductList = res.data)
    }
}
</script>

<template>
    <div>
        <b-container class="m-b-15">
            <product :productId="productId"></product>
        </b-container>
        <br><br>
        <b-container>
            <div class="m-b-15">
                <h1>Related products</h1>
                <hr>
                <b-row>
                    <template v-for="(product) in relatedProductList">
                        <lean-product :product="product" :key="product.id"></lean-product>
                    </template>
                </b-row>
            </div>
        </b-container>
    </div>
</template>


