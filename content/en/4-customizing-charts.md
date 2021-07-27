---
title: Customizing charts
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 4
category: 'Examples'
---

## Change general chart colors schema

In your `config/larapex-chart.php` file, you can edit the colors array to customize the chart colors order.

```php[config/larapex-charts.php]
'colors' => [
    '#008FFB', '#00E396', '#feb019', '#ff455f', '#775dd0', '#80effe',
    '#0077B5', '#ff6384', '#c9cbcf', '#0057ff', '00a9f4', '#2ccdc9', '#5e72e4'
]
```

<alert type="danger">

The colors array only support hexadecimal values and as string.

</alert>

## Change chart colors dynamically

If the default config colors array does not reflect a specific need the package provides a method to add an array of colors on the fly:

```php[php]
return $this->chart->lineChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Published posts', [4, 9, 5, 2, 1, 8])
    ->addData('Unpublished posts', [7, 2, 7, 2, 5, 4])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<custom-line-chart></custom-line-chart>

The `setColors` method accepts an array with hexadecimal colors as strings.

## Customize Fonts

To customize font family and font color you can use:

```php[php]
return $this->chart->lineChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Published posts', [4, 9, 5, 2, 1, 8])
    ->addData('Unpublished posts', [7, 2, 7, 2, 5, 4])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setFontFamily('DM Sans')
    ->setFontColor('#ff6384');
```

<custom-font-line-chart></custom-font-line-chart>

## setGrid() method

The `setGrid()` method is available for:

* Line charts
* Area charts
* Bar charts

You can customize the style of the grid, here an example:

```php[php]
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid();
```

<custom-first-area-chart></custom-first-area-chart>

By adding just the `setGrid()` method it adds a default style that would be enough in many cases, but you can even customize more the grid by passing some params:

```php[php]
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid(false, '#3F51B5', 0.1);
```

<custom-second-area-chart></custom-second-area-chart>

## setMarkers() method

In this version you are able to customize the markers of every chart graph.

```php[php]
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid(false, '#3F51B5', 0.1)
    ->setColors(['#FFC107', '#303F9F'])
    ->setMarkers(['#FF5722', '#E040FB'], 7, 10);
```

<custom-third-area-chart></custom-third-area-chart>

## setDataLabels method

You can add labels on chart markers to show all the time the value of every series of data.

```php[php]
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid(false, '#3F51B5', 0.1)
    ->setColors(['#FFC107', '#303F9F'])
    ->setMarkers(['#FF5722', '#E040FB'], 7, 10);
```

<custom-fourth-area-chart></custom-fourth-area-chart>
