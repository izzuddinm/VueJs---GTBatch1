<template>
      <div class="container">
      <div
        class="d-flex flex-column justify-content-around mt-4"
        style="width: 90px"
      >
        <img src="../assets/img/side-1.png" alt="" />
        <img src="../assets/img/side-2.png" alt="" />
        <img src="../assets/img/side-3.png" alt="" />
        <img src="../assets/img/side-1.png" alt="" />
        <img src="../assets/img/side-2.png" alt="" />
      </div>
      <div class="kursi">
        <img id="chair-id" src="../assets/img/chair.png" alt="kursi" width="95%" />
      </div>

      <div class="text">
        <h2>Chair Thatty</h2>
        <p>IDR 12.000.000</p>
       <a href="shipping.html" class="btn text-dark" style="background-color: pink;"><img src="../assets/img/cart-icon.png" alt=""> add to chart</a>
        <br />
        <h2>About The Product</h2>
        <br />
        <p>
          Tailored to a level of perfection synonymous <br />
          with that of a Savile Row suitand and with <br />
          understanded quality in the detail, Jetty has been <br />
          influenced by timeless 1950s style.
        </p>

        <p>
          Providing a subtle nod to the past, Jetty also <br />
          provides a perfect solution for the way we <br />
          work today. Compeherensive product family, <br />
          Jetty features a variety of elegant chairs and <br />
          sofas.
        </p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'GalleyComponents',
    props: {
        msg: String
    }

}
</script>

<style>
.container {
    display: flex;
    flex-direction: row;
}

.container img {
    border-radius: 10px;
}


.kursi {
        /* border: 2px solid black; */
        padding: 20px;
        width: 600px;
        border-radius: 20px;
        justify-content: lef;
        margin-top: 30px;
        
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;
    margin: 10px;
    padding: 2px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>