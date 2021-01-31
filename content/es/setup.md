---
title: Setup
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 2
category: Guía
---

## Instalación

Agrega `larapex charts` con composer:

<code-group>
  <code-block label="Composer" active>

  ```bash
  composer require arielmejiadev/larapex-charts
  ```

  </code-block>
</code-group>

## Service Provider del paquete

<alert>

Si la versión del proyecto es 5.5 o mayor puedes saltarte este paso.

</alert>

Para agregar el `service provider` del paquete debes ir a `config/app.php` y agregar el nombre de la clase en formato `fqcn` en el array de `providers`.

```php[config/app.php]
ArielMejiaDev\Package\LarapexChartsServiceProvider::class
```

## Publicar los archivos del paquete

El paquete incluye un archivo para la librería `apexchart.js` para que alojes tu propía versión de la librería, debes ejecutar el siguiente comando en la terminal:

```php[php]
php artisan vendor:publish
```

Te mostrará algunas opciones. (los números pueden cambiar en tu proyecto)

```bash[bash]
[1]  Provider: ArielMejiaDev\LarapexCharts\LarapexChartsServiceProvider
[11] Tag: larapex-charts-apexcharts-script
[12] Tag: larapex-charts-config
[13] Tag: larapex-charts-views
```

Solo debes seleccionar los archivos que desees publicar, escribiendo el número correspondiente y presionando `enter`.

<alert type="danger">
<strong>El paquete no requiere que se publique ningun archivo para funcionar.</strong>

Alternativamente puedes publicar las vistas de las graficas para personalizarlas.

Esta acción no es necesaria en la gran mayoría de los casos.

</alert>

Si requires las vistas, esta es la opción para publicar los archivos en el directorio `resources` de tu app:

```bash[bash]
[13] Tag: larapex-charts-views
```

Solo escribe el numero correspondiente y presiona `enter`.