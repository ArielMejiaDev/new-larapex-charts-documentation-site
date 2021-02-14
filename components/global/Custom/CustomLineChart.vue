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
      options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":false}},"colors":["#ffc63b","#ff6384"],"dataLabels":{"enabled":false},"title":{"text":"Sales during 2021."},"subtitle":{"text":"Physical sales vs Digital sales.","align":"left"},"xaxis":{"categories":["January","February","March","April","May","June"],"convertedCatToNumeric":true},"grid":{"show":false},"markers":{"show":false}},
      series: [{"name":"Published posts","data":[4,9,5,2,1,8]},{"name":"Unpublished posts","data":[7,2,7,2,5,4]}]
    }
  }
}
</script>