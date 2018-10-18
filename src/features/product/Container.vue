<script>
import LeanProduct from '@/features/product/LeanProduct'

export default {
    components: {
        LeanProduct
    },

    props: {
        productsList: {
            required: true,
        }
    }
}
</script>

<template>
    <b-container>
        <div class="m-b-15">
            <b-row>
                <template v-for="(product) in productsList">
                    <lean-product :product="product" :key="product.id"></lean-product>
                </template>
            </b-row>
        </div>
    </b-container>
</template>
