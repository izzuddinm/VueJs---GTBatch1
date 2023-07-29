<template>
    <div>
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <Slider></Slider>
    <Footer></Footer>
    <Copyright></Copyright>
    </div> 
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Slider from '../components/Slider.vue'
import Breadcrumb from '../components/Breadcrumb.vue';
import Footer from '../components/Footer.vue'
import Copyright from '../components/Copyright.vue'

export default {
    name: 'CardPage',
    components: {
        Navbar,
        Slider,
        Breadcrumb,
        Footer,
        Copyright
        
    }

}
</script>

<style>

</style>