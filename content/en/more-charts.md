---
title: More charts
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 4
category: 'Examples'
---

<alert type="info">

This package supports the most popular charts of the apex chart library, every release adds new charts.

</alert>

## Import LarapexChart class

```php[php]
use ArielMejiaDev\LarapexCharts\LarapexChart;
```

## Pie

```php[php]
$chart = (new LarapexChart)->pieChart()
    ->setTitle('Top 3 scorers of the team.')
    ->setSubtitle('Season 2021.')
    ->addData([20, 24, 30])
    ->setLabels(['Player 7', 'Player 10', 'Player 9']);
```

<pie-chart></pie-chart>

## Donut

```php[php]
$chart = (new LarapexChart)->donutChart()
    ->setTitle('Top 3 scorers of the team.')
    ->setSubtitle('Season 2021.')
    ->addData([20, 24, 30])
    ->setLabels(['Player 7', 'Player 10', 'Player 9']);
```

<donut-chart></donut-chart>

## Radial bar

```php[php]
$chart = (new LarapexChart)->radialChart()
    ->setTitle('Passing effectiveness.')
    ->setSubtitle('Barcelona city vs Madrid sports.')
    ->addData([75, 60])
    ->setLabels(['Barcelona city', 'Madrid sports'])
    ->setColors(['#D32F2F', '#03A9F4']);
```

<radial-bar-chart></radial-bar-chart>

## Polar area <badge>New chart</badge>

```php[php]
$chart = (new LarapexChart)->polarAreaChart()
    ->setTitle('Top 3 scorers of the team.')
    ->setSubtitle('Season 2021.')
    ->addData([20, 24, 30])
    ->setLabels(['Player 7', 'Player 10', 'Player 9']);
```

<polar-area-chart></polar-area-chart>

## Line

```php[php]
$chart = (new LarapexChart)->lineChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<line-chart></line-chart>

## Area

```php[php]
$chart = (new LarapexChart)->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<area-chart></area-chart>

## Bar

```php[php]
$chart = (new LarapexChart)->barChart()
    ->setTitle('San Francisco vs Boston.')
    ->setSubtitle('Wins during season 2021.')
    ->addData('San Francisco', [6, 9, 3, 4, 10, 8])
    ->addData('Boston', [7, 3, 8, 2, 6, 4])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<bar-chart></bar-chart>

## Horizontal Bar

```php[php]
$chart = (new LarapexChart)->horizontalBarChart()
    ->setTitle('Los Angeles vs Miami.')
    ->setSubtitle('Wins during season 2021.')
    ->setColors(['#FFC107', '#D32F2F'])
    ->addData('San Francisco', [6, 9, 3, 4, 10, 8])
    ->addData('Boston', [7, 3, 8, 2, 6, 4])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<horizontal-bar-chart></horizontal-bar-chart>

## Heatmap

```php[php]
$chart = (new LarapexChart)->heatMapChart()
    ->setTitle('Basic radar chart')
    ->addData('Sales', [80, 50, 30, 40, 100, 20])
    ->addHeat('Income', [70, 10, 80, 20, 60, 40])
    ->setMarkers(['#FFA41B', '#4F46E5'], 7, 10)
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<heatmap-chart></heatmap-chart>

## Radar chart <badge>New chart</badge>

```php[php]
$chart = (new LarapexChart)->radarChart()
    ->setTitle('Individual Player Stats.')
    ->setSubtitle('Season 2021.')
    ->addData('Stats', [70, 93, 78, 97, 50, 90])
    ->setXAxis(['Pass', 'Dribble', 'Shot', 'Stamina', 'Long shots', 'Tactical'])
    ->setMarkers(['#303F9F'], 7, 10);
```

<radar-chart></radar-chart>