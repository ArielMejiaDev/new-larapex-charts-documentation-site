---
title: Charts with Eloquent
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 5
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

```bash
php artisan make:chart MonthlyUsersChart
```

On `app/Charts/MonthlyUsersChart.php` 

```php[php]
return $this->chart->pieChart()
    ->setTitle('Monthly Users')
    ->addData([
        \App\Models\User::where('id', '<=', 60)->count(),
        \App\Models\User::where('id', '>', 60)->count()
    ])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setLabels(['Active users', 'Inactive users']);
```

<eloquent-pie-chart></eloquent-pie-chart>

#### Line chart using eloquent

```bash
php artisan make:chart MonthlyUsersChart
```

On `app/Charts/MonthlyUsersChart.php`

```php[php]
return $this->chart->lineChart()
    ->setTitle('Monthly Users')
    ->addLine('Active users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->addLine('Inactive users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->setXAxis(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'])
    ->setColors(['#ffc63b', '#ff6384']);
```

<eloquent-line-chart></eloquent-line-chart>
