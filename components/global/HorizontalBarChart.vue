<template>
  <client-only>
    <div class="w-full p-10 my-10 bg-gray-200 rounded">
      <div class="w-full p-6 bg-white rounded shadow">
        <VueApexCharts :width="options.chart.width" :type="type" :options="options" :series="series"></VueApexCharts>
      </div>
    </div>
  </client-only>
</template>

<script>

export default {
  components: {
      VueApexCharts: () => import('vue-apexcharts')
  },
  data() {
    return {
      type: "bar",
      options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":true}},"colors":["#FFC107","#D32F2F"],"dataLabels":{"enabled":false},"title":{"text":"Los Angeles vs Miami."},"subtitle":{"text":"Wins during season 2021.","align":"left"},"xaxis":{"categories":["January","February","March","April","May","June"],"convertedCatToNumeric":false},"grid":{"show":false},"markers":{"show":false}},
      series: [{"name":"San Francisco","data":[6,9,3,4,10,8]},{"name":"Boston","data":[7,3,8,2,6,4]}]
    }
  }
}
</script>