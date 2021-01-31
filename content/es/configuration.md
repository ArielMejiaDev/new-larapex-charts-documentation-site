---
title: Configuración
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 3
category: Guía
---

El paquete incluye archivos para publicarlos opcionalmente, solo debes usar el comando:

```php[php]
php artisan vendor:publish 
```
Este mostrará varias opciones, con lo cual publicaras todos los archivos del paquete.

```bash[bash]
[12] Tag: larapex-charts-config
```

(Recuerda el número puede variar en tu proyecto), selecciona la opcion y presiona `enter`.

Ahora en `config/larapex-chart.php`, puedes editar el array de colores para personalizar los colores de las graficas y su orden.

```php
'colors' => [
    '#008FFB', '#00E396', '#feb019', '#ff455f', '#775dd0', '#80effe',
    '#0077B5', '#ff6384', '#c9cbcf', '#0057ff', '00a9f4', '#2ccdc9', '#5e72e4'
]
```

<alert type="danger">

<strong>Nota</strong>

El array de colores soporta unicamente colores hexadecimales en formato de cadena de texto.

</alert>