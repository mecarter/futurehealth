!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=10)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),o=(n.n(i),n(7)),r=n(5),a=n(6);new o.a({common:r.a,home:a.a}).loadEvents()},function(t,e,n){"use strict";var i=function(){for(var t=document.getElementsByClassName("PostCard"),e=0;e<t.length;e++)!function(e){var n=t[e],i=n.getElementsByTagName("a")[0].getAttribute("href");n.addEventListener("click",function(t){"a"!==t.target.tagName&&(window.location=i)})}(e)};e.a={init:i}},function(t,e,n){"use strict";var i=n(3),o=new i.a,r=function(t){var e=t.getElementsByTagName("a")[0],n=e?e.getAttribute("href"):"";n&&t.addEventListener("click",function(t){t.preventDefault();var e=n.split("/").pop();o.open(e)})},a=function(){for(var t=document.getElementsByClassName("ProjectSite"),e=0;e<t.length;e++)r(t[e])};e.a={init:a}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){i(this,t),this.slug=null,this.fetchedProjects={}}return o(t,[{key:"fetchProject",value:function(t){this.fetchedProjects[t]={}}},{key:"open",value:function(t){this.slug===t||this.fetchedProjects[t]||console.log("fetch it"),this.slug=t}},{key:"close",value:function(){console.log("close")}}]),t}();e.a=r},function(t,e,n){"use strict";var i=function(){for(var t=document.getElementsByClassName("menu-item"),e=0;e<t.length;e++)t[e].addEventListener("click",function(t){if(t.target.href.includes("#")){var e=t.target.href.split("#")[1],n=document.getElementById(e);n&&(t.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"}))}})};e.a={init:i}},function(t,e,n){"use strict";var i=n(1),o=n(4);e.a={init:function(){i.a.init(),o.a.init()},finalize:function(){}}},function(t,e,n){"use strict";var i=n(2);e.a={init:function(){i.a.init()},finalize:function(){}}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=n(8),r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(){function t(e){i(this,t),this.routes=e}return r(t,[{key:"fire",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"init",n=arguments[2];""!==t&&this.routes[t]&&"function"==typeof this.routes[t][e]&&this.routes[t][e](n)}},{key:"loadEvents",value:function(){var t=this;this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(o.a).forEach(function(e){t.fire(e),t.fire(e,"finalize")}),this.fire("common","finalize")}}]),t}();e.a=a},function(t,e,n){"use strict";e.a=function(t){return""+t.charAt(0).toLowerCase()+t.replace(/[\W_]/g,"|").split("|").map(function(t){return""+t.charAt(0).toUpperCase()+t.slice(1)}).join("").slice(1)}},function(t,e){},function(t,e,n){t.exports=n(0)}]);
//# sourceMappingURL=bundle.7d30941e.js.map