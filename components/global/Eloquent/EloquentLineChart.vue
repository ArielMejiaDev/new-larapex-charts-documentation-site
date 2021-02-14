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
      type: "line",
      options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":false}},"colors":["#ffc63b","#ff6384"],"dataLabels":{"enabled":false},"title":{"text":"Users"},"subtitle":{"text":"","align":""},"xaxis":{"categories":["Jan","Feb","Mar","Apr","May","Jun"],"convertedCatToNumeric":true},"grid":{"show":false},"markers":{"show":false}},
      series: [{"name":"Active users","data":[75,25,99,48,18,50]},{"name":"Inactive users","data":[9,75,31,54,100,82]}]
    }
  }
}
</script>