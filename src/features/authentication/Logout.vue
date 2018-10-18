<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions('authentication', ['sendLogout'])
    },
    mounted () {
        this.sendLogout().then(() => this.$router.push('/login'))
    },
}
</script>

<template>
    <div></div>
</template>

