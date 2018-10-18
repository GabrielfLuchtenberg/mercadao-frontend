<script>
import Product from '@/services/product'
import { mapActions } from 'vuex';

/* eslint-disable */
export default {
    props: {
        productId: {
            required: true
        }
    },
    methods: {
        ...mapActions('cart', ['addProductAction']),
        addProduct (product, quantity) {
            this.addProductAction({ product, quantity })
        }
    },
    watch: {
        productId: function (id) {
            Product.getDetail(id)
                .then(res => this.product = res)
        }
    },
    data () {
        return {
            product: {},
            productQuantity: 1
        }
    },
    created () {
        Product.getDetail(this.productId)
            .then(res => this.product = res)
    }
}
</script>

<template>
    <div class="card">
        <div class="row">
            <aside class="col-5 border-right">

                <a href="#">
                    <b-img :src="product.image" class="img-responsive w-100" :alt="product.name" /></a>
            </aside>
            <aside class="col-7">
                <article class="card-body p-5">
                    <h3 class="title mb-3">{{product.name}}</h3>

                    <p class="price-detail-wrap">
                        <span class="price h3 text-warning">
                            <span class="currency">R$</span><span class="num">{{product.price}}</span>/ {{product.measurement_unit}}
                        </span>
                    </p> <!-- price-detail-wrap .// -->
                    <dl class="item-property">
                        <dt>Description</dt>
                        <dd>
                            <p>{{product.description}}</p>
                        </dd>
                    </dl>
                    <dl class="param param-feature">
                        <dt>Manufacturer</dt>
                        <dd>{{product.manufacturer}}</dd>
                    </dl> <!-- item-property-hor .// -->
                    <hr>
                    <div class="row">
                        <div class="col-5">
                            <dl class="param param-inline">
                                <dt>Quantity: </dt>
                                <dd>
                                    <select class="form-control form-control" v-model="productQuantity" style="width:70px;">
                                        <option> 1 </option>
                                        <option> 2 </option>
                                        <option> 3 </option>
                                    </select>
                                </dd>
                            </dl> <!-- item-property .// -->
                        </div> <!-- col.// -->
                    </div> <!-- row.// -->
                    <hr>
                    <b-button @click.prevent="addProduct(product,productQuantity)" class="uppercase" :size="'lg'" :variant="'outline-primary'">
                        <font-awesome-icon icon="shopping-cart" /> Add to cart </b-button>
                </article> <!-- card-body.// -->
            </aside> <!-- col.// -->
        </div> <!-- row.// -->
    </div> <!-- card.// -->
</template>
