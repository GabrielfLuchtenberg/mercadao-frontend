<script>
import { mapActions } from 'vuex';
export default {
    methods:{
        ...mapActions('authentication',['sendLogout'])
    },
    mounted() {
        this.sendLogout()
    },
}
</script>

<template>
    <div></div>
</template>

