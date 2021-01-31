---
title: Configuration
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 3
category: Guide
---

The package vendor publication includes a config file, to publish the config file in your app, Just run the publish command in your `terminal/console/cmd/bash`:

```php[php]
php artisan vendor:publish 
```

It will prompt some options, the option to add config file to your app directory is:

```bash[bash]
[12] Tag: larapex-charts-config
```

(Remember the number could change in your project), select the option and press enter

Now in your `config/larapex-chart.php` file, you can edit the colors array to customize the chart colors order.

```php
'colors' => [
    '#008FFB', '#00E396', '#feb019', '#ff455f', '#775dd0', '#80effe',
    '#0077B5', '#ff6384', '#c9cbcf', '#0057ff', '00a9f4', '#2ccdc9', '#5e72e4'
]
```

<alert type="danger">

Note

The colors array only support hexadecimal values and as string.

</alert>