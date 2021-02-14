---
title: Version anterior 1.0.0
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 12
category: Community
---


<alert type="info">

Es recomendable que actualices el paquete para gozar de todas las novedades de la versión 2.

</alert>

### Publicar archivos del paquete:

```php[php]
php artisan vendor:publish 
```
Ahora en `config/larapex-chart.php`, puedes editar el array de colores para personalizar los colores de las graficas y su orden:

```php[php]
'colors' => [
    '#008FFB', '#00E396', '#feb019', '#ff455f', '#775dd0', '#80effe',
    '#0077B5', '#ff6384', '#c9cbcf', '#0057ff', '00a9f4', '#2ccdc9', '#5e72e4'
]
```

### Retorna una vista con la gráfica

```php
Route::get('chart', function () {
    $chart = (new LarapexChart)->setTitle('Users')->setXAxis(['Active', 'Guests'])->setDataset([100, 200]);
    return view('chart', compact('chart'));
}); 
```

<alert type="danger">

Importante

Debes haber creado previamente la vista en el directorio `resources/views`.

</alert>

### Agrega la gráfica a la vista

```php
<!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Chart Sample</title>
    </head>
    <body>

    {!! $chart->container() !!}

    <script src="{{ $chart->cdn() }}"></script>

    <!-- O usa el cdn directamente de jsdelivr -->

    <!-- <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script> -->

    <!-- O usa el archivo publicado por el paquete -->

    <!-- <script src="{{ asset('vendor/larapex-charts/apexchart.js') }}"></script> -->

    {{ $chart->script() }}
    </body>
</html>
```

Si decides usar el archivo `apexchart.js` para hostear tu propio archivo de la librería debes publicar el archivo con el siguiente comando:

```php[php]
php artisan vendor:publish 
```

Selecciona el numero correspondiente al archivo de la librería y presiona enter:

```php[php]
[11] Tag: larapex-charts-apexcharts-script 
```

### Ejemplo de otros charts:

#### Pie

```php
$chart = (new LarapexChart)->setType('pie')
    ->setTitle('Posts')
    ->setDataset([150, 120])
    ->setLabels(['Published', 'No Published']);
```

#### Donut

```php
$chart = (new LarapexChart)->setType('donut')
    ->setTitle('Posts')
    ->setDataset([150, 120])
    ->setColors(['#dc3545', '#ffc73c'])
    ->setLabels(['Published', 'No Published']);
```

#### Radial

```php
$chart = (new LarapexChart)->setTitle('Products with more profit')
    ->setSubtitle('From January To March')
    ->setType('radialBar')
    ->setLabels(['Product One', 'Product Two', 'Product Three'])
    ->setXAxis(['Jan', 'Feb', 'Mar'])
    ->setDataset([60, 40, 79]);
```

#### Line

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

#### Area

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

#### Bar

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

#### Horizontal Bar

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

#### Heatmap

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

#### Cambia colores de las gráficas dinamicamente

Si necesitas modificar los colores por defecto, puedes agregar un array de colores especifico al momento de crear un objeto `chart`:

```php
$chart = (new LarapexChart)->setTitle('Posts')
    ->setDataset([150, 120])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setLabels(['Published', 'No Published']);
```

El metodo `setColors()` acepta un array de colores hexadecimales en formato de cadena de texto.

#### Trabajando con números muy altos

El paquete funciona muy bien ordenando datos con los siguientes formatos:

* `12000` 
* `12.000`
* `12000.00`

<alert type="danger">

<strong>Importante</strong>

El paquete no soporta numeros con multiples puntos o comas de forma estable, esto es algo propio de la librería apexchartJS y no algo relacionado a esta implementación.

</alert>

### Ejemplo usando eloquent

```php[php]
Route::get('chart', function () {

    $chart = (new LarapexChart)->setTitle('Users')
        ->setDataset([User::where('id', '<=', 20)->count(), User::where('id', '>', 20)->count()])
        ->setColors(['#ffc63b', '#ff6384'])
        ->setLabels(['Published', 'No Published']);

    return view('chart', compact('chart'));
});
```