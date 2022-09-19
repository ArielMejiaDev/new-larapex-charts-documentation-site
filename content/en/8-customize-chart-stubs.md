---
title: Customize chart stubs
description: 'Add beautiful charts to your Laravel project with just one facade.'
position: 8
category: 'Advance'
---

The `make:chart` command generates different chart classes based on docs examples, but you can customize them.

#### Just publish the stubs

```php[terminal/cmd]
php artisan vendor:publish --tag=larapex-charts-apexcharts-stubs
```

The files would be available in `stubs` directory.

#### Here a reference to the charts stubs:

| type                          | location      |   |   |   |
|-------------------------------|---------------|---|---|---|
| Customize Blade Charts        | stubs/Default |   |   |   |
| Customize Vue Charts          | stubs/Vue     |   |   |   |
| Customize API Chart Responses | stubs/API     |   |   |   |

You can delete the ones that are not customized and the command would generate charts based on the default ones from the package.
