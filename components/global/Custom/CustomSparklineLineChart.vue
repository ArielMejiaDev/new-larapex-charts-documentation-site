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
      series: [{"name":"Published posts","data":[4,9,5,2,1,8]}],
      options: {
        "chart":{
          "height":500,
          "sparkline":{
            "enabled":true
          },
        },
        "plotOptions":{
          "bar":{
            "horizontal":false
          }
        },
        // tooltip: {
        //   fixed: {
        //     enabled: false
        //   },
        //   x: {
        //     show: false
        //   },
        //   y: {
        //     title: {
        //       formatter: function (seriesName) {
        //         return ''
        //       }
        //     }
        //   },
        //   marker: {
        //     show: false
        //   }
        // },
      },
    }
  }
}
</script>