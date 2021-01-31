---
title: Setup
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 2
category: Guide
---

## Installation

Add `larapex charts` using composer:

<code-group>
  <code-block label="Composer" active>

  ```bash
  composer require arielmejiadev/larapex-charts
  ```

  </code-block>
</code-group>

## Package Service Provider

<alert>

If you Laravel project version is 5.5 or higher you can avoid this step.

</alert>

To add package service providers you can go to config/app.php file, and add the next lines to "Providers" array.

```php[config/app.php]
ArielMejiaDev\Package\LarapexChartsServiceProvider::class
```

## Publish Vendor Files
This package comes with an `apexchart.js` file to host your own js file, In terminal execute the next command:

```php[php]
php artisan vendor:publish
```

It will show you some options. (the numbers could change in your project):

```bash[bash]
[1]  Provider: ArielMejiaDev\LarapexCharts\LarapexChartsServiceProvider
[11] Tag: larapex-charts-apexcharts-script
[12] Tag: larapex-charts-config
[13] Tag: larapex-charts-views
```

Just select the files you want to publish, type the number and press enter.

<alert type="danger">

The package does not require any vendor file.

Alternatively you can publish the chart views.

This is not necessary and even not recommended in most cases.

</alert>

If you require the views, this are the options to publish the files in your app directory.

```bash[bash]
[13] Tag: larapex-charts-views
```

Just type the number of the required option and press enter.