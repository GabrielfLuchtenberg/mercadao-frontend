<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    components:{
        Carousel,Slide
    }
}
</script>

<template>
    <carousel :per-page="1">
        <slide>
        teste
        </slide>
        <slide>
        teste2
        </slide>
    </carousel>
</template>

<style>
</style>
