---
title: Method list
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 7
category: 'Methods available'
---

This are all the methods available, with a param type hint and description:

| Method 	| Type 	| Description 	|
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

TIP

Some charts support in setDataset() a simple array (pie, donut, radialbar) as param Other charts only support multidimensional arrays (line, area, bar, horizontalbar, heatmap).

</alert>