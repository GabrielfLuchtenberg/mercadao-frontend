<template>

    <!-- PRODUCT -->
    <div>
        <b-row>
            
            <b-col cols="2" >
                <img class="img-responsive" :src="product.image" alt="prewiew" width="120" height="80">
            </b-col>
            <b-col class="text-left">
                <b-link :to="{name: 'product-detail',params:{productId : product.id}}">
                    <h4 class="product-name"><strong>{{product.name}}</strong></h4>
                </b-link>
                <h4>
                    <small>{{product.description}}</small>
                </h4>
            </b-col>
            <b-col cols="5">
                <b-row>
                    <b-col cols="3" class="text-right" >
                        <h6>R$<strong>{{product.price}} <span class="text-muted">x</span></strong></h6>
                    </b-col>
                    <b-col cols="2">
                        <div class="quantity">
                            <!-- <input type="button" value="+" class="plus"> -->
                            <input type="number" step="1" max="99" min="1" v-model="productQuantity" title="Qty" class="qty" size="4">
                            <!-- <input type="button" value="-" class="minus"> -->
                        </div>
                    </b-col>
                    <b-col cols="4">
                        R${{product.totalValue}}
                    </b-col>
                    <b-col cols="3" class="text-right">
                        <b-button @click.prevent="setProdutctQuantity(product,productQuantity)" :size="'sm'" :variant="'outline-primary'">
                            <font-awesome-icon icon="redo-alt" />
                        </b-button>
                        <b-button @click.prevent="removeProduct(product)" :size="'sm'" :variant="'outline-danger'">
                            <font-awesome-icon icon="trash-alt" />
                        </b-button>
                    </b-col>
                </b-row>
            </b-col>
            
        </b-row>
        <hr>
    </div>
        <!-- END PRODUCT -->
</template>

<script>
import { mapActions } from 'vuex';
export default {
    
    props:{
        product:{
            required: true
        },
    },
    data(){
        return {
                productQuantity: 0 
        } 
    },
    mounted(){
        this.productQuantity = this.product.quantity
    },
    methods:{
        ...mapActions('cart',['setProductQuantityAction','removeProductAction']),
        setProdutctQuantity(product,quantity){
            this.setProductQuantityAction({product,quantity})
        },
        removeProduct(product){
            this.removeProductAction(product)
        }
    }
}
</script>

<style>
</style>
