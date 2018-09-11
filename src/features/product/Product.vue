<script>
    /* eslint-disable */
    export default{
        props:{
            productId:{
                required: true
            }
        },
        data(){
            return{
                product : {}
            }
        },
        created(){
            this.$http.get('products/'+this.productId)
            .then (res => this.product = res.data)
        }
    }
</script>

<template>
    <div class="card">
	    <div class="row">
		    <aside class="col-5 border-right" >
                <a  href="#"><b-img :src="product.image" class="img-responsive w-100" :alt="product.name" /></a>
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
                        <dd><p>{{product.desc}}</p></dd>
                        </dl>
                        <dl class="param param-feature">
                        <dt>Fabricante</dt>
                        <dd>{{product.manufacturer}}</dd>
                    </dl>  <!-- item-property-hor .// -->
                    <hr>
                    <div class="row">
                        <div class="col-5">
                            <dl class="param param-inline">
                            <dt>Quantity: </dt>
                            <dd>
                                <select class="form-control form-control" style="width:70px;">
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                </select>
                            </dd>
                            </dl>  <!-- item-property .// -->
                        </div> <!-- col.// -->
                    </div> <!-- row.// -->
                    <hr>
                    <a href="#" class="btn btn-lg btn-primary text-uppercase"> Buy now </a>
                    <a href="#" class="btn btn-lg btn-outline-primary text-uppercase"> <i class="fas fa-shopping-cart"></i> Add to cart </a>
                </article> <!-- card-body.// -->
		    </aside> <!-- col.// -->
	    </div> <!-- row.// -->
    </div> <!-- card.// -->
</template>
