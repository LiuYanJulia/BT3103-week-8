<template>
  <div>
    <button v-on:click="decrease">-</button>
    <span> {{showedvalue}} </span>
    <button v-on:click="increase">+</button>
  </div>
</template>

<script>
export default {
    props:{
        itemL:{
            type:Array
        }
    },
    data(){
        return{
            showedvalue:0
        }
    },
    methods:{
        decrease:function(){
            if(this.showedvalue>0){
                this.showedvalue-=1;
                this.$emit('counter', this.itemL, this.showedvalue)
            }
        },
        increase:function(){
            if(this.showedvalue>=10){
                alert("You cannot buy more than 10 items.");
            } else {
                this.showedvalue+=1;
                this.$emit('counter', this.itemL, this.showedvalue)
            }
        }
    }
}
</script>

<style scoped>
span{
    font-size: 30px;
}
button {
    background-color:#FFC0CB;
    border-radius: 10px;
    font-size: 30px;
    height:50px;
    width:50px;
}
</style>