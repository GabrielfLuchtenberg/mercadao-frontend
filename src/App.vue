<script>
	import * as logo from '@/assets/logo.png'
import { mapActions, mapGetters } from 'vuex';
	
	export default{
		data(){
			return{
				logo,
				header:{
					textos:{
					bemVindo: 'Bem vindo ao mercadão',
					email: 'sac@mercadao.com',
					telefone: '48 9 9819 9065'
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
			...mapGetters('authentication',['isAuthenticated'])
		}
	}
</script>

<template>
  <div id="app">
		<header>
			<b-container >
				<b-row>
					<b-col cols="3">
						<p class="text-left">{{header.textos.bemVindo}}</p>
					</b-col>
					<b-col cols="9" class="text-right" >
							<b-link :href="'mail:'+header.textos.email"> {{header.textos.email}} </b-link>
							<b-link :href="'tel:'+header.textos.telefone"> {{header.textos.telefone}} </b-link>
							<b-link :to="{path:'about'}">Fale Conosco</b-link>
					</b-col>
				</b-row>
			</b-container>
			
			<b-container>
				<b-row>
					<b-link :to="{path:'/'} ">
						<b-col cols="2"> <b-img id="logo" :src="logo"></b-img></b-col>
					</b-link>
					<b-col cols="7"> <b-form inline="" > <b-input class="w-100" placeholder="Pesquisar" id="input-search" @input="setFilter" v-model="filter.name"></b-input> </b-form> </b-col>
					<b-col cols="3">  asdasd</b-col>
				</b-row>
			</b-container>
		</header>
		<main>
			<div id="nav">
				<router-link to="/">home</router-link> |
				<router-link to="/about">About</router-link> |
				<template v-if="!isAuthenticated">
					<router-link to="/login" >Login</router-link>
				</template>
				<template v-else>
					<router-link to="/logout" >Logout</router-link>
				</template>
			</div>
			<router-view/>
		</main>
		<footer>
			<b-container>
				<b-row>
					<b-col><b-img id="logo" :src="logo"></b-img></b-col>
					<b-col>
						Categorias
						<ul>
							<li>Categoria</li>
							<li>Categoria</li>
							<li>Categoria</li>
						</ul>
					</b-col>
					<b-col>
						Conteúdo
						<ul>
							<li>Quem somos</li>
							<li>Quem somos</li>
							<li>Quem somos</li>
						</ul>
					</b-col>
				</b-row>
			</b-container>
		</footer>
  </div>
</template>