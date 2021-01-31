---
title: Lista de metodos del paquete
description: 'Agrega hermosas gráficas a tu proyecto en Laravel con solo un facade.'
position: 7
category: 'Metodos disponibles'
---

Esta es una lista con todos los métodos disponibles con sus respectivos tipos de parametros y descripción.

| Método 	| Tipo 	| Descripción	|
|-	|-	|-:	|
| setType 	| string 	| set type of chart in string 	|
| setDataset 	| array 	| pie, donut and radialbar) charts requires a simple array (line, area, bar, horizontalbar and heatmap requires a multidimensional array) 	|
| setHeight 	| integer 	| an integer representation of chart height in pixels 	|
| setColors 	| array 	| array with hexadecimal values as strings 	|
| setHorizontal 	| boolean 	| only work for bar chart to change it horizontally pass a true value 	|
| setTitle 	| string 	| string value to set chart title 	|
| setSubtitle 	| string 	| string value to set chart subtitle 	|
| setLabels 	| array 	| array of strings to set labels for every chart series 	|
| setXAxis 	| array 	| array with values for chart data series 	|
| setGrid 	| boolean 	| true to draw a chart grid or false to hide 	|
| container 	| no param 	|  	|
| script 	| no param 	|  	|
| cdn 	| no param 	|  	|

<alert type="info">

<strong>TIP</strong>

Algunas grafícas soportan en el metodo `setDataSet()` un array unidimensional (pie, donut, radialbar).

Otras gráficas soportan arrays multidimensionales (linem area, bar, horizontalbar, heatmap).

</alert>