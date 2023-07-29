<template>
   <div class="d-flex justify-content-around ">
      <a href="#" @click="$emit('changePicture', cardImage)" class="chairs text-secondary ">
      <img :src="require('../assets/img/'+ cardImage + '.png')" alt="chair">
      <div class="card-body p-4">
        <h5>{{cardTitle}}</h5>
        <p>IDR {{cardPrice}}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CardComponents',
  props: ["cardTitle", "cardPrice", "cardImage"],  
}
</script>

<style>

</style>