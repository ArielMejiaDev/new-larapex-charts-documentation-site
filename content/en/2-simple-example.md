---
title: Simple example
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 2
category: 'Examples'
---

## Create a chart

```bash
php artisan make:chart MonthlyUsersChart
```

Then select a chart type:

```markdown
- [x] Pie Chart
- [ ] Donut Chart
- [ ] Radial Bar Chart
- [ ] Polar Area Chart
- [ ] Line Chart
- [ ] Area Chart
- [ ] Bar Chart
- [ ] Horizontal Bar Chart
- [ ] HeatMap Chart
- [ ] Radar Chart
```

Now you are able to see the chart file in `app/Charts/MonthlyUsersChart.php`

```php
<?php

namespace App\Charts;

use ArielMejiaDev\LarapexCharts\LarapexChart;

class MonthlyUsersChart
{
    protected $chart;

    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    } 
   
    public function build()
    {
        return $this->chart->pieChart()
            ->setTitle('Top 3 scorers of the team.')
            ->setSubtitle('Season 2021.')
            ->addData([40, 50, 30])
            ->setLabels(['Player 7', 'Player 10', 'Player 9']);
    }
}
```

## Return a view with the chart

#### Create a controller

```bash
php artisan make:controller UserController -r
```
On `app/Http/Controllers/UserController.php` inject the chart object:

```php
public function index(MonthlyUsersChart $chart)
{
    return view('users.index', ['chart' => $chart->build()]);
} 
```

<alert type="warning">

You need to create a view in the directory `resources/views/users/index.blade.php`.

</alert>

#### Attach a route to the controller

Add this route on `routes/web.php`

```php
Route::get('/users', [UserController::class, 'index'])->name('users.index');
```

#### Add the chart to a view

Copy and paste this layout, it is using tailwindcss, but you can use any css styles.

It adds `$chart->container()`, `$chart->cdn()` and `$chart->script()` methods, to render a chart.

```php[resources/views/users/index.blade.php]
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
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

<script src="{{ $chart->cdn() }}"></script>

{{ $chart->script() }}
</body>
</html>
```

## It would look like this

<pie-chart></pie-chart>
