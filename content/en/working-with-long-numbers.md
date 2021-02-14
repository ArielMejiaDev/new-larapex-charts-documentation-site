---
title: Working with long numbers
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 8
category: 'Advance'
---

The chart behavior to display numbers change by the number format an example would be:

displaying `30000`:

```php
* 30.000.000  // fail
* 30,000      // fail
* 30,000.00   // fail

// Below are the valid formats

* 30000       // shows -> 30000
* 30.000      // shows -> 30
```

#### Import LarapexChart class

```php[php]
use ArielMejiaDev\LarapexCharts\LarapexChart;
```

#### Create a chart with number format valid

```php[php]
$chart = (new LarapexChart)->pieChart()
    ->setTitle('Top 3 scorers of the team.')
    ->setSubtitle('Season 2021.')
    ->addData([20000, 24000, 30000])
    ->setLabels(['Player 7', 'Player 10', 'Player 9']);
```

<working-with-long-numbers-pie-chart></working-with-long-numbers-pie-chart>