!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),o=(n.n(i),n(7)),r=n(5),a=n(6);new o.a({common:r.a,home:a.a}).loadEvents()},function(e,t,n){"use strict";var i=function(){for(var e=document.getElementsByClassName("PostCard"),t=0;t<e.length;t++)!function(t){var n=e[t],i=n.getElementsByTagName("a")[0].getAttribute("href");n.addEventListener("click",function(e){"a"!==e.target.tagName&&(window.location=i)})}(t)};t.a={init:i}},function(e,t,n){"use strict";var i=n(3),o=new i.a,r=function(e){var t=e.getElementsByTagName("a")[0],n=t?t.getAttribute("href"):"";n&&e.addEventListener("click",function(e){e.preventDefault();var t=n.split("/").pop();o.open(t)})},a=function(){for(var e=document.getElementsByClassName("ProjectSite"),t=0;t<e.length;t++)r(e[t])};t.a={init:a}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){var t=this;i(this,e),this.El=document.getElementById("ProjectOverlay"),this.CloseButton=document.getElementById("ProjectOverlayClose"),this.listenForEscKey=this.listenForEscKey.bind(this),this.CloseButton.addEventListener("click",function(e){e.preventDefault(),t.close()})}return o(e,[{key:"listenForEscKey",value:function(e){27===e.keyCode&&this.close()}},{key:"open",value:function(e){var t="open "+e;this.El.className=t,window.addEventListener("keyup",this.listenForEscKey)}},{key:"close",value:function(){var e=this;this.El.className=this.El.className.replace("open","closing"),window.removeEventListener("keyup",this.listenForEscKey),setTimeout(function(){e.El.className=""},300)}}]),e}();t.a=r},function(e,t,n){"use strict";var i=function(){for(var e=document.getElementsByClassName("menu-item"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){if(e.target.href.includes("#")){var t=e.target.href.split("#")[1],n=document.getElementById(t);n&&(e.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"}))}})};t.a={init:i}},function(e,t,n){"use strict";var i=n(1),o=n(4);t.a={init:function(){i.a.init(),o.a.init()},finalize:function(){}}},function(e,t,n){"use strict";var i=n(2);t.a={init:function(){i.a.init()},finalize:function(){}}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(8),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(){function e(t){i(this,e),this.routes=t}return r(e,[{key:"fire",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"init",n=arguments[2];""!==e&&this.routes[e]&&"function"==typeof this.routes[e][t]&&this.routes[e][t](n)}},{key:"loadEvents",value:function(){var e=this;this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(o.a).forEach(function(t){e.fire(t),e.fire(t,"finalize")}),this.fire("common","finalize")}}]),e}();t.a=a},function(e,t,n){"use strict";t.a=function(e){return""+e.charAt(0).toLowerCase()+e.replace(/[\W_]/g,"|").split("|").map(function(e){return""+e.charAt(0).toUpperCase()+e.slice(1)}).join("").slice(1)}},function(e,t){},function(e,t,n){e.exports=n(0)}]);
//# sourceMappingURL=bundle.d4fc4868.js.map