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
      type: "radar",
      options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":false}},"colors":["#008FFB","#00E396","#feb019","#ff455f","#775dd0","#80effe","#0077B5","#ff6384","#c9cbcf","#0057ff","00a9f4","#2ccdc9","#5e72e4"],"dataLabels":{"enabled":false},"title":{"text":"Individual Player Stats."},"subtitle":{"text":"Season 2021.","align":"left"},"xaxis":{"categories":["Pass","Dribble","Shot","Stamina","Long shots","Tactical"],"convertedCatToNumeric":false},"grid":{"show":false},"markers":{"size":7,"colors":["#303F9F"],"strokeColors":"#fff","strokeWidth":3.5,"hover":{"size":10}}},
      series: [{"name":"Stats","data":[70,93,78,97,50,90]}]
    }
  }
}
</script>