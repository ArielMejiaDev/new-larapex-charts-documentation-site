---
title: Aloja el archivo js de la librería
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 10
category: 'Avanzado'
---

<alert type="info">
Si vas a usar el paquete con componentes Vue, este paso no es necesario.
</alert>

Alternativamente, si prefieres almacenar tu archivo js de la librería en lugar de usar el `cdn` puedes publicarlo usando el siguiente comando:

```php[terminal/cmd]
php artisan vendor:publish --tag=larapex-charts-apexcharts-script
```

El archivo se publicará en `public/vendor/larapex-charts/apexcharts.js` puedes hacer referencía a este archivo en tu layout o vista blade:

```php[blade.php]
<script src="{{ @asset('vendor/larapex-charts/apexcharts.js') }}"></script>
```