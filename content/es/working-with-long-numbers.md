---
title: Trabajando con cifras altas
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 8
category: 'Avanzado'
---

El comportamiento de los charts para mostrar datos va ser modificado según el formato de los números:

Mostrando el número `30000`:

```php
* 30.000.000  // va a fallar
* 30,000      // va a fallar
* 30,000.00   // va a fallar

// Abajo son los formatos validos

* 30000       // muestra -> 30000
* 30.000      // muestra -> 30
```

#### Importa la clase LarapexChart

```php[php]
use ArielMejiaDev\LarapexCharts\LarapexChart;
```

#### Crea un chart con un formato de números valido

```php[php]
$chart = (new LarapexChart)->pieChart()
    ->setTitle('Top 3 scorers of the team.')
    ->setSubtitle('Season 2021.')
    ->addData([20000, 24000, 30000])
    ->setLabels(['Player 7', 'Player 10', 'Player 9']);
```

<working-with-long-numbers-pie-chart></working-with-long-numbers-pie-chart>