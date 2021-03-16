<template>
  <div>
    <p>Menu</p>
    <ul>
        <li v-for="item in menu" v-bind:key="item[0]">
            <p>{{item[0]}} x {{item[1]}}</p>
        </li>
    </ul>
    <button v-on:click="findTotal(); sendOrder();">Calculate total</button>
    <p v-show="showV">Subtotal: ${{subT}}</p>
    <p v-show="showV">Grand Total: ${{grand}}</p>
  </div>
</template>

<script>
import database from "../firebase.js"

export default {
    props:{
        menu:{
            type:Array
        }
    },
    data(){
        return{
            subT:0,
            showV:false,
            grand:0,
            items:[]
        }
    },
    created:function(){
          this.get();
    },
    methods:{
        findTotal:function(){
            this.subT=0;
             for (let i = 0; i < this.menu.length; i++) {
                this.subT+=this.menu[i][2]*this.menu[i][1];
             }
             this.showV=true;
        },
        get:function(){
            database.collection('menu').get().then((querySnapShot)=>{
                let item={};
                querySnapShot.forEach(doc=>{
                    item=doc.data();
                    this.items.push(item);
                }); 
            });
        },
        compond:function(){
            var order={};
            for (let i = 0; i < this.items.length; i++){
                var item1=this.items[i];
                order[item1.name]=0;
            }
            for (let i = 0; i < this.menu.length; i++){
                var item2=this.menu[i];
                order[item2[0]]=item2[1];
            }
            return order;
        },
        sendOrder:function(){
            database.collection('orders').add(this.compond()).then(() => {location.reload()});
        }
    },
    watch:{
      subT: function() {
        this.grand =  (this.subT*1.07).toFixed(2);
        this.grand.toFixed(2);
      }
    }
}
</script>

<style scoped>
p,ul{
    font-size: 30px;
}
button{
    font-size: 15px;
    background-color:#FFC0CB;
}
</style>