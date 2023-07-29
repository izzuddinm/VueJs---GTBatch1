<template>
  <div
    id="form-id"
    class="p-4 border border-danger"
    style="
      width: fit-content;
      margin: auto;
      margin-top: 5%;
      border: 5px;
      border-radius: 10px;
    ">
    <div>
      <h1 style="text-align: center; margin-bottom: 5%">Shipping Form</h1>
    </div>
    <hr />
    <form @submit.prevent="inputShipping" v-show="!success">
      <div class="form-row d-flex">
        <div class="col-md-6 mb-3 sm-3">
          <label for="validationDefault01">First Name</label>
          <input
            v-model="shippingData.first_name"
            id="firstname"
            type="text"
            class="form-control"
            placeholder="First name"
            value=""
            required
          />
        </div>
        <div class="col-md-6 mb-3">
          <label for="validationDefault02">Phone Number</label>
          <input
            v-model="shippingData.phone_number"
            type="text"
            class="form-control"
            id="phone"
            placeholder="Phone number"
            value=""
          />
        </div>
      </div>

      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationDefault01">last Name</label>
          <input
            v-model="shippingData.last_name"
            id="lastname"
            type="text"
            class="form-control"
            placeholder="Last name"
            value=""
          />
        </div>
        <div class="col-md-6 mb-3">
          <label for="validationDefault02">City</label>
          <input
            v-model="shippingData.city"
            type="text"
            class="form-control"
            id="city"
            placeholder="Enter City"
            value=""
          />
        </div>
      </div>

      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationDefault01">Email</label>
          <input
            v-model="shippingData.email"
            type="text"
            class="form-control"
            id="email"
            placeholder="Email"
            value=""
          />
        </div>
        <div class="col-md-6 mb-3">
          <label for="validationDefault02">Postal Code</label>
          <input
            v-model="shippingData.postal_code"
            type="text"
            class="form-control"
            id="postal"
            placeholder="Postal Code"
            value=""
          />
        </div>
      </div>
      <div class="form-row" style="width: auto">
        <div class="col-md-3 mb-3">
          <label for="">Address</label>
          <textarea
            v-model="shippingData.address"
            style="overflow: auto"
            name=""
            id="address"
            cols="70"
            rows="4"
            required
          ></textarea>
        </div>
      </div>
      <div>
        <button id="submitform" class="btn-lg mb-3" type="submit"
style="background-color: pink">{{ buttonValue }}</button>
      </div>
    </form>
    <!-- <SuccessFrom  v-show="success"></SuccessFrom> -->
  </div>
</template>

<script>
import shippingService from "../services/shippingService.js";
// import SuccessFrom from "./SuccessFrom.vue";

export default {
  name: "ShippingForm",
  data() {
    return {
      shippingData: {
        first_name: null,
        last_name: null,
        email: null,
        phone_number: null,
        city: null,
        postal_code: null,
        address: null,
        },
        success: false,
        buttonValue: "Submit"
    };
  },
  methods : {
            inputShipping(){
                let data = this.shippingData;
                if(this.buttonValue === "Submit"){
                    shippingService.create(data)
                        .then(response => {
                            console.log(response.data);
                            this.success = true;
                            
                        })
                        .catch(e => {
                            console.log(e);
                        });
                        location.reload();
                }else{
                    shippingService.updateShipping(data.id, data)
                        .then(response => {
                            console.log(response.data);
                            this.success = true;
                        })
                        .catch(e => {
                            console.log(e);
                        });
                        location.reload();
                }
            },
        },
    components: {
        // SuccessFrom,
    },
    props: ["shippingDataProps"],
    watch: {
      'shippingDataProps'(newValue) {
        this.shippingData = newValue;
        console.log(this.shippingData);
        this.buttonValue = "Update"
      }
    }
  }

</script>
<style scoped>
.border-radius-25{
    border-radius: 25px;
}
.border-color-pink{
    border: solid 2px #F9CADA;
}
</style>
