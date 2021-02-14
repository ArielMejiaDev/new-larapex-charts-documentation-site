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
      options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":false}},"colors":["#FFC107","#303F9F"],"dataLabels":{"enabled":false},"title":{"text":"Sales during 2021."},"subtitle":{"text":"Physical sales vs Digital sales.","align":"left"},"xaxis":{"categories":["January","February","March","April","May","June"],"convertedCatToNumeric":true},"grid":{"row":{"colors":["#3F51B5","transparent"],"opacity":0.1}},"markers":{"size":7,"colors":["#FF5722","#E040FB"],"strokeColors":"#fff","strokeWidth":3.5,"hover":{"size":10}}},
      series: [{"name":"Physical sales","data":[40,93,35,42,18,82]},{"name":"Digital sales","data":[70,29,77,28,55,45]}]
    }
  }
}
</script>