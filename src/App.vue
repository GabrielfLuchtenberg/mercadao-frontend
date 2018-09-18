<script>
import * as logo from '@/assets/logo.png'
import { mapActions, mapGetters } from 'vuex';
	
	export default{
		data(){
			return{
				logo,
				header:{
					textos:{
						welcome: 'Welcome to mercadão',
						email: 'sac@mercadao.com',
						phone: '48 9 9819 9065',
						talkWithUs: 'Talk with us :D'
					}
				},
				filter: {name: ''}
			}
		},
		methods:{
			...mapActions('products',['setFilterAction','getProductsAction']),
			setFilter(){
				this.setFilterAction(this.filter)
				this.getProductsAction()
			}
		},
		computed:{
			...mapGetters('authentication',['isAuthenticated']),
			...mapGetters('cart',['countProduct','cartTotal'])
		}
	}
</script>

<template>
  <div id="app">
		<header>
			<b-container >
				<b-row>
					<b-col cols="3">
						<p class="text-left">{{header.textos.welcome}}</p>
					</b-col>
					<b-col cols="9" class="text-right" >
							<b-link :href="'mail:'+header.textos.email"> {{header.textos.email}} </b-link>
							<b-link :href="'tel:'+header.textos.phone"> {{header.textos.phone}} </b-link>
							<b-link :to="{path:'about'}">{{header.textos.talkWithUs}}</b-link>
					</b-col>
				</b-row>
			</b-container>
			
			<b-container>
				<b-row>
					<b-link :to="{path:'/'} ">
						<b-col cols="2"> <b-img id="logo" :src="logo"></b-img></b-col>
					</b-link>
					<b-col cols="7"> <b-form inline="" @submit.prevent="$router.push('/')" > <b-input class="w-100" placeholder="Pesquisar" id="input-search" @input="setFilter" v-model="filter.name"></b-input> </b-form> </b-col>
					
					<b-col cols="3"> 
						<b-link :to="{path:'/cart-detail'} ">
							<font-awesome-icon icon="shopping-cart" />  {{ countProduct }} <span v-if="countProduct > 0">  -  R$ {{cartTotal}} </span>
						</b-link>
					</b-col>
				</b-row>
			</b-container>
		</header>
		<main>
			<div id="nav">
				<!-- <router-link to="/">home</router-link> | -->
				<!-- <router-link to="/about">About</router-link> | -->
				<!-- <template v-if="!isAuthenticated">
					<router-link to="/login" >Login</router-link>
				</template>
				<template v-else>
					<router-link to="/logout" >Logout</router-link>
				</template> -->
			</div>
			<router-view/>
		</main>
		<footer>
			<b-container>
				<b-row>
					<b-col><b-img id="logo" :src="logo"></b-img></b-col>
					<b-col>
						Lorem
						<ul>
							<li>Ipsum</li>
							<li>Ipsum</li>
							<li>Ipsum</li>
						
						</ul>
					</b-col>
					<b-col>
						About
						<ul>
							<li>About us</li>
							<li>About us</li>
							<li>About us</li>
							
						</ul>
					</b-col>
				</b-row>
			</b-container>
		</footer>
  </div>
</template>