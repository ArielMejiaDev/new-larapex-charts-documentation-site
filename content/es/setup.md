---
title: Instalación
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 2
category: Guía
---

## Instalación

Agrega `larapex charts` con composer:

<code-group>
  <code-block label="composer" active>

  ```bash[terminal/cmd]
  composer require arielmejiadev/larapex-charts
  ```

  </code-block>
</code-group>

## Publicar el archivo de configuración

En la terminal ejecuta el siguiete comando:

```php[terminal/cmd]
php artisan vendor:publish --tag=larapex-charts-config
```

Con esto has terminado la instalación del paquete.