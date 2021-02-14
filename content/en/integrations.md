---
title: Integrations
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 7
category: 'Advance'
---

## Integration with VueJS & InertiaJS

As VueJS is the most popular javascript framework on Laravel community it makes sense to have its own integration.

### Using `toVue()` method

You can response an Http request, (typically with ajax, fetch or axios) from VueCLI or NuxtJS project.

Also you can use InertiaJS to hidrate Vue components with data directly from a controller.

### First install the npm integration

#### Working with Vue 2:

```bash[terminal/cmd]
npm install --save apexcharts
npm install --save vue-apexcharts
```

Add the component to `resources/js/app.js` file:

```js[resources/js/app.js]
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
```

#### Working with Vue 3:

```bash[terminal/cmd]
npm install --save apexcharts
npm install --save vue3-apexcharts
```

Add the component to `resources/js/app.js` file:

```js[resources/js/app.js]
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(VueApexCharts);
```

### Create a chart and use `toVue()` method

Then hidrate the component with the chart data.

```php[php]
$chart = (new LarapexChart)->areaChart()
    ->setTitle('Users')
    ->addArea('Active users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->addArea('Inactive users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->setColors(['#ffc63b', '#ff6384'])
    ->toVue();

return Inertia::render('ChartsComponent', compact('chart'));
```

### Render the chart on a Vue component

```vue[resources/js/Pages/Chart.vue]

<template>
    <div>
        <apexchart :width="chart.width" :height="chart.height" :type="chart.type" :options="chart.options" :series="chart.series"></apexchart>
    </div>
</template>

<script>
    export default {
        props: {
            chart: Object
        }
    }
</script>

```

<integrations-vue-area-chart></integrations-vue-area-chart>

## Integrations with other Javascript frameworks

You can responde to a request with a chart object, to be consumed by any other Javascript framework like ReactJS, Angular or even vainilla JS by using the method `toJson()`

```php[php]
$chart = (new LarapexChart)->pieChart()
    ->setTitle('Users')
    ->addData([
        \App\Models\User::where('id', '<=', 20)->count(),
        \App\Models\User::where('id', '>', 20)->count()
    ])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setLabels(['Active users', 'Inactive users'])
    ->toJson();

return $chart;
```

#### The response would be:

```json
{
    "height":500,
    "width":"100%",
    "type":"area",
    "options":{
        "chart":{
            "height":500,
            "toolbar":{"show":false},
            "zoom":{"enabled":true}
        },
        "plotOptions":{"bar":{"horizontal":false}},
        "colors":["#ffc63b","#ff6384"],
        "dataLabels":{"enabled":false},
        "title":{"text":"Users"},
        "subtitle":{"text":"","align":""},
        "xaxis":{"categories":[],"convertedCatToNumeric":true},
        "grid":{"show":false},
        "markers":{"show":false}
    },
    "series":[
        {"name":"Active users","data":[96,83,31,34,79,48]},
        {"name":"Inactive users","data":[55,80,4,42,92,2]}
    ]
}
```

<alert type="info">
    If the package get enough support, the next major release (2022) would add a more detail integrations for other Javascript frameworks.
</alert>