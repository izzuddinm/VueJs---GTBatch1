<template>
 <nav
  class="navbar navbar-light bg-light justify-content-between"> 
      <div>
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <div class="d-flex p-3">
        <router-link to="/home" class="nav-link text-dark"><b>Home</b></router-link>
        <router-link to="/catalog" class="nav-link text-dark"><b>Catalog</b></router-link>    
        <router-link to="/shipping" class="nav-link text-dark" ><b>Shipping</b></router-link>
        <router-link to="/shippinglist" class="nav-link text-dark"><b>Shipping List</b></router-link>
        <button style="border: 0px" class="nav-link border rounded">
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