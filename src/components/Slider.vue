<template>
  <div class="container-center">
      <div>
        <h4 class="p-4">
          Complete Your Room <br />
          With What We Designed
        </h4>
        <div class="d-flex justify-content-around">
          <card v-for="(item, index) in arrcardTitle" 
          :key="index" :cardTitle="item"
          :cardPrice="arrcardPrice[index]"
          :cardImage="arrcardImage[index]"
          @changePicture="changePictureFunc"></card>
        </div>
      </div>
  </div>
</template>

<script>

import Card from './Card.vue'
export default {
  name: 'SliderComponents',
  components: {
Card
  },
  data () {
    return {
      arrcardTitle: ["Mangkir Mauttie", "Saman Kakka", "Lini Dino", "Syail Ammeno"],
      arrcardPrice: ["89.300.000", "14.500.000", "22.000.000", "12.000.000"],
      arrcardImage: ["chair-1", "chair-2", "chair-3", "chair-4"]
    }
  },
  methods: {
    changePictureFunc: function (cardImageSlider) {
      this.$emit('changePictureSlider', cardImageSlider)
      
    },
}
    
}
</script>

<style>

</style>