---
title: Usando eloquent
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 5
category: 'Ejemplos'
---

El ejemplo crea una gráfica de pie con dos grupos de usuarios:

- usuarios con el id <= 20. 
- usuarios con el id > 20.

# 1 Crea un seeder de usuarios

Ejecuta el comando:

```php[php]
php artisan make:seed UsersTableSeeder 
```

En `database/seeds/UsersTableSeeder.php` agrega un factory con 50 usuarios.

```php[php]
use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 50)->create();
    }
}
```

## 3 Ejecuta las migraciones

En `database/seeds/DatabaseSeeder.php` agrega el metodo `call` con el `seeder` de usuarios:

```php[php]
$this->call(UsersTableSeeder::class);
```

Ejecuta el siguiente comando:

<alert type="danger">

<strong>IMPORTANTE</strong>

Este es un ejemplo, no es recomendable realizar esto en producción.

</alert>

```php[php]
php artisan db:seed 
```

## 4 Crea una ruta

En `routes/web.php` agrega una ruta con el siguiente callback:

```php[php]
Route::get('chart', function () {

    $chart = (new LarapexChart)->setTitle('Users')
        ->setDataset([User::where('id', '<=', 20)->count(), User::where('id', '>', 20)->count()])
        ->setColors(['#ffc63b', '#ff6384'])
        ->setLabels(['Published', 'No Published']);

    return view('chart', compact('chart'));
});
```

Al ser un ejemplo esto esta bien, sin embargo se podría refinar usando un controlador y retornando la vista.

## Crea una vista

En `resources/views`, crea una vista nombrandola `chart.blade.php`

Con el siguiente código:

```php[php]
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
 
     {{ $chart->script() }}
 </body>
 </html>
```

Alternativamente, si no deseas usar el metodo `cdn()`, puedes publicar la librería `apexchart.js`, el código sería muy similar:

```php[php]
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
 
     <script src="{{ asset('vendor/larapex-chart/apexchart.js') }}"></script>
 
     {{ $chart->script() }}
 </body>
 </html>
```

Para publicar la librería `apexchart.js` en tu app puedes ejecutar el comando:

```php[php]
php artisan vendor:publish 
```

Selecciona la opción de configuración:

```bash[bash]
[12] Tag: larapex-charts-config
```

Escribiendo el número correspondiente en la terminal y presionando `enter`.
