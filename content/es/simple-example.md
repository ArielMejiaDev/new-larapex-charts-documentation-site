---
title: Ejemplo simple
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 4
category: 'Ejemplos'
---

## Paso 1 

#### Agrega una ruta a tu proyecto.

En este ejemplo se agregará una ruta `chart`:

```php
Route::get('chart', function(){
    //
});
```

## Paso 2 

#### Usando la clase del paquete

```php
Route::get('chart', function(){
    $chart = new LarapexChart();
    $chart->setTitle('Users')->setXAxis(['Active', 'Guests'])->setDataset([100, 200]);
});
```

## Paso 3 

#### Retorna una vista con la gráfica

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

## Paso 4 

#### Agrega la gráfica a la vista

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

## Métodos Helpers

Todas las instancias del objeto `chart` cuentan con algunos metodos helpers:

* container()
* cdn()
* script()

Puedes usar estos helpers en tus vistas blade para renderizar las gráficas.

### Método container

Retorna un tag HTML `div` con un id generado, este id es unico en cada instancia de la clase `chart`, y debe coincidir con el id del objeto `chart`, (el paquete maneja todo esto de forma automatica por ti).

### Método cdn()

Retorna la dirección `Http` del `cdn` de la librería para renderizar las gráficas, si prefieres
puedes almacenar una versión de la librería en el servidor, publicando los archivos del paquete, 
este se publicara en el directorio `public/vendor`, solo debes ejectuar el comando:

```php
php artisan vendor:publish 
```

Y seleccionar la librería y presionar `enter`. (El número puede variar en tu proyecto):

```php
[11] Tag: larapex-charts-apexcharts-script 
```

Con este cambio en tus archivos blade puedes sustituir el metodo `cdn()` por la librería en el servidor:

```php
<!-- Replace this <script src="{{ $chart->cdn() }}"></script> -->
<script src="{{ asset('vendor/larapex-charts/apexchart.js') }}"></script>
```

### Método script()

Retorna un script con el objeto JSON que construye la gráfica por nosotros.