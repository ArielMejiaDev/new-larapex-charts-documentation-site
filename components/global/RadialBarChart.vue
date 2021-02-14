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
      type: "radialBar",
      options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":false}},"colors":["#D32F2F","#03A9F4"],"dataLabels":{"enabled":false},"title":{"text":"Passing effectiveness."},"subtitle":{"text":"Barcelona city vs Madrid sports.","align":"left"},"xaxis":{"categories":[],"convertedCatToNumeric":false},"grid":{"show":false},"markers":{"show":false},"labels":["Barcelona city","Madrid sports"]},
      series: [75, 60]
    }
  }
}
</script>