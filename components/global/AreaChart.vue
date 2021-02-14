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
      options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":false}},"colors":["#008FFB","#00E396","#feb019","#ff455f","#775dd0","#80effe","#0077B5","#ff6384","#c9cbcf","#0057ff","00a9f4","#2ccdc9","#5e72e4"],"dataLabels":{"enabled":false},"title":{"text":"Sales during 2021."},"subtitle":{"text":"Physical sales vs Digital sales.","align":"left"},"xaxis":{"categories":["January","February","March","April","May","June"],"convertedCatToNumeric":true},"grid":{"show":false},"markers":{"show":false}},
      series: [{name:"Physical sales",data:[40,93,35,42,18,82]},{name:"Digital sales",data:[70,29,77,28,55,45]}],
    }
  }
}
</script>