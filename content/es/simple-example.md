---
title: Ejemplo simple
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 3
category: 'Ejemplos'
---

#### Retornado una vista con un chart

```php[routes/web.php]
use ArielMejiaDev\LarapexCharts\LarapexChart;

Route::get('chart', function () {

    $chart = (new LarapexChart)->pieChart()
        ->setTitle('Top 3 scorers of the team.')
        ->setSubtitle('Season 2021.')
        ->addData([40, 50, 30])
        ->setLabels(['Player 7', 'Player 10', 'Player 9']);
    
    return view('chart', compact('chart'));
}); 
```

También puedes crear charts usando el facade:

```php[routes/web.php]
use LarapexChart;

Route::get('chart', function () {

    $chart = LarapexChart::pieChart()
        ->setTitle('Top 3 scorers of the team.')
        ->setSubtitle('Season 2021.')
        ->addData([40, 50, 30])
        ->setLabels(['Player 7', 'Player 10', 'Player 9']);
    
    return view('chart', compact('chart'));
}); 
```

<alert type="danger">

Debes crear una vista en el directorio `resources/views`.

</alert>

#### Agrega un chart a la vista

```php[resources/views/chart.blade.php]
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chart Sample</title>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="h-screen bg-gray-100">

<div class="container px-4 mx-auto">

    <div class="p-6 m-20 bg-white rounded shadow">
        {!! $chart->container() !!}
    </div>

</div>

<script src="{{ LarapexChart::cdn() }}"></script>

<!-- O puedes usar directamente el cdn 
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script> 
-->

<!-- O puedes usar el archivo local que publica el paquete en el directorio public/vendor
    <script src="{{ asset('vendor/larapex-charts/apexchart.js') }}"></script> 
-->

{{ $chart->script() }}
</body>
</html>
```

<pie-chart></pie-chart>