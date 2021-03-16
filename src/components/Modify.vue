<template>
  <div >
    <h1>Jcheez's Zi Char</h1>
    <ul>
        <li v-for="(key, value) in datapacket" v-bind:key="value">
            {{value}}: {{key}} <br>
            <input v-bind:id="value" placeholder =0 type="number" min="0" required>
            <br><br>
        </li>
    </ul>
    <button v-bind:id="id" v-on:click="updateOrder()">Update Order</button>
  </div>
</template>

<script>
import database from "../firebase.js"

export default {
    data(){
        return{
          id:"",
          datapacket:{},
          updateObj:{}
        }
    },
    created:function(){
        this.id=this.$route.params.docId;
        this.fetchItems();
    },
    methods:{
      fetchItems:function(){
        var docRef = database.collection("orders").doc(this.id);
        docRef.get().then( doc =>{
          this.datapacket=doc.data();
        });
      },
      updateOrder:function(){
        for(var key in this.datapacket){
          var n=Number(document.getElementById(key).value);
          this.updateObj[key]=n;
        }
        database.collection('orders').doc(this.id).update(this.updateObj).then(this.$router.push('orders'));
      }
    }
}
</script>

<style scoped>
h1 {
  background-color: antiquewhite;
  font-size:60px;
  color:blueviolet;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
  font-size:30px;
}
button {
    background-color:#FFC0CB;
    border-radius: 10px;
    font-size: 15px;
    width:200px;
    height:40px;
}
</style>