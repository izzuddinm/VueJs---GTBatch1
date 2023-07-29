<template>
  <div>
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <Gallery :imgTampungProp='imgTampung'></Gallery>
    <Slider @changePictureSlider="changePictureFunc"></Slider>
    <Footer></Footer>
    <Copyright></Copyright>

  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import Copyright from '../components/Copyright.vue'
import Footer from '../components/Footer.vue'
import Gallery from '../components/Gallery.vue'
import Navbar from '../components/Navbar.vue'
import Slider from '../components/Slider.vue'


export default {
  name: 'HomePage',
  components: {
    Navbar,
    Breadcrumb,
    Gallery,
    Slider,
    Footer,
    Copyright,
    
  },
  data() {
    return {
      imgTampung: "chair"
    }
  },
methods: {
      changePictureFunc: function (cardImage){
    this.imgTampung=cardImage
  }
}
  
}
</script>

<style>

</style>