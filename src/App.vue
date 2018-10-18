<script>
import * as logo from '@/assets/logo.png'
import { mapActions, mapGetters } from 'vuex';

export default {
	data () {
		return {
			logo,
			header: {
				textos: {
					welcome: 'MERCADÃO',
					email: 'sac@mercadao.com',
					phone: '48 9 9819 9065',
					talkWithUs: 'Talk with us :D'
				}
			},
			filter: { name: '' }
		}
	},
	methods: {
		...mapActions('products', ['setFilterAction', 'getProductsAction']),
		setFilter () {
			this.setFilterAction(this.filter)
			this.getProductsAction()
		}
	},
	computed: {
		...mapGetters('authentication', ['isAuthenticated']),
		...mapGetters('cart', ['countProduct', 'cartTotal'])
	}
}
</script>

<template>
	<div id="app">
		<header>

			<b-container>
				<b-row>
					<b-col cols="2">
						<b-link :to="{path:'/'} ">
							<b-img id="logo" :src="logo"></b-img>
						</b-link>
					</b-col>
					<b-col cols="6" class="align-middle text-center">
						{{header.textos.welcome}}

					</b-col>
					<b-col cols="2">
						<b-link :to="{path:'/cart-detail'} ">
							<font-awesome-icon icon="shopping-cart" /> {{ countProduct }} <span v-if="countProduct > 0"> - R$ {{cartTotal}} </span>
						</b-link>
					</b-col>
					<b-col cols="2">
						<b-form inline="" @submit.prevent="$router.push('/')">
							<b-input class="w-100" placeholder="Pesquisar" id="input-search" @input="setFilter" v-model="filter.name"></b-input>
						</b-form>
					</b-col>
				</b-row>
			</b-container>
		</header>
		<main>
			<b-container>
				<b-row>
					<b-col offset="7" cols="5">
						<div id="nav" class="text-right">
							<template v-if="!isAuthenticated">
								<router-link to="/login">Sign in</router-link>
								<router-link to="/register">Sign up</router-link>
							</template>
							<template v-else>
								<router-link to="/logout">Logout</router-link>
							</template>
							<!-- <router-link to="/">home</router-link> | -->
							<!-- <router-link to="/about">About</router-link> | -->
						</div>
					</b-col>
				</b-row>
			</b-container>
			<router-view />
		</main>
		<footer>
			<b-container>
				<b-row>
					<b-col>
						<b-img id="logo" :src="logo"></b-img>
					</b-col>
					<b-col>

					</b-col>
					<b-col>

					</b-col>
				</b-row>
			</b-container>
		</footer>
	</div>
</template>