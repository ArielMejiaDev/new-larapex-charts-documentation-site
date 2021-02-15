---
title: Integraciones
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 7
category: 'Avanzado'
---

## Integraciones con VueJS y InertiaJS

VueJS es el framework javascript mas popular en la comunidad de Laravel, hace sentido que tenga su propía integración.

### Uso del método `toVue()`

Puedes responder desde un endpoint a una petición Http (típicamente por ajax, fetch, axios) desde un proyecto en VueCLI o NuxtJS.

Tambien puedes usar InertiaJS para hidratar componentes Vue con datos directamente desde un controlador de Laravel..

### Primero instala la integración de NPM.

#### Trabajando con Vue 2:

```bash[terminal/cmd]
npm install --save apexcharts
npm install --save vue-apexcharts
```

Agrega el componente al archivo `resources/js/app.js`:

```js[resources/js/app.js]
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
```

#### Trabajando con Vue 3:

```bash[terminal/cmd]
npm install --save apexcharts
npm install --save vue3-apexcharts
```

Agrega el componente al archivo `resources/js/app.js`:

```js[resources/js/app.js]
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(VueApexCharts);
```

### Crea un chart y usa el método `toVue()`:

Hidrata el componente pasandole datos, en este caso el chart.

```php[php]
$chart = (new LarapexChart)->areaChart()
    ->setTitle('Users')
    ->addArea('Active users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->addArea('Inactive users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->setColors(['#ffc63b', '#ff6384'])
    ->toVue();

return Inertia::render('ChartsComponent', compact('chart'));
```

### Renderiza el chart en un componente Vue

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

## Integraciones con otros frameworks de Javascript

Puedes responder a una petición con un objeto de tipo chart, para que sea consumido por cualquier framework de Javascript como ReactJS, Angular, o incluso si solo usas Javascript vainilla con el método `toJson()`.

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

#### La respuesta sería:

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
    Si el paquete recibe suficiente apoyo, en el siguiente release mayor (2022) se podrían agregar integraciones mas detalladas con otros frameworks Javascript.
</alert>