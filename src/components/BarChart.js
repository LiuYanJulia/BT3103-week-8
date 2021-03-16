import { Bar } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: ["Cereal Prawn", "Dry Beef Hor Fun", "Mapo Tofu", "Pork Fried Rice", "Prawn omelette", "Sambal KangKung"],
            datasets: [{
                label: [],
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#FFC0CB"],
                data: [0,0,0,0,0,0]
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                      min: 0,
                      stepSize: 1,
                    }
                  }]
            }
        }
    }
  },
  methods: {
    fetchItems: function () {
        var ordersStore={
            "Cereal Prawn":0, 
            "Dry Beef Hor Fun":0, 
            "Mapo Tofu":0, 
            "Pork Fried Rice":0, 
            "Prawn omelette":0, 
            "Sambal KangKung":0}
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
            var oneObj=doc.data()
            for(var key in oneObj){
                ordersStore[key]=ordersStore[key]+oneObj[key]
            }
            for(let i=0;i<this.datacollection.labels.length;i++){
                this.datacollection.datasets[0].data[i]=ordersStore[this.datacollection.labels[i]]
            }
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}