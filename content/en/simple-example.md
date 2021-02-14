---
title: Simple example
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 3
category: 'Examples'
---

#### Return a view with the chart

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

Alternatively, you can built the chart using the facade:

```php[routes/web.php]
use LarapexChart;

Route::get('chart', function () {

    $chart = LarapexChart::pieChart()
        ->setTitle('Top 3 scorers of the team.')
        ->setSubtitle('Season 2021.')
        ->addData([20, 24, 30])
        ->setLabels(['Player 7', 'Player 10', 'Player 9']);
    
    return view('chart', compact('chart'));
}); 
```

<alert type="danger">

You need to create a view in the directory `resources/views`.

</alert>

#### Add the chart to a view

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

<!-- Or use the cdn directly -->

<!-- <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script> -->

<!-- Or use the local library as asset the package already provides a publication with this file *see below -->

{{--<!-- <script src="{{ asset('vendor/larapex-charts/apexchart.js') }}"></script> -->--}}

{{ $chart->script() }}
</body>
</html>
```

<pie-chart></pie-chart>