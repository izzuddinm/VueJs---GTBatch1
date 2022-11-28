<template>
   <div class="d-flex justify-content-around">
    <div class="card p-4" style="border-radius: 25px">
      <a href="" class="chairs"></a>
      <img :src="require('../assets/img/'+cardImage + '.png')" alt="chair">
      <div class="card-body">
        <h5>{{cardTitle}}</h5>
        <p>IDR {{cardPrice}}</p>
      </div>
    </div>
      </div>
</template>

<script>
export default {
  name: 'CardComponents',
  props:["cardTitle", "cardPrice", "cardImage"]
}
</script>

<style>

</style>