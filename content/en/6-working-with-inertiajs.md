---
title: Working with InertiaJS
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 6
category: 'Advance'
---

You can use `InertiaJS` to hydrate `Vue` components with data directly from a controller.

### Install Apex charts using npm

```bash[terminal/cmd]
npm install --save apexcharts
```

### Install Vue 3 Adapter:

```bash[terminal/cmd]
npm install --save vue3-apexcharts
```

### Add Vue 3 to the app

Add the component to `resources/js/app.js` file:

```js[resources/js/app.js]
import VueApexCharts from "vue3-apexcharts";

createApp({...}).use(VueApexCharts)
```

### Add Vue 3 to the app with Laravel Breeze & Laravel Jetstream

```js[resources/js/app.js]
import VueApexCharts from "vue3-apexcharts";

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .mixin({ methods: { route } })
            .use(plugin)
            .use(VueApexCharts)
            .mount(el);
    },
});
```

### Create a chart with vue option

```bash
php artisan make:chart MonthlyUsersChart --vue
```

It would generate a chart class:

```php[app/Charts/MonthlyUsersChart]
return $this->chart->areaChart()
    ->setTitle('Monthly Users')
    ->addArea('Active users', [10, 30, 25])
    ->addArea('Inactive users', [5, 15, 35])
    ->setColors(['#ffc63b', '#ff6384'])
    ->toVue();
```

### Inject the chart and hydrate vue component with the chart

On any controller

```php
public function index(MonthlyUsersChart $chart)
{
    return Inertia::render('Chart', ['chart' => $chart->build()]);
}
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

You can return a response to a request with a chart object, to be consumed by any other Javascript framework like ReactJS, Angular or even vainilla JS by using the method `toJson()`.

```bash
php artisan make:chart MonthlyUsersChart --json
```

```php[php]
return $this->chart->pieChart()
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
