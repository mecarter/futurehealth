!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t,n){"use strict";var o=n(3),i=new o.a,r=function(e){var t=e.getElementsByTagName("a")[0],n=t?t.getAttribute("href"):"";n&&e.addEventListener("click",function(e){e.preventDefault();var t=n.split("/").pop();i.open(t)})},a=function(){for(var e=document.getElementsByClassName("ProjectSite"),t=0;t<e.length;t++)r(e[t])};t.a={init:a,projectOverlay:i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),i=(n.n(o),n(8)),r=n(6),a=n(7);new i.a({common:r.a,home:a.a}).loadEvents()},function(e,t,n){"use strict";var o=function(){for(var e=document.getElementsByClassName("PostCard"),t=0;t<e.length;t++)!function(t){var n=e[t],o=n.getElementsByTagName("a")[0].getAttribute("href");console.log(o),n.addEventListener("click",function(e){"a"!==e.target.tagName&&(console.log(o),window.location=o)})}(t)};t.a={init:o}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){var t=this;o(this,e),this.BodyEl=document.body,this.El=document.getElementById("ProjectOverlay"),this.CloseButton=document.getElementById("ProjectOverlay-Close"),this.listenForEscKey=this.listenForEscKey.bind(this),this.El&&this.CloseButton&&this.CloseButton.addEventListener("click",function(e){e.preventDefault(),t.close()})}return i(e,[{key:"listenForEscKey",value:function(e){27===e.keyCode&&this.close()}},{key:"open",value:function(e){var t="open "+e;this.El.className=t,this.BodyEl.style.overflow="hidden",window.addEventListener("keyup",this.listenForEscKey)}},{key:"close",value:function(){var e=this;this.El.className=this.El.className.replace("open","closing"),this.BodyEl.style.overflow="",window.removeEventListener("keyup",this.listenForEscKey),setTimeout(function(){e.El.className=""},300)}}]),e}();t.a=r},function(e,t,n){"use strict";var o=n(0),i=o.a.projectOverlay,r=function(){for(var e=document.getElementsByClassName("ResearcherCard-OpenProject"),t=0;t<e.length;t++)!function(t){var n=e[t],o=n.dataset.project;n.addEventListener("click",function(e){e.preventDefault(),i.open(o)})}(t)};t.a={init:r}},function(e,t,n){"use strict";var o=function(){var e=document.getElementById("SiteHeader"),t=function(){if(document.documentElement.scrollTop>50||document.body.scrollTop>50)return void e.classList.add("scrolled");e.classList.remove("scrolled")};document.addEventListener("scroll",t),t();for(var n=document.getElementsByClassName("menu-item"),o=0;o<n.length;o++)n[o].addEventListener("click",function(t){if(t.target.href.includes("#")){var n=t.target.href.split("#")[1],o=document.getElementById(n);n&&o&&(t.preventDefault(),e.classList.remove("show-mobile-menu"),o.scrollIntoView({behavior:"smooth",block:"start"}))}});document.getElementById("SiteHeader-MobileMenu-Toggle").addEventListener("click",function(t){t.preventDefault(),e.classList.toggle("show-mobile-menu")}),document.getElementById("SiteHeader-MobileMenu-Close").addEventListener("click",function(t){t.preventDefault(),e.classList.remove("show-mobile-menu")})};t.a={init:o}},function(e,t,n){"use strict";var o=n(2),i=n(5);t.a={init:function(){o.a.init(),i.a.init()},finalize:function(){}}},function(e,t,n){"use strict";var o=n(0),i=n(4);t.a={init:function(){o.a.init(),i.a.init();var e=document.getElementById("home-splash"),t=document.getElementById("preload-image"),n=function(){e.className="loaded"};t.addEventListener("load",n),setTimeout(function(){"loaded"!==e.className&&(t.removeEventListener("load",n),n())},1e3)},finalize:function(){}}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(9),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(){function e(t){o(this,e),this.routes=t}return r(e,[{key:"fire",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"init",n=arguments[2];""!==e&&this.routes[e]&&"function"==typeof this.routes[e][t]&&this.routes[e][t](n)}},{key:"loadEvents",value:function(){var e=this;this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(i.a).forEach(function(t){e.fire(t),e.fire(t,"finalize")}),this.fire("common","finalize")}}]),e}();t.a=a},function(e,t,n){"use strict";t.a=function(e){return""+e.charAt(0).toLowerCase()+e.replace(/[\W_]/g,"|").split("|").map(function(e){return""+e.charAt(0).toUpperCase()+e.slice(1)}).join("").slice(1)}},function(e,t){},function(e,t,n){e.exports=n(1)}]);
//# sourceMappingURL=bundle.e8783026.js.map