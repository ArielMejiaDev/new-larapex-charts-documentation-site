---
title: Agregar datos manualmente
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 9
category: 'Avanzado'
---

Puedes agregar los datos de cada chart de forma manual con el método `setData()`:

#### Importa la clase LarapexChart

```php[php]
use ArielMejiaDev\LarapexCharts\LarapexChart;
```

### Chart simple

```php[php]
$chart = (new Larapexchart)->pieChart()
    ->setTitle('Sales by month')
    ->addData([25, 20, 30])
    ->setLabels(['January', 'February', 'March']);
```

<add-data-manually-simple-chart></add-data-manually-simple-chart>

### Chart complejo

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
    
`setData()` espera un array simple o multidimensional basado en el tipo de chart.

</alert>

Esta sintaxis puede ser confusa, es mas recomendado usar en su lugar el método `addData()` y todos los alias de este basado en el chart.

<p class="text-red-600">En el siguiente release (2022) este método va a ser <span class="font-semibold">deprecado</span> y en el futuro va a ser <span class="font-semibold">eliminado</span>.</p>

#### El mismo chart con la nueva sintaxis

Con la nueva sintaxis la api del chart queda mas corta, fluida y expresiva.

```php[php]
$chart = (new Larapexchart)->barChart()
    ->setTitle('Sales by month')
    ->addBar('Company A', [500, 1000, 1900])
    ->addBar('Company B', [300, 900, 1400])
    ->addBar('Company B', [430, 245, 500])
    ->setLabels(['January', 'February', 'March']);
```

El resultado debe ser el mismo pero, con una mejor sintaxis 🧙‍♂️.

<add-data-manually-complex-chart></add-data-manually-complex-chart>