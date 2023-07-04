window.__NUXT__=(function(a,b,c,d,e,f,g){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1688456302",layout:"default",error:null,state:{categories:{en:{Introduction:[{slug:"index",title:d,category:"Introduction",to:"\u002F"}],Examples:[{slug:"2-simple-example",title:"Simple example",category:b,to:"\u002F2-simple-example"},{slug:"3-more-charts",title:"More charts",category:b,to:"\u002F3-more-charts"},{slug:"4-customizing-charts",title:"Customizing charts",category:b,to:"\u002F4-customizing-charts"}],Advance:[{slug:"5-charts-with-eloquent",title:"Charts with Eloquent",category:a,to:"\u002F5-charts-with-eloquent"},{slug:"6-working-with-inertiajs",title:"Working with InertiaJS",category:a,to:"\u002F6-working-with-inertiajs"},{slug:"7-working-with-long-numbers",title:"Working with long numbers",category:a,to:"\u002F7-working-with-long-numbers"},{slug:"8-customize-chart-stubs",title:"Customize chart stubs",category:a,to:"\u002F8-customize-chart-stubs"},{slug:"9-host-your-own-library-file",title:"Host your own js library file",category:a,to:"\u002F9-host-your-own-library-file"}],Support:[{slug:"10-support",title:"Support the project",category:"Support",to:"\u002F10-support"}],Community:[{slug:"releases",title:"Releases",category:"Community",to:e}]}},releases:[{name:"6.0.0",date:"2023-06-16T11:21:33Z",body:"\u003Cp\u003EIt adds support for Laravel 10 and adds &quot;setStack()&quot; method to allow &quot;bar&quot;, &quot;horizontalBar&quot;, &quot;line&quot; and &quot;area&quot; charts to be stacked. \u003C\u002Fp\u003E\n"},{name:"5.2.0",date:"2022-09-19T19:25:27Z",body:"\u003Cp\u003Eit just set sparkline instead of sparklines methods to be consistent with the apexchartsjs library.\u003C\u002Fp\u003E\n"},{name:"5.1.0",date:"2022-09-18T18:27:32Z",body:"\u003Cp\u003Eit fixes an issue related to a pour readable method.\u003C\u002Fp\u003E\n\u003Cp\u003ECharts by default would work without grid.\u003C\u002Fp\u003E\n\u003Cp\u003ETo add a default grid (gray and some opacity... plays really well with TailwindUI styles)\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-php\"\u003E$chart-&gt;areaChart()-&gt;setGrid();\nTo customize the grid color and opacity you can pass params to the grid setter:\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-php\"\u003E$chart-&gt;areaChart()-&gt;setGrid(&#39;#93c5fd&#39;, 0.2);\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"},{name:"5.0.0",date:"2022-09-18T15:23:55Z",body:"\u003Cp\u003EIt fixes this issues:\u003C\u002Fp\u003E\n\u003Cp\u003EThe stubs and commands are published by the service provider each time the application is started\nIt should be only published on vendor:publish. No every time.\nIt will break on anything hosted on serverless (by publishing files on every request).\u003C\u002Fp\u003E\n\u003Cp\u003Ereference here: \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002FArielMejiaDev\u002Flarapex-charts\u002Fissues\u002F40\"\u003Ehttps:\u002F\u002Fgithub.com\u002FArielMejiaDev\u002Flarapex-charts\u002Fissues\u002F40\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n"},{name:"4.1.0",date:"2022-07-12T14:23:18Z",body:"\u003Cp\u003EIt adds the set sparkline method, this was a contribution by: @jamesmills \nyou can check more about sparklines \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fapexcharts.com\u002Fjavascript-chart-demos\u002Fsparklines\u002Fbasic\u002F\"\u003Ehere\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n"},{name:"4.0.0",date:"2022-03-10T14:21:47Z",body:"\u003Cp\u003EIt adds support for Laravel 9.\u003C\u002Fp\u003E\n"},{name:"3.0.1",date:"2021-07-27T06:03:28Z",body:"\u003Cp\u003EAdding fixes on workflow and more tests.\u003C\u002Fp\u003E\n"},{name:"3.0.0",date:"2021-07-27T05:13:50Z",body:"\u003Cp\u003Eit adds new artisan command to generate the charts for blade, inertia vue and json responses, and setters for fontFamily &amp; fontColor.\u003C\u002Fp\u003E\n"},{name:"2.1.1",date:"2021-06-24T16:20:43Z",body:"\u003Cp\u003Eit adds new method setFontFamily for blade views, it needs to be implemented for vuejs components and json object.\u003C\u002Fp\u003E\n"},{name:"2.1.0",date:"2021-02-15T03:46:46Z",body:"\u003Cp\u003EHotfix to add all new classes from major release.\u003C\u002Fp\u003E\n"},{name:"2.0.0",date:"2021-02-14T19:33:49Z",body:"\u003Cp\u003ENew release adding lot of cool features:\u003C\u002Fp\u003E\n\u003Ch2 id=\"new-charts\"\u003ENew Charts:\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003ERadial Bar Chart\u003C\u002Fli\u003E\n\u003Cli\u003ERadar Chart\u003C\u002Fli\u003E\n\u003Cli\u003EPolar Area Chart\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"new-methods\"\u003ENew Methods:\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ccode\u003EsetMarkers()\u003C\u002Fcode\u003E, to add markers on every chart series.\u003C\u002Fli\u003E\n\u003Cli\u003E \u003Ccode\u003Ezoom()\u003C\u002Fcode\u003E, to show or hide the zoom button (available only on blade views).\u003C\u002Fli\u003E\n\u003Cli\u003E \u003Ccode\u003EsetToolbar()\u003C\u002Fcode\u003E, to show or hide the top right corner chart toolbar.\u003C\u002Fli\u003E\n\u003Cli\u003E \u003Ccode\u003EaddData\u003C\u002Fcode\u003E method to add data in shorter and expressive way (it work with all charts).\u003C\u002Fli\u003E\n\u003Cli\u003E \u003Ccode\u003EaddBar()\u003C\u002Fcode\u003E an alias of \u003Ccode\u003EaddData()\u003C\u002Fcode\u003E method to add data in a more eloquent way  for bar * horizontal bar charts.\u003C\u002Fli\u003E\n\u003Cli\u003E \u003Ccode\u003EaddLine()\u003C\u002Fcode\u003E an alias of \u003Ccode\u003EaddData()\u003C\u002Fcode\u003E method to add data in a more eloquent way for a line chart.\u003C\u002Fli\u003E\n\u003Cli\u003E \u003Ccode\u003EaddArea()\u003C\u002Fcode\u003E an alias of \u003Ccode\u003EaddData()\u003C\u002Fcode\u003E method to add data in a more eloquent way for an area chart.\u003C\u002Fli\u003E\n\u003Cli\u003E  more \u003Ccode\u003EaddData()\u003C\u002Fcode\u003E aliases based on the chart type.\u003C\u002Fli\u003E\n\u003Cli\u003Echarts constructors (now you do not need to remember and pass the chart type a string, there are constructors for every chart).\u003Cul\u003E\n\u003Cli\u003E\u003Ccode\u003EpieChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EdonutChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EradialBarChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EpolarAreaChart()\u003C\u002Fcode\u003E, \u003Ccode\u003ElineChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EareaChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EbarChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EhorizontalBarChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EheatMapChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EradarChart()\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"changes-on-existing-methods\"\u003EChanges on existing methods:\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ccode\u003EsetGrid\u003C\u002Fcode\u003E, now add more params to customize more the charts.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"deprecated-methods\"\u003EDeprecated methods:\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Ccode\u003EsetType()\u003C\u002Fcode\u003E in version 1.0.0 to 1.0.5 this method set the type of chart property, now the package has more chart classes behind so this method is not necessary any more, its recommended to use instead the chart constructor methods, like for example in line chart \u003Ccode\u003ElineChart()\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Ccode\u003EsetData\u003C\u002Fcode\u003E you are still able to add data manually, but it is recommended to use the method \u003Ccode\u003EaddData()\u003C\u002Fcode\u003Eand all its aliases based on the chart type to get shorter, fluent and expressive syntax.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EIn the next yearly release (2023) this methods would be deleted from the package.\u003C\u002Fp\u003E\n"},{name:"1.0.5",date:"2020-02-07T21:01:12Z",body:"\u003Cp\u003EPatch release.\u003C\u002Fp\u003E\n\u003Cp\u003ERemove the Facade of the package to avoid confution, Facades woks fine as single instance, but with more than one chart on the same method it would override data, to avoid the confution the Facade LarapexChart is removed since this version.\u003C\u002Fp\u003E\n"},{name:"1.0.4",date:"2020-01-16T00:42:40Z",body:"\u003Cp\u003EPatch release.\u003C\u002Fp\u003E\n\u003Cp\u003EHotfix on script views\u003C\u002Fp\u003E\n"},{name:"1.0.3",date:"2020-01-15T15:28:54Z",body:"\u003Cp\u003EHotfix on methods container and script for views\u003C\u002Fp\u003E\n"},{name:"1.0.2",date:"2020-01-15T14:51:56Z",body:"\u003Cp\u003EAdd License\u003C\u002Fp\u003E\n"},{name:"1.0.1",date:"2020-01-15T14:49:28Z",body:"\u003Cp\u003EAdd initial release patch changes.\u003C\u002Fp\u003E\n"},{name:"1.0.0",date:"2020-01-14T23:37:41Z",body:"\u003Cp\u003EInitial release.\u003C\u002Fp\u003E\n"}],settings:{title:d,url:"https:\u002F\u002Flarapex-charts.netlify.app\u002F",defaultDir:"docs",defaultBranch:"master",filled:c,logo:{light:"\u002Flogo-light.png",dark:"\u002Flogo-dark.png"},github:"ArielMejiaDev\u002Flarapex-charts",twitter:"@ArielMejiaDev"},menu:{open:f},i18n:{routeParams:{}}},serverRendered:c,routePath:e,config:{content:{dbHash:"8f347cf6"}},__i18n:{langs:{en:{search:{placeholder:"Search the docs (Press \"\u002F\" to focus)"},toc:{title:"On this page"},article:{github:"Edit this page on GitHub"}}}},colorMode:{preference:g,value:g,unknown:c,forced:f}}}("Advance","Examples",true,"Larapex Charts","\u002Freleases",false,"system"));