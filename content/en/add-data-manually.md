---
title: Add data manually
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 9
category: 'Advance'
---

You can also add data manually with the method `setData()`:

#### Import LarapexChart class

```php[php]
use ArielMejiaDev\LarapexCharts\LarapexChart;
```

### Simple chart

```php[php]
$chart = (new Larapexchart)->pieChart()
    ->setTitle('Sales by month')
    ->addData([25, 20, 30])
    ->setLabels(['January', 'February', 'March']);
```

<add-data-manually-simple-chart></add-data-manually-simple-chart>

### Complex chart

```php[php]
$chart = (new Larapexchart)->barChart()
    ->setTitle('Sales by month')
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
    ->setLabels(['January', 'February', 'March']);
```

<add-data-manually-complex-chart></add-data-manually-complex-chart>

<alert type="danger">
    
`setData()` expects a simple or multidimensional array based on the type of chart.

</alert>

This syntax can be confusing, it is more recommended to use the `addData()` method and all its aliases based on the chart instead.

<p class="text-red-600">In the next major release (2022) this method would be <span class="font-semibold">deprecated</span> and in the future it would be <span class="font-semibold">deleted</span>.</p>

#### Same chart with the new syntax

Using the new syntax the chart api is shorter, more fluent and expressive.

```php[php]
$chart = (new Larapexchart)->barChart()
    ->setTitle('Sales by month')
    ->addBar('Company A', [500, 1000, 1900])
    ->addBar('Company B', [300, 900, 1400])
    ->addBar('Company B', [430, 245, 500])
    ->setLabels(['January', 'February', 'March']);
```

It would be exactly the same result with with a better syntax 🧙‍♂️.

<add-data-manually-complex-chart></add-data-manually-complex-chart>