<template>
  <div >
    <h1>Jcheez's Zi Char</h1>
    <div>
      <div >
        <ul id="itemsList">
          <li><router-link to="/" exact>Home</router-link></li>
          <li><router-link to="/orders" exact>Orders</router-link></li>
          <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
        </ul>
      </div>
    <ul id="itemsList">
        <li v-for="item in items" v-bind:key="item.id">
            <span>{{item.name}}</span>
            <br>
            <img v-bind:src="item.imageURL">
            <p id="price">${{item.price}}</p>
            <component1 v-on:counter="onCounter" v-bind:itemL="item"></component1>
        </li>
    </ul>
    </div>
    <compbaskt v-bind:menu="itemsSelected" id="shoppingBasket"></compbaskt>
  </div>
</template>

<script>
import QualityCounter from './QualityCounter.vue'
import Basket from './Basket.vue'
import database from "../firebase.js"

export default {
    data(){
        return{
          itemsSelected:[],
          items:[]
        }
    },
    components:{
        'component1':QualityCounter,
        'compbaskt':Basket
    },
    created:function(){
          this.fetchItems();
    },
    methods:{
        fetchItems:function(){
          database.collection('menu').get().then((querySnapShot)=>{
            let item={};
            querySnapShot.forEach(doc=>{
              item=doc.data();
              item.show=false;
              this.items.push(item);
            }); 
          });
        },
        onCounter: function (item, count) {
            if (this.itemsSelected.length === 0 && count > 0) {
                //If there is nothing in items selected, push the ORDER in
                this.itemsSelected.push([item.name, count, item.price]);
            } else {
                var checkN=1;
                // Loop through everything to check what is not in the basket
                for (let i = 0; i < this.itemsSelected.length; i++) {
                const curr_item = this.itemsSelected[i];
                const item_name = curr_item[0];

                    // if item_name is the same as item.name and the count is more than 0, update this.itemsSelected
                    if(item.name==item_name && count>0){
                        var t1=this.itemsSelected.slice(0,i);
                        t1.push([item.name, count, item.price]);
                        var t2=this.itemsSelected.slice(i+1);
                        this.itemsSelected=t1.concat(t2);
                        checkN=0;
                    }
                    // Next, item_name is the same as item.name and the count is 0, remove it from itemsSelected.
                    if(item.name==item_name && count==0){
                        this.itemsSelected.splice(i, 1);
                        checkN=0;
                    }
                    // otherwise, if the item is not in itemSelected, add it to itemsSelected by pushing the ORDER in.
                }
                if(checkN==1){
                  this.itemsSelected.push([item.name, count, item.price]);
                }
            }
        },
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
#itemsList {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
img {
  width: 135px;
  height: 135px;
}
span{
  font-size: 30px;
}
#price {
  font-size: 30px;
}

#itemName {
  font-size: 30px;
}

#shoppingBasket {
  position: absolute;
  top: 23%;
  left: 78%;
}
</style>