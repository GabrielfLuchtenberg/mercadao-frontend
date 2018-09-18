<script>
import Product from './Product'
import { mapGetters, mapActions } from 'vuex';
export default {
    methods:{
        ...mapActions('cart',['cleanCartAction']),
        cleanCart(){
            this.cleanCartAction();
        }
    },
    components:{Product},
    computed:{
        ...mapGetters('cart',['productWithTotalValue','cartTotal'])
    }
}
</script>

<template>
    <b-container>        
        <div class="card shopping-cart">
            <div class="card-header bg-light text-dark">
                <font-awesome-icon icon="shopping-cart"/>
                <strong> My cart</strong>
                <b-link  to="/" class="btn btn-outline-info btn-sm pull-right">Keep buying</b-link>
                <div class="clearfix"></div>
            </div>
            <div class="card-body">
                <template v-if="productWithTotalValue.length > 0">
                    
                    <product v-for="(product,key) in productWithTotalValue" :key="key" :product="product" />
                    <div class="pull-right">
                        <a @click.prevent="cleanCart()" href="#" class="btn btn-outline-secondary pull-right">
                            Clean up
                        </a>
                    </div>
                </template>
                <template v-else>
                    <b-col class="text-center">
                        There's no product on cart, let's change it. :'D
                    </b-col>
                </template>
            </div>
            <div class="card-footer">
                <div class="pull-right" style="margin: 10px">
                    <a disabled="true" @click.prevent class="btn btn-success pull-right disabled">Continue</a>
                    <div class="pull-right" style="margin: 5px">
                        Total: <strong>R$ {{cartTotal}} </strong>
                    </div>
                </div>
            </div>
        </div>
    </b-container>
        
</template>
