---
title: Advance example
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 5
category: 'Examples'
---

<alert type="danger">

<strong>WARNING</strong>

This package support many, (the most popular charts) of the apex chart library, but there are a few unsupported at the moment.

</alert>

## Pie

The pie chart is the default one and is very easy to create.

```php
$chart = (new LarapexChart)->setTitle('Posts')
    ->setDataset([150, 120])
    ->setLabels(['Published', 'No Published']);
```

## Donut

```php
$chart = (new LarapexChart)->setType('donut')
    ->setTitle('Posts')
    ->setDataset([150, 120])
    ->setColors(['#dc3545', '#ffc73c'])
    ->setLabels(['Published', 'No Published']);
```

## Radial

```php
$chart = (new LarapexChart)->setTitle('Products with more profit')
    ->setSubtitle('From January To March')
    ->setType('radialBar')
    ->setLabels(['Product One', 'Product Two', 'Product Three'])
    ->setXAxis(['Jan', 'Feb', 'Mar'])
    ->setDataset([60, 40, 79]);
```

## Line

<alert type="danger">

<strong>Be carefull with setDataset() method.</strong>

- pie, donut, and radialbar charts supports a simple array as param.

- line, area, bar, horizontalbar and heatmap support multidimensional arrays.

</alert>

```php
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

## Area

```php
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

## Bar

```php
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

## Horizontal Bar

```php
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

## Heatmap

```php
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

## Change chart colors dinamically

If the default config colors array does not reflect a specific need the package provides a method to add an array of colors on the fly:

```php
$chart = (new LarapexChart)->setTitle('Posts')
    ->setDataset([150, 120])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setLabels(['Published', 'No Published']);
```

The `setColors` method accepts an array with hexadecimal colors as strings.