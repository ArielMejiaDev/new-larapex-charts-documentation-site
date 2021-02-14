---
title: Release notes
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 14
category: Community
---

The package would have yearly major releases based on:

* Improve developer experience.
* Add more chart types.
* Add convinient methods to customize charts.

This release adds more charts and methods to customize even more charts than version one.

Of course during the year the package could get patch releases, if you find a bug please add an issue on github repository (link on the navbar).

## New charts

The version 2 add the next chart classes:

* polar chart

* radar chart


## New methods

The version 2 add the next chart methods available to all types of charts:

* `setToolbar(boolean $show, boolean $showZoom)`

* `setMarkers(array $colors, int $width, int $hoverSize)`

* `setGrid($transparent = true, $color = '#e5e5e5', $opacity = 0.1)` this method already exists on version 1, but now it adds a lot more customization options.

* `setHeight(int $height)`

* `setWidth(int $width)`

## Integrations

The version 2 adds integrations to work with any Javascript framework and an specific integration to work with InertiaJS & VueJS:

* `toJson()` it returns the full chart object to render the chart on a separated frontend application by an http request endpoint.

* `toVue()` this version has an integration to work with `Vue-ApexCharts` npm package, with this method you can create the chart on the backend an render the chart on a frontend with a very elegant and fluent api on the backend & the frontend.


## Deprecated methods

All Larapex charts methods would still be available on version 2, but the `setType()` method would be deprecated on next year release (2022) in favor to work with method constructors.