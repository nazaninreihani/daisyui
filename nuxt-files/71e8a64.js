(window.webpackJsonp=window.webpackJsonp||[]).push([[79,6,9,11,44],{402:function(t,e,n){var o=n(18),r="["+n(403)+"]",l=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},403:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},404:function(t,e,n){"use strict";n.r(e);var o={props:{classes:String}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(404).default})},405:function(t,e,n){"use strict";var o=n(10),r=n(4),l=n(81),c=n(14),d=n(12),h=n(35),v=n(159),_=n(58),f=n(5),m=n(60),y=n(59).f,C=n(25).f,w=n(13).f,S=n(402).trim,x="Number",T=r.Number,j=T.prototype,k=h(m(j))==x,I=function(t){var e,n,o,r,l,c,d,code,h=_(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=S(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+h}for(c=(l=h.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>r)return NaN;return parseInt(l,o)}return+h};if(l(x,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var A,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(k?f((function(){j.valueOf.call(n)})):h(n)!=x)?v(new T(I(e)),n,E):I(e)},D=o?y(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;D.length>N;N++)d(T,A=D[N])&&!d(E,A)&&w(E,A,C(T,A));E.prototype=j,j.constructor=E,c(r,x,E)}},406:function(t,e,n){"use strict";n.r(e);n(37),n(405),n(26),n(36),n(82),n(112),n(45),n(47),n(160),n(61),n(158),n(83),n(46);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){n(408)},408:function(t,e,n){"use strict";var o=n(2),r=n(18),l=n(84),c=n(85),d=n(161),h=n(3),v=n(21),_=h("replace"),f=RegExp.prototype,m=Math.max,y=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};o({target:"String",proto:!0},{replaceAll:function(t,e){var n,o,h,C,w,S,x,T,j=r(this),k=0,I=0,A="";if(null!=t){if((n=l(t))&&!~String(r("flags"in f?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(o=t[_]))return o.call(t,j,e);if(v&&n)return String(j).replace(t,e)}for(h=String(j),C=String(t),(w="function"==typeof e)||(e=String(e)),S=C.length,x=m(1,S),k=y(h,C,0);-1!==k;)T=w?String(e(C,k,h)):d(C,h,k,[],void 0,e),A+=h.slice(I,k)+T,I=k+S,k=y(h,C,k+x);return I<h.length&&(A+=h.slice(I)),A}})},409:function(t,e,n){"use strict";var o=n(2),r=n(402).trim;o({target:"String",proto:!0,forced:n(410)("trim")},{trim:function(){return r(this)}})},410:function(t,e,n){var o=n(5),r=n(403);t.exports=function(t){return o((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},411:function(t,e,n){"use strict";n.r(e);n(407),n(409),n(112);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var o,r=new Array(1+n++).join("  "),l=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+r),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+l),e.appendChild(o));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs capitalize opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(406).default})},412:function(t,e,n){"use strict";n.r(e);var o={props:["data"]},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overflow-x-auto mt-6"},[n("table",{staticClass:"table table-compact w-full"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,o){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-success w-20"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,o){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-info w-20"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"text-xl font-bold mt-6"},[t._v("Examples")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},459:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{tableData:[{id:1,name:"Cy Ganderton",location:"Canada",job:"Quality Control Specialist",company:"Littel, Schaden and Vandervort",date:"12/16/2020",color:"Blue"},{id:2,name:"Hart Hagerty",location:"United States",job:"Desktop Support Technician",company:"Zemlak, Daniel and Leannon",date:"12/5/2020",color:"Purple"},{id:3,name:"Brice Swyre",location:"China",job:"Tax Accountant",company:"Carroll Group",date:"8/15/2020",color:"Red"},{id:4,name:"Marjy Ferencz",location:"Russia",job:"Office Assistant I",company:"Rowe-Schoen",date:"3/25/2021",color:"Crimson"},{id:5,name:"Yancy Tear",location:"Brazil",job:"Community Outreach Specialist",company:"Wyman-Ledner",date:"5/22/2020",color:"Indigo"},{id:6,name:"Irma Vasilik",location:"Venezuela",job:"Editor",company:"Wiza, Bins and Emard",date:"12/8/2020",color:"Purple"},{id:7,name:"Meghann Durtnal",location:"Philippines",job:"Staff Accountant IV",company:"Schuster-Schimmel",date:"2/17/2021",color:"Yellow"},{id:8,name:"Sammy Seston",location:"Indonesia",job:"Accountant I",company:"O'Hara, Welch and Keebler",date:"5/23/2020",color:"Crimson"},{id:9,name:"Lesya Tinham",location:"Philippines",job:"Safety Technician IV",company:"Turner-Kuhlman",date:"2/21/2021",color:"Maroon"},{id:10,name:"Zaneta Tewkesbury",location:"Chad",job:"VP Marketing",company:"Sauer LLC",date:"6/23/2020",color:"Green"},{id:11,name:"Andy Tipple",location:"Poland",job:"Librarian",company:"Hilpert Group",date:"7/9/2020",color:"Indigo"},{id:12,name:"Sophi Biles",location:"Indonesia",job:"Recruiting Manager",company:"Gutmann Inc",date:"2/12/2021",color:"Maroon"},{id:13,name:"Florida Garces",location:"Poland",job:"Web Developer IV",company:"Gaylord, Pacocha and Baumbach",date:"5/31/2020",color:"Purple"},{id:14,name:"Maribeth Popping",location:"Portugal",job:"Analyst Programmer",company:"Deckow-Pouros",date:"4/27/2021",color:"Aquamarine"},{id:15,name:"Moritz Dryburgh",location:"Sri Lanka",job:"Dental Hygienist",company:"Schiller, Cole and Hackett",date:"8/8/2020",color:"Crimson"},{id:16,name:"Reid Semiras",location:"Poland",job:"Teacher",company:"Sporer, Sipes and Rogahn",date:"7/30/2020",color:"Green"},{id:17,name:"Alec Lethby",location:"China",job:"Teacher",company:"Reichel, Glover and Hamill",date:"2/28/2021",color:"Khaki"},{id:18,name:"Aland Wilber",location:"Czech Republic",job:"Quality Control Specialist",company:"Kshlerin, Rogahn and Swaniawski",date:"9/29/2020",color:"Purple"},{id:19,name:"Teddie Duerden",location:"France",job:"Staff Accountant III",company:"Pouros, Ullrich and Windler",date:"10/27/2020",color:"Aquamarine"},{id:20,name:"Lorelei Blackstone",location:"Kazakhstan",job:"Data Coordiator",company:"Witting, Kutch and Greenfelder",date:"6/3/2020",color:"Red"}]}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"table",desc:"For <table> element"}],utilities:[{class:"table-zebra",desc:"For the active tab"},{class:"table-compact",desc:"Make table more compact"}]}}}),t._v(" "),n("Wrapper",{attrs:{title:"table"}},[n("div",{staticClass:"overflow-x-auto"},[n("table",{staticClass:"table w-full"},[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("Favorite Color")])])]),t._v(" "),n("tbody",t._l(t.tableData.slice(0,5),(function(e,o){return n("tr",{key:"item-"+o},[n("th",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.job))]),t._v(" "),n("td",[t._v(t._s(e.color))])])})),0)])])]),t._v(" "),n("Wrapper",{attrs:{title:"table-zebra"}},[n("div",{staticClass:"overflow-x-auto"},[n("table",{staticClass:"table table-zebra w-full"},[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("Favorite Color")])])]),t._v(" "),n("tbody",t._l(t.tableData.slice(5,10),(function(e,o){return n("tr",{key:"item-"+o},[n("th",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.job))]),t._v(" "),n("td",[t._v(t._s(e.color))])])})),0)])])]),t._v(" "),n("Wrapper",{attrs:{title:"table with visual elements"}},[n("div",{staticClass:"overflow-x-auto"},[n("table",{staticClass:"table w-full"},[n("thead",[n("tr",[n("th",[n("label",[n("input",{staticClass:"checkbox",attrs:{type:"checkbox"}}),t._v(" "),n("span",{staticClass:"checkbox-mark"})])]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("Favorite Color")]),t._v(" "),n("th")])]),t._v(" "),n("tbody",t._l(t.tableData.slice(1,5),(function(e,o){return n("tr",{key:"item-"+o},[n("th",[n("label",[n("input",{staticClass:"checkbox",attrs:{type:"checkbox"}}),t._v(" "),n("span",{staticClass:"checkbox-mark"})])]),t._v(" "),n("td",[n("div",{staticClass:"flex items-center space-x-3"},[n("div",{staticClass:"avatar"},[n("div",{staticClass:"w-12 h-12 mask mask-squircle"},[n("img",{attrs:{src:"/tailwind-css-component-profile-"+e.id+"@56w.png",alt:"Avatar Tailwind CSS Component"}})])]),t._v(" "),n("div",[n("div",{staticClass:"font-bold"},[t._v("\n                    "+t._s(e.name)+"\n                  ")]),t._v(" "),n("div",{staticClass:"text-sm opacity-50"},[t._v("\n                    "+t._s(e.location)+"\n                  ")])])])]),t._v(" "),n("td",[t._v("\n            "+t._s(e.company)+"\n            "),n("br"),t._v(" "),n("span",{staticClass:"badge badge-outline badge-sm"},[t._v(t._s(e.job))])]),t._v(" "),n("td",[t._v(t._s(e.color))]),t._v(" "),n("th",[n("button",{staticClass:"btn btn-ghost btn-xs"},[t._v("details")])])])})),0),t._v(" "),n("tfoot",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("Favorite Color")]),t._v(" "),n("th")])])])])]),t._v(" "),n("Wrapper",{attrs:{title:"table-compact"}},[n("div",{staticClass:"overflow-x-auto"},[n("table",{staticClass:"table table-compact w-full"},[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("company")]),t._v(" "),n("th",[t._v("location")]),t._v(" "),n("th",[t._v("Last Login")]),t._v(" "),n("th",[t._v("Favorite Color")])])]),t._v(" "),n("tbody",t._l(t.tableData.slice(0,20),(function(e,o){return n("tr",{key:"item-"+o},[n("th",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.job))]),t._v(" "),n("td",[t._v(t._s(e.company))]),t._v(" "),n("td",[t._v(t._s(e.location))]),t._v(" "),n("td",[t._v(t._s(e.date))]),t._v(" "),n("td",[t._v(t._s(e.color))])])})),0),t._v(" "),n("tfoot",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("company")]),t._v(" "),n("th",[t._v("location")]),t._v(" "),n("th",[t._v("Last Login")]),t._v(" "),n("th",[t._v("Favorite Color")])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(412).default,Wrapper:n(411).default,Input:n(113).default,Button:n(404).default})}}]);