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

### First install apexchart using npm

```bash[terminal/cmd]
npm install --save apexcharts
```

#### Vue 2 Adapter (to work with Vue 2):

```bash[terminal/cmd]
npm install --save vue-apexcharts
```

Add the component to `resources/js/app.js` file:

```js[resources/js/app.js]
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
```

#### Vue 3 Adapter (working on Vue 3):

```bash[terminal/cmd]
npm install --save vue3-apexcharts
```

Add the component to `resources/js/app.js` file:

```js[resources/js/app.js]
import VueApexCharts from "vue3-apexcharts";

createApp({...}).use(VueApexCharts)
```

### Create a chart and use `toVue()` method

Then hidrate the component with the chart data.

```php[php]
// Simple example
$chart = (new ArielMejiaDev\LarapexCharts\LarapexChart())->areaChart()
    ->setTitle('Users')
    ->addArea('Active users', [10, 30, 25])
    ->addArea('Inactive users', [5, 15, 35])
    ->setColors(['#ffc63b', '#ff6384'])
    ->toVue();

// An example using Eloquent
$chart = (new LarapexChart)->areaChart()
    ->setTitle('Users')
    ->addArea('Active users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->addArea('Inactive users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->setColors(['#ffc63b', '#ff6384'])
    ->toVue();

return Inertia::render('Chart', compact('chart'));
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

You can respond to a request with a chart object, to be consumed by any other Javascript framework like ReactJS, Angular or even vainilla JS by using the method `toJson()`

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
    "id":"ylbhrsxwgicnkumtpojqdvaez",
    "options":{
        "chart":{
            "type":"area",
            "height":500,
            "width":"100%",
            "toolbar":{"show":false},
            "zoom":{"enabled":true}
        },
        "plotOptions":{"bar":{"horizontal":false}},
        "colors":["#008FFB","#00E396","#feb019","#ff455f","#775dd0","#80effe","#0077B5","#ff6384","#c9cbcf","#0057ff","00a9f4","#2ccdc9","#5e72e4"],
        "series":[
            {
                "name":"Physical sales",
                "data":[40,93,35,42,18,82]
            },
            {
                "name":"Digital sales",
                "data":[70,29,77,28,55,45]
            }
        ],
        "dataLabels":{"enabled":true},
        "title":{"text":"Sales during 2021."},
        "subtitle":{"text":"Physical sales vs Digital sales.","align":"left"},
        "xaxis":{"categories":["January","February","March","April","May","June"]},
        "grid":{"show":false},
        "markers":{"show":false}
    }
}
```

<alert type="info">
    If the package get enough support, the next major release (2022) would add a more detail integrations for other Javascript frameworks.
</alert>