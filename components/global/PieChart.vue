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
      type: "pie",
      options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":false}},"colors":["#008FFB","#00E396","#feb019","#ff455f","#775dd0","#80effe","#0077B5","#ff6384","#c9cbcf","#0057ff","00a9f4","#2ccdc9","#5e72e4"],"dataLabels":{"enabled":false},"title":{"text":"Top 3 scorers of the team."},"subtitle":{"text":"Season 2021.","align":"left"},"xaxis":{"categories":[],"convertedCatToNumeric":false},"grid":{"show":false},"markers":{"show":false},"labels":["Player 7","Player 10","Player 9"]},
      series: [20,24,30]
    }
  }
}
</script>