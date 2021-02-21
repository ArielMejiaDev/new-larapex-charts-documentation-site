window.__NUXT__=(function(a,b,c,d,e,f,g){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1613935874",layout:"default",error:null,state:{categories:{es:{"Introducción":[{slug:"index",title:e,category:"Introducción",to:"\u002F"}],"Guía":[{slug:"setup",title:"Instalación",category:"Guía",to:"\u002Fsetup"}],Ejemplos:[{slug:"simple-example",title:"Ejemplo simple",category:b,to:"\u002Fsimple-example"},{slug:"more-charts",title:"Mas charts",category:b,to:"\u002Fmore-charts"},{slug:"customizing-charts",title:"Personalizando charts",category:b,to:"\u002Fcustomizing-charts"}],Avanzado:[{slug:"create-charts-with-eloquent",title:"Crea un chart usando eloquent",category:a,to:"\u002Fcreate-charts-with-eloquent"},{slug:"integrations",title:"Integraciones",category:a,to:"\u002Fintegrations"},{slug:"working-with-long-numbers",title:"Trabajando con cifras altas",category:a,to:"\u002Fworking-with-long-numbers"},{slug:"add-data-manually",title:"Agregar datos manualmente",category:a,to:"\u002Fadd-data-manually"},{slug:"host-your-own-library-file",title:"Aloja el archivo js de la librería",category:a,to:"\u002Fhost-your-own-library-file"}],Donaciones:[{slug:"support",title:"Apoya el proyecto",category:"Donaciones",to:"\u002Fsupport"}],Community:[{slug:"previous-version",title:"Version anterior 1.0.0",category:c,to:"\u002Fprevious-version"},{slug:"release-notes",title:"Notas del nuevo release",category:c,to:"\u002Frelease-notes"},{slug:"releases",title:"Releases",category:c,to:"\u002Freleases"}]}},releases:[{name:"2.1.0",date:"2021-02-15T03:46:46Z",body:"\u003Cp\u003EHotfix to add all new classes from major release.\u003C\u002Fp\u003E\n"},{name:"2.0.0",date:"2021-02-14T19:33:49Z",body:"\u003Cp\u003ENew release adding lot of cool features:\u003C\u002Fp\u003E\n\u003Ch2 id=\"new-charts\"\u003ENew Charts:\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003ERadial Bar Chart\u003C\u002Fli\u003E\n\u003Cli\u003ERadar Chart\u003C\u002Fli\u003E\n\u003Cli\u003EPolar Area Chart\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"new-methods\"\u003ENew Methods:\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ccode\u003EsetMarkers()\u003C\u002Fcode\u003E, to add markers on every chart series.\u003C\u002Fli\u003E\n\u003Cli\u003E \u003Ccode\u003Ezoom()\u003C\u002Fcode\u003E, to show or hide the zoom button (available only on blade views).\u003C\u002Fli\u003E\n\u003Cli\u003E \u003Ccode\u003EsetToolbar()\u003C\u002Fcode\u003E, to show or hide the top right corner chart toolbar.\u003C\u002Fli\u003E\n\u003Cli\u003E \u003Ccode\u003EaddData\u003C\u002Fcode\u003E method to add data in shorter and expressive way (it work with all charts).\u003C\u002Fli\u003E\n\u003Cli\u003E \u003Ccode\u003EaddBar()\u003C\u002Fcode\u003E an alias of \u003Ccode\u003EaddData()\u003C\u002Fcode\u003E method to add data in a more eloquent way  for bar * horizontal bar charts.\u003C\u002Fli\u003E\n\u003Cli\u003E \u003Ccode\u003EaddLine()\u003C\u002Fcode\u003E an alias of \u003Ccode\u003EaddData()\u003C\u002Fcode\u003E method to add data in a more eloquent way for a line chart.\u003C\u002Fli\u003E\n\u003Cli\u003E \u003Ccode\u003EaddArea()\u003C\u002Fcode\u003E an alias of \u003Ccode\u003EaddData()\u003C\u002Fcode\u003E method to add data in a more eloquent way for an area chart.\u003C\u002Fli\u003E\n\u003Cli\u003E  more \u003Ccode\u003EaddData()\u003C\u002Fcode\u003E aliases based on the chart type.\u003C\u002Fli\u003E\n\u003Cli\u003Echarts constructors (now you do not need to remember and pass the chart type a string, there are constructors for every chart).\u003Cul\u003E\n\u003Cli\u003E\u003Ccode\u003EpieChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EdonutChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EradialBarChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EpolarAreaChart()\u003C\u002Fcode\u003E, \u003Ccode\u003ElineChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EareaChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EbarChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EhorizontalBarChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EheatMapChart()\u003C\u002Fcode\u003E, \u003Ccode\u003EradarChart()\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"changes-on-existing-methods\"\u003EChanges on existing methods:\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ccode\u003EsetGrid\u003C\u002Fcode\u003E, now add more params to customize more the charts.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"deprecated-methods\"\u003EDeprecated methods:\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Ccode\u003EsetType()\u003C\u002Fcode\u003E in version 1.0.0 to 1.0.5 this method set the type of chart property, now the package has more chart classes behind so this method is not necessary any more, its recommended to use instead the chart constructor methods, like for example in line chart \u003Ccode\u003ElineChart()\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Ccode\u003EsetData\u003C\u002Fcode\u003E you are still able to add data manually, but it is recommended to use the method \u003Ccode\u003EaddData()\u003C\u002Fcode\u003Eand all its aliases based on the chart type to get shorter, fluent and expressive syntax.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EIn the next yearly release (2023) this methods would be deleted from the package.\u003C\u002Fp\u003E\n"},{name:"1.0.5",date:"2020-02-07T21:01:12Z",body:"\u003Cp\u003EPatch release.\u003C\u002Fp\u003E\n\u003Cp\u003ERemove the Facade of the package to avoid confution, Facades woks fine as single instance, but with more than one chart on the same method it would override data, to avoid the confution the Facade LarapexChart is removed since this version.\u003C\u002Fp\u003E\n"},{name:"1.0.4",date:"2020-01-16T00:42:40Z",body:"\u003Cp\u003EPatch release.\u003C\u002Fp\u003E\n\u003Cp\u003EHotfix on script views\u003C\u002Fp\u003E\n"},{name:"1.0.3",date:"2020-01-15T15:28:54Z",body:"\u003Cp\u003EHotfix on methods container and script for views\u003C\u002Fp\u003E\n"},{name:"1.0.2",date:"2020-01-15T14:51:56Z",body:"\u003Cp\u003EAdd License\u003C\u002Fp\u003E\n"},{name:"1.0.1",date:"2020-01-15T14:49:28Z",body:"\u003Cp\u003EAdd initial release patch changes.\u003C\u002Fp\u003E\n"},{name:"1.0.0",date:"2020-01-14T23:37:41Z",body:"\u003Cp\u003EInitial release.\u003C\u002Fp\u003E\n"}],settings:{title:e,url:"https:\u002F\u002Flarapex-charts.netlify.app\u002F",defaultDir:"docs",defaultBranch:"main",filled:d,logo:{light:"\u002Flogo-light.png",dark:"\u002Flogo-dark.png"},github:"ArielMejiaDev\u002Flarapex-charts",twitter:"@ArielMejiaDev"},menu:{open:f},i18n:{routeParams:{}}},serverRendered:d,routePath:"\u002Fes\u002Fmore-charts",config:{content:{dbHash:"17842e3f"}},__i18n:{langs:{es:{search:{placeholder:"Buscar en documentos (Pulsa \"\u002F\" para afinar)"},toc:{title:"En esta página"},article:{github:"Editar esta página en Github"}}}},colorMode:{preference:g,value:g,unknown:d,forced:f}}}("Avanzado","Ejemplos","Community",true,"Larapex Charts",false,"system"));