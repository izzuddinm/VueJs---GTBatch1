<template>
<div>
    <Navbar></Navbar>
    <div class="row justify-content-center">
            <div class="col-10">
                <ShippingList v-show="!viewForm" @updateShippingFunc="updateShippingFunc"></ShippingList>
                <Shipping v-show="viewForm" :shippingDataProps="shippingData"></Shipping>
               
            </div> 
        </div>
    <!-- <Breadcrumb></Breadcrumb> -->
</div>
    
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ShippingList from '../components/ShippingList.vue';
import Shipping from '../components/Shipping.vue';

export default {
    name: "ShippingListPage",
    components: {
        ShippingList,
        Navbar,
        Shipping,
        // Breadcrumb
    },
    methods: {
            updateShippingFunc(item){
                this.shippingData = item
                this.viewForm = true;
            }
        },
        data(){
            return{
                viewForm : false,
                shippingData: null,
               
            }
        }

}
</script>

<style>

</style>