---
title: Personalizando charts
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 5
category: 'Ejemplos'
---

#### Cambiar el esquema general de colores de los charts

En el archivo `config/larapex-chart.php` puedes editar el array de colores para personalizar los charts.

```php[config/larapex-chart.php]
'colors' => [
    '#008FFB', '#00E396', '#feb019', '#ff455f', '#775dd0', '#80effe',
    '#0077B5', '#ff6384', '#c9cbcf', '#0057ff', '00a9f4', '#2ccdc9', '#5e72e4'
]
```

<alert type="danger">

El array de colores solo soporta colores con valores hexadecimales como cadena de texto.

</alert>

#### Cambiar los colores de los charts dinamicamente

Si deseas cambiar de forma general los colores de todos los charts puedes hacerlo en el archivo `config/larapex-charts.php`.

Si deseas cambiar los colore de un solo chart especifico el paquete incluye un método para cambiar los colores en cada chart al momento de crearlos:

```php[php]
$chart = (new LarapexChart)->lineChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Published posts', [4, 9, 5, 2, 1, 8])
    ->addData('Unpublished posts', [7, 2, 7, 2, 5, 4])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<custom-line-chart></custom-line-chart>

El método `setColors` acepta como parametro un array con valores de colores hexadecimal como cadenas de texto.

#### Método setGrid()

El método `setGrid()` esta disponible para los siguientes charts:

* Line charts
* Area charts
* Bar charts

Puedes personalizar el estilo del grid (rejilla), aquí un ejemplo:

```php[php]
$chart = (new LarapexChart)->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid();
```

<custom-first-area-chart></custom-first-area-chart>

Solo con agregar el método `setGrid()` este agrega un estilo por defecto esto puede ser suficiente en muchos casos, pero también puedes personalizar el grid pasandole algunos parametros:

```php[php]
$chart = (new LarapexChart)->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid(false, '#3F51B5', 0.1);
```

<custom-second-area-chart></custom-second-area-chart>

#### Método setMarkers()

Ahora puedes personalizar los marcadore de cada chart:

```php[php]
$chart = (new LarapexChart)->areaChart()
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

#### Método setDataLabels

Puedes agregar etiquetas a los marcadores de tus charts para que sea visible siempre el valor en cada serie de datos.

```php[php]
$chart = (new LarapexChart)->areaChart()
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