---
title: Using eloquent
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 5
category: 'Examples'
---

The example built pie chart with two groups of users, it will load:

- users with id <= 20. 
- users with id > 20.

# 1 Create a users seeder

In your `console/terminal/cmd/bash` run:

```php[php]
php artisan make:seed UsersTableSeeder 
```

Then go to `database/seeds/UsersTableSeeder.php` add a factory for 50 users.

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

## 3 Run the migration

First go to `database/seeds/DatabaseSeeder.php` and add the next code:

```php[php]
$this->call(UsersTableSeeder::class);
```

Then go to your `console/cmd/terminal/bash` and run:

<alert type="danger">

<strong>WARNING</strong>

This is an example do not do this on a production project.

</alert>

```php[php]
php artisan db:seed 
```

## 4 Create a route

now go to your routes file `routes/web.php` and add the next route with a callback:

```php[php]
Route::get('chart', function () {

    $chart = (new LarapexChart)->setTitle('Users')
        ->setDataset([User::where('id', '<=', 20)->count(), User::where('id', '>', 20)->count()])
        ->setColors(['#ffc63b', '#ff6384'])
        ->setLabels(['Published', 'No Published']);

    return view('chart', compact('chart'));
});
```

By this example this is fine but maybe to improve this you could add a controller and then return a view, but to keep it simple this will work fine.

## Create a view

Go to `resources/views`, create a blade file called `chart.blade.php`

Add the next code:

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

Alternatively, if you do not want to use `cdn()` helper, you can use the `apexchart.js` library file published, the code will be pretty much the same:

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

To publish the `apexchart.js` library in your app directory:

```php[php]
php artisan vendor:publish 
```

Select the package config option:

```bash[bash]
[12] Tag: larapex-charts-config
```

