(function(t){function e(e){for(var a,i,l=e[0],o=e[1],c=e[2],u=0,v=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);h&&h(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},r={app:0},n=[];function l(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"41fbe84a"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s={about:1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=new Promise((function(e,s){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"e478e733"}[t]+".css",r=o.p+a,n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var c=n[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return e()}var v=document.getElementsByTagName("style");for(l=0;l<v.length;l++){c=v[l],u=c.getAttribute("data-href");if(u===a||u===r)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||r,n=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete i[t],h.parentNode.removeChild(h),s(n)},h.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=l(t);var v=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(h);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;v.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",v.name="ChunkLoadError",v.type=a,v.request=i,s[1](v)}r[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var v=0;v<c.length;v++)e(c[v]);var h=u;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("ecfe"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("div",{staticClass:"title"},[t._v("Rishi Surana")]),s("div",{staticClass:"nav-items"},[s("router-link",{staticClass:"nav-item rl",attrs:{to:"/"}},[t._v("Home")]),s("a",{staticClass:"nav-item rl",attrs:{href:"https://drive.google.com/file/d/116-AuCvRgU_60vU7q0kdyb9prY0FoCjg/view?usp=sharing",target:"_blank"}},[t._v("Resume")]),s("router-link",{staticClass:"nav-item rl",attrs:{to:"/projects"}},[t._v("Software")]),s("a",{staticClass:"nav-item rl",attrs:{href:"https://www.instagram.com/__rosho/?hl=en",target:"_blank"}},[t._v(" Art")]),s("router-link",{staticClass:"nav-item rl",attrs:{to:"/contact"}},[t._v("Contact")])],1)]),s("router-view")],1)},r=[],n=(s("034f"),s("0c7c")),l={},o=Object(n["a"])(l,i,r,!1,null,null,null),c=o.exports,u=(s("d3b7"),s("8c4f")),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"p1"},[s("transition",{attrs:{name:"fade"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.hello,expression:"hello"}]},[t._v("Hello,")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.init,expression:"init"}]},[t._v(" I'm "),s("transition",{attrs:{name:"fade"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"bold"},[t._v(t._s(t.active)),s("span",{staticClass:"nb"},[t._v(t._s(t.extra))])])])],1)],1),s("br"),s("div",{attrs:{id:"proj-container"}},[s("div",{attrs:{id:"proj-title"}},[t._v("Projects")]),s("p",[t._v('To view more projects visit the "Software" section.')]),s("br"),t._l(t.cards,(function(t){return s("div",{key:t.title,staticClass:"cards"},[s("Card",{staticClass:"card",attrs:{gitUrl:t.url,title:t.title,img:t.img}})],1)}))],2),s("div",{attrs:{id:"skills"}},[t._v("Technical Skills")]),t._m(0),t._m(1)])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"bold hl"},[t._v("*Highlighted")]),t._v(" = Most Experience")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"programming"},[s("div",{staticClass:" skill-grp"},[s("div",{staticClass:"skill"},[s("div",{staticClass:"list-title"},[t._v("UI Development")]),s("hr",{staticClass:"hr"}),s("br"),s("div",{staticClass:"skill-list"},[s("ul",[s("li",{staticClass:"hl"},[t._v("UI State Management")]),s("li",[t._v("Responsive + Fluid UI Development")]),s("li",{staticClass:"hl"},[t._v("Single Page Web Application Development")])])])]),s("div",{staticClass:"skill"},[s("div",{staticClass:"list-title"},[t._v("API Development")]),s("hr",{staticClass:"hr"}),s("br"),s("p",{staticClass:"bold hover-msg"},[t._v("(Hover to see more)")]),s("div",{staticClass:"skill-list"},[s("ul",[s("li",{staticClass:"hl"},[t._v("RESTful API Development")]),s("li",[t._v("Database Management")]),s("li",[t._v("Schema Design")]),s("li",{staticClass:"hl"},[t._v("Ecommerce Solutions")])])])]),s("div",{staticClass:"skill"},[s("div",{staticClass:"list-title"},[t._v("Deep Learning")]),s("hr",{staticClass:"hr"}),s("br"),s("div",{staticClass:"skill-list"},[s("ul",[s("li",{staticClass:"hl"},[t._v("Image Classification")]),s("li",{staticClass:"hl"},[t._v("Object Detection")]),s("li",[t._v("Image Segmentation")]),s("li",[t._v("IoT Implementation")])])])]),s("div",{staticClass:"skill"},[s("div",{staticClass:"list-title"},[t._v("Generic")]),s("hr",{staticClass:"hr"}),s("br"),s("div",{staticClass:"skill-list"},[s("ul",[s("li",{staticClass:"hl"},[t._v("Scripting (Automation)")]),s("li",[t._v("Web Scraping")]),s("li",{staticClass:"hl"},[t._v("Data Structures")]),s("li",{staticClass:"hl"},[t._v("Algorithms")])])])])])])}],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("h1",[t._v(t._s(t.title))]),s("hr"),s("img",{staticClass:"card-img",attrs:{src:t.img,alt:"Image unavailable."}}),s("hr"),s("button",{staticClass:"see-more"},[s("a",{staticClass:"link",attrs:{href:t.gitUrl,target:"_blank"}},[t._v("See More")])])])},p=[],m={name:"Card",props:["title","gitUrl","img"]},f=m,g=(s("e4e7"),Object(n["a"])(f,d,p,!1,null,"7acac9db",null)),b=g.exports,_={name:"Home",components:{Card:b},data:function(){return{active:"",idx:-1,words:["Rishi.","a Software Engineer.","a Digital Artist."," a Deep Learning enthusiast."],extra:"",show:!0,hello:!1,init:!1,cards:[{title:"Simple School",url:"https://www.simple-school.com",img:"https://i.ibb.co/wcKFF6f/Screen-Shot-2020-10-02-at-9-34-14-AM.png"},{title:"AI Security System",url:"https://github.com/rishisurana13/ai-security-system#instructions",img:"https://www.securitysales.com/wp-content/uploads/2019/11/AdobeStock_145218141.jpg"},{title:"Surana Jewels",url:"https://www.simple-school.com",img:"https://i.ibb.co/yY2LPr8/Screen-Shot-2020-10-02-at-10-03-47-AM.png"}]}},methods:{changeAdj:function(){var t=this;setTimeout((function(){t.show=!1}),2e3),this.idx+=1,this.idx===this.words.length&&(this.idx=0),this.active=this.words[this.idx],0===this.idx?setTimeout((function(){t.extra=" Nice to meet you."}),1e3):this.extra="",this.show=!0}},mounted:function(){var t=this;this.hello=!0,setTimeout((function(){t.init=!0,t.show=!0,t.changeAdj(),setInterval(t.changeAdj,3550)}),2e3)}},C=_,w=(s("cc4c"),Object(n["a"])(C,v,h,!1,null,"6f19310c",null)),S=w.exports;a["a"].use(u["a"]);var y=[{path:"/",name:"Home",component:S},{path:"/projects",name:"Software",component:function(){return s.e("about").then(s.bind(null,"e86f"))}},{path:"/contact",name:"Contact",component:function(){return s.e("about").then(s.bind(null,"b8fa"))}}],k=new u["a"]({mode:"history",base:"/",routes:y}),j=k,x=s("2f62");a["a"].use(x["a"]);var A=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:j,store:A,render:function(t){return t(c)}}).$mount("#app")},c246:function(t,e,s){},cc4c:function(t,e,s){"use strict";var a=s("c246"),i=s.n(a);i.a},e3de:function(t,e,s){},e4e7:function(t,e,s){"use strict";var a=s("e3de"),i=s.n(a);i.a},ecfe:function(t,e,s){}});
//# sourceMappingURL=app.4957565b.js.map
