(function(a){$.ui.autoLaunch=false;$.ui.openLinksNewTab=false;$.os.android=true;$(document).ready(function(){$.ui.launch();$.ui.showBackButton=false});var b=function(){AppMobi.device.setRotateOrientation("portrait");AppMobi.device.setAutoRotate(false);webRoot=AppMobi.webRoot+"";AppMobi.device.hideSplashScreen();$.ui.blockPageScroll();$.ui.launch()};document.addEventListener("intel.xdk.device.ready",b,false);if($.os.android||$.os.ie||search=="android"){$.ui.ready(function(){$("#main .list").append("<li><a id='toggleAndroidTheme'>Toggle Theme Color</a></li>");var c=$("#afui");$("#toggleAndroidTheme").bind("click",function(d){if(c.hasClass("light")){c.removeClass("light")}else{c.addClass("light")}})})}})(window);