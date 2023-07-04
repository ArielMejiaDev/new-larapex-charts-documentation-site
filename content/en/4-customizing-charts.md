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

The default font in the package is `Helvetica`, but you can customize font family and font color:

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

## Customize Chart Grid

The `setGrid()` method is available for:

* Line Charts
* Area Charts
* Bar Charts

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

<custom-area-chart></custom-area-chart>

By adding just the `setGrid()` method it adds a default style that would be enough in many cases, but you can even customize more the grid by passing some params:

```php[php]
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid('#3F51B5', 0.1);
```

<custom-grid-area-chart></custom-grid-area-chart>

## Customize Chart Markers

In this version you are able to customize the markers of every chart graph.

```php[php]
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid('#3F51B5', 0.1)
    ->setColors(['#FFC107', '#303F9F'])
    ->setMarkers(['#FF5722', '#E040FB'], 7, 10);
```

<custom-markers-area-chart></custom-markers-area-chart>

## Customize Data Labels

You can add labels on chart markers to show all the time the value of every series of data.

```php[php]
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid('#3F51B5', 0.1)
    ->setColors(['#FFC107', '#303F9F'])
    ->setMarkers(['#FF5722', '#E040FB'], 7, 10);
```

<custom-data-labels-area-chart></custom-data-labels-area-chart>

## Sparkline Charts

You can remove the X and Y Axes and grid to get a pretty clean chart (very popular for cards & little table charts).

```php[php]
return $this->chart->lineChart()
    ->addData('Published posts', [4, 9, 5, 2, 1, 8])
    ->setSparkline();
```

<!-- Here add a Sparklines chart -->
<custom-sparkline-line-chart></custom-sparkline-line-chart>

## Stacked Charts

The `setStacked()` method is available for:

* Line Charts
* Area Charts
* Bar Charts
* Horizontal Bar Charts

#### Line chart stacked:

```php[php]
return $this->chart->lineChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Published posts', [4, 9, 5, 2, 1, 8])
    ->addData('Unpublished posts', [7, 2, 7, 2, 5, 4])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setStacked();
```

<custom-line-chart-stacked></custom-line-chart-stacked>

#### Area chart stacked:

```php[php]
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid();
```

<custom-area-chart-stacked></custom-area-chart-stacked>

#### Bar chart stacked:

```php[php]
return $this->chart->barChart()
    ->setTitle('San Francisco vs Boston.')
    ->setSubtitle('Wins during season 2021.')
    ->addData('San Francisco', [6, 9, 3, 4, 10, 8])
    ->addData('Boston', [7, 3, 8, 2, 6, 4])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setStacked();
```

<custom-bar-chart-stacked></custom-bar-chart-stacked>