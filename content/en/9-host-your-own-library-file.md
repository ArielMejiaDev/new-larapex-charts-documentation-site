---
title: Host your own js library file
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 9
category: 'Advance'
---

Alternatively, if you prefer to host the file instead using the `cdn`, you can run the command:

```php[terminal/cmd]
php artisan vendor:publish --tag=larapex-charts-apexcharts-script
```

The file would be host in `public/vendor/larapex-charts/apexcharts.js` you can reference the file in blade views:

```php[blade.php]
<script src="{{ @asset('vendor/larapex-charts/apexcharts.js') }}"></script>
```
