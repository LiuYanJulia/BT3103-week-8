<template>
  <div class="chart">
    <h1>Line Chart</h1>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./CallAPI.js";
export default {
  components: {
    Chart
  }
};
</script>

<style scoped>
h1 {
  background-color: #a8c9d5;
  font-size:100px;
  color: white;
  text-align: center;
  height:100px;
}
</style>
