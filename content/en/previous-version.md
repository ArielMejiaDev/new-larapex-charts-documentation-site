---
title: Previous version 1.0.0
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 13
category: Community
---

<alert type="info">

it is recommended to update the package version 2 to get all new features available.

</alert>

### Publish package files:

```php[php]
php artisan vendor:publish 
```
In `config/larapex-chart.php`, you can edit the array of colors:

```php[php]
'colors' => [
    '#008FFB', '#00E396', '#feb019', '#ff455f', '#775dd0', '#80effe',
    '#0077B5', '#ff6384', '#c9cbcf', '#0057ff', '00a9f4', '#2ccdc9', '#5e72e4'
]
```

### Return the chart to a view

```php[routes/web.php]
Route::get('chart', function () {
    $chart = (new LarapexChart)->setTitle('Users')->setXAxis(['Active', 'Guests'])->setDataset([100, 200]);
    return view('chart', compact('chart'));
}); 
```

<alert type="danger">

Important

To make it work you need to create a blade view in `resources/views`.

</alert>

### Add the chart to a view

```php[resources/views/chart.blade.php]
<!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Chart Sample</title>
    </head>
    <body>

    {!! $chart->container() !!}

    <script src="{{ $chart->cdn() }}"></script>

    <!-- Use the cdn from jsdelivr -->

    <!-- <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script> -->

    <!-- Or use the published files from the package -->

    <!-- <script src="{{ asset('vendor/larapex-charts/apexchart.js') }}"></script> -->

    {{ $chart->script() }}
    </body>
</html>
```

In order to use `apexchart.js` file from the publish files of the package, you must use this command:

```php[terminal/cmd]
php artisan vendor:publish 
```

Select the number according to the library file by typing the number and press enter:

```php[terminal/cmd]
[11] Tag: larapex-charts-apexcharts-script 
```

### More charts examples:

#### Pie

```php[php]
$chart = (new LarapexChart)->setType('pie')
    ->setTitle('Posts')
    ->setDataset([150, 120])
    ->setLabels(['Published', 'No Published']);
```

#### Donut

```php[php]
$chart = (new LarapexChart)->setType('donut')
    ->setTitle('Posts')
    ->setDataset([150, 120])
    ->setColors(['#dc3545', '#ffc73c'])
    ->setLabels(['Published', 'No Published']);
```

#### Radial

```php[php]
$chart = (new LarapexChart)->setTitle('Products with more profit')
    ->setSubtitle('From January To March')
    ->setType('radialBar')
    ->setLabels(['Product One', 'Product Two', 'Product Three'])
    ->setXAxis(['Jan', 'Feb', 'Mar'])
    ->setDataset([60, 40, 79]);
```

#### Line

```php[php]
$chart = (new LarapexChart)->setType('line')
    ->setTitle('Total Users Monthly')
    ->setSubtitle('From January to March')
    ->setXAxis([
        'Jan', 'Feb', 'Mar'
    ])
    ->setDataset([
        [
            'name'  =>  'Active Users',
            'data'  =>  [250, 700, 1200]
        ]
    ])
;
```

#### Area

```php[php]
$chart = (new LarapexChart)->setType('area')
    ->setTitle('Total Users Monthly')
    ->setSubtitle('From January to March')
    ->setXAxis([
        'Jan', 'Feb', 'Mar'
    ])
    ->setDataset([
        [
            'name'  =>  'Active Users',
            'data'  =>  [250, 700, 1200]
        ]
    ])
;
```

#### Bar

```php[php]
$chart = (new LarapexChart)->setTitle('Net Profit')
    ->setSubtitle('From January To March')
    ->setType('bar')
    ->setXAxis(['Jan', 'Feb', 'Mar'])
    ->setGrid(true)
    ->setDataset([
        [
            'name'  => 'Company A',
            'data'  =>  [500, 1000, 1900]
        ],
        [
            'name'  => 'Company B',
            'data'  => [300, 900, 1400]
        ],
        [
            'name'  => 'Company C',
            'data'  => [430, 245, 500]
        ]
    ])
    ->setStroke(1)
;
```

#### Horizontal Bar

```php[php]
$chart = (new LarapexChart)->setTitle('Net Profit')
    ->setSubtitle('From January To March')
    ->setType('bar')
    ->setHorizontal(true)
    ->setXAxis(['Jan', 'Feb', 'Mar'])
    ->setGrid(true)
    ->setDataset([
        [
            'name'  => 'Company A',
            'data'  =>  [500, 1000, 1900]
        ],
        [
            'name'  => 'Company B',
            'data'  => [300, 900, 1400]
        ],
        [
            'name'  => 'Company C',
            'data'  => [430, 245, 500]
        ]
    ])
    ->setStroke(1)
;
```

#### Heatmap

```php[php]
$chart = (new LarapexChart)->setType('heatmap')
    ->setTitle('Total Users')
    ->setSubtitle('From January to March')
    ->setXAxis([
        'Jan', 'Feb', 'Mar'
    ])
    ->setDataset([
        [
            'name'  =>  'Users of Basic Plan',
            'data'  =>  [250, 700, 1200]
        ],
        [
            'name'  =>  'Users of Premium Plan',
            'data'  =>  [1000, 1124, 2000]
        ]
    ])
    ->setHeight(250)
    ->setGrid(false)
;
```

#### Change colors dinamically

To modify the array order or colors by default you can use another array of colors for a specific chart.

`chart`:

```php[php]
$chart = (new LarapexChart)->setTitle('Posts')
    ->setDataset([150, 120])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setLabels(['Published', 'No Published']);
```

The method `setColors()` accepts an array of strings with hexadecimal values.

#### Working with long numbers

The package works great and handle correctly order with the following formats: 

* `12000` 
* `12.000`
* `12000.00`

<alert type="danger">

<strong>Important</strong>

The package does not does not support amounts with multiple dots, this is related with apexchartJS library and is not related to this implementation.

</alert>

```php[php]
$chart = (new LarapexChart)->setTitle('Posts')
    ->setDataset([150000, 120000])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setLabels(['Published', 'No Published']);
```

#### Using eloquent

```php[php]
Route::get('chart', function () {

    $chart = (new LarapexChart)->setTitle('Users')
        ->setDataset([User::where('id', '<=', 20)->count(), User::where('id', '>', 20)->count()])
        ->setColors(['#ffc63b', '#ff6384'])
        ->setLabels(['Published', 'No Published']);

    return view('chart', compact('chart'));
});
```