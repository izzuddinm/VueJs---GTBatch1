<template>
  <div id="app">
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <Galley></Galley>
   <Slider></Slider>
   <Footer></Footer>
  <Copyright></Copyright>

  </div>
  
</template>

<script>
import Breadcrumb from './components/Breadcrumb.vue'
import Copyright from './components/Copyright.vue'
import Footer from './components/Footer.vue'
import Galley from './components/Galley.vue'
import Navbar from './components/Navbar.vue'
import Slider from './components/Slider.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Breadcrumb,
    Galley,
    Slider,
    Footer,
    Copyright,


  }
}
</script>

<style>
#ap,
    GalleyComponentsp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
