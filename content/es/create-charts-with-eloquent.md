---
title: Crea un chart usando eloquent
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 6
category: 'Avanzado'
---

#### Agregando un User factory

```php[database/seeders/DatabaseSeeder.php]
public function run()
{
    \App\Models\User::factory()->times(100)->create();
}
```

#### Ejecutando el seeder

```php[terminal/cmd]
php artisan migrate:fresh --seed
```

#### Creando un pie chart con eloquent

```php[php]
$chart = (new LarapexChart)->pieChart()
    ->setTitle('Users')
    ->addData([
        \App\Models\User::where('id', '<=', 60)->count(),
        \App\Models\User::where('id', '>', 60)->count()
    ])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setLabels(['Active users', 'Inactive users']);
```

#### Creando un line chart con eloquent

```php[php]
$chart = (new LarapexChart)->lineChart()
    ->setTitle('Users')
    ->addLine('Active users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->addLine('Inactive users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->setXAxis(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'])
    ->setColors(['#ffc63b', '#ff6384']);
```
