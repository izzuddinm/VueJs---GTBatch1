<template>
  <div class="footer">
      <br />
      <center>
        <img src="../assets/img/logo.png" alt="" />
      </center>
      <br />
      <div class="isi-footer">
        <div>
          <p><b>Overview</b></p>
          <p>Shipping</p>
          <p>Refund</p>
          <p>Promotion</p>
        </div>
        <div>
          <p><b>Company</b></p>
          <p>About</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p><b>Explore</b></p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>For Developer</p>
        </div>
        <div>
          <p><b>Special Letter</b></p>
          <input
            style="
              border: 0px;
              border-radius: 5px;
              width: 200px;
              height: 36px;
              background-color: #f1f1f5;
            "
            type="email" id="inputNama"
            placeholder="Your Email Address"
          />
          <button
            id="btnAlert"
            style="
              border: 0px;
              border-radius: 5px;
              width: 40px;
              height: 37px;
              background-color: pink;
            "
            type="submit"
          >
            <img src="assets/tele-icon.png" alt="" />
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'FooterComponents',
    props: String

}
</script>

<style>
.footer { 
    height: 300px;
    color: black;
    margin-top: 20px;
}

.isi-footer {
    display: flex;
    justify-content: space-around;
}
</style>