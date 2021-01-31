---
title: Simple example
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 4
category: 'Examples'
---

## Step 1 

#### Add a route in your project.

In this example we are going to add a "chart" route

```php
Route::get('chart', function(){
    //
});
```

## Step 2 

#### Using the package class

```php
Route::get('chart', function(){
    $chart = new LarapexChart();
    $chart->setTitle('Users')->setXAxis(['Active', 'Guests'])->setDataset([100, 200]);
});
```

## Step 3 

#### Return a view with the chart

```php
Route::get('chart', function () {
    $chart = (new LarapexChart)->setTitle('Users')->setXAxis(['Active', 'Guests'])->setDataset([100, 200]);
    return view('chart', compact('chart'));
}); 
```

<alert type="danger">

Important

Check previously creating the view in the directory `resources/views`.

</alert>

## Step 4 

#### Add the chart to a view

```php
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

    <!-- Or use the cdn directly -->

    <!-- <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script> -->

    <!-- Or use the local library as asset the package already provides a publication with this file *see below -->

    <!-- <script src="{{ asset('vendor/larapex-charts/apexchart.js') }}"></script> -->

    {{ $chart->script() }}
    </body>
</html>
```

## Helpers

Every chart instance has some method helpers:

* container()
* cdn()
* script()

You can use this helpers in your blade files to render a chart in your views.

### The container

Method will return a HTML div tag with a generated id, this id is unique for every chart and must match with the json chart object id (the package handle this for you automatically).

### The cdn()

Method returns the current http address of the cdn to work with cdn, if you prefer to work with
a hosted version of the library, the package has a vendor publication to get a copy in your `public/vendor` directory you only need to run in `terminal/console/cmd/bash`:

```php
php artisan vendor:publish 
```

And select the library file option (Remember the number could change in your project):

```php
[11] Tag: larapex-charts-apexcharts-script 
```

Type the number of the required option and press enter

Then in your blade files change the `cdn()` helper for the blade asset helper

```php
<!-- Replace this <script src="{{ $chart->cdn() }}"></script> -->
<script src="{{ asset('vendor/larapex-charts/apexchart.js') }}"></script>
```

### The script()

Method returns a script with a whole json object ready to render the chart.