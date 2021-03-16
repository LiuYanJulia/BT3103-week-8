<template>
  <div >
    <h1>Jcheez's Zi Char</h1>
    <div >
        <ul id="itemsList">
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/orders" exact>Orders</router-link></li>
            <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
        </ul>
    </div>
    <ul id="itemsList">
        <li v-for="item in orders" v-bind:key="item.id">
            <aside>
              <button v-bind:id="item[0]" v-on:click="deleteItem($event)">Delete</button>
              <button v-bind:id="item[0]" v-on:click="route($event)">Modify</button>
            </aside>
            <div id="block" v-for="(key, value) in item[1]" v-bind:key="key">
                {{value}}: {{key}} <br>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import database from "../firebase.js"
export default {
    data(){
        return{
          orders:[]
        }
    },
    created:function(){
          this.fetchItems();
    },
    methods:{
      deleteItem:function(event){
        let doc_id = event.target.getAttribute("id");
        database.collection('orders').doc(doc_id).delete().then(() => {location.reload()});
      },
      route:function(event){
        let doc_id = event.target.getAttribute("id");
        this.$router.push({name:'modify', params:{docId:doc_id}});
      },
      fetchItems:function(){
          database.collection('orders').get().then((querySnapShot)=>{
            querySnapShot.forEach(doc=>{
              let item={};
              let helper=[];
              item=doc.data();
              helper.push(doc.id);
              helper.push(item);
              this.orders.push(helper);
            }); 
          });
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
#itemsList {
  width: 100%;
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
aside {
   width: 30%;
   float: right;
}
button {
    background-color:#FFC0CB;
    border-radius: 10px;
    font-size: 15px;
    width:60px;
    height:30px;
}
#block{
  width:60%
}
</style>