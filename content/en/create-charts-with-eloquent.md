---
title: Create charts with Eloquent
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 6
category: 'Advance'
---

#### Add User factory

```php[database/seeders/DatabaseSeeder.php]
public function run()
{
    \App\Models\User::factory()->times(100)->create();
}
```

#### Run the seeder

```php[terminal/cmd]
php artisan migrate:fresh --seed
```

#### Pie chart using eloquent

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

<eloquent-pie-chart></eloquent-pie-chart>

#### Line chart using eloquent

```php[php]
$chart = (new LarapexChart)->lineChart()
    ->setTitle('Users')
    ->addLine('Active users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->addLine('Inactive users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->setXAxis(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'])
    ->setColors(['#ffc63b', '#ff6384']);
```

<eloquent-line-chart></eloquent-line-chart>