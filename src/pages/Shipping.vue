<template>
    <div>
        <Navbar></Navbar>
        <Breadcrumb></Breadcrumb>
        <Shipping></Shipping>
        <Footer></Footer>
        <Copyright></Copyright>
    </div>
  
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import Shipping from '../components/Shipping.vue'
import Footer from '../components/Footer.vue';
import Copyright from '../components/Copyright.vue';

export default {
    name: 'ShippingPage',
    components: {
        Shipping,
        Navbar,
        Footer,
        Copyright,
        Breadcrumb
    }
}
</script>

<style>

</style>