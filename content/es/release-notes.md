---
title: Notas del nuevo release
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 13
category: Community
---

El paquete tendrá releases anuales incorporando:

* Mejoras en la experiencia del desarrollo (una API que sea agradable de usar).
* Mas tipos de charts
* Agregar mas métodos convenientes para personalizar los charts.

Este release agrega mas charts y métodos para personalizar aún mas los charts que en la versión uno.

Por supuesto en el año el paquete recibirá patch releases de ser necesario, si encuentras un bug puedes crear un issue en el repositorio de github (el enlace esta en el navbar).

## Nuevos charts

La versión 2 agrega las siguientes clases de charts:

* polar chart

* radar chart


## Nuevos métodos

La versión 2 agrega los siguientes métodos, que se agregan a los ya existentes para personalizar todos los charts:

* `setToolbar(boolean $show, boolean $showZoom)`

* `setMarkers(array $colors, int $width, int $hoverSize)`

* `setGrid($transparent = true, $color = '#e5e5e5', $opacity = 0.1)` este metodo ya existe en la versión uno, pero ahora agrega mas opciones de personalización.

* `setHeight(int $height)`

* `setWidth(int $width)`

## Integraciones

La versión 2 agrega integraciones para trabajar con cualquier framework Javascript, también agrega métodos para integrarse mejor especificamente a InertiaJS y VueJS:

* `toJson()` Este método retorna el objeto completo del chart, para renderizarlo con cualquier framework javascript por medio de peticiones http.

* `toVue()` Esta versión tiene una integración para trabajar con el paquete de npm `Vue-ApexCharts` con este metodo puedes crear un chart desde el backend y renderizarlo en el frontend manteniendo una sintaxis elegante y fluida tanto en el backend como en el frontend.

## Métodos deprecados

Todos los métodos de Larapex charts en su versión 1 siguen disponibles para su versión 2, sin embargo el método `setType()` será deprecado en el siguiente release mayor (2022), en favor de usar los métodos constructores de objetos de tipo chart.