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
      type: "area",
      options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":false}},"colors":["#ffc63b","#ff6384"],"dataLabels":{"enabled":false},"title":{"text":"Users"},"subtitle":{"text":"","align":""},"xaxis":{"categories":[],"convertedCatToNumeric":true},"grid":{"show":false},"markers":{"show":false}},
      series: [{"name":"Active users","data":[25,79,3,94,90,100]},{"name":"Inactive users","data":[17,42,98,37,49,80]}]
    }
  }
}
</script>