<template>
 <nav
  class="navbar navbar-light bg-light justify-content-between">
      <div>
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <div class="d-flex p-4">
        <a class="nav-link text-dark" href="#">Showcase</a>
        <a class="nav-link text-dark" href="#">Catalog</a>
        <a class="nav-link text-dark" href="#">Delivery</a>
        <a class="nav-link text-dark" href="#">Reward</a>
        <button style="border: 0px">
          <img src="../assets/img/cart-icon.png" alt="" />
        </button>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarComponents',
    props: {
        msg: String,
    }
  
}
</script>

<style>

</style>