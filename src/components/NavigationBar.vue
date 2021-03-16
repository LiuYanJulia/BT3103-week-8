<template>
  <div >
    <ul id="itemsList">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/orders" exact>Orders</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
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
  text-decoration: underline;
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