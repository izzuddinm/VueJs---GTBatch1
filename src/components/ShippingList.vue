<template> 
    <div>        
        <h1 class="text-center my-4">Shipping List Table</h1>
        <table class="table table-striped " >
            <thead>
                <tr class="table-danger">
                    <th scope="col">No</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">City</th>
                    <th scope="col">Address</th>
                    <th scope="col">Postal Code</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody class="text-dark">
                <tr v-for="(item, index) in shippingData" :key="item.id">
                    <th>{{ index + 1 }}</th>
                    <td>{{ item.id }}</td>
                    <td>{{ item.first_name + " " + item.last_name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone_number }}</td>
                    <td>{{ item.city }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.postal_code }}</td>
                    <td class="d-flex">
                        <button class="btn btn-sm btn-primary mr-2 text-white" @click="$emit('updateShippingFunc', item)">Update</button>
                        <button class="btn btn-sm btn-danger" @click="deleteShippingFunc(item.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import shippingService from "../services/shippingService"
export default {
    methods : {
        getShipping(){
        shippingService.getAll()
                .then(response => {
                    this.shippingData = response.data;
                    console.log(this.shippingData)
                })
                .catch(e => {
                console.log(e)
            })
        },
        deleteShippingFunc(id){
            if(confirm("Apakah anda yakin hapus?")){
                shippingService.deleteShipping(id)
                .then(response => {
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
                    location.reload();
            } else {
                    this.$alert("Hapus di Batalkan !")            
            }
        }
    },
    mounted(){
        this.getShipping();   
    },
    data(){
        return{
            shippingData : null,
        }
    }
}
</script>

<style>

</style>