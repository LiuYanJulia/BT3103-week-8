<template>
  <div >
    <div >
        <ul id="itemsList">
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/orders" exact>Orders</router-link></li>
            <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
        </ul>
    </div>
    <compBar></compBar>
    <compLine></compLine>
  </div>
</template>

<script>
import BarChart from './BarChart2.vue'
import CallAPI from './CallAPI2.vue'
export default {
    data(){
        return{
        }
    },
    components:{
        'compBar':BarChart,
        'compLine':CallAPI
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