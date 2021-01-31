---
title: Ejemplos avanzados
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 5
category: 'Ejemplos'
---

<alert type="danger">

<strong>IMPORTANTE</strong>

Este paquete soporta varios tipos de gráficas (los mas populares) de la librería `apex charts JS`, pero hay algúnas gráficas que no estan soportadas en este momento.

</alert>

## Pie

La gráfica de pie es la grafíca por defecto y es bastante sencilla de implementar:

```php
$chart = (new LarapexChart)->setTitle('Posts')
    ->setDataset([150, 120])
    ->setLabels(['Published', 'No Published']);
```

## Dona

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

## Lineas

<alert type="danger">

<strong>Ten cuidado con el método `setDataset()`.</strong>

- Gráficas de tipo pie, donut, and radialbar soporta arrays unidimensionales.

- Gráficas de tipo line, area, bar, horizontalbar and heatmap soportan arrays multidimensionales.

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

## Barras

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

## Barras Horizontales

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

## Gráficas de calor

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

## Cambia colores de las gráficas dinamicamente

Si necesitas modificar los colores por defecto, puedes agregar un array de colores especifico al momento de crear un objeto `chart`:

```php
$chart = (new LarapexChart)->setTitle('Posts')
    ->setDataset([150, 120])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setLabels(['Published', 'No Published']);
```

El metodo `setColors` acepta un array de colores hexadecimales en formato de cadena de texto.