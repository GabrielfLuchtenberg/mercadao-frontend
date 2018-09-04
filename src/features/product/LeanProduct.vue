<script>
export default {
    props:{
        product:{
            required: true,
            type: Object
        },
        
    },
    mounted(){
        console.log(this.key)
    }
}
</script>

<template>
    <b-col cols="3" >
        <div class="lean-product">
            <div class="photo">
                <b-img :src="product.image" class="img-responsive" :alt="product.name" />
            </div>
            <div class="info">
                <div class="row">
                    <b-col cols="12" class="price">
                        <h5> {{product.name}}</h5>
                        <h5 class="price-text-color"> R$ {{product.price}}</h5>
                    </b-col>
                    <b-col cols="12" class="rating hidden-sm">
                        <i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star">
                        </i><i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star">
                        </i><i class="fa fa-star"></i>
                    </b-col>
                </div>
                <div class="separator clear-left">
                    <p class="btn-add">
                        <i class="fa fa-shopping-cart"></i><a href="http://www.jquery2dotnet.com" class="hidden-sm">Add to cart</a>
                    </p>
                    <p class="btn-details">
                        <i class="fa fa-list"></i><b-link :to="{name: 'product-detail',params:{productId : product.id}}" class="hidden-sm">More details</b-link>
                    </p>
                </div>
                <div class="clearfix">
                </div>
            </div>
        </div>
    </b-col>
</template>

<style>
.lean-product {
	border: 1px solid #e1e1e1;
	border-radius: 5px;
	background: #fff;

	margin-top: 15px;
}
.lean-product .photo img {
	margin: 0 auto;
	width: 100%;
}

.lean-product .info {
	padding: 10px;
	border-radius: 0 0 5px 5px;
	margin-top: 1px;
}

.lean-product:hover .info {
	background-color: #f5f5dc;
}
.lean-product .price {
	/*width: 50%;*/
	float: left;
	margin-top: 5px;
}

.lean-product .price h5 {
	line-height: 20px;
	margin: 0;
}

.price-text-color {
	color: #219fd1;
}

.lean-product .info .rating {
	color: #777;
}

.lean-product .rating {
	/*width: 50%;*/
	float: left;
	font-size: 17px;
	text-align: left;
	line-height: 52px;
	margin-bottom: 10px;
	height: 52px;
}

.lean-product .separator {
	border-top: 1px solid #e1e1e1;
}

.clear-left {
	clear: left;
}

.lean-product .separator p {
	line-height: 20px;
	margin-bottom: 0;
	margin-top: 10px;
	text-align: center;
}

.lean-product .separator p i {
	margin-right: 5px;
}
.lean-product .btn-add {
	width: 50%;
	float: left;
}

.lean-product .btn-add {
	border-right: 1px solid #e1e1e1;
}

.lean-product .btn-details {
	width: 50%;
	float: left;
	padding-left: 10px;
}
.controls {
	margin-top: 20px;
}
[data-slide='prev'] {
	margin-right: 10px;
}
</style>
