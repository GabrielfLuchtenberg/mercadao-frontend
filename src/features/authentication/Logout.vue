<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions('authentication', ['sendLogout']),
        ...mapActions('cart', ['cleanCartAction'])
    },
    mounted () {
        this.cleanCartAction()
        this.sendLogout().then(() => this.$router.push('/login'))
    },
}
</script>

<template>
    <div></div>
</template>

