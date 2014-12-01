/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
(function(Z,Q,r){'use strict';function F(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.8/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function rb(b){if(null==b||Aa(b))return!1;var a=
b.length;return 1===b.nodeType&&a?!0:D(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(L(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(rb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Pb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Pc(b,
a,c){for(var d=Pb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Qb(b){return function(a,c){b(c,a)}}function Za(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function Rb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function t(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Rb(b,a);return b}function S(b){return parseInt(b,
10)}function Sb(b,a){return t(new (t(function(){},{prototype:b})),a)}function w(){}function Ba(b){return b}function $(b){return function(){return b}}function z(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function X(b){return null!=b&&"object"===typeof b}function D(b){return"string"===typeof b}function sb(b){return"number"===typeof b}function La(b){return"[object Date]"===$a.call(b)}function K(b){return"[object Array]"===$a.call(b)}function L(b){return"function"===typeof b}
function ab(b){return"[object RegExp]"===$a.call(b)}function Aa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Qc(b){return!(!b||!(b.nodeName||b.on&&b.find))}function Rc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function bb(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ma(b,a){var c=bb(b,a);0<=c&&b.splice(c,1);return a}function fa(b,a){if(Aa(b)||b&&b.$evalAsync&&b.$watch)throw Na("cpws");if(a){if(b===
a)throw Na("cpi");if(K(b))for(var c=a.length=0;c<b.length;c++)a.push(fa(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=fa(b[d]);Rb(a,c)}}else(a=b)&&(K(b)?a=fa(b,[]):La(b)?a=new Date(b.getTime()):ab(b)?a=RegExp(b.source):X(b)&&(a=fa(b,{})));return a}function Tb(b,a){a=a||{};for(var c in b)b.hasOwnProperty(c)&&("$"!==c.charAt(0)&&"$"!==c.charAt(1))&&(a[c]=b[c]);return a}function ua(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,
d;if(c==typeof a&&"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ua(b[d],a[d]))return!1;return!0}}else{if(La(b))return La(a)&&b.getTime()==a.getTime();if(ab(b)&&ab(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Aa(b)||Aa(a)||K(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!L(b[d])){if(!ua(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==r&&!L(a[d]))return!1;return!0}return!1}
function Ub(){return Q.securityPolicy&&Q.securityPolicy.isActive||Q.querySelector&&!(!Q.querySelector("[ng-csp]")&&!Q.querySelector("[data-ng-csp]"))}function cb(b,a){var c=2<arguments.length?va.call(arguments,2):[];return!L(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(va.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Sc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=r:Aa(a)?c="$WINDOW":
a&&Q===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function qa(b,a){return"undefined"===typeof b?r:JSON.stringify(b,Sc,a?"  ":null)}function Vb(b){return D(b)?JSON.parse(b):b}function Oa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=x(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ga(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return 3===b[0].nodeType?x(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+x(b)})}catch(d){return x(c)}}function Wb(b){try{return decodeURIComponent(b)}catch(a){}}function Xb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Wb(c[0]),B(d)&&(b=B(c[1])?Wb(c[1]):!0,a[d]?K(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Yb(b){var a=[];q(b,function(b,d){K(b)?q(b,function(b){a.push(wa(d,!0)+(!0===b?"":"="+wa(b,!0)))}):a.push(wa(d,!0)+(!0===b?"":"="+wa(b,!0)))});return a.length?a.join("&"):""}function tb(b){return wa(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function wa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Tc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(Q.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+
a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function Zb(b,a){var c=function(){b=A(b);if(b.injector()){var c=b[0]===Q?"document":ga(b);throw Na("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=$b(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(Z&&!d.test(Z.name))return c();Z.name=Z.name.replace(d,"");Ca.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function db(b,a){a=a||"_";return b.replace(Uc,function(b,d){return(d?a:"")+b.toLowerCase()})}function ub(b,a,c){if(!b)throw Na("areq",a||"?",c||"required");return b}function Pa(b,a,c){c&&K(b)&&(b=b[b.length-1]);ub(L(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function xa(b,a){if("hasOwnProperty"===b)throw Na("badname",a);}function vb(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&L(b)?cb(e,b):b}function wb(b){var a=b[0];b=b[b.length-1];if(a===b)return A(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function Vc(b){var a=F("$injector"),c=F("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||F;return b.module||
(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};f&&l(f);return n}())}}())}function Qa(b){return b.replace(Wc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Xc,"Moz$1")}function xb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,p,s,C;if(!d||null!=b)for(;e.length;)for(k=e.shift(),
l=0,n=k.length;l<n;l++)for(p=A(k[l]),m?p.triggerHandler("$destroy"):m=!m,s=0,p=(C=p.children()).length;s<p;s++)e.push(Da(C[s]));return g.apply(this,arguments)}var g=Da.fn[b],g=g.$original||g;e.$original=g;Da.fn[b]=e}function O(b){if(b instanceof O)return b;if(!(this instanceof O)){if(D(b)&&"<"!=b.charAt(0))throw yb("nosel");return new O(b)}if(D(b)){var a=Q.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);zb(this,a.childNodes);A(Q.createDocumentFragment()).append(this)}else zb(this,
b)}function Ab(b){return b.cloneNode(!0)}function Ea(b){ac(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ea(b[a])}function bc(b,a,c,d){if(B(d))throw yb("offargs");var e=la(b,"events");la(b,"handle")&&(z(a)?q(e,function(a,c){Bb(b,c,a);delete e[c]}):q(a.split(" "),function(a){z(c)?(Bb(b,a,e[a]),delete e[a]):Ma(e[a]||[],c)}))}function ac(b,a){var c=b[eb],d=Ra[c];d&&(a?delete Ra[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),bc(b)),delete Ra[c],b[eb]=r))}function la(b,a,c){var d=
b[eb],d=Ra[d||-1];if(B(c))d||(b[eb]=d=++Yc,d=Ra[d]={}),d[a]=c;else return d&&d[a]}function cc(b,a,c){var d=la(b,"data"),e=B(c),g=!e&&B(a),f=g&&!X(a);d||f||la(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];t(d,a)}else return d}function Cb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Db(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+aa(a)+" "," ")))})}function Eb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function zb(b,a){if(a){a=a.nodeName||!B(a.length)||Aa(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function dc(b,a){return fb(b,"$"+(a||"ngController")+"Controller")}function fb(b,a,c){b=A(b);9==b[0].nodeType&&(b=b.find("html"));for(a=K(a)?a:[a];b.length;){for(var d=
0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==r)return c;b=b.parent()}}function ec(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ea(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function fc(b,a){var c=gb[a.toLowerCase()];return c&&gc[b.nodeName]&&c}function Zc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||Q);if(z(c.defaultPrevented)){var g=c.preventDefault;
c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var f=Tb(a[e||c.type]||[]);q(f,function(a){a.call(b,c)});8>=M?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Fa(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===
r&&(c=b.$$hashKey=Za()):c=b;return a+":"+c}function Sa(b){q(b,this.put,this)}function hc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace($c,""),c=c.match(ad),q(c[1].split(bd),function(b){b.replace(cd,function(b,c,d){a.push(d)})})),b.$inject=a):K(b)?(c=b.length-1,Pa(b[c],"fn"),a=b.slice(0,c)):Pa(b,"fn",!0);return a}function $b(b){function a(a){return function(b,c){if(X(b))q(b,Qb(a));else return a(b,c)}}function c(a,b){xa(a,"service");if(L(b)||K(b))b=n.instantiate(b);
if(!b.$get)throw Ta("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,g,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(D(a))for(c=Ua(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,g=0,h=d.length;g<h;g++){var f=d[g],m=n.get(f[0]);m[f[1]].apply(m,f[2])}else L(a)?b.push(n.invoke(a)):K(a)?b.push(n.invoke(a)):Pa(a,"module")}catch(s){throw K(a)&&(a=a[a.length-1]),s.message&&(s.stack&&-1==s.stack.indexOf(s.message))&&(s=s.message+"\n"+s.stack),
Ta("modulerr",a,s.stack||s.message||s);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Ta("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=f,a[d]=b(d)}catch(e){throw a[d]===f&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var g=[],h=hc(a),f,k,m;k=0;for(f=h.length;k<f;k++){m=h[k];if("string"!==typeof m)throw Ta("itkn",m);g.push(e&&e.hasOwnProperty(m)?e[m]:c(m))}a.$inject||(a=a[f]);return a.apply(b,g)}return{invoke:d,instantiate:function(a,
b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return X(e)||L(e)?e:c},get:c,annotate:hc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var f={},h="Provider",m=[],k=new Sa,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,$(b))}),constant:a(function(a,b){xa(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),
d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},n=l.$injector=g(l,function(){throw Ta("unpr",m.join(" <- "));}),p={},s=p.$injector=g(p,function(a){a=n.get(a+h);return s.invoke(a.$get,a)});q(e(b),function(a){s.invoke(a||w)});return s}function dd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==x(a.nodeName)||(b=a)});return b}function g(){var b=
c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function ed(b,a,c,d){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(C--,0===C)for(;y.length;)try{y.pop()()}catch(b){c.error(b)}}}function g(a,b){(function T(){q(E,function(a){a()});u=b(T,a)})()}function f(){v=null;R!=h.url()&&(R=h.url(),q(ha,
function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,s={};h.isMock=!1;var C=0,y=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){C++};h.notifyWhenNoOutstandingRequests=function(a){q(E,function(a){a()});0===C?a():y.push(a)};var E=[],u;h.addPollFn=function(a){z(u)&&g(100,n);E.push(a);return a};var R=k.href,H=a.find("base"),v=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(R!=a)return R=
a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),H.attr("href",H.attr("href"))):(v=a,c?k.replace(a):k.href=a),h}else return v||k.href.replace(/%27/g,"'")};var ha=[],N=!1;h.onUrlChange=function(a){if(!N){if(d.history)A(b).on("popstate",f);if(d.hashchange)A(b).on("hashchange",f);else h.addPollFn(f);N=!0}ha.push(a);return a};h.baseHref=function(){var a=H.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var V={},J="",ba=h.baseHref();h.cookies=function(a,b){var d,e,g,h;if(a)b===
r?m.cookie=escape(a)+"=;path="+ba+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+ba).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==J)for(J=m.cookie,d=J.split("; "),V={},g=0;g<d.length;g++)e=d[g],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),V[a]===r&&(V[a]=unescape(e.substring(h+1))));return V}};h.defer=function(a,b){var c;C++;c=n(function(){delete s[c];
e(a)},b||0);s[c]=!0;return c};h.defer.cancel=function(a){return s[a]?(delete s[a],p(a),e(w),!0):!1}}function fd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new ed(b,d,a,c)}]}function gd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw F("$cacheFactory")("iid",b);var f=0,h=t({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;
return a[b]={put:function(a,b){var c=l[a]||(l[a]={key:a});e(c);if(!z(b))return a in m||f++,m[a]=b,f>k&&this.remove(p.key),b},get:function(a){var b=l[a];if(b)return e(b),m[a]},remove:function(a){var b=l[a];b&&(b==n&&(n=b.p),b==p&&(p=b.n),g(b.n,b.p),delete l[a],delete m[a],f--)},removeAll:function(){m={};f=0;l={};n=p=null},destroy:function(){l=h=m=null;delete a[b]},info:function(){return t({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
return b}}function hd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function jc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){xa(a,"directive");D(a)?(ub(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);L(f)?f={compile:$(f)}:!f.compile&&f.link&&(f.compile=
$(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,Qb(m));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate",
"$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,s,C,y,E,u,R,H){function v(a,b,c,d,e){a instanceof A||(a=A(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var g=N(a,b,a,c,d,e);ha(a,"ng-scope");return function(b,c,d){ub(b,"scope");var e=c?Ga.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var m=
e[d].nodeType;1!==m&&9!==m||e.eq(d).data("$scope",b)}c&&c(e,b);g&&g(b,e,e);return e}}function ha(a,b){try{a.addClass(b)}catch(c){}}function N(a,b,c,d,e,g){function f(a,c,d,e){var g,k,s,l,n,p,I;g=c.length;var C=Array(g);for(n=0;n<g;n++)C[n]=c[n];I=n=0;for(p=m.length;n<p;I++)k=C[I],c=m[n++],g=m[n++],s=A(k),c?(c.scope?(l=a.$new(),s.data("$scope",l)):l=a,(s=c.transclude)||!e&&b?c(g,l,k,d,V(a,s||b)):c(g,l,k,d,e)):g&&g(a,k.childNodes,r,e)}for(var m=[],k,s,l,n,p=0;p<a.length;p++)k=new Fb,s=J(a[p],[],k,0===
p?d:r,e),(g=s.length?ia(s,a[p],k,b,c,null,[],[],g):null)&&g.scope&&ha(A(a[p]),"ng-scope"),k=g&&g.terminal||!(l=a[p].childNodes)||!l.length?null:N(l,g?g.transclude:b),m.push(g,k),n=n||g||k,g=null;return n?f:null}function V(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",cb(c,c.$destroy));return d}}function J(a,b,c,d,f){var k=c.$attr,m;switch(a.nodeType){case 1:T(b,ma(Ha(a).toLowerCase()),"E",d,f);var s,l,n;m=a.attributes;for(var p=0,C=m&&m.length;p<
C;p++){var y=!1,R=!1;s=m[p];if(!M||8<=M||s.specified){l=s.name;n=ma(l);W.test(n)&&(l=db(n.substr(6),"-"));var v=n.replace(/(Start|End)$/,"");n===v+"Start"&&(y=l,R=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));n=ma(l.toLowerCase());k[n]=l;c[n]=s=aa(s.value);fc(a,n)&&(c[n]=!0);S(a,b,s,n);T(b,n,"A",d,f,y,R)}}a=a.className;if(D(a)&&""!==a)for(;m=g.exec(a);)n=ma(m[2]),T(b,n,"C",d,f)&&(c[n]=aa(m[3])),a=a.substr(m.index+m[0].length);break;case 3:F(b,a.nodeValue);break;case 8:try{if(m=e.exec(a.nodeValue))n=
ma(m[1]),T(b,n,"M",d,f)&&(c[n]=aa(m[2]))}catch(E){}}b.sort(z);return b}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function P(a,b,c){return function(d,e,g,f,m){e=ba(e[0],b,c);return a(d,e,g,f,m)}}function ia(a,c,d,e,g,f,m,n,p){function y(a,b,c,d){if(a){c&&(a=P(a,c,d));a.require=G.require;if(H===G||G.$$isolateScope)a=
kc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=P(b,c,d));b.require=G.require;if(H===G||G.$$isolateScope)b=kc(b,{isolateScope:!0});n.push(b)}}function R(a,b,c){var d,e="data",g=!1;if(D(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ja("ctreq",a,ca);}else K(a)&&(d=[],q(a,function(a){d.push(R(a,b,c))}));return d}function E(a,e,g,f,p){function y(a,b){var c;2>arguments.length&&(b=a,
a=r);z&&(c=ba);return p(a,b,c)}var I,v,N,u,P,J,ba={},hb;I=c===g?d:Tb(d,new Fb(A(g),d.$attr));v=I.$$element;if(H){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=A(g);J=e.$new(!0);ia&&ia===H.$$originalDirective?f.data("$isolateScope",J):f.data("$isolateScopeNoTemplate",J);ha(f,"ng-isolate-scope");q(H.scope,function(a,c){var d=a.match(T)||[],g=d[3]||c,f="?"==d[2],d=d[1],m,l,n,p;J.$$isolateBindings[c]=d+g;switch(d){case "@":I.$observe(g,function(a){J[c]=a});I.$$observers[g].$$scope=e;I[g]&&(J[c]=b(I[g])(e));
break;case "=":if(f&&!I[g])break;l=s(I[g]);p=l.literal?ua:function(a,b){return a===b};n=l.assign||function(){m=J[c]=l(e);throw ja("nonassign",I[g],H.name);};m=J[c]=l(e);J.$watch(function(){var a=l(e);p(a,J[c])||(p(a,m)?n(e,a=J[c]):J[c]=a);return m=a},null,l.literal);break;case "&":l=s(I[g]);J[c]=function(a){return l(e,a)};break;default:throw ja("iscp",H.name,c,a);}})}hb=p&&y;V&&q(V,function(a){var b={$scope:a===H||a.$$isolateScope?J:e,$element:v,$attrs:I,$transclude:hb},c;P=a.controller;"@"==P&&(P=
I[a.name]);c=C(P,b);ba[a.name]=c;z||v.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(N=m.length;f<N;f++)try{u=m[f],u(u.isolateScope?J:e,v,I,u.require&&R(u.require,v,ba),hb)}catch(G){l(G,ga(v))}f=e;H&&(H.template||null===H.templateUrl)&&(f=J);a&&a(f,g.childNodes,r,p);for(f=n.length-1;0<=f;f--)try{u=n[f],u(u.isolateScope?J:e,v,I,u.require&&R(u.require,v,ba),hb)}catch(B){l(B,ga(v))}}p=p||{};var N=-Number.MAX_VALUE,u,V=p.controllerDirectives,H=p.newIsolateScopeDirective,
ia=p.templateDirective;p=p.nonTlbTranscludeDirective;for(var T=!1,z=!1,t=d.$$element=A(c),G,ca,U,F=e,O,M=0,na=a.length;M<na;M++){G=a[M];var Va=G.$$start,S=G.$$end;Va&&(t=ba(c,Va,S));U=r;if(N>G.priority)break;if(U=G.scope)u=u||G,G.templateUrl||(x("new/isolated scope",H,G,t),X(U)&&(H=G));ca=G.name;!G.templateUrl&&G.controller&&(U=G.controller,V=V||{},x("'"+ca+"' controller",V[ca],G,t),V[ca]=G);if(U=G.transclude)T=!0,G.$$tlb||(x("transclusion",p,G,t),p=G),"element"==U?(z=!0,N=G.priority,U=ba(c,Va,S),
t=d.$$element=A(Q.createComment(" "+ca+": "+d[ca]+" ")),c=t[0],ib(g,A(va.call(U,0)),c),F=v(U,e,N,f&&f.name,{nonTlbTranscludeDirective:p})):(U=A(Ab(c)).contents(),t.empty(),F=v(U,e));if(G.template)if(x("template",ia,G,t),ia=G,U=L(G.template)?G.template(t,d):G.template,U=Y(U),G.replace){f=G;U=A("<div>"+aa(U)+"</div>").contents();c=U[0];if(1!=U.length||1!==c.nodeType)throw ja("tplrt",ca,"");ib(g,t,c);na={$attr:{}};U=J(c,[],na);var W=a.splice(M+1,a.length-(M+1));H&&ic(U);a=a.concat(U).concat(W);B(d,na);
na=a.length}else t.html(U);if(G.templateUrl)x("template",ia,G,t),ia=G,G.replace&&(f=G),E=w(a.splice(M,a.length-M),t,d,g,F,m,n,{controllerDirectives:V,newIsolateScopeDirective:H,templateDirective:ia,nonTlbTranscludeDirective:p}),na=a.length;else if(G.compile)try{O=G.compile(t,d,F),L(O)?y(null,O,Va,S):O&&y(O.pre,O.post,Va,S)}catch(Z){l(Z,ga(t))}G.terminal&&(E.terminal=!0,N=Math.max(N,G.priority))}E.scope=u&&!0===u.scope;E.transclude=T&&F;return E}function ic(a){for(var b=0,c=a.length;b<c;b++)a[b]=Sb(a[b],
{$$isolateScope:!0})}function T(b,e,g,f,k,s,n){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var C=0,y=e.length;C<y;C++)try{p=e[C],(f===r||f>p.priority)&&-1!=p.restrict.indexOf(g)&&(s&&(p=Sb(p,{$$start:s,$$end:n})),b.push(p),k=p)}catch(v){l(v)}}return k}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ha(e,b),a["class"]=(a["class"]?a["class"]+
" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function w(a,b,c,d,e,g,f,m){var k=[],s,l,C=b[0],y=a.shift(),v=t({},y,{templateUrl:null,transclude:null,replace:null,$$originalDirective:y}),R=L(y.templateUrl)?y.templateUrl(b,c):y.templateUrl;b.empty();n.get(u.getTrustedResourceUrl(R),{cache:p}).success(function(n){var p,E;n=Y(n);if(y.replace){n=A("<div>"+aa(n)+"</div>").contents();p=n[0];if(1!=
n.length||1!==p.nodeType)throw ja("tplrt",y.name,R);n={$attr:{}};ib(d,b,p);var u=J(p,[],n);X(y.scope)&&ic(u);a=u.concat(a);B(c,n)}else p=C,b.html(n);a.unshift(v);s=ia(a,p,c,e,b,y,g,f,m);q(d,function(a,c){a==p&&(d[c]=b[0])});for(l=N(b[0].childNodes,e);k.length;){n=k.shift();E=k.shift();var H=k.shift(),ha=k.shift(),u=b[0];E!==C&&(u=Ab(p),ib(H,A(E),u));E=s.transclude?V(n,s.transclude):ha;s(l,n,u,d,E)}k=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),
k.push(c),k.push(d),k.push(e)):s(l,b,c,d,e)}}function z(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function x(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ga(d));}function F(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:$(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ha(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function O(a,b){if("srcdoc"==b)return u.HTML;var c=Ha(a);if("xlinkHref"==
b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return u.RESOURCE_URL}function S(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Ha(a))throw ja("selmulti",ga(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(f.test(e))throw ja("nodomevents");if(g=b(m[e],!0,O(a,e)))m[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,
a)})}}}})}}function ib(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,m;if(a)for(f=0,m=a.length;f<m;f++)if(a[f]==d){a[f++]=c;m=f+e-1;for(var k=a.length;f<k;f++,m++)m<k?a[f]=a[m]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=Q.createDocumentFragment();a.appendChild(d);c[A.expando]=d[A.expando];d=1;for(e=b.length;d<e;d++)g=b[d],A(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function kc(a,b){return t(function(){return a.apply(null,arguments)},a,b)}var Fb=function(a,b){this.$$element=
a;this.$attr=b||{}};Fb.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){this.$removeClass(lc(b,a));this.$addClass(lc(a,b))},$set:function(a,b,c,d){var e=fc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=db(a,"-"));e=Ha(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=
b=H(b,"src"===a);!1!==c&&(null===b||b===r?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);y.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var ca=b.startSymbol(),na=b.endSymbol(),Y="{{"==ca||"}}"==na?Ba:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,na)},W=/^ngAttr[A-Z]/;return v}]}function ma(b){return Qa(b.replace(id,
""))}function lc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function jd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){xa(a,"controller");X(a)?t(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,h,m;D(e)&&(f=e.match(a),h=f[1],m=f[3],e=b.hasOwnProperty(h)?b[h]:vb(g.$scope,h,!0)||vb(d,h,!0),Pa(e,h,!0));f=c.instantiate(e,g);
if(m){if(!g||"object"!=typeof g.$scope)throw F("$controller")("noscp",h||e.name,m);g.$scope[m]=f}return f}}]}function kd(){this.$get=["$window",function(b){return A(b.document)}]}function ld(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function mc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=x(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function nc(b){var a=X(b)?b:r;return function(c){a||
(a=mc(b));return c?a[x(c)]||null:a}}function oc(b,a,c){if(L(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function md(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){D(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Vb(d)));return d}],transformRequest:[function(a){return X(a)&&"[object File]"!==$a.call(a)?qa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:d,
put:d,patch:d},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function s(a){function c(a){var b=t({},a,{data:oc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;q(a,function(b,
d){L(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=t({},a.headers),g,f,c=t({},c.common,c[x(a.method)]);b(c);b(d);a:for(g in c){a=x(g);for(f in d)if(x(f)===a)continue a;d[g]=c[g]}return d}(a);t(d,a);d.headers=g;d.method=Ia(d.method);(a=Gb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:r)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=a);var f=[function(a){g=a.headers;var b=oc(a.data,nc(g),a.transformRequest);z(a.data)&&q(g,function(a,b){"content-type"===x(b)&&delete g[b]});z(a.withCredentials)&&
!z(e.withCredentials)&&(a.withCredentials=e.withCredentials);return C(a,b,g).then(c,c)},r],h=n.when(d);for(q(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};return h}function C(b,
c,g){function f(a,b,c){u&&(200<=a&&300>a?u.put(r,[a,b,mc(c)]):u.remove(r));m(b,a,c);d.$$phase||d.$apply()}function m(a,c,d){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:nc(d),config:b})}function k(){var a=bb(s.pendingRequests,b);-1!==a&&s.pendingRequests.splice(a,1)}var p=n.defer(),C=p.promise,u,q,r=y(b.url,b.params);s.pendingRequests.push(b);C.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(u=X(b.cache)?b.cache:X(e.cache)?e.cache:E);if(u)if(q=u.get(r),
B(q)){if(q.then)return q.then(k,k),q;K(q)?m(q[1],q[0],fa(q[2])):m(q,200,{})}else u.put(r,C);z(q)&&a(b.method,r,c,f,g,b.timeout,b.withCredentials,b.responseType);return C}function y(a,b){if(!b)return a;var c=[];Pc(b,function(a,b){null===a||z(a)||(K(a)||(a=[a]),q(a,function(a){X(a)&&(a=qa(a));c.push(wa(b)+"="+wa(a))}))});return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")}var E=c("$http"),u=[];q(g,function(a){u.unshift(D(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=D(a)?p.get(a):p.invoke(a);u.splice(b,
0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});s.pendingRequests=[];(function(a){q(arguments,function(a){s[a]=function(b,c){return s(t(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){s[a]=function(b,c,d){return s(t(d||{},{method:a,url:b,data:c}))}})})("post","put");s.defaults=e;return s}]}function nd(b){return 8>=M&&"patch"===x(b)?new ActiveXObject("Microsoft.XMLHTTP"):new Z.XMLHttpRequest}function od(){this.$get=
["$browser","$window","$document",function(b,a,c){return pd(b,nd,b.defer,a.angular.callbacks,c[0])}]}function pd(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;M&&8>=M?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,m,k,l,n,p,s,C){function y(){u=f;
H&&H();v&&v.abort()}function E(a,d,e,g){r&&c.cancel(r);H=v=null;d=0===d?e?200:404:d;a(1223==d?204:d,e,g);b.$$completeOutstandingRequest(w)}var u;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==x(e)){var R="_"+(d.counter++).toString(36);d[R]=function(a){d[R].data=a};var H=g(m.replace("JSON_CALLBACK","angular.callbacks."+R),function(){d[R].data?E(l,200,d[R].data):E(l,u||-2);d[R]=Ca.noop})}else{var v=a(e);v.open(e,m,!0);q(n,function(a,b){B(a)&&v.setRequestHeader(b,a)});v.onreadystatechange=
function(){if(v&&4==v.readyState){var a=null,b=null;u!==f&&(a=v.getAllResponseHeaders(),b="response"in v?v.response:v.responseText);E(l,u||v.status,b,a)}};s&&(v.withCredentials=!0);C&&(v.responseType=C);v.send(k||null)}if(0<p)var r=c(y,p);else p&&p.then&&p.then(y)}}function qd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,k,l){for(var n,p,s=0,C=[],
y=g.length,E=!1,u=[];s<y;)-1!=(n=g.indexOf(b,s))&&-1!=(p=g.indexOf(a,n+f))?(s!=n&&C.push(g.substring(s,n)),C.push(s=c(E=g.substring(n+f,p))),s.exp=E,s=p+h,E=!0):(s!=y&&C.push(g.substring(s)),s=y);(y=C.length)||(C.push(""),y=1);if(l&&1<C.length)throw pc("noconcat",g);if(!k||E)return u.length=y,s=function(a){try{for(var b=0,c=y,f;b<c;b++)"function"==typeof(f=C[b])&&(f=f(a),f=l?e.getTrusted(l,f):e.valueOf(f),null===f||z(f)?f="":"string"!=typeof f&&(f=qa(f))),u[b]=f;return u.join("")}catch(h){a=pc("interr",
g,h.toString()),d(a)}},s.exp=g,s.parts=C,s}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function rd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,s=0,C=B(m)&&!m;h=B(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(s++);0<h&&s>=h&&(n.resolve(s),l(p.$$intervalId),delete e[p.$$intervalId]);C||b.$apply()},f);e[p.$$intervalId]=n;return p}
var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function sd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function qc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
tb(b[a]);return b.join("/")}function rc(b,a,c){b=ya(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=S(b.port)||td[b.protocol]||null}function sc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ya(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Xb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Wa(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Hb(b){return b.substr(0,Wa(b).lastIndexOf("/")+1)}function tc(b,a){this.$$html5=!0;a=a||"";var c=Hb(b);rc(b,this,b);this.$$parse=function(a){var e=oa(c,a);if(!D(e))throw Ib("ipthprfx",a,c);sc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Yb(this.$$search),b=this.$$hash?"#"+tb(this.$$hash):"";this.$$url=qc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;
if((e=oa(b,d))!==r)return d=e,(e=oa(a,e))!==r?c+(oa("/",e)||e):b+d;if((e=oa(c,d))!==r)return c+e;if(c==d+"/")return c}}function Jb(b,a){var c=Hb(b);rc(b,this,b);this.$$parse=function(d){var e=oa(b,d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!D(e))throw Ib("ihshprfx",d,a);sc(e,this,b);d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Yb(this.$$search),e=this.$$hash?
"#"+tb(this.$$hash):"";this.$$url=qc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Wa(b)==Wa(a))return a}}function uc(b,a){this.$$html5=!0;Jb.apply(this,arguments);var c=Hb(b);this.$$rewrite=function(d){var e;if(b==Wa(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c}}function jb(b){return function(){return this[b]}}function vc(b,a){return function(c){if(z(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ud(){var b=
"",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?tc:uc):(m=Wa(k),e=Jb);h=new e(m,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=
A(a.target);"a"!==x(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;var e=b.prop("href");X(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ya(e.animVal).href);var f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),c.$apply(),Z.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",
a,b).defaultPrevented?(h.$$parse(b),d.url(b)):f(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;l&&a==h.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),f(a))}));h.$$replace=!1;return l});return h}]}function vd(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&
-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function da(b,
a){if("constructor"===b)throw za("isecfld",a);return b}function Xa(b,a){if(b){if(b.constructor===b)throw za("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw za("isecwindow",a);if(b.children&&(b.nodeName||b.on&&b.find))throw za("isecdom",a);}return b}function kb(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=da(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(ra(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===r&&(b.$$v=
{}),b=b.$$v)}g=da(a.shift(),d);return b[g]=c}function wc(b,a,c,d,e,g,f){da(b,g);da(a,g);da(c,g);da(d,g);da(e,g);return f.unwrapPromises?function(f,m){var k=m&&m.hasOwnProperty(b)?m:f,l;if(null==k)return k;(k=k[b])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return r;(k=k[a])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return r;(k=k[c])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=
a})),k=k.$$v);if(!d)return k;if(null==k)return r;(k=k[d])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return r;(k=k[e])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return r;k=k[a];if(!c)return k;if(null==k)return r;k=k[c];if(!d)return k;if(null==k)return r;k=k[d];return e?null==k?r:k=k[e]:k}}function wd(b,
a){da(b,a);return function(a,d){return null==a?r:(d&&d.hasOwnProperty(b)?d:a)[b]}}function xd(b,a,c){da(b,c);da(a,c);return function(c,e){if(null==c)return r;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?r:c[a]}}function xc(b,a,c){if(Kb.hasOwnProperty(b))return Kb[b];var d=b.split("."),e=d.length,g;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)g=6>e?wc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=wc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=r,b=h;while(f<e);
return h};else{var f="var p;\n";q(d,function(b,d){da(b,c);f+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=$(f);g=a.unwrapPromises?function(a,b){return h(a,b,ra)}:h}else g=xd(d[0],d[1],c);else g=
wd(d[0],c);"hasOwnProperty"!==b&&(Kb[b]=g);return g}function yd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return B(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return B(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ra=function(b){a.logPromiseWarnings&&!yc.hasOwnProperty(b)&&(yc[b]=!0,e.warn("[$parse] Promise found in the expression `"+
b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Lb(a);e=(new Ya(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return w}}}]}function zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ad(function(a){b.$evalAsync(a)},a)}]}function Ad(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var h=
[],m,k;return k={resolve:function(a){if(h){var c=h;h=r;m=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],m.then(a[0],a[1],a[2])})}},reject:function(a){k.resolve(f(a))},notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,f){var k=e(),C=function(d){try{k.resolve((L(b)?b:c)(d))}catch(e){k.reject(e),a(e)}},y=function(b){try{k.resolve((L(g)?g:d)(b))}catch(c){k.reject(c),a(c)}},E=function(b){try{k.notify((L(f)?
f:c)(b))}catch(d){a(d)}};h?h.push([C,y,E]):m.then(C,y,E);return k.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,g){var f=null;try{f=(a||c)()}catch(h){return b(h,!1)}return f&&L(f.then)?f.then(function(){return b(e,g)},function(a){return b(a,!1)}):b(e,g)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&L(a.then)?a:{then:function(c){var d=
e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(c){return{then:function(g,f){var l=e();b(function(){try{l.resolve((L(f)?f:d)(c))}catch(b){l.reject(b),a(b)}});return l.promise}}};return{defer:e,reject:f,when:function(h,m,k,l){var n=e(),p,s=function(b){try{return(L(m)?m:c)(b)}catch(d){return a(d),f(d)}},C=function(b){try{return(L(k)?k:d)(b)}catch(c){return a(c),f(c)}},y=function(b){try{return(L(l)?l:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){p||(p=!0,n.resolve(g(a).then(s,
C,y)))},function(a){p||(p=!0,n.resolve(C(a)))},function(a){p||n.notify(y(a))})});return n.promise},all:function(a){var b=e(),c=0,d=K(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function Bd(){var b=10,a=F("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,
e,g,f){function h(){this.$id=Za();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=g(a);Pa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&
delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Za());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=
this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),g=this.$$watchers,f={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!L(b)){var h=k(b||w,"listener");f.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var m=f.fn;f.fn=function(a,b,c){m.call(this,a,b,c);Ma(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);return function(){Ma(g,f);c=null}},$watchCollection:function(a,b){var c=this,d,e,f=0,h=g(a),m=[],k={},l=0;return this.$watch(function(){e=h(c);var a,b;if(X(e))if(rb(e))for(d!==
m&&(d=m,l=d.length=0,f++),a=e.length,l!==a&&(f++,d.length=l=a),b=0;b<a;b++)d[b]!==e[b]&&(f++,d[b]=e[b]);else{d!==k&&(d=k={},l=0,f++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==e[b]&&(f++,d[b]=e[b]):(l++,d[b]=e[b],f++));if(l>a)for(b in f++,d)d.hasOwnProperty(b)&&!e.hasOwnProperty(b)&&(l--,delete d[b])}else d!==e&&(d=e,f++);return f},function(){b(e,d,c)})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,l=this.$$postDigestQueue,q,v,r=b,N,V=[],J,A,P;m("$digest");c=null;do{v=
!1;for(N=this;k.length;){try{P=k.shift(),P.scope.$eval(P.expression)}catch(B){p.$$phase=null,e(B)}c=null}a:do{if(h=N.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((f=d.get(N))!==(g=d.last)&&!(d.eq?ua(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))v=!0,c=d,d.last=d.eq?fa(f):f,d.fn(f,g===n?f:g,N),5>r&&(J=4-r,V[J]||(V[J]=[]),A=L(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,A+="; newVal: "+qa(f)+"; oldVal: "+qa(g),V[J].push(A));else if(d===c){v=!1;break a}}catch(t){p.$$phase=
null,e(t)}if(!(h=N.$$childHead||N!==this&&N.$$nextSibling))for(;N!==this&&!(h=N.$$nextSibling);)N=N.$parent}while(N=h);if(v&&!r--)throw p.$$phase=null,a("infdig",b,qa(V));}while(v||k.length);for(p.$$phase=null;l.length;)try{l.shift()()}catch(z){e(z)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,cb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=
this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||f.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},
$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[bb(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=
!0},defaultPrevented:!1},m=[h].concat(va.call(arguments,1)),k,l;do{d=f.$$listeners[a]||c;h.currentScope=f;k=0;for(l=d.length;k<l;k++)if(d[k])try{d[k].apply(null,m)}catch(p){e(p)}else d.splice(k,1),k--,l--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(va.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,
g)}catch(m){e(m)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var p=new h;return p}]}function Cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!M||8<=
M)if(g=ya(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function Dd(b){if("self"===b)return b;if(D(b)){if(-1<b.indexOf("***"))throw sa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(ab(b))return RegExp("^"+b.source+"$");throw sa("imatcher");}function zc(b){var a=[];B(b)&&q(b,function(b){a.push(Dd(b))});return a}function Ed(){this.SCE_CONTEXTS=ea;var b=["self"],a=[];this.resourceUrlWhitelist=
function(a){arguments.length&&(b=zc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=zc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw sa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));
var g=d(),f={};f[ea.HTML]=d(g);f[ea.CSS]=d(g);f[ea.URL]=d(g);f[ea.JS]=d(g);f[ea.RESOURCE_URL]=d(f[ea.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw sa("icontext",a,b);if(null===b||b===r||""===b)return b;if("string"!==typeof b)throw sa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===r||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===ea.RESOURCE_URL){var g=ya(d.toString()),l,n,p=
!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Gb(g):b[l].exec(g.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Gb(g):a[l].exec(g.href)){p=!1;break}if(p)return d;throw sa("insecurl",d.toString());}if(c===ea.HTML)return e(d);throw sa("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Fd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw sa("iequirks");
var e=fa(ea);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ba);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var g=e.parseAs,f=e.getTrusted,h=e.trustAs;q(ea,function(a,b){var c=x(b);e[Qa("parse_as_"+c)]=function(b){return g(a,b)};e[Qa("get_trusted_"+c)]=function(b){return f(a,b)};e[Qa("trust_as_"+c)]=function(b){return h(a,
b)}});return e}]}function Gd(){this.$get=["$window","$document",function(b,a){var c={},d=S((/android (\d+)/.exec(x((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,l=!1,n=!1;if(k){for(var p in k)if(l=m.exec(p)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in
k);!d||l&&n||(l=D(g.body.style.webkitTransition),n=D(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==M)return!1;if(z(c[a])){var b=g.createElement("div");c[a]="on"+a in b}return c[a]},csp:Ub(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:M,msieDocumentMode:f}}]}function Hd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,
m){var k=c.defer(),l=k.promise,n=B(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;g[h]=k;return l}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ya(b,a){var c=b;M&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,
""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function Gb(b){b=D(b)?ya(b):b;return b.protocol===Ac.protocol&&b.host===Ac.host}function Id(){this.$get=$(Z)}function Bc(b){function a(d,e){if(X(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
c)}}];a("currency",Cc);a("date",Dc);a("filter",Jd);a("json",Kd);a("limitTo",Ld);a("lowercase",Md);a("number",Ec);a("orderBy",Fc);a("uppercase",Nd)}function Jd(){return function(b,a,c){if(!K(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ca.equals(a,b)}:function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===
b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return g("$"==b?c:
vb(c,b),a[b])})})(f);break;case "function":e.push(a);break;default:return b}d=[];for(f=0;f<b.length;f++){var h=b[f];e.check(h)&&d.push(h)}return d}}function Cc(b){var a=b.NUMBER_FORMATS;return function(b,d){z(d)&&(d=a.CURRENCY_SYM);return Gc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Ec(b){var a=b.NUMBER_FORMATS;return function(b,d){return Gc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Gc(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=0>b;b=Math.abs(b);
var f=b+"",h="",m=[],k=!1;if(-1!==f.indexOf("e")){var l=f.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{f=(f.split(Hc)[1]||"").length;z(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Hc);f=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(l=f.length-n,k=0;k<l;k++)0===(l-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=l;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),
h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(g?a.negPre:a.posPre);m.push(h);m.push(g?a.negSuf:a.posSuf);return m.join("")}function Mb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function W(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Mb(e,a,d)}}function lb(b,a){return function(c,d){var e=c["get"+b](),g=Ia(a?"SHORT"+b:b);return d[g][e]}}function Dc(b){function a(a){var b;
if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=S(b[9]+b[10]),f=S(b[9]+b[11]));h.call(a,S(b[1]),S(b[2])-1,S(b[3]));g=S(b[4]||0)-g;f=S(b[5]||0)-f;h=S(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,g,f,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;D(c)&&
(c=Od.test(c)?S(c):a(c));sb(c)&&(c=new Date(c));if(!La(c))return c;for(;e;)(m=Pd.exec(e))?(f=f.concat(va.call(m,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=Qd[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Kd(){return function(b){return qa(b,!0)}}function Ld(){return function(b,a){if(!K(b)&&!D(b))return b;a=S(a);if(D(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,
e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Fc(b){return function(a,c,d){function e(a,b){return Oa(b)?function(b,c){return a(c,b)}:a}if(!K(a)||!c)return a;c=K(c)?c:[c];c=Rc(c,function(a){var c=!1,d=a||Ba;if(D(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),g=typeof c,f=typeof e;g==f?("string"==g&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=g<f?-1:1;return c},c)});for(var g=
[],f=0;f<a.length;f++)g.push(a[f]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function ta(b){L(b)&&(b={link:b});b.restrict=b.restrict||"AC";return $(b)}function Ic(b,a){function c(a,c){c=c?"-"+db(c,"-"):"";b.removeClass((a?mb:nb)+c).addClass((a?nb:mb)+c)}var d=this,e=b.parent().controller("form")||ob,g=0,f=d.$error={},h=[];d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ja);c(!0);
d.$addControl=function(a){xa(a.$name,"input");h.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];q(f,function(b,c){d.$setValidity(c,!0,a)});Ma(h,a)};d.$setValidity=function(a,b,h){var n=f[a];if(b)n&&(Ma(n,h),n.length||(g--,g||(c(b),d.$valid=!0,d.$invalid=!1),f[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{g||c(b);if(n){if(-1!=bb(n,h))return}else f[a]=n=[],g++,c(!1,a),e.$setValidity(a,!1,d);n.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ja).addClass(pb);
d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(pb).addClass(Ja);d.$dirty=!1;d.$pristine=!0;q(h,function(a){a.$setPristine()})}}function pa(b,a,c,d){b.$setValidity(a,c);return c?d:r}function qb(b,a,c,d,e,g){if(!e.android){var f=!1;a.on("compositionstart",function(a){f=!0});a.on("compositionend",function(){f=!1})}var h=function(){if(!f){var e=a.val();Oa(c.ngTrim||"T")&&(e=aa(e));d.$viewValue!==e&&(b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)}))}};
if(e.hasEvent("input"))a.on("input",h);else{var m,k=function(){m||(m=g.defer(function(){h();m=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||k()});if(e.hasEvent("paste"))a.on("paste cut",k)}a.on("change",h);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var l=c.ngPattern;l&&((e=l.match(/^\/(.*)\/([gim]*)$/))?(l=RegExp(e[1],e[2]),e=function(a){return pa(d,"pattern",d.$isEmpty(a)||l.test(a),a)}):e=function(c){var e=b.$eval(l);if(!e||!e.test)throw F("ngPattern")("noregexp",
l,e,ga(a));return pa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var n=S(c.ngMinlength);e=function(a){return pa(d,"minlength",d.$isEmpty(a)||a.length>=n,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var p=S(c.ngMaxlength);e=function(a){return pa(d,"maxlength",d.$isEmpty(a)||a.length<=p,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Nb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function g(b){if(!0===
a||c.$index%2===a){var d=f(b||"");h?ua(b,h)||e.$updateClass(d,f(h)):e.$addClass(d)}h=fa(b)}function f(a){if(K(a))return a.join(" ");if(X(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var h;c.$watch(e[b],g,!0);e.$observe("class",function(a){g(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,g){var h=d&1;if(h!==g&1){var n=f(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}var x=function(b){return D(b)?b.toLowerCase():b},Ia=function(b){return D(b)?b.toUpperCase():
b},M,A,Da,va=[].slice,Rd=[].push,$a=Object.prototype.toString,Na=F("ng"),Ca=Z.angular||(Z.angular={}),Ua,Ha,ka=["0","0","0"];M=S((/msie (\d+)/.exec(x(navigator.userAgent))||[])[1]);isNaN(M)&&(M=S((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent))||[])[1]));w.$inject=[];Ba.$inject=[];var aa=function(){return String.prototype.trim?function(b){return D(b)?b.trim():b}:function(b){return D(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ha=9>M?function(b){b=b.nodeName?b:b[0];return b.scopeName&&
"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Uc=/[A-Z]/g,Sd={full:"1.2.8",major:1,minor:2,dot:8,codeName:"interdimensional-cartography"},Ra=O.cache={},eb=O.expando="ng-"+(new Date).getTime(),Yc=1,Jc=Z.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Bb=Z.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+
a,c)},Wc=/([\:\-\_]+(.))/g,Xc=/^moz([A-Z])/,yb=F("jqLite"),Ga=O.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Q.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),O(Z).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?A(this[b]):A(this[this.length+b])},length:0,push:Rd,sort:[].sort,splice:[].splice},gb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){gb[x(b)]=
b});var gc={};q("input select option textarea button form details".split(" "),function(b){gc[Ia(b)]=!0});q({data:cc,inheritedData:fb,scope:function(b){return A(b).data("$scope")||fb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A(b).data("$isolateScope")||A(b).data("$isolateScopeNoTemplate")},controller:dc,injector:function(b){return fb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Cb,css:function(b,a,c){a=Qa(a);if(B(c))b.style[a]=c;else{var d;
8>=M&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=M&&(d=""===d?r:d);return d}},attr:function(b,a,c){var d=x(a);if(gb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||w).specified?d:r;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?r:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(z(d))return e?
b[e]:"";b[e]=d}var a=[];9>M?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(z(a)){if("SELECT"===Ha(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(z(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ea(d[c]);b.innerHTML=a},empty:ec},function(b,a){O.prototype[a]=function(a,d){var e,g;if(b!==ec&&(2==b.length&&b!==Cb&&b!==
dc?a:d)===r){if(X(a)){for(e=0;e<this.length;e++)if(b===cc)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===r?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:ac,dealoc:Ea,on:function a(c,d,e,g){if(B(g))throw yb("onargs");var f=la(c,"events"),h=la(c,"handle");f||la(c,"events",f={});h||la(c,"handle",h=Zc(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==
d||"mouseleave"==d){var l=Q.body.contains||Q.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else Jc(c,d,h),f[d]=[];g=f[d]}g.push(e)})},
off:bc,one:function(a,c,d){a=A(a);a.on(c,function g(){a.off(c,d);a.off(c,g)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ea(a);q(new O(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){q(new O(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=
a.firstChild;q(new O(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ea(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new O(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Eb,removeClass:Db,toggleClass:function(a,c,d){z(d)&&(d=!Cb(a,c));(d?Eb:Db)(a,c)},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;
for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ab,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:w,stopPropagation:w}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){O.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)z(f)?(f=a(this[h],c,e,g),B(f)&&(f=A(f))):zb(f,a(this[h],c,e,g));return B(f)?f:this};O.prototype.bind=O.prototype.on;
O.prototype.unbind=O.prototype.off});Sa.prototype={put:function(a,c){this[Fa(a)]=c},get:function(a){return this[Fa(a)]},remove:function(a){var c=this[a=Fa(a)];delete this[a];return c}};var ad=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,bd=/,/,cd=/^\s*(_?)(\S+?)\1\s*$/,$c=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ta=F("$injector"),Td=F("$animate"),Ud=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Td("notcsel",c);this.$$selectors[c.substr(1)]=
e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout",function(a){return{enter:function(d,e,g,f){g?g.after(d):(e&&e[0]||(e=g.parent()),e.append(d));f&&a(f,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,g,f){this.enter(a,c,g,f)},addClass:function(d,e,g){e=D(e)?e:K(e)?e.join(" "):"";q(d,function(a){Eb(a,e)});g&&a(g,0,!1)},removeClass:function(d,e,g){e=D(e)?
e:K(e)?e.join(" "):"";q(d,function(a){Db(a,e)});g&&a(g,0,!1)},enabled:w}}]}],ja=F("$compile");jc.$inject=["$provide","$$sanitizeUriProvider"];var id=/^(x[\:\-_]|data[\:\-_])/i,pc=F("$interpolate"),Vd=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,td={http:80,https:443,ftp:21},Ib=F("$location");uc.prototype=Jb.prototype=tc.prototype={$$html5:!1,$$replace:!1,absUrl:jb("$$absUrl"),url:function(a,c){if(z(a))return this.$$url;var d=Vd.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||
"");this.hash(d[5]||"",c);return this},protocol:jb("$$protocol"),host:jb("$$host"),port:jb("$$port"),path:vc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a))this.$$search=Xb(a);else if(X(a))this.$$search=a;else throw Ib("isrcharg");break;default:z(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:vc("$$hash",Ba),replace:function(){this.$$replace=!0;return this}};
var za=F("$parse"),yc={},ra,Ka={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:w,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:r},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":w,"===":function(a,c,d,e){return d(a,c)===e(a,c)},
"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},
"!":function(a,c,d){return!d(a,c)}},Wd={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Lb=function(a){this.options=a};Lb.prototype={constructor:Lb,lex:function(a){this.text=a;this.index=0;this.ch=r;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&
("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ka[this.ch],f=Ka[d],h=Ka[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,
text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===
a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw za("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=x(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=
this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===
h&&(e=this.index),c+=h;else break;this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ka.hasOwnProperty(c))d.fn=Ka[c],d.json=Ka[c];else{var m=xc(c,this.options,this.text);d.fn=t(function(a,c){return m(a,c)},{assign:function(d,e){return kb(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+
1,text:f,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Wd[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});
return}d+=f}this.index++}this.throwError("Unterminated quote",c)}};var Ya=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Ya.ZERO=function(){return 0};Ya.prototype={constructor:Ya,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?
(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw za("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw za("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,
e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return t(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return t(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return t(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},
statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=
function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Ya.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=xc(d,this.options,this.text);return t(function(c,d,h){return e(h||a(c,d),d)},{assign:function(e,f,h){return kb(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return t(function(e,g){var f=a(e,g),h=d(e,g),m;if(!f)return r;(f=Xa(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(m=f,"$$v"in f||(m.$$v=r,
m.then(function(a){m.$$v=a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Xa(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],m=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,f));k=a(g,f,m)||w;Xa(m,e.text);Xa(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return Xa(h,e.text)}},arrayDeclaration:function(){var a=
[],c=!0;if("]"!==this.peekToken().text){do{var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return t(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return t(function(c,d){for(var e=
{},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Kb={},sa=F("$sce"),ea={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=Q.createElement("a"),Ac=ya(Z.location.href,!0);Bc.$inject=["$provide"];Cc.$inject=["$locale"];Ec.$inject=["$locale"];var Hc=".",Qd={yyyy:W("FullYear",4),yy:W("FullYear",2,0,!0),y:W("FullYear",1),MMMM:lb("Month"),MMM:lb("Month",!0),MM:W("Month",2,1),M:W("Month",1,1),dd:W("Date",2),d:W("Date",1),HH:W("Hours",2),
H:W("Hours",1),hh:W("Hours",2,-12),h:W("Hours",1,-12),mm:W("Minutes",2),m:W("Minutes",1),ss:W("Seconds",2),s:W("Seconds",1),sss:W("Milliseconds",3),EEEE:lb("Day"),EEE:lb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Mb(Math[0<a?"floor":"ceil"](a/60),2)+Mb(Math.abs(a%60),2))}},Pd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Od=/^\-?\d+$/;Dc.$inject=["$locale"];var Md=$(x),Nd=
$(Ia);Fc.$inject=["$parse"];var Xd=$({restrict:"E",compile:function(a,c){8>=M&&(c.href||c.name||c.$set("href",""),a.append(Q.createComment("IE fix")));if(!c.href&&!c.name)return function(a,c){c.on("click",function(a){c.attr("href")||a.preventDefault()})}}}),Ob={};q(gb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);Ob[d]=function(){return{priority:100,link:function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}});q(["src","srcset","href"],function(a){var c=ma("ng-"+a);Ob[c]=function(){return{priority:99,
link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),M&&e.prop(a,g[a]))})}}}});var ob={$addControl:w,$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w};Ic.$inject=["$element","$attrs","$scope"];var Kc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Ic,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Jc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Bb(e[0],
"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=g.name||g.ngForm;k&&kb(a,k,f,k);if(m)e.on("$destroy",function(){m.$removeControl(f);k&&kb(a,k,r,k);t(f,ob)})}}}}}]},Yd=Kc(),Zd=Kc(!0),$d=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ae=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,be=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Lc={text:qb,number:function(a,c,d,e,g,f){qb(a,c,d,e,g,f);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||be.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return r});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return pa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return pa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return pa(e,"number",e.$isEmpty(a)||sb(a),a)})},url:function(a,c,d,e,g,f){qb(a,
c,d,e,g,f);a=function(a){return pa(e,"url",e.$isEmpty(a)||$d.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){qb(a,c,d,e,g,f);a=function(a){return pa(e,"email",e.$isEmpty(a)||ae.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){z(d.name)&&c.attr("name",Za());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,
c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;D(g)||(g=!0);D(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:w,button:w,submit:w,reset:w},Mc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,f){f&&(Lc[x(g.type)]||Lc.text)(d,e,g,f,c,a)}}}],
nb="ng-valid",mb="ng-invalid",Ja="ng-pristine",pb="ng-dirty",ce=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function f(a,c){c=c?"-"+db(c,"-"):"";e.removeClass((a?mb:nb)+c).addClass((a?nb:mb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=g(d.ngModel),m=h.assign;if(!m)throw F("ngModel")("nonassign",d.ngModel,ga(e));
this.$render=w;this.$isEmpty=function(a){return z(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||ob,l=0,n=this.$error={};e.addClass(Ja);f(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&l--,l||(f(!0),this.$valid=!0,this.$invalid=!1)):(f(!1),this.$invalid=!0,this.$valid=!1,l++),n[a]=!c,f(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(pb).addClass(Ja)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&
(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ja).addClass(pb),k.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=h(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],de=function(){return{require:["ngModel","^?form"],controller:ce,link:function(a,
c,d,e){var g=e[0],f=e[1]||ob;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},ee=$({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Nc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},
fe=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!z(a)){var c=[];a&&q(a.split(g),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return K(a)?a.join(", "):r});e.$isEmpty=function(a){return!a||!a.length}}}},ge=/^(true|false|\d+)$/,he=function(){return{priority:100,compile:function(a,c){return ge.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,
c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},ie=ta(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==r?"":a)})}),je=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],ke=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);
d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],le=Nb("",!0),me=Nb("Odd",0),ne=Nb("Even",1),oe=ta({compile:function(a,c){c.$set("ngCloak",r);a.removeClass("ng-cloak")}}),pe=[function(){return{scope:!0,controller:"@",priority:500}}],Oc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ma("ng-"+a);Oc[c]=["$parse",function(d){return{compile:function(e,
g){var f=d(g[c]);return function(c,d,e){d.on(x(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var qe=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,g,f){var h,m;c.$watch(e.ngIf,function(g){Oa(g)?m||(m=c.$new(),f(m,function(c){c[c.length++]=Q.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(m&&(m.$destroy(),m=null),h&&(a.leave(wb(h.clone)),h=null))})}}}],re=["$http","$templateCache",
"$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ca.noop,compile:function(f,h){var m=h.ngInclude||h.src,k=h.onload||"",l=h.autoscroll;return function(f,h,q,r,y){var A=0,u,t,H=function(){u&&(u.$destroy(),u=null);t&&(e.leave(t),t=null)};f.$watch(g.parseAsResourceUrl(m),function(g){var m=function(){!B(l)||l&&!f.$eval(l)||d()},q=++A;g?(a.get(g,{cache:c}).success(function(a){if(q===A){var c=f.$new();r.template=a;a=y(c,
function(a){H();e.enter(a,null,h,m)});u=c;t=a;u.$emit("$includeContentLoaded");f.$eval(k)}}).error(function(){q===A&&H()}),f.$emit("$includeContentRequested")):(H(),r.template=null)})}}}}],se=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],te=ta({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),ue=ta({terminal:!0,priority:1E3}),ve=["$locale","$interpolate",function(a,c){var d=
/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,m=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),s=c.endSymbol(),r=/^when(Minus)?(.+)$/;q(f,function(a,c){r.test(c)&&(l[x(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(l,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+s))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],we=["$parse",
"$animate",function(a,c){var d=F("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,g,f,h,m){var k=f.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,s,r,y,t,u={$id:Fa};if(!l)throw d("iexp",k);f=l[1];h=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){t&&(u[t]=a);u[y]=c;u.$index=d;return n(e,u)}):(s=function(a,c){return Fa(c)},r=function(a){return a});l=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",
f);y=l[3]||l[1];t=l[2];var B={};e.$watchCollection(h,function(a){var f,h,l=g[0],n,u={},z,P,D,x,T,w,F=[];if(rb(a))T=a,n=p||s;else{n=p||r;T=[];for(D in a)a.hasOwnProperty(D)&&"$"!=D.charAt(0)&&T.push(D);T.sort()}z=T.length;h=F.length=T.length;for(f=0;f<h;f++)if(D=a===T?f:T[f],x=a[D],x=n(D,x,f),xa(x,"`track by` id"),B.hasOwnProperty(x))w=B[x],delete B[x],u[x]=w,F[f]=w;else{if(u.hasOwnProperty(x))throw q(F,function(a){a&&a.scope&&(B[a.id]=a)}),d("dupes",k,x);F[f]={id:x};u[x]=!1}for(D in B)B.hasOwnProperty(D)&&
(w=B[D],f=wb(w.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),w.scope.$destroy());f=0;for(h=T.length;f<h;f++){D=a===T?f:T[f];x=a[D];w=F[f];F[f-1]&&(l=F[f-1].clone[F[f-1].clone.length-1]);if(w.scope){P=w.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);w.clone[0]!=n&&c.move(wb(w.clone),null,A(l));l=w.clone[w.clone.length-1]}else P=e.$new();P[y]=x;t&&(P[t]=D);P.$index=f;P.$first=0===f;P.$last=f===z-1;P.$middle=!(P.$first||P.$last);P.$odd=!(P.$even=0===(f&1));w.scope||m(P,function(a){a[a.length++]=
Q.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,A(l));l=a;w.scope=P;w.clone=a;u[w.id]=w})}B=u})}}}],xe=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Oa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],ye=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Oa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],ze=ta(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ae=["$animate",
function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var f,h,m=[];c.$watch(e.ngSwitch||e.on,function(d){for(var l=0,n=m.length;l<n;l++)m[l].$destroy(),a.leave(h[l]);h=[];m=[];if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Be=ta({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,
c,d,e,g){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:g,element:c})}}),Ce=ta({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,element:c})}}),De=ta({controller:["$element","$transclude",function(a,c){if(!c)throw F("ngTransclude")("orphan",ga(a));this.$transclude=c}],link:function(a,c,d,e){e.$transclude(function(a){c.empty();c.append(a)})}}),Ee=["$templateCache",
function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Fe=F("ngOptions"),Ge=$({terminal:!0}),He=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:w};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope",
"$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){xa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Fa(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=
w})}],link:function(e,f,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(x.parent()&&x.remove(),c.val(a),""===a&&w.prop("selected",!0)):z(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){x.parent()&&x.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Sa(d.$viewValue);q(c.find("option"),function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){ua(e,d.$viewValue)||(e=fa(d.$viewValue),
d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,r,t,v;t=g.$modelValue;v=A(e)||[];var C=n?Pb(v):v,F,I,z;I={};r=!1;var E,H;if(s)if(w&&K(t))for(r=new Sa([]),z=0;z<t.length;z++)I[m]=t[z],r.put(w(e,I),t[z]);else r=new Sa(t);for(z=0;F=C.length,z<F;z++){k=z;if(n){k=C[z];if("$"===k.charAt(0))continue;I[n]=k}I[m]=v[k];d=p(e,I)||"";(k=a[d])||(k=a[d]=
[],c.push(d));s?d=B(r.remove(w?w(e,I):q(e,I))):(w?(d={},d[m]=t,d=w(e,d)===w(e,I)):d=t===q(e,I),r=r||d);E=l(e,I);E=B(E)?E:"";k.push({id:w?w(e,I):n?C[z]:z,label:E,selected:d})}s||(y||null===t?a[""].unshift({id:"",label:"",selected:!r}):r||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(C=c.length;I<C;I++){d=c[I];k=a[d];x.length<=I?(t={element:D.clone().attr("label",d),label:k.label},v=[t],x.push(v),f.append(t.element)):(v=x[I],t=v[0],t.label!=d&&t.element.attr("label",t.label=d));E=null;z=0;for(F=
k.length;z<F;z++)r=k[z],(d=v[z+1])?(E=d.element,d.label!==r.label&&E.text(d.label=r.label),d.id!==r.id&&E.val(d.id=r.id),E[0].selected!==r.selected&&E.prop("selected",d.selected=r.selected)):(""===r.id&&y?H=y:(H=u.clone()).val(r.id).attr("selected",r.selected).text(r.label),v.push({element:H,label:r.label,id:r.id,selected:r.selected}),E?E.after(H):t.element.append(H),E=H);for(z++;v.length>z;)v.pop().element.remove()}for(;x.length>I;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Fe("iexp",
t,ga(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),A=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];y&&(a(y)(e),y.removeClass("ng-scope"),y.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=A(e)||[],d={},h,k,l,p,t,u,v;if(s)for(k=[],p=0,u=x.length;p<u;p++)for(a=x[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(v=0;v<c.length&&(d[m]=c[v],w(e,d)!=h);v++);else d[m]=c[h];k.push(q(e,d))}}else if(h=f.val(),
"?"==h)k=r;else if(""===h)k=null;else if(w)for(v=0;v<c.length;v++){if(d[m]=c[v],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var p=m[0];m=m[1];var s=h.multiple,t=h.ngOptions,y=!1,w,u=A(Q.createElement("option")),D=A(Q.createElement("optgroup")),x=u.clone();h=0;for(var v=f.children(),F=v.length;h<F;h++)if(""===v[h].value){w=y=v.eq(h);break}p.init(m,y,x);s&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,f,m):s?l(e,f,m):
k(e,f,m,p)}}}}],Ie=["$interpolate",function(a){var c={addOption:w,removeOption:w};return{restrict:"E",priority:100,compile:function(d,e){if(z(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],
Je=$({restrict:"E",terminal:!0});(Da=Z.jQuery)?(A=Da,t(Da.fn,{scope:Ga.scope,isolateScope:Ga.isolateScope,controller:Ga.controller,injector:Ga.injector,inheritedData:Ga.inheritedData}),xb("remove",!0,!0,!1),xb("empty",!1,!1,!1),xb("html",!1,!1,!0)):A=O;Ca.element=A;(function(a){t(a,{bootstrap:Zb,copy:fa,extend:t,equals:ua,element:A,forEach:q,injector:$b,noop:w,bind:cb,toJson:qa,fromJson:Vb,identity:Ba,isUndefined:z,isDefined:B,isString:D,isFunction:L,isObject:X,isNumber:sb,isElement:Qc,isArray:K,
version:Sd,isDate:La,lowercase:x,uppercase:Ia,callbacks:{counter:0},$$minErr:F,$$csp:Ub});Ua=Vc(Z);try{Ua("ngLocale")}catch(c){Ua("ngLocale",[]).provider("$locale",sd)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Cd});a.provider("$compile",jc).directive({a:Xd,input:Mc,textarea:Mc,form:Yd,script:Ee,select:He,style:Je,option:Ie,ngBind:ie,ngBindHtml:ke,ngBindTemplate:je,ngClass:le,ngClassEven:ne,ngClassOdd:me,ngCloak:oe,ngController:pe,ngForm:Zd,ngHide:ye,ngIf:qe,ngInclude:re,
ngInit:te,ngNonBindable:ue,ngPluralize:ve,ngRepeat:we,ngShow:xe,ngStyle:ze,ngSwitch:Ae,ngSwitchWhen:Be,ngSwitchDefault:Ce,ngOptions:Ge,ngTransclude:De,ngModel:de,ngList:fe,ngChange:ee,required:Nc,ngRequired:Nc,ngValue:he}).directive({ngInclude:se}).directive(Ob).directive(Oc);a.provider({$anchorScroll:dd,$animate:Ud,$browser:fd,$cacheFactory:gd,$controller:jd,$document:kd,$exceptionHandler:ld,$filter:Bc,$interpolate:qd,$interval:rd,$http:md,$httpBackend:od,$location:ud,$log:vd,$parse:yd,$rootScope:Bd,
$q:zd,$sce:Fd,$sceDelegate:Ed,$sniffer:Gd,$templateCache:hd,$timeout:Hd,$window:Id})}])})(Ca);A(Q).ready(function(){Tc(Q,Zb)})})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

(function($,window){
    "use strict";
    var nundefined, document = window.document,classCache = {},isWin8=(typeof(MSApp)==="object"),jsonPHandlers = [],_jsonPID = 1;

     function classRE(name) {
            return name in classCache ? classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'));
    }
    $.extend($.fn,{
            /* @param {String} attribute to get
            * @param {String} value to set as
            * @return {Object} an appframework object
            * @title $().css(attribute,[value])
            */
            vendorCss: function (attribute, value, obj) {
                return this.css($.feat.cssPrefix + attribute, value, obj);
            },
            /**
             * Performs a css vendor specific transform:translate operation on the collection.
             *
             ```
                $("#main").cssTranslate('200px,0,0');
             ```
             * @param {String} Transform values
             * @return {Object} an appframework object
             * @title $().vendorCss(value)
             */
            cssTranslate: function (val) {
                return this.vendorCss("Transform", "translate" + $.feat.cssTransformStart + val + $.feat.cssTransformEnd);
            },
            /**
             * Gets the computed style of CSS values
             *
            ```
               $("#main").computedStyle('display');
            ```
             * @param {String} css property
             * @return {Int|String|Float|} css vlaue
             * @title $().computedStyle()
             */
            computedStyle:function(val){
                if(this.length===0||val==nundefined) return;
                return window.getComputedStyle(this[0],'')[val];
            },
            replaceClass: function (name, newName) {
                if(name==nundefined||newName==nundefined) return this;
                for (var i = 0; i < this.length; i++) {
                    if (name ==nundefined) {
                        this[i].className = newName;
                        continue;
                    }
                    var classList = this[i].className;
                    name.split(/\s+/g).concat(newName.split(/\s+/g)).forEach(function (cname) {
                        classList = classList.replace(classRE(cname), " ");
                    });
                    classList = classList.trim();
                    if (classList.length > 0) {
                        this[i].className = (classList + " " + newName).trim();
                    } else
                        this[i].className = newName;
                }
                return this;
            }
    });
    function detectUA($, userAgent) {
            $.os = {};
            $.os.webkit = userAgent.match(/WebKit\/([\d.]+)/) ? true : false;
            $.os.android = userAgent.match(/(Android)\s+([\d.]+)/) || userAgent.match(/Silk-Accelerated/) ? true : false;
            $.os.androidICS = $.os.android && userAgent.match(/(Android)\s4/) ? true : false;
            $.os.ipad = userAgent.match(/(iPad).*OS\s([\d_]+)/) ? true : false;
            $.os.iphone = !$.os.ipad && userAgent.match(/(iPhone\sOS)\s([\d_]+)/) ? true : false;
            $.os.webos = userAgent.match(/(webOS|hpwOS)[\s\/]([\d.]+)/) ? true : false;
            $.os.touchpad = $.os.webos && userAgent.match(/TouchPad/) ? true : false;
            $.os.ios = $.os.ipad || $.os.iphone;
            $.os.playbook = userAgent.match(/PlayBook/) ? true : false;
            $.os.blackberry = $.os.playbook || userAgent.match(/BlackBerry/) ? true : false;
            $.os.blackberry10 = $.os.blackberry && userAgent.match(/Safari\/536/) ? true : false;
            $.os.chrome = userAgent.match(/Chrome/) ? true : false;
            $.os.opera = userAgent.match(/Opera/) ? true : false;
            $.os.fennec = userAgent.match(/fennec/i) ? true : userAgent.match(/Firefox/) ? true : false;
            $.os.ie = userAgent.match(/MSIE 10.0/i) ? true : false;
            $.os.ieTouch = $.os.ie && userAgent.toLowerCase().match(/touch/i) ? true : false;
            $.os.supportsTouch = ((window.DocumentTouch && document instanceof window.DocumentTouch) || 'ontouchstart' in window);
            //features
            $.feat = {};
            var head = document.documentElement.getElementsByTagName("head")[0];
            $.feat.nativeTouchScroll = typeof (head.style["-webkit-overflow-scrolling"]) !== "undefined" && $.os.ios;
            $.feat.cssPrefix = $.os.webkit ? "Webkit" : $.os.fennec ? "Moz" : $.os.ie ? "ms" : $.os.opera ? "O" : "";
            $.feat.cssTransformStart = !$.os.opera ? "3d(" : "(";
            $.feat.cssTransformEnd = !$.os.opera ? ",0)" : ")";
            if ($.os.android && !$.os.webkit)
                $.os.android = false;
        }

        detectUA($, navigator.userAgent);
        $.__detectUA = detectUA; //needed for unit tests

        /**
         * Utility function to create a psuedo GUID
           ```
           var id= $.uuid();
           ```
         * @title $.uuid
         */
        $.uuid = function () {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        };

        /**
         * Gets the css matrix, or creates a fake one
           ```
           $.getCssMatrix(domElement)
           ```
           @returns matrix with postion
           */
        $.getCssMatrix = function (ele) {
            if(typeof(ele)===$afm) ele=ele.get(0);
            if (ele ==nundefined) return window.WebKitCSSMatrix || window.MSCSSMatrix || {
                    a: 0,
                    b: 0,
                    c: 0,
                    d: 0,
                    e: 0,
                    f: 0
            };
            try {
                if (window.WebKitCSSMatrix)
                    return new WebKitCSSMatrix(window.getComputedStyle(ele).webkitTransform);
                else if (window.MSCSSMatrix)
                    return new MSCSSMatrix(window.getComputedStyle(ele).transform);
                else {
                    //fake css matrix
                    var mat = window.getComputedStyle(ele)[$.feat.cssPrefix + 'Transform'].replace(/[^0-9\-.,]/g, '').split(',');
                    return {
                        a: +mat[0],
                        b: +mat[1],
                        c: +mat[2],
                        d: +mat[3],
                        e: +mat[4],
                        f: +mat[5]
                    };
                }
            } catch (e) {
                return {
                    a: 0,
                    b: 0,
                    c: 0,
                    d: 0,
                    e: 0,
                    f: 0
                };
            }
        };

        /**
         * $.create - a faster alertnative to $("<div id='main'>this is some text</div>");
          ```
          $.create("div",{id:'main',innerHTML:'this is some text'});
          $.create("<div id='main'>this is some text</div>");
          ```
          * @param {String} DOM Element type or html
          * @param [{Object}] properties to apply to the element
          * @return {Object} Returns an appframework object
          * @title $.create(type,[params])
          */
        $.create = function (type, props) {
            var elem;
            var f = new $();
            if (props || type[0] !== "<") {
                if (props.html)
                    props.innerHTML = props.html, delete props.html;

                elem = document.createElement(type);
                for (var j in props) {
                    elem[j] = props[j];
                }
                f[f.length++] = elem;
            } else {
                elem = document.createElement("div");
                if(isWin8)
                {
                    MSApp.execUnsafeLocalFunction(function(){
                        elem.innerHTML=selector.trim();
                    });
                }
                else
                    elem.innerHTML = type;
                _shimNodes(elem.childNodes, f);
            }
            return f;
        };
        /**
         * $.query  - a faster alertnative to $("div");
          ```
          $.query(".panel");
          ```
          * @param {String} selector
          * @param {Object} [context]
          * @return {Object} Returns an appframework object
          * @title $.query(selector,[context])
          */
        $.query = function (sel, what) {
            return $(sel,what);
        };

        /* The following are for events on objects */
        /**
         * Bind an event to an object instead of a DOM Node
           ```
           $.bind(this,'event',function(){});
           ```
         * @param {Object} object
         * @param {String} event name
         * @param {Function} function to execute
         * @title $.bind(object,event,function);
         */
        $.bind = function (obj, ev, f) {
            if (!obj.__events) obj.__events = {};
            if (!$.isArray(ev)) ev = [ev];
            for (var i = 0; i < ev.length; i++) {
                if (!obj.__events[ev[i]]) obj.__events[ev[i]] = [];
                obj.__events[ev[i]].push(f);
            }
        };

        /**
         * Trigger an event to an object instead of a DOM Node
           ```
           $.trigger(this,'event',arguments);
           ```
         * @param {Object} object
         * @param {String} event name
         * @param {Array} arguments
         * @title $.trigger(object,event,argments);
         */
        $.trigger = function (obj, ev, args) {
            var ret = true;
            if (!obj.__events) return ret;
            if (!$.isArray(ev)) ev = [ev];
            if (!$.isArray(args)) args = [];
            for (var i = 0; i < ev.length; i++) {
                if (obj.__events[ev[i]]) {
                    var evts = obj.__events[ev[i]];
                    for (var j = 0; j < evts.length; j++)
                        if ($.isFunction(evts[j]) && evts[j].apply(obj, args) === false)
                            ret = false;
                }
            }
            return ret;
        };
        /**
         * Unbind an event to an object instead of a DOM Node
           ```
           $.unbind(this,'event',function(){});
           ```
         * @param {Object} object
         * @param {String} event name
         * @param {Function} function to execute
         * @title $.unbind(object,event,function);
         */
        $.unbind = function (obj, ev, f) {
            if (!obj.__events) return;
            if (!$.isArray(ev)) ev = [ev];
            for (var i = 0; i < ev.length; i++) {
                if (obj.__events[ev[i]]) {
                    var evts = obj.__events[ev[i]];
                    for (var j = 0; j < evts.length; j++) {
                        if (f ==nundefined)
                            delete evts[j];
                        if (evts[j] == f) {
                            evts.splice(j, 1);
                            break;
                        }
                    }
                }
            }
        };
        $.cleanUpContent = function(){}

        $.isObject = function (obj) {
            return typeof obj === "object";
        };

        $.asap = function (fn, context, args) {
            if (!$.isFunction(fn)) throw "$.asap - argument is not a valid function";
            setTimeout(function(){
                fn.apply(context,args);
            });
        };

        /**
         * this function executes javascript in HTML.
           ```
           $.parseJS(content)
           ```
        * @param {String|DOM} content
        * @title $.parseJS(content);
        */
        var remoteJSPages = {};
        $.parseJS = function (div) {
            if (!div)
                return;
            if (typeof (div) == "string") {
                var elem = document.createElement("div");
                if(isWin8){
                    MSApp.execUnsafeLocalFunction(function(){
                        elem.innerHTML = div;
                    });
                }
                else
                    elem.innerHTML = div;

                div = elem;
            }
            var scripts = div.getElementsByTagName("script");
            div = null;
            for (var i = 0; i < scripts.length; i++) {
                if (scripts[i].src.length > 0 && !remoteJSPages[scripts[i].src]&&!isWin8) {
                    var doc = document.createElement("script");
                    doc.type = scripts[i].type;
                    doc.src = scripts[i].src;
                    document.getElementsByTagName('head')[0].appendChild(doc);
                    remoteJSPages[scripts[i].src] = 1;
                    doc = null;
                } else {
                    window['eval'](scripts[i].innerHTML);
                }
            }
        };

        $.is$ = function (obj) {
            return obj instanceof $;
        };
         $.jsonP = function (options) {
            if(isWin8){
                options.type="get";
                options.dataType=null;
                return $.get(options);
            }
            var callbackName = 'jsonp_callback' + (++_jsonPID);
            var abortTimeout = "",
                context;
            var script = document.createElement("script");
            var abort = function () {
                $(script).remove();
                if (window[callbackName])
                    window[callbackName] = empty;
            };
            window[callbackName] = function (data) {
                clearTimeout(abortTimeout);
                $(script).remove();
                delete window[callbackName];
                options.success.call(context, data);
            };
            script.src = options.url.replace(/=\?/, '=' + callbackName);
            if (options.error) {
                script.onerror = function () {
                    clearTimeout(abortTimeout);
                    options.error.call(context, "", 'error');
                };
            }
            $('head').append(script);
            if (options.timeout > 0)
                abortTimeout = setTimeout(function () {
                    options.error.call(context, "", 'timeout');
                }, options.timeout);
            return {};
        };


        window.$afm=$;


        if (!window.numOnly) {
        window.numOnly = function numOnly(val) {
            if (val ===undefined || val === '') return 0;
            if (isNaN(parseFloat(val))) {
                if (val.replace) {
                    val = val.replace(/[^0-9.-]/g, "");
                } else return 0;
            }
            return parseFloat(val);
        };
    }

})(jQuery,window);

window.af=window.jq=jQuery;
if(!window.af||"function"!==typeof af){var af=function(c){function n(u,c,b){var a=t.createDocumentFragment();if(b){for(b=u.length-1;0<=b;b--)a.insertBefore(u[b],a.firstChild);c.insertBefore(a,c.firstChild)}else{for(b=0;b<u.length;b++)a.appendChild(u[b]);c.appendChild(a)}}function l(u){return u in H?H[u]:H[u]=RegExp("(^|\\s)"+u+"(\\s|$)")}function k(u){for(var c=0;c<u.length;c++)u.indexOf(u[c])!=c&&(u.splice(c,1),c--);return u}function g(c,b){var a=[];if(c==p)return a;for(;c;c=c.nextSibling)1==c.nodeType&&
c!==b&&a.push(c);return a}function q(c,b){try{return b.querySelectorAll(c)}catch(a){return[]}}function r(c,b){if(c)if(c.nodeType)b[b.length++]=c;else for(var a=0,d=c.length;a<d;a++)b[b.length++]=c[a]}function a(){}function d(b,a){b.os={};b.os.webkit=a.match(/WebKit\/([\d.]+)/)?!0:!1;b.os.android=a.match(/(Android)\s+([\d.]+)/)||a.match(/Silk-Accelerated/)?!0:!1;b.os.androidICS=b.os.android&&a.match(/(Android)\s4/)?!0:!1;b.os.ipad=a.match(/(iPad).*OS\s([\d_]+)/)?!0:!1;b.os.iphone=!b.os.ipad&&a.match(/(iPhone\sOS)\s([\d_]+)/)?
!0:!1;b.os.ios7=(b.os.ipad||b.os.iphone)&&a.match(/7_/)?!0:!1;b.os.webos=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)?!0:!1;b.os.touchpad=b.os.webos&&a.match(/TouchPad/)?!0:!1;b.os.ios=b.os.ipad||b.os.iphone;b.os.playbook=a.match(/PlayBook/)?!0:!1;b.os.blackberry10=a.match(/BB10/)?!0:!1;b.os.blackberry=b.os.playbook||b.os.blackberry10||a.match(/BlackBerry/)?!0:!1;b.os.chrome=a.match(/Chrome/)?!0:!1;b.os.opera=a.match(/Opera/)?!0:!1;b.os.fennec=a.match(/fennec/i)?!0:a.match(/Firefox/)?!0:!1;b.os.ie=a.match(/MSIE 10.0/i)||
a.match(/Trident\/7/i)?!0:!1;b.os.ieTouch=b.os.ie&&a.toLowerCase().match(/touch/i)?!0:!1;b.os.tizen=a.match(/Tizen/i)?!0:!1;b.os.supportsTouch=c.DocumentTouch&&t instanceof c.DocumentTouch||"ontouchstart"in c;b.feat={};var v=t.documentElement.getElementsByTagName("head")[0];b.feat.nativeTouchScroll="undefined"!==typeof v.style["-webkit-overflow-scrolling"]&&(b.os.ios||b.os.blackberry10);b.feat.cssPrefix=b.os.webkit?"Webkit":b.os.fennec?"Moz":b.os.ie?"ms":b.os.opera?"O":"";b.feat.cssTransformStart=
!b.os.opera?"3d(":"(";b.feat.cssTransformEnd=!b.os.opera?",0)":")";b.os.android&&!b.os.webkit&&(b.os.android=!1)}function f(b){return b._afmid||(b._afmid=O++)}function e(c,a,v,d){a=b(a);if(a.ns)var h=RegExp("(?:^| )"+a.ns.replace(" "," .* ?")+"(?: |$)");return(y[f(c)]||[]).filter(function(b){return b&&(!a.e||b.e==a.e)&&(!a.ns||h.test(b.ns))&&(!v||b.fn==v||"function"===typeof b.fn&&"function"===typeof v&&b.fn===v)&&(!d||b.sel==d)})}function b(b){b=(""+b).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}
function h(b,c,a){m.isObject(b)?m.each(b,a):b.split(/\s/).forEach(function(b){a(b,c)})}function s(c,a,v,d,e){var s=f(c),g=y[s]||(y[s]=[]);h(a,v,function(a,v){var x=e&&e(v,a),h=x||v,f=function(b){var a=h.apply(c,[b].concat(b.data));!1===a&&b.preventDefault();return a},x=m.extend(b(a),{fn:v,proxy:f,sel:d,del:x,i:g.length});g.push(x);c.addEventListener(x.e,f,!1)})}function G(b,c,a,d){var s=f(b);h(c||"",a,function(c,a){e(b,c,a,d).forEach(function(c){delete y[s][c.i];b.removeEventListener(c.e,c.proxy,
!1)})})}function P(b){var c=m.extend({originalEvent:b},b);m.each(Q,function(a,d){c[a]=function(){this[d]=R;if("stopImmediatePropagation"==a||"stopPropagation"==a)if(b.cancelBubble=!0,!b[a])return;return b[a].apply(b,arguments)};c[d]=S});return c}function E(b,c,a,d,h){s(b,c,a,d,function(c){return function(a){var v,x=m(a.target).closest(d,b).get(0);if(x)return v=m.extend(P(a),{currentTarget:x,liveFired:b,delegateTarget:b,data:h}),c.apply(x,[v].concat([].slice.call(arguments,1)))}})}function F(b,c){if(c&&
b.dispatchEvent){var a=m.Event("destroy",{bubbles:!1});b.dispatchEvent(a)}if((a=f(b))&&y[a]){for(var d in y[a])b.removeEventListener(y[a][d].e,y[a][d].proxy,!1);delete y[a]}}function A(b,c){if(b){var a=b.childNodes;if(a&&0<a.length)for(var d;d<a.length;d++)A(a[d],c);F(b,c)}}var p,t=c.document,B=[],J=B.slice,H={},T=1,U=/<(\w+)[^>]*>/,z={},C={},K={columncount:!0,fontweight:!0,lineheight:!0,"column-count":!0,"font-weight":!0,"line-height":!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,"z-index":!0,zoom:!0},
D="object"===typeof MSApp,w=function(b,c){this.length=0;if(b){if(b instanceof w&&c==p)return b;if(af.isFunction(b))return af(t).ready(b);if(af.isArray(b)&&b.length!=p){for(var a=0;a<b.length;a++)this[this.length++]=b[a];return this}if(af.isObject(b)&&af.isObject(c)){if(b.length==p)b.parentNode==c&&(this[this.length++]=b);else for(a=0;a<b.length;a++)b[a].parentNode==c&&(this[this.length++]=b[a]);return this}if(af.isObject(b)&&c==p)return this[this.length++]=b,this;if(c!==p){if(c instanceof w)return c.find(b)}else c=
t}else return this;return this.selector(b,c)},m=function(b,c){return new w(b,c)};m.is$=function(b){return b instanceof w};m.map=function(b,c){var a,d=[],h;if(m.isArray(b))for(h=0;h<b.length;h++)a=c.apply(b[h],[h,b[h]]),a!==p&&d.push(a);else if(m.isObject(b))for(h in b)b.hasOwnProperty(h)&&"length"!=h&&(a=c(b[h],[h,b[h]]),a!==p&&d.push(a));return af(d)};m.each=function(b,c){var a;if(m.isArray(b))for(a=0;a<b.length&&!1!==c(a,b[a]);a++);else if(m.isObject(b))for(a in b)if(b.hasOwnProperty(a)&&"length"!=
a&&!1===c(a,b[a]))break;return b};m.extend=function(b){b==p&&(b=this);if(1===arguments.length){for(var c in b)this[c]=b[c];return this}J.call(arguments,1).forEach(function(c){for(var a in c)b[a]=c[a]});return b};m.isArray=function(b){return b instanceof Array&&b.push!=p};m.isFunction=function(b){return"function"===typeof b&&!(b instanceof RegExp)};m.isObject=function(b){return"object"===typeof b&&null!==b};m.fn=w.prototype={namepsace:"appframework",constructor:w,forEach:B.forEach,reduce:B.reduce,
push:B.push,indexOf:B.indexOf,concat:B.concat,selector:function(b,c){b=b.trim();if("#"===b[0]&&-1==b.indexOf(".")&&-1==b.indexOf(",")&&-1===b.indexOf(" ")&&-1===b.indexOf(">"))c==t?r(c.getElementById(b.replace("#","")),this):r(q(b,c),this);else if("<"===b[0]&&">"===b[b.length-1]||-1!==b.indexOf("<")&&-1!==b.indexOf(">")){var a=t.createElement("div");D?MSApp.execUnsafeLocalFunction(function(){a.innerHTML=b.trim()}):a.innerHTML=b.trim();r(a.childNodes,this)}else r(q(b,c),this);return this},oldElement:void 0,
slice:B.slice,length:0,setupOld:function(b){if(b==p)return m();b.oldElement=this;return b},map:function(b){var c,a=[],d;for(d=0;d<this.length;d++)c=b.apply(this[d],[d,this[d]]),c!==p&&a.push(c);return m(a)},each:function(b){this.forEach(function(c,a){b.call(c,a,c)});return this},ready:function(b){"complete"===t.readyState||"loaded"===t.readyState||!m.os.ie&&"interactive"===t.readyState?b():t.addEventListener("DOMContentLoaded",b,!1);return this},find:function(b){if(0===this.length)return this;for(var c=
[],a,d=0;d<this.length;d++){a=m(b,this[d]);for(var h=0;h<a.length;h++)c.push(a[h])}return m(k(c))},html:function(b,c){if(0===this.length)return this;if(b===p)return this[0].innerHTML;for(var a=0;a<this.length;a++)if(!1!==c&&m.cleanUpContent(this[a],!1,!0),D){var d=this[a];MSApp.execUnsafeLocalFunction(function(){d.innerHTML=b})}else this[a].innerHTML=b;return this},text:function(b){if(0===this.length)return this;if(b===p)return this[0].textContent;for(var c=0;c<this.length;c++)this[c].textContent=
b;return this},css:function(b,a,d){d=d!=p?d:this[0];if(0===this.length)return this;if(a==p&&"string"===typeof b)return c.getComputedStyle(d),d.style[b]?d.style[b]:c.getComputedStyle(d)[b];for(d=0;d<this.length;d++)if(m.isObject(b))for(var h in b)this[d].style[h]="number"===typeof b[h]&&!K[h.toLowerCase()]?b[h]+"px":b[h];else this[d].style[b]="number"===typeof a&&!K[b.toLowerCase()]?a+"px":a;return this},vendorCss:function(b,c,a){return this.css(m.feat.cssPrefix+b,c,a)},cssTranslate:function(b){return this.vendorCss("Transform",
"translate"+m.feat.cssTransformStart+b+m.feat.cssTransformEnd)},computedStyle:function(b){if(!(0===this.length||b==p))return c.getComputedStyle(this[0],"")[b]},empty:function(){for(var b=0;b<this.length;b++)m.cleanUpContent(this[b],!1,!0),this[b].textContent="";return this},hide:function(){if(0===this.length)return this;for(var b=0;b<this.length;b++)"none"!=this.css("display",null,this[b])&&(this[b].setAttribute("afmOldStyle",this.css("display",null,this[b])),this[b].style.display="none");return this},
show:function(){if(0===this.length)return this;for(var b=0;b<this.length;b++)"none"==this.css("display",null,this[b])&&(this[b].style.display=this[b].getAttribute("afmOldStyle")?this[b].getAttribute("afmOldStyle"):"block",this[b].removeAttribute("afmOldStyle"));return this},toggle:function(b){if(0===this.length)return this;for(var c=!0===b,a=0;a<this.length;a++)if("none"!=this.css("display",null,this[a])&&(b==p||!1===c))this[a].setAttribute("afmOldStyle",this.css("display",null,this[a])),this[a].style.display=
"none";else if("none"==this.css("display",null,this[a])&&(b==p||!0===c))this[a].style.display=this[a].getAttribute("afmOldStyle")?this[a].getAttribute("afmOldStyle"):"block",this[a].removeAttribute("afmOldStyle");return this},val:function(b){if(0===this.length)return b===p?void 0:this;if(b==p)return this[0].value;for(var c=0;c<this.length;c++)this[c].value=b;return this},attr:function(b,c){if(0===this.length)return c===p?void 0:this;if(c===p&&!m.isObject(b))return this[0].afmCacheId&&z[this[0].afmCacheId][b]?
this[0].afmCacheId&&z[this[0].afmCacheId][b]:this[0].getAttribute(b);for(var a=0;a<this.length;a++)if(m.isObject(b))for(var d in b)m(this[a]).attr(d,b[d]);else m.isArray(c)||m.isObject(c)||m.isFunction(c)?(this[a].afmCacheId||(this[a].afmCacheId=m.uuid()),z[this[a].afmCacheId]||(z[this[a].afmCacheId]={}),z[this[a].afmCacheId][b]=c):null===c?(this[a].removeAttribute(b),this[a].afmCacheId&&z[this[a].afmCacheId][b]&&delete z[this[a].afmCacheId][b]):this[a].setAttribute(b,c);return this},removeAttr:function(b){for(var c=
this,a=0;a<this.length;a++)b.split(/\s+/g).forEach(function(d){c[a].removeAttribute(d);c[a].afmCacheId&&z[c[a].afmCacheId][b]&&delete z[c[a].afmCacheId][b]});return this},prop:function(b,c){if(0===this.length)return c===p?void 0:this;if(c===p&&!m.isObject(b)){var a;return this[0].afmCacheId&&C[this[0].afmCacheId][b]?this[0].afmCacheId&&C[this[0].afmCacheId][b]:!(a=this[0][b])&&b in this[0]?this[0][b]:a}for(a=0;a<this.length;a++)if(m.isObject(b))for(var d in b)m(this[a]).prop(d,b[d]);else m.isArray(c)||
m.isObject(c)||m.isFunction(c)?(this[a].afmCacheId||(this[a].afmCacheId=m.uuid()),C[this[a].afmCacheId]||(C[this[a].afmCacheId]={}),C[this[a].afmCacheId][b]=c):null===c&&void 0!==c?m(this[a]).removeProp(b):this[a][b]=c;return this},removeProp:function(b){for(var c=this,a=0;a<this.length;a++)b.split(/\s+/g).forEach(function(d){c[a][d]&&(c[a][d]=void 0);c[a].afmCacheId&&C[c[a].afmCacheId][b]&&delete C[c[a].afmCacheId][b]});return this},remove:function(b){b=m(this).filter(b);if(b==p)return this;for(var c=
0;c<b.length;c++)m.cleanUpContent(b[c],!0,!0),b[c]&&b[c].parentNode&&b[c].parentNode.removeChild(b[c]);return this},addClass:function(b){if(b==p)return this;for(var c=0;c<this.length;c++){var a=this[c].className,d=[],h=this;b.split(/\s+/g).forEach(function(b){h.hasClass(b,h[c])||d.push(b)});this[c].className+=(a?" ":"")+d.join(" ");this[c].className=this[c].className.trim()}return this},removeClass:function(b){if(b==p)return this;for(var c=0;c<this.length;c++){if(b==p){this[c].className="";break}var a=
this[c].className;"object"==typeof this[c].className&&(a=" ");b.split(/\s+/g).forEach(function(b){a=a.replace(l(b)," ")});this[c].className=0<a.length?a.trim():""}return this},toggleClass:function(b,c){if(b==p)return this;for(var a=0;a<this.length;a++)"boolean"!=typeof c&&(c=this.hasClass(b,this[a])),m(this[a])[c?"removeClass":"addClass"](b);return this},replaceClass:function(b,c){if(b==p||c==p)return this;for(var a=0;a<this.length;a++)if(b==p)this[a].className=c;else{var d=this[a].className;b.split(/\s+/g).concat(c.split(/\s+/g)).forEach(function(b){d=
d.replace(l(b)," ")});d=d.trim();this[a].className=0<d.length?(d+" "+c).trim():c}return this},hasClass:function(b,c){if(0===this.length)return!1;c||(c=this[0]);return l(b).test(c.className)},append:function(b,a){if(b&&b.length!=p&&0===b.length)return this;if(m.isArray(b)||m.isObject(b))b=m(b);var d;for(d=0;d<this.length;d++)if(b.length&&"string"!=typeof b)b=m(b),n(b,this[d],a);else{var h=U.test(b)?m(b):void 0;if(h==p||0===h.length)h=t.createTextNode(b);h.nodeName!=p&&"script"==h.nodeName.toLowerCase()&&
(!h.type||"text/javascript"===h.type.toLowerCase())?c.eval(h.innerHTML):h instanceof w?n(h,this[d],a):a!=p?this[d].insertBefore(h,this[d].firstChild):this[d].appendChild(h)}return this},appendTo:function(b,c){m(b).append(this);return this},prependTo:function(b){m(b).append(this,!0);return this},prepend:function(b){return this.append(b,1)},insertBefore:function(b,c){if(0===this.length)return this;b=m(b).get(0);if(!b)return this;for(var a=0;a<this.length;a++)c?b.parentNode.insertBefore(this[a],b.nextSibling):
b.parentNode.insertBefore(this[a],b);return this},insertAfter:function(b){this.insertBefore(b,!0)},get:function(b){b=b==p?0:b;0>b&&(b+=this.length);return this[b]?this[b]:void 0},offset:function(){var b;if(0===this.length)return this;if(this[0]==c)return{left:0,top:0,right:0,bottom:0,width:c.innerWidth,height:c.innerHeight};b=this[0].getBoundingClientRect();return{left:b.left+c.pageXOffset,top:b.top+c.pageYOffset,right:b.right+c.pageXOffset,bottom:b.bottom+c.pageYOffset,width:b.right-b.left,height:b.bottom-
b.top}},height:function(b){return 0===this.length?this:b!=p?this.css("height",b):this[0]==this[0].window?c.innerHeight+"":this[0].nodeType==this[0].DOCUMENT_NODE?this[0].documentElement.offsetheight+"":(b=this.css("height").replace("px",""))?b:this.offset().height+""},width:function(b){return 0===this.length?this:b!=p?this.css("width",b):this[0]==this[0].window?c.innerWidth+"":this[0].nodeType==this[0].DOCUMENT_NODE?this[0].documentElement.offsetwidth+"":(b=this.css("width").replace("px",""))?b:this.offset().width+
""},parent:function(b,c){if(0===this.length)return this;for(var a=[],d=0;d<this.length;d++)for(var h=this[d];h.parentNode&&h.parentNode!=t&&!(a.push(h.parentNode),h.parentNode&&(h=h.parentNode),!c););return this.setupOld(m(k(a)).filter(b))},parents:function(b){return this.parent(b,!0)},children:function(b){if(0===this.length)return this;for(var c=[],a=0;a<this.length;a++)c=c.concat(g(this[a].firstChild));return this.setupOld(m(c).filter(b))},siblings:function(b){if(0===this.length)return this;for(var c=
[],a=0;a<this.length;a++)this[a].parentNode&&(c=c.concat(g(this[a].parentNode.firstChild,this[a])));return this.setupOld(m(c).filter(b))},closest:function(b,c){if(0===this.length)return this;var a=this[0],d=m(b,c);if(0===d.length)return m();for(;a&&-1==d.indexOf(a);)a=a!==c&&a!==t&&a.parentNode;return m(a)},filter:function(b){if(0===this.length||b==p)return this;for(var c=[],a=0;a<this.length;a++){var d=this[a];d.parentNode&&0<=m(b,d.parentNode).indexOf(d)&&c.push(d)}return this.setupOld(m(k(c)))},
not:function(b){if(0===this.length)return this;for(var c=[],a=0;a<this.length;a++){var d=this[a];d.parentNode&&-1==m(b,d.parentNode).indexOf(d)&&c.push(d)}return this.setupOld(m(k(c)))},data:function(b,c){return this.attr("data-"+b,c)},end:function(){return this.oldElement!=p?this.oldElement:m()},clone:function(b){b=!1===b?!1:!0;if(0===this.length)return this;for(var c=[],a=0;a<this.length;a++)c.push(this[a].cloneNode(b));return m(c)},size:function(){return this.length},serialize:function(){if(0===
this.length)return"";for(var b=[],c=0;c<this.length;c++)this.slice.call(this[c].elements).forEach(function(c){var a=c.getAttribute("type");if("fieldset"!=c.nodeName.toLowerCase()&&(!c.disabled&&"submit"!=a&&"reset"!=a&&"button"!=a&&("radio"!=a&&"checkbox"!=a||c.checked))&&c.getAttribute("name"))if("select-multiple"==c.type)for(a=0;a<c.options.length;a++)c.options[a].selected&&b.push(c.getAttribute("name")+"="+encodeURIComponent(c.options[a].value));else b.push(c.getAttribute("name")+"="+encodeURIComponent(c.value))});
return b.join("&")},eq:function(b){return m(this.get(b))},index:function(b){return b?this.indexOf(m(b)[0]):this.parent().children().indexOf(this[0])},is:function(b){return!!b&&0<this.filter(b).length}};m.ajaxSettings={type:"GET",beforeSend:a,success:a,error:a,complete:a,context:void 0,timeout:0,crossDomain:null};m.jsonP=function(b){if(D)return b.type="get",b.dataType=null,m.get(b);var a="jsonp_callback"+ ++T,d="",h=t.createElement("script");c[a]=function(e){clearTimeout(d);m(h).remove();delete c[a];
b.success.call(void 0,e)};h.src=b.url.replace(/=\?/,"="+a);b.error&&(h.onerror=function(){clearTimeout(d);b.error.call(void 0,"","error")});m("head").append(h);0<b.timeout&&(d=setTimeout(function(){b.error.call(void 0,"","timeout")},b.timeout));return{}};m.ajax=function(b){var d;try{var h=b||{},e;for(e in m.ajaxSettings)"undefined"==typeof h[e]&&(h[e]=m.ajaxSettings[e]);h.url||(h.url=c.location);h.contentType||(h.contentType="application/x-www-form-urlencoded");h.headers||(h.headers={});if(!("async"in
h)||!1!==h.async)h.async=!0;if(h.dataType)switch(h.dataType){case "script":h.dataType="text/javascript, application/javascript";break;case "json":h.dataType="application/json";break;case "xml":h.dataType="application/xml, text/xml";break;case "html":h.dataType="text/html";break;case "text":h.dataType="text/plain";break;default:h.dataType="text/html";break;case "jsonp":return m.jsonP(b)}else h.dataType="text/html";m.isObject(h.data)&&(h.data=m.param(h.data));"get"===h.type.toLowerCase()&&h.data&&(-1===
h.url.indexOf("?")?h.url+="?"+h.data:h.url+="&"+h.data);if(/=\?/.test(h.url))return m.jsonP(h);null===h.crossDomain&&(h.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(h.url)&&RegExp.$2!=c.location.host);h.crossDomain||(h.headers=m.extend({"X-Requested-With":"XMLHttpRequest"},h.headers));var f,s=h.context,g=/^([\w-]+:)\/\//.test(h.url)?RegExp.$1:c.location.protocol;d=new c.XMLHttpRequest;d.onreadystatechange=function(){var b=h.dataType;if(4===d.readyState){clearTimeout(f);var c,a=!1;if(200<=d.status&&
300>d.status||0===d.status&&"file:"==g){if("application/json"===b&&!/^\s*$/.test(d.responseText))try{c=JSON.parse(d.responseText)}catch(e){a=e}else"application/xml, text/xml"===b?c=d.responseXML:"text/html"==b?(c=d.responseText,m.parseJS(c)):c=d.responseText;0===d.status&&0===c.length&&(a=!0);a?h.error.call(s,d,"parsererror",a):h.success.call(s,c,"success",d)}else a=!0,h.error.call(s,d,"error");h.complete.call(s,d,a?"error":"success")}};d.open(h.type,h.url,h.async);h.withCredentials&&(d.withCredentials=
!0);h.contentType&&(h.headers["Content-Type"]=h.contentType);for(var q in h.headers)"string"===typeof h.headers[q]&&d.setRequestHeader(q,h.headers[q]);if(!1===h.beforeSend.call(s,d,h))return d.abort(),!1;0<h.timeout&&(f=setTimeout(function(){d.onreadystatechange=a;d.abort();h.error.call(s,d,"timeout")},h.timeout));d.send(h.data)}catch(k){console.log(k),h.error.call(s,d,"error",k)}return d};m.get=function(b,c){return this.ajax({url:b,success:c})};m.post=function(b,c,a,d){"function"===typeof c&&(a=
c,c={});d===p&&(d="html");return this.ajax({url:b,type:"POST",data:c,dataType:d,success:a})};m.getJSON=function(b,c,a){"function"===typeof c&&(a=c,c={});return this.ajax({url:b,data:c,success:a,dataType:"json"})};m.param=function(b,c){var a=[];if(b instanceof w)b.each(function(){a.push((c?c+"["+this.id+"]":this.id)+"="+encodeURIComponent(this.value))});else for(var d in b)if(!m.isFunction(b[d])){var h=c?c+"["+d+"]":d,e=b[d];a.push(m.isObject(e)?m.param(e,h):h+"="+encodeURIComponent(e))}return a.join("&")};
m.parseJSON=function(b){return JSON.parse(b)};m.parseXML=function(b){if(D)MSApp.execUnsafeLocalFunction(function(){return(new DOMParser).parseFromString(b,"text/xml")});else return(new DOMParser).parseFromString(b,"text/xml")};d(m,navigator.userAgent);m.__detectUA=d;m.uuid=function(){var b=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return b()+b()+"-"+b()+"-"+b()+"-"+b()+"-"+b()+b()+b()};m.getCssMatrix=function(b){m.is$(b)&&(b=b.get(0));var a=c.WebKitCSSMatrix||c.MSCSSMatrix;
if(b===p)return a?new a:{a:0,b:0,c:0,d:0,e:0,f:0};b=c.getComputedStyle(b);b=b.webkitTransform||b.transform||b[m.feat.cssPrefix+"Transform"];return a?new a(b):b?(a=b.replace(/[^0-9\-.,]/g,"").split(","),{a:+a[0],b:+a[1],c:+a[2],d:+a[3],e:+a[4],f:+a[5]}):{a:0,b:0,c:0,d:0,e:0,f:0}};m.create=function(b,c){var a,d=new w;if(c||"<"!==b[0]){c.html&&(c.innerHTML=c.html,delete c.html);a=t.createElement(b);for(var h in c)a[h]=c[h];d[d.length++]=a}else a=t.createElement("div"),D?MSApp.execUnsafeLocalFunction(function(){a.innerHTML=
selector.trim()}):a.innerHTML=b,r(a.childNodes,d);return d};m.query=function(b,c){if(!b)return new w;c=c||t;return(new w).selector(b,c)};var y={},O=1;m.event={add:s,remove:G};m.fn.bind=function(b,c){for(var a=0;a<this.length;a++)s(this[a],b,c);return this};m.fn.unbind=function(b,c){for(var a=0;a<this.length;a++)G(this[a],b,c);return this};m.fn.one=function(b,c){return this.each(function(a,d){s(this,b,c,null,function(b,c){return function(){G(d,c,b);return b.apply(d,arguments)}})})};var R=function(){return!0},
S=function(){return!1},Q={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};m.fn.delegate=function(b,c,a,d){for(var h=0;h<this.length;h++)E(this[h],c,d,b,a);return this};m.fn.undelegate=function(b,c,a){for(var d=0;d<this.length;d++)G(this[d],c,a,b);return this};m.fn.on=function(b,c,a,d){m.isObject(a)||(d=a,a=null);return c===p||m.isFunction(c)?this.bind(b,c):this.delegate(c,b,a,d)};m.fn.off=function(b,c,a){return c===
p||m.isFunction(c)?this.unbind(b,c):this.undelegate(c,b,a)};m.fn.trigger=function(b,c,a){"string"==typeof b&&(b=m.Event(b,a));b.data=c;for(c=0;c<this.length;c++)this[c].dispatchEvent(b);return this};m.Event=function(b,c){var a=t.createEvent("Events"),d=!0;if(c)for(var h in c)"bubbles"==h?d=!!c[h]:a[h]=c[h];a.initEvent(b,d,!0,null,null,null,null,null,null,null,null,null,null,null,null);return a};m.bind=function(b,c,a){if(b){b.__events||(b.__events={});m.isArray(c)||(c=[c]);for(var d=0;d<c.length;d++)b.__events[c[d]]||
(b.__events[c[d]]=[]),b.__events[c[d]].push(a)}};m.trigger=function(b,c,a){if(b){var d=!0;if(!b.__events)return d;m.isArray(c)||(c=[c]);m.isArray(a)||(a=[]);for(var h=0;h<c.length;h++)if(b.__events[c[h]])for(var e=b.__events[c[h]].slice(0),f=0;f<e.length;f++)m.isFunction(e[f])&&!1===e[f].apply(b,a)&&(d=!1);return d}};m.unbind=function(b,c,a){if(b.__events){m.isArray(c)||(c=[c]);for(var d=0;d<c.length;d++)if(b.__events[c[d]])for(var h=b.__events[c[d]],e=0;e<h.length;e++)if(a==p&&delete h[e],h[e]==
a){h.splice(e,1);break}}};m.proxy=function(b,c,a){return function(){return a?b.apply(c,a):b.apply(c,arguments)}};var V=function(b,c){for(var a=0;a<b.length;a++)A(b[a],c)};m.cleanUpContent=function(b,c,a){if(b){var d=b.childNodes;d&&0<d.length&&m.asap(V,{},[J.apply(d,[0]),a]);c&&F(b,a)}};var I=[],L=[],M=[];m.asap=function(b,a,d){if(!m.isFunction(b))throw"$.asap - argument is not a valid function";I.push(b);L.push(a?a:{});M.push(d?d:[]);c.postMessage("afm-asap","*")};c.addEventListener("message",function(b){b.source==
c&&"afm-asap"==b.data&&(b.stopPropagation(),0<I.length&&I.shift().apply(L.shift(),M.shift()))},!0);var N={};m.parseJS=function(b){if(b){if("string"==typeof b){var a=t.createElement("div");D?MSApp.execUnsafeLocalFunction(function(){a.innerHTML=b}):a.innerHTML=b;b=a}var d=b.getElementsByTagName("script");b=null;for(var h=0;h<d.length;h++)if(0<d[h].src.length&&!N[d[h].src]&&!D){var e=t.createElement("script");e.type=d[h].type;e.src=d[h].src;t.getElementsByTagName("head")[0].appendChild(e);N[d[h].src]=
1;e=null}else c.eval(d[h].innerHTML)}};"click keydown keyup keypress submit load resize change select error".split(" ").forEach(function(b){m.fn[b]=function(c){return c?this.bind(b,c):this.trigger(b)}});["focus","blur"].forEach(function(b){m.fn[b]=function(c){if(0!==this.length){if(c)this.bind(b,c);else for(c=0;c<this.length;c++)try{this[c][b]()}catch(a){}return this}}});return m}(window);window.jq=af;"$"in window||(window.$=af);"function"===typeof define&&define.amd?define("appframework",[],function(){return af}):
"undefined"!==typeof module&&module.exports&&(module.exports.af=af,module.exports.$=af);window.numOnly||(window.numOnly=function(c){if(void 0===c||""===c)return 0;if(isNaN(parseFloat(c)))if(c.replace)c=c.replace(/[^0-9.-]/g,"");else return 0;return parseFloat(c)})};/*
 Intel
 Indiepath 2011 - Tim Fisher
 Modifications/enhancements by appMobi for App Framework

 2011 - Intel
: 2011 Intel
 @description:  This script will replace all drop downs with friendly select controls.  Users can still interact
 with the old drop down box as normal with javascript, and this will be reflected
 2011 Intel
 @author Intel
 @version 2.0
*/
(function(c){var n=[],l=function(a,d){var f,e;f="string"==typeof a||a instanceof String?document.getElementById(a):c.is$(a)?a[0]:a;f.afCSS3AnimateId||(f.afCSS3AnimateId=c.uuid());e=f.afCSS3AnimateId;n[e]?(n[e].animate(d),f=n[e]):(f=r(f,d),n[e]=f);return f};c.fn.css3Animate=function(c){!c.complete&&c.callback&&(c.complete=c.callback);var d=l(this[0],c);c.complete=null;c.sucess=null;c.failure=null;for(var f=1;f<this.length;f++)d.link(this[f],c);return d};c.css3AnimateQueue=function(){return new r.queue};
var k=c.feat.cssTransformStart,g=c.feat.cssTransformEnd,q=c.feat.cssPrefix.replace(/-/g,"")+"TransitionEnd",q=c.os.fennec||""===c.feat.cssPrefix||c.os.ie?"transitionend":q,q=q.replace(q.charAt(0),q.charAt(0).toLowerCase()),r=function(){var a=function(d,f){if(!(this instanceof a))return new a(d,f);this.callbacksStack=[];this.activeEvent=null;this.countStack=0;this.isActive=!1;this.el=d;this.linkFinishedProxy_=c.proxy(this.linkFinished,this);if(this.el){this.animate(f);var e=this;af(this.el).bind("destroy",
function(){var b=e.el.afCSS3AnimateId;e.callbacksStack=[];n[b]&&delete n[b]})}};a.prototype={animate:function(a){this.isActive&&this.cancel();this.isActive=!0;if(a){var f=!!a.addClass,e,b,h=numOnly(a.time);if(f)a.removeClass?af(this.el).replaceClass(a.removeClass,a.addClass):af(this.el).addClass(a.addClass);else{0===h&&(a.time=0);a.y||(a.y=0);a.x||(a.x=0);a.previous&&(e=new c.getCssMatrix(this.el),a.y+=numOnly(e.f),a.x+=numOnly(e.e));a.origin||(a.origin="0% 0%");a.scale||(a.scale="1");a.rotateY||
(a.rotateY="0");a.rotateX||(a.rotateX="0");a.skewY||(a.skewY="0");a.skewX||(a.skewX="0");a.timingFunction||(a.timingFunction="linear");if("number"==typeof a.x||-1==a.x.indexOf("%")&&-1==a.x.toLowerCase().indexOf("px")&&-1==a.x.toLowerCase().indexOf("deg"))a.x=parseInt(a.x,10)+"px";if("number"==typeof a.y||-1==a.y.indexOf("%")&&-1==a.y.toLowerCase().indexOf("px")&&-1==a.y.toLowerCase().indexOf("deg"))a.y=parseInt(a.y,10)+"px";e="translate"+k+a.x+","+a.y+g+" scale("+parseFloat(a.scale)+") rotate("+
a.rotateX+")";c.os.opera||(e+=" rotateY("+a.rotateY+")");e+=" skew("+a.skewX+","+a.skewY+")";this.el.style[c.feat.cssPrefix+"Transform"]=e;this.el.style[c.feat.cssPrefix+"BackfaceVisibility"]="hidden";void 0!==a.opacity&&(this.el.style.opacity=a.opacity);a.width&&(this.el.style.width=a.width);a.height&&(this.el.style.height=a.height);this.el.style[c.feat.cssPrefix+"TransitionProperty"]="all";-1===(""+a.time).indexOf("s")?(e="ms",b=a.time+e):-1!==a.time.indexOf("ms")?(e="ms",b=a.time):(e="s",b=a.time+
e);a.delay&&(this.el.style[c.feat.cssPrefix+"TransitionDelay"]=a.delay);this.el.style[c.feat.cssPrefix+"TransitionDuration"]=b;this.el.style[c.feat.cssPrefix+"TransitionTimingFunction"]=a.timingFunction;this.el.style[c.feat.cssPrefix+"TransformOrigin"]=a.origin}this.callbacksStack.push({complete:a.complete,success:a.success,failure:a.failure});this.countStack++;var s=this;b=window.getComputedStyle(this.el);f&&(f=b[c.feat.cssPrefix+"TransitionDuration"],h=numOnly(f),a.time=h,-1!==f.indexOf("ms")?e=
"ms":(e="s",a.time*=1E3));0===h||"ms"==e&&5>h||"none"==b.display?c.asap(c.proxy(this.finishAnimation,this,[!1])):(this.activeEvent=function(b){clearTimeout(s.timeout);s.finishAnimation(b);s.el.removeEventListener(q,s.activeEvent,!1)},s.timeout=setTimeout(this.activeEvent,numOnly(a.time)+50),this.el.addEventListener(q,this.activeEvent,!1))}else alert("Please provide configuration options for animation of "+this.el.id)},addCallbackHook:function(c){c&&this.callbacksStack.push(c);this.countStack++;return this.linkFinishedProxy_},
linkFinished:function(c){c?this.cancel():this.finishAnimation()},finishAnimation:function(c){c&&c.preventDefault&&c.preventDefault();this.isActive&&(this.countStack--,0===this.countStack&&this.fireCallbacks(!1))},fireCallbacks:function(c){this.clearEvents();var a=this.callbacksStack;this.cleanup();for(var e=0;e<a.length;e++){var b=a[e].complete,h=a[e].success,s=a[e].failure;b&&"function"==typeof b&&b(c);c&&s&&"function"==typeof s?s():h&&"function"==typeof h&&h()}},cancel:function(){this.isActive&&
this.fireCallbacks(!0)},cleanup:function(){this.callbacksStack=[];this.isActive=!1;this.countStack=0},clearEvents:function(){this.activeEvent&&this.el.removeEventListener(q,this.activeEvent,!1);this.activeEvent=null},link:function(c,a){var e={complete:a.complete,success:a.success,failure:a.failure};a.complete=this.addCallbackHook(e);a.success=null;a.failure=null;l(c,a);a.complete=e.complete;a.success=e.success;a.failure=e.failure;return this}};return a}();r.queue=function(){return{elements:[],push:function(c){this.elements.push(c)},
pop:function(){return this.elements.pop()},run:function(){var c=this;if(0!==this.elements.length&&("function"==typeof this.elements[0]&&this.shift()(),0!==this.elements.length)){var d=this.shift();0<this.elements.length&&(d.complete=function(d){d||c.run()});r(document.getElementById(d.id),d)}},shift:function(){return this.elements.shift()}}}})(af);
(function(c){function n(){if(af.os.android&&!af.os.chrome&&af.os.webkit){var g=!1;c.bind(c.touchLayer,["cancel-enter-edit","exit-edit"],function(c){if(g){g=!1;for(var a in l)l[a].el?c=!0:(delete l[a],c=!1),c&&l[a].androidFormsMode&&l[a].stopFormsMode()}})}k=!0}var l=[];c.fn.scroller=function(q){for(var k,a,d=0;d<this.length;d++)k=this[d],k.afScrollerId||(k.afScrollerId=c.uuid()),a=k.afScrollerId,l[a]?k=l[a]:(q||(q={}),c.feat.nativeTouchScroll||(q.useJsScroll=!0),k=g(this[d],q),l[a]=k);return 1==this.length?
k:this};var k=!1,g=function(){function g(b,a){var d=document.createElement("div");d.style.position="absolute";d.style.width=b+"px";d.style.height=a+"px";d.style[c.feat.cssPrefix+"BorderRadius"]="2px";d.style.borderRadius="2px";d.style.display="none";d.className="scrollBar";d.style.background="black";return d}var r=c.feat.cssTransformStart,a=c.feat.cssTransformEnd,d,f,e=function(b,a){this.el=b;this.afEl=c(this.el);for(var d in a)this[d]=a[d]};e.prototype={refresh:!1,refreshContent:"Pull to Refresh",
refreshHangTimeout:2E3,refreshHeight:60,refreshElement:null,refreshCancelCB:null,refreshRunning:!1,scrollTop:0,scrollLeft:0,preventHideRefresh:!0,verticalScroll:!0,horizontalScroll:!1,refreshTriggered:!1,moved:!1,eventsActive:!1,rememberEventsActive:!1,scrollingLocked:!1,autoEnable:!0,blockFormsFix:!1,loggedPcentY:0,loggedPcentX:0,infinite:!1,infiniteEndCheck:!1,infiniteTriggered:!1,scrollSkip:!1,scrollTopInterval:null,scrollLeftInterval:null,bubbles:!0,lockBounce:!1,_scrollTo:function(b,c){c=parseInt(c,
10);if(0===c||isNaN(c))this.el.scrollTop=Math.abs(b.y),this.el.scrollLeft=Math.abs(b.x);else{var a=(this.el.scrollTop-b.y)/Math.ceil(c/10),d=(this.el.scrollLeft-b.x)/Math.ceil(c/10),e=this,f=Math.ceil(this.el.scrollTop-b.y)/a,g=Math.ceil(this.el.scrollLeft-b.x)/a,q=0,k=0;e.scrollTopInterval=window.setInterval(function(){e.el.scrollTop-=a;k++;k>=f&&(e.el.scrollTop=b.y,clearInterval(e.scrollTopInterval))},10);e.scrollLeftInterval=window.setInterval(function(){e.el.scrollLeft-=d;q++;q>=g&&(e.el.scrollLeft=
b.x,clearInterval(e.scrollLeftInterval))},10)}},enable:function(){},disable:function(){},hideScrollbars:function(){},addPullToRefresh:function(){},_scrollToTop:function(b){this._scrollTo({x:0,y:0},b)},_scrollToBottom:function(b){this._scrollTo({x:0,y:this.el.scrollHeight-this.el.offsetHeight},b)},scrollToBottom:function(b){return this._scrollToBottom(b)},scrollToTop:function(b){return this._scrollToTop(b)},init:function(b,a){this.el=b;this.afEl=c(this.el);this.defaultProperties();for(var d in a)this[d]=
a[d];var e=this,f=function(){(e.eventsActive||!c.feat.nativeTouchScroll)&&e.adjustScroll()};this.afEl.bind("destroy",function(){e.disable(!0);var b=e.el.afScrollerId;l[b]&&delete l[b];c.unbind(c.touchLayer,"orientationchange-reshape",f)});c.bind(c.touchLayer,"orientationchange-reshape",f);c(window).bind("resize",f)},needsFormsFix:function(b){return this.useJsScroll&&this.isEnabled()&&"none"!=this.el.style.display&&0<c(b).closest(this.afEl).size()},handleEvent:function(b){if(!this.scrollingLocked)switch(b.type){case "touchstart":clearInterval(this.scrollTopInterval);
this.preventHideRefresh=!this.refreshRunning;this.moved=!1;this.onTouchStart(b);this.bubbles||b.stopPropagation();break;case "touchmove":this.onTouchMove(b);this.bubbles||b.stopPropagation();break;case "touchend":this.onTouchEnd(b);this.bubbles||b.stopPropagation();break;case "scroll":this.onScroll(b)}},coreAddPullToRefresh:function(b){b&&(this.refreshElement=b);null===this.refreshElement?(b=document.getElementById(this.container.id+"_pulldown"),b=null!==b?af(b):af("<div id='"+this.container.id+"_pulldown' class='afscroll_refresh' style='border-radius:.6em;border: 1px solid #2A2A2A;background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#666666),color-stop(1,#222222));background:#222222;margin:0px;height:60px;position:relative;text-align:center;line-height:60px;color:white;width:100%;'>"+
this.refreshContent+"</div>")):b=af(this.refreshElement);b=b.get(0);this.refreshContainer=af('<div style="overflow:hidden;width:100%;height:0;margin:0;padding:0;padding-left:5px;padding-right:5px;display:none;"></div>');c(this.el).prepend(this.refreshContainer.append(b,"top"));this.refreshContainer=this.refreshContainer[0]},fireRefreshRelease:function(b,a){if(this.refresh&&b){var d=!1!==c.trigger(this,"refresh-release",[b]);this.preventHideRefresh=!1;this.refreshRunning=!0;if(d){var e=this;0<this.refreshHangTimeout&&
(this.refreshCancelCB=setTimeout(function(){e.hideRefresh()},this.refreshHangTimeout))}}},setRefreshContent:function(b){af(this.container).find(".afscroll_refresh").html(b)},lock:function(){this.scrollingLocked||(this.scrollingLocked=!0,(this.rememberEventsActive=this.eventsActive)&&this.disable())},unlock:function(){this.scrollingLocked&&(this.scrollingLocked=!1,this.rememberEventsActive&&this.enable())},scrollToItem:function(b,a){c.is$(b)||(b=c(b));var d,e;"bottom"==a?(d=b.offset(),d=d.top-this.afEl.offset().bottom+
d.height,d+=4):(d=b.offset().top,d-=document.body.scrollTop,e=this.afEl.offset().top,document.body.scrollTop<e&&(d-=e),d-=4);this.scrollBy({y:d,x:0},0)},setPaddings:function(b,a){var d=c(this.el),e=numOnly(d.css("paddingTop"));d.css("paddingTop",b+"px").css("paddingBottom",a+"px");this.scrollBy({y:b-e,x:0})},divide:function(b,c){return 0!==c?b/c:0},isEnabled:function(){return this.eventsActive},addInfinite:function(){this.infinite=!0},clearInfinite:function(){this.infiniteTriggered=!1;this.scrollSkip=
!0},scrollTo:function(b,c){return this._scrollTo(b,c)}};d=function(b,a){this.init(b,a);this.container=this.el.parentNode;this.container.afScrollerId=b.afScrollerId;this.afEl=c(this.container);"hidden"!=this.container.style.overflow&&(this.container.style.overflow="hidden");this.addPullToRefresh(null,!0);this.autoEnable&&this.enable(!0);var d;this.verticalScroll&&(!0===this.verticalScroll&&!0===this.scrollBars)&&(d=g(5,20),d.style.top="0px",this.vScrollCSS&&(d.className=this.vScrollCSS),d.style.display=
"none",this.container.appendChild(d),this.vscrollBar=d);this.horizontalScroll&&(!0===this.horizontalScroll&&!0===this.scrollBars)&&(d=g(20,5),d.style.bottom="0px",this.hScrollCSS&&(d.className=this.hScrollCSS),d.style.display="none",this.container.appendChild(d),this.hscrollBar=d);this.horizontalScroll&&(this.el.style["float"]="left");this.el.hasScroller=!0};f=function(b,a){a.nativeParent&&(b=b.parentNode);this.init(b,a);var d=c(b);if(!0!==a.noParent){var e=d.parent();d.css("height",e.height()).css("width",
e.width());d.insertBefore(d.parent());e.remove()}this.container=this.el;d.css("-webkit-overflow-scrolling","touch");a.autoEnable&&this.enable()};f.prototype=new e;d.prototype=new e;f.prototype.defaultProperties=function(){this.refreshContainer=null;this.dX=this.cX=this.dY=this.cY=0;this.cancelPropagation=!1;this.loggedPcentX=this.loggedPcentY=0;var b=this;this.adjustScrollOverflowProxy_=function(){b.afEl.css("overflow","auto");b.afEl.parent().css("overflow","hidden")}};f.prototype.enable=function(b){this.eventsActive||
(this.eventsActive=!0,this.el.style.overflow="auto",this.el.parentNode.style.overflow="hidden",b||this.adjustScroll(),this.el.addEventListener("touchstart",this,!1),this.el.addEventListener("scroll",this,!1))};f.prototype.disable=function(b){this.eventsActive&&(this.logPos(this.el.scrollLeft,this.el.scrollTop),b||(this.el.style.overflow="hidden"),this.el.removeEventListener("touchstart",this,!1),this.el.removeEventListener("touchmove",this,!1),this.el.removeEventListener("touchend",this,!1),this.el.removeEventListener("scroll",
this,!1),this.eventsActive=!1)};f.prototype.addPullToRefresh=function(b,c){this.el.removeEventListener("touchstart",this,!1);this.el.addEventListener("touchstart",this,!1);c||(this.refresh=!0);this.refresh&&!0===this.refresh&&(this.coreAddPullToRefresh(b),this.refreshContainer.style.position="absolute",this.refreshContainer.style.top="-60px",this.refreshContainer.style.height="60px",this.refreshContainer.style.display="block")};f.prototype.onTouchStart=function(b){0===this.el.scrollTop&&(this.el.scrollTop=
1);this.el.scrollTop===this.el.scrollHeight-this.el.clientHeight&&(this.el.scrollTop-=1);this.horizontalScroll&&(0===this.el.scrollLeft&&(this.el.scrollLeft=1),this.el.scrollLeft===this.el.scrollWidth-this.el.clientWidth&&(this.el.scrollLeft-=1));this.refreshCancelCB&&clearTimeout(this.refreshCancelCB);this.el.addEventListener("touchmove",this,!1);this.dY=b.touches[0].pageY;(this.refresh||this.infinite)&&this.refresh&&0>this.dY&&this.showRefresh()};f.prototype.onTouchMove=function(b){var a=b.touches[0].pageY-
this.dY,d=b.touches[0].pageX-this.dX;this.hasVertScroll&&this.el.clientHeight==this.el.scrollHeight&&b.preventDefault();this.hasHorScroll&&this.el.clientWidth==this.el.scrollWidth&&b.preventDefault();this.moved||(c.trigger(this,"scrollstart",[this.el]),c.trigger(c.touchLayer,"scrollstart",[this.el]),this.el.addEventListener("touchend",this,!1),this.moved=!0);this.refresh&&0>this.el.scrollTop?this.showRefresh():this.refreshTriggered&&(this.refresh&&this.el.scrollTop>this.refreshHeight)&&(this.refreshTriggered=
!1,this.refreshCancelCB&&clearTimeout(this.refreshCancelCB),this.hideRefresh(!1),c.trigger(this,"refresh-cancel"));this.cY=a;this.cX=d};f.prototype.showRefresh=function(){this.refreshTriggered||(this.refreshTriggered=!0,c.trigger(this,"refresh-trigger"))};f.prototype.onTouchEnd=function(b){b=this.el.scrollTop<=-this.refreshHeight;this.fireRefreshRelease(b,!0);b&&this.refresh&&(this.refreshContainer.style.position="relative",this.refreshContainer.style.top="0px");this.dY=this.cY=0;this.el.removeEventListener("touchmove",
this,!1);this.el.removeEventListener("touchend",this,!1);this.infiniteEndCheck=!0;this.infinite&&(!this.infiniteTriggered&&Math.abs(this.el.scrollTop)>=this.el.scrollHeight-this.el.clientHeight)&&(this.infiniteTriggered=!0,c.trigger(this,"infinite-scroll"),this.infiniteEndCheck=!0);this.touchEndFired=!0;var a=this,d=this.el.scrollTop,e=this.el.scrollLeft,f=0;a.nativePolling=setInterval(function(){f++;if(200<=f)clearInterval(a.nativePolling);else if(a.el.scrollTop!=d||a.el.scrollLeft!=e)clearInterval(a.nativePolling),
c.trigger(c.touchLayer,"scrollend",[a.el]),c.trigger(a,"scrollend",[a.el])},20)};f.prototype.hideRefresh=function(b){if(!this.preventHideRefresh){var a=this,d=function(b){b||(a.el.style[c.feat.cssPrefix+"Transform"]="none",a.el.style[c.feat.cssPrefix+"TransitionProperty"]="none",a.el.scrollTop=0,a.logPos(a.el.scrollLeft,0));a.refreshContainer.style.top="-60px";a.refreshContainer.style.position="absolute";a.dY=a.cY=0;c.trigger(a,"refresh-finish")};!1===b||!a.afEl.css3Animate?d():a.afEl.css3Animate({y:a.el.scrollTop-
a.refreshHeight+"px",x:"0%",time:"75ms",complete:d});this.refreshTriggered=!1}};f.prototype.hideScrollbars=function(){};f.prototype.scrollTo=function(b,a){this.logPos(b.x,b.y);b.x*=-1;b.y*=-1;return this._scrollTo(b,a)};f.prototype.scrollBy=function(b,a){b.x+=this.el.scrollLeft;b.y+=this.el.scrollTop;this.logPos(this.el.scrollLeft,this.el.scrollTop);return this._scrollTo(b,a)};f.prototype.scrollToBottom=function(b){this._scrollToBottom(b);this.logPos(this.el.scrollLeft,this.el.scrollTop)};f.prototype.onScroll=
function(b){this.infinite&&this.touchEndFired?this.touchEndFired=!1:this.scrollSkip?this.scrollSkip=!1:(this.infinite&&(!this.infiniteTriggered&&Math.abs(this.el.scrollTop)>=this.el.scrollHeight-this.el.clientHeight)&&(this.infiniteTriggered=!0,c.trigger(this,"infinite-scroll"),this.infiniteEndCheck=!0),this.infinite&&(this.infiniteEndCheck&&this.infiniteTriggered)&&(this.infiniteEndCheck=!1,c.trigger(this,"infinite-scroll-end")))};f.prototype.logPos=function(b,a){this.loggedPcentX=this.divide(b,
this.el.scrollWidth);this.loggedPcentY=this.divide(a,this.el.scrollHeight);this.scrollLeft=b;this.scrollTop=a;isNaN(this.loggedPcentX)&&(this.loggedPcentX=0);isNaN(this.loggedPcentY)&&(this.loggedPcentY=0)};f.prototype.adjustScroll=function(){this.adjustScrollOverflowProxy_();this.el.scrollLeft=this.loggedPcentX*this.el.scrollWidth;this.el.scrollTop=this.loggedPcentY*this.el.scrollHeight;this.logPos(this.el.scrollLeft,this.el.scrollTop)};d.prototype.defaultProperties=function(){this.boolScrollLock=
!1;this.elementInfo=this.currentScrollingObject=null;this.verticalScroll=!0;this.horizontalScroll=!1;this.scrollBars=!0;this.hscrollBar=this.vscrollBar=null;this.vScrollCSS=this.hScrollCSS="scrollBar";this.firstEventInfo=null;this.moved=!1;this.preventPullToRefresh=!0;this.refreshSafeKeep=this.androidFormsMode=this.isScrolling=!1;this.lastScrollbar="";this.scrollingFinishCB=this.container=this.finishScrollingObject=null;this.loggedPcentX=this.loggedPcentY=0};d.prototype.enable=function(b){this.eventsActive||
(this.eventsActive=!0,b?this.scrollerMoveCSS({x:0,y:0},0):this.adjustScroll(),this.container.addEventListener("touchstart",this,!1),this.container.addEventListener("touchmove",this,!1),this.container.addEventListener("touchend",this,!1))};d.prototype.adjustScroll=function(){var b=this.getViewportSize();this.scrollerMoveCSS({x:Math.round(this.loggedPcentX*(this.el.clientWidth-b.w)),y:Math.round(this.loggedPcentY*(this.el.clientHeight-b.h))},0)};d.prototype.disable=function(){if(this.eventsActive){var b=
this.getCSSMatrix(this.el);this.logPos(numOnly(b.e)-numOnly(this.container.scrollLeft),numOnly(b.f)-numOnly(this.container.scrollTop));this.container.removeEventListener("touchstart",this,!1);this.container.removeEventListener("touchmove",this,!1);this.container.removeEventListener("touchend",this,!1);this.eventsActive=!1}};d.prototype.addPullToRefresh=function(b,a){a||(this.refresh=!0);this.refresh&&!0===this.refresh&&(this.coreAddPullToRefresh(b),this.el.style.overflow="visible")};d.prototype.hideScrollbars=
function(){this.hscrollBar&&(this.hscrollBar.style.display="none",this.hscrollBar.style[c.feat.cssPrefix+"TransitionDuration"]="0ms");this.vscrollBar&&(this.vscrollBar.style.display="none",this.vscrollBar.style[c.feat.cssPrefix+"TransitionDuration"]="0ms")};d.prototype.getViewportSize=function(){var b=window.getComputedStyle(this.container);isNaN(numOnly(b.paddingTop))&&alert(typeof b.paddingTop+"::"+b.paddingTop+":");return{h:this.container.clientHeight>window.innerHeight?window.innerHeight:this.container.clientHeight-
numOnly(b.paddingTop)-numOnly(b.paddingBottom),w:this.container.clientWidth>window.innerWidth?window.innerWidth:this.container.clientWidth-numOnly(b.paddingLeft)-numOnly(b.paddingRight)}};d.prototype.onTouchStart=function(b){this.moved=!1;this.currentScrollingObject=null;if(this.container&&(this.refreshCancelCB&&(clearTimeout(this.refreshCancelCB),this.refreshCancelCB=null),this.scrollingFinishCB&&(clearTimeout(this.scrollingFinishCB),this.scrollingFinishCB=null),!(1!=b.touches.length||this.boolScrollLock))){if(b.touches[0].target&&
void 0!==b.touches[0].target.type){var a=b.touches[0].target.tagName.toLowerCase();b.touches[0].target.type.toLowerCase();if("select"==a)return}a={top:0,left:0,speedY:0,speedX:0,absSpeedY:0,absSpeedX:0,deltaY:0,deltaX:0,absDeltaY:0,absDeltaX:0,y:0,x:0,duration:0};this.elementInfo={};var d=this.getViewportSize();this.elementInfo.bottomMargin=d.h;this.elementInfo.maxTop=this.el.clientHeight-this.elementInfo.bottomMargin;0>this.elementInfo.maxTop&&(this.elementInfo.maxTop=0);this.elementInfo.divHeight=
this.el.clientHeight;this.elementInfo.rightMargin=d.w;this.elementInfo.maxLeft=this.el.clientWidth-this.elementInfo.rightMargin;0>this.elementInfo.maxLeft&&(this.elementInfo.maxLeft=0);this.elementInfo.divWidth=this.el.clientWidth;this.elementInfo.hasVertScroll=this.verticalScroll||0<this.elementInfo.maxTop;this.elementInfo.hasHorScroll=0<this.elementInfo.maxLeft;this.elementInfo.requiresVScrollBar=this.vscrollBar&&this.elementInfo.hasVertScroll;this.elementInfo.requiresHScrollBar=this.hscrollBar&&
this.elementInfo.hasHorScroll;this.saveEventInfo(b);this.saveFirstEventInfo(b);b=this.getCSSMatrix(this.el);a.top=numOnly(b.f)-numOnly(this.container.scrollTop);a.left=numOnly(b.e)-numOnly(this.container.scrollLeft);this.container.scrollTop=this.container.scrollLeft=0;this.currentScrollingObject=this.el;this.refresh&&0===a.top?(this.refreshContainer.style.display="block",this.refreshHeight=this.refreshContainer.firstChild.clientHeight,this.refreshContainer.firstChild.style.top=-this.refreshHeight+
"px",this.refreshContainer.style.overflow="visible",this.preventPullToRefresh=!1):0>a.top&&(this.preventPullToRefresh=!0,this.refresh&&(this.refreshContainer.style.overflow="hidden"));a.x=a.left;a.y=a.top;this.setVScrollBar(a,0,0)&&(this.vscrollBar.style.right="0px",this.vscrollBar.style[c.feat.cssPrefix+"Transition"]="");this.setHScrollBar(a,0,0)&&(this.container.clientHeight>window.innerHeight?this.hscrollBar.style.top=window.innerHeight-numOnly(this.hscrollBar.style.height)+"px":this.hscrollBar.style.bottom=
numOnly(this.hscrollBar.style.height),this.hscrollBar.style[c.feat.cssPrefix+"Transition"]="");this.lastScrollInfo=a;this.hasMoved=!1;0==this.elementInfo.maxTop&&0==this.elementInfo.maxLeft?this.currentScrollingObject=null:this.scrollerMoveCSS(this.lastScrollInfo,0)}};d.prototype.getCSSMatrix=function(b){if(this.androidFormsMode){var a=parseInt(b.style.marginTop,10);b=parseInt(b.style.marginLeft,10);isNaN(a)&&(a=0);isNaN(b)&&(b=0);return{f:a,e:b}}return c.getCssMatrix(b)};d.prototype.saveEventInfo=
function(b){this.lastEventInfo={pageX:b.touches[0].pageX,pageY:b.touches[0].pageY,time:b.timeStamp}};d.prototype.saveFirstEventInfo=function(b){this.firstEventInfo={pageX:b.touches[0].pageX,pageY:b.touches[0].pageY,time:b.timeStamp}};d.prototype.setVScrollBar=function(b,a,c){if(!this.elementInfo.requiresVScrollBar)return!1;var d=parseFloat(this.elementInfo.bottomMargin/this.elementInfo.divHeight)*this.elementInfo.bottomMargin+"px";numOnly(d)>this.elementInfo.bottomMargin&&(d=this.elementInfo.bottomMargin+
"px");d!=this.vscrollBar.style.height&&(this.vscrollBar.style.height=d);b=this.elementInfo.bottomMargin-numOnly(this.vscrollBar.style.height)-(this.elementInfo.maxTop+b.y)/this.elementInfo.maxTop*(this.elementInfo.bottomMargin-numOnly(this.vscrollBar.style.height));b>this.elementInfo.bottomMargin&&(b=this.elementInfo.bottomMargin);0>b&&(b=0);this.scrollbarMoveCSS(this.vscrollBar,{x:0,y:b},a,c);return!0};d.prototype.setHScrollBar=function(b,a,c){if(!this.elementInfo.requiresHScrollBar)return!1;var d=
parseFloat(this.elementInfo.rightMargin/this.elementInfo.divWidth)*this.elementInfo.rightMargin+"px";d!=this.hscrollBar.style.width&&(this.hscrollBar.style.width=d);b=this.elementInfo.rightMargin-numOnly(this.hscrollBar.style.width)-(this.elementInfo.maxLeft+b.x)/this.elementInfo.maxLeft*(this.elementInfo.rightMargin-numOnly(this.hscrollBar.style.width));b>this.elementInfo.rightMargin&&(b=this.elementInfo.rightMargin);0>b&&(b=0);this.scrollbarMoveCSS(this.hscrollBar,{x:b,y:0},a,c);return!0};d.prototype.onTouchMove=
function(b){if(null!==this.currentScrollingObject){var a=this.calculateMovement(b);this.calculateTarget(a);this.lastScrollInfo=a;this.moved||(c.trigger(this,"scrollstart"),c.trigger(c.touchLayer,"scrollstart",[this.el]),this.elementInfo.requiresVScrollBar&&(this.vscrollBar.style.display="block"),this.elementInfo.requiresHScrollBar&&(this.hscrollBar.style.display="block"));this.moved=!0;this.refresh&&0===a.top?(this.refreshContainer.style.display="block",this.refreshHeight=this.refreshContainer.firstChild.clientHeight,
this.refreshContainer.firstChild.style.top=-this.refreshHeight+"px",this.refreshContainer.style.overflow="visible",this.preventPullToRefresh=!1):0>a.top&&(this.preventPullToRefresh=!0,this.refresh&&(this.refreshContainer.style.overflow="hidden"));this.saveEventInfo(b);if(!1===this.isScrolling&&(this.isScrolling=!0,this.onScrollStart))this.onScrollStart();b=this.getCSSMatrix(this.el);this.lastScrollInfo.top=numOnly(b.f);this.lastScrollInfo.left=numOnly(b.e);this.recalculateDeltaY(this.lastScrollInfo);
this.recalculateDeltaX(this.lastScrollInfo);this.checkYboundary(this.lastScrollInfo);this.elementInfo.hasHorScroll&&this.checkXboundary(this.lastScrollInfo);b=0<this.lastScrollInfo.y&&0<this.lastScrollInfo.deltaY;var d=this.lastScrollInfo.y<-this.elementInfo.maxTop&&0>this.lastScrollInfo.deltaY;if(b||d){a=b?this.lastScrollInfo.y:-this.lastScrollInfo.y-this.elementInfo.maxTop;a=(this.container.clientHeight-a)/this.container.clientHeight;0.5>a&&(a=0.5);var e=0;b&&0<this.lastScrollInfo.top||d&&this.lastScrollInfo.top<
-this.elementInfo.maxTop?e=this.lastScrollInfo.top:d&&(e=-this.elementInfo.maxTop);d=this.lastScrollInfo.deltaY*a;1>Math.abs(this.lastScrollInfo.deltaY*a)&&(d=b?1:-1);this.lastScrollInfo.y=e+d}if(this.elementInfo.hasHorScroll&&(b=0<this.lastScrollInfo.x&&0<this.lastScrollInfo.deltaX,d=this.lastScrollInfo.x<-this.elementInfo.maxLeft&&0>this.lastScrollInfo.deltaX,b||d))a=b?this.lastScrollInfo.x:-this.lastScrollInfo.x-this.elementInfo.maxLeft,a=(this.container.clientWidth-a)/this.container.clientWidth,
0.5>a&&(a=0.5),e=0,b&&0<this.lastScrollInfo.left||d&&this.lastScrollInfo.left<-this.elementInfo.maxLeft?e=this.lastScrollInfo.left:d&&(e=-this.elementInfo.maxLeft),d=this.lastScrollInfo.deltaX*a,1>Math.abs(this.lastScrollInfo.deltaX*a)&&(d=b?1:-1),this.lastScrollInfo.x=e+d;this.lockBounce&&(0<this.lastScrollInfo.x?this.lastScrollInfo.x=0:-1*this.lastScrollInfo.x>this.elementInfo.maxLeft&&(this.lastScrollInfo.x=-1*this.elementInfo.maxLeft),0<this.lastScrollInfo.y?this.lastScrollInfo.y=0:-1*this.lastScrollInfo.y>
this.elementInfo.maxTop&&(this.lastScrollInfo.y=-1*this.elementInfo.maxTop));this.scrollerMoveCSS(this.lastScrollInfo,0);this.setVScrollBar(this.lastScrollInfo,0,0);this.setHScrollBar(this.lastScrollInfo,0,0);this.refresh&&!this.preventPullToRefresh&&(!this.refreshTriggered&&this.lastScrollInfo.top>this.refreshHeight?(this.refreshTriggered=!0,c.trigger(this,"refresh-trigger")):this.refreshTriggered&&this.lastScrollInfo.top<this.refreshHeight&&(this.refreshTriggered=!1,c.trigger(this,"refresh-cancel")));
this.infinite&&!this.infiniteTriggered&&Math.abs(this.lastScrollInfo.top)>this.el.clientHeight-this.container.clientHeight&&(this.infiniteTriggered=!0,c.trigger(this,"infinite-scroll"))}};d.prototype.calculateMovement=function(b,a){var c={top:0,left:0,speedY:0,speedX:0,absSpeedY:0,absSpeedX:0,deltaY:0,deltaX:0,absDeltaY:0,absDeltaX:0,y:0,x:0,duration:0},d=a?this.firstEventInfo:this.lastEventInfo,e=a?b.pageX:b.touches[0].pageX,f=a?b.pageY:b.touches[0].pageY,g=a?b.time:b.timeStamp;c.deltaY=this.elementInfo.hasVertScroll?
f-d.pageY:0;c.deltaX=this.elementInfo.hasHorScroll?e-d.pageX:0;c.time=g;c.duration=g-d.time;return c};d.prototype.calculateTarget=function(b){b.y=this.lastScrollInfo.y+b.deltaY;b.x=this.lastScrollInfo.x+b.deltaX};d.prototype.checkYboundary=function(b){var a=this.container.clientHeight/2,c=this.elementInfo.maxTop+a;if(b.y>a)b.y=a;else if(-b.y>c)b.y=-c;else return;this.recalculateDeltaY(b)};d.prototype.checkXboundary=function(b){var a=this.container.clientWidth/2,c=this.elementInfo.maxLeft+a;if(b.x>
a)b.x=a;else if(-b.x>c)b.x=-c;else return;this.recalculateDeltaX(b)};d.prototype.recalculateDeltaY=function(b){var a=Math.abs(b.deltaY);b.deltaY=b.y-b.top;newAbsDeltaY=Math.abs(b.deltaY);b.duration=b.duration*newAbsDeltaY/a};d.prototype.recalculateDeltaX=function(b){var a=Math.abs(b.deltaX);b.deltaX=b.x-b.left;newAbsDeltaX=Math.abs(b.deltaX);b.duration=b.duration*newAbsDeltaX/a};d.prototype.hideRefresh=function(b){var a=this;this.preventHideRefresh||(this.scrollerMoveCSS({x:0,y:0,complete:function(){c.trigger(a,
"refresh-finish")}},75),this.refreshTriggered=!1)};d.prototype.setMomentum=function(b){b.speedY=this.divide(b.deltaY,b.duration);b.speedX=this.divide(b.deltaX,b.duration);b.absSpeedY=Math.abs(b.speedY);b.absSpeedX=Math.abs(b.speedX);b.absDeltaY=Math.abs(b.deltaY);b.absDeltaX=Math.abs(b.deltaX);if(0<b.absDeltaY){if(b.deltaY=(0>b.deltaY?-1:1)*b.absSpeedY*b.absSpeedY/0.0024,b.absDeltaY=Math.abs(b.deltaY),b.duration=b.absSpeedY/0.0012,b.speedY=b.deltaY/b.duration,b.absSpeedY=Math.abs(b.speedY),0.12>b.absSpeedY||
5>b.absDeltaY)b.deltaY=b.absDeltaY=b.duration=b.speedY=b.absSpeedY=0}else if(b.absDeltaX){if(b.deltaX=(0>b.deltaX?-1:1)*b.absSpeedX*b.absSpeedX/0.0024,b.absDeltaX=Math.abs(b.deltaX),b.duration=b.absSpeedX/0.0012,b.speedX=b.deltaX/b.duration,b.absSpeedX=Math.abs(b.speedX),0.12>b.absSpeedX||5>b.absDeltaX)b.deltaX=b.absDeltaX=b.duration=b.speedX=b.absSpeedX=0}else b.duration=0};d.prototype.onTouchEnd=function(b){if(null!==this.currentScrollingObject&&this.moved){this.finishScrollingObject=this.currentScrollingObject;
this.currentScrollingObject=null;b=this.calculateMovement(this.lastEventInfo,!0);this.androidFormsMode||this.setMomentum(b);this.calculateTarget(b);var a=this.getCSSMatrix(this.el);b.top=numOnly(a.f);b.left=numOnly(a.e);this.checkYboundary(b);this.elementInfo.hasHorScroll&&this.checkXboundary(b);a=!this.preventPullToRefresh&&(b.top>this.refreshHeight||b.y>this.refreshHeight);this.fireRefreshRelease(a,0<b.top);if(this.refresh&&a)b.y=this.refreshHeight,b.duration=75;else if(0<=b.y)b.y=0,0<=b.top&&(b.duration=
75);else if(-b.y>this.elementInfo.maxTop||0===this.elementInfo.maxTop)b.y=-this.elementInfo.maxTop,-b.top>this.elementInfo.maxTop&&(b.duration=75);if(this.elementInfo.hasHorScroll)if(0<=b.x)b.x=0,0<=b.left&&(b.duration=75);else if(-b.x>this.elementInfo.maxLeft||0===this.elementInfo.maxLeft)b.x=-this.elementInfo.maxLeft,-b.left>this.elementInfo.maxLeft&&(b.duration=75);this.androidFormsMode&&(b.duration=0);this.scrollerMoveCSS(b,b.duration,"cubic-bezier(0.33,0.66,0.66,1)");this.setVScrollBar(b,b.duration,
"cubic-bezier(0.33,0.66,0.66,1)");this.setHScrollBar(b,b.duration,"cubic-bezier(0.33,0.66,0.66,1)");this.setFinishCalback(b.duration);this.infinite&&!this.infiniteTriggered&&Math.abs(b.y)>=this.el.clientHeight-this.container.clientHeight&&(this.infiniteTriggered=!0,c.trigger(this,"infinite-scroll"))}};d.prototype.setFinishCalback=function(b){var a=this;this.scrollingFinishCB=setTimeout(function(){a.hideScrollbars();c.trigger(c.touchLayer,"scrollend",[a.el]);c.trigger(a,"scrollend",[a.el]);a.isScrolling=
!1;a.elementInfo=null;a.infinite&&c.trigger(a,"infinite-scroll-end")},b)};d.prototype.startFormsMode=function(){if(!this.blockFormsFix){var b=this.getCSSMatrix(this.el);this.refreshSafeKeep=this.refresh;this.refresh=!1;this.androidFormsMode=!0;this.el.style[c.feat.cssPrefix+"Transform"]="none";this.el.style[c.feat.cssPrefix+"Transition"]="none";this.el.style[c.feat.cssPrefix+"Perspective"]="none";this.scrollerMoveCSS({x:numOnly(b.e),y:numOnly(b.f)},0);this.container.style[c.feat.cssPrefix+"Perspective"]=
"none";this.container.style[c.feat.cssPrefix+"BackfaceVisibility"]="visible";this.vscrollBar&&(this.vscrollBar.style[c.feat.cssPrefix+"Transform"]="none",this.vscrollBar.style[c.feat.cssPrefix+"Transition"]="none",this.vscrollBar.style[c.feat.cssPrefix+"Perspective"]="none",this.vscrollBar.style[c.feat.cssPrefix+"BackfaceVisibility"]="visible");this.hscrollBar&&(this.hscrollBar.style[c.feat.cssPrefix+"Transform"]="none",this.hscrollBar.style[c.feat.cssPrefix+"Transition"]="none",this.hscrollBar.style[c.feat.cssPrefix+
"Perspective"]="none",this.hscrollBar.style[c.feat.cssPrefix+"BackfaceVisibility"]="visible")}};d.prototype.stopFormsMode=function(){if(!this.blockFormsFix){var b=this.getCSSMatrix(this.el);this.refresh=this.refreshSafeKeep;this.androidFormsMode=!1;this.el.style[c.feat.cssPrefix+"Perspective"]=1E3;this.el.style.marginTop=0;this.el.style.marginLeft=0;this.el.style[c.feat.cssPrefix+"Transition"]="0ms linear";this.scrollerMoveCSS({x:numOnly(b.e),y:numOnly(b.f)},0);this.container.style[c.feat.cssPrefix+
"Perspective"]=1E3;this.container.style[c.feat.cssPrefix+"BackfaceVisibility"]="hidden";this.vscrollBar&&(this.vscrollBar.style[c.feat.cssPrefix+"Perspective"]=1E3,this.vscrollBar.style[c.feat.cssPrefix+"BackfaceVisibility"]="hidden");this.hscrollBar&&(this.hscrollBar.style[c.feat.cssPrefix+"Perspective"]=1E3,this.hscrollBar.style[c.feat.cssPrefix+"BackfaceVisibility"]="hidden")}};d.prototype.scrollerMoveCSS=function(b,d,e){d||(d=0);e||(e="linear");d=numOnly(d);this.el&&this.el.style&&(this.eventsActive&&
(this.androidFormsMode?(this.el.style.marginTop=Math.round(b.y)+"px",this.el.style.marginLeft=Math.round(b.x)+"px"):(this.el.style[c.feat.cssPrefix+"Transform"]="translate"+r+b.x+"px,"+b.y+"px"+a,this.el.style[c.feat.cssPrefix+"TransitionDuration"]=d+"ms",this.el.style[c.feat.cssPrefix+"TransitionTimingFunction"]=e)),this.logPos(b.x,b.y))};d.prototype.logPos=function(b,a){var c;c=this.elementInfo?{h:this.elementInfo.bottomMargin,w:this.elementInfo.rightMargin}:this.getViewportSize();this.loggedPcentX=
this.divide(b,this.el.clientWidth-c.w);this.loggedPcentY=this.divide(a,this.el.clientHeight-c.h);this.scrollTop=a;this.scrollLeft=b};d.prototype.scrollbarMoveCSS=function(b,d,e,f){e||(e=0);f||(f="linear");b&&b.style&&(this.androidFormsMode?(b.style.marginTop=Math.round(d.y)+"px",b.style.marginLeft=Math.round(d.x)+"px"):(b.style[c.feat.cssPrefix+"Transform"]="translate"+r+d.x+"px,"+d.y+"px"+a,b.style[c.feat.cssPrefix+"TransitionDuration"]=e+"ms",b.style[c.feat.cssPrefix+"TransitionTimingFunction"]=
f))};d.prototype.scrollTo=function(b,a){a||(a=0);this.scrollerMoveCSS(b,a)};d.prototype.scrollBy=function(b,a){var c=this.getCSSMatrix(this.el),d=numOnly(c.f),c=numOnly(c.e);this.scrollTo({y:d-b.y,x:c-b.x},a)};d.prototype.scrollToBottom=function(b){this.scrollTo({y:-1*(this.el.clientHeight-this.container.clientHeight),x:0},b)};d.prototype.scrollToTop=function(b){this.scrollTo({x:0,y:0},b)};return function(b,a){var g;if(!k&&c.touchLayer&&c.isObject(c.touchLayer))n();else if(!c.touchLayer||!c.isObject(c.touchLayer))c.touchLayer=
{};if(g="string"==typeof b||b instanceof String?document.getElementById(b):b)return af.os.desktop?new e(g,a):a.useJsScroll?new d(g,a):new f(g,a);alert("Could not find element for scroller "+b)}}()})(af);
(function(c){c.fn.popup=function(c){return new l(this[0],c)};var n=[],l=function(){var g=function(g,k){if(this.container="string"===typeof g||g instanceof String?document.getElementById(g):g)try{if("string"===typeof k||"number"===typeof k)k={message:k,cancelOnly:"true",cancelText:"OK"};this.id=id=k.id=k.id||c.uuid();this.addCssClass=k.addCssClass?k.addCssClass:"";this.title=k.suppressTitle?"":k.title||"Alert";this.message=k.message||"";this.cancelText=k.cancelText||"Cancel";this.cancelCallback=k.cancelCallback||
function(){};this.cancelClass=k.cancelClass||"button";this.doneText=k.doneText||"Done";this.doneCallback=k.doneCallback||function(a){};this.doneClass=k.doneClass||"button";this.cancelOnly=k.cancelOnly||!1;this.onShow=k.onShow||function(){};this.autoCloseDone=void 0!==k.autoCloseDone?k.autoCloseDone:!0;n.push(this);1==n.length&&this.show()}catch(a){console.log("error adding popup "+a)}else alert("Error finding container for popup "+g)};g.prototype={id:null,addCssClass:null,title:null,message:null,
cancelText:null,cancelCallback:null,cancelClass:null,doneText:null,doneCallback:null,doneClass:null,cancelOnly:!1,onShow:null,autoCloseDone:!0,supressTitle:!1,show:function(){var g=this,k='<div id="'+this.id+'" class="afPopup hidden '+this.addCssClass+'"><header>'+this.title+"</header><div>"+this.message+'</div><footer style="clear:both;"><a href="javascript:;" class="'+this.cancelClass+'" id="cancel">'+this.cancelText+'</a><a href="javascript:;" class="'+this.doneClass+'" id="action">'+this.doneText+
"</a> </footer></div></div>";c(this.container).append(c(k));var a=c.query("#"+this.id);a.bind("close",function(){g.hide()});this.cancelOnly&&(a.find("A#action").hide(),a.find("A#cancel").addClass("center"));a.find("A").each(function(){var a=c(this);a.bind("click",function(c){"cancel"==a.attr("id")?(g.cancelCallback.call(g.cancelCallback,g),g.hide()):(g.doneCallback.call(g.doneCallback,g),g.autoCloseDone&&g.hide());c.preventDefault()})});g.positionPopup();c.blockUI(0.5);a.bind("orientationchange",
function(){g.positionPopup()});a.find("header").show();a.find("footer").show();setTimeout(function(){a.removeClass("hidden");g.onShow(g)},50)},hide:function(){var g=this;c.query("#"+g.id).addClass("hidden");c.unblockUI();!c.os.ie&&!c.os.android?setTimeout(function(){g.remove()},250):g.remove()},remove:function(){var g=c.query("#"+this.id);g.unbind("close");g.find("BUTTON#action").unbind("click");g.find("BUTTON#cancel").unbind("click");g.unbind("orientationchange").remove();n.splice(0,1);0<n.length&&
n[0].show()},positionPopup:function(){var g=c.query("#"+this.id);g.css("top",window.innerHeight/2.5+window.pageYOffset-g[0].clientHeight/2+"px");g.css("left",window.innerWidth/2-g[0].clientWidth/2+"px")}};return g}(),k=!1;c.blockUI=function(g){k||(g=g?" style='opacity:"+g+";'":"",c.query("BODY").prepend(c("<div id='mask'"+g+"></div>")),c.query("BODY DIV#mask").bind("touchstart",function(c){c.preventDefault()}),c.query("BODY DIV#mask").bind("touchmove",function(c){c.preventDefault()}),k=!0)};c.unblockUI=
function(){k=!1;c.query("BODY DIV#mask").unbind("touchstart");c.query("BODY DIV#mask").unbind("touchmove");c("BODY DIV#mask").remove()}})(af);
(function(c){c.fn.actionsheet=function(c){for(var k,g=0;g<this.length;g++)k=new n(this[g],c);return 1==this.length?k:this};var n=function(){var l=function(k,g){if(this.el="string"==typeof k||k instanceof String?document.getElementById(k):k){if(this instanceof l){if("object"==typeof g)for(var q in g)this[q]=g[q]}else return new l(k,g);var n=this,a;if("string"==typeof g)a=c('<div id="af_actionsheet"><div style="width:100%">'+g+"<a href='javascript:;' class='cancel'>Cancel</a></div></div>");else if("object"==
typeof g){a=c('<div id="af_actionsheet"><div style="width:100%"></div></div>');q=c(a.children().get(0));g.push({text:"Cancel",cssClasses:"cancel"});for(var d=0;d<g.length;d++){var f=c('<a href="javascript:;" >'+(g[d].text||"TEXT NOT ENTERED")+"</a>");f[0].onclick=g[d].handler||function(){};g[d].cssClasses&&0<g[d].cssClasses.length&&f.addClass(g[d].cssClasses);q.append(f)}}c(k).find("#af_actionsheet").remove();c(k).find("#af_action_mask").remove();actionsheetEl=c(k).append(a);a.vendorCss("Transition",
"all 0ms");a.cssTranslate("0,0");a.css("top",window.innerHeight+"px");this.el.style.overflow="hidden";a.on("click","a",function(){n.hideSheet();return!1});this.activeSheet=a;c(k).append('<div id="af_action_mask" style="position:absolute;top:0px;left:0px;right:0px;bottom:0px;z-index:9998;background:rgba(0,0,0,.4)"/>');setTimeout(function(){a.vendorCss("Transition","all 300ms");a.cssTranslate("0,"+-a.height()+"px")},10)}else alert("Could not find element for actionsheet "+k)};l.prototype={activeSheet:null,
hideSheet:function(){var k=this;this.activeSheet.off("click","a",function(){k.hideSheet()});c(this.el).find("#af_action_mask").remove();this.activeSheet.vendorCss("Transition","all 0ms");var g=this.activeSheet,l=this.el;setTimeout(function(){g.vendorCss("Transition","all 300ms");g.cssTranslate("0,0px");setTimeout(function(){g.remove();g=null;l.style.overflow="none"},500)},10)}};return l}()})(af);
(function(c){c.passwordBox=function(){return new n};var n=function(){this.oldPasswords={}};n.prototype={showPasswordPlainText:!1,getOldPasswords:function(l){var k=l&&document.getElementById(l)?document.getElementById(l):document;if(k){l=k.getElementsByTagName("input");for(k=0;k<l.length;k++)"password"==l[k].type&&c.os.webkit&&(l[k].type="text",c(l[k]).vendorCss("TextSecurity","disc"))}else alert("Could not find container element for passwordBox "+l)},changePasswordVisiblity:function(l,k){l=parseInt(l,
10);var g=document.getElementById(k);1==l?c(g).vendorCss("TextSecurity","none"):c(g).vendorCss("TextSecurity","disc");c.os.webkit||(g.type=1==l?"text":"password")}}})(af);
(function(c){function n(g,k,l){!0===l&&(this.getAttribute("multiple")||c.selectBox.updateMaskValue(this.parentNode.id,this.text,this.value),this.parentNode.value=this.value);return l}function l(g,k,l){this.options[l]&&(this.getAttribute("multiple")||c.selectBox.updateMaskValue(this.linker,this.options[l].value,this.options[l].text),this.value=this.options[l].value);return l}function k(g){var k=g.target;c(k.linker).remove();delete k.linker;g.stopPropagation()}c.selectBox={scroller:null,currLinker:null,
getOldSelects:function(g){if(c.os.android&&!c.os.androidICS)if(c.fn.scroller){var q=g&&document.getElementById(g)?document.getElementById(g):document;if(q){g=q.getElementsByTagName("select");for(q=0;q<g.length;q++){var r=g[q];r.style.display="none";var a=c.create("div",{className:"afFakeSelect"});a.get(0).linker=g[q];r.linker=a.get(0);a.insertAfter(g[q]);r.watch("selectedIndex",l);for(var d=0;d<r.options.length;d++)r.options[d].watch("selected",n),r.options[d].selected&&a.html(r.options[d].text);
c(r).one("destroy",k)}this.createHtml()}else alert("Could not find container element for af.selectBox "+g)}else alert("This library requires af.scroller")},updateDropdown:function(c){if(c)for(var k=0;k<c.options.length;k++)c.options[k].selected&&(c.linker.innerHTML=c.options[k].text)},initDropDown:function(g){if(!g.disabled&&g&&g.options&&0!==g.options.length){var k=0,l=c("#afSelectBoxfix");l.html("<ul></ul>");for(var l=l.find("ul"),a=0;a<g.options.length;a++){g.options[a].watch("selected",n);var d=
g.options[a].selected?"selected":"";d&&(k=a+1);d=c.create("li",{html:g.options[a].text,className:d});d.data("ind",a);l.append(d)}c("#afModalMask").show();try{if(0<k&&"multiple"!=g.getAttribute("multiple")){g=0;var f=numOnly(l.find("li").computedStyle("height")),e=numOnly(c("#afSelectBoxContainer").computedStyle("height"));k*f>=e&&(g=(k-1)*-f);this.scroller.scrollTo({x:0,y:g})}}catch(b){console.log("error init dropdown"+b)}k="block"==c("#afSelectClose").css("display")?numOnly(c("#afSelectClose").height()):
0;c("#afSelectWrapper").height(numOnly(c("#afSelectBoxContainer").height())-k+"px")}},updateMaskValue:function(g,k,l){c(g).html(l)},setDropDownValue:function(g,k){if(g){var l=c(g);k=parseInt(k,10);g.getAttribute("multiple")?(l=c("#afSelectBoxfix li:nth-child("+(k+1)+")"),l.hasClass("selected")?l.removeClass("selected"):l.addClass("selected")):(g.selectedIndex=k,l.find("option").prop("selected",!1),l.find("option:nth-child("+(k+1)+")").prop("selected",!0),this.scroller.scrollTo({x:0,y:0}),this.hideDropDown());
c(g).trigger("change")}},hideDropDown:function(){c("#afModalMask").hide();c("#afSelectBoxfix").html("")},createHtml:function(){var g=this;document.getElementById("afSelectBoxfix")||c(document).ready(function(){c(document).on("click",".afFakeSelect",function(a){this.linker.disabled||(g.currLinker=this,"multiple"==this.linker.getAttribute("multiple")?c("#afSelectClose").show():c("#afSelectClose").hide(),g.initDropDown(this.linker))});var k=c.create("div",{id:"afSelectBoxContainer"}),l=c.create("div",
{id:"afSelectBoxfix"}),a=c.create("div",{id:"afSelectWrapper"});a.css("position","relative");a.append(l);var l=c.create("div",{id:"afSelectClose",html:"<a id='afSelectDone'>Done</a> <a id='afSelectCancel'>Cancel</a>"}),d=c.create("div",{id:"afModalMask"}),f=c("#afui");k.prepend(l).append(a);d.append(k);0<f.length?f.append(d):document.body.appendChild(d.get(0));g.scroller=c.query("#afSelectBoxfix").scroller({scroller:!1,verticalScroll:!0,vScrollCSS:"jqselectscrollBarV"});c("#afModalMask").on("click",
function(a){0===c(a.target).closest("#afSelectBoxContainer").length&&g.hideDropDown()});c("#afSelectBoxfix").on("click","li",function(a){a=c(a.target);g.setDropDownValue(g.currLinker.linker,a.data("ind"))});c("#afSelectBoxContainer").on("click","a",function(a){if("afSelectCancel"==a.target.id)return g.hideDropDown();var b=c(g.currLinker.linker);b.find("option").prop("selected",!1);c("#afSelectBoxfix li").each(function(a){a=c(this);if(a.hasClass("selected")){var d=parseInt(a.data("ind"),10);b.find("option:nth-child("+
(d+1)+")").prop("selected",!0);g.currLinker.innerHTML=a.html()}});g.hideDropDown();a.stopPropagation();a.preventDefault();return!1})})}};HTMLElement.prototype.watch||(HTMLElement.prototype.watch=function(c,k){var l=this[c],a=l,d=function(){return a},f=function(d){l=a;return a=k.call(this,c,l,d)};delete this[c]&&(HTMLElement.defineProperty?HTMLElement.defineProperty(this,c,{get:d,set:f,enumerable:!1,configurable:!0}):HTMLElement.prototype.__defineGetter__&&HTMLElement.prototype.__defineSetter__&&(HTMLElement.prototype.__defineGetter__.call(this,
c,d),HTMLElement.prototype.__defineSetter__.call(this,c,f)))});HTMLElement.prototype.unwatch||(HTMLElement.prototype.unwatch=function(c){var k=this[c];delete this[c];this[c]=k})})(af);
(function(c){function n(a,c,f,e){var b=Math.abs(a-c),h=Math.abs(f-e);return b>=h?0<a-c?"Left":"Right":0<f-e?"Up":"Down"}function l(){k.last&&Date.now()-k.last>=q&&(k.el.trigger("longTap"),k={})}var k={},g,q=750,r;c(document).ready(function(){var a;c(document.body).bind("touchstart",function(d){d.originalEvent&&(d=d.originalEvent);if(d.touches&&0!==d.touches.length){var f=Date.now(),e=f-(k.last||f);d.touches&&0!==d.touches.length&&(k.el=c("tagName"in d.touches[0].target?d.touches[0].target:d.touches[0].target.parentNode),
g&&clearTimeout(g),k.x1=d.touches[0].pageX,k.y1=d.touches[0].pageY,k.x2=k.y2=0,0<e&&250>=e&&(k.isDoubleTap=!0),k.last=f,r=setTimeout(l,q),c.ui.useAutoPressed&&!k.el.data("ignore-pressed")&&k.el.addClass("pressed"),a&&(c.ui.useAutoPressed&&!a.data("ignore-pressed")&&a[0]!=k.el[0])&&a.removeClass("pressed"),a=k.el)}}).bind("touchmove",function(a){a.originalEvent&&(a=a.originalEvent);k.x2=a.touches[0].pageX;k.y2=a.touches[0].pageY;clearTimeout(r)}).bind("touchend",function(a){a.originalEvent&&(a=a.originalEvent);
k.el&&(c.ui.useAutoPressed&&!k.el.data("ignore-pressed")&&k.el.removeClass("pressed"),k.isDoubleTap?(k.el.trigger("doubleTap"),k={}):0<k.x2||0<k.y2?((30<Math.abs(k.x1-k.x2)||30<Math.abs(k.y1-k.y2))&&k.el.trigger("swipe")&&k.el.trigger("swipe"+n(k.x1,k.x2,k.y1,k.y2)),k.x1=k.x2=k.y1=k.y2=k.last=0):"last"in k&&(k.el.trigger("tap"),g=setTimeout(function(){g=null;k.el&&k.el.trigger("singleTap");k={}},250)))}).bind("touchcancel",function(){k.el&&(c.ui.useAutoPressed&&!k.el.data("ignore-pressed"))&&k.el.removeClass("pressed");
k={};clearTimeout(r)})});"swipe swipeLeft swipeRight swipeUp swipeDown doubleTap tap singleTap longTap".split(" ").forEach(function(a){c.fn[a]=function(c){return this.bind(a,c)}})})(jq);
(function(c){c.touchLayer=function(a){c.touchLayer=new f(a);return c.touchLayer};var n=["input","select","textarea"],l=["button","radio","checkbox","range","date"],k=c.os.ios,g=c.os.blackberry,q=c.os.blackberry||c.os.fennec||c.os.android&&!c.os.chrome,r=c.os.ios,a=!1,d=!1,f=function(a){this.clearTouchVars();a.addEventListener("touchstart",this,!1);a.addEventListener("touchmove",this,!1);a.addEventListener("touchend",this,!1);a.addEventListener("click",this,!1);a.addEventListener("focusin",this,!1);
document.addEventListener("scroll",this,!1);window.addEventListener("resize",this,!1);window.addEventListener("orientationchange",this,!1);this.layer=a;this.scrollEndedProxy_=c.proxy(this.scrollEnded,this);this.exitEditProxy_=c.proxy(this.exitExit,this,[]);this.launchFixUIProxy_=c.proxy(this.launchFixUI,this);var b=this;this.scrollTimeoutExpireProxy_=function(){b.scrollTimeout_=null;b.scrollTimeoutEl_.addEventListener("scroll",b.scrollEndedProxy_,!1)};this.retestAndFixUIProxy_=function(){af.os.android&&
(b.layer.style.height="100%");c.asap(b.testAndFixUI,b,arguments)};document.addEventListener("click",function(a){if(d)return a.preventDefault(),a.stopPropagation(),!1;void 0!==a.clientX&&null!=b.lastTouchStartX&&(2>Math.abs(b.lastTouchStartX-a.clientX)&&2>Math.abs(b.lastTouchStartY-a.clientY))&&(a.preventDefault(),a.stopPropagation())},!0);c.bind(this,"scrollstart",function(a){b.isScrolling=!0;b.scrollingEl_=a;c.feat.nativeTouchScroll||(b.scrollerIsScrolling=!0);b.fireEvent("UIEvents","scrollstart",
a,!1,!1)});c.bind(this,"scrollend",function(a){b.isScrolling=!1;c.feat.nativeTouchScroll||(b.scrollerIsScrolling=!1);b.fireEvent("UIEvents","scrollend",a,!1,!1)});this.launchFixUI(5)};f.prototype={dX:0,dY:0,cX:0,cY:0,touchStartX:null,touchStartY:null,layer:null,scrollingEl_:null,scrollTimeoutEl_:null,scrollTimeout_:null,reshapeTimeout_:null,scrollEndedProxy_:null,exitEditProxy_:null,launchFixUIProxy_:null,reHideAddressBarTimeout_:null,retestAndFixUIProxy_:null,panElementId:"header",blockClicks:!1,
allowDocumentScroll_:!1,ignoreNextResize_:!1,blockPossibleClick_:!1,isScrolling:!1,isScrollingVertical_:!1,wasPanning_:!1,isPanning_:!1,isFocused_:!1,justBlurred_:!1,requiresNativeTap:!1,holdingReshapeType_:null,trackingClick:!1,scrollerIsScrolling:!1,handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onTouchEnd(a);break;case "click":this.onClick(a);break;case "blur":this.onBlur(a);break;case "scroll":this.onScroll(a);
break;case "orientationchange":this.onOrientationChange(a);break;case "resize":this.onResize(a);break;case "focusin":this.onFocusIn(a)}},launchFixUI:function(a){a||(a=2);if(null===this.reHideAddressBarTimeout_)return this.testAndFixUI(0,a)},resetFixUI:function(){this.reHideAddressBarTimeout_&&clearTimeout(this.reHideAddressBarTimeout_);this.reHideAddressBarTimeout_=null},testAndFixUI:function(a,b){var c=this.getReferenceHeight(),d=this.getCurrentHeight();if(c!=d&&!(0.97*d<c&&0.97*c<d))return this.hideAddressBar(a,
b),!0;af.os.android&&this.resetFixUI();return!1},hideAddressBar:function(a,b){if(!af.ui||!af.ui.isIntel)if(a>=b)this.resetFixUI();else if(af.os.desktop||af.os.chrome)this.layer.style.height="100%";else if(af.os.android){window.scrollTo(1,1);this.layer.style.height=this.isFocused_||window.innerHeight>window.outerHeight?window.innerHeight+"px":window.outerHeight/window.devicePixelRatio+"px";that=this;var c=a+1;this.reHideAddressBarTimeout_=setTimeout(this.retestAndFixUIProxy_,250*c,[c,b])}else this.isFocused_||
(document.documentElement.style.height="5000px",window.scrollTo(0,0),document.documentElement.style.height=window.innerHeight+"px",this.layer.style.height=window.innerHeight+"px")},getReferenceHeight:function(){return af.os.android?Math.ceil(window.outerHeight/window.devicePixelRatio):window.innerHeight},getCurrentHeight:function(){return af.os.android?window.innerHeight:numOnly(document.documentElement.style.height)},onOrientationChange:function(a){!this.holdingReshapeType_&&this.reshapeTimeout_?
this.fireReshapeEvent("orientationchange"):this.previewReshapeEvent("orientationchange")},onResize:function(a){this.ignoreNextResize_?this.ignoreNextResize_=!1:this.launchFixUI()&&this.reshapeAction()},onClick:function(a){var b=a.target&&void 0!==a.target.tagName?a.target.tagName.toLowerCase():"";if(-1!==n.indexOf(b)&&(!this.isFocused_||a.target!==this.focusedElement)){b=a.target&&void 0!==a.target.type?a.target.type.toLowerCase():"";if(-1===l.indexOf(b)){this.isFocused_&&this.focusedElement.removeEventListener("blur",
this,!1);this.focusedElement=a.target;this.focusedElement.addEventListener("blur",this,!1);if(!this.isFocused_&&!this.justBlurred_)if(c.trigger(this,"enter-edit",[a.target]),c.os.ios){var d=this;setTimeout(function(){d.fireReshapeEvent("enter-edit")},300)}else this.previewReshapeEvent("enter-edit");this.isFocused_=!0}else this.isFocused_=!1;this.justBlurred_=!1;this.allowDocumentScroll_=!0;k&&a.target.focus()}else c.os.blackberry10&&this.isFocused_&&this.focusedElement.blur()},previewReshapeEvent:function(a){that=
this;this.reshapeTimeout_=setTimeout(function(){that.fireReshapeEvent(a);that.reshapeTimeout_=null;that.holdingReshapeType_=null},750);this.holdingReshapeType_=a},fireReshapeEvent:function(a){c.trigger(this,"reshape");c.trigger(this,a?a+"-reshape":"unknown-reshape")},reshapeAction:function(){this.reshapeTimeout_?(clearTimeout(this.reshapeTimeout_),this.fireReshapeEvent(this.holdingReshapeType_),this.reshapeTimeout_=this.holdingReshapeType_=null):this.previewReshapeEvent()},onFocusIn:function(a){if(!this.isFocused_)this.onClick(a)},
onBlur:function(a){af.os.android&&a.target==window||(this.isFocused_=!1,this.focusedElement&&this.focusedElement.removeEventListener("blur",this,!1),this.focusedElement=null,this.justBlurred_=!0,c.asap(this.exitEditProxy_,this,[a.target]))},exitExit:function(a){this.justBlurred_=!1;if(!this.isFocused_)if(c.trigger(this,"exit-edit",[a]),this.allowDocumentScroll_=!1,c.os.ios){var b=this;setTimeout(function(){b.fireReshapeEvent("exit-edit")},300)}else this.previewReshapeEvent("exit-edit")},onScroll:function(a){!this.allowDocumentScroll_&&
(!this.isPanning_&&a.target==document)&&(this.allowDocumentScroll_=!0,this.wasPanning_?(this.wasPanning_=!1,setTimeout(this.launchFixUIProxy_,2E3,[2])):this.launchFixUI())},onTouchStart:function(e){this.dX=e.touches[0].pageX;this.dY=e.touches[0].pageY;this.lastTimestamp=e.timeStamp;this.lastTouchStartX=this.lastTouchStartY=null;if(c.os.ios){if(a===e.touches[0].identifier)return d=!0,e.preventDefault(),!1;a=e.touches[0].identifier;d=!1}if(this.scrollerIsScrolling)return this.moved=!0,this.scrollerIsScrolling=
!1,e.preventDefault(),!1;this.trackingClick=!0;(r||c.feat.nativeTouchScroll)&&this.checkDOMTree(e.target,this.layer);this.isScrolling&&(null!==this.scrollTimeout_?(clearTimeout(this.scrollTimeout_),this.scrollTimeout_=null,this.scrollTimeoutEl_!=this.scrollingEl_?this.scrollEnded(!1):this.blockPossibleClick_=!0):this.scrollTimeoutEl_&&(this.scrollEnded(!0),this.blockPossibleClick_=!0));if(af.os.android&&e&&e.target&&e.target.getAttribute&&"ignore"==e.target.getAttribute("data-touchlayer")||this.isFocused_&&
!c.os.blackberry10)this.allowDocumentScroll_=this.requiresNativeTap=!0;else if(q&&e.target&&void 0!==e.target.tagName){var b=e.target.tagName.toLowerCase();-1!==n.indexOf(b)&&(this.requiresNativeTap=!0)}else e.target&&(void 0!==e.target.tagName&&"input"==e.target.tagName.toLowerCase()&&"range"==e.target.type)&&(this.requiresNativeTap=!0);!this.isPanning_&&!this.requiresNativeTap?(this.isScrolling&&!c.feat.nativeTouchScroll||!this.isScrolling)&&e.preventDefault():this.isScrollingVertical_&&this.demandVerticalScroll()},
demandVerticalScroll:function(){0>=this.scrollingEl_.scrollTop?this.scrollingEl_.scrollTop=1:this.scrollingEl_.scrollTop+this.scrollingEl_.clientHeight>=this.scrollingEl_.scrollHeight&&(this.scrollingEl_.scrollTop=this.scrollingEl_.scrollHeight-this.scrollingEl_.clientHeight-1)},ignoreScrolling:function(a){return void 0===a.scrollWidth||void 0===a.clientWidth||void 0===a.scrollHeight||void 0===a.clientHeight?!0:!1},allowsVerticalScroll:function(a,b){var c=b.overflowY;return"scroll"==c||"auto"==c&&
a.scrollHeight>a.clientHeight?!0:!1},allowsHorizontalScroll:function(a,b){var c=b.overflowX;return"scroll"==c||"auto"==c&&a.scrollWidth>a.clientWidth?!0:!1},checkDOMTree:function(a,b){if(r&&this.panElementId==a.id)this.isPanning_=!0;else{if(c.feat.nativeTouchScroll){if(this.ignoreScrolling(a))return;var d=window.getComputedStyle(a);if(this.allowsVerticalScroll(a,d)){this.isScrollingVertical_=!0;this.scrollingEl_=a;this.isScrolling=!0;return}this.allowsHorizontalScroll(a,d)&&(this.isScrollingVertical_=
!1,this.scrollingEl_=null,this.isScrolling=!0)}a!=b&&a.parentNode&&this.checkDOMTree(a.parentNode,b)}},scrollEnded:function(a){null!==this.scrollTimeoutEl_&&(a&&this.scrollTimeoutEl_.removeEventListener("scroll",this.scrollEndedProxy_,!1),this.fireEvent("UIEvents","scrollend",this.scrollTimeoutEl_,!1,!1),this.scrollTimeoutEl_=null)},onTouchMove:function(a){var b=this.moved;this.moved=!0;g&&(this.cY=a.touches[0].pageY-this.dY,this.cX=a.touches[0].pageX-this.dX);this.isPanning_||(this.isScrolling&&
(b||this.fireEvent("UIEvents","scrollstart",this.scrollingEl_,!1,!1),this.speedY=(this.lastY-a.touches[0].pageY)/(a.timeStamp-this.lastTimestamp),this.lastY=a.touches[0].pageY,this.lastX=a.touches[0].pageX,this.lastTimestamp=a.timeStamp),c.os.blackberry10||(!this.isScrolling||!c.feat.nativeTouchScroll)&&a.preventDefault())},onTouchEnd:function(a){var b=this.moved;g&&(b=b&&!(10>Math.abs(this.cX)&&10>Math.abs(this.cY)));if(!af.os.ios||!this.requiresNativeTap)this.allowDocumentScroll_=!1;if(this.isPanning_&&
b)this.wasPanning_=!0;else if(!b&&!this.requiresNativeTap){this.scrollerIsScrolling=!1;if(!this.trackingClick)return;a.preventDefault();!this.blockClicks&&!this.blockPossibleClick_&&(b=a.target,3==b.nodeType&&(b=b.parentNode),this.fireEvent("Event","click",b,!0,a.mouseToTouch,a.changedTouches[0]),this.lastTouchStartX=this.dX,this.lastTouchStartY=this.dY)}else b&&(this.isScrolling&&(this.scrollTimeoutEl_=this.scrollingEl_,0.01>Math.abs(this.speedY)?this.scrollEnded(!1):this.scrollTimeout_=setTimeout(this.scrollTimeoutExpireProxy_,
30)),this.requiresNativeTap&&(this.isFocused_||c.trigger(this,"cancel-enter-edit",[a.target])));c.os.blackberry10&&(this.lastTouchStartX=this.dX,this.lastTouchStartY=this.dY);this.clearTouchVars()},clearTouchVars:function(){this.speedY=this.lastY=this.cY=this.cX=this.dX=this.dY=0;this.trackingClick=this.blockPossibleClick_=this.requiresNativeTap=this.isScrollingVertical_=this.isScrolling=this.isPanning_=this.moved=!1},fireEvent:function(a,b,d,f,g,k){var l=document.createEvent(a);l.initEvent(b,f,!0);
l.target=d;k&&c.each(k,function(a,b){l[a]=b});g&&(l.mouseToTouch=!0);d.dispatchEvent(l)}}})(af);
(function(c){var n=window.location.pathname+window.location.search,l=window.location.hash,k=l,g=function(){function a(e){"afui"===e.target.id&&(d(),c(document).unbind("DOMNodeInserted",a))}function d(){f.useOSThemes&&(c.os.android?c("#afui").addClass("android"):c.os.ie?(c("#afui").addClass("win8"),c("head").append(c.create("script",{src:"plugins/af.8tiles.js"}))):c.os.blackberry||c.os.blackberry10||c.os.playbook?(c("#afui").addClass("bb"),f.backButtonText="Back"):c.os.ios7?c("#afui").addClass("ios7"):
c.os.ios&&c("#afui").addClass("ios"));c.os.ios&&(c("head").find("#iosBlurrHack").remove(),c("head").append("<style id='iosBlurrHack'>#afui .panel > * {-webkit-backface-visibility: hidden;-webkit-perspective: 1000;}</style>"))}var f=this;this.availableTransitions={};this.availableTransitions["default"]=this.availableTransitions.none=this.noTransition;1===c("#afui").length?d():c(document).bind("DOMNodeInserted",a);if("intel"in window)document.addEventListener("intel.xdk.device.ready",function(){f.autoBoot()},
!0);else if("complete"==document.readyState||"loaded"==document.readyState)if(f.init)f.autoBoot();else c(window).one("afui:init",function(){f.autoBoot()});else c(document).ready(function(){if(f.init)f.autoBoot();else c(window).one("afui:init",function(){f.autoBoot()})},!1);"intel"in window||(window.intel={xdk:{}},window.intel.xdk.webRoot="");c(document).ready(function(){var a=document.getElementById("afui");if(null===a){a=document.createElement("div");a.id="afui";for(var b=document.body;b&&b.firstChild;)a.appendChild(b.firstChild);
c(document.body).prepend(a)}c.os.supportsTouch&&c.touchLayer(a);d()});window.addEventListener("popstate",function(){if(f.useInteralRouting){var a=f.getPanelId(document.location.hash);"#"!=document.location.href.replace(document.location.origin+"/","")&&(""===a&&1===f.history.length&&(a="#"+f.firstDiv.id),""!==a&&0!==af(a).filter(".panel").length&&a!="#"+f.activeDiv.id&&f.goBack())}},!1)};g.prototype={init:!1,transitionTime:"230ms",showLoading:!0,loadingText:"Loading Content",loadContentQueue:[],isIntel:!1,
titlebar:"",navbar:"",header:"",viewportContainer:"",remotePages:{},history:[],homeDiv:"",screenWidth:"",content:"",modalWindow:"",customFooter:!1,defaultFooter:"",defaultHeader:null,customMenu:!1,defaultMenu:"",_readyFunc:null,doingTransition:!1,passwordBox:c.passwordBox?new c.passwordBox:!1,selectBox:c.selectBox?c.selectBox:!1,ajaxUrl:"",transitionType:"slide",scrollingDivs:{},firstDiv:"",hasLaunched:!1,launchCompleted:!1,activeDiv:"",customClickHandler:"",menuAnimation:null,togglingSideMenu:!1,
sideMenuWidth:"200px",trimBackButtonText:!0,useOSThemes:!0,lockPageBounce:!1,animateHeaders:!0,useAutoPressed:!0,horizontalScroll:!1,_currentHeaderID:"defaultHeader",useInteralRouting:!0,autoBoot:function(){this.hasLaunched=!0;this.autoLaunch&&this.launch()},css3animate:function(a,d){a=c(a);return a.css3Animate(d)},setSideMenuWidth:function(a){this.sideMenuWidth=a;a=(a+"").replace("px","")+"px";c("head").find("#styleWidth").remove();c("head").append("<style id='styleWidth'>#afui #menu {width:"+a+
"  !important}</style>")},disableNativeScrolling:function(){c.feat.nativeTouchScroll=!1},manageHistory:!0,loadDefaultHash:!0,useAjaxCacheBuster:!1,actionsheet:function(a){return c.query("#afui").actionsheet(a)},popup:function(a){return c.query("#afui").popup(a)},blockUI:function(a){c.blockUI(a)},unblockUI:function(){c.unblockUI()},removeFooterMenu:function(){c.query("#navbar").hide();c.query("#content").css("bottom","0px");this.showNavMenu=!1},showNavMenu:!0,autoLaunch:!0,showBackbutton:!0,showBackButton:!0,
backButtonText:"",resetScrollers:!0,ready:function(a){if(this.launchCompleted)a();else c(document).on("afui:ready",function(c){a()})},setBackButtonStyle:function(a){c.query("#backButton").replaceClass(null,a)},goBack:function(a){if(a=Math.min(Math.abs(~~a||1),this.history.length))a=this.history.splice(-a).shift(),this.loadContent(a.target+"",0,1,a.transition),this.transitionType=a.transition,this.updateHash(a.target)},clearHistory:function(){this.history=[];this.setBackButtonVisibility(!1)},pushHistory:function(a,
d,f,e){this.history.push({target:a,transition:f});try{this.manageHistory&&(window.history.pushState(d,d,n+"#"+d+e),c(window).trigger("hashchange",null,{newUrl:n+"#"+d+e,oldURL:n+a}))}catch(b){}},updateHash:function(a){if(this.manageHistory){k=a=-1==a.indexOf("#")?"#"+a:a;var d=window.location.hash,f=this.getPanelId(a).substring(1);try{window.history.replaceState(f,f,n+a),c(window).trigger("hashchange",null,{newUrl:n+a,oldUrl:n+d})}catch(e){}}},getPanelId:function(a){var c=a.indexOf("/");return-1==
c?a:a.substring(0,c)},updateBadge:function(a,d,f,e){void 0===f&&(f="");a=c(a);var b=a.find("span.af-badge");0===b.length?("absolute"!=a.css("position")&&a.css("position","relative"),b=c.create("span",{className:"af-badge "+f,html:d}),a.append(b)):b.html(d);b.removeClass("tl bl br tr");b.addClass(f);void 0===e&&(e="red");c.isObject(e)?b.css(e):e&&b.css("background",e);b.data("ignore-pressed","true")},removeBadge:function(a){c(a).find("span.af-badge").remove()},toggleNavMenu:function(a){if(this.showNavMenu)if("none"!=
c.query("#navbar").css("display")&&(void 0!==a&&!0!==a||void 0===a))c.query("#content").css("bottom","0px"),c.query("#navbar").hide();else if(void 0===a||void 0!==a&&!0===a)c.query("#navbar").show(),c.query("#content").css("bottom",c.query("#navbar").css("height"))},toggleHeaderMenu:function(a){if("none"!=c.query("#header").css("display")&&(void 0!==a&&!0!==a||void 0===a))c.query("#content").css("top","0px"),c.query("#header").hide();else if(void 0===a||void 0!==a&&!0===a)c.query("#header").show(),
c.query("#content").css("top",c.query("#header").css("height"))},toggleSideMenu:function(a,d,f){if(this.isSideMenuEnabled()&&!this.togglingSideMenu){var e=this,b=c.query("#menu"),h=c.query("#content,  #header, #navbar");f=f||this.transitionTime;var g=this.isSideMenuOn();if(2===a||!g&&(void 0!==a&&!1!==a||void 0===a))this.togglingSideMenu=!0,b.show(),e.css3animate(h,{x:e.sideMenuWidth,time:f,complete:function(a){e.togglingSideMenu=!1;h.vendorCss("Transition","");d&&d(a)}});else if(void 0===a||void 0!==
a&&!1===a)this.togglingSideMenu=!0,e.css3animate(h,{x:"0px",time:f,complete:function(a){h.vendorCss("Transition","");h.vendorCss("Transform","");e.togglingSideMenu=!1;d&&d(a);b.hide()}})}},disableSideMenu:function(){var a=c.query("#content, #header, #navbar");this.isSideMenuOn()?this.toggleSideMenu(!1,function(c){c||a.removeClass("hasMenu")}):a.removeClass("hasMenu");c.query("#menu").removeClass("tabletMenu")},enableSideMenu:function(){c.query("#content, #header, #navbar").addClass("hasMenu");c.query("#menu").addClass("tabletMenu")},
isSideMenuEnabled:function(){return c.query("#content").hasClass("hasMenu")},isSideMenuOn:function(){var a=1<parseInt(c.getCssMatrix(c("#content")).e)?!0:!1;return this.isSideMenuEnabled()&&a},prevFooter:null,updateNavbarElements:function(a){this.prevFooter&&(this.prevFooter.data("parent")?this.prevFooter.appendTo("#"+this.prevFooter.data("parent")):this.prevFooter.appendTo("#afui"));c.is$(a)||(a=c.query("#"+a));c.query("#navbar").append(a);this.prevFooter=a;a=c.query("#navbar a");if(0<a.length){a.data("ignore-pressed",
"true").data("resetHistory","true");var d=parseFloat(100/a.length);a.css("width",d+"%")}a=c.query("#navbar footer");if(0!==a.length){a=a.get(0).childNodes;for(d=0;d<a.length;d++)3===a[d].nodeType&&a[d].parentNode.removeChild(a[d])}},prevHeader:null,updateHeaderElements:function(a,d){var f=this;c.is$(a)||(a=c.query("#"+a));if(a!=this.prevHeader)if(this._currentHeaderID=a.prop("id"),this.prevHeader)if(c.query("#header").append(a),c.ui.animateHeaders){var e=d?"100px":"-100px",b=d?"-100px":"100px";f.prevHeader.addClass("ignore");
f.css3animate(a,{x:b,opacity:0.3,time:"1ms"});f.css3animate(f.prevHeader,{x:e,y:0,opacity:0.3,time:f.transitionTime,delay:numOnly(f.transitionTime)/5+"ms",complete:function(){f.prevHeader.data("parent")?f.prevHeader.appendTo("#"+f.prevHeader.data("parent")):f.prevHeader.appendTo("#afui");f.prevHeader.removeClass("ignore");f.css3animate(f.prevHeader,{x:b,opacity:1,time:"1ms"});f.prevHeader=a}});f.css3animate(a,{x:"0px",opacity:1,time:f.transitionTime})}else f.prevHeader.data("parent")?f.prevHeader.appendTo("#"+
f.prevHeader.data("parent")):f.prevHeader.appendTo("#afui"),f.prevHeader=a;else c.query("#header").append(a),this.prevHeader=a},updateSideMenu:function(a){return this.updateSideMenuElements(a)},updateSideMenuElements:function(a){if(!(void 0===a||null===a)){var d=c.query("#menu_scroller");this.prevMenu&&(this.prevMenu.insertBefore("#afui #menu"),this.prevMenu=null);c.is$(a)||(a=c.query("#"+a));d.html("");d.append(a);this.prevMenu=a;this.scrollingDivs.menu_scroller.hideScrollbars();this.scrollingDivs.menu_scroller.scrollToTop()}},
setTitle:function(a){"defaultHeader"===this._currentHeaderID&&c.query("#header header:not(.ignore)  #pageTitle").html(a)},setBackButtonText:function(a){"defaultHeader"===this._currentHeaderID&&(this.trimBackButtonText&&(a=a.substring(0,5)+"..."),0<this.backButtonText.length?c.query("#header header:not(.ignore) #backButton").html(this.backButtonText):c.query("#header header:not(.ignore)  #backButton").html(a))},setBackButtonVisibility:function(a){a?c.query("#header #backButton").css("visibility","visible"):
c.query("#header #backButton").css("visibility","hidden")},showMask:function(a){a||(a=this.loadingText||"");c.query("#afui_mask>h1").html(a);c.query("#afui_mask").show()},hideMask:function(){c.query("#afui_mask").hide()},showModal:function(a,d){this.modalTransition=d||"up";var f=c.query("#modalContainer");"string"===typeof a&&(a="#"+a.replace("#",""));var e=c.query(a);if(e.length){var b=this.scrollingDivs.hasOwnProperty(e.attr("id"));f.html(c.feat.nativeTouchScroll||!b?c.query(a).html():c.query(a).get(0).childNodes[0].innerHTML+
"",!0);f.append("<a onclick='$.ui.hideModal();' class='closebutton modalbutton'></a>");this.modalWindow.style.display="block";this.runTransition(this.modalTransition,this.modalTransContainer,this.modalWindow,!1);b?this.scrollingDivs.modal_container.enable(this.resetScrollers):this.scrollingDivs.modal_container.disable();this.scrollToTop("modal");f.data("panel",a);f=e.get(0);b=f.getAttribute("data-load");if("string"==typeof b&&window[b])window[b](f);e.trigger("loadpanel")}},hideModal:function(){c.query("#modalContainer").html("",
!0);this.runTransition(this.modalTransition,this.modalWindow,this.modalTransContainer,!0);this.scrollingDivs.modal_container.disable();var a=c.query(c.query("#modalContainer").data("panel")),d=a.data("unload");if("string"==typeof d&&window[d])window[d](a.get(0));a.trigger("unloadpanel")},updatePanel:function(a,d){a="#"+a.replace("#","");var f=c.query(a).get(0);if(f){var e=c.create("div",{html:d}),e=e.children(".panel")&&0<e.children(".panel").length?e.children(".panel").get(0):e.get(0);f.getAttribute("js-scrolling")&&
("yes"==f.getAttribute("js-scrolling").toLowerCase()||"true"==f.getAttribute("js-scrolling").toLowerCase())?(c.cleanUpContent(f.childNodes[0],!1,!0),c(f.childNodes[0]).html(d)):(c.cleanUpContent(f,!1,!0),c(f).html(d));e.getAttribute("data-title")&&f.setAttribute("data-title",e.getAttribute("data-title"))}},updateContentDiv:function(a,c){return this.updatePanel(a,c)},addContentDiv:function(a,d,f,e,b){a="string"!==typeof a?a:-1==a.indexOf("#")?"#"+a:a;var h=c.query(a).get(0);h?d=h:(d=c.create("div",
{html:d}),d=d.children(".panel")&&0<d.children(".panel").length?d.children(".panel").get(0):d.get(0),!d.getAttribute("data-title")&&f&&d.setAttribute("data-title",f),f=d.id?d.id:a.replace("#",""),d.id=f,d.id!=a&&d.setAttribute("data-crc",a.replace("#","")));d.className="panel";f=d.id;this.addDivAndScroll(d,e,b);return f},addDivAndScroll:function(a,d,f,e){var b=!1,h,g=a.style.overflow,g="hidden"!=g&&"visible"!=g;e=e||this.content;!c.feat.nativeTouchScroll&&g&&a.setAttribute("js-scrolling","true");
if(a.getAttribute("js-scrolling")&&("yes"==a.getAttribute("js-scrolling").toLowerCase()||"true"==a.getAttribute("js-scrolling").toLowerCase()))g=b=!0;h=a.title||a.getAttribute("data-title");a.title="";a.setAttribute("data-title",h);a.getAttribute("scrolling")&&"no"==a.getAttribute("scrolling")&&(b=g=!1,a.removeAttribute("js-scrolling"));if(!b||c.os.desktop)e.appendChild(a),h=a,a.style["-webkit-overflow-scrolling"]="none";else{h=a.cloneNode(!1);a.title=null;a.id=null;var k=c(a);k.removeAttr("data-footer data-aside data-nav data-header selected data-load data-unload data-tab data-crc title data-title");
k.replaceClass("panel","afScrollPanel");h.appendChild(a);e.appendChild(h);!1!==this.selectBox&&this.selectBox.getOldSelects(h.id);!1!==this.passwordBox&&this.passwordBox.getOldPasswords(h.id)}g&&(this.scrollingDivs[h.id]=c(a).scroller({scrollBars:!0,verticalScroll:!0,horizontalScroll:this.horizontalScroll,vScrollCSS:"afScrollbar",refresh:d,useJsScroll:b,noParent:!b,lockBounce:this.lockPageBounce,autoEnable:!1}),f&&c.bind(this.scrollingDivs[h.id],"refresh-release",function(a){a&&f()}));h=a=null},scrollToTop:function(a,
c){c=c||"300ms";a=a.replace("#","");this.scrollingDivs[a]&&this.scrollingDivs[a].scrollToTop(c)},scrollToBottom:function(a,c){a=a.replace("#","");this.scrollingDivs[a]&&this.scrollingDivs[a].scrollToBottom(c)},parsePanelFunctions:function(a,d,f){var e=this,b=a.getAttribute("data-footer"),h=a.getAttribute("data-header");b&&"none"==b.toLowerCase()?(e.toggleNavMenu(!1),b=!1):e.toggleNavMenu(!0);b&&e.customFooter!=b?(e.customFooter=b,e.updateNavbarElements(b)):b!=e.customFooter&&(e.customFooter&&e.updateNavbarElements(e.defaultFooter),
e.customFooter=!1);h&&"none"==h.toLowerCase()?(e.toggleHeaderMenu(!1),h=!1):e.toggleHeaderMenu(!0);h&&e.customHeader!=h?(e.customHeader=h,e.updateHeaderElements(h,f)):h!=e.customHeader&&(e.customHeader&&e.updateHeaderElements(e.defaultHeader,f),e.customHeader=!1);b=c(a).find("footer");0<b.length&&(e.customFooter=a.id,b.data("parent",a.id),e.updateNavbarElements(b));b=c(a).find("header");0<b.length&&(e.customHeader=a.id,b.data("parent",a.id),e.updateHeaderElements(b,f));a.getAttribute("data-tab")&&
(c.query("#navbar a").removeClass("pressed"),c.query("#navbar #"+a.getAttribute("data-tab")).addClass("pressed"));(f=a.getAttribute("data-nav"))&&this.customMenu!=f?(this.customMenu=f,this.updateSideMenuElements(f)):f!=this.customMenu&&(this.customMenu&&this.updateSideMenuElements(this.defaultMenu),this.customMenu=!1);if(d){f=d.getAttribute("data-unload");if("string"==typeof f&&window[f])window[f](d);c(d).trigger("unloadpanel")}f=a.getAttribute("data-load");if("string"==typeof f&&window[f])window[f](a);
c(a).trigger("loadpanel");this.isSideMenuOn()&&this.toggleSideMenu(!1)},parseScriptTags:function(a){a&&c.parseJS(a)},loadContent:function(a,d,f,e,b){if(this.doingTransition)this.loadContentQueue.push([a,d,f,e,b]);else if(0!==a.length){var h=!0;b=b||document.createElement("a");if(-1==a.indexOf("#")){var g="url"+r(a),k=c.query("div.panel[data-crc='"+g+"']");0<c.query("#"+a).length?h=!1:0<k.length?(h=!1,"true"===b.getAttribute("data-refresh-ajax")||b.refresh&&!0===b.refresh||this.isAjaxApp?h=!0:a="#"+
k.get(0).id):0<c.query("#"+g).length&&(h=!1,"true"===b.getAttribute("data-refresh-ajax")||b.refresh&&!0===b.refresh||this.isAjaxApp?h=!0:a="#"+g)}-1==a.indexOf("#")&&h?this.loadAjax(a,d,f,e,b):this.loadDiv(a,d,f,e)}},loadDiv:function(a,d,f,e){var b=this,h=a.replace("#",""),g=h.indexOf("/"),l="";-1!=g&&(l=h.substr(g),h=h.substr(0,g));if(h=c.query("#"+h).get(0))if(h==this.activeDiv&&!f)this.isSideMenuOn()&&this.toggleSideMenu(!1);else{this.transitionType=e;var n=this.activeDiv;a=h;if("true"==h.getAttribute("data-modal")||
"true"==h.getAttribute("modal"))return this.showModal(h.id);n!=a&&(d?(this.clearHistory(),this.pushHistory("#"+this.firstDiv.id,h.id,e,l)):f||this.pushHistory(k,h.id,e,l),k="#"+h.id+l,this.doingTransition=!0,n.style.display="block",a.style.display="block",this.runTransition(e,n,a,f),this.parsePanelFunctions(h,n,f),this.loadContentData(h,d,f,e),setTimeout(function(){b.scrollingDivs[n.id]&&b.scrollingDivs[n.id].disable()},numOnly(b.transitionTime)+50))}else c(document).trigger("missingpanel",null,{missingTarget:a})},
loadContentData:function(a,d,f,e){f?0<this.history.length&&(f=this.history[this.history.length-1],e=f.target.indexOf("/"),f=-1!=e?f.target.substr(0,e):f.target,(f=c.query(f).get(0))?this.setBackButtonText(f.getAttribute("data-title")):this.setBackButtonText("Back")):this.activeDiv.getAttribute("data-title")?this.setBackButtonText(this.activeDiv.getAttribute("data-title")):this.setBackButtonText("Back");a.getAttribute("data-title")&&this.setTitle(a.getAttribute("data-title"));d&&(this.setBackButtonText(this.firstDiv.getAttribute("data-title")),
a==this.firstDiv&&(this.history.length=0));c("#header #menubadge").css("float","right");0===this.history.length?(this.setBackButtonVisibility(!1),this.history=[],c("#header #menubadge").css("float","left")):this.showBackButton&&this.showBackbutton&&this.setBackButtonVisibility(!0);this.activeDiv=a;this.scrollingDivs[this.activeDiv.id]&&this.scrollingDivs[this.activeDiv.id].enable(this.resetScrollers)},loadAjax:function(a,d,f,e,b){if(!("afui_ajax"==this.activeDiv.id&&a==this.ajaxUrl)){var h="url"+
r(a),g=this;-1==a.indexOf("http")&&(a=intel.xdk.webRoot+a);var k=new XMLHttpRequest;b&&"object"!==typeof b&&(b=document.createElement("a"),b.setAttribute("data-persist-ajax",!0));b=b||document.createElement("a");k.onreadystatechange=function(){if(4==k.readyState&&200==k.status){this.doingTransition=!1;var l,n=!1;l=c.query("#"+h);if(0<l.length)g.updatePanel(h,k.responseText),l.get(0).setAttribute("data-title",b.title?b.title:a);else if(b.getAttribute("data-persist-ajax")||g.isAjaxApp){var q="true"===
b.getAttribute("data-pull-scroller")?!0:!1;l=q?function(){b.refresh=!0;g.loadContent(a,d,f,e,b);b.refresh=!1}:null;var p=c(k.responseText);p.hasClass("panel")?(h=p.attr("id"),p=p.get(0).innerHTML):p=p.html();0<c("#"+h).length?g.updatePanel("#"+h,p):0<c("div.panel[data-crc='"+h+"']").length?(g.updatePanel(c("div.panel[data-crc='"+h+"']").get(0).id,p),h=c("div.panel[data-crc='"+h+"']").get(0).id):h=g.addContentDiv(h,k.responseText,b.title?b.title:a,q,l)}else g.updatePanel("afui_ajax",k.responseText),
c.query("#afui_ajax").get(0).setAttribute("data-title",b.title?b.title:a),g.loadContent("#afui_ajax",d,f,e),n=!0;l=document.createElement("div");c(l).html(k.responseText);g.parseScriptTags(l);if(n)g.showLoading&&g.hideMask();else return g.loadContent("#"+h,d,f,e),g.showLoading&&g.hideMask(),null}};this.ajaxUrl=a;var l=this.useAjaxCacheBuster?a+(a.split("?")[1]?"&":"?")+"cache="+1E16*Math.random():a;k.open("GET",l,!0);k.setRequestHeader("X-Requested-With","XMLHttpRequest");k.send();this.showLoading&&
this.showMask()}},runTransition:function(a,c,f,e){this.availableTransitions[a]||(a="default");this.availableTransitions[a].call(this,c,f,e)},launch:function(){if(!1===this.hasLaunched||this.launchCompleted)this.hasLaunched=!0;else{var a=this;this.viewportContainer=af.query("#afui");this.navbar=af.query("#navbar").get(0);this.content=af.query("#content").get(0);this.header=af.query("#header").get(0);this.menu=af.query("#menu").get(0);this.viewportContainer.on("click","a",function(b){a.useInteralRouting&&
q(b,b.currentTarget)});var d=null;c.bind(c.touchLayer,"enter-edit",function(a){d=a});c.bind(c.touchLayer,"enter-edit-reshape",function(){var b=c(d),e=b.closest(a.activeDiv);if(e&&0<e.size())if(c.os.ios||c.os.chrome){var f;f=document.body.scrollTop?document.body.scrollTop-e.offset().top:0;b=e.offset().bottom-b.offset().bottom;a.scrollingDivs[a.activeDiv.id].setPaddings(f,b)}else if(c.os.android||c.os.blackberry)f=b.offset(),e=e.offset(),f.bottom>e.bottom&&f.height<e.height&&a.scrollingDivs[a.activeDiv.id].scrollToItem(b,
"bottom")});c.os.ios&&c.bind(c.touchLayer,"exit-edit-reshape",function(){a.activeDiv&&(a.activeDiv.id&&a.scrollingDivs.hasOwnProperty(a.activeDiv.id))&&a.scrollingDivs[a.activeDiv.id].setPaddings(0,0)});this.navbar||(this.navbar=c.create("div",{id:"navbar"}).get(0),this.viewportContainer.append(this.navbar));this.header||(this.header=c.create("div",{id:"header"}).get(0),this.viewportContainer.prepend(this.header));this.menu||(this.menu=c.create("div",{id:"menu",html:'<div id="menu_scroller"></div>'}).get(0),
this.viewportContainer.append(this.menu),this.menu.style.overflow="hidden",this.scrollingDivs.menu_scroller=c.query("#menu_scroller").scroller({scrollBars:!0,verticalScroll:!0,vScrollCSS:"afScrollbar",useJsScroll:!c.feat.nativeTouchScroll,noParent:c.feat.nativeTouchScroll,autoEnable:!0,lockBounce:this.lockPageBounce}),c.feat.nativeTouchScroll&&c.query("#menu_scroller").css("height","100%"));this.content||(this.content=c.create("div",{id:"content"}).get(0),this.viewportContainer.append(this.content));
c(this.header).html('<a id="backButton" class="button"></a> <h1 id="pageTitle"></h1>'+header.innerHTML);this.backButton=c.query("#header #backButton").css("visibility","hidden");c(document).on("click","#header #backButton",function(b){b.preventDefault();a.goBack()});this.titleBar=c.query("#header #pageTitle").get(0);this.addContentDiv("afui_ajax","");var f=c.create("div",{id:"afui_mask",className:"ui-loader",html:"<span class='ui-icon ui-icon-loading spin'></span><h1>Loading Content</h1>"}).css({"z-index":2E4,
display:"none"});document.body.appendChild(f.get(0));f=c.create("div",{id:"afui_modal"}).get(0);f.appendChild(c.create("div",{id:"modalContainer"}).get(0));this.modalTransContainer=c.create("div",{id:"modalTransContainer"}).appendTo(f).get(0);this.viewportContainer.append(f);this.scrollingDivs.modal_container=c.query("#modalContainer").scroller({scrollBars:!0,vertical:!0,vScrollCSS:"afScrollbar",noParent:!0,lockBounce:this.lockPageBounce});this.modalWindow=f;for(var e={},f=this.viewportContainer.get(0).querySelectorAll(".panel"),
b=0;b<f.length;b++){var h=f[b],g=h,n,r=h.previousSibling;h.parentNode&&"content"!=h.parentNode.id?(h.parentNode.removeChild(h),n=h.id,g.getAttribute("selected")&&(this.firstDiv=c.query("#"+n).get(0)),this.addDivAndScroll(g),c.query("#"+n).insertAfter(r)):h.parsedContent||(h.parsedContent=1,h.parentNode.removeChild(h),n=h.id,g.getAttribute("selected")&&(this.firstDiv=c.query("#"+n).get(0)),this.addDivAndScroll(g),c.query("#"+n).insertAfter(r));h.getAttribute("data-defer")&&(e[n]=h.getAttribute("data-defer"));
this.firstDiv||(this.firstDiv=c.query("#"+n).get(0));h=null}var f=null,E=!1,F=Object.keys(e).length;if(0<F){var E=!0,A=0,p;for(p in e)(function(b){c.ajax({url:intel.xdk.webRoot+e[b],success:function(d){0<d.length&&(a.updatePanel(b,d),a.parseScriptTags(c.query("#"+b).get(0)));A++;A>=F&&(E=!1,c(document).trigger("defer:loaded"))},error:function(a){console.log("Error with deferred load "+intel.xdk.webRoot+e[b]);A++;A>=F&&(E=!1,c(document).trigger("defer:loaded"))}})})(p)}if(this.firstDiv)if(this.activeDiv=
this.firstDiv,this.scrollingDivs[this.activeDiv.id]&&this.scrollingDivs[this.activeDiv.id].enable(),n=function(){c.query("#navbar").append(c.create("footer",{id:"defaultNav"}).append(c.query("#navbar").children()));a.defaultFooter="defaultNav";a.prevFooter=c.query("#defaultNav");a.updateNavbarElements(a.prevFooter);var b=c.query("nav").get(0);b&&(a.defaultMenu=c(b),a.updateSideMenuElements(a.defaultMenu),a.prevMenu=a.defaultMenu);a.defaultHeader="defaultHeader";c.query("#header").append(c.create("header",
{id:"defaultHeader"}).append(c.query("#header").children()));a.prevHeader=c.query("#defaultHeader");c.query("#navbar").on("click","a",function(a){c.query("#navbar a").not(a.currentTarget).removeClass("pressed");c(a.currentTarget).addClass("pressed")});b=c.query("#navbar a");0<b.length&&b.css("width",100/b.length+"%");0<c.query("nav").length&&(c.query("#afui #header").addClass("hasMenu"),c.query("#afui #content").addClass("hasMenu"),c.query("#afui #navbar").addClass("hasMenu"),c.query("#afui #menu").addClass("tabletMenu"));
var b=a.getPanelId(l),d=b=="#"+a.firstDiv.id;0<b.length&&a.loadDefaultHash&&!d?a.loadContent(l,!0,!1,"none"):(k="#"+a.firstDiv.id,a.firstDiv.style.display="block",a.parsePanelFunctions(a.firstDiv),a.loadContentData(a.firstDiv),c.query("#header #backButton").css("visibility","hidden"),("true"==a.firstDiv.getAttribute("data-modal")||"true"==a.firstDiv.getAttribute("modal"))&&a.showModal(a.firstDiv.id));a.launchCompleted=!0;c.query("#afui #splashscreen").remove();setTimeout(function(){c(document).trigger("afui:ready")})},
E)c(document).one("defer:loaded",n);else n();c.bind(a,"content-loaded",function(){if(0<a.loadContentQueue.length){var b=a.loadContentQueue.splice(0,1)[0];a.loadContent(b[0],b[1],b[2],b[3],b[4])}});(window.navigator.standalone||this.isIntel)&&this.blockPageScroll();this.topClickScroll()}},topClickScroll:function(){var a=this;document.getElementById("header").addEventListener("click",function(c){15>=c.clientY&&"h1"==c.target.nodeName.toLowerCase()&&a.scrollingDivs[a.activeDiv.id].scrollToTop("100")})},
blockPageScroll:function(){c.query("#afui #header").bind("touchmove",function(a){a.preventDefault()})},noTransition:function(a,c,f){c.style.display="block";a.style.display="block";this.clearAnimations(c);this.css3animate(a,{x:"0%",y:0});this.finishTransition(a);c.style.zIndex=2;a.style.zIndex=1},finishTransition:function(a,d){a.style.display="none";this.doingTransition=!1;d&&this.clearAnimations(d);a&&this.clearAnimations(a);c.trigger(this,"content-loaded")},clearAnimations:function(a){a.style[c.feat.cssPrefix+
"Transform"]="none";a.style[c.feat.cssPrefix+"Transition"]="none"}};var q=function(a,d){if(d!=afui){if("a"!=d.tagName.toLowerCase()&&d.parentNode)return q(a,d.parentNode);if("undefined"!==d.tagName&&"a"==d.tagName.toLowerCase()){if(!1!==("function"==typeof c.ui.customClickHandler?c.ui.customClickHandler:!1)&&c.ui.customClickHandler(d,a))return a.preventDefault();if(!(-1!==d.href.toLowerCase().indexOf("javascript:")||d.getAttribute("data-ignore"))){if(0===d.href.indexOf("tel:"))return!1;if(-1===d.hash.indexOf("#")&&
0<d.target.length)0!==d.href.toLowerCase().indexOf("javascript:")&&(c.ui.isIntel?(a.preventDefault(),intel.xdk.device.launchExternal(d.href)):c.os.desktop||(a.target.target="_blank"));else{var f=d.href,e=location.protocol+"//"+location.hostname+":"+location.port+location.pathname;0===f.indexOf(e)&&(f=f.substring(e.length));if("#"==f||f.indexOf("#")===f.length-1||0===f.length&&0===d.hash.length)return a.preventDefault();a.preventDefault();var e=d.getAttribute("data-transition"),b=d.getAttribute("data-resetHistory"),
b=b&&"true"==b.toLowerCase()?!0:!1,f=0<d.hash.length?d.hash:f;c.ui.loadContent(f,b,0,e,d)}}}}},r=function(a,c){void 0===c&&(c=0);var f=0,f=0;c^=-1;for(var e=0,b=a.length;e<b;e++)f=(c^a.charCodeAt(e))&255,f="0x"+"00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".substr(9*
f,8),c=c>>>8^f;return c^-1};c.ui=new g;c.ui.init=!0;c(window).trigger("afui:preinit");c(window).trigger("afui:init")})(af);
(function(){$(document).one("intel.xdk.device.ready",function(){$.ui.isIntel=!0;setTimeout(function(){document.getElementById("afui").style.height="100%";document.body.style.height="100%";document.documentElement.style.minHeight=window.innerHeight},300);$.ui.ready(function(){$.ui.blockPageScroll()})});$.feat.nativeTouchScroll&&document.addEventListener("orientationchange",function(c){if($.ui.scrollingDivs[$.ui.activeDiv.id]){var n=$.ui.scrollingDivs[$.ui.activeDiv.id];0===n.el.scrollTop&&(n.disable(),
setTimeout(function(){n.enable()},300))}})})();
(function(c){c.availableTransitions.fade=function(n,l,k){n.style.display="block";l.style.display="block";var g=this;k?(l.style.zIndex=1,n.style.zIndex=2,g.clearAnimations(l),g.css3animate(n,{x:"0%",time:c.transitionTime,opacity:0.1,complete:function(c){c?g.finishTransition(n,l):(g.css3animate(n,{x:"-100%",opacity:1,complete:function(){g.finishTransition(n)}}),l.style.zIndex=2,n.style.zIndex=1)}})):(n.style.zIndex=1,l.style.zIndex=2,l.style.opacity=0,g.css3animate(l,{x:"0%",opacity:0.1,complete:function(){g.css3animate(l,
{x:"0%",time:c.transitionTime,opacity:1,complete:function(c){c?g.finishTransition(n,l):(g.clearAnimations(l),g.css3animate(n,{x:"-100%",y:0,complete:function(){g.finishTransition(n)}}))}})}}))}})(af.ui);
(function(c){c.availableTransitions.flip=function(n,l,k){n.style.display="block";l.style.display="block";var g=this;k||(n.style.zIndex=1,l.style.zIndex=2);g.css3animate(l,{x:"100%",scale:0.8,rotateY:"180deg",complete:function(){g.css3animate(l,{x:"0%",scale:1,time:c.transitionTime,rotateY:"0deg",complete:function(){g.clearAnimations(l)}})}});g.css3animate(n,{x:"100%",time:c.transitionTime,scale:0.8,rotateY:"180deg",complete:function(){g.css3animate(n,{x:"-100%",opacity:1,scale:1,rotateY:"0deg",complete:function(){g.finishTransition(n)}});
l.style.zIndex=2;n.style.zIndex=1}})}})(af.ui);
(function(c){c.availableTransitions.pop=function(n,l,k){n.style.display="block";l.style.display="block";var g=this;k?(l.style.zIndex=1,n.style.zIndex=2,g.clearAnimations(l),g.css3animate(n,{x:"0%",time:c.transitionTime,opacity:0.1,scale:0.2,origin:"50% 50%",complete:function(c){c?g.finishTransition(n):(g.css3animate(n,{x:"-100%",complete:function(){g.finishTransition(n)}}),l.style.zIndex=2,n.style.zIndex=1)}})):(n.style.zIndex=1,l.style.zIndex=2,g.css3animate(l,{x:"0%",scale:0.2,origin:"50% 50%",
opacity:0.1,time:"0ms",complete:function(){g.css3animate(l,{x:"0%",time:c.transitionTime,scale:1,opacity:1,origin:"0% 0%",complete:function(c){c?g.finishTransition(n,l):(g.clearAnimations(l),g.css3animate(n,{x:"100%",y:0,complete:function(){g.finishTransition(n)}}))}})}}))}})(af.ui);
(function(c){function n(l,k,g){l.style.display="block";k.style.display="block";var n=this;g?n.css3animate(l,{x:"0%",y:"0%",complete:function(){n.css3animate(l,{x:"100%",time:c.transitionTime,complete:function(){n.finishTransition(l,k)}}).link(k,{x:"0%",time:c.transitionTime})}}).link(k,{x:"-100%",y:"0%"}):n.css3animate(l,{x:"0%",y:"0%",complete:function(){n.css3animate(l,{x:"-100%",time:c.transitionTime,complete:function(){n.finishTransition(l,k)}}).link(k,{x:"0%",time:c.transitionTime})}}).link(k,
{x:"100%",y:"0%"})}c.availableTransitions.slide=n;c.availableTransitions["default"]=n})(af.ui);
(function(c){c.availableTransitions.down=function(n,l,k){n.style.display="block";l.style.display="block";var g=this;k?(n.style.zIndex=2,l.style.zIndex=1,g.css3animate(n,{y:"0%",x:"0%",complete:function(){g.css3animate(n,{y:"-100%",time:c.transitionTime,complete:function(){g.finishTransition(n,l)}})}})):(n.style.zIndex=1,l.style.zIndex=2,g.css3animate(l,{y:"-100%",x:"0%",time:"10ms",complete:function(){g.css3animate(l,{y:"0%",time:c.transitionTime,complete:function(){g.finishTransition(n,l)}})}}))}})(af.ui);
(function(c){c.availableTransitions.up=function(n,l,k){n.style.display="block";l.style.display="block";var g=this;k?(n.style.zIndex=2,l.style.zIndex=1,g.css3animate(n,{y:"0%",x:"0%",complete:function(){g.css3animate(n,{y:"100%",time:c.transitionTime,complete:function(){g.finishTransition(n,l)}})}})):(n.style.zIndex=1,l.style.zIndex=2,g.css3animate(l,{y:"100%",x:"0%",time:"10ms",complete:function(){g.css3animate(l,{y:"0%",time:c.transitionTime,complete:function(){g.finishTransition(n,l)}})}}))}})(af.ui);
(function(c){function n(){c.ui.isWin8=!0;c.os.ie&&c.ui.ready(function(){c.ui.slideSideMenu&&(c.ui.slideSideMenu=!1);c.query("#afui #navbar footer").append("<a id='metroMenu' onclick='$.ui.toggleSideMenu()'>\u2022\u2022\u2022</a>");var l=c.query("#afui #navbar").find("a");if(0<l.length){l.data("ignore-pressed","true").data("resetHistory","true");var k=parseFloat(100/l.length);l.css("width",k+"%")}var g=c.ui.updateNavbarElements;c.ui.updateNavbarElements=function(){g.apply(c.ui,arguments);1!=c.query("#afui #navbar #metroMenu").length&&
c.query("#afui #navbar footer").append("<a id='metroMenu' onclick='$.ui.toggleSideMenu()'>\u2022\u2022\u2022</a>")};c.ui.isSideMenuOn=function(){var g=0>parseInt(c.getCssMatrix(c("#navbar")).f)?!0:!1;return this.isSideMenuEnabled()&&g};c.ui.toggleSideMenu=function(g,k){if(this.isSideMenuEnabled()&&!this.togglingSideMenu){this.togglingSideMenu=!0;var a=this,d=c.query("#menu"),f=c.query("#navbar"),e=this.isSideMenuOn();if(2===g||!e&&(void 0!==g&&!1!==g||void 0===g))d.show(),a.css3animate(f,{y:"-150px",
time:c.ui.transitionTime,complete:function(b){a.togglingSideMenu=!1;k&&k(!0)}}),a.css3animate(d,{y:"0px",time:c.ui.transitionTime});else if(void 0===g||void 0!==g&&!1===g)a.css3animate(f,{y:"0",time:c.ui.transitionTime,complete:function(b){a.togglingSideMenu=!1;k&&k(!0);d.hide()}}),a.css3animate(d,{y:"150px",time:c.ui.transitionTime})}}})}if(!c)throw"This plugin requires jqUi";c.ui?n():c(document).ready(function(){n()})})(af);

(function(a){$.ui.autoLaunch=false;$.ui.openLinksNewTab=false;$.os.android=true;$(document).ready(function(){$.ui.launch();$.ui.showBackButton=false});var b=function(){AppMobi.device.setRotateOrientation("portrait");AppMobi.device.setAutoRotate(false);webRoot=AppMobi.webRoot+"";AppMobi.device.hideSplashScreen();$.ui.blockPageScroll();$.ui.launch()};document.addEventListener("intel.xdk.device.ready",b,false);if($.os.android||$.os.ie||search=="android"){$.ui.ready(function(){$("#main .list").append("<li><a id='toggleAndroidTheme'>Toggle Theme Color</a></li>");var c=$("#afui");$("#toggleAndroidTheme").bind("click",function(d){if(c.hasClass("light")){c.removeClass("light")}else{c.addClass("light")}})})}})(window);
var app={initialize:function(){this.bindEvents()},bindEvents:function(){document.addEventListener("deviceready",this.onDeviceReady,false)},onDeviceReady:function(){console.log("device ready");openLocalDatabase()},receivedEvent:function(d){var a=document.getElementById(d);var c=a.querySelector(".listening");var b=a.querySelector(".received");c.setAttribute("style","display:none;");b.setAttribute("style","display:block;");console.log("Received Event: "+d)}};
(function(Q){var W=document.location.search.toLowerCase().replace("?","");var l=[],K,r,u,v,L,h,k,o,g,D,m,O=2;var F={};var t,b=0,n,P,f,z=0,Z,X=0,j,R=0;var C,B,H,y=false,i=false;var E,c,S,U;var I=false,V=false,s=false,N=false;$(document).ready(function(){a()});openLocalDatabase=function(){try{B=Q.sqlitePlugin.openDatabase({name:"attachments"});B.transaction(getFiles,transaction_error)}catch(x){console.log("db error occured"+x)}};getFiles=function(x){var aa="SELECT _id,filename,content from mail_attachments";x.executeSql(aa,[],getFile_success)};transaction_error=function(x,aa){$.ui.hideMask();$("#errorMsg").show()};getFile_success=function(aa,ad){$("#errorMsg").hide();g=ad;var x=g.rows.length;while(x>=1){var ac=g.rows.item(x-1);var ab=ac.filename;ab=ab.split(".")[0];var ae=parseInt(ac._id);$("#fileList").append("<li><a href='#main' onclick='getContents("+ae+");' >"+ab+"</a></li>");x--}$.ui.hideMask()};var a=function(){var x=document.getElementById("main")};getContents=function(ad,ac){setSelectedItemColor(ac);try{$.ui.hideMask();if(D!=ad){D=ad;initStage();resetTimers();resetAllControls();if(g!=null){var x=g.rows.length;while(x>=1){var ab=g.rows.item(x-1);if(parseInt(ab._id)==ad){K=ab.content;break}x--}}if(ad=="map"){sapi.getData(2,30,getDataResponse);return}else{if(ad=="heart"){sapi.getData(2,31,getDataResponse);return}}}else{$.ui.loadContent("#main",false,false,"slide")}}catch(aa){alert(aa)}};setSelectedItemColor=function(x){};getDataResponse=function(aa){try{clearLayers();K='<?xml version="1.0" standalone="yes"?>'+aa;n=false;initiateControls(K);console.log(K)}catch(x){alert(x)}};getLocalDataResponse=function(aa){try{clearLayers();K=aa;n=true;initiateControls(K);console.log(K)}catch(x){alert(x)}};getLocalFolderAnswers=function(){localFolderWorkObject=$(dataString).find("Work");if(localFolderWorkObject.text().length){localFolderWorkObject=JSON.parse(localFolderWorkObject.text())}return localFolderWorkObject};clearLayers=function(){clearAllLayers();initStage();resetTimers();resetAllControls()};getContentType=function(){return r};setLocaltoSave=function(x){i=x};setTypeEdit=function(x){I=x};setShuffleEdit=function(x){V=x};setSelectEdit=function(x){s=x};setRandomEdit=function(x){N=x};initiateControls=function(x){dataString=$(x);$(dataString).find("DisplayAreaProperties").each(function(){C=$(this).find("ImgString").text();r=$(this).find("ContentType").text();createCanvas($(this).find("ImgString").text(),$(this).find("PctWidth").text(),$(this).find("PctHeight").text(),$(this).find("Zoom").text())})};imgLoadDone=function(){initBuildControls(K)};initBuildControls=function(x){dataString=$(x);$(dataString).find("HeaderProperties").each(function(){F.worksheetName=$(this).find("WorksheetName").text();F.worksheetMode=$(this).find("WorksheetMode").text();F.courseName=$(this).find("CourseName").text();F.noOfItems=$(this).find("NoOfItems").text();F.showFeedback=$(this).find("ShowFeedback").text()});$(dataString).find("DetailProperties").each(function(){var aa={};aa.ctrlID=$(this).find("CtlID").text();aa.id=$(this).find("CtlName").text();aa.left=$(this).find("CtlX").text();aa.top=$(this).find("CtlY").text();aa.value=$(this).find("CtlDefaultValue").text();aa.width=$(this).find("CtlWidth").text();aa.height=$(this).find("CtlHt").text();aa.fontFamily=$(this).find("CtlFontFamily").text();aa.fontSize=$(this).find("CtlFontSize").text();aa.fontStyle=$(this).find("CtlFontStyle").text();aa.fontColor=$(this).find("fontColor").text();l.push(aa);console.log($(this).find("CtlDefaultValue").text())});buildviewforDisplay();exerciseActicity=getExerciseActivity();if(exerciseActicity==0){enableDisableFooter(false);showHederControls(true);$.ui.loadContent("#main",false,false,"slide")}else{enableDisableFooter(true);hideHederControls();switch(F.worksheetMode.toUpperCase()){case"RANDOM":$("#navbar_randSel").prop("disabled",false);$("#navbar_randSel").css("color","white");$.ui.loadContent("#randomSelect",false,false,"slide");break;case"SHUFFLE":$("#navbar_shuffle").prop("disabled",false);$("#navbar_shuffle").css("color","white");isShuffleMode=false;$.ui.loadContent("#shuffle",false,false,"slide");break;case"SELECT":$("#navbar_multiSel").prop("disabled",false);$("#navbar_multiSel").css("color","white");$.ui.loadContent("#multiSelect",false,false,"slide");break;default:$("#navbar_main").prop("disabled",false);$("#navbar_main").css("color","white");$.ui.loadContent("#main",false,false,"slide");document.getElementById("main").appendChild(document.getElementById("container"))}}};buildviewforDisplay=function(){if(K){console.log("load main panel");if(!L){$.ui.showMask("building Exercise...");document.getElementById("typAnsResult").innerHTML="0";document.getElementById("questTotal").innerHTML="/"+l.length;buildControls(K,callbackControlBuild)}L=true;hideQuestionLayer(false)}};enableDisableFooter=function(x){if(x){$("#navbar_main").css("color","#A9A9A9");$("#navbar_shuffle").css("color","#A9A9A9");$("#navbar_multiSel").css("color","#A9A9A9");$("#navbar_randSel").css("color","#A9A9A9");$("#navbar_showAns").css("color","#A9A9A9")}else{$("#navbar_main").css("color","white");$("#navbar_shuffle").css("color","white");$("#navbar_multiSel").css("color","white");$("#navbar_randSel").css("color","white");$("#navbar_showAns").css("color","white")}$("#navbar_main").prop("disabled",x);$("#navbar_shuffle").prop("disabled",x);$("#navbar_multiSel").prop("disabled",x);$("#navbar_randSel").prop("disabled",x);$("#navbar_showAns").prop("disabled",x)};showHederControls=function(){$("#textLeftHdrEditCtrl").show();$("#textRightHdrEditCtrl").show();$("#shuffleLeftHdrEditCtrl").show();$("#shuffleRightHdrEditCtrl").show();$("#selectleLeftHdrEditCtrl").show();$("#selectleRightHdrEditCtrl").show();$("#randomleLeftHdrEditCtrl").show();$("#randomleRightHdrEditCtrl").show();$("#questionOptionSettings").show()};hideHederControls=function(){$("#textLeftHdrEditCtrl").hide();$("#textRightHdrEditCtrl").hide();$("#shuffleLeftHdrEditCtrl").hide();$("#shuffleRightHdrEditCtrl").hide();$("#selectleLeftHdrEditCtrl").hide();$("#selectleRightHdrEditCtrl").hide();$("#randomleLeftHdrEditCtrl").hide();$("#randomleRightHdrEditCtrl").hide();$("#questionOptionSettings").hide()};getPracticeMode=function(){exerciseActicity=getExerciseActivity();if(exerciseActicity==0){return true}return false};navigateToTypeView=function(){if($("#navbar_main").is(":disabled")){}else{$.ui.loadContent("#main",false,false,"slide")}};navigateToShuffleView=function(){if($("#navbar_shuffle").is(":disabled")){}else{$.ui.loadContent("#shuffle",false,false,"slide")}};navigateToSelectView=function(){if($("#navbar_multiSel").is(":disabled")){}else{$.ui.loadContent("#multiSelect",false,false,"slide")}};navigateToRandomView=function(){if($("#navbar_randSel").is(":disabled")){}else{$.ui.loadContent("#randomSelect",false,false,"slide")}};navigateToAnserView=function(){if($("#navbar_showAns").is(":disabled")){}else{$.ui.loadContent("#showAnswer",false,false,"slide")}};startOver=function(){clearAllLayers();resetAllControls()};resetAllControls=function(){try{clearAllLayers();$("#multiNoAttempts").text("");$("#randomNoAttempts").text("");$("#noAttempts").text("");$("#shuffleNoAttempts").text("");for(var ag=0,aa=l.length;ag<aa;ag++){var ae=document.getElementById(l[ag].id);$("#"+l[ag].id).remove();var af=document.getElementById("lbl"+ae.id);if(typeof af!="undefined"&&af!=null){document.getElementById("showAnswer").removeChild(af)}var x=document.getElementById("cmb"+ae.id);if(typeof x!="undefined"&&x!=null){document.getElementById("multiSelect").removeChild(x)}var ab=document.getElementById("lblSelect"+ae.id);if(typeof ab!="undefined"&&ab!=null){document.getElementById("multiSelect").removeChild(ab)}var ad=document.getElementById("clk"+ae.id);if(typeof ad!="undefined"&&ad!=null){document.getElementById("randomSelect").removeChild(ad)}if(typeof document.getElementById("randAnswerDiv")!="undefined"&&document.getElementById("randAnswerDiv")!=null){}}$("#randAnswerDiv").fadeIn();l=[];K=null;u=null;v=L=h=k=o=false}catch(ac){console.log("error while resetting all contols"+ac)}};resetTimers=function(){stopCounters();$("#totalTime").text("");$("#shuffletotalTime").text("");$("#multitotalTime").text("");$("#randomtotalTime").text("")};stopCounters=function(){watcherStop();clearInterval(t);clearInterval(f);clearInterval(j);clearInterval(Z)};var M,Y,w;initiateWatcher=function(){};watchStart=function(x,aa,ab){Y=x;w=ab;aa=setInterval("watcherUpdate()",1);ab.start()};watcherUpdate=function(){if(w){$(Y).text(formatTime(w.time()))}};watcherStop=function(){if(w){w.stop();clearInterval(t)}};setExerciseName=function(x){P=x};setTimer=function(x,aa){};function e(x){if(x<10){x="0"+x}return x}function q(){var aa=new Date();var x=aa.getMinutes();var ab=aa.getSeconds();x=e(x);ab=e(ab);return x+":"+ab}restCurrentPage=function(ad){setLocaltoSave(false);switch(ad){case"type":I=false;$("#totalTime").text("");$("#noAttempts").text("");for(var af=0,aa=l.length;af<aa;af++){$("#"+l[af].id).remove()}L=false;typeAnsloadedPanel();break;case"shuffle":V=false;$("#shuffletotalTime").text("");$("#shuffleNoAttempts").text("");clearShuffleLayers();v=false;shuffleloadedPanel();break;case"pick":s=false;$("#multitotalTime").text("");$("#multiNoAttempts").text("");for(var af=0,aa=l.length;af<aa;af++){var ae=document.getElementById(l[af].id);var x=document.getElementById("cmb"+ae.id);if(typeof x!="undefined"&&x!=null){document.getElementById("multiSelect").removeChild(x)}var ab=document.getElementById("lblSelect"+ae.id);if(typeof ab!="undefined"&&ab!=null){document.getElementById("multiSelect").removeChild(ab)}}h=false;multiSelloadedPanel();break;case"random":N=false;$("#randomtotalTime").text("");$("#randomNoAttempts").text("");for(var af=0,aa=l.length;af<aa;af++){var ae=document.getElementById(l[af].id);var ac=document.getElementById("clk"+ae.id);if(typeof ac!="undefined"&&ac!=null){document.getElementById("randomSelect").removeChild(ac)}}o=false;randSelloadedPanel();$("#randAnswerDiv").fadeIn();break}};typeAnsloadedPanel=function(){$("#typeExerciseName").text(P);stopCounters();setLocaltoSave(false);localFolderAnsObj=getLocalFolderAnswers();if(localFolderAnsObj.listExcerciseModes){if(localFolderAnsObj.listExcerciseModes[0].Attempts){$("#noAttempts").text(localFolderAnsObj.listExcerciseModes[0].Attempts)}if(localFolderAnsObj.listExcerciseModes[0].TimeTaken){E=new clsStopwatch();$("#totalTime").text(localFolderAnsObj.listExcerciseModes[0].TimeTaken)}if(localFolderAnsObj.listExcerciseModes[0].Score){$("#typAnsResult").text(localFolderAnsObj.listExcerciseModes[0].Score)}}if($("#totalTime").text().length==0){$("#totalTime").text("00:00");b=0;E=new clsStopwatch()}else{b=parseInt($("#totalTime").text())}watchStart("#totalTime",t,E);m="main";typeAnsBuildView()};typeAnsBuildView=function(){if(K){I=false;console.log("load main panel");if(!L){$.ui.showMask("building Exercise...");document.getElementById("typAnsResult").innerHTML="0";document.getElementById("questTotal").innerHTML="/"+l.length;buildControls(K,callbackControlBuild)}L=true;document.getElementById("main").appendChild(document.getElementById("container"));hideQuestionLayer(false)}};callbackControlBuild=function(){alert("callback done")};checkAnsCounterNeedsStop=function(x){if(x==l.length){clearInterval(t)}};unloadedTypeAns=function(){if(getExerciseColl("typeAns").length){console.log(JSON.stringify(getExerciseColl("typeAns")))}};unloadedShuffleAns=function(){if(getExerciseColl("shuffleAns").length){console.log(JSON.stringify(getExerciseColl("shuffleAns")))}};unloadedMultiSelAns=function(){if(getExerciseColl("multiSelAns").length){console.log(JSON.stringify(getExerciseColl("multiSelAns")))}};unloadedRandSel=function(){if(getExerciseColl("randSelAns").length){console.log(JSON.stringify(getExerciseColl("randSelAns")))}};shuffleloadedPanel=function(){$("#shuffleExerciseName").text(P);setLocaltoSave(false);stopCounters();localFolderAnsObj=getLocalFolderAnswers();if(localFolderAnsObj.listExcerciseModes){if(localFolderAnsObj.listExcerciseModes[1].Attempts){$("#shuffleNoAttempts").text(localFolderAnsObj.listExcerciseModes[1].Attempts)}if(localFolderAnsObj.listExcerciseModes[1].TimeTaken){c=new clsStopwatch();$("#shuffletotalTime").text(localFolderAnsObj.listExcerciseModes[1].TimeTaken)}if(localFolderAnsObj.listExcerciseModes[1].Score){$("#shuffleResult").text(localFolderAnsObj.listExcerciseModes[1].Score)}}if($("#shuffletotalTime").text().length==0){z=0;$("#shuffletotalTime").text("00:00");c=new clsStopwatch()}else{z=parseInt($("#shuffletotalTime").text())}m="shuffle";if(K){V=false;showQuestionLayer(true);u=l.slice();if(!v){if(document.getElementById("shuffleResult").innerText.length==0){document.getElementById("shuffleResult").innerHTML="0"}document.getElementById("shuffleQuestTotal").innerHTML="/"+l.length;dataString=$(K);controlCount=0;localFolderAnsObj=getLocalFolderAnswers();$(dataString).find("DetailProperties").each(function(){var aa="";var ab="";if(localFolderAnsObj.listExcerciseModes){var x=parseInt($(this).find("CtlID").text());if(localFolderAnsObj.listExcerciseModes[1].listControls.length>0){ansObject=$.grep(localFolderAnsObj.listExcerciseModes[1].listControls,function(ac){return ac.CtlID==x});if(ansObject){ab=ansObject[0].CtlValue}}}if(ab.length){aa=$(this).find("CtlDefaultValue").text()}else{aa=randomSelectItem($(this).find("CtlDefaultValue").text());if(aa){aa=aa.value}}console.log(aa);createDragControls($(this).find("CtlID").text(),$(this).find("CtlName").text(),$(this).find("CtlX").text(),$(this).find("CtlY").text(),$(this).find("CtlWidth").text(),$(this).find("CtlHt").text(),aa,$(this).find("CtlFontFamily").text(),$(this).find("CtlFontSize").text(),$(this).find("CtlFontStyle").text(),$(this).find("CtlFontColor").text(),ab);controlCount++})}document.getElementById("shuffle").appendChild(document.getElementById("container"));v=true;watchStart("#shuffletotalTime",f,c)}};checkShuffleCounterNeedsStop=function(x){if(x==l.length){clearInterval(f)}};multiSelloadedPanel=function(){$("#selectExerciseName").text(P);setLocaltoSave(false);stopCounters();localFolderAnsObj=getLocalFolderAnswers();if(localFolderAnsObj.listExcerciseModes){if(localFolderAnsObj.listExcerciseModes[2].Attempts){$("#multiNoAttempts").text(localFolderAnsObj.listExcerciseModes[2].Attempts)}if(localFolderAnsObj.listExcerciseModes[2].TimeTaken){U=new clsStopwatch();$("#multitotalTime").text(localFolderAnsObj.listExcerciseModes[2].TimeTaken)}if(localFolderAnsObj.listExcerciseModes[2].Score){$("#multiSelectResult").text(localFolderAnsObj.listExcerciseModes[2].Score)}}if($("#multitotalTime").text().length==0){X=0;$("#multitotalTime").text("00:00");U=new clsStopwatch()}else{X=parseInt($("#multitotalTime").text())}m="multiSelect";if(K){if(!h){s=false;if(document.getElementById("multiSelectResult").innerText.length==0){document.getElementById("multiSelectResult").innerHTML="0"}document.getElementById("mulQuestTotal").innerHTML="/"+l.length;dataString=$(K);localFolderAnsObj=getLocalFolderAnswers();var aa=0;var x="";$(dataString).find("DetailProperties").each(function(){if(localFolderAnsObj.listExcerciseModes){if(localFolderAnsObj.listExcerciseModes[2].listControls.length>0){x=localFolderAnsObj.listExcerciseModes[2].listControls[aa].CtlValue}}var ab=creatComboControls($(this).find("CtlName").text(),$(this).find("CtlX").text(),$(this).find("CtlY").text(),$(this).find("CtlWidth").text(),$(this).find("CtlHt").text(),$(this).find("CtlDefaultValue").text(),$(this).find("CtlFontFamily").text(),$(this).find("CtlFontSize").text(),$(this).find("CtlFontStyle").text(),$(this).find("CtlFontColor").text(),x);document.getElementById("multiSelect").appendChild(ab);var ac=creatReadClickControls($(this).find("CtlName").text(),$(this).find("CtlX").text(),$(this).find("CtlY").text(),$(this).find("CtlWidth").text(),$(this).find("CtlHt").text(),$(this).find("CtlDefaultValue").text(),$(this).find("CtlFontFamily").text(),$(this).find("CtlFontSize").text(),$(this).find("CtlFontStyle").text(),$(this).find("CtlFontColor").text(),x);document.getElementById("multiSelect").appendChild(ac);aa++});selOptionAnswers();h=true}multiOptionsAdd();document.getElementById("multiSelect").appendChild(document.getElementById("container"));hideQuestionLayer(false);watchStart("#multitotalTime",Z,U)}};checkMultiCounterNeedsStop=function(x){if(x==l.length){clearInterval(Z)}};randSelloadedPanel=function(){stopCounters();setLocaltoSave(false);localFolderAnsObj=getLocalFolderAnswers();if(localFolderAnsObj.listExcerciseModes){if(localFolderAnsObj.listExcerciseModes[3].Attempts){$("#randomNoAttempts").text(localFolderAnsObj.listExcerciseModes[3].Attempts)}if(localFolderAnsObj.listExcerciseModes[3].TimeTaken){S=new clsStopwatch();$("#randomtotalTime").text(localFolderAnsObj.listExcerciseModes[3].TimeTaken)}if(localFolderAnsObj.listExcerciseModes[3].Score){$("#randSelectResult").text(localFolderAnsObj.listExcerciseModes[3].Score)}}if($("#randomtotalTime").text().length==0){R=0;$("#randomtotalTime").text("00:00");S=new clsStopwatch()}else{R=parseInt($("#randomtotalTime").text())}m="randomSelect";if(K){N=false;showQuestionLayer(false);u=l.slice();var x=randomSelectItem();if(x){x=x.value}if(!o){if(document.getElementById("randSelectResult").innerText.length==0){document.getElementById("randSelectResult").innerHTML="0"}document.getElementById("randQuestTotal").innerHTML="/"+l.length;dataString=$(K);var aa=0;localFolderAnsObj=getLocalFolderAnswers();$(dataString).find("DetailProperties").each(function(){var ab="";if(localFolderAnsObj.listExcerciseModes){if(localFolderAnsObj.listExcerciseModes[3].listControls.length>0){ab=localFolderAnsObj.listExcerciseModes[3].listControls[aa].CtlValue}}console.log(x);document.getElementById("randomSelect").appendChild(creatClickControls($(this).find("CtlName").text(),$(this).find("CtlX").text(),$(this).find("CtlY").text(),$(this).find("CtlWidth").text(),$(this).find("CtlHt").text(),$(this).find("CtlDefaultValue").text(),$(this).find("CtlFontFamily").text(),$(this).find("CtlFontSize").text(),$(this).find("CtlFontStyle").text(),$(this).find("CtlFontColor").text(),ab));aa++});createRandDivControl(x,u);ctrlFontSize="15px";if((Q.innerWidth)<=360){$("#randAnswerDiv").css("margin-left","65px");ctrlFontSize="8px"}$("#randAnswerDiv").css("fontSize",ctrlFontSize);$("#randAnswerDiv").text(x)}o=true;document.getElementById("randomSelect").appendChild(document.getElementById("container"));watchStart("#randomtotalTime",j,S)}};randomMultiCounterNeedsStop=function(x){if(x==l.length){clearInterval(j)}};showAnsloadedPanel=function(){m="showAnswer";if(K){if(!k){dataString=$(K);$(dataString).find("DetailProperties").each(function(){document.getElementById("showAnswer").appendChild(creatReadOnlyTextControls($(this).find("CtlName").text(),$(this).find("CtlX").text(),$(this).find("CtlY").text(),$(this).find("CtlWidth").text(),$(this).find("CtlHt").text(),$(this).find("CtlDefaultValue").text(),$(this).find("CtlFontFamily").text(),$(this).find("CtlFontSize").text(),$(this).find("CtlFontStyle").text(),$(this).find("CtlFontColor").text()))})}k=true;document.getElementById("showAnswer").appendChild(document.getElementById("container"));hideQuestionLayer(false)}};showAnswer=function(){};randomSelectItem=function(x){if(u.length){defaultCtrlIndex=Math.floor(Math.random()*u.length);defaultCtrlvalue=u[defaultCtrlIndex];if(defaultCtrlvalue.value==x){defaultCtrlIndex=Math.floor(Math.random()*u.length);return u.splice(defaultCtrlIndex,1)[0]}else{return u.splice(defaultCtrlIndex,1)[0]}return null}};var T=[];var p=null;getLookUpActionSheet=function(x){for(prop in T){if(T[prop].id==x){return T[prop].arrAnswer;break}}};multiOptionItems=function(ab,ad){exerciseActicity=getExerciseActivity();if(F&&exerciseActicity==1){O=parseInt(F.noOfItems)}arrAnswer=[];if(p==null){p=l.slice()}var ae=0;answersCount=O;arrAnsObj=setRandomAnswers(arrAnswer,answersCount,p,ae,ab);if(arrAnsObj){arrAnsObj.push(ab);arrAnswer=[];var af=arrAnsObj.slice();var aa=1;while(af.length){if(answersCount>0){var ag=Math.floor(Math.random()*af.length);if(af[ag].toLowerCase()==ab.toLowerCase()){ag=Math.floor(Math.random()*af.length)}var ac=af.splice(ag,1);arrAnswer.push(ac[0]);ae++}else{}}}var x={};x.id=ad;x.arrAnswer=arrAnswer;T.push(x)};multiOptionsAdd=function(){if(l.length>0){if(document.getElementById("cmb"+l[0].id).options!=null){if(O==document.getElementById("cmb"+l[0].id).options.length){return true}}exerciseActicity=getExerciseActivity();if(F&&exerciseActicity==1){O=parseInt(F.noOfItems)}for(var ac=0;ac<=l.length-1;ac++){arrAnswer=[];var aa=document.getElementById("cmb"+l[ac].id);aa.style.display="block";var af=l[ac].value;var ab=l.slice();var ae=0;answersCount=O;arrAnsObj=setRandomAnswers(arrAnswer,answersCount,ab,ae,af);if(arrAnsObj){arrAnsObj.push(af);var ah=arrAnsObj.slice();var ag=1;while(ah.length){if(answersCount>0){var x=Math.floor(Math.random()*ah.length);if(ah[x].toLowerCase()==af.toLowerCase()){x=Math.floor(Math.random()*ah.length)}var ad=ah.splice(x,1);aa.options[aa.options.length]=new Option(ad[0],ae);ae++;$("#cmb"+l[ac].id).prop("selectedIndex",-1)}else{}}$("#cmb"+l[ac].id).hide()}}}};setRandomAnswers=function(ad,ac,ae,ab,x){while(ac-1){var aa=Math.floor(Math.random()*(ae.length));aa=l[aa];if(aa.value.toLowerCase()==x.toLowerCase()){ae.splice(aa,1);setRandomAnswers(ad,ac,ae,ab,x);break}if($.inArray(aa.value,ad)!=-1){setRandomAnswers(ad,ac,ae,ab,x);break}ad.push(aa.value);ac--;ab++;ae.splice(aa,1)}return ad};selOptionAnswers=function(){$("#selQuestionOption option").remove();if(l.length>0){var x;for(var aa=2;aa<=parseInt(l.length/2)+1;aa++){$("#selQuestionOption").append(new Option(aa,aa,true,true));x=aa}$("#selQuestionOption").prop("selectedIndex",0)}};homeloadedPanel=function(){m="home"};gotoCurrentPage=function(){$.ui.toggleSideMenu(false);$.ui.loadContent(m,false,false,"slide")};resetSelectCtrl=function(){O=parseInt($("#selQuestionOption option:selected").text());for(var aa=0;aa<=l.length-1;aa++){var x=document.getElementById("cmb"+l[aa].id);if(x==null){return}if(x.options==null){return}$("#cmb"+l[aa].id).hide();while(x.options.length>0){x.remove(0)}}};setSettings=function(){$.ui.toggleSideMenu(false);if(document.getElementById("selQuestionOption").options.length>0){$("#selQuestionOption option:selected").text(O)}};typeAnswer=function(){console.log("you clciked me")};getDataSet=function(){return l};resetPageTesting=function(){adjustControls();adjustControlsBasedOnViewPort(l)};function G(){if(l.length>0){console.log("change orientaion"+Q.orientation);adjustControls();adjustControlsBasedOnViewPort(l)}}Q.onorientationchange=function(){setTimeout(G,200)};gotoCurrentPage=function(ab){var x=false;if(I||V||s||N){x=true}var aa=false;if(ab=="settings"){aa=true;$.ui.hideMask()}exerciseActicity=getExerciseActivity();if(!i&&!aa&&x){$.ui.popup({title:"Save Exercise",message:"Would you like to save the Exercise?",cancelText:"No",cancelCallback:function(){console.log("cancelled");$.ui.loadContent(currentModule,false,false,"slide");return},doneText:"Yes",doneCallback:function(){console.log("Done for!");$.ui.showMask("Saving Exercise...");if(device.platform!=null){if(checkConnection()==-1||checkConnection()==-2){$.ui.popup("No Internet connection is found.Please coonect to network and then try again.");return false}}uploadSaveLocalData(l);$.ui.loadContent(currentModule,false,false,"slide")}})}else{$.ui.loadContent(currentModule,false,false,"slide")}};lclFolderloadedPanel=function(){currentModule="localFolder";if(device.platform!=null){if(checkConnection()==-1||checkConnection()==-2){$.ui.popup("No Internet connection is found.Please coonect to network and then try again.");return false}}getLocalFolderContents()};var d=false;backtobagPack=function(){d=true;$.ui.loadContent("#backPack",false,false,"slide")};backPackloadedPanel=function(){currentModule="backPack";var aa=new Date();var x=new Array();x[0]="Jan";x[1]="Feb";x[2]="Mar";x[3]="Apr";x[4]="May";x[5]="Jun";x[6]="Jul";x[7]="Aug";x[8]="Sept";x[9]="Oct";x[10]="Nov";x[11]="Dec";$("#backpackTodaysMonth").text(x[aa.getMonth()]);$("#backpackTodaysDate").text(aa.getDate());if(!d){$.ui.showMask("Loading...");d=false}};backPackCourseContPanel=function(){D=null;clearAllViewFields();currentModule="backPackContentList"};setLogin=function(){if(localStorage.getItem("domainName")){$("#txtUserDomain").val(localStorage.getItem("domainName"))}};logOut=function(){$("#txtUserName").val("");$("#txtUserPassword").val("")};displayAlertBox=function(x,ab,aa){navigator.notification.alert(x,aa,ab,"OK")};bagpackLogin=function(){y=true;if($("#txtUserName").val().length==0||$("#txtUserPassword").val().length==0||$("#txtUserDomain").val().length==0){$("input:text[required]").parent().show();$.ui.popup("All the fields are mandatory");return false}if(device.platform!=null){if(checkConnection()==-1||checkConnection()==-2){$.ui.popup("No Internet connection is found.Please coonect to network and then try again.");return false}}validateDomain()};clearAllViewFields=function(){if(currentModule!="backPackContentList"){initStage()}resetTimers();resetAllControls()};saveLocalExercise=function(){$.ui.popup({title:"Save Exercise",message:"Would you like to save the Exercise?",cancelText:"No",cancelCallback:function(){console.log("cancelled");return},doneText:"Yes",doneCallback:function(){console.log("Done for!");$.ui.showMask("Saving Exercise...");if(device.platform!=null){if(checkConnection()==-1||checkConnection()==-2){$.ui.popup("No Internet connection is found.Please coonect to network and then try again.");return false}}uploadSaveLocalData(l)}})};saveExercise=function(x){$.ui.popup({title:"Submit Exercise",message:"Would you like to Submit the Exercise?",cancelText:"No",cancelCallback:function(){console.log("cancelled");return},doneText:"Yes",doneCallback:function(){console.log("Done for!");$.ui.showMask("Submit Exercise...");if(device.platform!=null){if(checkConnection()==-1||checkConnection()==-2){$.ui.popup("No Internet connection is found.Please coonect to network and then try again.");return false}}uploadSaveData(l,x)}})};var A=function(){AppMobi.device.setRotateOrientation("portrait");AppMobi.device.setAutoRotate(false);webRoot=AppMobi.webRoot+"";AppMobi.device.hideSplashScreen();$.ui.blockPageScroll();$.ui.launch()};document.addEventListener("intel.xdk.device.ready",A,false);function J(ab,x){var aa=$("#"+x)[0];if(ab.className=="expanded"){ab.className="collapsed"}else{ab.className="expanded"}$(aa).toggle()}if($.os.android||$.os.ie||W=="android"){$.ui.ready(function(){$("#main .list").append("<li><a id='toggleAndroidTheme'>Toggle Theme Color</a></li>");var x=$("#afui");$("#toggleAndroidTheme").bind("click",function(aa){if(x.hasClass("light")){x.removeClass("light")}else{x.addClass("light")}})})}})(window);
var phonecatApp = angular.module('phonecatApp', []);

 
phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [{"CourseID":1,"CourseName":"Maths"},{"CourseID":2,"CourseName":"Science"},{"CourseID":3,"CourseName":"Social Studies"},{"CourseID":4,"CourseName":"Computer Technology"},{"CourseID":5,"CourseName":"Languages"}]; 
  $scope.courseList =null;
  $scope.courses=null;
  $scope.domainID=0;
  $scope.strFileName =null;
  $scope.strContent =null;
  $scope.courseContentID=null;
  $scope.studentId=null;
  $scope.activityType =null;
  $scope.localActivityType =null;

  
validateDomain = function(){
  
  var userName = $('#txtUserName').val();
  var password =$('#txtUserPassword').val();
  var userDomain = $('#txtUserDomain').val();
  //sapi.validateDomain($('#txtDomain').val(),$scope.validateResponse);
  $.ui.showMask();
  sapi.validateStudent(userName,password,userDomain,$scope.validateResponse,'login');
}
//'PlanoISD'
$scope.validateResponse = function(response){
	 objDomain =JSON.parse(response);
   	 if(objDomain.DomainID>0 ){
   	 	$scope.domainID = objDomain.DomainID;
      $scope.studentId =objDomain.LoginID;
   	 	$scope.getCourseList();
      localStorage.setItem("domainName",$('#txtUserDomain').val());
   	 	$.ui.loadContent("#backPack",false,false,"slide");
   	 }else{
   	 $.ui.hideMask();
   	 $.ui.popup('Invalid Username, Password, or Domain. Please modify and try again.');

     /*$.ui.popup({
   	 	title:"Error",
   	 	message:"user is Invalid.Please enter all the fields correctly.",
   	 	cancelText:"OK",
   	 	cancelCallback: function(){console.log("cancelled");
   	 	//$.ui.loadContent('#home',false,false,"slide");
   	 	},
   	 	
   	 	cancelOnly:false
   	 	
   	 });*/
   	// alert('Domain is Invalid.Please go to settings and type correct domain name');
   	 }
}

$scope.getCourseList = function(){
  	sapi.getCourseList($scope.getCourseListResp,'backPack');
  }
 
$scope.getCourseListResp = function(response){
  	console.log (response);
  	//$scope.courseList = response;
  	$('#courseList').empty();
  	if(response.length){
  	objCourseList = JSON.parse(response)
  	for(prop in objCourseList){
  		$("#courseList").append("<li><a href='#backPackContentList' onclick='getCourseContents("+objCourseList[prop].CourseID+",this);' >"+objCourseList[prop].CourseName+"</a></li>");
  	}
  	$.ui.hideMask();
  	}
  }
getLocalFolderContents = function(){
  sapi.getLocalFolderData($scope.domainID,$scope.studentId,$scope.localFolderContentResponse);
}
$scope.localFolderContentResponse = function(response){
  $('#localFileList').empty();
  if(response.length){
    objContents = JSON.parse(response);
    for(prop in objContents){
      localActivityType =0; //0 =practice mode, 1 = test mode
      if(objContents[prop].ActivityType.toUpperCase() =='TEST'){
        localActivityType =1;
      }
      $('#localFileList').append("<li><a  onclick='getLocalContentsDetails("+localActivityType+","+objContents[prop].ContentID+",this);' >"+objContents[prop].ContentName+"</a></li>");
    }
  }
}  
getCourseContents =function(courseId,currentItem){
	if(device.platform !=null){
                        if(checkConnection() ==-1 || checkConnection() ==-2){
                            $.ui.popup('No Internet connection is found. Please connect to network and then try again.');
                            return false;
                        }
                    }
  setSelectedItemColor(currentItem);
	$.ui.showMask("Loading...");
 	console.log(courseId);
 	sapi.getContentList($scope.domainID,courseId,$scope.studentId,$scope.getCourseContentListResp,'backPackContentList');
 }
$scope.getCourseContentListResp = function(response){
  	console.log ('content list response' + response);
    
  	$('#courseContentList').empty();
  	//$scope.courseList = response;
  	if(response.length){
  		objCourseList = JSON.parse(response)
  		for(prop in objCourseList){
        var activityType =0;
        if(objCourseList[prop].ActivityType.toUpperCase()=='TEST'){
          activityType =1;
        }
        var smartPaper =0
         if(objCourseList[prop].AppName.toUpperCase()=='SMARTPAPER'){
          smartPaper =1;
        }
  			$("#courseContentList").append("<li><a  onclick='getContentsDetails("+activityType+","+objCourseList[prop].ContentID+","+smartPaper+",this);' >"+objCourseList[prop].ContentName+"</a></li>");
  		}
  	}else{
      $("#courseContentList").append("<li>No content available.</li>");
    }$.ui.hideMask();
  } 
  getLocalContentsDetails = function(ActivityType,ContentID,currentItem) {
    if(device.platform !=null){
                        if(checkConnection() ==-1 || checkConnection() ==-2){
                            $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
                            return false;
                        }
                    }
    $scope.activityType = ActivityType;
    $scope.courseContentID = ContentID;
    $.ui.showMask("building Exercise...");

    sapi.getLocalFolderDataContents(ContentID,$scope.studentId,getLocalContentsDataResponse,'localFolder');
  }  
  getContentsDetails = function(ActivityType,ContentID,appName,currentItem) {
    setExerciseName(currentItem.innerText);
    if(appName ==0){
      if(device.platform !=null){
                        if(checkConnection() ==-1 || checkConnection() ==-2){
                            $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
                            return false;
                        }
                    }
      $scope.courseContentID = ContentID;
      $scope.activityType = ActivityType;
      setSelectedItemColor(currentItem);
  	 $.ui.showMask("building Exercise...");
  	 sapi.getData(2,ContentID,getBackPackDataResponse,'backPackContentList');
    }else{$.ui.popup('This worksheet is not supported in the current version.');}
  }
  getLocalContentsDataResponse = function(data){
    var xmlString ='<?xml version="1.0" standalone="yes"?>'+data;
    getLocalDataResponse(data);
  }  
  getBackPackDataResponse = function(data){
  	getDataResponse(data);
  	var xmlString ='<?xml version="1.0" standalone="yes"?>'+data;
  	
  	$(xmlString).siblings('NewDataSet').find('DisplayAreaProperties').each(function(){
				//$(xmlString).siblings('DisplayAreaProperties').each(function(){
		   		$scope.strFileName = $(this).find('PctFileName').text();
		   		$scope.strContent = data;
		   		
			});
	
	//future fuctionality
	/*
	if($scope.strFileName !=null && $scope.strContent !=null && $.os.android == true){
		//todo save into the database
		
		appDataBase = window.sqlitePlugin.openDatabase({name: "attachments"});
       	appDataBase.transaction(insertContents, transaction_error);
	}*/
  }
  var dataSet = {};
  var pageName={};
  var ctrlDetails = [];
  var NewDataSet={};
  dataSet.DetailProperties = ctrlDetails;
  /* save data to the local folder */
  uploadSaveLocalData = function(arrInputControls){
    
    //post to the Local Folder API.
    var payLoad={};
    var listArrExcerciseMode =[];
    var objListExcerciseModes ={};
    objListExcerciseModes.listExcerciseModes = listArrExcerciseMode;

    
    objListExcerciseModes.listExcerciseModes.push(buildTextAnswers(arrInputControls));
    objListExcerciseModes.listExcerciseModes.push(buildShuffleAnswers(arrInputControls));
    objListExcerciseModes.listExcerciseModes.push(buildSelectAnswers(arrInputControls));
    objListExcerciseModes.listExcerciseModes.push(buildRandomAnswers(arrInputControls));
    //build payload
    payLoad.ContentID = $scope.courseContentID;
    payLoad.DomainID = $scope.domainID;
    payLoad.LoginID = $scope.studentId;
    payLoad.Answers = objListExcerciseModes;
    console.log(JSON.stringify(payLoad));
    sapi.uploadExercise(JSON.stringify(payLoad),$scope.localFolderResponse,'PutintoLocalFolder');
    
  }
uploadSaveData = function(arrInputControls,exType){
    //'ContentID=1&StudentLoginID=1&ContentXML={ "NewDataSet": { "DetailProperties": { "CtlID": "1" } }';
   /* var arrObject = [];
      var strXml = getXmlString();
      
     // strXml +='<ContentXML>';
      //strXml +='<NewDataSet>';
      switch(exType){
        case "type":
          buildTypeAns(strXml,arrInputControls);
        break;
        case "shuffle":
          buildShuffle(strXml,arrInputControls);
        break;
        case "multiSelect":
          buildSelect(strXml,arrInputControls);
        break;
        case "randomSelect":
        buildRandom(strXml,arrInputControls);
        break;
      }
      pageName.NewDataSet = dataSet;
      strXml += JSON.stringify(pageName)+'}';
      console.log(strXml);
      //strXml +='</NewDataSet>';
      //strXml +='</ContentXML>';
      //strXml +='<StudentLoginID>'+$scope.studentId+'</StudentLoginID>';
      //strXml +='</PutWork>';*/
    var payLoad={};
    var listArrExcerciseMode =[];
    var objListExcerciseModes ={};
    objListExcerciseModes.listExcerciseModes = listArrExcerciseMode;
    if($scope.activityType ==1){ //test mode
      switch(exType){
        case "type":
          objListExcerciseModes.listExcerciseModes.push(buildTextAnswers(arrInputControls));
        break;
        case "shuffle":
          objListExcerciseModes.listExcerciseModes.push(buildShuffleAnswers(arrInputControls));
        break;
        case "multiSelect":
         objListExcerciseModes.listExcerciseModes.push(buildSelectAnswers(arrInputControls));
        break;
        case "randomSelect":
        objListExcerciseModes.listExcerciseModes.push(buildRandomAnswers(arrInputControls));
        break;
      }
    }else{
      objListExcerciseModes.listExcerciseModes.push(buildTextAnswers(arrInputControls));
      objListExcerciseModes.listExcerciseModes.push(buildShuffleAnswers(arrInputControls));
      objListExcerciseModes.listExcerciseModes.push(buildSelectAnswers(arrInputControls));
      objListExcerciseModes.listExcerciseModes.push(buildRandomAnswers(arrInputControls));
    }
    payLoad.ContentID = $scope.courseContentID;
    payLoad.DomainID = $scope.domainID;
    payLoad.LoginID = $scope.studentId;
    payLoad.Answers = objListExcerciseModes;
    console.log(JSON.stringify(payLoad));
    sapi.uploadExercise(JSON.stringify(payLoad),$scope.validatePostResponse,'PublishWorkJson');
    //sapi.uploadExercise(strXml,$scope.validatePostResponse,'PublishWorkJson');

  }
  

  buildTextAnswers = function(arrInputControls){
    var listExcercises=[];
    for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
        var inputCtrl = document.getElementById(arrInputControls[prop].id);
        var listControl = {
          "CtlID": arrInputControls[prop].ctrlID,
          "CtlValue": inputCtrl.value 
        }
        listExcercises.push(listControl);
    }
    
    var listExcerciseMode ={};
    listExcerciseMode.ModeName ='Text';
    listExcerciseMode.Attempts =$('#noAttempts').text();
    listExcerciseMode.TimeTaken =$('#totalTime').text();
    listExcerciseMode.Score =$('#typAnsResult').text();

    listExcerciseMode.listControls = listExcercises;
    return listExcerciseMode;
  }
  buildSelectAnswers = function(arrInputControls){
    var listExcercises=[];
    for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
         var inputCtrl = document.getElementById(arrInputControls[prop].id);
          inputCtrl = document.getElementById('lblSelect' + inputCtrl.id);
          if(inputCtrl){
            var ctrlText = inputCtrl.innerText ==''? '':inputCtrl.innerText;
            var listControl = {
            "CtlID": arrInputControls[prop].ctrlID,
            "CtlValue": ctrlText
            }
          //pageName.Select =detailProperties;
          listExcercises.push(listControl);
         /* strXml +='<'+ctrlId+'>';
          strXml += inputCtrl.innerText =='Pick'? '':inputCtrl.innerText;
          strXml +='</'+ctrlId+'>';*/
        }else{break;}
      }
    
    var listExcerciseMode ={};
    listExcerciseMode.ModeName ='Select';
    listExcerciseMode.Attempts =$('#multiNoAttempts').text();
    listExcerciseMode.TimeTaken =$('#multitotalTime').text();
    listExcerciseMode.Score =$('#multiSelectResult').text();
    listExcerciseMode.listControls = listExcercises;
    return listExcerciseMode;
  }
  buildRandomAnswers = function(arrInputControls){
   var listExcercises=[];
    for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
         var inputCtrl = document.getElementById(arrInputControls[prop].id);
          inputCtrl = document.getElementById('clk' + inputCtrl.id);
          if(inputCtrl){
            var ctrlText = inputCtrl.innerText ==''? '':inputCtrl.innerText;
            var listControl = {
            "CtlID": arrInputControls[prop].ctrlID,
            "CtlValue": ctrlText
            }
          //pageName.Select =detailProperties;
          listExcercises.push(listControl);
         /* strXml +='<'+ctrlId+'>';
          strXml += inputCtrl.innerText =='Pick'? '':inputCtrl.innerText;
          strXml +='</'+ctrlId+'>';*/
        }else{break;}
      }
    
    var listExcerciseMode ={};
    listExcerciseMode.ModeName ='Random';
    listExcerciseMode.Attempts =$('#randomNoAttempts').text();
    listExcerciseMode.TimeTaken =$('#randomtotalTime').text();
    listExcerciseMode.Score =$('#randSelectResult').text();
    listExcerciseMode.listControls = listExcercises;
    return listExcerciseMode;
  }
  buildShuffleAnswers = function(arrInputControls){
    var question_container_layer = getQuestionContainerLayer();
    var listExcercises=[];
    if(question_container_layer){
      for(prop=0,x=question_container_layer.children.length;prop<x;prop++){
        var ctrlId = question_container_layer.children[prop].attrs.id;
          ctrlId = ctrlId.split('drag')[1];
        var ctrlText = question_container_layer.children[prop].children[1].partialText;
        var listControl = {
            "CtlID": question_container_layer.children[prop].attrs.name,
            "CtlValue": ctrlText
            }
        listExcercises.push(listControl);
      }
    }
    var listExcerciseMode ={};
    listExcerciseMode.ModeName ='Shuffle';
    listExcerciseMode.Attempts =$('#shuffleNoAttempts').text();
    listExcerciseMode.TimeTaken =$('#shuffletotalTime').text();
    listExcerciseMode.Score =$('#shuffleResult').text();
    listExcerciseMode.listControls = listExcercises;
    return listExcerciseMode;
  
}

$scope.localFolderResponse = function(response){
  if(response){

      if(response.MessageID == 0)
      {
        //$.ui.popup('Exercise saved successfully.');
        //replace with Cordova message box
        displayAlertBox('Exercise saved successfully.','Save Exercise',localFolderSaveAction);
        setLocaltoSave(true);
       }
       else{
        $.ui.popup('There is an error while submitting Exercise.Please try again later');
       } 
    }
    $.ui.hideMask();
}
  localFolderSaveAction = function(){
    //will implement in future
  }
  $scope.validatePostResponse = function(response){
    //alert(response);
    if(response){
      if(response.MessageID == 0){
        //$.ui.popup('Exercise submitted successfully.');
        displayAlertBox('Exercise saved successfully.','Submit Exercise',submitFolderAction)
       
       }else{
        $.ui.popup('There is an error while submitting Exercise.Please try again later');
       }
      }
      $.ui.hideMask();
  }
  submitFolderAction = function(){
     setLocaltoSave(true);
        gotoCurrentPage();
  }
  getXmlString = function(){

    //var strXml = '<PutWork xmlns="http://schemas.datacontract.org/2004/07/Inspherion.EASEWcfService" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">';
    //strXml +='<ContentID>'+$scope.courseContentID+'</ContentID>';
      strQuery = '{"ContentID":'+$scope.courseContentID+',"ContentType":"'+getContentType()+'","StudentLoginID":'+$scope.studentId+',"ContentXML":';
      return strQuery;
  }
  getExerciseActivity = function(){
    return $scope.activityType;
  }
  getLocalExerciseActivity = function(){
    return $scope.localActivityType;
  }
  buildTypeAns = function(strXml,arrInputControls){
    //strXml +='<TypeAns>';
      for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
          var inputCtrl = document.getElementById(arrInputControls[prop].id);
          var detailProperties = {
            "CtlID": arrInputControls[prop].ctrlID,
            "CurrentValueReg": inputCtrl.value 
            }
            dataSet.DetailProperties.push(detailProperties);
         /* strXml +='<'+inputCtrl.id+'>';
          strXml +=inputCtrl.value;
          strXml +='</'+inputCtrl.id+'>';*/
      }
   // strXml +='</TypeAns>';
    return strXml;
  }
  buildShuffle = function(strXml,arrInputControls){
   // strXml +='<Shuffle>';
    var question_container_layer = getQuestionContainerLayer();
    if(question_container_layer){

      for(prop=0,x=question_container_layer.children.length;prop<x;prop++){
        var ctrlId = question_container_layer.children[prop].attrs.id;
          ctrlId = ctrlId.split('drag')[1];
        var ctrlText = question_container_layer.children[prop].children[1].partialText;
        var detailProperties = {
            "CtlID": arrInputControls[prop].ctrlID,
            "CurrentValueReg": ctrlText
            }
        dataSet.DetailProperties.push(detailProperties);
        
        /*strXml +='<'+ctrlId+'>';
          strXml +=ctrlText;
          strXml +='</'+ctrlId+'>';*/
      }
    }
    //strXml +='</Shuffle>';
    
    return strXml;
  }

  buildSelect = function(strXml,arrInputControls){
    //strXml +='<Select>';
      for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
         var inputCtrl = document.getElementById(arrInputControls[prop].id);
          var inputCtrl = document.getElementById('lblSelect' + inputCtrl.id);
          if(inputCtrl){
            var ctrlId = inputCtrl.id.split('lblSelect')[1];
            var ctrlText = inputCtrl.innerText ==''? '':inputCtrl.innerText;
            var detailProperties = {
            "CtlID": arrInputControls[prop].ctrlID,
            "CurrentValueReg": ctrlText
            }
          //pageName.Select =detailProperties;
          dataSet.DetailProperties.push(detailProperties);
         /* strXml +='<'+ctrlId+'>';
          strXml += inputCtrl.innerText =='Pick'? '':inputCtrl.innerText;
          strXml +='</'+ctrlId+'>';*/
        }else{break;}
      }
    //strXml +='</Select>';
    return strXml;
  }
  buildRandom = function(strXml,arrInputControls){
    //strXml +='<Random>';
      for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
         var inputCtrl = document.getElementById(arrInputControls[prop].id);
          var inputCtrl = document.getElementById('clk' + inputCtrl.id);
          if(inputCtrl){
            var ctrlId = inputCtrl.id.split('clk')[1];
            
            var detailProperties = {
            "CtlID": arrInputControls[prop].ctrlID,
            "CurrentValueReg": inputCtrl.innerText
            }
          //pageName.Random =detailProperties;
          dataSet.DetailProperties.push(detailProperties);
         /* strXml +='<'+ctrlId+'>';
          strXml += inputCtrl.innerText ;
          strXml +='</'+ctrlId+'>';*/
        }else{break;}
      }
    //strXml +='</Random>';
    return strXml;
  }
  checkConnection = function() {
            var networkState = navigator.connection.type;
			var states = {};
            states[Connection.UNKNOWN]  = -2;
            states[Connection.ETHERNET] = 0;
            states[Connection.WIFI]     = 1;
            states[Connection.CELL_2G]  = 2;
            states[Connection.CELL_3G]  = 3;
            states[Connection.CELL_4G]  = 4;
            states[Connection.CELL]     = 5;
            states[Connection.NONE]     = -1;

            return states[networkState];
        },
  
  insertContents = function(tx){
  sqlInsert = "INSERT INTO mail_attachments (filename, content) VALUES ("+$scope.strFileName+","+$scope.strContent+")";
    	tx.executeSql(sqlInsert, function(tx, res) {
      	console.log("insertId: " + res._id + " -- probably 1");
      	console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
      });
    }
     transaction_error = function(tx, error) {
		//$.ui.hideMask();
		console.log(error);
    	$('#errorMsg').show();	
    }
});
/**
 * @namespace Kinetic
 */
var Kinetic = {};
(function() {
    Kinetic = {
        // public
        version: '5.0.1',

        // private
        stages: [],
        idCounter: 0,
        ids: {},
        names: {},
        shapes: {},
        listenClickTap: false,
        inDblClickWindow: false,

        // configurations
        enableTrace: false,
        traceArrMax: 100,
        dblClickWindow: 400,
        pixelRatio: undefined,

        // user agent  
        UA: (function() {
            var ua = navigator.userAgent.toLowerCase(),
                // jQuery UA regex
                match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
                /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
                /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
                /(msie) ([\w.]+)/.exec( ua ) ||
                ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
                [];

            return {
                browser: match[ 1 ] || '',
                version: match[ 2 ] || '0'
            };
        })(),

        /**
         * @namespace Filters
         * @memberof Kinetic
         */
        Filters: {},

        /**
         * Node constructor. Nodes are entities that can be transformed, layered,
         * and have bound events. The stage, layers, groups, and shapes all extend Node.
         * @constructor
         * @memberof Kinetic
         * @abstract
         * @param {Object} config
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
         */
        Node: function(config) {
            this._init(config);
        },

        /**
         * Shape constructor.  Shapes are primitive objects such as rectangles,
         *  circles, text, lines, etc.
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Node
         * @param {Object} config
         * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
         * @example
         * var customShape = new Kinetic.Shape({<br>
         *   x: 5,<br>
         *   y: 10,<br>
         *   fill: 'red',<br>
         *   // a Kinetic.Canvas renderer is passed into the drawFunc function<br>
         *   drawFunc: function(context) {<br>
         *     context.beginPath();<br>
         *     context.moveTo(200, 50);<br>
         *     context.lineTo(420, 80);<br>
         *     context.quadraticCurveTo(300, 100, 260, 170);<br>
         *     context.closePath();<br>
         *     context.fillStrokeShape(this);<br>
         *   }<br>
         *});
         */
        Shape: function(config) {
            this.__init(config);
        },

        /**
         * Container constructor.&nbsp; Containers are used to contain nodes or other containers
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Node
         * @abstract
         * @param {Object} config
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
         * @param {Function} [config.clipFunc] clipping function

         */
        Container: function(config) {
            this.__init(config);
        },

        /**
         * Stage constructor.  A stage is used to contain multiple layers
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Container
         * @param {Object} config
         * @param {String|DomElement} config.container Container id or DOM element
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
         * @param {Function} [config.clipFunc] clipping function

         * @example
         * var stage = new Kinetic.Stage({<br>
         *   width: 500,<br>
         *   height: 800,<br>
         *   container: 'containerId'<br>
         * });
         */
        Stage: function(config) {
            this.___init(config);
        },

        /**
         * Layer constructor.  Layers are tied to their own canvas element and are used
         * to contain groups or shapes
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Container
         * @param {Object} config
         * @param {Boolean} [config.clearBeforeDraw] set this property to false if you don't want
         * to clear the canvas before each layer draw.  The default value is true.
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
         * @param {Function} [config.clipFunc] clipping function

         * @example
         * var layer = new Kinetic.Layer();
         */
        Layer: function(config) {
            this.___init(config);
        },

        /**
         * Group constructor.  Groups are used to contain shapes or other groups.
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Container
         * @param {Object} config
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
         * @param {Function} [config.clipFunc] clipping function

         * @example
         * var group = new Kinetic.Group();
         */
        Group: function(config) {
            this.___init(config);
        },

        /**
         * returns whether or not drag and drop is currently active
         * @method
         * @memberof Kinetic
         */
        isDragging: function() {
            var dd = Kinetic.DD;

            // if DD is not included with the build, then
            // drag and drop is not even possible
            if (!dd) {
                return false;
            }
            // if DD is included with the build
            else {
                return dd.isDragging;
            }
        },
        /**
        * returns whether or not a drag and drop operation is ready, but may
        *  not necessarily have started
        * @method
        * @memberof Kinetic
        */
        isDragReady: function() {
            var dd = Kinetic.DD;

            // if DD is not included with the build, then
            // drag and drop is not even possible
            if (!dd) {
                return false;
            }
            // if DD is included with the build
            else {
                return !!dd.node;
            }
        },
        _addId: function(node, id) {
            if(id !== undefined) {
                this.ids[id] = node;
            }
        },
        _removeId: function(id) {
            if(id !== undefined) {
                delete this.ids[id];
            }
        },
        _addName: function(node, name) {
            if(name !== undefined) {
                if(this.names[name] === undefined) {
                    this.names[name] = [];
                }
                this.names[name].push(node);
            }
        },
        _removeName: function(name, _id) {
            if(name !== undefined) {
                var nodes = this.names[name];
                if(nodes !== undefined) {
                    for(var n = 0; n < nodes.length; n++) {
                        var no = nodes[n];
                        if(no._id === _id) {
                            nodes.splice(n, 1);
                        }
                    }
                    if(nodes.length === 0) {
                        delete this.names[name];
                    }
                }
            }
        }
    };
})();

// Uses Node, AMD or browser globals to create a module.

// If you want something that will work in other stricter CommonJS environments,
// or if you need to create a circular dependency, see commonJsStrict.js

// Defines a module "returnExports" that depends another module called "b".
// Note that the name of the module is implied by the file name. It is best
// if the file name and the exported global have matching names.

// If the 'b' module also uses this type of boilerplate, then
// in the browser, it will create a global .b that is used below.

// If you do not want to support the browser global path, then you
// can remove the `root` use and the passing `this` as the first arg to
// the top function.

// if the module has no dependencies, the above pattern can be simplified to
( function(root, factory) {
    if( typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    }
    else if( typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    }
    else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function() {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return Kinetic;
}));
;(function() {
    /**
     * Collection constructor.  Collection extends
     *  Array.  This class is used in conjunction with {@link Kinetic.Container#get}
     * @constructor
     * @memberof Kinetic
     */
    Kinetic.Collection = function() {
        var args = [].slice.call(arguments), length = args.length, i = 0;

        this.length = length;
        for(; i < length; i++) {
            this[i] = args[i];
        }
        return this;
    };
    Kinetic.Collection.prototype = [];
    /**
     * iterate through node array and run a function for each node.
     *  The node and index is passed into the function
     * @method
     * @memberof Kinetic.Collection.prototype
     * @param {Function} func
     * @example
     * // get all nodes with name foo inside layer, and set x to 10 for each
     * layer.get('.foo').each(function(shape, n) {<br>
     *   shape.setX(10);<br>
     * });
     */
    Kinetic.Collection.prototype.each = function(func) {
        for(var n = 0; n < this.length; n++) {
            func(this[n], n);
        }
    };
    /**
     * convert collection into an array
     * @method
     * @memberof Kinetic.Collection.prototype
     */
    Kinetic.Collection.prototype.toArray = function() {
        var arr = [],
            len = this.length,
            n;

        for(n = 0; n < len; n++) {
            arr.push(this[n]);
        }
        return arr;
    };
    /**
     * convert array into a collection
     * @method
     * @memberof Kinetic.Collection
     * @param {Array} arr
     */
    Kinetic.Collection.toCollection = function(arr) {
        var collection = new Kinetic.Collection(),
            len = arr.length,
            n;

        for(n = 0; n < len; n++) {
            collection.push(arr[n]);
        }
        return collection;
    };

    Kinetic.Collection.mapMethods = function(constructor) {
        var prot = constructor.prototype,
            key;

        for(key in prot) {
            // induce scope
            (function(methodName) {
                Kinetic.Collection.prototype[methodName] = function() {
                    var len = this.length,
                        i;

                    args = [].slice.call(arguments);
                    for(i = 0; i < len; i++) {
                        this[i][methodName].apply(this[i], args);
                    }

                    return this;
                };
            })(key);
        }
    };

    /*
    * Last updated November 2011
    * By Simon Sarris
    * www.simonsarris.com
    * sarris@acm.org
    *
    * Free to use and distribute at will
    * So long as you are nice to people, etc
    */

    /*
    * The usage of this class was inspired by some of the work done by a forked
    * project, KineticJS-Ext by Wappworks, which is based on Simon's Transform
    * class.  Modified by Eric Rowell
    */

    /**
     * Transform constructor
     * @constructor
     * @memberof Kinetic
     */
    Kinetic.Transform = function() {
        this.m = [1, 0, 0, 1, 0, 0];
    };

    Kinetic.Transform.prototype = {
        /**
         * Apply translation
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Number} x
         * @param {Number} y
         */
        translate: function(x, y) {
            this.m[4] += this.m[0] * x + this.m[2] * y;
            this.m[5] += this.m[1] * x + this.m[3] * y;
        },
        /**
         * Apply scale
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Number} sx
         * @param {Number} sy
         */
        scale: function(sx, sy) {
            this.m[0] *= sx;
            this.m[1] *= sx;
            this.m[2] *= sy;
            this.m[3] *= sy;
        },
        /**
         * Apply rotation
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Number} rad  Angle in radians
         */
        rotate: function(rad) {
            var c = Math.cos(rad);
            var s = Math.sin(rad);
            var m11 = this.m[0] * c + this.m[2] * s;
            var m12 = this.m[1] * c + this.m[3] * s;
            var m21 = this.m[0] * -s + this.m[2] * c;
            var m22 = this.m[1] * -s + this.m[3] * c;
            this.m[0] = m11;
            this.m[1] = m12;
            this.m[2] = m21;
            this.m[3] = m22;
        },
        /**
         * Returns the translation
         * @method
         * @memberof Kinetic.Transform.prototype
         * @returns {Object} 2D point(x, y)
         */
        getTranslation: function() {
            return {
                x: this.m[4],
                y: this.m[5]
            };
        },
        /**
         * Apply skew
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Number} sx
         * @param {Number} sy
         */
        skew: function(sx, sy) {
            var m11 = this.m[0] + this.m[2] * sy;
            var m12 = this.m[1] + this.m[3] * sy;
            var m21 = this.m[2] + this.m[0] * sx;
            var m22 = this.m[3] + this.m[1] * sx;
            this.m[0] = m11;
            this.m[1] = m12;
            this.m[2] = m21;
            this.m[3] = m22;
         },
        /**
         * Transform multiplication
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Kinetic.Transform} matrix
         */
        multiply: function(matrix) {
            var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
            var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];

            var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
            var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];

            var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
            var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];

            this.m[0] = m11;
            this.m[1] = m12;
            this.m[2] = m21;
            this.m[3] = m22;
            this.m[4] = dx;
            this.m[5] = dy;
        },
        /**
         * Invert the matrix
         * @method
         * @memberof Kinetic.Transform.prototype
         */
        invert: function() {
            var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
            var m0 = this.m[3] * d;
            var m1 = -this.m[1] * d;
            var m2 = -this.m[2] * d;
            var m3 = this.m[0] * d;
            var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
            var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
            this.m[0] = m0;
            this.m[1] = m1;
            this.m[2] = m2;
            this.m[3] = m3;
            this.m[4] = m4;
            this.m[5] = m5;
        },
        /**
         * return matrix
         * @method
         * @memberof Kinetic.Transform.prototype
         */
        getMatrix: function() {
            return this.m;
        },
        /**
         * set to absolute position via translation
         * @method
         * @memberof Kinetic.Transform.prototype
         * @author ericdrowell
         */
        setAbsolutePosition: function(x, y) {
            var m0 = this.m[0],
                m1 = this.m[1],
                m2 = this.m[2],
                m3 = this.m[3],
                m4 = this.m[4],
                m5 = this.m[5],
                yt = ((m0 * (y - m5)) - (m1 * (x - m4))) / ((m0 * m3) - (m1 * m2)),
                xt = (x - m4 - (m2 * yt)) / m0;

            this.translate(xt, yt);
        }
    };

    // CONSTANTS
    var CANVAS = 'canvas',
        CONTEXT_2D = '2d',
        OBJECT_ARRAY = '[object Array]',
        OBJECT_NUMBER = '[object Number]',
        OBJECT_STRING = '[object String]',
        PI_OVER_DEG180 = Math.PI / 180,
        DEG180_OVER_PI = 180 / Math.PI,
        HASH = '#',
        EMPTY_STRING = '',
        ZERO = '0',
        KINETIC_WARNING = 'Kinetic warning: ',
        KINETIC_ERROR = 'Kinetic error: ',
        RGB_PAREN = 'rgb(',
        COLORS = {
            aqua: [0,255,255],
            lime: [0,255,0],
            silver: [192,192,192],
            black: [0,0,0],
            maroon: [128,0,0],
            teal: [0,128,128],
            blue: [0,0,255],
            navy: [0,0,128],
            white: [255,255,255],
            fuchsia: [255,0,255],
            olive:[128,128,0],
            yellow: [255,255,0],
            orange: [255,165,0],
            gray: [128,128,128],
            purple: [128,0,128],
            green: [0,128,0],
            red: [255,0,0],
            pink: [255,192,203],
            cyan: [0,255,255],
            transparent: [255,255,255,0]
        },

        RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;

    /**
     * @namespace Util
     * @memberof Kinetic
     */
    Kinetic.Util = {
        /*
         * cherry-picked utilities from underscore.js
         */
        _isElement: function(obj) {
            return !!(obj && obj.nodeType == 1);
        },
        _isFunction: function(obj) {
            return !!(obj && obj.constructor && obj.call && obj.apply);
        },
        _isObject: function(obj) {
            return (!!obj && obj.constructor == Object);
        },
        _isArray: function(obj) {
            return Object.prototype.toString.call(obj) == OBJECT_ARRAY;
        },
        _isNumber: function(obj) {
            return Object.prototype.toString.call(obj) == OBJECT_NUMBER;
        },
        _isString: function(obj) {
            return Object.prototype.toString.call(obj) == OBJECT_STRING;
        },
        /*
         * other utils
         */
        _hasMethods: function(obj) {
            var names = [],
                key;

            for(key in obj) {
                if(this._isFunction(obj[key])) {
                    names.push(key);
                }
            }
            return names.length > 0;
        },
        _isInDocument: function(el) {
            while(el = el.parentNode) {
                if(el == document) {
                    return true;
                }
            }
            return false;
        },
        _simplifyArray: function(arr) {
            var retArr = [],
                len = arr.length,
                util = Kinetic.Util,
                n, val;

            for (n=0; n<len; n++) {
                val = arr[n];
                if (util._isNumber(val)) {
                    val = Math.round(val * 1000) / 1000;
                }
                else if (!util._isString(val)) {
                    val = val.toString();
                }

                retArr.push(val);
            }

            return retArr;
        },
        /*
         * arg can be an image object or image data
         */
        _getImage: function(arg, callback) {
            var imageObj, canvas, context, dataUrl;

            // if arg is null or undefined
            if(!arg) {
                callback(null);
            }

            // if arg is already an image object
            else if(this._isElement(arg)) {
                callback(arg);
            }

            // if arg is a string, then it's a data url
            else if(this._isString(arg)) {
                imageObj = new Image();
                imageObj.onload = function() {
                    callback(imageObj);
                };
                imageObj.src = arg;
            }

            //if arg is an object that contains the data property, it's an image object
            else if(arg.data) {
                canvas = document.createElement(CANVAS);
                canvas.width = arg.width;
                canvas.height = arg.height;
                _context = canvas.getContext(CONTEXT_2D);
                _context.putImageData(arg, 0, 0);
                this._getImage(canvas.toDataURL(), callback);
            }
            else {
                callback(null);
            }
        },
        _getRGBAString: function(obj) {
            var red = obj.red || 0,
                green = obj.green || 0,
                blue = obj.blue || 0,
                alpha = obj.alpha || 1;

            return [
                'rgba(',
                red,
                ',',
                green,
                ',',
                blue,
                ',',
                alpha,
                ')'
            ].join(EMPTY_STRING);
        },
        _rgbToHex: function(r, g, b) {
            return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },
        _hexToRgb: function(hex) {
            hex = hex.replace(HASH, EMPTY_STRING);
            var bigint = parseInt(hex, 16);
            return {
                r: (bigint >> 16) & 255,
                g: (bigint >> 8) & 255,
                b: bigint & 255
            };
        },
        /**
         * return random hex color
         * @method
         * @memberof Kinetic.Util.prototype
         */
        getRandomColor: function() {
            var randColor = (Math.random() * 0xFFFFFF << 0).toString(16);
            while (randColor.length < 6) {
              randColor = ZERO + randColor;
            }
            return HASH + randColor;
        },
        /**
         * return value with default fallback
         * @method
         * @memberof Kinetic.Util.prototype
         */
        get: function(val, def) {
            if (val === undefined) {
                return def;
            }
            else {
                return val;
            }
        },
        /**
         * get RGB components of a color
         * @method
         * @memberof Kinetic.Util.prototype
         * @param {String} color
         * @example
         * // each of the following examples return {r:0, g:0, b:255}<br>
         * var rgb = Kinetic.Util.getRGB('blue');<br>
         * var rgb = Kinetic.Util.getRGB('#0000ff');<br>
         * var rgb = Kinetic.Util.getRGB('rgb(0,0,255)');
         */
        getRGB: function(color) {
          var rgb;
          // color string
          if (color in COLORS) {
            rgb = COLORS[color];
            return {
              r: rgb[0],
              g: rgb[1],
              b: rgb[2]
            };
          }
          // hex
          else if (color[0] === HASH) {
            return this._hexToRgb(color.substring(1));
          }
          // rgb string
          else if (color.substr(0, 4) === RGB_PAREN) {
            rgb = RGB_REGEX.exec(color.replace(/ /g,''));
            return {
                r: parseInt(rgb[1], 10),
                g: parseInt(rgb[2], 10),
                b: parseInt(rgb[3], 10)
            };
          }
          // default
          else {
            return {
                r: 0,
                g: 0,
                b: 0
            };
          }
        },
        // o1 takes precedence over o2
        _merge: function(o1, o2) {
            var retObj = this._clone(o2);
            for(var key in o1) {
                if(this._isObject(o1[key])) {
                    retObj[key] = this._merge(o1[key], retObj[key]);
                }
                else {
                    retObj[key] = o1[key];
                }
            }
            return retObj;
        },
        cloneObject: function(obj) {
            var retObj = {};
            for(var key in obj) {
                if(this._isObject(obj[key])) {
                    retObj[key] = this._clone(obj[key]);
                }
                else {
                    retObj[key] = obj[key];
                }
            }
            return retObj;
        },
        cloneArray: function(arr) {
            return arr.slice(0);
        },
        _degToRad: function(deg) {
            return deg * PI_OVER_DEG180;
        },
        _radToDeg: function(rad) {
            return rad * DEG180_OVER_PI;
        },
        _capitalize: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        error: function(str) {
            throw new Error(KINETIC_ERROR + str);
        },
        warn: function(str) {
            /*
             * IE9 on Windows7 64bit will throw a JS error
             * if we don't use window.console in the conditional
             */
            if(window.console && console.warn) {
                console.warn(KINETIC_WARNING + str);
            }
        },
        extend: function(c1, c2) {
            for(var key in c2.prototype) {
                if(!( key in c1.prototype)) {
                    c1.prototype[key] = c2.prototype[key];
                }
            }
        },
        /**
         * adds methods to a constructor prototype
         * @method
         * @memberof Kinetic.Util.prototype
         * @param {Function} constructor
         * @param {Object} methods
         */
        addMethods: function(constructor, methods) {
          var key;

          for (key in methods) {
            constructor.prototype[key] = methods[key];
          }
        },
       _getControlPoints: function(x0, y0, x1, y1, x2, y2, t) {
            var d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)),
                d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
                fa = t * d01 / (d01 + d12),
                fb = t * d12 / (d01 + d12),
                p1x = x1 - fa * (x2 - x0),
                p1y = y1 - fa * (y2 - y0),
                p2x = x1 + fb * (x2 - x0),
                p2y = y1 + fb * (y2 - y0);

            return [p1x ,p1y, p2x, p2y];
        },
        _expandPoints: function(p, tension) {
            var len = p.length,
                allPoints = [],
                n, cp;

            for (n=2; n<len-2; n+=2) {
                cp = Kinetic.Util._getControlPoints(p[n-2], p[n-1], p[n], p[n+1], p[n+2], p[n+3], tension);
                allPoints.push(cp[0]);
                allPoints.push(cp[1]);
                allPoints.push(p[n]);
                allPoints.push(p[n+1]);
                allPoints.push(cp[2]);
                allPoints.push(cp[3]);
            }

            return allPoints;
        },
        _removeLastLetter: function(str) {
            return str.substring(0, str.length - 1);
        }
    };
})();
;(function() {
    // calculate pixel ratio
    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        devicePixelRatio = window.devicePixelRatio || 1,
        backingStoreRatio = context.webkitBackingStorePixelRatio
            || context.mozBackingStorePixelRatio
            || context.msBackingStorePixelRatio
            || context.oBackingStorePixelRatio
            || context.backingStorePixelRatio 
            || 1,
        _pixelRatio = devicePixelRatio / backingStoreRatio;

    /**
     * Canvas Renderer constructor
     * @constructor
     * @abstract
     * @memberof Kinetic
     * @param {Number} width
     * @param {Number} height
     * @param {Number} pixelRatio KineticJS automatically handles pixel ratio adustments in order to render crisp drawings 
     *  on all devices. Most desktops, low end tablets, and low end phones, have device pixel ratios
     *  of 1.  Some high end tablets and phones, like iPhones and iPads (not the mini) have a device pixel ratio 
     *  of 2.  Some Macbook Pros, and iMacs also have a device pixel ratio of 2.  Some high end Android devices have pixel 
     *  ratios of 2 or 3.  Some browsers like Firefox allow you to configure the pixel ratio of the viewport.  Unless otherwise
     *  specificed, the pixel ratio will be defaulted to the actual device pixel ratio.  You can override the device pixel
     *  ratio for special situations, or, if you don't want the pixel ratio to be taken into account, you can set it to 1.
     */
    Kinetic.Canvas = function(config) {
        this.init(config);
    };

    Kinetic.Canvas.prototype = {
        init: function(config) {
            config = config || {};

            var pixelRatio = config.pixelRatio || Kinetic.pixelRatio || _pixelRatio;

            this.pixelRatio = pixelRatio;
            this._canvas = document.createElement('canvas');

            // set inline styles
            this._canvas.style.padding = 0;
            this._canvas.style.margin = 0;
            this._canvas.style.border = 0;
            this._canvas.style.background = 'transparent';
            this._canvas.style.position = 'absolute';
            this._canvas.style.top = 0;
            this._canvas.style.left = 0;
        },
        /**
         * get canvas context
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @returns {CanvasContext} context
         */
        getContext: function() {
            return this.context;
        },
        /**
         * get pixel ratio
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @returns {Number} pixel ratio
         */
        getPixelRatio: function() {
            return this.pixelRatio;
        },
        /**
         * get pixel ratio
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {Number} pixelRatio KineticJS automatically handles pixel ratio adustments in order to render crisp drawings 
         *  on all devices. Most desktops, low end tablets, and low end phones, have device pixel ratios
         *  of 1.  Some high end tablets and phones, like iPhones and iPads (not the mini) have a device pixel ratio 
         *  of 2.  Some Macbook Pros, and iMacs also have a device pixel ratio of 2.  Some high end Android devices have pixel 
         *  ratios of 2 or 3.  Some browsers like Firefox allow you to configure the pixel ratio of the viewport.  Unless otherwise
         *  specificed, the pixel ratio will be defaulted to the actual device pixel ratio.  You can override the device pixel
         *  ratio for special situations, or, if you don't want the pixel ratio to be taken into account, you can set it to 1.
         */
        setPixelRatio: function(pixelRatio) {
            this.pixelRatio = pixelRatio;
            this.setSize(this.getWidth(), this.getHeight());
        },
        /**
         * set width
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {Number} width
         */
        setWidth: function(width) {
            // take into account pixel ratio
            this.width = this._canvas.width = width * this.pixelRatio;
            this._canvas.style.width = width + 'px';
        },
        /**
         * set height
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {Number} height
         */
        setHeight: function(height) {
            // take into account pixel ratio
            this.height = this._canvas.height = height * this.pixelRatio;
            this._canvas.style.height = height + 'px';
        },
        /**
         * get width
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @returns {Number} width
         */
        getWidth: function() {
            return this.width;
        },
        /**
         * get height
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @returns {Number} height
         */
        getHeight: function() {
            return this.height;
        },
        /**
         * set size
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {Number} width
         * @param {Number} height
         */
        setSize: function(width, height) {
            this.setWidth(width);
            this.setHeight(height);
        },
        /**
         * to data url
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {String} mimeType
         * @param {Number} quality between 0 and 1 for jpg mime types
         * @returns {String} data url string
         */
        toDataURL: function(mimeType, quality) {
            try {
                // If this call fails (due to browser bug, like in Firefox 3.6),
                // then revert to previous no-parameter image/png behavior
                return this._canvas.toDataURL(mimeType, quality);
            }
            catch(e) {
                try {
                    return this._canvas.toDataURL();
                }
                catch(err) {
                    Kinetic.Util.warn('Unable to get data URL. ' + err.message);
                    return '';
                }
            }
        }
    };

    Kinetic.SceneCanvas = function(config) {
        config = config || {};
        var width = config.width || 0,
            height = config.height || 0;

        Kinetic.Canvas.call(this, config);
        this.context = new Kinetic.SceneContext(this);
        this.setSize(width, height);
    };

    Kinetic.SceneCanvas.prototype = {
        setWidth: function(width) {
            var pixelRatio = this.pixelRatio,
                _context = this.getContext()._context;

            Kinetic.Canvas.prototype.setWidth.call(this, width);
            _context.scale(pixelRatio, pixelRatio);
        },
        setHeight: function(height) {
            var pixelRatio = this.pixelRatio,
                _context = this.getContext()._context;

            Kinetic.Canvas.prototype.setHeight.call(this, height);
            _context.scale(pixelRatio, pixelRatio);
        }
    };
    Kinetic.Util.extend(Kinetic.SceneCanvas, Kinetic.Canvas);

    Kinetic.HitCanvas = function(config) {
        config = config || {};
        var width = config.width || 0,
            height = config.height || 0;
            
        Kinetic.Canvas.call(this, config);
        this.context = new Kinetic.HitContext(this);
        this.setSize(width, height);
    };
    Kinetic.Util.extend(Kinetic.HitCanvas, Kinetic.Canvas);

})();
;(function() {
    var COMMA = ',',
        OPEN_PAREN = '(',
        CLOSE_PAREN = ')',
        OPEN_PAREN_BRACKET = '([',
        CLOSE_BRACKET_PAREN = '])',
        SEMICOLON = ';',
        DOUBLE_PAREN = '()',
        EMPTY_STRING = '',
        EQUALS = '=',
        SET = 'set',
        CONTEXT_METHODS = [
            'arc',
            'arcTo',
            'beginPath',
            'bezierCurveTo',
            'clearRect', 
            'clip',
            'closePath',
            'createLinearGradient',
            'createPattern',
            'createRadialGradient',
            'drawImage',
            'fill', 
            'fillText', 
            'getImageData',
            'createImageData',
            'lineTo',
            'moveTo',
            'putImageData',
            'quadraticCurveTo',
            'rect', 
            'restore', 
            'rotate',
            'save', 
            'scale',
            'setLineDash',
            'setTransform', 
            'stroke', 
            'strokeText', 
            'transform',
            'translate'
        ];

    /**
     * Canvas Context constructor
     * @constructor
     * @abstract
     * @memberof Kinetic
     */
    Kinetic.Context = function(canvas) {
        this.init(canvas);
    };

    Kinetic.Context.prototype = {
        init: function(canvas) {
            this.canvas = canvas;
            this._context = canvas._canvas.getContext('2d');

            if (Kinetic.enableTrace) {
                this.traceArr = [];
                this._enableTrace();
            }
        },
        /**
         * fill shape
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Kinetic.Shape} shape
         */
        fillShape: function(shape) {
            if(shape.getFillEnabled()) {
                this._fill(shape);
            }
        },
        /**
         * stroke shape
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Kinetic.Shape} shape
         */
        strokeShape: function(shape) {
            if(shape.getStrokeEnabled()) {
                this._stroke(shape);
            }
        },
        /**
         * fill then stroke
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Kinetic.Shape} shape
         */
        fillStrokeShape: function(shape) {
            var fillEnabled = shape.getFillEnabled();
            if(fillEnabled) {
                this._fill(shape);
            }
            if(shape.getStrokeEnabled()) {
                this._stroke(shape);
            }
        },
        /**
         * get context trace if trace is enabled
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Boolean} relaxed if false, return strict context trace, which includes method names, method parameters
         *  properties, and property values.  If true, return relaxed context trace, which only returns method names and
         *  properites.
         * @returns {String}
         */
        getTrace: function(relaxed) {
            var traceArr = this.traceArr,
                len = traceArr.length,
                str = '',
                n, trace, method, args;

            for (n=0; n<len; n++) {
                trace = traceArr[n];
                method = trace.method;

                // methods
                if (method) {
                    args = trace.args;
                    str += method;
                    if (relaxed) {
                        str += DOUBLE_PAREN;
                    } 
                    else {
                        if (Kinetic.Util._isArray(args[0])) {
                            str += OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
                        }
                        else {
                            str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
                        }
                    }
                }
                // properties
                else {
                    str += trace.property;
                    if (!relaxed) {
                        str += EQUALS + trace.val;
                    }  
                }

                str += SEMICOLON;
            }

            return str;
        },
        /**
         * clear trace if trace is enabled
         * @method
         * @memberof Kinetic.Context.prototype
         */
        clearTrace: function() {
            this.traceArr = [];
        },
        _trace: function(str) {
            var traceArr = this.traceArr,
                len;
 
            traceArr.push(str);
            len = traceArr.length;

            if (len >= Kinetic.traceArrMax) {
                traceArr.shift();
            }
        },
        /**
         * reset canvas context transform
         * @method
         * @memberof Kinetic.Context.prototype
         */
        reset: function() {
            var pixelRatio = this.getCanvas().getPixelRatio();
            this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
        },
        /**
         * get canvas
         * @method
         * @memberof Kinetic.Context.prototype
         * @returns {Kinetic.Canvas}
         */
        getCanvas: function() {
            return this.canvas;
        },
        /**
         * clear canvas
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Object} [bounds]
         * @param {Number} [bounds.x]
         * @param {Number} [bounds.y]
         * @param {Number} [bounds.width]
         * @param {Number} [bounds.height]
         */
        clear: function(bounds) {
            var canvas = this.getCanvas(),
                pos, size;
            
            if (bounds) {
                this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
            }
            else {
                this.clearRect(0, 0, canvas.getWidth(), canvas.getHeight());
            }
        },
        _applyLineCap: function(shape) {
            var lineCap = shape.getLineCap();
            if(lineCap) {
                this.setAttr('lineCap', lineCap);
            }
        },
        _applyOpacity: function(shape) {
            var absOpacity = shape.getAbsoluteOpacity();
            if(absOpacity !== 1) {
                this.setAttr('globalAlpha', absOpacity);
            }
        },
        _applyLineJoin: function(shape) {
            var lineJoin = shape.getLineJoin();
            if(lineJoin) {
                this.setAttr('lineJoin', lineJoin);
            }
        },
        _applyTransform: function(shape) {
            var transformsEnabled = shape.getTransformsEnabled(),
                m;

            if (transformsEnabled === 'all') {
                m = shape.getAbsoluteTransform().getMatrix();
                this.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            }
            else if (transformsEnabled === 'position') {
                // best performance for position only transforms
                this.translate(shape.getX(), shape.getY());
            }  
        },
        setAttr: function(attr, val) {
            this._context[attr] = val;
        },

        // context pass through methods
        arc: function() {
            var a = arguments;
            this._context.arc(a[0], a[1], a[2], a[3], a[4], a[5]);
        },
        beginPath: function() {
            this._context.beginPath();
        },
        bezierCurveTo: function() {
            var a = arguments;
            this._context.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
        },
        clearRect: function() {
            var a = arguments;
            this._context.clearRect(a[0], a[1], a[2], a[3]);
        },
        clip: function() {
            this._context.clip();
        },
        closePath: function() {
            this._context.closePath();
        },
        createImageData: function() {
            var a = arguments;
            if(a.length === 2) {
                return this._context.createImageData(a[0], a[1]);
            }
            else if(a.length === 1) {
                return this._context.createImageData(a[0]);
            }
        },
        createLinearGradient: function() {
            var a = arguments;
            return this._context.createLinearGradient(a[0], a[1], a[2], a[3]);
        },
        createPattern: function() {
            var a = arguments;
            return this._context.createPattern(a[0], a[1]);
        },
        createRadialGradient: function() {
            var a = arguments;
            return this._context.createRadialGradient(a[0], a[1], a[2], a[3], a[4], a[5]);
        },
        drawImage: function() {
            var a = arguments,
                _context = this._context;

            if(a.length === 3) {
                _context.drawImage(a[0], a[1], a[2]);
            }
            else if(a.length === 5) {
                _context.drawImage(a[0], a[1], a[2], a[3], a[4]);
            }
            else if(a.length === 9) {
                _context.drawImage(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
            }
        },
        fill: function() {
            this._context.fill();
        },
        fillText: function() {
            var a = arguments;
            this._context.fillText(a[0], a[1], a[2]);
        },
        getImageData: function() {
            var a = arguments;
            return this._context.getImageData(a[0], a[1], a[2], a[3]);
        },
        lineTo: function() {
            var a = arguments;
            this._context.lineTo(a[0], a[1]);
        },
        moveTo: function() {
            var a = arguments;
            this._context.moveTo(a[0], a[1]);
        },
        rect: function() {
            var a = arguments;
            this._context.rect(a[0], a[1], a[2], a[3]);
        },
        putImageData: function() {
            var a = arguments;
            this._context.putImageData(a[0], a[1], a[2]);
        },
        quadraticCurveTo: function() {
            var a = arguments;
            this._context.quadraticCurveTo(a[0], a[1], a[2], a[3]);
        },
        restore: function() {
            this._context.restore();
        },
        rotate: function() {
            var a = arguments;
            this._context.rotate(a[0]);
        },
        save: function() {
            this._context.save();
        },
        scale: function() {
            var a = arguments;
            this._context.scale(a[0], a[1]);
        },
        setLineDash: function() {
            var a = arguments,
                _context = this._context;

            // works for Chrome and IE11
            if(this._context.setLineDash) {
                _context.setLineDash(a[0]);
            }
            // verified that this works in firefox
            else if('mozDash' in _context) {
                _context.mozDash = a[0];
            }
            // does not currently work for Safari
            else if('webkitLineDash' in _context) {
                _context.webkitLineDash = a[0];
            }

            // no support for IE9 and IE10
        },
        setTransform: function() {
            var a = arguments;
            this._context.setTransform(a[0], a[1], a[2], a[3], a[4], a[5]);
        },
        stroke: function() {
            this._context.stroke();
        },
        strokeText: function() {
            var a = arguments;
            this._context.strokeText(a[0], a[1], a[2]);
        },
        transform: function() {
            var a = arguments;
            this._context.transform(a[0], a[1], a[2], a[3], a[4], a[5]);
        },
        translate: function() {
            var a = arguments;
            this._context.translate(a[0], a[1]);
        },
        _enableTrace: function() {
            var that = this,
                len = CONTEXT_METHODS.length,
                _simplifyArray = Kinetic.Util._simplifyArray,
                origSetter = this.setAttr,
                n, args;

            // methods
            for (n=0; n<len; n++) {
                (function(methodName) {
                    var origMethod = that[methodName],
                        ret;

                    that[methodName] = function() {
                        args = _simplifyArray(Array.prototype.slice.call(arguments, 0));
                        ret = origMethod.apply(that, arguments);
           
                        that._trace({
                            method: methodName,
                            args: args
                        });
                 
                        return ret;
                    };
                })(CONTEXT_METHODS[n]);
            }

            // attrs
            that.setAttr = function() {
                origSetter.apply(that, arguments);
                that._trace({
                    property: arguments[0],
                    val: arguments[1]
                });
            };
        }
    };

    Kinetic.SceneContext = function(canvas) {
        Kinetic.Context.call(this, canvas);
    };

    Kinetic.SceneContext.prototype = {
        _fillColor: function(shape) {
            var fill = shape.fill()   
                || Kinetic.Util._getRGBAString({
                    red: shape.fillRed(), 
                    green: shape.fillGreen(), 
                    blue: shape.fillBlue(),
                    alpha: shape.fillAlpha()
                });

            this.setAttr('fillStyle', fill);
            shape._fillFunc(this);
        },
        _fillPattern: function(shape) {
            var fillPatternImage = shape.getFillPatternImage(),
                fillPatternX = shape.getFillPatternX(),
                fillPatternY = shape.getFillPatternY(),
                fillPatternScale = shape.getFillPatternScale(),
                fillPatternRotation = shape.getFillPatternRotation(),
                fillPatternOffset = shape.getFillPatternOffset(),
                fillPatternRepeat = shape.getFillPatternRepeat();

            if(fillPatternX || fillPatternY) {
                this.translate(fillPatternX || 0, fillPatternY || 0);
            }
            if(fillPatternRotation) {
                this.rotate(fillPatternRotation);
            }
            if(fillPatternScale) {
                this.scale(fillPatternScale.x, fillPatternScale.y);
            }
            if(fillPatternOffset) {
                this.translate(-1 * fillPatternOffset.x, -1 * fillPatternOffset.y);
            }

            this.setAttr('fillStyle', this.createPattern(fillPatternImage, fillPatternRepeat || 'repeat'));
            this.fill();
        },
        _fillLinearGradient: function(shape) {
            var start = shape.getFillLinearGradientStartPoint(),
                end = shape.getFillLinearGradientEndPoint(),
                colorStops = shape.getFillLinearGradientColorStops(),
                grd = this.createLinearGradient(start.x, start.y, end.x, end.y);

            if (colorStops) {
                // build color stops
                for(var n = 0; n < colorStops.length; n += 2) {
                    grd.addColorStop(colorStops[n], colorStops[n + 1]);
                }
                this.setAttr('fillStyle', grd);
                this.fill();
            }
        },
        _fillRadialGradient: function(shape) {
            var start = shape.getFillRadialGradientStartPoint(),
                end = shape.getFillRadialGradientEndPoint(),
                startRadius = shape.getFillRadialGradientStartRadius(),
                endRadius = shape.getFillRadialGradientEndRadius(),
                colorStops = shape.getFillRadialGradientColorStops(),  
                grd = this.createRadialGradient(start.x, start.y, startRadius, end.x, end.y, endRadius);
           
            // build color stops
            for(var n = 0; n < colorStops.length; n += 2) {
                grd.addColorStop(colorStops[n], colorStops[n + 1]);
            }
            this.setAttr('fillStyle', grd);
            this.fill();
        },
        _fill: function(shape) {
            var hasColor = shape.fill() || shape.fillRed() || shape.fillGreen() || shape.fillBlue(),
                hasPattern = shape.getFillPatternImage(),
                hasLinearGradient = shape.getFillLinearGradientColorStops(),
                hasRadialGradient = shape.getFillRadialGradientColorStops(),
                fillPriority = shape.getFillPriority();

            // priority fills
            if(hasColor && fillPriority === 'color') {
                this._fillColor(shape);
            }
            else if(hasPattern && fillPriority === 'pattern') {
                this._fillPattern(shape);
            }
            else if(hasLinearGradient && fillPriority === 'linear-gradient') {
                this._fillLinearGradient(shape);
            }
            else if(hasRadialGradient && fillPriority === 'radial-gradient') {
                this._fillRadialGradient(shape);
            }
            // now just try and fill with whatever is available
            else if(hasColor) {
                this._fillColor(shape);
            }
            else if(hasPattern) {
                this._fillPattern(shape);
            }
            else if(hasLinearGradient) {
                this._fillLinearGradient(shape);
            }
            else if(hasRadialGradient) {
                this._fillRadialGradient(shape);
            }
        },
        _stroke: function(shape) {
            var dash = shape.dash(),
                strokeScaleEnabled = shape.getStrokeScaleEnabled();

            if(shape.hasStroke()) {
                if (!strokeScaleEnabled) {
                    this.save();
                    this.setTransform(1, 0, 0, 1, 0, 0);
                }

                this._applyLineCap(shape);
                if(dash && shape.dashEnabled()) {
                    this.setLineDash(dash);
                }

                this.setAttr('lineWidth', shape.strokeWidth());
                this.setAttr('strokeStyle', shape.stroke() 
                    || Kinetic.Util._getRGBAString({
                        red: shape.strokeRed(), 
                        green: shape.strokeGreen(), 
                        blue: shape.strokeBlue(),
                        alpha: shape.strokeAlpha()
                    }));

                shape._strokeFunc(this);
                
                if (!strokeScaleEnabled) {
                    this.restore();
                }
            }
        },
        _applyShadow: function(shape) {
            var util = Kinetic.Util,
                absOpacity = shape.getAbsoluteOpacity(),
                color = util.get(shape.getShadowColor(), 'black'),
                blur = util.get(shape.getShadowBlur(), 5),
                shadowOpacity = util.get(shape.getShadowOpacity(), 0),
                offset = util.get(shape.getShadowOffset(), {
                    x: 0,
                    y: 0
                });

            if(shadowOpacity) {
                this.setAttr('globalAlpha', shadowOpacity * absOpacity);
            }

            this.setAttr('shadowColor', color);
            this.setAttr('shadowBlur', blur);
            this.setAttr('shadowOffsetX', offset.x);
            this.setAttr('shadowOffsetY', offset.y);
        
        }
    };
    Kinetic.Util.extend(Kinetic.SceneContext, Kinetic.Context);

    Kinetic.HitContext = function(canvas) {
        Kinetic.Context.call(this, canvas);
    };

    Kinetic.HitContext.prototype = {
        _fill: function(shape) {
            this.save();
            this.setAttr('fillStyle', shape.colorKey);
            shape._fillFuncHit(this);
            this.restore();
        },
        _stroke: function(shape) {
            if(shape.hasStroke()) {
                this._applyLineCap(shape);
                this.setAttr('lineWidth', shape.strokeWidth());
                this.setAttr('strokeStyle', shape.colorKey);
                shape._strokeFuncHit(this);
            }
        }
    };
    Kinetic.Util.extend(Kinetic.HitContext, Kinetic.Context);
})();
;(function() {
    // CONSTANTS
    var ABSOLUTE_OPACITY = 'absoluteOpacity',
        ABSOLUTE_TRANSFORM = 'absoluteTransform',
        ADD = 'add',
        B = 'b',
        BEFORE = 'before',
        BLACK = 'black',
        CHANGE = 'Change',
        CHILDREN = 'children',
        DEG = 'Deg',
        DOT = '.',
        EMPTY_STRING = '',
        G = 'g',
        GET = 'get',
        HASH = '#',
        ID = 'id',
        KINETIC = 'kinetic',
        LISTENING = 'listening',
        MOUSEENTER = 'mouseenter',
        MOUSELEAVE = 'mouseleave',
        NAME = 'name',
        OFF = 'off',
        ON = 'on',
        PRIVATE_GET = '_get',
        R = 'r',
        RGB = 'RGB',
        SET = 'set',
        SHAPE = 'Shape',
        SPACE = ' ',
        STAGE = 'Stage',
        TRANSFORM = 'transform',
        UPPER_B = 'B',
        UPPER_G = 'G',
        UPPER_HEIGHT = 'Height',
        UPPER_R = 'R',
        UPPER_WIDTH = 'Width',
        UPPER_X = 'X',
        UPPER_Y = 'Y',
        VISIBLE = 'visible',
        X = 'x',
        Y = 'y';

    Kinetic.Factory = {
        addGetterSetter: function(constructor, attr, def, validator, after) {
            this.addGetter(constructor, attr, def);
            this.addSetter(constructor, attr, validator, after);
            this.addOverloadedGetterSetter(constructor, attr);
        },
        addGetter: function(constructor, attr, def) {
            var that = this,
                method = GET + Kinetic.Util._capitalize(attr);

            constructor.prototype[method] = function() {
                var val = this.attrs[attr];
                return val === undefined ? def : val;
            };
        },
        addSetter: function(constructor, attr, validator, after) {
            var method = SET + Kinetic.Util._capitalize(attr);

            constructor.prototype[method] = function(val) {
                if (validator) {
                    val = validator.call(this, val);
                }

                this._setAttr(attr, val);

                if (after) {
                    after.call(this);
                }

                return this;  
            };
        },
        addComponentsGetterSetter: function(constructor, attr, components, validator, after) {
            var len = components.length,
                capitalize = Kinetic.Util._capitalize,
                getter = GET + capitalize(attr), 
                setter = SET + capitalize(attr),
                n, component;

            // getter
            constructor.prototype[getter] = function() {
                var ret = {};

                for (n=0; n<len; n++) {
                    component = components[n];
                    ret[component] = this.getAttr(attr + capitalize(component));
                }

                return ret;
            };

            // setter
            constructor.prototype[setter] = function(val) {
                var oldVal = this.attrs[attr],
                    key;

                if (validator) {
                    val = validator.call(this, val);
                }

                for (key in val) {
                    this._setAttr(attr + capitalize(key), val[key]); 
                }

                this._fireChangeEvent(attr, oldVal, val);
                
                if (after) {
                    after.call(this);
                }

                return this;  
            };

            this.addOverloadedGetterSetter(constructor, attr);
        },
        addOverloadedGetterSetter: function(constructor, attr) {
            var that = this,
                capitalizedAttr = Kinetic.Util._capitalize(attr),
                setter = SET + capitalizedAttr,
                getter = GET + capitalizedAttr;

            constructor.prototype[attr] = function() {
                // setting
                if (arguments.length) {
                    this[setter](arguments[0]);
                    return this;
                }
                // getting
                else {
                    return this[getter]();
                }
            }
        },
        backCompat: function(constructor, methods) {
            var key;

            for (key in methods) {
                constructor.prototype[key] = constructor.prototype[methods[key]];
            }
        },
        afterSetFilter: function() {
            this._filterUpToDate = false;
        }
    };

    Kinetic.Validators = {
        RGBComponent: function(val) {
            if (val > 255) {
                return 255;
            }
            else if (val < 0) {
                return 0;
            }
            else {
                return Math.round(val);
            }
        },
        alphaComponent: function(val) {
            if (val > 1) {
                return 1;
            }
            // chrome does not honor alpha values of 0
            else if (val < 0.0001) {
                return 0.0001;
            }
            else {
                return val;
            }
        }
    };
})();;(function() {
    // CONSTANTS
    var ABSOLUTE_OPACITY = 'absoluteOpacity',
        ABSOLUTE_TRANSFORM = 'absoluteTransform',
        BEFORE = 'before',
        CHANGE = 'Change',
        CHILDREN = 'children',
        DOT = '.',
        EMPTY_STRING = '',
        GET = 'get',
        ID = 'id',
        KINETIC = 'kinetic',
        LISTENING = 'listening',
        //LISTENING_ENABLED = 'listeningEnabled',
        MOUSEENTER = 'mouseenter',
        MOUSELEAVE = 'mouseleave',
        NAME = 'name',
        SET = 'set',
        SHAPE = 'Shape',
        SPACE = ' ',
        STAGE = 'stage',
        TRANSFORM = 'transform',
        UPPER_STAGE = 'Stage',
        VISIBLE = 'visible',

        TRANSFORM_CHANGE_STR = [
            'xChange.kinetic',
            'yChange.kinetic',
            'scaleXChange.kinetic',
            'scaleYChange.kinetic',
            'skewXChange.kinetic',
            'skewYChange.kinetic',
            'rotationChange.kinetic',
            'offsetXChange.kinetic',
            'offsetYChange.kinetic',
            'transformsEnabledChange.kinetic'
        ].join(SPACE);

    Kinetic.Util.addMethods(Kinetic.Node, {
        _init: function(config) {
            var that = this;
            this._id = Kinetic.idCounter++;
            this.eventListeners = {};
            this.attrs = {};
            this._cache = {};
            this._filterUpToDate = false;
            this.setAttrs(config);

            // event bindings for cache handling
            this.on(TRANSFORM_CHANGE_STR, function() {
                this._clearCache(TRANSFORM);
                that._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
            });
            this.on('visibleChange.kinetic', function() {
                that._clearSelfAndDescendantCache(VISIBLE);
            });
            this.on('listeningChange.kinetic', function() {
                that._clearSelfAndDescendantCache(LISTENING);
            });
            this.on('opacityChange.kinetic', function() {
                that._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
            });
        },
        _clearCache: function(attr){
            if (attr) {
                delete this._cache[attr];
            }
            else {
                this._cache = {};   
            }
        },
        _getCache: function(attr, privateGetter){
            var cache = this._cache[attr];

            // if not cached, we need to set it using the private getter method.
            if (cache === undefined) {
                this._cache[attr] = privateGetter.call(this);
            }

            return this._cache[attr];     
        },
        /*
         * when the logic for a cached result depends on ancestor propagation, use this
         * method to clear self and children cache
         */
        _clearSelfAndDescendantCache: function(attr) {
            this._clearCache(attr);

            if (this.children) {
                this.getChildren().each(function(node) {
                    node._clearSelfAndDescendantCache(attr);
                });
            }
        },
        /**
        * clear cached canvas
        * @method
        * @memberof Kinetic.Node.prototype
        * @returns {Kinetic.Node}
        * @example
        * node.clearCache();
        */
        clearCache: function() {
            delete this._cache.canvas;
            this._filterUpToDate = false;
            return this;
        },
        /**
        * cache node to improve drawing performance, apply filters, or create more accurate
        *  hit regions
        * @method
        * @memberof Kinetic.Node.prototype
        * @param {Object} config
        * @param {Number} [config.x]
        * @param {Number} [config.y]
        * @param {Number} [config.width]
        * @param {Number} [config.height]
        * @param {Boolean} [config.showBorder] when set to true, a red border will be drawn around the cached
        *  region for debugging purposes
        * @returns {Kinetic.Node}
        * @example
        * // cache a shape with the x,y position of the bounding box at the center and<br>
        * // the width and height of the bounding box equal to the width and height of<br>
        * // the shape obtained from shape.width() and shape.height()<br>
        * image.cache();<br><br>
        *
        * // cache a node and define the bounding box position and size<br>
        * node.cache({<br>
        *   x: -30,<br>
        *   y: -30,<br>
        *   width: 100,<br>
        *   height: 200<br>
        * });<br><br>
        *
        * // cache a node and draw a red border around the bounding box<br>
        * // for debugging purposes<br>
        * node.cache({<br>
        *   x: -30,<br>
        *   y: -30,<br>
        *   width: 100,<br>
        *   height: 200,<br>
        *   drawBorder: true<br>
        * });
        */
        cache: function(config) {
            var conf = config || {},
                x = conf.x || 0,
                y = conf.y || 0,
                width = conf.width || this.width(),
                height = conf.height || this.height(),
                drawBorder = conf.drawBorder || false,
                cachedSceneCanvas = new Kinetic.SceneCanvas({
                    pixelRatio: 1,
                    width: width,
                    height: height
                }),
                cachedFilterCanvas = new Kinetic.SceneCanvas({
                    pixelRatio: 1,
                    width: width,
                    height: height
                }),
                cachedHitCanvas = new Kinetic.HitCanvas({
                    width: width,
                    height: height
                }),
                origTransEnabled = this.transformsEnabled(),
                origX = this.x(),
                origY = this.y(),
                sceneContext;

            this.clearCache();

            this.transformsEnabled('position');
            this.x(x * -1);
            this.y(y * -1);

            this.drawScene(cachedSceneCanvas);
            this.drawHit(cachedHitCanvas);

            // this will draw a red border around the cached box for
            // debugging purposes
            if (drawBorder) {
                sceneContext = cachedSceneCanvas.getContext();
                sceneContext.save();
                sceneContext.beginPath();
                sceneContext.rect(0, 0, width, height);
                sceneContext.closePath();
                sceneContext.setAttr('strokeStyle', 'red');
                sceneContext.setAttr('lineWidth', 5);
                sceneContext.stroke();
                sceneContext.restore();
            }

            this.x(origX);
            this.y(origY);
            this.transformsEnabled(origTransEnabled);

            this._cache.canvas = {
                scene: cachedSceneCanvas,
                filter: cachedFilterCanvas,
                hit: cachedHitCanvas
            };

            return this;
        },
        _drawCachedSceneCanvas: function(context) {
            context.save();
            context._applyTransform(this);
            context.drawImage(this._getCachedSceneCanvas()._canvas, 0, 0);
            context.restore();
        },
        _getCachedSceneCanvas: function() {
            var filters = this.filters(),
                cachedCanvas = this._cache.canvas,
                sceneCanvas = cachedCanvas.scene,
                filterCanvas = cachedCanvas.filter,
                filterContext = filterCanvas.getContext(),
                len, imageData, n, filter;

            if (filters) {
                if (!this._filterUpToDate) {
                    try {
                        len = filters.length;
                        filterContext.clear();
                        // copy cached canvas onto filter context
                        filterContext.drawImage(sceneCanvas._canvas, 0, 0);
                        imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());

                        // apply filters to filter context
                        for (n=0; n<len; n++) {
                            filter = filters[n];
                            filter.call(this, imageData);
                            filterContext.putImageData(imageData, 0, 0);
                        }
                    }
                    catch(e) {
                        Kinetic.Util.warn('Unable to apply filter. ' + e.message);
                    }

                    this._filterUpToDate = true;
                }

                return filterCanvas;
            }
            else {
                return sceneCanvas;
            }
        },
        _drawCachedHitCanvas: function(context) {
            var cachedCanvas = this._cache.canvas,
                hitCanvas = cachedCanvas.hit;

            context.save();
            context._applyTransform(this);
            context.drawImage(hitCanvas._canvas, 0, 0); 
            context.restore(); 
        },
        /**
         * bind events to the node. KineticJS supports mouseover, mousemove,
         *  mouseout, mouseenter, mouseleave, mousedown, mouseup, click, dblclick, touchstart, touchmove,
         *  touchend, tap, dbltap, dragstart, dragmove, and dragend events. The Kinetic Stage supports
         *  contentMouseover, contentMousemove, contentMouseout, contentMousedown, contentMouseup,
         *  contentClick, contentDblclick, contentTouchstart, contentTouchmove, contentTouchend, contentTap,
         *  and contentDblTap.  Pass in a string of events delimmited by a space to bind multiple events at once
         *  such as 'mousedown mouseup mousemove'. Include a namespace to bind an
         *  event by name such as 'click.foobar'.
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} evtStr e.g. 'click', 'mousedown touchstart', 'mousedown.foo touchstart.foo'
         * @param {Function} handler The handler function is passed an event object
         * @returns {Kinetic.Node}
         * @example
         * // add click listener<br>
         * node.on('click', function() {<br>
         *   console.log('you clicked me!');<br>
         * });<br><br>
         *
         * // get the target node<br>
         * node.on('click', function(evt) {<br>
         *   console.log(evt.targetNode);<br>
         * });<br><br>
         *
         * // stop event propagation<br>
         * node.on('click', function(evt) {<br>
         *   evt.cancelBubble = true;<br>
         * });<br><br>
         *
         * // bind multiple listeners<br>
         * node.on('click touchstart', function() {<br>
         *   console.log('you clicked/touched me!');<br>
         * });<br><br>
         *
         * // namespace listener<br>
         * node.on('click.foo', function() {<br>
         *   console.log('you clicked/touched me!');<br>
         * });
         */
        on: function(evtStr, handler) {
            var events = evtStr.split(SPACE),
                len = events.length,
                n, event, parts, baseEvent, name;

             /*
             * loop through types and attach event listeners to
             * each one.  eg. 'click mouseover.namespace mouseout'
             * will create three event bindings
             */
            for(n = 0; n < len; n++) {
                event = events[n];
                parts = event.split(DOT);
                baseEvent = parts[0];
                name = parts[1] || EMPTY_STRING;

                // create events array if it doesn't exist
                if(!this.eventListeners[baseEvent]) {
                    this.eventListeners[baseEvent] = [];
                }

                this.eventListeners[baseEvent].push({
                    name: name,
                    handler: handler
                });

                // NOTE: this flag is set to true when any event handler is added, even non
                // mouse or touch gesture events.  This improves performance for most
                // cases where users aren't using events, but is still very light weight.  
                // To ensure perfect accuracy, devs can explicitly set listening to false.
                /*
                if (name !== KINETIC) {
                    this._listeningEnabled = true;
                    this._clearSelfAndAncestorCache(LISTENING_ENABLED);
                }
                */
            }

            return this;
        },
        /**
         * remove event bindings from the node. Pass in a string of
         *  event types delimmited by a space to remove multiple event
         *  bindings at once such as 'mousedown mouseup mousemove'.
         *  include a namespace to remove an event binding by name
         *  such as 'click.foobar'. If you only give a name like '.foobar',
         *  all events in that namespace will be removed.
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} evtStr e.g. 'click', 'mousedown touchstart', '.foobar'
         * @returns {Kinetic.Node}
         * @example
         * // remove listener<br>
         * node.off('click');<br><br>
         *
         * // remove multiple listeners<br>
         * node.off('click touchstart');<br><br>
         *
         * // remove listener by name<br>
         * node.off('click.foo');
         */
        off: function(evtStr) {
            var events = evtStr.split(SPACE),
                len = events.length,
                n, t, event, parts, baseEvent, name;

            for(n = 0; n < len; n++) {
                event = events[n];
                parts = event.split(DOT);
                baseEvent = parts[0];
                name = parts[1];

                if(baseEvent) {
                    if(this.eventListeners[baseEvent]) {
                        this._off(baseEvent, name);
                    }
                }
                else {
                    for(t in this.eventListeners) {
                        this._off(t, name);
                    }
                }
            }
            return this;
        },
        /**
         * remove self from parent, but don't destroy
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         * @example
         * node.remove();
         */
        remove: function() {
            var parent = this.getParent();

            if(parent && parent.children) {
                parent.children.splice(this.index, 1);
                parent._setChildrenIndices();
                delete this.parent;
            }

            // every cached attr that is calculated via node tree
            // traversal must be cleared when removing a node
            this._clearSelfAndDescendantCache(STAGE);
            this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
            this._clearSelfAndDescendantCache(VISIBLE);
            this._clearSelfAndDescendantCache(LISTENING);
            this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);

            return this;
        },
        /**
         * remove and destroy self
         * @method
         * @memberof Kinetic.Node.prototype
         * @example
         * node.destroy();
         */
        destroy: function() {
            // remove from ids and names hashes
            Kinetic._removeId(this.getId());
            Kinetic._removeName(this.getName(), this._id);

            this.remove();
        },
        /**
         * get attr
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} attr
         * @returns {Integer|String|Object|Array}
         * @example
         * var x = node.getAttr('x');
         */
        getAttr: function(attr) {
            var method = GET + Kinetic.Util._capitalize(attr);
            if(Kinetic.Util._isFunction(this[method])) {
                return this[method]();
            }
            // otherwise get directly
            else {
                return this.attrs[attr];
            }
        },
        /**
        * get ancestors
        * @method
        * @memberof Kinetic.Node.prototype
        * @returns {Kinetic.Collection}
        * @example
        * shape.getAncestors().each(function(node) {
        *   console.log(node.getId());
        * })
        */
        getAncestors: function() {
            var parent = this.getParent(),
                ancestors = new Kinetic.Collection();

            while (parent) {
                ancestors.push(parent);
                parent = parent.getParent();
            }

            return ancestors;
        },
        /**
         * get attrs object literal
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Object}
         */
        getAttrs: function() {
            return this.attrs || {};
        },
        /**
         * set multiple attrs at once using an object literal
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} config object containing key value pairs
         * @returns {Kinetic.Node}
         * @example
         * node.setAttrs({<br>
         *   x: 5,<br>
         *   fill: 'red'<br>
         * });<br>
         */
        setAttrs: function(config) {
            var key, method;

            if(config) {
                for(key in config) {
                    if (key === CHILDREN) {

                    }
                    else {
                        method = SET + Kinetic.Util._capitalize(key);
                        // use setter if available
                        if(Kinetic.Util._isFunction(this[method])) {
                            this[method](config[key]);
                        }
                        // otherwise set directly
                        else {
                            this._setAttr(key, config[key]);
                        }
                    }
                }
            }
            return this;
        },
        /**
         * determine if node is listening for events by taking into account ancestors.
         *
         * Parent    | Self      | isListening
         * listening | listening | 
         * ----------+-----------+------------
         * T         | T         | T 
         * T         | F         | F
         * F         | T         | T 
         * F         | F         | F
         * ----------+-----------+------------
         * T         | I         | T
         * F         | I         | F
         * I         | I         | T
         *
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        isListening: function() {
            return this._getCache(LISTENING, this._isListening);
        },
        _isListening: function() {
            var listening = this.getListening(),
                parent = this.getParent();

            // the following conditions are a simplification of the truth table above.
            // please modify carefully
            if (listening === 'inherit') {
                if (parent) {
                    return parent.isListening();
                }
                else {
                    return true;
                }
            }
            else {
                return listening;
            }
        },
        /**
         * determine if node is visible by taking into account ancestors.
         *
         * Parent    | Self      | isVisible
         * visible   | visible   | 
         * ----------+-----------+------------
         * T         | T         | T 
         * T         | F         | F
         * F         | T         | T 
         * F         | F         | F
         * ----------+-----------+------------
         * T         | I         | T
         * F         | I         | F
         * I         | I         | T

         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        isVisible: function() {
            return this._getCache(VISIBLE, this._isVisible);
        },
        _isVisible: function() {
            var visible = this.getVisible(),
                parent = this.getParent();

            // the following conditions are a simplification of the truth table above.
            // please modify carefully
            if (visible === 'inherit') {
                if (parent) {
                    return parent.isVisible();
                }
                else {
                    return true;
                }
            }
            else {
                return visible;
            }
        },
        /**
         * determine if listening is enabled by taking into account descendants.  If self or any children
         * have _isListeningEnabled set to true, then self also has listening enabled.
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        shouldDrawHit: function() {
            var layer = this.getLayer();
            return  layer && layer.hitGraphEnabled() && this.isListening() && this.isVisible() && !Kinetic.isDragging();
        },
        /**
         * show node
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         */
        show: function() {
            this.setVisible(true);
            return this;
        },
        /**
         * hide node.  Hidden nodes are no longer detectable
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         */
        hide: function() {
            this.setVisible(false);
            return this;
        },
        /**
         * get zIndex relative to the node's siblings who share the same parent
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */
        getZIndex: function() {
            return this.index || 0;
        },
        /**
         * get absolute z-index which takes into account sibling
         *  and ancestor indices
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */
        getAbsoluteZIndex: function() {
            var depth = this.getDepth(),
                that = this,
                index = 0,
                nodes, len, n, child;

            function addChildren(children) {
                nodes = [];
                len = children.length;
                for(n = 0; n < len; n++) {
                    child = children[n];
                    index++;

                    if(child.nodeType !== SHAPE) {
                        nodes = nodes.concat(child.getChildren().toArray());
                    }

                    if(child._id === that._id) {
                        n = len;
                    }
                }

                if(nodes.length > 0 && nodes[0].getDepth() <= depth) {
                    addChildren(nodes);
                }
            }
            if(that.nodeType !== UPPER_STAGE) {
                addChildren(that.getStage().getChildren());
            }

            return index;
        },
        /**
         * get node depth in node tree.  Returns an integer.<br><br>
         *  e.g. Stage depth will always be 0.  Layers will always be 1.  Groups and Shapes will always
         *  be >= 2
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */
        getDepth: function() {
            var depth = 0,
                parent = this.parent;

            while(parent) {
                depth++;
                parent = parent.parent;
            }
            return depth;
        },
        setPosition: function(pos) {
            this.setX(pos.x);
            this.setY(pos.y);
            return this;
        },
        getPosition: function() {
            return {
                x: this.getX(),
                y: this.getY()
            };
        },
        /**
         * get absolute position relative to the top left corner of the stage container div
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Object}
         */
        getAbsolutePosition: function() {
            var absoluteMatrix = this.getAbsoluteTransform().getMatrix(),
                absoluteTransform = new Kinetic.Transform(),
                offset = this.offset();

            // clone the matrix array
            absoluteTransform.m = absoluteMatrix.slice();
            absoluteTransform.translate(offset.x, offset.y);

            return absoluteTransform.getTranslation();
        },
        /**
         * set absolute position
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} pos
         * @param {Number} pos.x
         * @param {Number} pos.y
         * @returns {Kinetic.Node}
         */
        setAbsolutePosition: function(pos) {
            var origTrans = this._clearTransform(),
                it;

            // don't clear translation
            this.attrs.x = origTrans.x;
            this.attrs.y = origTrans.y;
            delete origTrans.x;
            delete origTrans.y;

            // unravel transform
            it = this.getAbsoluteTransform();

            it.invert();
            it.translate(pos.x, pos.y);
            pos = {
                x: this.attrs.x + it.getTranslation().x,
                y: this.attrs.y + it.getTranslation().y
            };

            this.setPosition({x:pos.x, y:pos.y});
            this._setTransform(origTrans);

            return this;
        },
        _setTransform: function(trans) {
            var key;

            for(key in trans) {
                this.attrs[key] = trans[key];
            }

            this._clearCache(TRANSFORM);
            this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        },
        _clearTransform: function() {
            var trans = {
                x: this.getX(),
                y: this.getY(),
                rotation: this.getRotation(),
                scaleX: this.getScaleX(),
                scaleY: this.getScaleY(),
                offsetX: this.getOffsetX(),
                offsetY: this.getOffsetY(),
                skewX: this.getSkewX(),
                skewY: this.getSkewY()
            };

            this.attrs.x = 0;
            this.attrs.y = 0;
            this.attrs.rotation = 0;
            this.attrs.scaleX = 1;
            this.attrs.scaleY = 1;
            this.attrs.offsetX = 0;
            this.attrs.offsetY = 0;
            this.attrs.skewX = 0;
            this.attrs.skewY = 0;

            this._clearCache(TRANSFORM);
            this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);

            // return original transform
            return trans;
        },
        /**
         * move node by an amount relative to its current position
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} change
         * @param {Number} change.x
         * @param {Number} change.y
         * @returns {Kinetic.Node}
         * @example
         * // move node in x direction by 1px and y direction by 2px<br>
         * node.move({<br>
         *   x: 1,<br>
         *   y: 2)<br>
         * });
         */
        move: function(change) {
            var changeX = change.x,
                changeY = change.y,
                x = this.getX(),
                y = this.getY();

            if(changeX !== undefined) {
                x += changeX;
            }

            if(changeY !== undefined) {
                y += changeY;
            }

            this.setPosition({x:x, y:y});
            return this;
        },
        _eachAncestorReverse: function(func, includeSelf) {
            var family = [],
                parent = this.getParent(),
                len, n;

            // build family by traversing ancestors
            if(includeSelf) {
                family.unshift(this);
            }
            while(parent) {
                family.unshift(parent);
                parent = parent.parent;
            }

            len = family.length;
            for(n = 0; n < len; n++) {
                func(family[n]);
            }
        },
        /**
         * rotate node by an amount in degrees relative to its current rotation
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Number} theta
         * @returns {Kinetic.Node}
         */
        rotate: function(theta) {
            this.setRotation(this.getRotation() + theta);
            return this;
        },
        /**
         * move node to the top of its siblings
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        moveToTop: function() {
            var index = this.index;
            this.parent.children.splice(index, 1);
            this.parent.children.push(this);
            this.parent._setChildrenIndices();
            return true;
        },
        /**
         * move node up
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        moveUp: function() {
            var index = this.index,
                len = this.parent.getChildren().length;
            if(index < len - 1) {
                this.parent.children.splice(index, 1);
                this.parent.children.splice(index + 1, 0, this);
                this.parent._setChildrenIndices();
                return true;
            }
            return false;
        },
        /**
         * move node down
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        moveDown: function() {
            var index = this.index;
            if(index > 0) {
                this.parent.children.splice(index, 1);
                this.parent.children.splice(index - 1, 0, this);
                this.parent._setChildrenIndices();
                return true;
            }
            return false;
        },
        /**
         * move node to the bottom of its siblings
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        moveToBottom: function() {
            var index = this.index;
            if(index > 0) {
                this.parent.children.splice(index, 1);
                this.parent.children.unshift(this);
                this.parent._setChildrenIndices();
                return true;
            }
            return false;
        },
        /**
         * set zIndex relative to siblings
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Integer} zIndex
         * @returns {Kinetic.Node}
         */
        setZIndex: function(zIndex) {
            var index = this.index;
            this.parent.children.splice(index, 1);
            this.parent.children.splice(zIndex, 0, this);
            this.parent._setChildrenIndices();
            return this;
        },
        /**
         * get absolute opacity
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Number}
         */
        getAbsoluteOpacity: function() {
            return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
        },
        _getAbsoluteOpacity: function() {
            var absOpacity = this.getOpacity();
            if(this.getParent()) {
                absOpacity *= this.getParent().getAbsoluteOpacity();
            }
            return absOpacity;
        },
        /**
         * move node to another container
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Container} newContainer
         * @returns {Kinetic.Node}
         * @example
         * // move node from current layer into layer2<br>
         * node.moveTo(layer2);
         */
        moveTo: function(newContainer) {
            Kinetic.Node.prototype.remove.call(this);
            newContainer.add(this);
            return this;
        },
        /**
         * convert Node into an object for serialization.  Returns an object.
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Object}
         */
        toObject: function() {
            var type = Kinetic.Util,
                obj = {},
                attrs = this.getAttrs(),
                key, val, getter, defaultValue;

            obj.attrs = {};

            // serialize only attributes that are not function, image, DOM, or objects with methods
            for(key in attrs) {
                val = attrs[key];
                if (!type._isFunction(val) && !type._isElement(val) && !(type._isObject(val) && type._hasMethods(val))) {
                    getter = this[key];
                    // remove attr value so that we can extract the default value from the getter
                    delete attrs[key];
                    defaultValue = getter ? getter.call(this) : null;
                    // restore attr value
                    attrs[key] = val;
                    if (defaultValue !== val) {
                        obj.attrs[key] = val;
                    }
                }
            }

            obj.className = this.getClassName();
            return obj;
        },
        /**
         * convert Node into a JSON string.  Returns a JSON string.
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {String}}
         */
        toJSON: function() {
            return JSON.stringify(this.toObject());
        },
        /**
         * get parent container
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         */
        getParent: function() {
            return this.parent;
        },
        /**
         * get layer ancestor
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Layer}
         */
        getLayer: function() {
            var parent = this.getParent();
            return parent ? parent.getLayer() : null;
        },
        /**
         * get stage ancestor
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Stage}
         */
        getStage: function() {
            return this._getCache(STAGE, this._getStage);
        },
        _getStage: function() {
            var parent = this.getParent();
            if(parent) {
                return parent.getStage();
            }
            else {
                return undefined;
            }
        },
        /**
         * fire event
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} eventType event type.  can be a regular event, like click, mouseover, or mouseout, or it can be a custom event, like myCustomEvent
         * @param {EventObject} [evt] event object
         * @param {Boolean} [bubble] setting the value to false, or leaving it undefined, will result in the event
         *  not bubbling.  Setting the value to true will result in the event bubbling.
         * @returns {Kinetic.Node}
         * @example
         * // manually fire click event<br>
         * node.fire('click');<br><br>
         *
         * // fire custom event<br>
         * node.fire('foo');<br><br>
         *
         * // fire custom event with custom event object<br>
         * node.fire('foo', {<br>
         *   bar: 10<br>
         * });<br><br>
         *
         * // fire click event that bubbles<br>
         * node.fire('click', null, true);
         */
        fire: function(eventType, evt, bubble) {
            // bubble
            if (bubble) {
                this._fireAndBubble(eventType, evt || {});
            }
            // no bubble
            else {
                this._fire(eventType, evt || {});
            }
            return this;
        },
        /**
         * get absolute transform of the node which takes into
         *  account its ancestor transforms
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Transform}
         */
        getAbsoluteTransform: function() {
            return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
        },
        _getAbsoluteTransform: function() {
            var at = new Kinetic.Transform(),
                transformsEnabled, trans;

            // start with stage and traverse downwards to self
            this._eachAncestorReverse(function(node) {
                transformsEnabled = node.transformsEnabled();
                trans = node.getTransform();

                if (transformsEnabled === 'all') { 
                    at.multiply(trans);
                }
                else if (transformsEnabled === 'position') {
                    at.translate(node.x(), node.y());
                }
            }, true);
            return at;
        },
        /**
         * get transform of the node
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Transform}
         */
        getTransform: function() {
            return this._getCache(TRANSFORM, this._getTransform);
        },
        _getTransform: function() {
            var m = new Kinetic.Transform(),
                x = this.getX(),
                y = this.getY(),
                rotation = this.getRotation() * Math.PI / 180,
                scaleX = this.getScaleX(),
                scaleY = this.getScaleY(),
                skewX = this.getSkewX(),
                skewY = this.getSkewY(),
                offsetX = this.getOffsetX(),
                offsetY = this.getOffsetY();

            if(x !== 0 || y !== 0) {
                m.translate(x, y);
            }
            if(rotation !== 0) {
                m.rotate(rotation);
            }
            if(skewX !== 0 || skewY !== 0) {
                m.skew(skewX, skewY);
            }
            if(scaleX !== 1 || scaleY !== 1) {
                m.scale(scaleX, scaleY);
            }
            if(offsetX !== 0 || offsetY !== 0) {
                m.translate(-1 * offsetX, -1 * offsetY);
            }

            return m;
        },
        /**
         * clone node.  Returns a new Node instance with identical attributes.  You can also override
         *  the node properties with an object literal, enabling you to use an existing node as a template
         *  for another node
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} attrs override attrs
         * @returns {Kinetic.Node}
         * @example
         * // simple clone<br>
         * var clone = node.clone();<br><br>
         *
         * // clone a node and override the x position<br>
         * var clone = rect.clone({<br>
         *   x: 5<br>
         * });
         */
        clone: function(obj) {
            // instantiate new node
            var className = this.getClassName(),
                node = new Kinetic[className](this.attrs),
                key, allListeners, len, n, listener;

            // copy over listeners
            for(key in this.eventListeners) {
                allListeners = this.eventListeners[key];
                len = allListeners.length;
                for(n = 0; n < len; n++) {
                    listener = allListeners[n];
                    /*
                     * don't include kinetic namespaced listeners because
                     *  these are generated by the constructors
                     */
                    if(listener.name.indexOf(KINETIC) < 0) {
                        // if listeners array doesn't exist, then create it
                        if(!node.eventListeners[key]) {
                            node.eventListeners[key] = [];
                        }
                        node.eventListeners[key].push(listener);
                    }
                }
            }

            // apply attr overrides
            node.setAttrs(obj);
            return node;
        },
        /**
         * Creates a composite data URL. If MIME type is not
         * specified, then "image/png" will result. For "image/jpeg", specify a quality
         * level as quality (range 0.0 - 1.0)
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} config
         * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
         *  "image/png" is the default
         * @param {Number} [config.x] x position of canvas section
         * @param {Number} [config.y] y position of canvas section
         * @param {Number} [config.width] width of canvas section
         * @param {Number} [config.height] height of canvas section
         * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
         *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
         *  is very high quality
         * @returns {String}
         */
        toDataURL: function(config) {
            config = config || {};

            var mimeType = config.mimeType || null,
                quality = config.quality || null,
                stage = this.getStage(),
                x = config.x || 0,
                y = config.y || 0,
                canvas = new Kinetic.SceneCanvas({
                    width: config.width || this.getWidth() || (stage ? stage.getWidth() : 0),
                    height: config.height || this.getHeight() || (stage ? stage.getHeight() : 0),
                    pixelRatio: 1
                }),
                context = canvas.getContext();

            context.save();

            if(x || y) {
                context.translate(-1 * x, -1 * y);
            }

            this.drawScene(canvas);
            context.restore();

            return canvas.toDataURL(mimeType, quality);
        },
        /**
         * converts node into an image.  Since the toImage
         *  method is asynchronous, a callback is required.  toImage is most commonly used
         *  to cache complex drawings as an image so that they don't have to constantly be redrawn
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} config
         * @param {Function} config.callback function executed when the composite has completed
         * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
         *  "image/png" is the default
         * @param {Number} [config.x] x position of canvas section
         * @param {Number} [config.y] y position of canvas section
         * @param {Number} [config.width] width of canvas section
         * @param {Number} [config.height] height of canvas section
         * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
         *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
         *  is very high quality
         * @example
         * var image = node.toImage({<br>
         *   callback: function(img) {<br>
         *     // do stuff with img<br>
         *   }<br>
         * });
         */
        toImage: function(config) {
            Kinetic.Util._getImage(this.toDataURL(config), function(img) {
                config.callback(img);
            });
        },
        /**
         * set size
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} size
         * @param {Number} width
         * @param {Number} height
         * @returns {Kinetic.Node}
         */
        setSize: function(size) {
            this.setWidth(size.width);
            this.setHeight(size.height);
            return this;
        },
        /**
         * get size
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Object}
         */
        getSize: function() {
            return {
                width: this.getWidth(),
                height: this.getHeight()
            };
        },
        /**
         * get width
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */
        getWidth: function() {
            return this.attrs.width || 0;
        },
        /**
         * get height
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */
        getHeight: function() {
            return this.attrs.height || 0;
        },
        /**
         * get class name, which may return Stage, Layer, Group, or shape class names like Rect, Circle, Text, etc.
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {String}
         */
        getClassName: function() {
            return this.className || this.nodeType;
        },
        /**
         * get the node type, which may return Stage, Layer, Group, or Node
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {String}
         */
        getType: function() {
            return this.nodeType;
        },
        _get: function(selector) {
            return this.nodeType === selector ? [this] : [];
        },
        _off: function(type, name) {
            var evtListeners = this.eventListeners[type],
                i, evtName;

            for(i = 0; i < evtListeners.length; i++) {
                evtName = evtListeners[i].name;
                // the following two conditions must be true in order to remove a handler:
                // 1) the current event name cannot be kinetic unless the event name is kinetic
                //    this enables developers to force remove a kinetic specific listener for whatever reason
                // 2) an event name is not specified, or if one is specified, it matches the current event name
                if((evtName !== 'kinetic' || name === 'kinetic') && (!name || evtName === name)) {
                    evtListeners.splice(i, 1);
                    if(evtListeners.length === 0) {
                        delete this.eventListeners[type];
                        break;
                    }
                    i--;
                }
            }
        },
        _fireBeforeChangeEvent: function(attr, oldVal, newVal) {
            this._fire([BEFORE, Kinetic.Util._capitalize(attr), CHANGE].join(EMPTY_STRING), {
                oldVal: oldVal,
                newVal: newVal
            });
        },
        _fireChangeEvent: function(attr, oldVal, newVal) {
            this._fire(attr + CHANGE, {
                oldVal: oldVal,
                newVal: newVal
            });
        },
        /**
         * set id
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} id
         * @returns {Kinetic.Node}
         */
        setId: function(id) {
            var oldId = this.getId();

            Kinetic._removeId(oldId);
            Kinetic._addId(this, id);
            this._setAttr(ID, id);
            return this;
        },
        setName: function(name) {
            var oldName = this.getName();

            Kinetic._removeName(oldName, this._id);
            Kinetic._addName(this, name);
            this._setAttr(NAME, name);
            return this;
        },
        /**
         * set attr
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} attr
         * @param {*} val
         * @returns {Kinetic.Node}
         * @example
         * node.setAttr('x', 5);
         */
        setAttr: function() {
            var args = Array.prototype.slice.call(arguments),
                attr = args[0],
                val = args[1],
                method = SET + Kinetic.Util._capitalize(attr),
                func = this[method];

            if(Kinetic.Util._isFunction(func)) {
                func.call(this, val);
            }
            // otherwise set directly
            else {
                this._setAttr(attr, val);
            }
            return this;
        },
        _setAttr: function(key, val) {
            var oldVal;
            if(val !== undefined) {
                oldVal = this.attrs[key];
                this.attrs[key] = val;
                this._fireChangeEvent(key, oldVal, val);
            }
        },
        _setComponentAttr: function(key, component, val) {
            var oldVal;
            if(val !== undefined) {
                oldVal = this.attrs[key];

                if (!oldVal) {
                    // set value to default value using getAttr
                    this.attrs[key] = this.getAttr(key);
                }
                
                //this._fireBeforeChangeEvent(key, oldVal, val);
                this.attrs[key][component] = val;
                this._fireChangeEvent(key, oldVal, val);
            }
        },
        _fireAndBubble: function(eventType, evt, compareShape) {
            var okayToRun = true;

            if(evt && this.nodeType === SHAPE) {
                evt.targetNode = this;
            }

            if(eventType === MOUSEENTER && compareShape && this._id === compareShape._id) {
                okayToRun = false;
            }
            else if(eventType === MOUSELEAVE && compareShape && this._id === compareShape._id) {
                okayToRun = false;
            }

            if(okayToRun) {
                this._fire(eventType, evt);

                // simulate event bubbling
                if(evt && !evt.cancelBubble && this.parent) {
                    if(compareShape && compareShape.parent) {
                        this._fireAndBubble.call(this.parent, eventType, evt, compareShape.parent);
                    }
                    else {
                        this._fireAndBubble.call(this.parent, eventType, evt);
                    }
                }
            }
        },
        _fire: function(eventType, evt) {
            var events = this.eventListeners[eventType],
                i;

            if (events) {
                for(i = 0; i < events.length; i++) {
                    events[i].handler.call(this, evt);
                }
            }
        },
        /**
         * draw both scene and hit graphs.  If the node being drawn is the stage, all of the layers will be cleared and redrawn
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         */
        draw: function() {
            this.drawScene();
            this.drawHit();
            return this;
        }
    });

    /**
     * create node with JSON string.  De-serializtion does not generate custom
     *  shape drawing functions, images, or event handlers (this would make the
     *  serialized object huge).  If your app uses custom shapes, images, and
     *  event handlers (it probably does), then you need to select the appropriate
     *  shapes after loading the stage and set these properties via on(), setDrawFunc(),
     *  and setImage() methods
     * @method
     * @memberof Kinetic.Node
     * @param {String} JSON string
     * @param {DomElement} [container] optional container dom element used only if you're
     *  creating a stage node
     */
    Kinetic.Node.create = function(json, container) {
        return this._createNode(JSON.parse(json), container);
    };
    Kinetic.Node._createNode = function(obj, container) {
        var className = Kinetic.Node.prototype.getClassName.call(obj),
            children = obj.children,
            no, len, n;

        // if container was passed in, add it to attrs
        if(container) {
            obj.attrs.container = container;
        }

        no = new Kinetic[className](obj.attrs);
        if(children) {
            len = children.length;
            for(n = 0; n < len; n++) {
                no.add(this._createNode(children[n]));
            }
        }

        return no;
    };


    // =========================== add getters setters ===========================

    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'position');
    /**
     * get/set node position relative to parent
     * @name position
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Object} pos
     * @param {Number} pos.x
     * @param {Nubmer} pos.y
     * @returns {Object}
     * @example
     * // get position<br>
     * var position = node.position();<br><br>
     *
     * // set position<br>
     * node.position({<br>
     *   x: 5<br>
     *   y: 10<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'x', 0);

    /**
     * get/set x position
     * @name x
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} x
     * @returns {Object}
     * @example
     * // get x<br>
     * var x = node.x();<br><br>
     *
     * // set x<br>
     * node.x(5);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'y', 0);

    /**
     * get/set y position
     * @name y
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} y
     * @returns {Integer}
     * @example
     * // get y<br>
     * var y = node.y();<br><br>
     *
     * // set y<br>
     * node.y(5);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'opacity', 1);

    /**
     * get/set opacity.  Opacity values range from 0 to 1.
     *  A node with an opacity of 0 is fully transparent, and a node
     *  with an opacity of 1 is fully opaque
     * @name opacity
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Object} opacity
     * @returns {Number}
     * @example
     * // get opacity<br>
     * var opacity = node.opacity();<br><br>
     *
     * // set opacity<br>
     * node.opacity(0.5);
     */

    Kinetic.Factory.addGetter(Kinetic.Node, 'name');
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'name');

    /**
     * get/set name
     * @name name
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {String} name
     * @returns {String}
     * @example
     * // get name<br>
     * var name = node.name();<br><br>
     *
     * // set name<br>
     * node.name('foo');
     */

    Kinetic.Factory.addGetter(Kinetic.Node, 'id');
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'id');

    /**
     * get/set id
     * @name id
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {String} id
     * @returns {String}
     * @example
     * // get id<br>
     * var name = node.id();<br><br>
     *
     * // set id<br>
     * node.id('foo');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'rotation', 0);

    /**
     * get/set rotation in degrees
     * @name rotation
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} rotation
     * @returns {Number}
     * @example
     * // get rotation in degrees<br>
     * var rotation = node.rotation();<br><br>
     *
     * // set rotation in degrees<br>
     * node.rotation(45);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node, 'scale', ['x', 'y']);

    /**
     * get/set scale
     * @name scale
     * @param {Object} scale
     * @param {Number} scale.x
     * @param {Number} scale.y
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Object}
     * @example
     * // get scale<br>
     * var scale = node.scale();<br><br>
     *
     * // set scale <br>
     * shape.scale({<br>
     *   x: 2<br>
     *   y: 3<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'scaleX', 1);

    /**
     * get/set scale x
     * @name scaleX
     * @param {Number} x
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Number}
     * @example
     * // get scale x<br>
     * var scaleX = node.scaleX();<br><br>
     *
     * // set scale x<br>
     * node.scaleX(2);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'scaleY', 1);

    /**
     * get/set scale y
     * @name scaleY
     * @param {Number} y
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Number}
     * @example
     * // get scale y<br>
     * var scaleY = node.scaleY();<br><br>
     *
     * // set scale y<br>
     * node.scaleY(2);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node, 'skew', ['x', 'y']);

    /**
     * get/set skew
     * @name skew
     * @param {Object} skew
     * @param {Number} skew.x
     * @param {Number} skew.y
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Object}
     * @example
     * // get skew<br>
     * var skew = node.skew();<br><br>
     *
     * // set skew <br>
     * node.skew({<br>
     *   x: 20<br>
     *   y: 10
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'skewX', 0);

    /**
     * get/set skew x
     * @name skewX
     * @param {Number} x
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Number}
     * @example
     * // get skew x<br>
     * var skewX = node.skewX();<br><br>
     *
     * // set skew x<br>
     * node.skewX(3);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'skewY', 0);

    /**
     * get/set skew y
     * @name skewY
     * @param {Number} y
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Number}
     * @example
     * // get skew y<br>
     * var skewY = node.skewY();<br><br>
     *
     * // set skew y<br>
     * node.skewY(3);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node, 'offset', ['x', 'y']);

    /**
     * get/set offset.  Offsets the default position and rotation point
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Object} offset
     * @param {Number} offset.x
     * @param {Number} offset.y
     * @returns {Object}
     * @example
     * // get offset<br>
     * var offset = node.offset();<br><br>
     *
     * // set offset<br>
     * node.offset({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'offsetX', 0);

    /**
     * get/set offset x
     * @name offsetX
     * @memberof Kinetic.Node.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get offset x<br>
     * var offsetX = node.offsetX();<br><br>
     *
     * // set offset x<br>
     * node.offsetX(3);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'offsetY', 0);

    /**
     * get/set offset y
     * @name offsetY
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get offset y<br>
     * var offsetY = node.offsetY();<br><br>
     *
     * // set offset y<br>
     * node.offsetY(3);
     */

    Kinetic.Factory.addSetter(Kinetic.Node, 'width', 0);
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'width');
    /**
     * get/set width
     * @name width
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} width
     * @returns {Number}
     * @example
     * // get width<br>
     * var width = node.width();<br><br>
     *
     * // set width<br>
     * node.width(100);
     */

    Kinetic.Factory.addSetter(Kinetic.Node, 'height', 0);
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'height');
    /**
     * get/set height
     * @name height
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} height
     * @returns {Number}
     * @example
     * // get height<br>
     * var height = node.height();<br><br>
     *
     * // set height<br>
     * node.height(100);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'listening', 'inherit');
    /**
     * get/set listenig attr.  If you need to determine if a node is listening or not
     *   by taking into account its parents, use the isListening() method  
     * @name listening
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Boolean|String} listening Can be "inherit", true, or false.  The default is "inherit".
     * @returns {Boolean|String}
     * @example
     * // get listening attr<br>
     * var listening = node.listening();<br><br>
     *
     * // stop listening for events<br>
     * node.listening(false);<br><br>
     *
     * // listen for events<br>
     * node.listening(true);<br><br>
     *
     * // listen to events according to the parent<br>
     * node.listening('inherit');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'filters', undefined, function(val) {this._filterUpToDate = false;return val;});
    /**
     * get/set filters.  Filters are applied to cached canvases
     * @name filters
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Array} filters array of filters
     * @returns {Array}
     * @example
     * // get filters<br>
     * var filters = node.filters();<br><br>
     *
     * // set a single filter<br>
     * node.cache();<br>
     * node.filters([Kinetic.Filters.Blur]);<br><br>
     *
     * // set multiple filters<br>
     * node.cache();<br>
     * node.filters([<br>
     *   Kinetic.Filters.Blur,<br>
     *   Kinetic.Filters.Sepia,<br>
     *   Kinetic.Filters.Invert<br>
     * ]);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'visible', 'inherit');
    /**
     * get/set visible attr.  Can be "inherit", true, or false.  The default is "inherit".
     *   If you need to determine if a node is visible or not
     *   by taking into account its parents, use the isVisible() method  
     * @name visible
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Boolean|String} visible
     * @returns {Boolean|String}
     * @example
     * // get visible attr<br>
     * var visible = node.visible();<br><br>
     *
     * // make invisible<br>
     * node.visible(false);<br><br>
     *
     * // make visible<br>
     * node.visible(true);<br><br>
     *
     * // make visible according to the parent<br>
     * node.visible('inherit');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'transformsEnabled', 'all');

    /**
     * get/set transforms that are enabled.  Can be "all", "none", or "position".  The default
     *  is "all"
     * @name transformsEnabled
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {String} enabled
     * @returns {String}
     * @example
     * // enable position transform only to improve draw performance<br>
     * node.transformsEnabled('position');<br><br>
     *
     * // enable all transforms<br>
     * node.transformsEnabled('all');
     */

    Kinetic.Factory.backCompat(Kinetic.Node, {
        rotateDeg: 'rotate',
        setRotationDeg: 'setRotation',
        getRotationDeg: 'getRotation'
    });

    Kinetic.Collection.mapMethods(Kinetic.Node);
})();
;(function() {
    /**
     * Grayscale Filter
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     */
    Kinetic.Filters.Grayscale = function(imageData) {
        var data = imageData.data,
            len = data.length,
            i, brightness;

        for(i = 0; i < len; i += 4) {
            brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
            // red
            data[i] = brightness;
            // green
            data[i + 1] = brightness;
            // blue
            data[i + 2] = brightness;
        }
    };
})();
;(function() {
    /**
     * Brighten Filter.  
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     */
    Kinetic.Filters.Brighten = function(imageData) {
        var brightness = this.brightness() * 255,
            data = imageData.data,
            len = data.length,
            i;

        for(i = 0; i < len; i += 4) {
            // red
            data[i] += brightness;
            // green
            data[i + 1] += brightness;
            // blue
            data[i + 2] += brightness;
        }
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'brightness', 0, null, Kinetic.Factory.afterSetFilter);
    /**
    * get/set filter brightness.  The brightness is a number between -1 and 1.&nbsp; Positive values 
    *  brighten the pixels and negative values darken them.
    * @name brightness
    * @method
    * @memberof Kinetic.Image.prototype
    * @param {Number} brightness value between -1 and 1
    * @returns {Number}
    */

})();
;(function() {
    /**
     * Invert Filter
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     */
    Kinetic.Filters.Invert = function(imageData) {
        var data = imageData.data,
            len = data.length,
            i;

        for(i = 0; i < len; i += 4) {
            // red
            data[i] = 255 - data[i];
            // green
            data[i + 1] = 255 - data[i + 1];
            // blue
            data[i + 2] = 255 - data[i + 2];
        }
    };
})();;/*
 the Gauss filter
 master repo: https://github.com/pavelpower/kineticjsGaussFilter/
*/
(function() {
    /*

     StackBlur - a fast almost Gaussian Blur For Canvas

     Version:   0.5
     Author:    Mario Klingemann
     Contact:   mario@quasimondo.com
     Website:   http://www.quasimondo.com/StackBlurForCanvas
     Twitter:   @quasimondo

     In case you find this class useful - especially in commercial projects -
     I am not totally unhappy for a small donation to my PayPal account
     mario@quasimondo.de

     Or support me on flattr:
     https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

     Copyright (c) 2010 Mario Klingemann

     Permission is hereby granted, free of charge, to any person
     obtaining a copy of this software and associated documentation
     files (the "Software"), to deal in the Software without
     restriction, including without limitation the rights to use,
     copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the
     Software is furnished to do so, subject to the following
     conditions:

     The above copyright notice and this permission notice shall be
     included in all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
     OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
     HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
     WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
     OTHER DEALINGS IN THE SOFTWARE.
     */

    function BlurStack() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.next = null;
    }

    var mul_table = [
        512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
        454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
        482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
        437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
        497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
        320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
        446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
        329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
        505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
        399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
        324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
        268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
        451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
        385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
        332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
        289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];

    var shg_table = [
        9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
        17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
        19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
        21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
        21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
        22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
        22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];

    function filterGaussBlurRGBA( imageData, radius) {

        var pixels = imageData.data,
            width = imageData.width,
            height = imageData.height;

        var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum,
            r_out_sum, g_out_sum, b_out_sum, a_out_sum,
            r_in_sum, g_in_sum, b_in_sum, a_in_sum,
            pr, pg, pb, pa, rbs;

        var div = radius + radius + 1,
            widthMinus1  = width - 1,
            heightMinus1 = height - 1,
            radiusPlus1  = radius + 1,
            sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2,
            stackStart = new BlurStack(),
            stackEnd = null,
            stack = stackStart,
            stackIn = null,
            stackOut = null,
            mul_sum = mul_table[radius],
            shg_sum = shg_table[radius];

        for ( i = 1; i < div; i++ ) {
            stack = stack.next = new BlurStack();
            if ( i == radiusPlus1 ) stackEnd = stack;
        }

        stack.next = stackStart;

        yw = yi = 0;

        for ( y = 0; y < height; y++ )
        {
            r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

            r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
            g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
            b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
            a_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );

            r_sum += sumFactor * pr;
            g_sum += sumFactor * pg;
            b_sum += sumFactor * pb;
            a_sum += sumFactor * pa;

            stack = stackStart;

            for( i = 0; i < radiusPlus1; i++ )
            {
                stack.r = pr;
                stack.g = pg;
                stack.b = pb;
                stack.a = pa;
                stack = stack.next;
            }

            for( i = 1; i < radiusPlus1; i++ )
            {
                p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
                r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
                g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
                b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;
                a_sum += ( stack.a = ( pa = pixels[p+3])) * rbs;

                r_in_sum += pr;
                g_in_sum += pg;
                b_in_sum += pb;
                a_in_sum += pa;

                stack = stack.next;
            }


            stackIn = stackStart;
            stackOut = stackEnd;
            for ( x = 0; x < width; x++ )
            {
                pixels[yi+3] = pa = (a_sum * mul_sum) >> shg_sum;
                if ( pa !== 0 )
                {
                    pa = 255 / pa;
                    pixels[yi]   = ((r_sum * mul_sum) >> shg_sum) * pa;
                    pixels[yi+1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                    pixels[yi+2] = ((b_sum * mul_sum) >> shg_sum) * pa;
                } else {
                    pixels[yi] = pixels[yi+1] = pixels[yi+2] = 0;
                }

                r_sum -= r_out_sum;
                g_sum -= g_out_sum;
                b_sum -= b_out_sum;
                a_sum -= a_out_sum;

                r_out_sum -= stackIn.r;
                g_out_sum -= stackIn.g;
                b_out_sum -= stackIn.b;
                a_out_sum -= stackIn.a;

                p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;

                r_in_sum += ( stackIn.r = pixels[p]);
                g_in_sum += ( stackIn.g = pixels[p+1]);
                b_in_sum += ( stackIn.b = pixels[p+2]);
                a_in_sum += ( stackIn.a = pixels[p+3]);

                r_sum += r_in_sum;
                g_sum += g_in_sum;
                b_sum += b_in_sum;
                a_sum += a_in_sum;

                stackIn = stackIn.next;

                r_out_sum += ( pr = stackOut.r );
                g_out_sum += ( pg = stackOut.g );
                b_out_sum += ( pb = stackOut.b );
                a_out_sum += ( pa = stackOut.a );

                r_in_sum -= pr;
                g_in_sum -= pg;
                b_in_sum -= pb;
                a_in_sum -= pa;

                stackOut = stackOut.next;

                yi += 4;
            }
            yw += width;
        }


        for ( x = 0; x < width; x++ )
        {
            g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

            yi = x << 2;
            r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
            g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
            b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);
            a_out_sum = radiusPlus1 * ( pa = pixels[yi+3]);

            r_sum += sumFactor * pr;
            g_sum += sumFactor * pg;
            b_sum += sumFactor * pb;
            a_sum += sumFactor * pa;

            stack = stackStart;

            for( i = 0; i < radiusPlus1; i++ )
            {
                stack.r = pr;
                stack.g = pg;
                stack.b = pb;
                stack.a = pa;
                stack = stack.next;
            }

            yp = width;

            for( i = 1; i <= radius; i++ )
            {
                yi = ( yp + x ) << 2;

                r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
                g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
                b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;
                a_sum += ( stack.a = ( pa = pixels[yi+3])) * rbs;

                r_in_sum += pr;
                g_in_sum += pg;
                b_in_sum += pb;
                a_in_sum += pa;

                stack = stack.next;

                if( i < heightMinus1 )
                {
                    yp += width;
                }
            }

            yi = x;
            stackIn = stackStart;
            stackOut = stackEnd;
            for ( y = 0; y < height; y++ )
            {
                p = yi << 2;
                pixels[p+3] = pa = (a_sum * mul_sum) >> shg_sum;
                if ( pa > 0 )
                {
                    pa = 255 / pa;
                    pixels[p]   = ((r_sum * mul_sum) >> shg_sum ) * pa;
                    pixels[p+1] = ((g_sum * mul_sum) >> shg_sum ) * pa;
                    pixels[p+2] = ((b_sum * mul_sum) >> shg_sum ) * pa;
                } else {
                    pixels[p] = pixels[p+1] = pixels[p+2] = 0;
                }

                r_sum -= r_out_sum;
                g_sum -= g_out_sum;
                b_sum -= b_out_sum;
                a_sum -= a_out_sum;

                r_out_sum -= stackIn.r;
                g_out_sum -= stackIn.g;
                b_out_sum -= stackIn.b;
                a_out_sum -= stackIn.a;

                p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;

                r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
                g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
                b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));
                a_sum += ( a_in_sum += ( stackIn.a = pixels[p+3]));

                stackIn = stackIn.next;

                r_out_sum += ( pr = stackOut.r );
                g_out_sum += ( pg = stackOut.g );
                b_out_sum += ( pb = stackOut.b );
                a_out_sum += ( pa = stackOut.a );

                r_in_sum -= pr;
                g_in_sum -= pg;
                b_in_sum -= pb;
                a_in_sum -= pa;

                stackOut = stackOut.next;

                yi += width;
            }
        }
    }

    /**
     * Blur Filter
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     */
    Kinetic.Filters.Blur = function(imageData) {
        var radius = this.blurRadius() | 0;

        if (radius > 0) {
            filterGaussBlurRGBA(imageData, radius);
        }
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'blurRadius', 0, null, Kinetic.Factory.afterSetFilter);

    /**
    * get/set blur radius
    * @name blurRadius
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} radius
    * @returns {Integer}
    */
})();;(function() {

	function pixelAt(idata, x, y) {
		var idx = (y * idata.width + x) * 4;
		var d = [];
		d.push(idata.data[idx++], idata.data[idx++], idata.data[idx++], idata.data[idx++]);
		return d;
	}

	function rgbDistance(p1, p2) {
		return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2));
	}

	function rgbMean(pTab) {
		var m = [0, 0, 0];

		for (var i = 0; i < pTab.length; i++) {
			m[0] += pTab[i][0];
			m[1] += pTab[i][1];
			m[2] += pTab[i][2];
		}

		m[0] /= pTab.length;
		m[1] /= pTab.length;
		m[2] /= pTab.length;

		return m;
	}

	function backgroundMask(idata, threshold) {
		var rgbv_no = pixelAt(idata, 0, 0);
		var rgbv_ne = pixelAt(idata, idata.width - 1, 0);
		var rgbv_so = pixelAt(idata, 0, idata.height - 1);
		var rgbv_se = pixelAt(idata, idata.width - 1, idata.height - 1);


		var thres = threshold || 10; 
		if (rgbDistance(rgbv_no, rgbv_ne) < thres && rgbDistance(rgbv_ne, rgbv_se) < thres && rgbDistance(rgbv_se, rgbv_so) < thres && rgbDistance(rgbv_so, rgbv_no) < thres) {

			// Mean color
			var mean = rgbMean([rgbv_ne, rgbv_no, rgbv_se, rgbv_so]);

			// Mask based on color distance
			var mask = [];
			for (var i = 0; i < idata.width * idata.height; i++) {
				var d = rgbDistance(mean, [idata.data[i * 4], idata.data[i * 4 + 1], idata.data[i * 4 + 2]]);
				mask[i] = (d < thres) ? 0 : 255;
			}

			return mask;
		}
	}

	function applyMask(idata, mask) {
		for (var i = 0; i < idata.width * idata.height; i++) {
			idata.data[4 * i + 3] = mask[i];
		}
	}

	function erodeMask(mask, sw, sh) {

		var weights = [1, 1, 1, 1, 0, 1, 1, 1, 1];
		var side = Math.round(Math.sqrt(weights.length));
		var halfSide = Math.floor(side / 2);

		var maskResult = [];
		for (var y = 0; y < sh; y++) {
			for (var x = 0; x < sw; x++) {

				var so = y * sw + x;
				var a = 0;
				for (var cy = 0; cy < side; cy++) {
					for (var cx = 0; cx < side; cx++) {
						var scy = y + cy - halfSide;
						var scx = x + cx - halfSide;

						if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {

							var srcOff = scy * sw + scx;
							var wt = weights[cy * side + cx];

							a += mask[srcOff] * wt;
						}
					}
				}

				maskResult[so] = (a === 255 * 8) ? 255 : 0;
			}
		}

		return maskResult;
	}

	function dilateMask(mask, sw, sh) {

		var weights = [1, 1, 1, 1, 1, 1, 1, 1, 1];
		var side = Math.round(Math.sqrt(weights.length));
		var halfSide = Math.floor(side / 2);

		var maskResult = [];
		for (var y = 0; y < sh; y++) {
			for (var x = 0; x < sw; x++) {

				var so = y * sw + x;
				var a = 0;
				for (var cy = 0; cy < side; cy++) {
					for (var cx = 0; cx < side; cx++) {
						var scy = y + cy - halfSide;
						var scx = x + cx - halfSide;

						if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {

							var srcOff = scy * sw + scx;
							var wt = weights[cy * side + cx];

							a += mask[srcOff] * wt;
						}
					}
				}

				maskResult[so] = (a >= 255 * 4) ? 255 : 0;
			}
		}

		return maskResult;
	}

	function smoothEdgeMask(mask, sw, sh) {

		var weights = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9];
		var side = Math.round(Math.sqrt(weights.length));
		var halfSide = Math.floor(side / 2);

		var maskResult = [];
		for (var y = 0; y < sh; y++) {
			for (var x = 0; x < sw; x++) {

				var so = y * sw + x;
				var a = 0;
				for (var cy = 0; cy < side; cy++) {
					for (var cx = 0; cx < side; cx++) {
						var scy = y + cy - halfSide;
						var scx = x + cx - halfSide;

						if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {

							var srcOff = scy * sw + scx;
							var wt = weights[cy * side + cx];

							a += mask[srcOff] * wt;
						}
					}
				}

				maskResult[so] = a;
			}
		}

		return maskResult;
	}
	
	/**
	 * Mask Filter
	 * @function
	 * @memberof Kinetic.Filters
	 * @param {Object} imageData
	 */
	Kinetic.Filters.Mask = function(imageData) {
		// Detect pixels close to the background color
		var threshold = this.threshold(),
        mask = backgroundMask(imageData, threshold);
		if (mask) {
			// Erode
			mask = erodeMask(mask, imageData.width, imageData.height);

			// Dilate
			mask = dilateMask(mask, imageData.width, imageData.height);

			// Gradient
			mask = smoothEdgeMask(mask, imageData.width, imageData.height);

			// Apply mask
			applyMask(imageData, mask);
			
			// todo : Update hit region function according to mask
		}

		return imageData;
	};

	Kinetic.Factory.addGetterSetter(Kinetic.Node, 'threshold', 0, null, Kinetic.Factory.afterSetFilter);
})();
;(function () {
  /**
   * RGB Filter
   * @function
   * @memberof Kinetic.Filters
   * @param {Object} imageData
   * @author ippo615
   */
  Kinetic.Filters.RGB = function (imageData) {
    var data = imageData.data,
        nPixels = data.length,
        red = this.red(),
        green = this.green(),
        blue = this.blue(),
        i, brightness;

    for (i = 0; i < nPixels; i += 4) {
      brightness = (0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2])/255;
      data[i    ] = brightness*red; // r
      data[i + 1] = brightness*green; // g
      data[i + 2] = brightness*blue; // b
      data[i + 3] = data[i + 3]; // alpha
    }
  };

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'red', 0, function(val) {
      this._filterUpToDate = false;
      if (val > 255) {
          return 255;
      }
      else if (val < 0) {
          return 0;
      }
      else {
          return Math.round(val);
      }
  });
  /**
  * get/set filter red value
  * @name red
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Integer} red value between 0 and 255
  * @returns {Integer}
  */

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'green', 0, function(val) {
      this._filterUpToDate = false;
      if (val > 255) {
          return 255;
      }
      else if (val < 0) {
          return 0;
      }
      else {
          return Math.round(val);
      }
  });
  /**
  * get/set filter green value
  * @name green
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Integer} green value between 0 and 255
  * @returns {Integer}
  */

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'blue', 0, Kinetic.Validators.RGBComponent, Kinetic.Factory.afterSetFilter);
  /**
  * get/set filter blue value
  * @name blue
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Integer} blue value between 0 and 255
  * @returns {Integer}
  */
})();
;(function () {

  /**
   * HSV Filter. Adjusts the hue, saturation and value
   * @function
   * @memberof Kinetic.Filters
   * @param {Object} imageData
   * @author ippo615
   */

  Kinetic.Filters.HSV = function (imageData) {
    var data = imageData.data,
        nPixels = data.length,
        v = this.value(),
        s = this.saturation(),
        h = Math.abs((this.hue()) + 360) % 360,
        i;

    // Basis for the technique used:
    // http://beesbuzz.biz/code/hsv_color_transforms.php
    // V is the value multiplier (1 for none, 2 for double, 0.5 for half)
    // S is the saturation multiplier (1 for none, 2 for double, 0.5 for half)
    // H is the hue shift in degrees (0 to 360)
    // vsu = V*S*cos(H*PI/180);
    // vsw = V*S*sin(H*PI/180);
    //[ .299V+.701vsu+.168vsw    .587V-.587vsu+.330vsw    .114V-.114vsu-.497vsw ] [R]
    //[ .299V-.299vsu-.328vsw    .587V+.413vsu+.035vsw    .114V-.114vsu+.292vsw ]*[G]
    //[ .299V-.300vsu+1.25vsw    .587V-.588vsu-1.05vsw    .114V+.886vsu-.203vsw ] [B]

    // Precompute the values in the matrix:
    var vsu = v*s*Math.cos(h*Math.PI/180),
        vsw = v*s*Math.sin(h*Math.PI/180);
    // (result spot)(source spot)
    var rr = 0.299*v+0.701*vsu+0.167*vsw,
        rg = 0.587*v-0.587*vsu+0.330*vsw,
        rb = 0.114*v-0.114*vsu-0.497*vsw;
    var gr = 0.299*v-0.299*vsu-0.328*vsw,
        gg = 0.587*v+0.413*vsu+0.035*vsw,
        gb = 0.114*v-0.114*vsu+0.293*vsw;
    var br = 0.299*v-0.300*vsu+1.250*vsw,
        bg = 0.587*v-0.586*vsu-1.050*vsw,
        bb = 0.114*v+0.886*vsu-0.200*vsw;

    var r,g,b,a;

    for (i = 0; i < nPixels; i += 4) {
      r = data[i+0];
      g = data[i+1];
      b = data[i+2];
      a = data[i+3];

      data[i+0] = rr*r + rg*g + rb*b;
      data[i+1] = gr*r + gg*g + gb*b;
      data[i+2] = br*r + bg*g + bb*b;
      data[i+3] = a; // alpha
    }

  };

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'hue', 0, null, Kinetic.Factory.afterSetFilter);
  /**
  * get/set hsv hue in degrees
  * @name hue
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Number} hue value between 0 and 359
  * @returns {Number}
  */

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'saturation', 1, null, Kinetic.Factory.afterSetFilter);
  /**
  * get/set hsv saturation
  * @name saturation
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Number} saturation 1 is no change, 0.5 halves the saturation, 2.0 doubles, etc..
  * @returns {Number}
  */

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'value', 1, null, Kinetic.Factory.afterSetFilter);
  /**
  * get/set hsv value
  * @name value
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Number} value 1 is no change, 0.5 halves the value, 2.0 doubles, etc..
  * @returns {Number}
  */
})();
;(function () {
  /**
   * Emboss Filter
   * @function
   * @memberof Kinetic.Filters
   * @param {Object} imageData
   * Pixastic Lib - Emboss filter - v0.1.0
   * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
   * License: [http://www.pixastic.com/lib/license.txt]
   */
  Kinetic.Filters.Emboss = function (imageData) {

    // pixastic strength is between 0 and 10.  I want it between 0 and 1
    // pixastic greyLevel is between 0 and 255.  I want it between 0 and 1.  Also,
    // a max value of greyLevel yields a white emboss, and the min value yields a black
    // emboss.  Therefore, I changed greyLevel to whiteLevel
    var strength = this.embossStrength() * 10, 
        greyLevel = this.embossWhiteLevel() * 255,
        direction = this.embossDirection(),
        blend = this.embossBlend(),
        dirY = 0,
        dirX = 0,
        data = imageData.data,
        invertAlpha = false,
        w = imageData.width,
        h = imageData.height,
        w4 = w*4,
        y = h;

    switch (direction) {
      case 'top-left':     
        dirY = -1;
        dirX = -1;
        break;
      case 'top':     
        dirY = -1;
        dirX = 0;
        break;
      case 'top-right':  
        dirY = -1;
        dirX = 1;
        break;
      case 'right':  
        dirY = 0;
        dirX = 1;
        break;
      case 'bottom-right':
        dirY = 1;
        dirX = 1;
        break;
      case 'bottom': 
        dirY = 1;
        dirX = 0;
        break;
      case 'bottom-left':
        dirY = 1;
        dirX = -1;
        break;
      case 'left':
        dirY = 0;
        dirX = -1;
        break;
    }

      do {
        var offsetY = (y-1)*w4;

        var otherY = dirY;
        if (y + otherY < 1) otherY = 0;
        if (y + otherY > h) otherY = 0;

        var offsetYOther = (y-1+otherY)*w*4;

        var x = w;
        do {
            var offset = offsetY + (x-1)*4;

            var otherX = dirX;
            if (x + otherX < 1) otherX = 0;
            if (x + otherX > w) otherX = 0;

            var offsetOther = offsetYOther + (x-1+otherX)*4;

            var dR = data[offset] - data[offsetOther];
            var dG = data[offset+1] - data[offsetOther+1];
            var dB = data[offset+2] - data[offsetOther+2];

            var dif = dR;
            var absDif = dif > 0 ? dif : -dif;

            var absG = dG > 0 ? dG : -dG;
            var absB = dB > 0 ? dB : -dB;

            if (absG > absDif) {
              dif = dG;
            }
            if (absB > absDif) {
              dif = dB;
            }

            dif *= strength;

            if (blend) {
              var r = data[offset] + dif;
              var g = data[offset+1] + dif;
              var b = data[offset+2] + dif;

              data[offset] = (r > 255) ? 255 : (r < 0 ? 0 : r);
              data[offset+1] = (g > 255) ? 255 : (g < 0 ? 0 : g);
              data[offset+2] = (b > 255) ? 255 : (b < 0 ? 0 : b);
            } else {
              var grey = greyLevel - dif;
              if (grey < 0) {
                grey = 0;
              } else if (grey > 255) {
                grey = 255;
              }

              data[offset] = data[offset+1] = data[offset+2] = grey;
            }

        } while (--x);
      } while (--y);
  };

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'embossStrength', 0.5, null, Kinetic.Factory.afterSetFilter);
  /**
  * get/set emboss strength
  * @name embossStrength
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Number} level between 0 and 1.  Default is 0.5
  * @returns {Number}
  */

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'embossWhiteLevel', 0.5, null, Kinetic.Factory.afterSetFilter);
  /**
  * get/set emboss white level
  * @name embossWhiteLevel
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Number} embossWhiteLevel between 0 and 1.  Default is 0.5
  * @returns {Number}
  */

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'embossDirection', 'top-left', null, Kinetic.Factory.afterSetFilter);
  /**
  * get/set emboss direction
  * @name embossDirection
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {String} embossDirection can be top-left, top, top-right, right, bottom-right, bottom, bottom-left or left
  *   The default is top-left
  * @returns {String}
  */

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'embossBlend', false, null, Kinetic.Factory.afterSetFilter);
  /**
  * get/set emboss blend
  * @name embossBlend
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Boolean} embossBlend
  * @returns {Boolean}
  */

})();


;(function () {
  function remap(fromValue, fromMin, fromMax, toMin, toMax) {
    // Compute the range of the data
    var fromRange = fromMax - fromMin,
        toRange = toMax - toMin,
        toValue;

    // If either range is 0, then the value can only be mapped to 1 value
    if (fromRange === 0) {
      return toMin + toRange / 2;
    }
    if (toRange === 0) {
      return toMin;
    }

    // (1) untranslate, (2) unscale, (3) rescale, (4) retranslate
    toValue = (fromValue - fromMin) / fromRange;
    toValue = (toRange * toValue) + toMin;

    return toValue;
  }


  /**
   * Enhance Filter. Adjusts the colors so that they span the widest
   *  possible range (ie 0-255). Performs w*h pixel reads and w*h pixel
   *  writes.
   * @function
   * @memberof Kinetic.Filters
   * @param {Object} imageData
   * @author ippo615
   */
  Kinetic.Filters.Enhance = function (imageData) {
    var data = imageData.data,
        nSubPixels = data.length,
        rMin = data[0], rMax = rMin, r,
        gMin = data[1], gMax = gMin, g,
        bMin = data[2], bMax = bMin, b,
        aMin = data[3], aMax = aMin, a,
        i;

    // If we are not enhancing anything - don't do any computation
    var enhanceAmount = this.enhance();
    if( enhanceAmount === 0 ){ return; }

    // 1st Pass - find the min and max for each channel:
    for (i = 0; i < nSubPixels; i += 4) {
      r = data[i + 0];
      if (r < rMin) { rMin = r; } else
      if (r > rMax) { rMax = r; }
      g = data[i + 1];
      if (g < gMin) { gMin = g; } else
      if (g > gMax) { gMax = g; }
      b = data[i + 2];
      if (b < bMin) { bMin = b; } else
      if (b > bMax) { bMax = b; }
      //a = data[i + 3];
      //if (a < aMin) { aMin = a; } else
      //if (a > aMax) { aMax = a; }
    }

    // If there is only 1 level - don't remap
    if( rMax === rMin ){ rMax = 255; rMin = 0; }
    if( gMax === gMin ){ gMax = 255; gMin = 0; }
    if( bMax === bMin ){ bMax = 255; bMin = 0; }
    if( aMax === aMin ){ aMax = 255; aMin = 0; }

    var rMid, rGoalMax,rGoalMin,
        gMid, gGoalMax,gGoalMin,
        bMid, bGoalMax,aGoalMin,
        aMid, aGoalMax,bGoalMin;

    // If the enhancement is positive - stretch the histogram 
    if( enhanceAmount > 0 ){
      rGoalMax = rMax + enhanceAmount*(255-rMax);
      rGoalMin = rMin - enhanceAmount*(rMin-0);
      gGoalMax = gMax + enhanceAmount*(255-gMax);
      gGoalMin = gMin - enhanceAmount*(gMin-0);
      bGoalMax = bMax + enhanceAmount*(255-bMax);
      bGoalMin = bMin - enhanceAmount*(bMin-0);
      aGoalMax = aMax + enhanceAmount*(255-aMax);
      aGoalMin = aMin - enhanceAmount*(aMin-0);
    // If the enhancement is negative - compress the histogram
    }else{
      rMid = (rMax + rMin)*0.5;
      rGoalMax = rMax + enhanceAmount*(rMax-rMid);
      rGoalMin = rMin + enhanceAmount*(rMin-rMid);
      gMid = (gMax + gMin)*0.5;
      gGoalMax = gMax + enhanceAmount*(gMax-gMid);
      gGoalMin = gMin + enhanceAmount*(gMin-gMid);
      bMid = (bMax + bMin)*0.5;
      bGoalMax = bMax + enhanceAmount*(bMax-bMid);
      bGoalMin = bMin + enhanceAmount*(bMin-bMid);
      aMid = (aMax + aMin)*0.5;
      aGoalMax = aMax + enhanceAmount*(aMax-aMid);
      aGoalMin = aMin + enhanceAmount*(aMin-aMid);
    }

    // Pass 2 - remap everything, except the alpha
    for (i = 0; i < nSubPixels; i += 4) {
      data[i + 0] = remap(data[i + 0], rMin, rMax, rGoalMin, rGoalMax);
      data[i + 1] = remap(data[i + 1], gMin, gMax, gGoalMin, gGoalMax);
      data[i + 2] = remap(data[i + 2], bMin, bMax, bGoalMin, bGoalMax);
      //data[i + 3] = remap(data[i + 3], aMin, aMax, aGoalMin, aGoalMax);
    }
  };

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'enhance', 0, null, Kinetic.Factory.afterSetFilter);

    /**
    * get/set enhance
    * @name enhance
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Float} amount
    * @returns {Float}
    */
})();
;(function () {

  /**
   * Posterize Filter. Adjusts the channels so that there are no more
   *  than n different values for that channel. This is also applied
   *  to the alpha channel.
   * @function
   * @author ippo615
   * @memberof Kinetic.Filters
   * @param {Object} imageData
   */

  Kinetic.Filters.Posterize = function (imageData) {
    // level must be between 1 and 255
    var levels = Math.round(this.levels() * 254) + 1,
        data = imageData.data,
        len = data.length,
        scale = (255 / levels),
        i;

    for (i = 0; i < len; i += 1) {
      data[i] = Math.floor(data[i] / scale) * scale;
    }
  };

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'levels', 0.5, null, Kinetic.Factory.afterSetFilter);

  /**
  * get/set levels.  Must be a number between 0 and 1
  * @name levels
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Number} level between 0 and 1
  * @returns {Number}
  */
})();;(function () {

  /**
   * Noise Filter. Randomly adds or substracts to the color channels
   * @function
   * @memberof Kinetic.Filters
   * @param {Object} imagedata
   * @author ippo615
   */
  Kinetic.Filters.Noise = function (imageData) {
    var amount = this.noise() * 255,
        data = imageData.data,
        nPixels = data.length,
        half = amount / 2,
        i;

      for (i = 0; i < nPixels; i += 4) {
        data[i + 0] += half - 2 * half * Math.random();
        data[i + 1] += half - 2 * half * Math.random();
        data[i + 2] += half - 2 * half * Math.random();
      }
  };

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'noise', 0.2, null, Kinetic.Factory.afterSetFilter);

  /**
  * get/set noise amount.  Must be a value between 0 and 1
  * @name noise
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Number} noise
  * @returns {Number}
  */
})();
;(function () {

  /**
   * Pixelate Filter. Averages groups of pixels and redraws
   *  them as larger pixels
   * @function
   * @memberof Kinetic.Filters
   * @param {Object} imageData
   * @author ippo615
   */

  Kinetic.Filters.Pixelate = function (imageData) {

    var pixelSize = Math.ceil(this.pixelSize()),
        width = imageData.width,
        height = imageData.height,
        imageData = imageData.data,
        x, y, i,
        pixelsPerBin = pixelSize * pixelSize,
        red, green, blue, alpha,
        nBinsX = Math.ceil(width / pixelSize),
        nBinsY = Math.ceil(height / pixelSize),
        xBinStart, xBinEnd, yBinStart, yBinEnd,
        xBin, yBin, pixelsInBin;

    for (xBin = 0; xBin < nBinsX; xBin += 1) {
      for (yBin = 0; yBin < nBinsY; yBin += 1) {
      
        // Initialize the color accumlators to 0
        red = 0;
        green = 0;
        blue = 0;
        alpha = 0;

        // Determine which pixels are included in this bin
        xBinStart = xBin * pixelSize;
        xBinEnd = xBinStart + pixelSize;
        yBinStart = yBin * pixelSize;
        yBinEnd = yBinStart + pixelSize;

        // Add all of the pixels to this bin!
        pixelsInBin = 0;
        for (x = xBinStart; x < xBinEnd; x += 1) {
          if( x >= width ){ continue; }
          for (y = yBinStart; y < yBinEnd; y += 1) {
            if( y >= height ){ continue; }
            i = (width * y + x) * 4;
            red += imageData[i + 0];
            green += imageData[i + 1];
            blue += imageData[i + 2];
            alpha += imageData[i + 3];
            pixelsInBin += 1;
          }
        }

        // Make sure the channels are between 0-255
        red = red / pixelsInBin;
        green = green / pixelsInBin;
        blue = blue / pixelsInBin;
        alphas = alpha / pixelsInBin;

        // Draw this bin
        for (x = xBinStart; x < xBinEnd; x += 1) {
          if( x >= width ){ continue; }
          for (y = yBinStart; y < yBinEnd; y += 1) {
            if( y >= height ){ continue; }
            i = (width * y + x) * 4;
            imageData[i + 0] = red;
            imageData[i + 1] = green;
            imageData[i + 2] = blue;
            imageData[i + 3] = alpha;
          }
        }
      }
    }
    
  };

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'pixelSize', 8, null, Kinetic.Factory.afterSetFilter);

  /**
  * get/set pixel size
  * @name pixelSize
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Integer} pixelSize
  * @returns {Integer}
  */
})();;(function () {

  /**
   * Threshold Filter. Pushes any value above the mid point to 
   *  the max and any value below the mid point to the min.
   *  This affects the alpha channel.
   * @function
   * @memberof Kinetic.Filters
   * @param {Object} imageData
   * @author ippo615
   */

  Kinetic.Filters.Threshold = function (imageData) {
    var level = this.threshold() * 255,
        data = imageData.data,
        len = data.length,
        i;

    for (i = 0; i < len; i += 1) {
      data[i] = data[i] < level ? 0 : 255;
    }
  };

  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'threshold', 0.5, null, Kinetic.Factory.afterSetFilter);

  /**
  * get/set threshold.  Must be a value between 0 and 1
  * @name threshold
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Number} threshold
  * @returns {Number}
  */
})();;(function() {
    /**
     * Sepia Filter
     * Based on: Pixastic Lib - Sepia filter - v0.1.0
     * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @author Jacob Seidelin <jseidelin@nihilogic.dk>
     * @license MPL v1.1 [http://www.pixastic.com/lib/license.txt]
     */
    Kinetic.Filters.Sepia = function (imageData) {
        var data = imageData.data,
            w = imageData.width,
            y = imageData.height,
            w4 = w*4,
            offsetY, x, offset, or, og, ob, r, g, b;
        
        do {
            offsetY = (y-1)*w4;
            x = w;
            do {
                offset = offsetY + (x-1)*4;
                
                or = data[offset];
                og = data[offset+1];
                ob = data[offset+2];

                r = or * 0.393 + og * 0.769 + ob * 0.189;
                g = or * 0.349 + og * 0.686 + ob * 0.168;
                b = or * 0.272 + og * 0.534 + ob * 0.131;

                data[offset] = r > 255 ? 255 : r;
                data[offset+1] = g > 255 ? 255 : g;
                data[offset+2] = b > 255 ? 255 : b;
                data[offset+3] = data[offset+3];
            } while (--x);
        } while (--y);
    };
})();
;(function () {
  /**
   * Solarize Filter
   * @function
   * @memberof Kinetic.Filters
   * @param {Object} imageData
   * Pixastic Lib - Solarize filter - v0.1.0
   * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
   * License: [http://www.pixastic.com/lib/license.txt]
   */
  Kinetic.Filters.Solarize = function (imageData) {
      var data = imageData.data,
          w = imageData.width,
          h = imageData.height,
          w4 = w*4,
          y = h;

      do {
        var offsetY = (y-1)*w4;
        var x = w;
        do {
          var offset = offsetY + (x-1)*4;
          var r = data[offset];
          var g = data[offset+1];
          var b = data[offset+2];

          if (r > 127) r = 255 - r;
          if (g > 127) g = 255 - g;
          if (b > 127) b = 255 - b;

          data[offset] = r;
          data[offset+1] = g;
          data[offset+2] = b;

        } while (--x);
      } while (--y);
  };
})();


;(function () {

  /*
   * ToPolar Filter. Converts image data to polar coordinates. Performs 
   *  w*h*4 pixel reads and w*h pixel writes. The r axis is placed along
   *  what would be the y axis and the theta axis along the x axis.
   * @function
   * @author ippo615
   * @memberof Kinetic.Filters
   * @param {ImageData} src, the source image data (what will be transformed)
   * @param {ImageData} dst, the destination image data (where it will be saved)
   * @param {Object} opt
   * @param {Number} [opt.polarCenterX] horizontal location for the center of the circle,
   *  default is in the middle
   * @param {Number} [opt.polarCenterY] vertical location for the center of the circle,
   *  default is in the middle
   */

  var ToPolar = function(src,dst,opt){

    var srcPixels = src.data,
      dstPixels = dst.data,
      xSize = src.width,
      ySize = src.height,
      xMid = opt.polarCenterX || xSize/2,
      yMid = opt.polarCenterY || ySize/2,
      i, m, x, y, k, tmp, r=0,g=0,b=0,a=0;

    // Find the largest radius
    var rad, rMax = Math.sqrt( xMid*xMid + yMid*yMid );
    x = xSize - xMid;
    y = ySize - yMid;
    rad = Math.sqrt( x*x + y*y );
    rMax = (rad > rMax)?rad:rMax;

    // We'll be uisng y as the radius, and x as the angle (theta=t)
    var rSize = ySize,
      tSize = xSize,
      radius, theta;

    // We want to cover all angles (0-360) and we need to convert to
    // radians (*PI/180)
    var conversion = 360/tSize*Math.PI/180, sin, cos;

    var x1, x2, x1i, x2i, y1, y2, y1i, y2i, scale;

    for( theta=0; theta<tSize; theta+=1 ){
      sin = Math.sin(theta*conversion);
      cos = Math.cos(theta*conversion);
      for( radius=0; radius<rSize; radius+=1 ){
        x = xMid+rMax*radius/rSize*cos;
        y = yMid+rMax*radius/rSize*sin;
        if( x <= 1 ){ x = 1; }
        if( x >= xSize-0.5 ){ x = xSize-1; }
        if( y <= 1 ){ y = 1; }
        if( y >= ySize-0.5 ){ y = ySize-1; }

        // Interpolate x and y by going +-0.5 around the pixel's central point
        // this gives us the 4 nearest pixels to our 1x1 non-aligned pixel.
        // We average the vaules of those pixels based on how much of our
        // non-aligned pixel overlaps each of them.
        x1 = x - 0.5;
        x2 = x + 0.5;
        x1i = Math.floor(x1);
        x2i = Math.floor(x2);
        y1 = y - 0.5;
        y2 = y + 0.5;
        y1i = Math.floor(y1);
        y2i = Math.floor(y2);

        scale = (1-(x1-x1i))*(1-(y1-y1i));
        i = (y1i*xSize + x1i)*4;
        r = srcPixels[i+0]*scale;
        g = srcPixels[i+1]*scale;
        b = srcPixels[i+2]*scale;
        a = srcPixels[i+3]*scale;

        scale = (1-(x1-x1i))*(y2-y2i);
        i = (y2i*xSize + x1i)*4;
        r += srcPixels[i+0]*scale;
        g += srcPixels[i+1]*scale;
        b += srcPixels[i+2]*scale;
        a += srcPixels[i+3]*scale;

        scale = (x2-x2i)*(y2-y2i);
        i = (y2i*xSize + x2i)*4;
        r += srcPixels[i+0]*scale;
        g += srcPixels[i+1]*scale;
        b += srcPixels[i+2]*scale;
        a += srcPixels[i+3]*scale;

        scale = (x2-x2i)*(1-(y1-y1i));
        i = (y1i*xSize + x2i)*4;
        r += srcPixels[i+0]*scale;
        g += srcPixels[i+1]*scale;
        b += srcPixels[i+2]*scale;
        a += srcPixels[i+3]*scale;

        // Store it
        //i = (theta * xSize + radius) * 4;
        i = (theta + radius*xSize) * 4;
        dstPixels[i+0] = r;
        dstPixels[i+1] = g;
        dstPixels[i+2] = b;
        dstPixels[i+3] = a;

      }
    }
  };

  /*
   * FromPolar Filter. Converts image data from polar coordinates back to rectangular.
   *  Performs w*h*4 pixel reads and w*h pixel writes.
   * @function
   * @author ippo615
   * @memberof Kinetic.Filters
   * @param {ImageData} src, the source image data (what will be transformed)
   * @param {ImageData} dst, the destination image data (where it will be saved)
   * @param {Object} opt
   * @param {Number} [opt.polarCenterX] horizontal location for the center of the circle,
   *  default is in the middle
   * @param {Number} [opt.polarCenterY] vertical location for the center of the circle,
   *  default is in the middle
   * @param {Number} [opt.polarRotation] amount to rotate the image counterclockwis,
   *  0 is no rotation, 360 degrees is a full rotation
   */

  var FromPolar = function(src,dst,opt){

    var srcPixels = src.data,
      dstPixels = dst.data,
      xSize = src.width,
      ySize = src.height,
      xMid = opt.polarCenterX || xSize/2,
      yMid = opt.polarCenterY || ySize/2,
      i, m, x, y, dx, dy, k, tmp, r=0,g=0,b=0,a=0;


    // Find the largest radius
    var rad, rMax = Math.sqrt( xMid*xMid + yMid*yMid );
    x = xSize - xMid;
    y = ySize - yMid;
    rad = Math.sqrt( x*x + y*y );
    rMax = (rad > rMax)?rad:rMax;

    // We'll be uisng x as the radius, and y as the angle (theta=t)
    var rSize = ySize,
      tSize = xSize,
      radius, theta,
      phaseShift = opt.polarRotation || 0;

    // We need to convert to degrees and we need to make sure
    // it's between (0-360)
    // var conversion = tSize/360*180/Math.PI;
    var conversion = tSize/360*180/Math.PI;

    var x1, x2, x1i, x2i, y1, y2, y1i, y2i, scale;

    for( x=0; x<xSize; x+=1 ){
      for( y=0; y<ySize; y+=1 ){
        dx = x - xMid;
        dy = y - yMid;
        radius = Math.sqrt(dx*dx + dy*dy)*rSize/rMax;
        theta = (Math.atan2(dy,dx)*180/Math.PI + 360 + phaseShift)%360;
        theta = theta*tSize/360;

        // Interpolate x and y by going +-0.5 around the pixel's central point
        // this gives us the 4 nearest pixels to our 1x1 non-aligned pixel.
        // We average the vaules of those pixels based on how much of our
        // non-aligned pixel overlaps each of them.
        x1 = theta - 0.5; 
        x2 = theta + 0.5; 
        x1i = Math.floor(x1);
        x2i = Math.floor(x2);
        y1 = radius - 0.5;
        y2 = radius + 0.5;
        y1i = Math.floor(y1);
        y2i = Math.floor(y2);

        scale = (1-(x1-x1i))*(1-(y1-y1i));
        i = (y1i*xSize + x1i)*4;
        r = srcPixels[i+0]*scale;
        g = srcPixels[i+1]*scale;
        b = srcPixels[i+2]*scale;
        a = srcPixels[i+3]*scale;

        scale = (1-(x1-x1i))*(y2-y2i);
        i = (y2i*xSize + x1i)*4;
        r += srcPixels[i+0]*scale;
        g += srcPixels[i+1]*scale;
        b += srcPixels[i+2]*scale;
        a += srcPixels[i+3]*scale;

        scale = (x2-x2i)*(y2-y2i);
        i = (y2i*xSize + x2i)*4;
        r += srcPixels[i+0]*scale;
        g += srcPixels[i+1]*scale;
        b += srcPixels[i+2]*scale;
        a += srcPixels[i+3]*scale;

        scale = (x2-x2i)*(1-(y1-y1i));
        i = (y1i*xSize + x2i)*4;
        r += srcPixels[i+0]*scale;
        g += srcPixels[i+1]*scale;
        b += srcPixels[i+2]*scale;
        a += srcPixels[i+3]*scale;

        // Store it
        i = (y*xSize + x)*4;
        dstPixels[i+0] = r;
        dstPixels[i+1] = g;
        dstPixels[i+2] = b;
        dstPixels[i+3] = a;
      }
    }

  };

  //Kinetic.Filters.ToPolar = Kinetic.Util._FilterWrapDoubleBuffer(ToPolar);
  //Kinetic.Filters.FromPolar = Kinetic.Util._FilterWrapDoubleBuffer(FromPolar);

  // create a temporary canvas for working - shared between multiple calls
  var tempCanvas = document.createElement('canvas');

  /*
   * Kaleidoscope Filter. 
   * @function
   * @author ippo615
   * @memberof Kinetic.Filters
   */
  Kinetic.Filters.Kaleidoscope = function(imageData){
    var xSize = imageData.width,
        ySize = imageData.height;
    var power = Math.round( this.kaleidoscopePower() );
    var angle = Math.round( this.kaleidoscopeAngle() );
    var offset = Math.floor(xSize*(angle%360)/360);

    if( power < 1 ){return;}

    // Work with our shared buffer canvas
    tempCanvas.width = xSize;
    tempCanvas.height = ySize;
    var scratchData = tempCanvas.getContext('2d').getImageData(0,0,xSize,ySize);

    // Convert thhe original to polar coordinates
    ToPolar( imageData, scratchData, {
      polarCenterX:xSize/2,
      polarCenterY:ySize/2
    });

    // Determine how big each section will be, if it's too small 
    // make it bigger
    var minSectionSize = xSize / Math.pow(2,power);
    while( minSectionSize <= 8){
      minSectionSize = minSectionSize*2;
      power -= 1;
    }
    minSectionSize = Math.ceil(minSectionSize);
    var sectionSize = minSectionSize;

    // Copy the offset region to 0
    // Depending on the size of filter and location of the offset we may need
    // to copy the section backwards to prevent it from rewriting itself
    var xStart = 0,
        xEnd = sectionSize,
        xDelta = 1;
    if( offset+minSectionSize > xSize ){
      xStart = sectionSize;
      xEnd = 0;
      xDelta = -1;
    }
    for( y=0; y<ySize; y+=1 ){
      for( x=xStart; x !== xEnd; x+=xDelta ){
        xoff = Math.round(x+offset)%xSize;
        srcPos = (xSize*y+xoff)*4;
        r = scratchData.data[srcPos+0];
        g = scratchData.data[srcPos+1];
        b = scratchData.data[srcPos+2];
        a = scratchData.data[srcPos+3];
        dstPos = (xSize*y+x)*4;
        scratchData.data[dstPos+0] = r;
        scratchData.data[dstPos+1] = g;
        scratchData.data[dstPos+2] = b;
        scratchData.data[dstPos+3] = a;
      }
    }

    // Perform the actual effect
    var x,y,xoff,i, r,g,b,a, srcPos, dstPos;
    for( y=0; y<ySize; y+=1 ){
      sectionSize = Math.floor( minSectionSize );
      for( i=0; i<power; i+=1 ){
        for( x=0; x<sectionSize+1; x+=1 ){
          srcPos = (xSize*y+x)*4;
          r = scratchData.data[srcPos+0];
          g = scratchData.data[srcPos+1];
          b = scratchData.data[srcPos+2];
          a = scratchData.data[srcPos+3];
          dstPos = (xSize*y+sectionSize*2-x-1)*4;
          scratchData.data[dstPos+0] = r;
          scratchData.data[dstPos+1] = g;
          scratchData.data[dstPos+2] = b;
          scratchData.data[dstPos+3] = a;
        }
        sectionSize *= 2;
      }
    }

    // Convert back from polar coordinates
    FromPolar(scratchData,imageData,{polarRotation:0});
  };

  /**
  * get/set kaleidoscope power
  * @name kaleidoscopePower
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Integer} power of kaleidoscope
  * @returns {Integer}
  */
  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'kaleidoscopePower', 2, null, Kinetic.Factory.afterSetFilter);

  /**
  * get/set kaleidoscope angle
  * @name kaleidoscopeAngle
  * @method
  * @memberof Kinetic.Node.prototype
  * @param {Integer} degrees
  * @returns {Integer}
  */
  Kinetic.Factory.addGetterSetter(Kinetic.Node, 'kaleidoscopeAngle', 0, null, Kinetic.Factory.afterSetFilter);

})();
;(function() {
    var BATCH_DRAW_STOP_TIME_DIFF = 500;

    /**
     * Animation constructor.  A stage is used to contain multiple layers and handle
     * @constructor
     * @memberof Kinetic
     * @param {Function} func function executed on each animation frame.  The function is passed a frame object, which contains
     *  timeDiff, lastTime, time, and frameRate properties.  The timeDiff property is the number of milliseconds that have passed
     *  since the last animation frame.  The lastTime property is time in milliseconds that elapsed from the moment the animation started
     *  to the last animation frame.  The time property is the time in milliseconds that ellapsed from the moment the animation started
     *  to the current animation frame.  The frameRate property is the current frame rate in frames / second
     * @param {Kinetic.Layer|Array} [layers] layer(s) to be redrawn on each animation frame. Can be a layer, an array of layers, or null.
     *  Not specifying a node will result in no redraw.
     * @example
     * // move a node to the right at 50 pixels / second<br>
     * var velocity = 50;<br><br>
     *
     * var anim = new Kinetic.Animation(function(frame) {<br>
     *   var dist = velocity * (frame.timeDiff / 1000);<br>
     *   node.move(dist, 0);<br>
     * }, layer);<br><br>
     *
     * anim.start();
     */
    Kinetic.Animation = function(func, layers) {
        this.func = func;
        this.setLayers(layers);
        this.id = Kinetic.Animation.animIdCounter++;
        this.frame = {
            time: 0,
            timeDiff: 0,
            lastTime: new Date().getTime()
        };
    };
    /*
     * Animation methods
     */
    Kinetic.Animation.prototype = {
        /**
         * set layers to be redrawn on each animation frame
         * @method
         * @memberof Kinetic.Animation.prototype
         * @param {Kinetic.Layer|Array} [layers] layer(s) to be redrawn.&nbsp; Can be a layer, an array of layers, or null.  Not specifying a node will result in no redraw.
         */
        setLayers: function(layers) {
            var lays = [];
            // if passing in no layers
            if (!layers) {
                lays = [];
            }
            // if passing in an array of Layers
            // NOTE: layers could be an array or Kinetic.Collection.  for simplicity, I'm just inspecting
            // the length property to check for both cases
            else if (layers.length > 0) {
                lays = layers;
            }
            // if passing in a Layer
            else {
                lays = [layers];
            }

            this.layers = lays;
        },
        /**
         * get layers
         * @method
         * @memberof Kinetic.Animation.prototype
         */
        getLayers: function() {
            return this.layers;
        },
        /**
         * add layer.  Returns true if the layer was added, and false if it was not
         * @method
         * @memberof Kinetic.Animation.prototype
         * @param {Kinetic.Layer} layer
         */
        addLayer: function(layer) {
            var layers = this.layers,
                len, n;

            if (layers) {
                len = layers.length;

                // don't add the layer if it already exists
                for (n = 0; n < len; n++) {
                    if (layers[n]._id === layer._id) {
                        return false;
                    }
                }
            }
            else {
                this.layers = [];
            }

            this.layers.push(layer);
            return true;
        },
        /**
         * determine if animation is running or not.  returns true or false
         * @method
         * @memberof Kinetic.Animation.prototype
         */
        isRunning: function() {
            var a = Kinetic.Animation, animations = a.animations;
            for(var n = 0; n < animations.length; n++) {
                if(animations[n].id === this.id) {
                    return true;
                }
            }
            return false;
        },
        /**
         * start animation
         * @method
         * @memberof Kinetic.Animation.prototype
         */
        start: function() {
            this.stop();
            this.frame.timeDiff = 0;
            this.frame.lastTime = new Date().getTime();
            Kinetic.Animation._addAnimation(this);
        },
        /**
         * stop animation
         * @method
         * @memberof Kinetic.Animation.prototype
         */
        stop: function() {
            Kinetic.Animation._removeAnimation(this);
        },
        _updateFrameObject: function(time) {
            this.frame.timeDiff = time - this.frame.lastTime;
            this.frame.lastTime = time;
            this.frame.time += this.frame.timeDiff;
            this.frame.frameRate = 1000 / this.frame.timeDiff;
        }
    };
    Kinetic.Animation.animations = [];
    Kinetic.Animation.animIdCounter = 0;
    Kinetic.Animation.animRunning = false;

    Kinetic.Animation._addAnimation = function(anim) {
        this.animations.push(anim);
        this._handleAnimation();
    };
    Kinetic.Animation._removeAnimation = function(anim) {
        var id = anim.id, animations = this.animations, len = animations.length;
        for(var n = 0; n < len; n++) {
            if(animations[n].id === id) {
                this.animations.splice(n, 1);
                break;
            }
        }
    };

    Kinetic.Animation._runFrames = function() {
        var layerHash = {},
            animations = this.animations,
            anim, layers, func, n, i, layersLen, layer, key;
        /*
         * loop through all animations and execute animation
         *  function.  if the animation object has specified node,
         *  we can add the node to the nodes hash to eliminate
         *  drawing the same node multiple times.  The node property
         *  can be the stage itself or a layer
         */
        /*
         * WARNING: don't cache animations.length because it could change while
         * the for loop is running, causing a JS error
         */
        for(n = 0; n < animations.length; n++) {
            anim = animations[n];
            layers = anim.layers;
            func = anim.func;

            anim._updateFrameObject(new Date().getTime());
            layersLen = layers.length;

            for (i=0; i<layersLen; i++) {
                layer = layers[i];
                if(layer._id !== undefined) {
                    layerHash[layer._id] = layer;
                }
            }

            // if animation object has a function, execute it
            if(func) {
                func.call(anim, anim.frame);
            }
        }

        for(key in layerHash) {
            layerHash[key].draw();
        }
    };
    Kinetic.Animation._animationLoop = function() {
        var that = this;
        if(this.animations.length > 0) {
            this._runFrames();
            Kinetic.Animation.requestAnimFrame(function() {
                that._animationLoop();
            });
        }
        else {
            this.animRunning = false;
        }
    };
    Kinetic.Animation._handleAnimation = function() {
        var that = this;
        if(!this.animRunning) {
            this.animRunning = true;
            that._animationLoop();
        }
    };
    var RAF = (function() {
        return window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.oRequestAnimationFrame
            || window.msRequestAnimationFrame
            || FRAF;
    })();

    function FRAF(callback) {
        window.setTimeout(callback, 1000 / 60);
    }

    Kinetic.Animation.requestAnimFrame = function(callback) {
        var raf = Kinetic.isDragging ? FRAF : RAF;
        raf(callback);
    };

    var moveTo = Kinetic.Node.prototype.moveTo;
    Kinetic.Node.prototype.moveTo = function(container) {
        moveTo.call(this, container);
    };

    /**
     * batch draw
     * @method
     * @memberof Kinetic.Layer.prototype
     */
    Kinetic.Layer.prototype.batchDraw = function() {
        var that = this;

        if (!this.batchAnim) {
            this.batchAnim = new Kinetic.Animation(function() {
              if (that.lastBatchDrawTime && new Date().getTime() - that.lastBatchDrawTime > BATCH_DRAW_STOP_TIME_DIFF) {
                that.batchAnim.stop();
              }
            }, this);
        }

        this.lastBatchDrawTime = new Date().getTime();

        if (!this.batchAnim.isRunning()) {
            this.draw();
            this.batchAnim.start();
        }
    };

    /**
     * batch draw
     * @method
     * @memberof Kinetic.Stage.prototype
     */
    Kinetic.Stage.prototype.batchDraw = function() {
        this.getChildren().each(function(layer) {
            layer.batchDraw();
        });
    };
})();;(function() {
    var blacklist = {
        node: 1,
        duration: 1,
        easing: 1,
        onFinish: 1,
        yoyo: 1
    },

    PAUSED = 1,
    PLAYING = 2,
    REVERSING = 3,

    idCounter = 0;

    /**
     * Tween constructor.  Tweens enable you to animate a node between the current state and a new state.
     *  You can play, pause, reverse, seek, reset, and finish tweens.  By default, tweens are animated using
     *  a linear easing.  For more tweening options, check out {@link Kinetic.Easings}
     * @constructor
     * @memberof Kinetic
     * @example
     * // instantiate new tween which fully rotates a node in 1 second
     * var tween = new Kinetic.Tween({<br>
     *   node: node,<br>
     *   rotationDeg: 360,<br>
     *   duration: 1,<br>
     *   easing: Kinetic.Easings.EaseInOut<br>
     * });<br><br>
     *
     * // play tween<br>
     * tween.play();<br><br>
     *
     * // pause tween<br>
     * tween.pause();
     */
    Kinetic.Tween = function(config) {
        var that = this,
            node = config.node,
            nodeId = node._id,
            duration = config.duration || 1,
            easing = config.easing || Kinetic.Easings.Linear,
            yoyo = !!config.yoyo,
            key, tween, start, tweenId;

        this.node = node;
        this._id = idCounter++;

        this.anim = new Kinetic.Animation(function() {
            that.tween.onEnterFrame();
        }, node.getLayer() || node.getLayers());

        this.tween = new Tween(key, function(i) {
            that._tweenFunc(i);
        }, easing, 0, 1, duration * 1000, yoyo);

        this._addListeners();

        // init attrs map
        if (!Kinetic.Tween.attrs[nodeId]) {
            Kinetic.Tween.attrs[nodeId] = {};
        }
        if (!Kinetic.Tween.attrs[nodeId][this._id]) {
            Kinetic.Tween.attrs[nodeId][this._id] = {};
        }
        // init tweens map
        if (!Kinetic.Tween.tweens[nodeId]) {
            Kinetic.Tween.tweens[nodeId] = {};
        }

        for (key in config) {
            if (blacklist[key] === undefined) {
                this._addAttr(key, config[key]);
            }
        }

        this.reset();

        // callbacks
        this.onFinish = config.onFinish;
        this.onReset = config.onReset;
    };

    // start/diff object = attrs.nodeId.tweenId.attr
    Kinetic.Tween.attrs = {};
    // tweenId = tweens.nodeId.attr
    Kinetic.Tween.tweens = {};

    Kinetic.Tween.prototype = {
        _addAttr: function(key, end) {
            var node = this.node,
                nodeId = node._id,
                start, diff, tweenId, n, len, startVal, endVal;

            // remove conflict from tween map if it exists
            tweenId = Kinetic.Tween.tweens[nodeId][key];

            if (tweenId) {
                delete Kinetic.Tween.attrs[nodeId][tweenId][key];
            }

            // add to tween map
            start = node.getAttr(key);

            if (Kinetic.Util._isArray(end)) {
                diff = [];
                len = end.length;
                for (n=0; n<len; n++) {
                    diff.push(end[n] - start[n]);
                }

            }
            else {
                diff = end - start;
            }

            Kinetic.Tween.attrs[nodeId][this._id][key] = {
                start: start,
                diff: diff
            };
            Kinetic.Tween.tweens[nodeId][key] = this._id;
        },
        _tweenFunc: function(i) {
            var node = this.node,
                attrs = Kinetic.Tween.attrs[node._id][this._id],
                key, attr, start, diff, newVal, n, len, startVal, diffVal;

            for (key in attrs) {
                attr = attrs[key];
                start = attr.start;
                diff = attr.diff;

                if (Kinetic.Util._isArray(start)) {
                    newVal = [];
                    len = start.length;
                    for (n=0; n<len; n++) {
                        newVal.push(start[n] + (diff[n] * i));
                    }
                }
                else {
                    newVal = start + (diff * i);
                }

                node.setAttr(key, newVal);
            }
        },
        _addListeners: function() {
            var that = this;

            // start listeners
            this.tween.onPlay = function() {
                that.anim.start();
            };
            this.tween.onReverse = function() {
                that.anim.start();
            };

            // stop listeners
            this.tween.onPause = function() {
                that.anim.stop();
            };
            this.tween.onFinish = function() {
                if (that.onFinish) {
                    that.onFinish();
                }
            };
            this.tween.onReset = function() {
                if (that.onReset) {
                    that.onReset();
                }
            };
        },
        /**
         * play
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */
        play: function() {
            this.tween.play();
            return this;
        },
        /**
         * reverse
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */
        reverse: function() {
            this.tween.reverse();
            return this;
        },
        /**
         * reset
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */
        reset: function() {
            var node = this.node;
            this.tween.reset();
            (node.getLayer() || node.getLayers()).draw();
            return this;
        },
        /**
         * seek
         * @method
         * @memberof Kinetic.Tween.prototype
         * @param {Integer} t time in seconds between 0 and the duration
         * @returns {Tween}
         */
        seek: function(t) {
            var node = this.node;
            this.tween.seek(t * 1000);
            (node.getLayer() || node.getLayers()).draw();
            return this;
        },
        /**
         * pause
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */
        pause: function() {
            this.tween.pause();
            return this;
        },
        /**
         * finish
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */
        finish: function() {
            var node = this.node;
            this.tween.finish();
            (node.getLayer() || node.getLayers()).draw();
            return this;
        },
        /**
         * destroy
         * @method
         * @memberof Kinetic.Tween.prototype
         */
        destroy: function() {
            var nodeId = this.node._id,
                thisId = this._id,
                attrs = Kinetic.Tween.tweens[nodeId],
                key;

            this.pause();

            for (key in attrs) {
                delete Kinetic.Tween.tweens[nodeId][key];
            }

            delete Kinetic.Tween.attrs[nodeId][thisId];
        }
    };

    var Tween = function(prop, propFunc, func, begin, finish, duration, yoyo) {
        this.prop = prop;
        this.propFunc = propFunc;
        this.begin = begin;
        this._pos = begin;
        this.duration = duration;
        this._change = 0;
        this.prevPos = 0;
        this.yoyo = yoyo;
        this._time = 0;
        this._position = 0;
        this._startTime = 0;
        this._finish = 0;
        this.func = func;
        this._change = finish - this.begin;
        this.pause();
    };
    /*
     * Tween methods
     */
    Tween.prototype = {
        fire: function(str) {
            var handler = this[str];
            if (handler) {
                handler();
            }
        },
        setTime: function(t) {
            if(t > this.duration) {
                if(this.yoyo) {
                    this._time = this.duration;
                    this.reverse();
                }
                else {
                    this.finish();
                }
            }
            else if(t < 0) {
                if(this.yoyo) {
                    this._time = 0;
                    this.play();
                }
                else {
                    this.reset();
                }
            }
            else {
                this._time = t;
                this.update();
            }
        },
        getTime: function() {
            return this._time;
        },
        setPosition: function(p) {
            this.prevPos = this._pos;
            this.propFunc(p);
            this._pos = p;
        },
        getPosition: function(t) {
            if(t === undefined) {
                t = this._time;
            }
            return this.func(t, this.begin, this._change, this.duration);
        },
        play: function() {
            this.state = PLAYING;
            this._startTime = this.getTimer() - this._time;
            this.onEnterFrame();
            this.fire('onPlay');
        },
        reverse: function() {
            this.state = REVERSING;
            this._time = this.duration - this._time;
            this._startTime = this.getTimer() - this._time;
            this.onEnterFrame();
            this.fire('onReverse');
        },
        seek: function(t) {
            this.pause();
            this._time = t;
            this.update();
            this.fire('onSeek');
        },
        reset: function() {
            this.pause();
            this._time = 0;
            this.update();
            this.fire('onReset');
        },
        finish: function() {
            this.pause();
            this._time = this.duration;
            this.update();
            this.fire('onFinish');
        },
        update: function() {
            this.setPosition(this.getPosition(this._time));
        },
        onEnterFrame: function() {
            var t = this.getTimer() - this._startTime;
            if(this.state === PLAYING) {
                this.setTime(t);
            }
            else if (this.state === REVERSING) {
                this.setTime(this.duration - t);
            }
        },
        pause: function() {
            this.state = PAUSED;
            this.fire('onPause');
        },
        getTimer: function() {
            return new Date().getTime();
        }
    };

    /*
    * These eases were ported from an Adobe Flash tweening library to JavaScript
    * by Xaric
    */

    /**
     * @namespace Easings
     * @memberof Kinetic
     */
    Kinetic.Easings = {
        /**
        * back ease in
        * @function
        * @memberof Kinetic.Easings
        */
        'BackEaseIn': function(t, b, c, d, a, p) {
            var s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        /**
        * back ease out
        * @function
        * @memberof Kinetic.Easings
        */
        'BackEaseOut': function(t, b, c, d, a, p) {
            var s = 1.70158;
            return c * (( t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        /**
        * back ease in out
        * @function
        * @memberof Kinetic.Easings
        */
        'BackEaseInOut': function(t, b, c, d, a, p) {
            var s = 1.70158;
            if((t /= d / 2) < 1) {
                return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            }
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        /**
        * elastic ease in
        * @function
        * @memberof Kinetic.Easings
        */
        'ElasticEaseIn': function(t, b, c, d, a, p) {
            // added s = 0
            var s = 0;
            if(t === 0) {
                return b;
            }
            if((t /= d) == 1) {
                return b + c;
            }
            if(!p) {
                p = d * 0.3;
            }
            if(!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        /**
        * elastic ease out
        * @function
        * @memberof Kinetic.Easings
        */
        'ElasticEaseOut': function(t, b, c, d, a, p) {
            // added s = 0
            var s = 0;
            if(t === 0) {
                return b;
            }
            if((t /= d) == 1) {
                return b + c;
            }
            if(!p) {
                p = d * 0.3;
            }
            if(!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
        },
        /**
        * elastic ease in out
        * @function
        * @memberof Kinetic.Easings
        */
        'ElasticEaseInOut': function(t, b, c, d, a, p) {
            // added s = 0
            var s = 0;
            if(t === 0) {
                return b;
            }
            if((t /= d / 2) == 2) {
                return b + c;
            }
            if(!p) {
                p = d * (0.3 * 1.5);
            }
            if(!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if(t < 1) {
                return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            }
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
        },
        /**
        * bounce ease out
        * @function
        * @memberof Kinetic.Easings
        */
        'BounceEaseOut': function(t, b, c, d) {
            if((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            }
            else if(t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
            }
            else if(t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
            }
            else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
            }
        },
        /**
        * bounce ease in
        * @function
        * @memberof Kinetic.Easings
        */
        'BounceEaseIn': function(t, b, c, d) {
            return c - Kinetic.Easings.BounceEaseOut(d - t, 0, c, d) + b;
        },
        /**
        * bounce ease in out
        * @function
        * @memberof Kinetic.Easings
        */
        'BounceEaseInOut': function(t, b, c, d) {
            if(t < d / 2) {
                return Kinetic.Easings.BounceEaseIn(t * 2, 0, c, d) * 0.5 + b;
            }
            else {
                return Kinetic.Easings.BounceEaseOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
            }
        },
        /**
        * ease in
        * @function
        * @memberof Kinetic.Easings
        */
        'EaseIn': function(t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        /**
        * ease out
        * @function
        * @memberof Kinetic.Easings
        */
        'EaseOut': function(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        /**
        * ease in out
        * @function
        * @memberof Kinetic.Easings
        */
        'EaseInOut': function(t, b, c, d) {
            if((t /= d / 2) < 1) {
                return c / 2 * t * t + b;
            }
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        /**
        * strong ease in
        * @function
        * @memberof Kinetic.Easings
        */
        'StrongEaseIn': function(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        /**
        * strong ease out
        * @function
        * @memberof Kinetic.Easings
        */
        'StrongEaseOut': function(t, b, c, d) {
            return c * (( t = t / d - 1) * t * t * t * t + 1) + b;
        },
        /**
        * strong ease in out
        * @function
        * @memberof Kinetic.Easings
        */
        'StrongEaseInOut': function(t, b, c, d) {
            if((t /= d / 2) < 1) {
                return c / 2 * t * t * t * t * t + b;
            }
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        /**
        * linear
        * @function
        * @memberof Kinetic.Easings
        */
        'Linear': function(t, b, c, d) {
            return c * t / d + b;
        }
    };
})();
;(function() {
    Kinetic.DD = {
        // properties
        anim: new Kinetic.Animation(),
        isDragging: false,
        offset: {
            x: 0,
            y: 0
        },
        node: null,

        // methods
        _drag: function(evt) {
            var dd = Kinetic.DD,
                node = dd.node;

            if(node) {
                node._setDragPosition(evt);

                if(!dd.isDragging) {
                    dd.isDragging = true;
                    node.fire('dragstart', evt, true);
                }

                // execute ondragmove if defined
                node.fire('dragmove', evt, true);
            }
        },
        _endDragBefore: function(evt) {
            var dd = Kinetic.DD,
                node = dd.node,
                nodeType, layer;

            if(node) {
                nodeType = node.nodeType,
                layer = node.getLayer();
                dd.anim.stop();

                // only fire dragend event if the drag and drop
                // operation actually started.
                if(dd.isDragging) {
                    dd.isDragging = false;
                    Kinetic.listenClickTap = false;

                    if (evt) {
                        evt.dragEndNode = node;
                    }
                }

                delete dd.node;

                (layer || node).draw();
            }
        },
        _endDragAfter: function(evt) {
            evt = evt || {};

            var dragEndNode = evt.dragEndNode;

            if (evt && dragEndNode) {
              dragEndNode.fire('dragend', evt, true);
            }
        }
    };

    // Node extenders

    /**
     * initiate drag and drop
     * @method
     * @memberof Kinetic.Node.prototype
     */
    Kinetic.Node.prototype.startDrag = function() {
        var dd = Kinetic.DD,
            stage = this.getStage(),
            layer = this.getLayer(),
            pos = stage.getPointerPosition(),
            ap = this.getAbsolutePosition();

        if(pos) {
            if (dd.node) {
                dd.node.stopDrag();
            }

            dd.node = this;
            dd.offset.x = pos.x - ap.x;
            dd.offset.y = pos.y - ap.y;
            dd.anim.setLayers(layer || this.getLayers());
            dd.anim.start();

            this._setDragPosition();
        }
    };

    Kinetic.Node.prototype._setDragPosition = function(evt) {
        var dd = Kinetic.DD,
            pos = this.getStage().getPointerPosition(),
            dbf = this.getDragBoundFunc(),
            newNodePos = {
                x: pos.x - dd.offset.x,
                y: pos.y - dd.offset.y
            };

        if(dbf !== undefined) {
            newNodePos = dbf.call(this, newNodePos, evt);
        }

        this.setAbsolutePosition(newNodePos);
    };

    /**
     * stop drag and drop
     * @method
     * @memberof Kinetic.Node.prototype
     */
    Kinetic.Node.prototype.stopDrag = function() {
        var dd = Kinetic.DD,
            evt = {};
        dd._endDragBefore(evt);
        dd._endDragAfter(evt);
    };

    Kinetic.Node.prototype.setDraggable = function(draggable) {
        this._setAttr('draggable', draggable);
        this._dragChange();
    };

    var origDestroy = Kinetic.Node.prototype.destroy;

    Kinetic.Node.prototype.destroy = function() {
        var dd = Kinetic.DD;

        // stop DD
        if(dd.node && dd.node._id === this._id) {

            this.stopDrag();
        }

        origDestroy.call(this);
    };

    /**
     * determine if node is currently in drag and drop mode
     * @method
     * @memberof Kinetic.Node.prototype
     */
    Kinetic.Node.prototype.isDragging = function() {
        var dd = Kinetic.DD;
        return dd.node && dd.node._id === this._id && dd.isDragging;
    };

    Kinetic.Node.prototype._listenDrag = function() {
        var that = this;

        this._dragCleanup();

        if (this.getClassName() === 'Stage') {
            this.on('contentMousedown.kinetic contentTouchstart.kinetic', function(evt) {
                if(!Kinetic.DD.node) {
                    that.startDrag(evt);
                }
            });
        }
        else {
            this.on('mousedown.kinetic touchstart.kinetic', function(evt) {
                if(!Kinetic.DD.node) {
                    that.startDrag(evt);
                }
            });
        }

        // listening is required for drag and drop
        /*
        this._listeningEnabled = true;
        this._clearSelfAndAncestorCache('listeningEnabled');
        */
    };

    Kinetic.Node.prototype._dragChange = function() {
        if(this.attrs.draggable) {
            this._listenDrag();
        }
        else {
            // remove event listeners
            this._dragCleanup();

            /*
             * force drag and drop to end
             * if this node is currently in
             * drag and drop mode
             */
            var stage = this.getStage();
            var dd = Kinetic.DD;
            if(stage && dd.node && dd.node._id === this._id) {
                dd.node.stopDrag();
            }
        }
    };

    Kinetic.Node.prototype._dragCleanup = function() {
        if (this.getClassName() === 'Stage') {
            this.off('contentMousedown.kinetic');
            this.off('contentTouchstart.kinetic');
        } else {
            this.off('mousedown.kinetic');
            this.off('touchstart.kinetic');
        }
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'dragBoundFunc');

    /**
     * get/set drag bound function.  This is used to override the default
     *  drag and drop position
     * @name dragBoundFunc
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Function} dragBoundFunc
     * @returns {Function}
     * @example
     * // get drag bound function<br>
     * var dragBoundFunc = node.dragBoundFunc();<br><br>
     *
     * // create vertical drag and drop<br>
     * node.dragBoundFunc(function(){<br>
     *   return {<br>
     *     x: this.getAbsolutePosition().x,<br>
     *     y: pos.y<br>
     *   };<br>
     * });
     */

    Kinetic.Factory.addGetter(Kinetic.Node, 'draggable', false);
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'draggable');

     /**
     * get/set draggable flag
     * @name draggable
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Boolean} draggable
     * @returns {Boolean}
     * @example
     * // get draggable flag<br>
     * var draggable = node.draggable();<br><br>
     *
     * // enable drag and drop<br>
     * node.draggable(true);<br><br>
     *
     * // disable drag and drop<br>
     * node.draggable(false);
     */

    var html = document.documentElement;
    html.addEventListener('mouseup', Kinetic.DD._endDragBefore, true);
    html.addEventListener('touchend', Kinetic.DD._endDragBefore, true);

    html.addEventListener('mouseup', Kinetic.DD._endDragAfter, false);
    html.addEventListener('touchend', Kinetic.DD._endDragAfter, false);

})();
;(function() {
    Kinetic.Util.addMethods(Kinetic.Container, {
        __init: function(config) {
            this.children = new Kinetic.Collection();
            Kinetic.Node.call(this, config);
        },
        /**
         * returns a {@link Kinetic.Collection} of direct descendant nodes
         * @method
         * @memberof Kinetic.Container.prototype
         */
        getChildren: function() {
            return this.children;
        },
        /**
         * determine if node has children
         * @method
         * @memberof Kinetic.Container.prototype
         * @returns {Boolean}
         */
        hasChildren: function() {
            return this.getChildren().length > 0;
        },
        /**
         * remove all children
         * @method
         * @memberof Kinetic.Container.prototype
         */
        removeChildren: function() {
            var children = this.children,
                child;

            while(children.length > 0) {
                child = children[0];
                if (child.hasChildren()) {
                    child.removeChildren();
                }
                child.remove();
            }

            return this;
        },
        /**
         * destroy all children
         * @method
         * @memberof Kinetic.Container.prototype
         */
        destroyChildren: function() {
            var children = this.children;
            while(children.length > 0) {
                children[0].destroy();
            }
            return this;
        },
        /**
         * add node to container
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {Node} child
         * @returns {Container}
         */
        add: function(child) {
            var children = this.children;

            this._validateAdd(child);
            child.index = children.length;
            child.parent = this;
            children.push(child);
            this._fire('add', {
                child: child
            });

            // chainable
            return this;
        },
        destroy: function() {
            // destroy children
            if (this.hasChildren()) {
                this.destroyChildren();
            }
            // then destroy self
            Kinetic.Node.prototype.destroy.call(this);
        },
        /**
         * return a {@link Kinetic.Collection} of nodes that match the selector.  Use '#' for id selections
         * and '.' for name selections.  You can also select by type or class name. Pass multiple selectors
         * separated by a space.
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {String} selector
         * @returns {Collection}
         * @example
         * // select node with id foo<br>
         * var node = stage.find('#foo');<br><br>
         *
         * // select nodes with name bar inside layer<br>
         * var nodes = layer.find('.bar');<br><br>
         *
         * // select all groups inside layer<br>
         * var nodes = layer.find('Group');<br><br>
         *
         * // select all rectangles inside layer<br>
         * var nodes = layer.find('Rect');<br><br>
         *
         * // select node with an id of foo or a name of bar inside layer<br>
         * var nodes = layer.find('#foo, .bar');
         */
        find: function(selector) {
            var retArr = [],
                selectorArr = selector.replace(/ /g, '').split(','),
                len = selectorArr.length,
                n, i, sel, arr, node, children, clen;

            for (n = 0; n < len; n++) {
                sel = selectorArr[n];

                // id selector
                if(sel.charAt(0) === '#') {
                    node = this._getNodeById(sel.slice(1));
                    if(node) {
                        retArr.push(node);
                    }
                }
                // name selector
                else if(sel.charAt(0) === '.') {
                    arr = this._getNodesByName(sel.slice(1));
                    retArr = retArr.concat(arr);
                }
                // unrecognized selector, pass to children
                else {
                    children = this.getChildren();
                    clen = children.length;
                    for(i = 0; i < clen; i++) {
                        retArr = retArr.concat(children[i]._get(sel));
                    }
                }
            }

            return Kinetic.Collection.toCollection(retArr);
        },
        _getNodeById: function(key) {
            var node = Kinetic.ids[key];

            if(node !== undefined && this.isAncestorOf(node)) {
                return node;
            }
            return null;
        },
        _getNodesByName: function(key) {
            var arr = Kinetic.names[key] || [];
            return this._getDescendants(arr);
        },
        _get: function(selector) {
            var retArr = Kinetic.Node.prototype._get.call(this, selector);
            var children = this.getChildren();
            var len = children.length;
            for(var n = 0; n < len; n++) {
                retArr = retArr.concat(children[n]._get(selector));
            }
            return retArr;
        },
        // extenders
        toObject: function() {
            var obj = Kinetic.Node.prototype.toObject.call(this);

            obj.children = [];

            var children = this.getChildren();
            var len = children.length;
            for(var n = 0; n < len; n++) {
                var child = children[n];
                obj.children.push(child.toObject());
            }

            return obj;
        },
        _getDescendants: function(arr) {
            var retArr = [];
            var len = arr.length;
            for(var n = 0; n < len; n++) {
                var node = arr[n];
                if(this.isAncestorOf(node)) {
                    retArr.push(node);
                }
            }

            return retArr;
        },
        /**
         * determine if node is an ancestor
         * of descendant
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {Kinetic.Node} node
         */
        isAncestorOf: function(node) {
            var parent = node.getParent();
            while(parent) {
                if(parent._id === this._id) {
                    return true;
                }
                parent = parent.getParent();
            }

            return false;
        },
        clone: function(obj) {
            // call super method
            var node = Kinetic.Node.prototype.clone.call(this, obj);

            this.getChildren().each(function(no) {
                node.add(no.clone());
            });
            return node;
        },
        /**
         * get all shapes that intersect a point.  Note: because this method must clear a temporary
         * canvas and redraw every shape inside the container, it should only be used for special sitations
         * because it performs very poorly.  Please use the {@link Kinetic.Stage#getIntersection} method if at all possible
         * because it performs much better
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {Object} pos
         * @param {Number} pos.x
         * @param {Number} pos.y
         * @returns {Array} array of shapes
         */
        getAllIntersections: function(pos) {
            var arr = [];

            this.find('Shape').each(function(shape) {
                if(shape.isVisible() && shape.intersects(pos)) {
                    arr.push(shape);
                }
            });

            return arr;
        },
        _setChildrenIndices: function() {
            this.children.each(function(child, n) {
                child.index = n;
            });
        },
        drawScene: function(can) {
            var layer = this.getLayer(),
                canvas = can || (layer && layer.getCanvas()),
                context = canvas && canvas.getContext(),
                cachedCanvas = this._cache.canvas,
                cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;

            if (this.isVisible()) {
                if (cachedSceneCanvas) {
                    this._drawCachedSceneCanvas(context);
                }
                else {
                    this._drawChildren(canvas, 'drawScene');
                }
            }
            return this;
        },
        drawHit: function(can) {
            var layer = this.getLayer(),
                canvas = can || (layer && layer.hitCanvas),
                context = canvas && canvas.getContext(),
                cachedCanvas = this._cache.canvas,
                cachedHitCanvas = cachedCanvas && cachedCanvas.hit;

            if (this.shouldDrawHit()) {
                if (cachedHitCanvas) {
                    this._drawCachedHitCanvas(context);
                }
                else {
                    this._drawChildren(canvas, 'drawHit');
                }
            }
            return this;
        },
        _drawChildren: function(canvas, drawMethod) {
            var context = canvas && canvas.getContext(),
                clipWidth = this.getClipWidth(),
                clipHeight = this.getClipHeight(),
                hasClip = clipWidth && clipHeight,
                clipX, clipY;

            if (hasClip) {
                clipX = this.getClipX();
                clipY = this.getClipY();

                context.save();
                context._applyTransform(this);
                context.beginPath();
                context.rect(clipX, clipY, clipWidth, clipHeight);
                context.clip();
                context.reset();   
            }

            this.children.each(function(child) {
                child[drawMethod](canvas);
            });

            if (hasClip) {
                context.restore();
            }
        }
    });

    Kinetic.Util.extend(Kinetic.Container, Kinetic.Node);
    // deprecated methods
    Kinetic.Container.prototype.get = Kinetic.Container.prototype.find;

    // add getters setters
    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Container, 'clip', ['x', 'y', 'width', 'height']);
    /**
     * get/set clip
     * @method
     * @name clip
     * @memberof Kinetic.Container.prototype
     * @param {Object} clip
     * @param {Number} clip.x
     * @param {Number} clip.y
     * @param {Number} clip.width
     * @param {Number} clip.height
     * @returns {Object}
     * @example
     * // get clip<br>
     * var clip = container.clip();<br><br>
     *
     * // set clip<br>
     * container.setClip({<br>
     *   x: 20,<br>
     *   y: 20,<br>
     *   width: 20,<br>
     *   height: 20<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Container, 'clipX');
    /**
     * get/set clip x
     * @name clipX
     * @method
     * @memberof Kinetic.Container.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get clip x<br>
     * var clipX = container.clipX();<br><br>
     *
     * // set clip x<br>
     * container.clipX(10);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Container, 'clipY');
    /**
     * get/set clip y
     * @name clipY
     * @method
     * @memberof Kinetic.Container.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get clip y<br>
     * var clipY = container.clipY();<br><br>
     *
     * // set clip y<br>
     * container.clipY(10);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Container, 'clipWidth');
    /**
     * get/set clip width
     * @name clipWidth
     * @method
     * @memberof Kinetic.Container.prototype
     * @param {Number} width
     * @returns {Number}
     * @example
     * // get clip width<br>
     * var clipWidth = container.clipWidth();<br><br>
     *
     * // set clip width<br>
     * container.clipWidth(100);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Container, 'clipHeight');
    /**
     * get/set clip height
     * @name clipHeight
     * @method
     * @memberof Kinetic.Container.prototype
     * @param {Number} height
     * @returns {Number}
     * @example
     * // get clip height<br>
     * var clipHeight = container.clipHeight();<br><br>
     *
     * // set clip height<br>
     * container.clipHeight(100);
     */

     Kinetic.Collection.mapMethods(Kinetic.Container);
})();
;(function() {
    var HAS_SHADOW = 'hasShadow';

    function _fillFunc(context) {
        context.fill();
    }
    function _strokeFunc(context) {
        context.stroke();
    }
    function _fillFuncHit(context) {
        context.fill();
    }
    function _strokeFuncHit(context) {
        context.stroke();
    }

    function _clearHasShadowCache() {
        this._clearCache(HAS_SHADOW);
    }

    Kinetic.Util.addMethods(Kinetic.Shape, {
        __init: function(config) {
            this.nodeType = 'Shape';
            this._fillFunc = _fillFunc;
            this._strokeFunc = _strokeFunc;
            this._fillFuncHit = _fillFuncHit;
            this._strokeFuncHit = _strokeFuncHit;

            // set colorKey
            var shapes = Kinetic.shapes;
            var key;

            while(true) {
                key = Kinetic.Util.getRandomColor();
                if(key && !( key in shapes)) {
                    break;
                }
            }

            this.colorKey = key;
            shapes[key] = this;

            // call super constructor
            Kinetic.Node.call(this, config);

            this.on('shadowColorChange.kinetic shadowBlurChange.kinetic shadowOffsetChange.kinetic shadowOpacityChange.kinetic shadowEnabledChanged.kinetic', _clearHasShadowCache);
        },
        hasChildren: function() {
            return false;
        },
        getChildren: function() {
            return [];
        },
        /**
         * get canvas context tied to the layer
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Kinetic.Context}
         */
        getContext: function() {
            return this.getLayer().getContext();
        },
        /**
         * get canvas renderer tied to the layer.  Note that this returns a canvas renderer, not a canvas element
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Kinetic.Canvas}
         */
        getCanvas: function() {
            return this.getLayer().getCanvas();
        },
        /**
         * returns whether or not a shadow will be rendered
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Boolean}
         */
        hasShadow: function() {
            return this._getCache(HAS_SHADOW, this._hasShadow);  
        },
        _hasShadow: function() {
            return this.getShadowEnabled() && (this.getShadowOpacity() !== 0 && !!(this.getShadowColor() || this.getShadowBlur() || this.getShadowOffsetX() || this.getShadowOffsetY()));
        },
        /**
         * returns whether or not the shape will be filled
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Boolean}
         */
        hasFill: function() {
            return !!(this.getFill() || this.getFillPatternImage() || this.getFillLinearGradientColorStops() || this.getFillRadialGradientColorStops());
        },
        /**
         * returns whether or not the shape will be stroked
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Boolean}
         */
        hasStroke: function() {
            return !!(this.stroke() || this.strokeRed() || this.strokeGreen() || this.strokeBlue());
        },
        _get: function(selector) {
            return this.className === selector || this.nodeType === selector ? [this] : [];
        },
        /**
         * determines if point is in the shape, regardless if other shapes are on top of it.  Note: because
         *  this method clears a temporary canvas and then redraws the shape, it performs very poorly if executed many times
         *  consecutively.  Please use the {@link Kinetic.Stage#getIntersection} method if at all possible
         *  because it performs much better
         * @method
         * @memberof Kinetic.Shape.prototype
         * @param {Object} point 
         * @param {Number} point.x
         * @param {Number} point.y
         * @returns {Boolean}
         */
        intersects: function(pos) {
            var stage = this.getStage(),
                bufferHitCanvas = stage.bufferHitCanvas,
                p;

            bufferHitCanvas.getContext().clear();
            this.drawScene(bufferHitCanvas);
            p = bufferHitCanvas.context.getImageData(pos.x | 0, pos.y | 0, 1, 1).data;
            return p[3] > 0;
        },
        // extends Node.prototype.destroy 
        destroy: function() {
            Kinetic.Node.prototype.destroy.call(this);
            delete Kinetic.shapes[this.colorKey];
        },
        _useBufferCanvas: function() {
            return (this.hasShadow() || this.getAbsoluteOpacity() !== 1) && this.hasFill() && this.hasStroke();
        },
        drawScene: function(can) {
            var canvas = can || this.getLayer().getCanvas(),
                context = canvas.getContext(),
                cachedCanvas = this._cache.canvas,
                drawFunc = this.sceneFunc(),
                hasShadow = this.hasShadow(),
                stage, bufferCanvas, bufferContext;

            if(this.isVisible()) { 
                if (cachedCanvas) {
                    this._drawCachedSceneCanvas(context);
                }
                else if (drawFunc) {
                    context.save();
                    // if buffer canvas is needed
                    if (this._useBufferCanvas()) {
                        stage = this.getStage();
                        bufferCanvas = stage.bufferCanvas;
                        bufferContext = bufferCanvas.getContext();
                        bufferContext.clear();
                        bufferContext.save();
                        bufferContext._applyLineJoin(this);
                        bufferContext._applyTransform(this);
                     
                        drawFunc.call(this, bufferContext);
                        bufferContext.restore();

                        if (hasShadow) {
                            context.save();
                            context._applyShadow(this);
                            context.drawImage(bufferCanvas._canvas, 0, 0); 
                            context.restore();
                        }

                        context._applyOpacity(this);
                        context.drawImage(bufferCanvas._canvas, 0, 0);
                    }
                    // if buffer canvas is not needed
                    else {
                        context._applyLineJoin(this);
                        context._applyTransform(this);
               
                        if (hasShadow) {
                            context.save();
                            context._applyShadow(this);
                            drawFunc.call(this, context);
                            context.restore();
                        }   

                        context._applyOpacity(this);
                        drawFunc.call(this, context);
                    }   
                    context.restore(); 
                }
            }

            return this;
        },
        drawHit: function(can) {
            var canvas = can || this.getLayer().hitCanvas,
                context = canvas.getContext(),
                drawFunc = this.hitFunc() || this.sceneFunc(),
                cachedCanvas = this._cache.canvas,
                cachedHitCanvas = cachedCanvas && cachedCanvas.hit;

            if(this.shouldDrawHit()) {
                
                if (cachedHitCanvas) {
                    this._drawCachedHitCanvas(context);
                }
                else if (drawFunc) {
                    context.save();
                    context._applyLineJoin(this);
                    context._applyTransform(this);
                   
                    drawFunc.call(this, context);   
                    context.restore();
                }
                
            }

            return this;
        },
        /**
        * draw hit graph using the cached scene canvas
        * @method
        * @memberof Kinetic.Shape.prototype
        * @param {Integer} alphaThreshold alpha channel threshold that determines whether or not
        *  a pixel should be drawn onto the hit graph.  Must be a value between 0 and 255.  
        *  The default is 0
        * @returns {Kinetic.Shape}
        * @example
        * shape.cache();
        * shape.drawHitFromCache();
        */
        drawHitFromCache: function(alphaThreshold) {
            var threshold = alphaThreshold || 0,
                cachedCanvas = this._cache.canvas,
                sceneCanvas = this._getCachedSceneCanvas(),
                sceneContext = sceneCanvas.getContext(),
                hitCanvas = cachedCanvas.hit,
                hitContext = hitCanvas.getContext(),
                width = sceneCanvas.getWidth(),
                height = sceneCanvas.getHeight(),
                sceneImageData, sceneData, hitImageData, hitData, len, rgbColorKey, i, alpha;

            hitContext.clear();

            try {
                sceneImageData = sceneContext.getImageData(0, 0, width, height);
                sceneData = sceneImageData.data;
                hitImageData = hitContext.getImageData(0, 0, width, height);
                hitData = hitImageData.data;
                len = sceneData.length;
                rgbColorKey = Kinetic.Util._hexToRgb(this.colorKey);

                // replace non transparent pixels with color key
                for(i = 0; i < len; i += 4) {
                    alpha = sceneData[i + 3];
                    if (alpha > threshold) {
                        hitData[i] = rgbColorKey.r;
                        hitData[i + 1] = rgbColorKey.g;
                        hitData[i + 2] = rgbColorKey.b;
                        hitData[i + 3] = 255;
                    }
                }

                hitContext.putImageData(hitImageData, 0, 0);
            }
            catch(e) {
                Kinetic.Util.warn('Unable to draw hit graph from cached scene canvas. ' + e.message);
            }

            return this;
        },
    });
    Kinetic.Util.extend(Kinetic.Shape, Kinetic.Node);

    // add getters and setters
    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'stroke');

    /**
     * get/set stroke color
     * @name stroke
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} color
     * @returns {String}
     * @example
     * // get stroke color<br>
     * var stroke = shape.stroke();<br><br>
     *
     * // set stroke color with color string<br>
     * shape.stroke('green');<br><br>
     *
     * // set stroke color with hex<br>
     * shape.stroke('#00ff00');<br><br>
     *
     * // set stroke color with rgb<br>
     * shape.stroke('rgb(0,255,0)');<br><br>
     *
     * // set stroke color with rgba and make it 50% opaque<br>
     * shape.stroke('rgba(0,255,0,0.5');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeRed', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set stroke red component
     * @name strokeRed
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} red
     * @returns {Integer}
     * @example
     * // get stroke red component<br>
     * var strokeRed = shape.strokeRed();<br><br>
     *
     * // set stroke red component<br>
     * shape.strokeRed(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeGreen', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set stroke green component
     * @name strokeGreen
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} green
     * @returns {Integer}
     * @example
     * // get stroke green component<br>
     * var strokeGreen = shape.strokeGreen();<br><br>
     *
     * // set stroke green component<br>
     * shape.strokeGreen(255);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeBlue', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set stroke blue component
     * @name strokeBlue
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} blue
     * @returns {Integer}
     * @example
     * // get stroke blue component<br>
     * var strokeBlue = shape.strokeBlue();<br><br>
     *
     * // set stroke blue component<br>
     * shape.strokeBlue(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeAlpha', 1, Kinetic.Validators.alphaComponent);

    /**
     * get/set stroke alpha component.  Alpha is a real number between 0 and 1.  The default
     *  is 1.
     * @name strokeAlpha
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} alpha
     * @returns {Number}
     * @example
     * // get stroke alpha component<br>
     * var strokeAlpha = shape.strokeAlpha();<br><br>
     *
     * // set stroke alpha component<br>
     * shape.strokeAlpha(0.5);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeWidth', 2);

    /**
     * get/set stroke width
     * @name strokeWidth
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} strokeWidth
     * @returns {Number}
     * @example
     * // get stroke width<br>
     * var strokeWidth = shape.strokeWidth();<br><br>
     *
     * // set stroke width<br>
     * shape.strokeWidth();
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'lineJoin');

    /**
     * get/set line join.  Can be miter, round, or bevel.  The
     *  default is miter
     * @name lineJoin
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} lineJoin
     * @returns {String}
     * @example
     * // get line join<br>
     * var lineJoin = shape.lineJoin();<br><br>
     *
     * // set line join<br>
     * shape.lineJoin('round');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'lineCap');

    /**
     * get/set line cap.  Can be butt, round, or square
     * @name lineCap
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} lineCap
     * @returns {String}
     * @example
     * // get line cap<br>
     * var lineCap = shape.lineCap();<br><br>
     *
     * // set line cap<br>
     * shape.lineCap('round');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'sceneFunc');

    /**
     * get/set scene draw function
     * @name sceneFunc
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Function} drawFunc drawing function
     * @returns {Function}
     * @example
     * // get scene draw function<br>
     * var sceneFunc = shape.sceneFunc();<br><br>
     *
     * // set scene draw function<br>
     * shape.sceneFunc(function(context) {<br>
     *   context.beginPath();<br>
     *   context.rect(0, 0, this.width(), this.height());<br>
     *   context.closePath();<br>
     *   context.fillStrokeShape(this);<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'hitFunc');

    /**
     * get/set hit draw function
     * @name hitFunc
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Function} drawFunc drawing function
     * @returns {Function}
     * @example
     * // get hit draw function<br>
     * var hitFunc = shape.hitFunc();<br><br>
     *
     * // set hit draw function<br>
     * shape.hitFunc(function(context) {<br>
     *   context.beginPath();<br>
     *   context.rect(0, 0, this.width(), this.height());<br>
     *   context.closePath();<br>
     *   context.fillStrokeShape(this);<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'dash');

    /**
     * get/set dash array for stroke.
     * @name dash
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Array} dash
     * @returns {Array}
     * @example
     *  // apply dashed stroke that is 10px long and 5 pixels apart<br>
     *  line.dash([10, 5]);<br><br>
     *  
     *  // apply dashed stroke that is made up of alternating dashed<br> 
     *  // lines that are 10px long and 20px apart, and dots that have<br> 
     *  // a radius of 5px and are 20px apart<br>
     *  line.dash([10, 20, 0.001, 20]);
     */


    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowColor');

    /**
     * get/set shadow color
     * @name shadowColor
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} color
     * @returns {String}
     * @example
     * // get shadow color<br>
     * var shadow = shape.shadowColor();<br><br>
     *
     * // set shadow color with color string<br>
     * shape.shadowColor('green');<br><br>
     *
     * // set shadow color with hex<br>
     * shape.shadowColor('#00ff00');<br><br>
     *
     * // set shadow color with rgb<br>
     * shape.shadowColor('rgb(0,255,0)');<br><br>
     *
     * // set shadow color with rgba and make it 50% opaque<br>
     * shape.shadowColor('rgba(0,255,0,0.5');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowRed', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set shadow red component
     * @name shadowRed
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} red
     * @returns {Integer}
     * @example
     * // get shadow red component<br>
     * var shadowRed = shape.shadowRed();<br><br>
     *
     * // set shadow red component<br>
     * shape.shadowRed(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowGreen', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set shadow green component
     * @name shadowGreen
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} green
     * @returns {Integer}
     * @example
     * // get shadow green component<br>
     * var shadowGreen = shape.shadowGreen();<br><br>
     *
     * // set shadow green component<br>
     * shape.shadowGreen(255);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowBlue', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set shadow blue component
     * @name shadowBlue
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} blue
     * @returns {Integer}
     * @example
     * // get shadow blue component<br>
     * var shadowBlue = shape.shadowBlue();<br><br>
     *
     * // set shadow blue component<br>
     * shape.shadowBlue(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowAlpha', 1, Kinetic.Validators.alphaComponent);

    /**
     * get/set shadow alpha component.  Alpha is a real number between 0 and 1.  The default
     *  is 1.
     * @name shadowAlpha
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} alpha
     * @returns {Number}
     * @example
     * // get shadow alpha component<br>
     * var shadowAlpha = shape.shadowAlpha();<br><br>
     *
     * // set shadow alpha component<br>
     * shape.shadowAlpha(0.5);
     */
     
    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowBlur');

    /**
     * get/set shadow blur
     * @name shadowBlur
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} blur
     * @returns {Number}
     * @example
     * // get shadow blur<br>
     * var shadowBlur = shape.shadowBlur();<br><br>
     *
     * // set shadow blur<br>
     * shape.shadowBlur(10);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowOpacity');

    /**
     * get/set shadow opacity.  must be a value between 0 and 1
     * @name shadowOpacity
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} opacity
     * @returns {Number}
     * @example
     * // get shadow opacity<br>
     * var shadowOpacity = shape.shadowOpacity();<br><br>
     *
     * // set shadow opacity<br>
     * shape.shadowOpacity(0.5);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'shadowOffset', ['x', 'y']);

    /**
     * get/set shadow offset
     * @name shadowOffset
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} offset
     * @param {Number} offset.x
     * @param {Number} offset.y
     * @returns {Object}
     * @example
     * // get shadow offset<br>
     * var shadowOffset = shape.shadowOffset();<br><br>
     *
     * // set shadow offset<br>
     * shape.shadowOffset({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowOffsetX', 0);

     /**
     * get/set shadow offset x
     * @name shadowOffsetX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get shadow offset x<br>
     * var shadowOffsetX = shape.shadowOffsetX();<br><br>
     *
     * // set shadow offset x<br>
     * shape.shadowOffsetX(5);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowOffsetY', 0);

     /**
     * get/set shadow offset y
     * @name shadowOffsetY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get shadow offset y<br>
     * var shadowOffsetY = shape.shadowOffsetY();<br><br>
     *
     * // set shadow offset y<br>
     * shape.shadowOffsetY(5);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternImage');

    /**
     * get/set fill pattern image
     * @name fillPatternImage
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Image} image object
     * @returns {Image}
     * @example
     * // get fill pattern image<br>
     * var fillPatternImage = shape.fillPatternImage();<br><br>
     *
     * // set fill pattern image<br>
     * var imageObj = new Image();<br>
     * imageObj.onload = function() {<br>
     *   shape.fillPatternImage(imageObj);<br>
     * };<br>
     * imageObj.src = 'path/to/image/jpg';
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fill');

    /**
     * get/set fill color
     * @name fill
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} color
     * @returns {String}
     * @example
     * // get fill color<br>
     * var fill = shape.fill();<br><br>
     *
     * // set fill color with color string<br>
     * shape.fill('green');<br><br>
     *
     * // set fill color with hex<br>
     * shape.fill('#00ff00');<br><br>
     *
     * // set fill color with rgb<br>
     * shape.fill('rgb(0,255,0)');<br><br>
     *
     * // set fill color with rgba and make it 50% opaque<br>
     * shape.fill('rgba(0,255,0,0.5');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRed', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set fill red component
     * @name fillRed
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} red
     * @returns {Integer}
     * @example
     * // get fill red component<br>
     * var fillRed = shape.fillRed();<br><br>
     *
     * // set fill red component<br>
     * shape.fillRed(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillGreen', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set fill green component
     * @name fillGreen
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} green
     * @returns {Integer}
     * @example
     * // get fill green component<br>
     * var fillGreen = shape.fillGreen();<br><br>
     *
     * // set fill green component<br>
     * shape.fillGreen(255);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillBlue', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set fill blue component
     * @name fillBlue
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} blue
     * @returns {Integer}
     * @example
     * // get fill blue component<br>
     * var fillBlue = shape.fillBlue();<br><br>
     *
     * // set fill blue component<br>
     * shape.fillBlue(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillAlpha', 1, Kinetic.Validators.alphaComponent);

    /**
     * get/set fill alpha component.  Alpha is a real number between 0 and 1.  The default
     *  is 1.
     * @name fillAlpha
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} alpha
     * @returns {Number}
     * @example
     * // get fill alpha component<br>
     * var fillAlpha = shape.fillAlpha();<br><br>
     *
     * // set fill alpha component<br>
     * shape.fillAlpha(0.5);
     */


    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternX', 0);

    /**
     * get/set fill pattern x
     * @name fillPatternX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill pattern x<br>
     * var fillPatternX = shape.fillPatternX();<br><br>
     * 
     * // set fill pattern x<br>
     * shape.fillPatternX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternY', 0);

    /**
     * get/set fill pattern y
     * @name fillPatternY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill pattern y<br>
     * var fillPatternY = shape.fillPatternY();<br><br>
     * 
     * // set fill pattern y<br>
     * shape.fillPatternY(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillLinearGradientColorStops');

    /**
     * get/set fill linear gradient color stops
     * @name fillLinearGradientColorStops
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Array} colorStops
     * @returns {Array} colorStops
     * @example
     * // get fill linear gradient color stops<br>
     * var colorStops = shape.fillLinearGradientColorStops();<br><br>
     *
     * // create a linear gradient that starts with red, changes to blue <br>
     * // halfway through, and then changes to green<br>
     * shape.fillLinearGradientColorStops(0, 'red', 0.5, 'blue', 1, 'green');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientStartRadius', 0);

    /**
     * get/set fill radial gradient start radius
     * @name fillRadialGradientStartRadius
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} radius
     * @returns {Number}
     * @example
     * // get radial gradient start radius<br>
     * var startRadius = shape.fillRadialGradientStartRadius();<br><br>
     *
     * // set radial gradient start radius<br>
     * shape.fillRadialGradientStartRadius(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientEndRadius', 0);

    /**
     * get/set fill radial gradient end radius
     * @name fillRadialGradientEndRadius
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} radius
     * @returns {Number}
     * @example
     * // get radial gradient end radius<br>
     * var endRadius = shape.fillRadialGradientEndRadius();<br><br>
     *
     * // set radial gradient end radius<br>
     * shape.fillRadialGradientEndRadius(100);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientColorStops');

    /**
     * get/set fill radial gradient color stops
     * @name fillRadialGradientColorStops
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} colorStops
     * @returns {Array}
     * @example
     * // get fill radial gradient color stops<br>
     * var colorStops = shape.fillRadialGradientColorStops();<br><br>
     *
     * // create a radial gradient that starts with red, changes to blue <br>
     * // halfway through, and then changes to green<br>
     * shape.fillRadialGradientColorStops(0, 'red', 0.5, 'blue', 1, 'green');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternRepeat', 'repeat');

    /**
     * get/set fill pattern repeat.  Can be 'repeat', 'repeat-x', 'repeat-y', or 'no-repeat'.  The default is 'repeat'
     * @name fillPatternRepeat
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} repeat
     * @returns {String}
     * @example
     * // get fill pattern repeat<br>
     * var repeat = shape.fillPatternRepeat();<br><br>
     *
     * // repeat pattern in x direction only<br>
     * shape.fillPatternRepeat('repeat-x');<br><br>
     *
     * // do not repeat the pattern<br>
     * shape.fillPatternRepeat('no repeat');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillEnabled', true);

    /**
     * get/set fill enabled flag
     * @name fillEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get fill enabled flag<br>
     * var fillEnabled = shape.fillEnabled();<br><br>
     *
     * // disable fill<br>
     * shape.fillEnabled(false);<br><br>
     *
     * // enable fill<br>
     * shape.fillEnabled(true);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeEnabled', true);

    /**
     * get/set stroke enabled flag
     * @name strokeEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get stroke enabled flag<br>
     * var strokeEnabled = shape.strokeEnabled();<br><br>
     *
     * // disable stroke<br>
     * shape.strokeEnabled(false);<br><br>
     *
     * // enable stroke<br>
     * shape.strokeEnabled(true);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowEnabled', true);

    /**
     * get/set shadow enabled flag
     * @name shadowEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get shadow enabled flag<br>
     * var shadowEnabled = shape.shadowEnabled();<br><br>
     *
     * // disable shadow<br>
     * shape.shadowEnabled(false);<br><br>
     *
     * // enable shadow<br>
     * shape.shadowEnabled(true);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'dashEnabled', true);

    /**
     * get/set dash enabled flag
     * @name dashEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get dash enabled flag<br>
     * var dashEnabled = shape.dashEnabled();<br><br>
     *
     * // disable dash<br>
     * shape.dashEnabled(false);<br><br>
     *
     * // enable dash<br>
     * shape.dashEnabled(true);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeScaleEnabled', true);

    /**
     * get/set strokeScale enabled flag
     * @name strokeScaleEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get stroke scale enabled flag<br>
     * var strokeScaleEnabled = shape.strokeScaleEnabled();<br><br>
     *
     * // disable stroke scale<br>
     * shape.strokeScaleEnabled(false);<br><br>
     *
     * // enable stroke scale<br>
     * shape.strokeScaleEnabled(true);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPriority', 'color');

    /**
     * get/set fill priority.  can be color, pattern, linear-gradient, or radial-gradient.  The default is color.
     *   This is handy if you want to toggle between different fill types.
     * @name fillPriority
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} priority
     * @returns {String}
     * @example
     * // get fill priority<br>
     * var fillPriority = shape.fillPriority();<br><br>
     *
     * // set fill priority<br>
     * shape.fillPriority('linear-gradient');
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'fillPatternOffset', ['x', 'y']);

    /**
     * get/set fill pattern offset
     * @name fillPatternOffset
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} offset
     * @param {Number} offset.x
     * @param {Number} offset.y
     * @returns {Object}
     * @example
     * // get fill pattern offset<br>
     * var patternOffset = shape.fillPatternOffset();<br><br>
     *
     * // set fill pattern offset<br>
     * shape.fillPatternOffset({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */


    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternOffsetX', 0);
    /**
     * get/set fill pattern offset x
     * @name fillPatternOffsetX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill pattern offset x<br>
     * var patternOffsetX = shape.fillPatternOffsetX();<br><br>
     *
     * // set fill pattern offset x<br>
     * shape.fillPatternOffsetX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternOffsetY', 0);
    /**
     * get/set fill pattern offset y
     * @name fillPatternOffsetY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill pattern offset y<br>
     * var patternOffsetY = shape.fillPatternOffsetY();<br><br>
     *
     * // set fill pattern offset y<br>
     * shape.fillPatternOffsetY(10);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'fillPatternScale', ['x', 'y']);

    /**
     * get/set fill pattern scale
     * @name fillPatternScale
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} scale
     * @param {Number} scale.x
     * @param {Number} scale.y
     * @returns {Object}
     * @example
     * // get fill pattern scale<br>
     * var patternScale = shape.fillPatternScale();<br><br>
     *
     * // set fill pattern scale<br>
     * shape.fillPatternScale({<br>
     *   x: 2<br>
     *   y: 2<br>
     * });
     */


    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternScaleX', 1);
    /**
     * get/set fill pattern scale x
     * @name fillPatternScaleX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill pattern scale x<br>
     * var patternScaleX = shape.fillPatternScaleX();<br><br>
     *
     * // set fill pattern scale x<br>
     * shape.fillPatternScaleX(2);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternScaleY', 1);
    /**
     * get/set fill pattern scale y
     * @name fillPatternScaleY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill pattern scale y<br>
     * var patternScaleY = shape.fillPatternScaleY();<br><br>
     *
     * // set fill pattern scale y<br>
     * shape.fillPatternScaleY(2);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'fillLinearGradientStartPoint', ['x', 'y']);

    /**
     * get/set fill linear gradient start point
     * @name fillLinearGradientStartPoint
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} startPoint
     * @param {Number} startPoint.x
     * @param {Number} startPoint.y
     * @returns {Object}
     * @example
     * // get fill linear gradient start point<br>
     * var startPoint = shape.fillLinearGradientStartPoint();<br><br>
     *
     * // set fill linear gradient start point<br>
     * shape.fillLinearGradientStartPoint({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillLinearGradientStartPointX', 0);
    /**
     * get/set fill linear gradient start point x
     * @name fillLinearGradientStartPointX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill linear gradient start point x<br>
     * var startPointX = shape.fillLinearGradientStartPointX();<br><br>
     *
     * // set fill linear gradient start point x<br>
     * shape.fillLinearGradientStartPointX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillLinearGradientStartPointY', 0);
    /**
     * get/set fill linear gradient start point y
     * @name fillLinearGradientStartPointY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill linear gradient start point y<br>
     * var startPointY = shape.fillLinearGradientStartPointY();<br><br>
     *
     * // set fill linear gradient start point y<br>
     * shape.fillLinearGradientStartPointY(20);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'fillLinearGradientEndPoint', ['x', 'y']);

    /**
     * get/set fill linear gradient end point
     * @name fillLinearGradientEndPoint
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} endPoint
     * @param {Number} endPoint.x
     * @param {Number} endPoint.y
     * @returns {Object}
     * @example
     * // get fill linear gradient end point<br>
     * var endPoint = shape.fillLinearGradientEndPoint();<br><br>
     *
     * // set fill linear gradient end point<br>
     * shape.fillLinearGradientEndPoint({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillLinearGradientEndPointX', 0);
    /**
     * get/set fill linear gradient end point x
     * @name fillLinearGradientEndPointX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill linear gradient end point x<br>
     * var endPointX = shape.fillLinearGradientEndPointX();<br><br>
     *
     * // set fill linear gradient end point x<br>
     * shape.fillLinearGradientEndPointX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillLinearGradientEndPointY', 0);
    /**
     * get/set fill linear gradient end point y
     * @name fillLinearGradientEndPointY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill linear gradient end point y<br>
     * var endPointY = shape.fillLinearGradientEndPointY();<br><br>
     *
     * // set fill linear gradient end point y<br>
     * shape.fillLinearGradientEndPointY(20);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'fillRadialGradientStartPoint', ['x', 'y']);

    /**
     * get/set fill radial gradient start point
     * @name fillRadialGradientStartPoint
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} startPoint
     * @param {Number} startPoint.x
     * @param {Number} startPoint.y
     * @returns {Object}
     * @example
     * // get fill radial gradient start point<br>
     * var startPoint = shape.fillRadialGradientStartPoint();<br><br>
     *
     * // set fill radial gradient start point<br>
     * shape.fillRadialGradientStartPoint({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientStartPointX', 0);
    /**
     * get/set fill radial gradient start point x
     * @name fillRadialGradientStartPointX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill radial gradient start point x<br>
     * var startPointX = shape.fillRadialGradientStartPointX();<br><br>
     *
     * // set fill radial gradient start point x<br>
     * shape.fillRadialGradientStartPointX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientStartPointY', 0);
    /**
     * get/set fill radial gradient start point y
     * @name fillRadialGradientStartPointY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill radial gradient start point y<br>
     * var startPointY = shape.fillRadialGradientStartPointY();<br><br>
     *
     * // set fill radial gradient start point y<br>
     * shape.fillRadialGradientStartPointY(20);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'fillRadialGradientEndPoint', ['x', 'y']);

    /**
     * get/set fill radial gradient end point
     * @name fillRadialGradientEndPoint
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} endPoint
     * @param {Number} endPoint.x
     * @param {Number} endPoint.y
     * @returns {Object}
     * @example
     * // get fill radial gradient end point<br>
     * var endPoint = shape.fillRadialGradientEndPoint();<br><br>
     *
     * // set fill radial gradient end point<br>
     * shape.fillRadialGradientEndPoint({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientEndPointX', 0);
    /**
     * get/set fill radial gradient end point x
     * @name fillRadialGradientEndPointX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill radial gradient end point x<br>
     * var endPointX = shape.fillRadialGradientEndPointX();<br><br>
     *
     * // set fill radial gradient end point x<br>
     * shape.fillRadialGradientEndPointX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientEndPointY', 0);
    /**
     * get/set fill radial gradient end point y
     * @name fillRadialGradientEndPointY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill radial gradient end point y<br>
     * var endPointY = shape.fillRadialGradientEndPointY();<br><br>
     *
     * // set fill radial gradient end point y<br>
     * shape.fillRadialGradientEndPointY(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternRotation', 0);

    /**
     * get/set fill pattern rotation in degrees
     * @name fillPatternRotation
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} rotation
     * @returns {Kinetic.Shape}
     * @example
     * // get fill pattern rotation<br>
     * var patternRotation = shape.fillPatternRotation();<br><br>
     *
     * // set fill pattern rotation<br>
     * shape.fillPatternRotation(20);
     */


    Kinetic.Factory.backCompat(Kinetic.Shape, {
        dashArray: 'dash',
        getDashArray: 'getDash',
        setDashArray: 'getDash',

        drawFunc: 'sceneFunc',
        getDrawFunc: 'getSceneFunc',
        setDrawFunc: 'setSceneFunc',

        drawHitFunc: 'hitFunc',
        getDrawHitFunc: 'getHitFunc',
        setDrawHitFunc: 'setHitFunc'
    });

    Kinetic.Collection.mapMethods(Kinetic.Shape);
})();
;(function() {
    // CONSTANTS
    var STAGE = 'Stage',
        STRING = 'string',
        PX = 'px',

        MOUSEOUT = 'mouseout',
        MOUSELEAVE = 'mouseleave',
        MOUSEOVER = 'mouseover',
        MOUSEENTER = 'mouseenter',
        MOUSEMOVE = 'mousemove',
        MOUSEDOWN = 'mousedown',
        MOUSEUP = 'mouseup',
        CLICK = 'click',
        DBL_CLICK = 'dblclick',
        TOUCHSTART = 'touchstart',
        TOUCHEND = 'touchend',
        TAP = 'tap',
        DBL_TAP = 'dbltap',
        TOUCHMOVE = 'touchmove',

        CONTENT_MOUSEOUT = 'contentMouseout',
        CONTENT_MOUSELEAVE = 'contentMouseleave',
        CONTENT_MOUSEOVER = 'contentMouseover',
        CONTENT_MOUSEENTER = 'contentMouseenter',
        CONTENT_MOUSEMOVE = 'contentMousemove',
        CONTENT_MOUSEDOWN = 'contentMousedown',
        CONTENT_MOUSEUP = 'contentMouseup',
        CONTENT_CLICK = 'contentClick',
        CONTENT_DBL_CLICK = 'contentDblclick',
        CONTENT_TOUCHSTART = 'contentTouchstart',
        CONTENT_TOUCHEND = 'contentTouchend',
        CONTENT_TAP = 'contentTap',
        CONTENT_DBL_TAP = 'contentDbltap',
        CONTENT_TOUCHMOVE = 'contentTouchmove',

        DIV = 'div',
        RELATIVE = 'relative',
        INLINE_BLOCK = 'inline-block',
        KINETICJS_CONTENT = 'kineticjs-content',
        SPACE = ' ',
        UNDERSCORE = '_',
        CONTAINER = 'container',
        EMPTY_STRING = '',
        EVENTS = [MOUSEDOWN, MOUSEMOVE, MOUSEUP, MOUSEOUT, TOUCHSTART, TOUCHMOVE, TOUCHEND, MOUSEOVER],

        // cached variables
        eventsLength = EVENTS.length;

    function addEvent(ctx, eventName) {
      ctx.content.addEventListener(eventName, function(evt) {
        ctx[UNDERSCORE + eventName](evt);
      }, false);
    }

    Kinetic.Util.addMethods(Kinetic.Stage, {
        ___init: function(config) {
            this.nodeType = STAGE;
            // call super constructor
            Kinetic.Container.call(this, config);
            this._id = Kinetic.idCounter++;
            this._buildDOM();
            this._bindContentEvents();
            this._enableNestedTransforms = false;
            Kinetic.stages.push(this);
        },
        _validateAdd: function(child) {
            if (child.getType() !== 'Layer') {
                Kinetic.Util.error('You may only add layers to the stage.');
            }
        },
        /**
         * set container dom element which contains the stage wrapper div element
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {DomElement} container can pass in a dom element or id string
         */
        setContainer: function(container) {
            if( typeof container === STRING) {
                container = document.getElementById(container);
            }
            this._setAttr(CONTAINER, container);
            return this;
        },
        shouldDrawHit: function() {
            return true;
        },
        draw: function() {
            Kinetic.Node.prototype.draw.call(this);
            return this;
        },
        /**
         * draw layer scene graphs
         * @name draw
         * @method
         * @memberof Kinetic.Stage.prototype
         */

        /**
         * draw layer hit graphs
         * @name drawHit
         * @method
         * @memberof Kinetic.Stage.prototype
         */

        /**
         * set height
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Number} height
         */
        setHeight: function(height) {
            Kinetic.Node.prototype.setHeight.call(this, height);
            this._resizeDOM();
            return this;
        },
        /**
         * set width
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Number} width
         */
        setWidth: function(width) {
            Kinetic.Node.prototype.setWidth.call(this, width);
            this._resizeDOM();
            return this;
        },
        /**
         * clear all layers
         * @method
         * @memberof Kinetic.Stage.prototype
         */
        clear: function() {
            var layers = this.children,
                len = layers.length,
                n;

            for(n = 0; n < len; n++) {
                layers[n].clear();
            }
            return this;
        },
        /**
         * remove stage
         * @method
         * @memberof Kinetic.Stage.prototype
         */
        destroy: function() {
            var content = this.content;
            Kinetic.Container.prototype.destroy.call(this);

            if(content && Kinetic.Util._isInDocument(content)) {
                this.getContainer().removeChild(content);
            }
        },
        /**
         * get pointer position which can be a touch position or mouse position
         * @method
         * @memberof Kinetic.Stage.prototype
         * @returns {Object}
         */
        getPointerPosition: function() {
            return this.pointerPos;
        },
        getStage: function() {
            return this;
        },
        /**
         * get stage content div element which has the
         *  the class name "kineticjs-content"
         * @method
         * @memberof Kinetic.Stage.prototype
         */
        getContent: function() {
            return this.content;
        },
        /**
         * Creates a composite data URL and requires a callback because the composite is generated asynchronously.
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Object} config
         * @param {Function} config.callback function executed when the composite has completed
         * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
         *  "image/png" is the default
         * @param {Number} [config.x] x position of canvas section
         * @param {Number} [config.y] y position of canvas section
         * @param {Number} [config.width] width of canvas section
         * @param {Number} [config.height] height of canvas section
         * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
         *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
         *  is very high quality
         */
        toDataURL: function(config) {
            config = config || {};

            var mimeType = config.mimeType || null,
                quality = config.quality || null,
                x = config.x || 0,
                y = config.y || 0,
                canvas = new Kinetic.SceneCanvas({
                    width: config.width || this.getWidth(),
                    height: config.height || this.getHeight(),
                    pixelRatio: 1
                }),
                _context = canvas.getContext()._context,
                layers = this.children;

            if(x || y) {
                _context.translate(-1 * x, -1 * y);
            }

            function drawLayer(n) {
                var layer = layers[n],
                    layerUrl = layer.toDataURL(),
                    imageObj = new Image();

                imageObj.onload = function() {
                    _context.drawImage(imageObj, 0, 0);

                    if(n < layers.length - 1) {
                        drawLayer(n + 1);
                    }
                    else {
                        config.callback(canvas.toDataURL(mimeType, quality));
                    }
                };
                imageObj.src = layerUrl;
            }
            drawLayer(0);
        },
        /**
         * converts stage into an image.
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Object} config
         * @param {Function} config.callback function executed when the composite has completed
         * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
         *  "image/png" is the default
         * @param {Number} [config.x] x position of canvas section
         * @param {Number} [config.y] y position of canvas section
         * @param {Number} [config.width] width of canvas section
         * @param {Number} [config.height] height of canvas section
         * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
         *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
         *  is very high quality
         */
        toImage: function(config) {
            var cb = config.callback;

            config.callback = function(dataUrl) {
                Kinetic.Util._getImage(dataUrl, function(img) {
                    cb(img);
                });
            };
            this.toDataURL(config);
        },
        /**
         * get visible intersection shape. This is the preferred
         *  method for determining if a point intersects a shape or not
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Object} pos
         * @param {Number} pos.x
         * @param {Number} pos.y
         * @returns {Kinetic.Shape}
         */
        getIntersection: function(pos) {
            var layers = this.getChildren(),
                len = layers.length,
                end = len - 1,
                n, shape;

            for(n = end; n >= 0; n--) {
                shape = layers[n].getIntersection(pos);
                if (shape) {
                    return shape;
                } 
            }

            return null;
        },
        _resizeDOM: function() {
            if(this.content) {
                var width = this.getWidth(),
                    height = this.getHeight(),
                    layers = this.getChildren(),
                    len = layers.length,
                    n, layer;

                // set content dimensions
                this.content.style.width = width + PX;
                this.content.style.height = height + PX;

                this.bufferCanvas.setSize(width, height);
                this.bufferHitCanvas.setSize(width, height);

                // set layer dimensions
                for(n = 0; n < len; n++) {
                    layer = layers[n];
                    layer.getCanvas().setSize(width, height);
                    layer.hitCanvas.setSize(width, height);
                    layer.draw();
                }
            }
        },
        /**
         * add layer to stage
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Kinetic.Layer} layer
         */
        add: function(layer) {
            Kinetic.Container.prototype.add.call(this, layer);
            layer.canvas.setSize(this.attrs.width, this.attrs.height);
            layer.hitCanvas.setSize(this.attrs.width, this.attrs.height);

            // draw layer and append canvas to container
            layer.draw();
            this.content.appendChild(layer.canvas._canvas);

            // chainable
            return this;
        },
        getParent: function() {
            return null;
        },
        getLayer: function() {
            return null;
        },
        /**
         * returns a {@link Kinetic.Collection} of layers
         * @method
         * @memberof Kinetic.Stage.prototype
         */
        getLayers: function() {
            return this.getChildren();
        },
        _bindContentEvents: function() {
            var that = this,
                n;

            for (n = 0; n < eventsLength; n++) {
              addEvent(this, EVENTS[n]);
            }
        },
        _mouseover: function(evt) {
            this._fire(CONTENT_MOUSEOVER, evt);
        },
        _mouseout: function(evt) {
            this._setPointerPosition(evt);
            var targetShape = this.targetShape;

            if(targetShape && !Kinetic.isDragging()) {
                targetShape._fireAndBubble(MOUSEOUT, evt);
                targetShape._fireAndBubble(MOUSELEAVE, evt);
                this.targetShape = null;
            }
            this.pointerPos = undefined;

            this._fire(CONTENT_MOUSEOUT, evt);
        },
        _mousemove: function(evt) {
            this._setPointerPosition(evt);
            var dd = Kinetic.DD,
                shape = this.getIntersection(this.getPointerPosition());

            if(shape && shape.isListening()) {
                if(!Kinetic.isDragging() && (!this.targetShape || this.targetShape._id !== shape._id)) {
                    if(this.targetShape) {
                        this.targetShape._fireAndBubble(MOUSEOUT, evt, shape);
                        this.targetShape._fireAndBubble(MOUSELEAVE, evt, shape);
                    }
                    shape._fireAndBubble(MOUSEOVER, evt, this.targetShape);
                    shape._fireAndBubble(MOUSEENTER, evt, this.targetShape);
                    this.targetShape = shape;
                }
                else {
                    shape._fireAndBubble(MOUSEMOVE, evt);
                }
            }
            /*
             * if no shape was detected, clear target shape and try
             * to run mouseout from previous target shape
             */
            else {
              if(this.targetShape && !Kinetic.isDragging()) {
                this.targetShape._fireAndBubble(MOUSEOUT, evt);
                this.targetShape._fireAndBubble(MOUSELEAVE, evt);
                this.targetShape = null;
              }

            }

            // content event
            this._fire(CONTENT_MOUSEMOVE, evt);

            if(dd) {
                dd._drag(evt);
            }

            // always call preventDefault for desktop events because some browsers
            // try to drag and drop the canvas element
            if (evt.preventDefault) {
                evt.preventDefault();
            }
        },
        _mousedown: function(evt) {
            this._setPointerPosition(evt);
            var shape = this.getIntersection(this.getPointerPosition());

            Kinetic.listenClickTap = true;

            if (shape && shape.isListening()) {
                this.clickStartShape = shape;
                shape._fireAndBubble(MOUSEDOWN, evt);
            }

            // content event
            this._fire(CONTENT_MOUSEDOWN, evt);

            // always call preventDefault for desktop events because some browsers
            // try to drag and drop the canvas element
            if (evt.preventDefault) {
                evt.preventDefault();
            }
        },
        _mouseup: function(evt) {
            this._setPointerPosition(evt);
            var that = this,
                shape = this.getIntersection(this.getPointerPosition()),
                clickStartShape = this.clickStartShape,
                fireDblClick = false;

            if(Kinetic.inDblClickWindow) {
                fireDblClick = true;
                Kinetic.inDblClickWindow = false;
            }
            else {
                Kinetic.inDblClickWindow = true;
            }

            setTimeout(function() {
                Kinetic.inDblClickWindow = false;
            }, Kinetic.dblClickWindow);

            if (shape && shape.isListening()) {
                shape._fireAndBubble(MOUSEUP, evt);

                // detect if click or double click occurred
                if(Kinetic.listenClickTap && clickStartShape && clickStartShape._id === shape._id) {
                    shape._fireAndBubble(CLICK, evt);

                    if(fireDblClick) {
                        shape._fireAndBubble(DBL_CLICK, evt);
                    }
                }
            }
            // content events
            this._fire(CONTENT_MOUSEUP, evt);
            if (Kinetic.listenClickTap) {
                this._fire(CONTENT_CLICK, evt);
                if(fireDblClick) {
                    this._fire(CONTENT_DBL_CLICK, evt);
                }
            }

            Kinetic.listenClickTap = false;

            // always call preventDefault for desktop events because some browsers
            // try to drag and drop the canvas element
            if (evt.preventDefault) {
                evt.preventDefault();
            }
        },
        _touchstart: function(evt) {
            this._setPointerPosition(evt);
            var shape = this.getIntersection(this.getPointerPosition());

            Kinetic.listenClickTap = true;

            if (shape && shape.isListening()) {
                this.tapStartShape = shape;
                shape._fireAndBubble(TOUCHSTART, evt);

                // only call preventDefault if the shape is listening for events
                if (shape.isListening() && evt.preventDefault) {
                    evt.preventDefault();
                }
            }
            // content event
            this._fire(CONTENT_TOUCHSTART, evt);
        },
        _touchend: function(evt) {
            this._setPointerPosition(evt);
            var that = this,
                shape = this.getIntersection(this.getPointerPosition());
                fireDblClick = false;

                if(Kinetic.inDblClickWindow) {
                    fireDblClick = true;
                    Kinetic.inDblClickWindow = false;
                }
                else {
                    Kinetic.inDblClickWindow = true;
                }

                setTimeout(function() {
                    Kinetic.inDblClickWindow = false;
                }, Kinetic.dblClickWindow);

            if (shape && shape.isListening()) {
                shape._fireAndBubble(TOUCHEND, evt);

                // detect if tap or double tap occurred
                if(Kinetic.listenClickTap && shape._id === this.tapStartShape._id) {
                    shape._fireAndBubble(TAP, evt);

                    if(fireDblClick) {
                        shape._fireAndBubble(DBL_TAP, evt);
                    }
                }
                // only call preventDefault if the shape is listening for events
                if (shape.isListening() && evt.preventDefault) {
                    evt.preventDefault();
                }
            }
            // content events
            if (Kinetic.listenClickTap) {
                this._fire(CONTENT_TOUCHEND, evt);
                if(fireDblClick) {
                    this._fire(CONTENT_DBL_TAP, evt);
                }
            }

            Kinetic.listenClickTap = false;
        },
        _touchmove: function(evt) {
            this._setPointerPosition(evt);
            var dd = Kinetic.DD,
                shape = this.getIntersection(this.getPointerPosition());

            if (shape && shape.isListening()) {
                shape._fireAndBubble(TOUCHMOVE, evt);

                // only call preventDefault if the shape is listening for events
                if (shape.isListening() && evt.preventDefault) {
                    evt.preventDefault();
                }
            }
            this._fire(CONTENT_TOUCHMOVE, evt);

            // start drag and drop
            if(dd) {
                dd._drag(evt);
            }
        },
        _setPointerPosition: function(evt) {
            var evt = evt ? evt : window.event,
                contentPosition = this._getContentPosition(),
                offsetX = evt.offsetX,
                clientX = evt.clientX,
                x = null,
                y = null,
                touch;

            // touch events
            if(evt.touches !== undefined) {
                // currently, only handle one finger
                if (evt.touches.length === 1) {

                    touch = evt.touches[0];

                    // get the information for finger #1
                    x = touch.clientX - contentPosition.left;
                    y = touch.clientY - contentPosition.top; 
                }
            }
            // mouse events
            else {
                // if offsetX is defined, assume that offsetY is defined as well
                if (offsetX !== undefined) {
                    x = offsetX;
                    y = evt.offsetY;
                }
                // we unforunately have to use UA detection here because accessing
                // the layerX or layerY properties in newer veresions of Chrome
                // throws a JS warning.  layerX and layerY are required for FF
                // when the container is transformed via CSS.
                else if (Kinetic.UA.browser === 'mozilla') {
                    x = evt.layerX;
                    y = evt.layerY;
                }
                // if clientX is defined, assume that clientY is defined as well
                else if (clientX !== undefined && contentPosition) {
                    x = clientX - contentPosition.left;
                    y = evt.clientY - contentPosition.top;
                }
            }

            if (x !== null && y !== null) {
                this.pointerPos = {
                    x: x,
                    y: y
                };
            }
        },
        _getContentPosition: function() {
            var rect = this.content.getBoundingClientRect ? this.content.getBoundingClientRect() : { top: 0, left: 0 };
            return {
                top: rect.top,
                left: rect.left
            };
        },
        _buildDOM: function() {
            var container = this.getContainer();

            // clear content inside container
            container.innerHTML = EMPTY_STRING;

            // content
            this.content = document.createElement(DIV);
            this.content.style.position = RELATIVE;
            this.content.style.display = INLINE_BLOCK;
            this.content.className = KINETICJS_CONTENT;
            this.content.setAttribute('role', 'presentation');
            container.appendChild(this.content);

            // the buffer canvas pixel ratio must be 1 because it is used as an 
            // intermediate canvas before copying the result onto a scene canvas.
            // not setting it to 1 will result in an over compensation
            this.bufferCanvas = new Kinetic.SceneCanvas({
                pixelRatio: 1
            });
            this.bufferHitCanvas = new Kinetic.HitCanvas();

            this._resizeDOM();
        },
        _onContent: function(typesStr, handler) {
            var types = typesStr.split(SPACE),
                len = types.length,
                n, baseEvent;

            for(n = 0; n < len; n++) {
                baseEvent = types[n];
                this.content.addEventListener(baseEvent, handler, false);
            }
        }
    });
    Kinetic.Util.extend(Kinetic.Stage, Kinetic.Container);

    // add getters and setters
    Kinetic.Factory.addGetter(Kinetic.Stage, 'container');
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Stage, 'container');

    /**
     * get container DOM element
     * @name container
     * @method
     * @memberof Kinetic.Stage.prototype
     * @returns {DomElement} container
     * @example
     * // get container<br>
     * var container = stage.container();<br><br>
     * 
     * // set container<br>
     * var container = document.createElement('div');<br>
     * body.appendChild(container);<br>
     * stage.container(container);
     */

})();
;(function() {
    // constants
    var HASH = '#',
        BEFORE_DRAW ='beforeDraw',
        DRAW = 'draw',

        /*
         * 2 - 3 - 4
         * |       |
         * 1 - 0   5
         *         |
         * 8 - 7 - 6     
         */
        INTERSECTION_OFFSETS = [
            {x:  0, y:  0}, // 0
            {x: -1, y:  0}, // 1
            {x: -1, y: -1}, // 2
            {x:  0, y: -1}, // 3
            {x:  1, y: -1}, // 4
            {x:  1, y:  0}, // 5
            {x:  1, y:  1}, // 6
            {x:  0, y:  1}, // 7
            {x: -1, y:  1}  // 8
        ],
        INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;


    Kinetic.Util.addMethods(Kinetic.Layer, {
        ___init: function(config) {
            this.nodeType = 'Layer';
            this.canvas = new Kinetic.SceneCanvas();
            this.hitCanvas = new Kinetic.HitCanvas();
            // call super constructor
            Kinetic.Container.call(this, config);
        },
        _validateAdd: function(child) {
            var type = child.getType();
            if (type !== 'Group' && type !== 'Shape') {
                Kinetic.Util.error('You may only add groups and shapes to a layer.');
            }
        },
        /**
         * get visible intersection shape. This is the preferred
         * method for determining if a point intersects a shape or not
         * @method
         * @memberof Kinetic.Layer.prototype
         * @param {Object} pos
         * @param {Number} pos.x
         * @param {Number} pos.y
         * @returns {Kinetic.Shape}
         */
        getIntersection: function(pos) {
            var obj, i, intersectionOffset, shape;

            if(this.isVisible()) {
                for (i=0; i<INTERSECTION_OFFSETS_LEN; i++) {
                    intersectionOffset = INTERSECTION_OFFSETS[i];
                    obj = this._getIntersection({
                        x: pos.x + intersectionOffset.x,
                        y: pos.y + intersectionOffset.y
                    });
                    shape = obj.shape;
                    if (shape) {
                        return shape;
                    }
                    else if (!obj.antialiased) {
                        return null;
                    }
                }
            }
            else {
                return null;
            }
        },
        _getIntersection: function(pos) {
            var p = this.hitCanvas.context._context.getImageData(pos.x, pos.y, 1, 1).data,
                p3 = p[3],
                colorKey, shape;

            // fully opaque pixel
            if(p3 === 255) {
                colorKey = Kinetic.Util._rgbToHex(p[0], p[1], p[2]);
                shape = Kinetic.shapes[HASH + colorKey];
                return {
                    shape: shape
                };
            }
            // antialiased pixel
            else if(p3 > 0) {
                return {
                    antialiased: true
                };
            }
            // empty pixel
            else {
                return {};
            }
        },
        drawScene: function(can) {
            var layer = this.getLayer(),
                canvas = can || (layer && layer.getCanvas());

            this._fire(BEFORE_DRAW, {
                node: this
            });

            if(this.getClearBeforeDraw()) {
                canvas.getContext().clear();
            }
            
            Kinetic.Container.prototype.drawScene.call(this, canvas);

            this._fire(DRAW, {
                node: this
            });

            return this;
        },
        drawHit: function(can) {
            var layer = this.getLayer(),
                canvas = can || (layer && layer.hitCanvas);

            if(layer && layer.getClearBeforeDraw()) {
                layer.getHitCanvas().getContext().clear();
            }

            Kinetic.Container.prototype.drawHit.call(this, canvas);
            return this;
        },
        /**
         * get layer canvas
         * @method
         * @memberof Kinetic.Layer.prototype
         */
        getCanvas: function() {
            return this.canvas;
        },
        /**
         * get layer hit canvas
         * @method
         * @memberof Kinetic.Layer.prototype
         */
        getHitCanvas: function() {
            return this.hitCanvas;
        },
        /**
         * get layer canvas context
         * @method
         * @memberof Kinetic.Layer.prototype
         */
        getContext: function() {
            return this.getCanvas().getContext();
        },
        /**
         * clear scene and hit canvas contexts tied to the layer
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} [bounds]
         * @param {Number} [bounds.x]
         * @param {Number} [bounds.y]
         * @param {Number} [bounds.width]
         * @param {Number} [bounds.height]
         * @example
         * layer.clear();<br>
         * layer.clear(0, 0, 100, 100);
         */
        clear: function(bounds) {
            var context = this.getContext(),
                hitContext = this.getHitCanvas().getContext();

            context.clear(bounds);
            hitContext.clear(bounds);
            return this;
        },
        // extend Node.prototype.setVisible
        setVisible: function(visible) {
            Kinetic.Node.prototype.setVisible.call(this, visible);
            if(visible) {
                this.getCanvas()._canvas.style.display = 'block';
                this.hitCanvas._canvas.style.display = 'block';
            }
            else {
                this.getCanvas()._canvas.style.display = 'none';
                this.hitCanvas._canvas.style.display = 'none';
            }
            return this;
        },
        // extend Node.prototype.setZIndex
        setZIndex: function(index) {
            Kinetic.Node.prototype.setZIndex.call(this, index);
            var stage = this.getStage();
            if(stage) {
                stage.content.removeChild(this.getCanvas()._canvas);

                if(index < stage.getChildren().length - 1) {
                    stage.content.insertBefore(this.getCanvas()._canvas, stage.getChildren()[index + 1].getCanvas()._canvas);
                }
                else {
                    stage.content.appendChild(this.getCanvas()._canvas);
                }
            }
            return this;
        },
        // extend Node.prototype.moveToTop
        moveToTop: function() {
            Kinetic.Node.prototype.moveToTop.call(this);
            var stage = this.getStage();
            if(stage) {
                stage.content.removeChild(this.getCanvas()._canvas);
                stage.content.appendChild(this.getCanvas()._canvas);
            }
        },
        // extend Node.prototype.moveUp
        moveUp: function() {
            if(Kinetic.Node.prototype.moveUp.call(this)) {
                var stage = this.getStage();
                if(stage) {
                    stage.content.removeChild(this.getCanvas()._canvas);

                    if(this.index < stage.getChildren().length - 1) {
                        stage.content.insertBefore(this.getCanvas()._canvas, stage.getChildren()[this.index + 1].getCanvas()._canvas);
                    }
                    else {
                        stage.content.appendChild(this.getCanvas()._canvas);
                    }
                }
            }
        },
        // extend Node.prototype.moveDown
        moveDown: function() {
            if(Kinetic.Node.prototype.moveDown.call(this)) {
                var stage = this.getStage();
                if(stage) {
                    var children = stage.getChildren();
                    stage.content.removeChild(this.getCanvas()._canvas);
                    stage.content.insertBefore(this.getCanvas()._canvas, children[this.index + 1].getCanvas()._canvas);
                }
            }
        },
        // extend Node.prototype.moveToBottom
        moveToBottom: function() {
            if(Kinetic.Node.prototype.moveToBottom.call(this)) {
                var stage = this.getStage();
                if(stage) {
                    var children = stage.getChildren();
                    stage.content.removeChild(this.getCanvas()._canvas);
                    stage.content.insertBefore(this.getCanvas()._canvas, children[1].getCanvas()._canvas);
                }
            }
        },
        getLayer: function() {
            return this;
        },
        remove: function() {
            var stage = this.getStage(), 
                canvas = this.getCanvas(), 
                _canvas = canvas._canvas;

            Kinetic.Node.prototype.remove.call(this);

            if(stage && _canvas && Kinetic.Util._isInDocument(_canvas)) {
                stage.content.removeChild(_canvas);
            }
            return this;
        },
        getStage: function() {
            return this.parent;
        },
        /**
         * enable hit graph
         * @name enableHitGraph
         * @method
         * @memberof Kinetic.Layer.prototype
         * @returns {Node}
         */
        enableHitGraph: function() {
            this.setHitGraphEnabled(true);
            return this;
        },
        /**
         * disable hit graph
         * @name enableHitGraph
         * @method
         * @memberof Kinetic.Layer.prototype
         * @returns {Node}
         */
        disableHitGraph: function() {
            this.setHitGraphEnabled(false);
            return this;
        }
    });
    Kinetic.Util.extend(Kinetic.Layer, Kinetic.Container);

    // add getters and setters
    Kinetic.Factory.addGetterSetter(Kinetic.Layer, 'clearBeforeDraw', true);
    /**
     * get/set clearBeforeDraw flag which determines if the layer is cleared or not
     *  before drawing
     * @name clearBeforeDraw
     * @method
     * @memberof Kinetic.Layer.prototype
     * @param {Boolean} clearBeforeDraw
     * @returns {Boolean}
     * @example
     * // get clearBeforeDraw flag<br>
     * var clearBeforeDraw = layer.clearBeforeDraw();<br><br>
     *
     * // disable clear before draw<br>
     * layer.clearBeforeDraw(false);<br><br>
     *
     * // enable clear before draw<br>
     * layer.clearBeforeDraw(true);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Layer, 'hitGraphEnabled', true);
    /**
     * get/set hitGraphEnabled flag.  Disabling the hit graph will greatly increase
     *  draw performance because the hit graph will not be redrawn each time the layer is
     *  drawn.  This, however, also disables mouse/touch event detection
     * @name hitGraphEnabled
     * @method
     * @memberof Kinetic.Layer.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get hitGraphEnabled flag<br>
     * var hitGraphEnabled = layer.hitGraphEnabled();<br><br>
     *
     * // disable hit graph<br>
     * layer.hitGraphEnabled(false);<br><br>
     *
     * // enable hit graph<br>
     * layer.hitGraphEnabled(true);
     */

     Kinetic.Collection.mapMethods(Kinetic.Layer);
})();
;(function() {
    Kinetic.Util.addMethods(Kinetic.Group, {
        ___init: function(config) {
            this.nodeType = 'Group';
            // call super constructor
            Kinetic.Container.call(this, config);
        },
        _validateAdd: function(child) {
            var type = child.getType();
            if (type !== 'Group' && type !== 'Shape') {
                Kinetic.Util.error('You may only add groups and shapes to groups.');
            }
        }
    });
    Kinetic.Util.extend(Kinetic.Group, Kinetic.Container);

    Kinetic.Collection.mapMethods(Kinetic.Group);
})();
;(function() {
    /**
     * Rect constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} [config.cornerRadius]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var rect = new Kinetic.Rect({<br>
     *   width: 100,<br>
     *   height: 50,<br>
     *   fill: 'red',<br>
     *   stroke: 'black'<br>
     *   strokeWidth: 5<br>
     * });
     */
    Kinetic.Rect = function(config) {
        this.___init(config);
    };

    Kinetic.Rect.prototype = {
        ___init: function(config) {
            Kinetic.Shape.call(this, config);
            this.className = 'Rect';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var cornerRadius = this.getCornerRadius(),
                width = this.getWidth(),
                height = this.getHeight();

            
            context.beginPath();

            if(!cornerRadius) {
                // simple rect - don't bother doing all that complicated maths stuff.
                context.rect(0, 0, width, height);
            }
            else {
                // arcTo would be nicer, but browser support is patchy (Opera)
                context.moveTo(cornerRadius, 0);
                context.lineTo(width - cornerRadius, 0);
                context.arc(width - cornerRadius, cornerRadius, cornerRadius, Math.PI * 3 / 2, 0, false);
                context.lineTo(width, height - cornerRadius);
                context.arc(width - cornerRadius, height - cornerRadius, cornerRadius, 0, Math.PI / 2, false);
                context.lineTo(cornerRadius, height);
                context.arc(cornerRadius, height - cornerRadius, cornerRadius, Math.PI / 2, Math.PI, false);
                context.lineTo(0, cornerRadius);
                context.arc(cornerRadius, cornerRadius, cornerRadius, Math.PI, Math.PI * 3 / 2, false);
            }
            context.closePath();
            context.fillStrokeShape(this);
        }
    };

    Kinetic.Util.extend(Kinetic.Rect, Kinetic.Shape);

    Kinetic.Factory.addGetterSetter(Kinetic.Rect, 'cornerRadius', 0);
    /**
     * get/set corner radius
     * @name cornerRadius
     * @method
     * @memberof Kinetic.Rect.prototype
     * @param {Number} cornerRadius
     * @returns {Number}
     * @example
     * // get corner radius<br>
     * var cornerRadius = rect.cornerRadius();<br><br>
     * 
     * // set corner radius<br>
     * rect.cornerRadius(10);
     */

     Kinetic.Collection.mapMethods(Kinetic.Rect);
})();
;(function() {
    // the 0.0001 offset fixes a bug in Chrome 27
    var PIx2 = (Math.PI * 2) - 0.0001,
        CIRCLE = 'Circle';

    /**
     * Circle constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.radius
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * // create circle
     * var circle = new Kinetic.Circle({<br>
     *   radius: 40,<br>
     *   fill: 'red',<br>
     *   stroke: 'black'<br>
     *   strokeWidth: 5<br>
     * });
     */
    Kinetic.Circle = function(config) {
        this.___init(config);
    };

    Kinetic.Circle.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = CIRCLE;
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            context.beginPath();
            context.arc(0, 0, this.getRadius(), 0, PIx2, false);
            context.closePath();
            context.fillStrokeShape(this);
        },
        // implements Shape.prototype.getWidth()
        getWidth: function() {
            return this.getRadius() * 2;
        },
        // implements Shape.prototype.getHeight()
        getHeight: function() {
            return this.getRadius() * 2;
        },
        // implements Shape.prototype.setWidth()
        setWidth: function(width) {
            Kinetic.Node.prototype.setWidth.call(this, width);
            this.setRadius(width / 2);
        },
        // implements Shape.prototype.setHeight()
        setHeight: function(height) {
            Kinetic.Node.prototype.setHeight.call(this, height);
            this.setRadius(height / 2);
        }
    };
    Kinetic.Util.extend(Kinetic.Circle, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Circle, 'radius', 0);

    /**
     * get/set radius
     * @name radius
     * @method
     * @memberof Kinetic.Circle.prototype
     * @param {Number} radius
     * @returns {Number}
     * @example
     * // get radius<br>
     * var radius = circle.radius();<br><br>
     *
     * // set radius<br>
     * circle.radius(10);<br>
     */

     Kinetic.Collection.mapMethods(Kinetic.Circle);
})();
;(function() {
    // the 0.0001 offset fixes a bug in Chrome 27
    var PIx2 = (Math.PI * 2) - 0.0001,
        ELLIPSE = 'Ellipse';

    /**
     * Ellipse constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number|Array|Object} config.radius defines x and y radius
     * @@ShapeParams
     * @@NodeParams
     */
    Kinetic.Ellipse = function(config) {
        this.___init(config);
    };

    Kinetic.Ellipse.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = ELLIPSE;
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var r = this.getRadius(),
                rx = r.x,
                ry = r.y;

            context.beginPath();
            context.save();
            if(rx !== ry) {
                context.scale(1, ry / rx);
            }
            context.arc(0, 0, rx, 0, PIx2, false);
            context.restore();
            context.closePath();
            context.fillStrokeShape(this);
        },
        // implements Shape.prototype.getWidth()
        getWidth: function() {
            return this.getRadius().x * 2;
        },
        // implements Shape.prototype.getHeight()
        getHeight: function() {
            return this.getRadius().y * 2;
        },
        // implements Shape.prototype.setWidth()
        setWidth: function(width) {
            Kinetic.Node.prototype.setWidth.call(this, width);
            this.setRadius({
                x: width / 2
            });
        },
        // implements Shape.prototype.setHeight()
        setHeight: function(height) {
            Kinetic.Node.prototype.setHeight.call(this, height);
            this.setRadius({
                y: height / 2
            });
        }
    };
    Kinetic.Util.extend(Kinetic.Ellipse, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Ellipse, 'radius', ['x', 'y']);

    /**
     * get/set radius
     * @name radius
     * @method
     * @memberof Kinetic.Ellipse.prototype
     * @param {Object} radius
     * @param {Number} radius.x
     * @param {Number} radius.y
     * @returns {Object}
     * @example
     * // get radius<br>
     * var radius = ellipse.radius();<br><br>
     * 
     * // set radius<br>
     * ellipse.radius({<br>
     *   x: 200,<br>
     *   y: 100<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Ellipse, 'radiusX', 0);
    /**
     * get/set radius x
     * @name radiusX
     * @method
     * @memberof Kinetic.Ellipse.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get radius x<br>
     * var radiusX = ellipse.radiusX();<br><br>
     * 
     * // set radius x<br>
     * ellipse.radiusX(200);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Ellipse, 'radiusY', 0);
    /**
     * get/set radius y
     * @name radiusY
     * @method
     * @memberof Kinetic.Ellipse.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get radius y<br>
     * var radiusY = ellipse.radiusY();<br><br>
     * 
     * // set radius y<br>
     * ellipse.radiusY(200);
     */

     Kinetic.Collection.mapMethods(Kinetic.Ellipse);

})();;(function() {
    // the 0.0001 offset fixes a bug in Chrome 27
    var PIx2 = (Math.PI * 2) - 0.0001;
    
    /**
     * Ring constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.innerRadius
     * @param {Number} config.outerRadius
     * @param {Boolean} [config.clockwise]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var ring = new Kinetic.Ring({<br>
     *   innerRadius: 40,<br>
     *   outerRadius: 80,<br>
     *   fill: 'red',<br>
     *   stroke: 'black',<br>
     *   strokeWidth: 5<br>
     * });
     */
    Kinetic.Ring = function(config) {
        this.___init(config);
    };

    Kinetic.Ring.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Ring';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            context.beginPath();
            context.arc(0, 0, this.getInnerRadius(), 0, PIx2, false);
            context.moveTo(this.getOuterRadius(), 0);
            context.arc(0, 0, this.getOuterRadius(), PIx2, 0, true);
            context.closePath();
            context.fillStrokeShape(this);
        },
        // implements Shape.prototype.getWidth()
        getWidth: function() {
            return this.getOuterRadius() * 2;
        },
        // implements Shape.prototype.getHeight()
        getHeight: function() {
            return this.getOuterRadius() * 2;
        },
        // implements Shape.prototype.setWidth()
        setWidth: function(width) {
            Kinetic.Node.prototype.setWidth.call(this, width);
            this.setOuterRadius(width / 2);
        },
        // implements Shape.prototype.setHeight()
        setHeight: function(height) {
            Kinetic.Node.prototype.setHeight.call(this, height);
            this.setOuterRadius(height / 2);
        }
    };
    Kinetic.Util.extend(Kinetic.Ring, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Ring, 'innerRadius', 0);

    /**
     * get/set innerRadius
     * @name innerRadius
     * @method
     * @memberof Kinetic.Ring.prototype
     * @param {Number} innerRadius
     * @returns {Number}
     * @example
     * // get inner radius<br>
     * var innerRadius = ring.innerRadius();<br><br>
     *
     * // set inner radius<br>
     * ring.innerRadius(20);
     */
     
    Kinetic.Factory.addGetterSetter(Kinetic.Ring, 'outerRadius', 0);

    /**
     * get/set outerRadius
     * @name outerRadius
     * @method
     * @memberof Kinetic.Ring.prototype
     * @param {Number} outerRadius
     * @returns {Number}
     * @example
     * // get outer radius<br>
     * var outerRadius = ring.outerRadius();<br><br>
     *
     * // set outer radius<br>
     * ring.outerRadius(20);
     */

     Kinetic.Collection.mapMethods(Kinetic.Ring);
})();
;(function() {
    /**
     * Wedge constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.angle in degrees
     * @param {Number} config.radius
     * @param {Boolean} [config.clockwise]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * // draw a wedge that's pointing downwards<br>
     * var wedge = new Kinetic.Wedge({<br>
     *   radius: 40,<br>
     *   fill: 'red',<br>
     *   stroke: 'black'<br>
     *   strokeWidth: 5,<br>
     *   angleDeg: 60,<br>
     *   rotationDeg: -120<br>
     * });
     */
    Kinetic.Wedge = function(config) {
        this.___init(config);
    };

    Kinetic.Wedge.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Wedge';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            context.beginPath();
            context.arc(0, 0, this.getRadius(), 0, this.getAngle() * Math.PI / 180, this.getClockwise());
            context.lineTo(0, 0);
            context.closePath();
            context.fillStrokeShape(this);
        }
    };
    Kinetic.Util.extend(Kinetic.Wedge, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Wedge, 'radius', 0);

    /**
     * get/set radius
     * @name radius
     * @method
     * @memberof Kinetic.Wedge.prototype
     * @param {Number} radius
     * @returns {Number}
     * @example
     * // get radius<br>
     * var radius = wedge.radius();<br><br>
     *
     * // set radius<br>
     * wedge.radius(10);<br>
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Wedge, 'angle', 0);

    /**
     * get/set angle in degrees
     * @name angle
     * @method
     * @memberof Kinetic.Wedge.prototype
     * @param {Number} angle
     * @returns {Number}
     * @example
     * // get angle<br>
     * var angle = wedge.angle();<br><br>
     *
     * // set angle<br>
     * wedge.angle(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Wedge, 'clockwise', false);

    /**
     * get/set clockwise flag
     * @name clockwise
     * @method
     * @memberof Kinetic.Wedge.prototype
     * @param {Number} clockwise
     * @returns {Number}
     * @example
     * // get clockwise flag<br>
     * var clockwise = wedge.clockwise();<br><br>
     *
     * // draw wedge counter-clockwise<br>
     * wedge.clockwise(false);<br><br>
     *
     * // draw wedge clockwise<br>
     * wedge.clockwise(true);
     */

    Kinetic.Factory.backCompat(Kinetic.Wedge, {
        angleDeg: 'angle',
        getAngleDeg: 'getAngle',
        setAngleDeg: 'setAngle'
    });

    Kinetic.Collection.mapMethods(Kinetic.Wedge);
})();
;(function() {
    /**
     * Arc constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.angle in degrees
     * @param {Number} config.innerRadius
     * @param {Number} config.outerRadius
     * @param {Boolean} [config.clockwise]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * // draw a Arc that's pointing downwards<br>
     * var arc = new Kinetic.Arc({<br>
     *   innerRadius: 40,<br>
     *   outerRadius: 80,<br>
     *   fill: 'red',<br>
     *   stroke: 'black'<br>
     *   strokeWidth: 5,<br>
     *   angle: 60,<br>
     *   rotationDeg: -120<br>
     * });
     */
    Kinetic.Arc = function(config) {
        this.___init(config);
    };

    Kinetic.Arc.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Arc';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var angle = this.angle() * Math.PI / 180,
                clockwise = this.clockwise();

            context.beginPath();
            context.arc(0, 0, this.getOuterRadius(), 0, angle, clockwise);
            context.arc(0, 0, this.getInnerRadius(), angle, 0, !clockwise);
            context.closePath();
            context.fillStrokeShape(this);
        }
    };
    Kinetic.Util.extend(Kinetic.Arc, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Arc, 'innerRadius', 0);

    /**
     * get/set innerRadius
     * @name innerRadius
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} innerRadius
     * @returns {Number}
     * @example
     * // get inner radius
     * var innerRadius = arc.innerRadius();
     *
     * // set inner radius
     * arc.innerRadius(20);
     */
     
    Kinetic.Factory.addGetterSetter(Kinetic.Arc, 'outerRadius', 0);

    /**
     * get/set outerRadius
     * @name outerRadius
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} outerRadius
     * @returns {Number}
     * @example
     * // get outer radius<br>
     * var outerRadius = arc.outerRadius();<br><br>
     *
     * // set outer radius<br>
     * arc.outerRadius(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Arc, 'angle', 0);

    /**
     * get/set angle in degrees
     * @name angle
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} angle
     * @returns {Number}
     * @example
     * // get angle<br>
     * var angle = arc.angle();<br><br>
     *
     * // set angle<br>
     * arc.angle(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Arc, 'clockwise', false);

    /**
     * get/set clockwise flag
     * @name clockwise
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} clockwise
     * @returns {Number}
     * @example
     * // get clockwise flag<br>
     * var clockwise = arc.clockwise();<br><br>
     *
     * // draw arc counter-clockwise<br>
     * arc.clockwise(false);<br><br>
     *
     * // draw arc clockwise<br>
     * arc.clockwise(true);
     */

     Kinetic.Collection.mapMethods(Kinetic.Arc);
})();
;(function() {

    // CONSTANTS
    var IMAGE = 'Image',
        SET = 'set';

    /**
     * Image constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {ImageObject} config.image
     * @param {Object} [config.crop]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var imageObj = new Image();<br>
     * imageObj.onload = function() {<br>
     *   var image = new Kinetic.Image({<br>
     *     x: 200,<br>
     *     y: 50,<br>
     *     image: imageObj,<br>
     *     width: 100,<br>
     *     height: 100<br>
     *   });<br>
     * };<br>
     * imageObj.src = '/path/to/image.jpg'
     */
    Kinetic.Image = function(config) {
        this.___init(config);
    };

    Kinetic.Image.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = IMAGE;
            this.sceneFunc(this._sceneFunc);
            this.hitFunc(this._hitFunc);
        },
        _useBufferCanvas: function() {
            return (this.hasShadow() || this.getAbsoluteOpacity() !== 1) && this.hasStroke();
        },
        _sceneFunc: function(context) {
            var width = this.getWidth(), 
                height = this.getHeight(), 
                image = this.getImage(),
                crop, cropWidth, cropHeight, params;

            if (image) {
                crop = this.getCrop(),
                cropWidth = crop.width;
                cropHeight = crop.height;
                if (cropWidth && cropHeight) {
                    params = [image, crop.x, crop.y, cropWidth, cropHeight, 0, 0, width, height];
                } 
                else {
                    params = [image, 0, 0, width, height];
                }
            }

            context.beginPath();
            context.rect(0, 0, width, height);
            context.closePath();
            context.fillStrokeShape(this);

            if (image) {
                context.drawImage.apply(context, params);
            }
        },
        _hitFunc: function(context) {
            var width = this.getWidth(), 
                height = this.getHeight();

            context.beginPath();
            context.rect(0, 0, width, height);
            context.closePath();
            context.fillStrokeShape(this);
        },
        getWidth: function() {
            var image = this.getImage();
            return this.attrs.width || (image ? image.width : 0);
        },
        getHeight: function() {
            var image = this.getImage();
            return this.attrs.height || (image ? image.height : 0);
        }
    };
    Kinetic.Util.extend(Kinetic.Image, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Image, 'image');

    /**
     * set image
     * @name setImage
     * @method
     * @memberof Kinetic.Image.prototype
     * @param {ImageObject} image
     */

    /**
     * get image
     * @name getImage
     * @method
     * @memberof Kinetic.Image.prototype
     * @returns {ImageObject}
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Image, 'crop', ['x', 'y', 'width', 'height']);
    /**
     * get/set crop
     * @method
     * @name crop
     * @memberof Kinetic.Image.prototype
     * @param {Object} crop 
     * @param {Number} crop.x
     * @param {Number} crop.y
     * @param {Number} crop.width
     * @param {Number} crop.height
     * @returns {Object}
     * @example
     * // get crop<br>
     * var crop = image.crop();<br><br>
     *
     * // set crop<br>
     * image.crop({<br>
     *   x: 20,<br>
     *   y: 20,<br>
     *   width: 20,<br>
     *   height: 20<br>
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Image, 'cropX', 0);
    /**
     * get/set crop x
     * @method
     * @name cropX
     * @memberof Kinetic.Image.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get crop x<br>
     * var cropX = image.cropX();<br><br>
     *
     * // set crop x<br>
     * image.cropX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Image, 'cropY', 0);
    /**
     * get/set crop y
     * @name cropY
     * @method
     * @memberof Kinetic.Image.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get crop y<br>
     * var cropY = image.cropY();<br><br>
     *
     * // set crop y<br>
     * image.cropY(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Image, 'cropWidth', 0);
    /**
     * get/set crop width
     * @name cropWidth
     * @method
     * @memberof Kinetic.Image.prototype
     * @param {Number} width
     * @returns {Number}
     * @example
     * // get crop width<br>
     * var cropWidth = image.cropWidth();<br><br>
     *
     * // set crop width<br>
     * image.cropWidth(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Image, 'cropHeight', 0);
    /**
     * get/set crop height
     * @name cropHeight
     * @method
     * @memberof Kinetic.Image.prototype
     * @param {Number} height
     * @returns {Number}
     * @example
     * // get crop height<br>
     * var cropHeight = image.cropHeight();<br><br>
     *
     * // set crop height<br>
     * image.cropHeight(20);
     */

     Kinetic.Collection.mapMethods(Kinetic.Image);
})();
;(function() {
    // constants
    var AUTO = 'auto',
        CANVAS = 'canvas',
        CENTER = 'center',
        CHANGE_KINETIC = 'Change.kinetic',
        CONTEXT_2D = '2d',
        DASH = '-',
        EMPTY_STRING = '',
        LEFT = 'left',
        TEXT = 'text',
        TEXT_UPPER = 'Text',
        MIDDLE = 'middle',
        NORMAL = 'normal',
        PX_SPACE = 'px ',
        SPACE = ' ',
        RIGHT = 'right',
        WORD = 'word',
        CHAR = 'char',
        NONE = 'none',
        ATTR_CHANGE_LIST = ['fontFamily', 'fontSize', 'fontStyle', 'padding', 'align', 'lineHeight', 'text', 'width', 'height', 'wrap'],

        // cached variables
        attrChangeListLen = ATTR_CHANGE_LIST.length,
        dummyContext = document.createElement(CANVAS).getContext(CONTEXT_2D);

    /**
     * Text constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {String} [config.fontFamily] default is Arial
     * @param {Number} [config.fontSize] in pixels.  Default is 12
     * @param {String} [config.fontStyle] can be normal, bold, or italic.  Default is normal
     * @param {String} config.text
     * @param {String} [config.align] can be left, center, or right
     * @param {Number} [config.padding]
     * @param {Number} [config.width] default is auto
     * @param {Number} [config.height] default is auto
     * @param {Number} [config.lineHeight] default is 1
     * @param {String} [config.wrap] can be word, char, or none. Default is word
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var text = new Kinetic.Text({<br>
     *   x: 10,<br>
     *   y: 15,<br>
     *   text: 'Simple Text',<br>
     *   fontSize: 30,<br>
     *   fontFamily: 'Calibri',<br>
     *   fill: 'green'<br>
     * });
     */
    Kinetic.Text = function(config) {
        this.___init(config);
    };
    function _fillFunc(context) {
        context.fillText(this.partialText, 0, 0);
    }
    function _strokeFunc(context) {
        context.strokeText(this.partialText, 0, 0);
    }

    Kinetic.Text.prototype = {
        ___init: function(config) {
            var that = this;

            if (config.width === undefined) {
                config.width = AUTO;
            }
            if (config.height === undefined) {
                config.height = AUTO;
            }

            // call super constructor
            Kinetic.Shape.call(this, config);

            this._fillFunc = _fillFunc;
            this._strokeFunc = _strokeFunc;
            this.className = TEXT_UPPER;

            // update text data for certain attr changes
            for(var n = 0; n < attrChangeListLen; n++) {
                this.on(ATTR_CHANGE_LIST[n] + CHANGE_KINETIC, that._setTextData);
            }

            this._setTextData();
            this.sceneFunc(this._sceneFunc);
            this.hitFunc(this._hitFunc);
        },
        _sceneFunc: function(context) {
            var p = this.getPadding(),
                textHeight = this.getTextHeight(),
                lineHeightPx = this.getLineHeight() * textHeight,
                textArr = this.textArr,
                textArrLen = textArr.length,
                totalWidth = this.getWidth(),
                n;

            context.setAttr('font', this._getContextFont());
            context.setAttr('textBaseline', MIDDLE);
            context.setAttr('textAlign', LEFT);
            context.save();
            context.translate(p, 0);
            context.translate(0, p + textHeight / 2);

            // draw text lines
            for(n = 0; n < textArrLen; n++) {
                var obj = textArr[n],
                    text = obj.text,
                    width = obj.width;

                // horizontal alignment
                context.save();
                if(this.getAlign() === RIGHT) {
                    context.translate(totalWidth - width - p * 2, 0);
                }
                else if(this.getAlign() === CENTER) {
                    context.translate((totalWidth - width - p * 2) / 2, 0);
                }

                this.partialText = text;
                context.fillStrokeShape(this);
                context.restore();
                context.translate(0, lineHeightPx);
            }
            context.restore();
        },
        _hitFunc: function(context) {
            var width = this.getWidth(),
                height = this.getHeight();

            context.beginPath();
            context.rect(0, 0, width, height);
            context.closePath();
            context.fillStrokeShape(this);
        },
        setText: function(text) {
            var str = Kinetic.Util._isString(text) ? text : text.toString();
            this._setAttr(TEXT, str);
            return this;
        },
        /**
         * get width of text area, which includes padding
         * @method
         * @memberof Kinetic.Text.prototype
         * @returns {Number}
         */
        getWidth: function() {
            return this.attrs.width === AUTO ? this.getTextWidth() + this.getPadding() * 2 : this.attrs.width;
        },
        /**
         * get the height of the text area, which takes into account multi-line text, line heights, and padding
         * @method
         * @memberof Kinetic.Text.prototype
         * @returns {Number}
         */
        getHeight: function() {
            return this.attrs.height === AUTO ? (this.getTextHeight() * this.textArr.length * this.getLineHeight()) + this.getPadding() * 2 : this.attrs.height;
        },
        /**
         * get text width
         * @method
         * @memberof Kinetic.Text.prototype
         * @returns {Number}
         */
        getTextWidth: function() {
            return this.textWidth;
        },
        /**
         * get text height
         * @method
         * @memberof Kinetic.Text.prototype
         * @returns {Number}
         */
        getTextHeight: function() {
            return this.textHeight;
        },
        _getTextSize: function(text) {
            var _context = dummyContext,
                fontSize = this.getFontSize(),
                metrics;

            _context.save();
            _context.font = this._getContextFont();

            metrics = _context.measureText(text);
            _context.restore();
            return {
                width: metrics.width,
                height: parseInt(fontSize, 10)
            };
        },
        _getContextFont: function() {
            return this.getFontStyle() + SPACE + this.getFontSize() + PX_SPACE + this.getFontFamily();
        },
        _addTextLine: function (line, width) {
            return this.textArr.push({text: line, width: width});
        },
        _getTextWidth: function (text) {
            return dummyContext.measureText(text).width;
        },
        _setTextData: function () {
            var lines = this.getText().split('\n'),
                fontSize = +this.getFontSize(),
                textWidth = 0,
                lineHeightPx = this.getLineHeight() * fontSize,
                width = this.attrs.width,
                height = this.attrs.height,
                fixedWidth = width !== AUTO,
                fixedHeight = height !== AUTO,
                padding = this.getPadding(),
                maxWidth = width - padding * 2,
                maxHeightPx = height - padding * 2,
                currentHeightPx = 0,
                wrap = this.getWrap(),
                shouldWrap = wrap !== NONE,
                wrapAtWord = wrap !==  CHAR && shouldWrap;

            this.textArr = [];
            dummyContext.save();
            dummyContext.font = this.getFontStyle() + SPACE + fontSize + PX_SPACE + this.getFontFamily();
            for (var i = 0, max = lines.length; i < max; ++i) {
                var line = lines[i],
                    lineWidth = this._getTextWidth(line);
                if (fixedWidth && lineWidth > maxWidth) {
                    /*
                     * if width is fixed and line does not fit entirely
                     * break the line into multiple fitting lines
                     */
                    while (line.length > 0) {
                        /*
                         * use binary search to find the longest substring that
                         * that would fit in the specified width
                         */
                        var low = 0, high = line.length,
                            match = '', matchWidth = 0;
                        while (low < high) {
                            var mid = (low + high) >>> 1,
                                substr = line.slice(0, mid + 1),
                                substrWidth = this._getTextWidth(substr);
                            if (substrWidth <= maxWidth) {
                                low = mid + 1;
                                match = substr;
                                matchWidth = substrWidth;
                            } else {
                                high = mid;
                            }
                        }
                        /*
                         * 'low' is now the index of the substring end
                         * 'match' is the substring
                         * 'matchWidth' is the substring width in px
                         */
                        if (match) {
                            // a fitting substring was found
                            if (wrapAtWord) {
                                // try to find a space or dash where wrapping could be done
                                var wrapIndex = Math.max(match.lastIndexOf(SPACE),
                                                          match.lastIndexOf(DASH)) + 1;
                                if (wrapIndex > 0) {
                                    // re-cut the substring found at the space/dash position
                                    low = wrapIndex;
                                    match = match.slice(0, low);
                                    matchWidth = this._getTextWidth(match);
                                }
                            }
                            this._addTextLine(match, matchWidth);
                            currentHeightPx += lineHeightPx;
                            if (!shouldWrap ||
                                (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx)) {
                                /*
                                 * stop wrapping if wrapping is disabled or if adding
                                 * one more line would overflow the fixed height
                                 */
                                break;
                            }
                            line = line.slice(low);
                            if (line.length > 0) {
                                // Check if the remaining text would fit on one line
                                lineWidth = this._getTextWidth(line);
                                if (lineWidth <= maxWidth) {
                                    // if it does, add the line and break out of the loop
                                    this._addTextLine(line, lineWidth);
                                    currentHeightPx += lineHeightPx;
                                    break;
                                }
                            }
                        } else {
                            // not even one character could fit in the element, abort
                            break;
                        }
                    }
                } else {
                    // element width is automatically adjusted to max line width
                    this._addTextLine(line, lineWidth);
                    currentHeightPx += lineHeightPx;
                    textWidth = Math.max(textWidth, lineWidth);
                }
                // if element height is fixed, abort if adding one more line would overflow
                if (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
                    break;
                }
            }
            dummyContext.restore();
            this.textHeight = fontSize;
            this.textWidth = textWidth;
        }
    };
    Kinetic.Util.extend(Kinetic.Text, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'fontFamily', 'Arial');

    /**
     * get/set font family
     * @name fontFamily
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} fontFamily
     * @returns {String}
     * @example
     * // get font family<br>
     * var fontFamily = text.fontFamily();<br><br><br>
     *
     * // set font family<br>
     * text.fontFamily('Arial');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'fontSize', 12);

    /**
     * get/set font size in pixels
     * @name fontSize
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {Number} fontSize
     * @returns {Number}
     * @example
     * // get font size<br>
     * var fontSize = text.fontSize();<br><br>
     *
     * // set font size to 22px<br>
     * text.fontSize(22);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'fontStyle', NORMAL);

    /**
     * set font style.  Can be 'normal', 'italic', or 'bold'.  'normal' is the default.
     * @name fontStyle
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} fontStyle
     * @returns {String}
     * @example
     * // get font style<br>
     * var fontStyle = text.fontStyle();<br><br>
     *
     * // set font style<br>
     * text.fontStyle('bold');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'padding', 0);

    /**
     * set padding
     * @name padding
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {Number} padding
     * @returns {Number}
     * @example
     * // get padding<br>
     * var padding = text.padding();<br><br>
     * 
     * // set padding to 10 pixels<br>
     * text.padding(10);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'align', LEFT);

    /**
     * get/set horizontal align of text.  Can be 'left', 'center', or 'right'
     * @name align
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} align
     * @returns {String}
     * @example
     * // get text align<br>
     * var align = text.align();<br><br>
     *
     * // center text<br>
     * text.align('center');<br><br>
     *
     * // align text to right<br>
     * text.align('right');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'lineHeight', 1);

    /**
     * get/set line height.  The default is 1.
     * @name lineHeight
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {Number} lineHeight
     * @returns {Number}
     * @example 
     * // get line height<br>
     * var lineHeight = text.lineHeight();<br><br><br>
     *
     * // set the line height<br>
     * text.lineHeight(2);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'wrap', WORD);

    /**
     * get/set wrap.  Can be word, char, or none. Default is word.
     * @name wrap
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} wrap
     * @returns {String}
     * @example
     * // get wrap<br>
     * var wrap = text.wrap();<br><br>
     *
     * // set wrap<br>
     * text.wrap('word');
     */

    Kinetic.Factory.addGetter(Kinetic.Text, 'text', EMPTY_STRING);
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Text, 'text');

    /**
     * get/set text
     * @name getText
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} text
     * @returns {String}
     * @example
     * // get text<br>
     * var text = text.text();<br><br>
     * 
     * // set text<br>
     * text.text('Hello world!');
     */

     Kinetic.Collection.mapMethods(Kinetic.Text);
})();
;(function() {
    /**
     * Line constructor.&nbsp; Lines are defined by an array of points and
     *  a tension
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Array} config.points
     * @param {Number} [config.tension] Higher values will result in a more curvy line.  A value of 0 will result in no interpolation.
     *   The default is 0
     * @param {Boolean} [config.closed] defines whether or not the line shape is closed, creating a polygon or blob 
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var line = new Kinetic.Line({<br>
     *   x: 100,<br>
     *   y: 50,<br>
     *   points: [73, 70, 340, 23, 450, 60, 500, 20],<br>
     *   stroke: 'red',<br>
     *   tension: 1<br>
     * });
     */
    Kinetic.Line = function(config) {
        this.___init(config);
    };

    Kinetic.Line.prototype = {
        ___init: function(config) {
            var that = this;
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Line';

            this.on('pointsChange.kinetic tensionChange.kinetic closedChange.kinetic', function() {
                this._clearCache('tensionPoints');
            });

            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var points = this.getPoints(),
                length = points.length,
                tension = this.getTension(),
                closed = this.getClosed(),
                tp, len, n, point;

            context.beginPath();
            context.moveTo(points[0], points[1]);

            // tension
            if(tension !== 0 && length > 4) {
                tp = this.getTensionPoints();
                len = tp.length;
                n = closed ? 0 : 4;

                if (!closed) {
                    context.quadraticCurveTo(tp[0], tp[1], tp[2], tp[3]);
                }

                while(n < len - 2) {
                    context.bezierCurveTo(tp[n++], tp[n++], tp[n++], tp[n++], tp[n++], tp[n++]);
                }

                if (!closed) {
                    context.quadraticCurveTo(tp[len-2], tp[len-1], points[length-2], points[length-1]);
                }
            }
            // no tension
            else {
                for(n = 2; n < length; n+=2) {
                    context.lineTo(points[n], points[n+1]);
                }
            }

            // closed e.g. polygons and blobs
            if (closed) {
                context.closePath();
                context.fillStrokeShape(this);   
            }
            // open e.g. lines and splines
            else {
                context.strokeShape(this);
            };
        },
        getTensionPoints: function() {
            return this._getCache('tensionPoints', this._getTensionPoints); 
        },
        _getTensionPoints: function() {
            if (this.getClosed()) {
                return this._getTensionPointsClosed();  
            }
            else {
                return Kinetic.Util._expandPoints(this.getPoints(), this.getTension());
            }
        },
        _getTensionPointsClosed: function() {
            var p = this.getPoints(),
                len = p.length,
                tension = this.getTension(),
                util = Kinetic.Util,
                firstControlPoints = util._getControlPoints(
                    p[len-2],
                    p[len-1], 
                    p[0], 
                    p[1], 
                    p[2], 
                    p[3],
                    tension
                ),
                lastControlPoints = util._getControlPoints(
                    p[len-4], 
                    p[len-3], 
                    p[len-2], 
                    p[len-1], 
                    p[0], 
                    p[1],
                    tension
                ),
                middle = Kinetic.Util._expandPoints(p, tension),
                tp = [
                        firstControlPoints[2], 
                        firstControlPoints[3]
                    ]
                    .concat(middle)
                    .concat([
                        lastControlPoints[0],
                        lastControlPoints[1],
                        p[len-2],
                        p[len-1],
                        lastControlPoints[2],
                        lastControlPoints[3],
                        firstControlPoints[0],
                        firstControlPoints[1],
                        p[0],
                        p[1]
                    ]);
                    
            return tp;
        }
    };
    Kinetic.Util.extend(Kinetic.Line, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Line, 'closed', false);

    /**
     * get/set closed flag.  The default is false
     * @name closed
     * @method
     * @memberof Kinetic.Line.prototype
     * @param {Boolean} closed
     * @returns {Boolean}
     * @example
     * // get closed flag<br>
     * var closed = line.closed();<br><br>
     *
     * // close the shape<br>
     * line.closed(true);<br><br>
     *
     * // open the shape<br>
     * line.closed(false);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Line, 'tension', 0);

    /**
     * get/set tension
     * @name tension
     * @method
     * @memberof Kinetic.Line.prototype
     * @param {Number} Higher values will result in a more curvy line.  A value of 0 will result in no interpolation.
     *   The default is 0
     * @returns {Number}
     * @example
     * // get tension<br>
     * var tension = line.tension();<br><br>
     *
     * // set tension<br>
     * line.tension(3);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Line, 'points');
    /**
     * get/set points array
     * @name points
     * @method
     * @memberof Kinetic.Line.prototype
     * @param {Array} points
     * @returns {Array}
     * @example
     * // get points<br>
     * var points = line.points();<br><br>
     *
     * // set points<br>
     * line.points([10, 20, 30, 40, 50, 60]);<br><br>
     *
     * // push a new point<br>
     * line.points(line.points().concat([70, 80]));
     */

     Kinetic.Collection.mapMethods(Kinetic.Line);
})();;(function() {
    /**
     * Sprite constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {String} config.animation animation key
     * @param {Object} config.animations animation map
     * @param {Integer} [config.frameIndex] animation frame index
     * @param {Image} config.image image object
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var imageObj = new Image();<br>
     * imageObj.onload = function() {<br>
     *   var sprite = new Kinetic.Sprite({<br>
     *     x: 200,<br>
     *     y: 100,<br>
     *     image: imageObj,<br>
     *     animation: 'standing',<br>
     *     animations: {<br>
     *       standing: [<br>
     *         // x, y, width, height (6 frames)<br>
     *         0, 0, 49, 109,<br>
     *         52, 0, 49, 109,<br>
     *         105, 0, 49, 109,<br>
     *         158, 0, 49, 109,<br>
     *         210, 0, 49, 109,<br>
     *         262, 0, 49, 109<br>
     *       ],<br>
     *       kicking: [<br>
     *         // x, y, width, height (6 frames)<br>
     *         0, 109, 45, 98,<br>
     *         45, 109, 45, 98,<br>
     *         95, 109, 63, 98,<br>
     *         156, 109, 70, 98,<br>
     *         229, 109, 60, 98,<br>
     *         287, 109, 41, 98<br>
     *       ]<br>          
     *     },<br>
     *     frameRate: 7,<br>
     *     frameIndex: 0<br>
     *   });<br>
     * };<br>
     * imageObj.src = '/path/to/image.jpg'
     */
    Kinetic.Sprite = function(config) {
        this.___init(config);
    };

    Kinetic.Sprite.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Sprite';

            this.anim = new Kinetic.Animation();
            this.on('animationChange.kinetic', function() {
                // reset index when animation changes
                this.frameIndex(0);
            });

            this.sceneFunc(this._sceneFunc);
            this.hitFunc(this._hitFunc);
        },
        _sceneFunc: function(context) {
            var anim = this.getAnimation(),
                index = this.frameIndex(),
                ix4 = index * 4,
                set = this.getAnimations()[anim],
                x =      set[ix4 + 0],
                y =      set[ix4 + 1],
                width =  set[ix4 + 2],
                height = set[ix4 + 3],
                image = this.getImage();

            if(image) {
                context.drawImage(image, x, y, width, height, 0, 0, width, height);
            }
        },
        _hitFunc: function(context) {
            var anim = this.getAnimation(),
                index = this.frameIndex(),
                ix4 = index * 4,
                set = this.getAnimations()[anim],
                width =  set[ix4 + 2],
                height = set[ix4 + 3];

            context.beginPath();
            context.rect(0, 0, width, height);
            context.closePath();
            context.fillShape(this);
        },
        _useBufferCanvas: function() {
            return (this.hasShadow() || this.getAbsoluteOpacity() !== 1) && this.hasStroke();
        },
        /**
         * start sprite animation
         * @method
         * @memberof Kinetic.Sprite.prototype
         */
        start: function() {
            var that = this;
            var layer = this.getLayer();

            /*
             * animation object has no executable function because
             *  the updates are done with a fixed FPS with the setInterval
             *  below.  The anim object only needs the layer reference for
             *  redraw
             */
            this.anim.setLayers(layer);

            this.interval = setInterval(function() {
                that._updateIndex();
            }, 1000 / this.getFrameRate());

            this.anim.start();
        },
        /**
         * stop sprite animation
         * @method
         * @memberof Kinetic.Sprite.prototype
         */
        stop: function() {
            this.anim.stop();
            clearInterval(this.interval);
        },
        _updateIndex: function() {
            var index = this.frameIndex(),
                animation = this.getAnimation(),
                animations = this.getAnimations(),
                anim = animations[animation],
                len = anim.length / 4;

            if(index < len - 1) {
                this.frameIndex(index + 1);
            }
            else {
                this.frameIndex(0);
            }
        }
    };
    Kinetic.Util.extend(Kinetic.Sprite, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Sprite, 'animation');

    /**
     * get/set animation key
     * @name animation
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {String} anim animation key
     * @returns {String}
     * @example
     * // get animation key<br>
     * var animation = sprite.animation();<br><br>
     *
     * // set animation key<br>
     * sprite.animation('kicking');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Sprite, 'animations');

    /**
     * get/set animations map
     * @name animations
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {Object} animations
     * @returns {Object}
     * @example
     * // get animations map<br>
     * var animations = sprite.animations();<br><br>
     * 
     * // set animations map<br>
     * sprite.animations({<br>
     *   standing: [<br>
     *     // x, y, width, height (6 frames)<br>
     *     0, 0, 49, 109,<br>
     *     52, 0, 49, 109,<br>
     *     105, 0, 49, 109,<br>
     *     158, 0, 49, 109,<br>
     *     210, 0, 49, 109,<br>
     *     262, 0, 49, 109<br>
     *   ],<br>
     *   kicking: [<br>
     *     // x, y, width, height (6 frames)<br>
     *     0, 109, 45, 98,<br>
     *     45, 109, 45, 98,<br>
     *     95, 109, 63, 98,<br>
     *     156, 109, 70, 98,<br>
     *     229, 109, 60, 98,<br>
     *     287, 109, 41, 98<br>
     *   ]<br>          
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Sprite, 'image');

    /**
     * get/set image
     * @name image
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {Image} image
     * @returns {Image}
     * @example
     * // get image
     * var image = sprite.image();<br><br>
     *
     * // set image<br>
     * sprite.image(imageObj);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Sprite, 'frameIndex', 0);

    /**
     * set/set animation frame index
     * @name frameIndex
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {Integer} frameIndex
     * @returns {Integer}
     * @example
     * // get animation frame index<br>
     * var frameIndex = sprite.frameIndex();<br><br>
     *
     * // set animation frame index<br>
     * sprite.frameIndex(3);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Sprite, 'frameRate', 17);

    /**
     * get/set frame rate in frames per second.  Increase this number to make the sprite
     *  animation run faster, and decrease the number to make the sprite animation run slower
     *  The default is 17 frames per second
     * @name frameRate
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {Integer} frameRate
     * @returns {Integer}
     * @example
     * // get frame rate<br>
     * var frameRate = sprite.frameRate();<br><br>
     *
     * // set frame rate to 2 frames per second<br>
     * sprite.frameRate(2);
     */

    Kinetic.Factory.backCompat(Kinetic.Sprite, {
        index: 'frameIndex',
        getIndex: 'getFrameIndex',
        setIndex: 'setFrameIndex'
    });

    Kinetic.Collection.mapMethods(Kinetic.Sprite);
})();
;(function () {
    /**
     * Path constructor.
     * @author Jason Follas
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {String} config.data SVG data string
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var path = new Kinetic.Path({<br>
     *   x: 240,<br>
     *   y: 40,<br>
     *   data: 'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',<br>
     *   fill: 'green',<br>
     *   scale: 2<br>
     * });
     */
    Kinetic.Path = function (config) {
        this.___init(config);
    };

    Kinetic.Path.prototype = {
        ___init: function (config) {
            this.dataArray = [];
            var that = this;

            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Path';

            this.dataArray = Kinetic.Path.parsePathData(this.getData());
            this.on('dataChange.kinetic', function () {
                that.dataArray = Kinetic.Path.parsePathData(this.getData());
            });

            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var ca = this.dataArray,
                closedPath = false;

            // context position
            context.beginPath();
            for (var n = 0; n < ca.length; n++) {
                var c = ca[n].command;
                var p = ca[n].points;
                switch (c) {
                    case 'L':
                        context.lineTo(p[0], p[1]);
                        break;
                    case 'M':
                        context.moveTo(p[0], p[1]);
                        break;
                    case 'C':
                        context.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
                        break;
                    case 'Q':
                        context.quadraticCurveTo(p[0], p[1], p[2], p[3]);
                        break;
                    case 'A':
                        var cx = p[0], cy = p[1], rx = p[2], ry = p[3], theta = p[4], dTheta = p[5], psi = p[6], fs = p[7];

                        var r = (rx > ry) ? rx : ry;
                        var scaleX = (rx > ry) ? 1 : rx / ry;
                        var scaleY = (rx > ry) ? ry / rx : 1;

                        context.translate(cx, cy);
                        context.rotate(psi);
                        context.scale(scaleX, scaleY);
                        context.arc(0, 0, r, theta, theta + dTheta, 1 - fs);
                        context.scale(1 / scaleX, 1 / scaleY);
                        context.rotate(-psi);
                        context.translate(-cx, -cy);

                        break;
                    case 'z':
                        context.closePath();
                        closedPath = true;
                        break;
                }
            }

            if (closedPath) {
                context.fillStrokeShape(this);
            }
            else {
                context.strokeShape(this);
            }
        }
    };
    Kinetic.Util.extend(Kinetic.Path, Kinetic.Shape);

    Kinetic.Path.getLineLength = function(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    };
    Kinetic.Path.getPointOnLine = function(dist, P1x, P1y, P2x, P2y, fromX, fromY) {
        if(fromX === undefined) {
            fromX = P1x;
        }
        if(fromY === undefined) {
            fromY = P1y;
        }

        var m = (P2y - P1y) / ((P2x - P1x) + 0.00000001);
        var run = Math.sqrt(dist * dist / (1 + m * m));
        if(P2x < P1x)
            run *= -1;
        var rise = m * run;
        var pt;

        if (P2x === P1x) { // vertical line
            pt = {
                x: fromX,
                y: fromY + rise
            };
        } else if((fromY - P1y) / ((fromX - P1x) + 0.00000001) === m) {
            pt = {
                x: fromX + run,
                y: fromY + rise
            };
        }
        else {
            var ix, iy;

            var len = this.getLineLength(P1x, P1y, P2x, P2y);
            if(len < 0.00000001) {
                return undefined;
            }
            var u = (((fromX - P1x) * (P2x - P1x)) + ((fromY - P1y) * (P2y - P1y)));
            u = u / (len * len);
            ix = P1x + u * (P2x - P1x);
            iy = P1y + u * (P2y - P1y);

            var pRise = this.getLineLength(fromX, fromY, ix, iy);
            var pRun = Math.sqrt(dist * dist - pRise * pRise);
            run = Math.sqrt(pRun * pRun / (1 + m * m));
            if(P2x < P1x)
                run *= -1;
            rise = m * run;
            pt = {
                x: ix + run,
                y: iy + rise
            };
        }

        return pt;
    };

    Kinetic.Path.getPointOnCubicBezier = function(pct, P1x, P1y, P2x, P2y, P3x, P3y, P4x, P4y) {
        function CB1(t) {
            return t * t * t;
        }
        function CB2(t) {
            return 3 * t * t * (1 - t);
        }
        function CB3(t) {
            return 3 * t * (1 - t) * (1 - t);
        }
        function CB4(t) {
            return (1 - t) * (1 - t) * (1 - t);
        }
        var x = P4x * CB1(pct) + P3x * CB2(pct) + P2x * CB3(pct) + P1x * CB4(pct);
        var y = P4y * CB1(pct) + P3y * CB2(pct) + P2y * CB3(pct) + P1y * CB4(pct);

        return {
            x: x,
            y: y
        };
    };
    Kinetic.Path.getPointOnQuadraticBezier = function(pct, P1x, P1y, P2x, P2y, P3x, P3y) {
        function QB1(t) {
            return t * t;
        }
        function QB2(t) {
            return 2 * t * (1 - t);
        }
        function QB3(t) {
            return (1 - t) * (1 - t);
        }
        var x = P3x * QB1(pct) + P2x * QB2(pct) + P1x * QB3(pct);
        var y = P3y * QB1(pct) + P2y * QB2(pct) + P1y * QB3(pct);

        return {
            x: x,
            y: y
        };
    };
    Kinetic.Path.getPointOnEllipticalArc = function(cx, cy, rx, ry, theta, psi) {
        var cosPsi = Math.cos(psi), sinPsi = Math.sin(psi);
        var pt = {
            x: rx * Math.cos(theta),
            y: ry * Math.sin(theta)
        };
        return {
            x: cx + (pt.x * cosPsi - pt.y * sinPsi),
            y: cy + (pt.x * sinPsi + pt.y * cosPsi)
        };
    };
    /*
     * get parsed data array from the data
     *  string.  V, v, H, h, and l data are converted to
     *  L data for the purpose of high performance Path
     *  rendering
     */
    Kinetic.Path.parsePathData = function(data) {
        // Path Data Segment must begin with a moveTo
        //m (x y)+  Relative moveTo (subsequent points are treated as lineTo)
        //M (x y)+  Absolute moveTo (subsequent points are treated as lineTo)
        //l (x y)+  Relative lineTo
        //L (x y)+  Absolute LineTo
        //h (x)+    Relative horizontal lineTo
        //H (x)+    Absolute horizontal lineTo
        //v (y)+    Relative vertical lineTo
        //V (y)+    Absolute vertical lineTo
        //z (closepath)
        //Z (closepath)
        //c (x1 y1 x2 y2 x y)+ Relative Bezier curve
        //C (x1 y1 x2 y2 x y)+ Absolute Bezier curve
        //q (x1 y1 x y)+       Relative Quadratic Bezier
        //Q (x1 y1 x y)+       Absolute Quadratic Bezier
        //t (x y)+    Shorthand/Smooth Relative Quadratic Bezier
        //T (x y)+    Shorthand/Smooth Absolute Quadratic Bezier
        //s (x2 y2 x y)+       Shorthand/Smooth Relative Bezier curve
        //S (x2 y2 x y)+       Shorthand/Smooth Absolute Bezier curve
        //a (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+     Relative Elliptical Arc
        //A (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+  Absolute Elliptical Arc

        // return early if data is not defined
        if(!data) {
            return [];
        }

        // command string
        var cs = data;

        // command chars
        var cc = ['m', 'M', 'l', 'L', 'v', 'V', 'h', 'H', 'z', 'Z', 'c', 'C', 'q', 'Q', 't', 'T', 's', 'S', 'a', 'A'];
        // convert white spaces to commas
        cs = cs.replace(new RegExp(' ', 'g'), ',');
        // create pipes so that we can split the data
        for(var n = 0; n < cc.length; n++) {
            cs = cs.replace(new RegExp(cc[n], 'g'), '|' + cc[n]);
        }
        // create array
        var arr = cs.split('|');
        var ca = [];
        // init context point
        var cpx = 0;
        var cpy = 0;
        for( n = 1; n < arr.length; n++) {
            var str = arr[n];
            var c = str.charAt(0);
            str = str.slice(1);
            // remove ,- for consistency
            str = str.replace(new RegExp(',-', 'g'), '-');
            // add commas so that it's easy to split
            str = str.replace(new RegExp('-', 'g'), ',-');
            str = str.replace(new RegExp('e,-', 'g'), 'e-');
            var p = str.split(',');
            if(p.length > 0 && p[0] === '') {
                p.shift();
            }
            // convert strings to floats
            for(var i = 0; i < p.length; i++) {
                p[i] = parseFloat(p[i]);
            }
            while(p.length > 0) {
                if(isNaN(p[0]))// case for a trailing comma before next command
                    break;

                var cmd = null;
                var points = [];
                var startX = cpx, startY = cpy;
                // Move var from within the switch to up here (jshint)
                var prevCmd, ctlPtx, ctlPty;     // Ss, Tt
                var rx, ry, psi, fa, fs, x1, y1; // Aa


                // convert l, H, h, V, and v to L
                switch (c) {

                    // Note: Keep the lineTo's above the moveTo's in this switch
                    case 'l':
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'L':
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;

                    // Note: lineTo handlers need to be above this point
                    case 'm':
                        var dx = p.shift();
                        var dy = p.shift();
                        cpx += dx;
                        cpy += dy;
                        cmd = 'M';
                        // After closing the path move the current position 
                        // to the the first point of the path (if any). 
                        if(ca.length>2 && ca[ca.length-1].command==='z'){
                            for(var idx=ca.length-2;idx>=0;idx--){
                                if(ca[idx].command==='M'){
                                    cpx=ca[idx].points[0]+dx;
                                    cpy=ca[idx].points[1]+dy;
                                    break;
                                }
                            }
                        }
                        points.push(cpx, cpy);
                        c = 'l';
                        // subsequent points are treated as relative lineTo
                        break;
                    case 'M':
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'M';
                        points.push(cpx, cpy);
                        c = 'L';
                        // subsequent points are treated as absolute lineTo
                        break;

                    case 'h':
                        cpx += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'H':
                        cpx = p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'v':
                        cpy += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'V':
                        cpy = p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'C':
                        points.push(p.shift(), p.shift(), p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'c':
                        points.push(cpx + p.shift(), cpy + p.shift(), cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 'S':
                        ctlPtx = cpx, ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if(prevCmd.command === 'C') {
                            ctlPtx = cpx + (cpx - prevCmd.points[2]);
                            ctlPty = cpy + (cpy - prevCmd.points[3]);
                        }
                        points.push(ctlPtx, ctlPty, p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 's':
                        ctlPtx = cpx, ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if(prevCmd.command === 'C') {
                            ctlPtx = cpx + (cpx - prevCmd.points[2]);
                            ctlPty = cpy + (cpy - prevCmd.points[3]);
                        }
                        points.push(ctlPtx, ctlPty, cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 'Q':
                        points.push(p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'q':
                        points.push(cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'Q';
                        points.push(cpx, cpy);
                        break;
                    case 'T':
                        ctlPtx = cpx, ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if(prevCmd.command === 'Q') {
                            ctlPtx = cpx + (cpx - prevCmd.points[0]);
                            ctlPty = cpy + (cpy - prevCmd.points[1]);
                        }
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'Q';
                        points.push(ctlPtx, ctlPty, cpx, cpy);
                        break;
                    case 't':
                        ctlPtx = cpx, ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if(prevCmd.command === 'Q') {
                            ctlPtx = cpx + (cpx - prevCmd.points[0]);
                            ctlPty = cpy + (cpy - prevCmd.points[1]);
                        }
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'Q';
                        points.push(ctlPtx, ctlPty, cpx, cpy);
                        break;
                    case 'A':
                        rx = p.shift(), ry = p.shift(), psi = p.shift(), fa = p.shift(), fs = p.shift();
                        x1 = cpx, y1 = cpy; cpx = p.shift(), cpy = p.shift();
                        cmd = 'A';
                        points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
                        break;
                    case 'a':
                        rx = p.shift(), ry = p.shift(), psi = p.shift(), fa = p.shift(), fs = p.shift();
                        x1 = cpx, y1 = cpy; cpx += p.shift(), cpy += p.shift();
                        cmd = 'A';
                        points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
                        break;
                }

                ca.push({
                    command: cmd || c,
                    points: points,
                    start: {
                        x: startX,
                        y: startY
                    },
                    pathLength: this.calcLength(startX, startY, cmd || c, points)
                });
            }

            if(c === 'z' || c === 'Z') {
                ca.push({
                    command: 'z',
                    points: [],
                    start: undefined,
                    pathLength: 0
                });
            }
        }

        return ca;
    };
    Kinetic.Path.calcLength = function(x, y, cmd, points) {
        var len, p1, p2;
        var path = Kinetic.Path;

        switch (cmd) {
            case 'L':
                return path.getLineLength(x, y, points[0], points[1]);
            case 'C':
                // Approximates by breaking curve into 100 line segments
                len = 0.0;
                p1 = path.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                for( t = 0.01; t <= 1; t += 0.01) {
                    p2 = path.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                    len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                return len;
            case 'Q':
                // Approximates by breaking curve into 100 line segments
                len = 0.0;
                p1 = path.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
                for( t = 0.01; t <= 1; t += 0.01) {
                    p2 = path.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
                    len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                return len;
            case 'A':
                // Approximates by breaking curve into line segments
                len = 0.0;
                var start = points[4];
                // 4 = theta
                var dTheta = points[5];
                // 5 = dTheta
                var end = points[4] + dTheta;
                var inc = Math.PI / 180.0;
                // 1 degree resolution
                if(Math.abs(start - end) < inc) {
                    inc = Math.abs(start - end);
                }
                // Note: for purpose of calculating arc length, not going to worry about rotating X-axis by angle psi
                p1 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
                if(dTheta < 0) {// clockwise
                    for( t = start - inc; t > end; t -= inc) {
                        p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                        len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        p1 = p2;
                    }
                }
                else {// counter-clockwise
                    for( t = start + inc; t < end; t += inc) {
                        p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                        len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        p1 = p2;
                    }
                }
                p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
                len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);

                return len;
        }

        return 0;
    };
    Kinetic.Path.convertEndpointToCenterParameterization = function(x1, y1, x2, y2, fa, fs, rx, ry, psiDeg) {
        // Derived from: http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
        var psi = psiDeg * (Math.PI / 180.0);
        var xp = Math.cos(psi) * (x1 - x2) / 2.0 + Math.sin(psi) * (y1 - y2) / 2.0;
        var yp = -1 * Math.sin(psi) * (x1 - x2) / 2.0 + Math.cos(psi) * (y1 - y2) / 2.0;

        var lambda = (xp * xp) / (rx * rx) + (yp * yp) / (ry * ry);

        if(lambda > 1) {
            rx *= Math.sqrt(lambda);
            ry *= Math.sqrt(lambda);
        }

        var f = Math.sqrt((((rx * rx) * (ry * ry)) - ((rx * rx) * (yp * yp)) - ((ry * ry) * (xp * xp))) / ((rx * rx) * (yp * yp) + (ry * ry) * (xp * xp)));

        if(fa == fs) {
            f *= -1;
        }
        if(isNaN(f)) {
            f = 0;
        }

        var cxp = f * rx * yp / ry;
        var cyp = f * -ry * xp / rx;

        var cx = (x1 + x2) / 2.0 + Math.cos(psi) * cxp - Math.sin(psi) * cyp;
        var cy = (y1 + y2) / 2.0 + Math.sin(psi) * cxp + Math.cos(psi) * cyp;

        var vMag = function(v) {
            return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
        };
        var vRatio = function(u, v) {
            return (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v));
        };
        var vAngle = function(u, v) {
            return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
        };
        var theta = vAngle([1, 0], [(xp - cxp) / rx, (yp - cyp) / ry]);
        var u = [(xp - cxp) / rx, (yp - cyp) / ry];
        var v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
        var dTheta = vAngle(u, v);

        if(vRatio(u, v) <= -1) {
            dTheta = Math.PI;
        }
        if(vRatio(u, v) >= 1) {
            dTheta = 0;
        }
        if(fs === 0 && dTheta > 0) {
            dTheta = dTheta - 2 * Math.PI;
        }
        if(fs == 1 && dTheta < 0) {
            dTheta = dTheta + 2 * Math.PI;
        }
        return [cx, cy, rx, ry, theta, dTheta, psi, fs];
    };
    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Path, 'data');

    /**
     * set SVG path data string.  This method
     *  also automatically parses the data string
     *  into a data array.  Currently supported SVG data:
     *  M, m, L, l, H, h, V, v, Q, q, T, t, C, c, S, s, A, a, Z, z
     * @name setData
     * @method
     * @memberof Kinetic.Path.prototype
     * @param {String} SVG path command string
     */

    /**
     * get SVG path data string
     * @name getData
     * @method
     * @memberof Kinetic.Path.prototype
     */

     Kinetic.Collection.mapMethods(Kinetic.Path);
})();
;(function() {
    var EMPTY_STRING = '',
        CALIBRI = 'Calibri',
        NORMAL = 'normal';

    /**
     * Path constructor.
     * @author Jason Follas
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {String} [config.fontFamily] default is Calibri
     * @param {Number} [config.fontSize] default is 12
     * @param {String} [config.fontStyle] can be normal, bold, or italic.  Default is normal
     * @param {String} config.text
     * @param {String} config.data SVG data string
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var textpath = new Kinetic.TextPath({<br>
     *   x: 100,<br>
     *   y: 50,<br>
     *   fill: '#333',<br>
     *   fontSize: '24',<br>
     *   fontFamily: 'Arial',<br>
     *   text: 'All the world\'s a stage, and all the men and women merely players.',<br>
     *   data: 'M10,10 C0,0 10,150 100,100 S300,150 400,50'<br>
     * });
     */
    Kinetic.TextPath = function(config) {
        this.___init(config);
    };

    function _fillFunc(context) {
        context.fillText(this.partialText, 0, 0);
    }
    function _strokeFunc(context) {
        context.strokeText(this.partialText, 0, 0);
    }

    Kinetic.TextPath.prototype = {
        ___init: function(config) {
            var that = this;
            this.dummyCanvas = document.createElement('canvas');
            this.dataArray = [];

            // call super constructor
            Kinetic.Shape.call(this, config);

            // overrides
            // TODO: shouldn't this be on the prototype?
            this._fillFunc = _fillFunc;
            this._strokeFunc = _strokeFunc;
            this._fillFuncHit = _fillFunc;
            this._strokeFuncHit = _strokeFunc;
            
            this.className = 'TextPath';

            this.dataArray = Kinetic.Path.parsePathData(this.attrs.data);
            this.on('dataChange.kinetic', function() {
                that.dataArray = Kinetic.Path.parsePathData(this.attrs.data);
            });

            // update text data for certain attr changes
            this.on('textChange.kinetic textStroke.kinetic textStrokeWidth.kinetic', that._setTextData);
            that._setTextData();
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            context.setAttr('font', this._getContextFont());
            context.setAttr('textBaseline', 'middle');
            context.setAttr('textAlign', 'left');
            context.save();

            var glyphInfo = this.glyphInfo;
            for(var i = 0; i < glyphInfo.length; i++) {
                context.save();

                var p0 = glyphInfo[i].p0;

                context.translate(p0.x, p0.y);
                context.rotate(glyphInfo[i].rotation);
                this.partialText = glyphInfo[i].text;

                context.fillStrokeShape(this);
                context.restore();

                //// To assist with debugging visually, uncomment following
                // context.beginPath();
                // if (i % 2)
                // context.strokeStyle = 'cyan';
                // else
                // context.strokeStyle = 'green';
                // var p1 = glyphInfo[i].p1;
                // context.moveTo(p0.x, p0.y);
                // context.lineTo(p1.x, p1.y);
                // context.stroke();
            }
            context.restore();
        },
        /**
         * get text width in pixels
         * @method
         * @memberof Kinetic.TextPath.prototype
         */
        getTextWidth: function() {
            return this.textWidth;
        },
        /**
         * get text height in pixels
         * @method
         * @memberof Kinetic.TextPath.prototype
         */
        getTextHeight: function() {
            return this.textHeight;
        },
        /**
         * set text
         * @method
         * @memberof Kinetic.TextPath.prototype
         * @param {String} text
         */
        setText: function(text) {
            Kinetic.Text.prototype.setText.call(this, text);
        },
        _getTextSize: function(text) {
            var dummyCanvas = this.dummyCanvas;
            var _context = dummyCanvas.getContext('2d');

            _context.save();

            _context.font = this._getContextFont();
            var metrics = _context.measureText(text);

            _context.restore();

            return {
                width: metrics.width,
                height: parseInt(this.attrs.fontSize, 10)
            };
        },
        _setTextData: function() {

            var that = this;
            var size = this._getTextSize(this.attrs.text);
            this.textWidth = size.width;
            this.textHeight = size.height;

            this.glyphInfo = [];

            var charArr = this.attrs.text.split('');

            var p0, p1, pathCmd;

            var pIndex = -1;
            var currentT = 0;

            var getNextPathSegment = function() {
                currentT = 0;
                var pathData = that.dataArray;

                for(var i = pIndex + 1; i < pathData.length; i++) {
                    if(pathData[i].pathLength > 0) {
                        pIndex = i;

                        return pathData[i];
                    }
                    else if(pathData[i].command == 'M') {
                        p0 = {
                            x: pathData[i].points[0],
                            y: pathData[i].points[1]
                        };
                    }
                }

                return {};
            };
            var findSegmentToFitCharacter = function(c, before) {

                var glyphWidth = that._getTextSize(c).width;

                var currLen = 0;
                var attempts = 0;

                p1 = undefined;
                while(Math.abs(glyphWidth - currLen) / glyphWidth > 0.01 && attempts < 25) {
                    attempts++;
                    var cumulativePathLength = currLen;
                    while(pathCmd === undefined) {
                        pathCmd = getNextPathSegment();

                        if(pathCmd && cumulativePathLength + pathCmd.pathLength < glyphWidth) {
                            cumulativePathLength += pathCmd.pathLength;
                            pathCmd = undefined;
                        }
                    }

                    if(pathCmd === {} || p0 === undefined)
                        return undefined;

                    var needNewSegment = false;

                    switch (pathCmd.command) {
                        case 'L':
                            if(Kinetic.Path.getLineLength(p0.x, p0.y, pathCmd.points[0], pathCmd.points[1]) > glyphWidth) {
                                p1 = Kinetic.Path.getPointOnLine(glyphWidth, p0.x, p0.y, pathCmd.points[0], pathCmd.points[1], p0.x, p0.y);
                            }
                            else
                                pathCmd = undefined;
                            break;
                        case 'A':

                            var start = pathCmd.points[4];
                            // 4 = theta
                            var dTheta = pathCmd.points[5];
                            // 5 = dTheta
                            var end = pathCmd.points[4] + dTheta;

                            if(currentT === 0)
                                currentT = start + 0.00000001;
                            // Just in case start is 0
                            else if(glyphWidth > currLen)
                                currentT += (Math.PI / 180.0) * dTheta / Math.abs(dTheta);
                            else
                                currentT -= Math.PI / 360.0 * dTheta / Math.abs(dTheta);

                            // Credit for bug fix: @therth https://github.com/ericdrowell/KineticJS/issues/249
                            // Old code failed to render text along arc of this path: "M 50 50 a 150 50 0 0 1 250 50 l 50 0"
                            if(dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) {
                                currentT = end;
                                needNewSegment = true;
                            }
                            p1 = Kinetic.Path.getPointOnEllipticalArc(pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], currentT, pathCmd.points[6]);
                            break;
                        case 'C':
                            if(currentT === 0) {
                                if(glyphWidth > pathCmd.pathLength)
                                    currentT = 0.00000001;
                                else
                                    currentT = glyphWidth / pathCmd.pathLength;
                            }
                            else if(glyphWidth > currLen)
                                currentT += (glyphWidth - currLen) / pathCmd.pathLength;
                            else
                                currentT -= (currLen - glyphWidth) / pathCmd.pathLength;

                            if(currentT > 1.0) {
                                currentT = 1.0;
                                needNewSegment = true;
                            }
                            p1 = Kinetic.Path.getPointOnCubicBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], pathCmd.points[4], pathCmd.points[5]);
                            break;
                        case 'Q':
                            if(currentT === 0)
                                currentT = glyphWidth / pathCmd.pathLength;
                            else if(glyphWidth > currLen)
                                currentT += (glyphWidth - currLen) / pathCmd.pathLength;
                            else
                                currentT -= (currLen - glyphWidth) / pathCmd.pathLength;

                            if(currentT > 1.0) {
                                currentT = 1.0;
                                needNewSegment = true;
                            }
                            p1 = Kinetic.Path.getPointOnQuadraticBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3]);
                            break;

                    }

                    if(p1 !== undefined) {
                        currLen = Kinetic.Path.getLineLength(p0.x, p0.y, p1.x, p1.y);
                    }

                    if(needNewSegment) {
                        needNewSegment = false;
                        pathCmd = undefined;
                    }
                }
            };
            for(var i = 0; i < charArr.length; i++) {

                // Find p1 such that line segment between p0 and p1 is approx. width of glyph
                findSegmentToFitCharacter(charArr[i]);

                if(p0 === undefined || p1 === undefined)
                    break;

                var width = Kinetic.Path.getLineLength(p0.x, p0.y, p1.x, p1.y);

                // Note: Since glyphs are rendered one at a time, any kerning pair data built into the font will not be used.
                // Can foresee having a rough pair table built in that the developer can override as needed.

                var kern = 0;
                // placeholder for future implementation

                var midpoint = Kinetic.Path.getPointOnLine(kern + width / 2.0, p0.x, p0.y, p1.x, p1.y);

                var rotation = Math.atan2((p1.y - p0.y), (p1.x - p0.x));
                this.glyphInfo.push({
                    transposeX: midpoint.x,
                    transposeY: midpoint.y,
                    text: charArr[i],
                    rotation: rotation,
                    p0: p0,
                    p1: p1
                });
                p0 = p1;
            }
        }
    };

    // map TextPath methods to Text
    Kinetic.TextPath.prototype._getContextFont = Kinetic.Text.prototype._getContextFont;

    Kinetic.Util.extend(Kinetic.TextPath, Kinetic.Shape);

    // add setters and getters
    Kinetic.Factory.addGetterSetter(Kinetic.TextPath, 'fontFamily', 'Arial');

    /**
     * set font family
     * @name setFontFamily
     * @method
     * @memberof Kinetic.TextPath.prototype
     * @param {String} fontFamily
     */

     /**
     * get font family
     * @name getFontFamily
     * @method
     * @memberof Kinetic.TextPath.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.TextPath, 'fontSize', 12);

    /**
     * set font size
     * @name setFontSize
     * @method
     * @memberof Kinetic.TextPath.prototype
     * @param {int} fontSize
     */

     /**
     * get font size
     * @name getFontSize
     * @method
     * @memberof Kinetic.TextPath.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.TextPath, 'fontStyle', NORMAL);

    /**
     * set font style.  Can be 'normal', 'italic', or 'bold'.  'normal' is the default.
     * @name setFontStyle
     * @method
     * @memberof Kinetic.TextPath.prototype
     * @param {String} fontStyle
     */

     /**
     * get font style
     * @name getFontStyle
     * @method
     * @memberof Kinetic.TextPath.prototype
     */

    Kinetic.Factory.addGetter(Kinetic.TextPath, 'text', EMPTY_STRING);

    /**
     * get text
     * @name getText
     * @method
     * @memberof Kinetic.TextPath.prototype
     */

     Kinetic.Collection.mapMethods(Kinetic.TextPath);
})();
;(function() {
    /**
     * RegularPolygon constructor.&nbsp; Examples include triangles, squares, pentagons, hexagons, etc.
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.sides
     * @param {Number} config.radius
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var hexagon = new Kinetic.RegularPolygon({<br>
     *   x: 100,<br>
     *   y: 200,<br>
     *   sides: 6,<br>
     *   radius: 70,<br>
     *   fill: 'red',<br>
     *   stroke: 'black',<br>
     *   strokeWidth: 4<br>
     * });
     */
    Kinetic.RegularPolygon = function(config) {
        this.___init(config);
    };

    Kinetic.RegularPolygon.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'RegularPolygon';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var sides = this.attrs.sides,
                radius = this.attrs.radius,
                n, x, y;

            context.beginPath();
            context.moveTo(0, 0 - radius);

            for(n = 1; n < sides; n++) {
                x = radius * Math.sin(n * 2 * Math.PI / sides);
                y = -1 * radius * Math.cos(n * 2 * Math.PI / sides);
                context.lineTo(x, y);
            }
            context.closePath();
            context.fillStrokeShape(this);
        }
    };
    Kinetic.Util.extend(Kinetic.RegularPolygon, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.RegularPolygon, 'radius', 0);

    /**
     * set radius
     * @name setRadius
     * @method
     * @memberof Kinetic.RegularPolygon.prototype
     * @param {Number} radius
     */

     /**
     * get radius
     * @name getRadius
     * @method
     * @memberof Kinetic.RegularPolygon.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.RegularPolygon, 'sides', 0);

    /**
     * set number of sides
     * @name setSides
     * @method
     * @memberof Kinetic.RegularPolygon.prototype
     * @param {int} sides
     */

    /**
     * get number of sides
     * @name getSides
     * @method
     * @memberof Kinetic.RegularPolygon.prototype
     */

     Kinetic.Collection.mapMethods(Kinetic.RegularPolygon);
})();
;(function() {
    /**
     * Star constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Integer} config.numPoints
     * @param {Number} config.innerRadius
     * @param {Number} config.outerRadius
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowColorRed] set shadow color red component
     * @param {Integer} [config.shadowColorGreen] set shadow color green component
     * @param {Integer} [config.shadowColorBlue] set shadow color blue component
     * @param {Integer} [config.shadowColorAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var star = new Kinetic.Star({<br>
     *   x: 100,<br>
     *   y: 200,<br>
     *   numPoints: 5,<br>
     *   innerRadius: 70,<br>
     *   outerRadius: 70,<br>
     *   fill: 'red',<br>
     *   stroke: 'black',<br>
     *   strokeWidth: 4<br>
     * });
     */
    Kinetic.Star = function(config) {
        this.___init(config);
    };

    Kinetic.Star.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Star';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var innerRadius = this.innerRadius(), 
                outerRadius = this.outerRadius(), 
                numPoints = this.numPoints();

            context.beginPath();
            context.moveTo(0, 0 - outerRadius);

            for(var n = 1; n < numPoints * 2; n++) {
                var radius = n % 2 === 0 ? outerRadius : innerRadius;
                var x = radius * Math.sin(n * Math.PI / numPoints);
                var y = -1 * radius * Math.cos(n * Math.PI / numPoints);
                context.lineTo(x, y);
            }
            context.closePath();

            context.fillStrokeShape(this);
        }
    };
    Kinetic.Util.extend(Kinetic.Star, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Star, 'numPoints', 5);

    /**
     * set number of points
     * @name setNumPoints
     * @method
     * @memberof Kinetic.Star.prototype
     * @param {Integer} points
     */

     /**
     * get number of points
     * @name getNumPoints
     * @method
     * @memberof Kinetic.Star.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Star, 'innerRadius', 0);

    /**
     * set inner radius
     * @name setInnerRadius
     * @method
     * @memberof Kinetic.Star.prototype
     * @param {Number} radius
     */

     /**
     * get inner radius
     * @name getInnerRadius
     * @method
     * @memberof Kinetic.Star.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Star, 'outerRadius', 0);

    /**
     * set outer radius
     * @name setOuterRadius
     * @method
     * @memberof Kinetic.Star.prototype
     * @param {Number} radius
     */

     /**
     * get outer radius
     * @name getOuterRadius
     * @method
     * @memberof Kinetic.Star.prototype
     */

     Kinetic.Collection.mapMethods(Kinetic.Star);
})();
;(function() {
    // constants
    var ATTR_CHANGE_LIST = ['fontFamily', 'fontSize', 'fontStyle', 'padding', 'lineHeight', 'text'],
        CHANGE_KINETIC = 'Change.kinetic',
        NONE = 'none',
        UP = 'up',
        RIGHT = 'right',
        DOWN = 'down',
        LEFT = 'left',
        LABEL = 'Label',

     // cached variables
     attrChangeListLen = ATTR_CHANGE_LIST.length;

    /**
     * Label constructor.&nbsp; Labels are groups that contain a Text and Tag shape
     * @constructor
     * @memberof Kinetic
     * @param {Object} config
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Function} [config.dragBoundFunc]
     * @example
     * // create label
     * var label = new Kinetic.Label({<br>
     *   x: 100,<br>
     *   y: 100, <br>
     *   draggable: true<br>
     * });<br><br>
     *
     * // add a tag to the label<br>
     * label.add(new Kinetic.Tag({<br>
     *   fill: '#bbb',<br>
     *   stroke: '#333',<br>
     *   shadowColor: 'black',<br>
     *   shadowBlur: 10,<br>
     *   shadowOffset: [10, 10],<br>
     *   shadowOpacity: 0.2,<br>
     *   lineJoin: 'round',<br>
     *   pointerDirection: 'up',<br>
     *   pointerWidth: 20,<br>
     *   pointerHeight: 20,<br>
     *   cornerRadius: 5<br>
     * }));<br><br>
     *
     * // add text to the label<br>
     * label.add(new Kinetic.Text({<br>
     *   text: 'Hello World!',<br>
     *   fontSize: 50,<br>
     *   lineHeight: 1.2,<br>
     *   padding: 10,<br>
     *   fill: 'green'<br>
     *  }));
     */
    Kinetic.Label = function(config) {
        this.____init(config);
    };

    Kinetic.Label.prototype = {
        ____init: function(config) {
            var that = this;

            this.className = LABEL;
            Kinetic.Group.call(this, config);

            this.on('add.kinetic', function(evt) {
                that._addListeners(evt.child);
                that._sync();
            });
        },
        /**
         * get Text shape for the label.  You need to access the Text shape in order to update
         * the text properties
         * @name getText
         * @method
         * @memberof Kinetic.Label.prototype
         */
        getText: function() {
            return this.find('Text')[0];
        },
        /**
         * get Tag shape for the label.  You need to access the Tag shape in order to update
         * the pointer properties and the corner radius
         * @name getTag
         * @method
         * @memberof Kinetic.Label.prototype
         */
        getTag: function() {
            return this.find('Tag')[0];
        },
        _addListeners: function(text) {
            var that = this,
                n;
            var func = function(){
                    that._sync();
                };

            // update text data for certain attr changes
            for(n = 0; n < attrChangeListLen; n++) {
                text.on(ATTR_CHANGE_LIST[n] + CHANGE_KINETIC, func);
            }
        },
        getWidth: function() {
            return this.getText().getWidth();
        },
        getHeight: function() {
            return this.getText().getHeight();
        },
        _sync: function() {
            var text = this.getText(),
                tag = this.getTag(),
                width, height, pointerDirection, pointerWidth, x, y;

            if (text && tag) {
                width = text.getWidth(),
                height = text.getHeight(),
                pointerDirection = tag.getPointerDirection(),
                pointerWidth = tag.getPointerWidth(),
                pointerHeight = tag.getPointerHeight(),
                x = 0,
                y = 0;

                switch(pointerDirection) {
                    case UP:
                        x = width / 2;
                        y = -1 * pointerHeight;
                        break;
                    case RIGHT:
                        x = width + pointerWidth;
                        y = height / 2;
                        break;
                    case DOWN:
                        x = width / 2;
                        y = height + pointerHeight;
                        break;
                    case LEFT:
                        x = -1 * pointerWidth;
                        y = height / 2;
                        break;
                }

                tag.setAttrs({
                    x: -1 * x,
                    y: -1 * y,
                    width: width,
                    height: height
                });

                text.setAttrs({
                    x: -1 * x,
                    y: -1 * y
                });
            }
        }
    };

    Kinetic.Util.extend(Kinetic.Label, Kinetic.Group);

    Kinetic.Collection.mapMethods(Kinetic.Label);

    /**
     * Tag constructor.&nbsp; A Tag can be configured
     *  to have a pointer element that points up, right, down, or left
     * @constructor
     * @memberof Kinetic
     * @param {Object} config
     * @param {String} [config.pointerDirection] can be up, right, down, left, or none; the default
     *  is none.  When a pointer is present, the positioning of the label is relative to the tip of the pointer.
     * @param {Number} [config.pointerWidth]
     * @param {Number} [config.pointerHeight]
     * @param {Number} [config.cornerRadius]
     */
    Kinetic.Tag = function(config) {
        this.___init(config);
    };

    Kinetic.Tag.prototype = {
        ___init: function(config) {
            Kinetic.Shape.call(this, config);
            this.className = 'Tag';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var width = this.getWidth(),
                height = this.getHeight(),
                pointerDirection = this.getPointerDirection(),
                pointerWidth = this.getPointerWidth(),
                pointerHeight = this.getPointerHeight(),
                cornerRadius = this.getCornerRadius();

            context.beginPath();
            context.moveTo(0,0);

            if (pointerDirection === UP) {
                context.lineTo((width - pointerWidth)/2, 0);
                context.lineTo(width/2, -1 * pointerHeight);
                context.lineTo((width + pointerWidth)/2, 0);
            }

            context.lineTo(width, 0);

            if (pointerDirection === RIGHT) {
                context.lineTo(width, (height - pointerHeight)/2);
                context.lineTo(width + pointerWidth, height/2);
                context.lineTo(width, (height + pointerHeight)/2);
            }

            context.lineTo(width, height);

            if (pointerDirection === DOWN) {
                context.lineTo((width + pointerWidth)/2, height);
                context.lineTo(width/2, height + pointerHeight);
                context.lineTo((width - pointerWidth)/2, height);
            }

            context.lineTo(0, height);

            if (pointerDirection === LEFT) {
                context.lineTo(0, (height + pointerHeight)/2);
                context.lineTo(-1 * pointerWidth, height/2);
                context.lineTo(0, (height - pointerHeight)/2);
            }

            context.closePath();
            context.fillStrokeShape(this);
        }
    };

    Kinetic.Util.extend(Kinetic.Tag, Kinetic.Shape);
    Kinetic.Factory.addGetterSetter(Kinetic.Tag, 'pointerDirection', NONE);

    /**
     * set pointer Direction
     * @name setPointerDirection
     * @method
     * @memberof Kinetic.Tag.prototype
     * @param {String} pointerDirection can be up, right, down, left, or none.  The
     *  default is none
     */

     /**
     * get pointer Direction
     * @name getPointerDirection
     * @method
     * @memberof Kinetic.Tag.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Tag, 'pointerWidth', 0);

    /**
     * set pointer width
     * @name setPointerWidth
     * @method
     * @memberof Kinetic.Tag.prototype
     * @param {Number} pointerWidth
     */

     /**
     * get pointer width
     * @name getPointerWidth
     * @method
     * @memberof Kinetic.Tag.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Tag, 'pointerHeight', 0);

    /**
     * set pointer height
     * @name setPointerHeight
     * @method
     * @memberof Kinetic.Tag.prototype
     * @param {Number} pointerHeight
     */

     /**
     * get pointer height
     * @name getPointerHeight
     * @method
     * @memberof Kinetic.Tag.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Tag, 'cornerRadius', 0);

    /**
     * set corner radius
     * @name setCornerRadius
     * @method
     * @memberof Kinetic.Tag.prototype
     * @param {Number} corner radius
     */

    /**
     * get corner radius
     * @name getCornerRadius
     * @method
     * @memberof Kinetic.Tag.prototype
     */

     Kinetic.Collection.mapMethods(Kinetic.Tag);
})();
(function(E){var K,h,L,D,u,l,O,N,p=100,A;var T,Q,B,H,a,s,w,R,y,i,j=91,o="px";var J=[],c,t;var f=null,M=null,I=null,k=null;var b=[],e=[],n=[],d=[];var m=[];var r=[];var S="";var K=new Image();var g=0,C=0,q=0,z=0;var G=false;initStage=function(){h=new Kinetic.Stage({container:"container",width:E.innerWidth,height:E.innerHeight,id:"smartStage"});L=new Kinetic.Layer();D=new Kinetic.Layer();question_container_readlayer=new Kinetic.Layer();h.add(L);h.add(D);h.add(question_container_readlayer)};clearAllLayers=function(){if(D){D.clear();D.removeChildren();D.draw();L.removeChildren();L.draw()}};clearShuffleLayers=function(){if(D){D.clear();D.removeChildren();D.draw();L.draw()}};var F=false;createdummyCanvas=function(){K.onload=function(){u=new Kinetic.Image({image:K});L.add(u)};K.src="data:image/png;base64,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"};createCanvas=function(X,W,U,V){V==0?V=100:V;w=V;K.onload=function(){u=new Kinetic.Image({image:K});L.add(u);F=true;console.log(K.width);console.log("background image Scale "+u.getScale().x+"Top "+u.getScale().y);console.log("background image "+u.getWidth()+"height "+u.getHeight());console.log("background image "+u.getX()+"Top "+u.getY()+"and"+u.getWidth()*1.8);imgLoadDone()};K.src="";K.src="data:image/png;base64,"+X};var v=null;buildControls=function(V){if(adjustImageViewPort(w)){dataString=$(V);var U=0;v=getLocalFolderAnswers();$(dataString).find("DetailProperties").each(function(){var W="";if(v.listExcerciseModes){W=v.listExcerciseModes[0].listControls[U].CtlValue}document.getElementById("main").appendChild(creatTextControls($(this).find("CtlName").text(),$(this).find("CtlX").text(),$(this).find("CtlY").text(),$(this).find("CtlWidth").text(),$(this).find("CtlHt").text(),$(this).find("CtlDefaultValue").text(),$(this).find("CtlFontFamily").text(),$(this).find("CtlFontSize").text(),$(this).find("CtlFontStyle").text(),$(this).find("CtlFontColor").text(),W));U++})}$.ui.hideMask()};showQuestionLayer=function(U){console.log("question container layer "+U);if(U){D.show();D.draw();question_container_readlayer.hide();question_container_readlayer.draw()}else{D.hide();D.draw();question_container_readlayer.show();question_container_readlayer.draw()}};hideQuestionLayer=function(U){D.hide();D.draw();question_container_readlayer.hide();question_container_readlayer.draw()};adjustControls=function(){adjustImageViewPort(w)};adjustImageViewPort=function(X){try{console.log("image width"+K.width);R=K.width*(X/100);y=K.height*(X/100);var W=E.innerWidth/R;var U=(E.innerHeight-j)/y;i=(U<W)?U:W;u.setHeight(y*i);u.setWidth(R*i);setContainerandImage(y*i,R*i,i);return true}catch(V){alert("error in Adjust imageView"+V);return true}};setContainerandImage=function(V,W,Z){$("#container").height(V);$("#container").width(W);var U=document.getElementById("container");U.style.position="absolute";console.log("container width"+U.offsetWidth);var Y=s=E.innerWidth/2-parseInt((W+2)/2);var X=a=(E.innerHeight-j)/2-parseInt((V)/2);U.style.left=Y+o;U.style.top=X+o;h.setWidth(W);h.setHeight(V);L.draw();h.draw()};resizeStage=function(V){var U=0,W=55,X=10;if(V=="landscape"){U=30;p=0;W=85;X=5}else{console.log("potrait mode")}console.log("window inner width and height : "+E.innerWidth+"and"+E.innerHeight);h.draw();console.log("stage inner width and height : "+h.getWidth()+"and"+h.getHeight());L.draw();for(prop=0,x=m.length;prop<x;prop++){resetQuestionLayers(m[prop],U,V)}for(prop=0,x=r.length;prop<x;prop++){resetQuestionLayers(r[prop],U,V)}D.draw();question_container_readlayer.draw()};resetQuestionLayers=function(X,V,Y){var U=X;var W=U.grpObj;W.setX((parseInt(V)*i));W.setY((parseInt(Y)*i));D.draw()};createQuestionRandomControls=function(U,ab,Z,V,ad,W){var aa={};var ac=new Kinetic.Group({x:parseInt((parseInt(ab)/R)*E.innerWidth),y:parseInt((parseInt(Z)/R)*E.innerHeight),width:parseInt((parseInt(V)/800)*E.innerWidth),height:parseInt((parseInt(ad)/600)*E.innerHeight),id:"dragRand"+U});var Y=new Kinetic.Text({fontSize:8,fontFamily:"Calibri",text:S,fill:"black",padding:8,align:"center"});var X=new Kinetic.Rect({width:(parseInt((parseInt(V)/800)*E.innerWidth)+15),height:(parseInt((parseInt(ad)/600)*E.innerHeight)-8),fill:"#aaf",stroke:"black",strokeWidth:0.9,id:"ranRects"+U});ac.add(X).add(Y);question_container_readlayer.add(ac);aa.grpObj=ac;aa.left=ab;aa.top=Z;aa.width=V;aa.height=ad;r.push(aa);ac.draw();question_container_readlayer.draw();ac.on("mousedown",function(af){console.log("mouse click event"+this.children[1].attrs.text);var ae=H.children[1].attrs.text;if(ac.children[1].attrs.text==S){this.children[1].setText(ae);ac.draw();question_container_readlayer.draw();randomSelectSliceItem(H);H.draw();question_container_readlayer.draw()}})};createDragControls=function(ag,an,ac,ab,ah,af,aj,al,X,Y,W,ai){var V={};var aa=E.innerWidth/R;var ae=y/E.innerHeight;var am=false;var ak=new Kinetic.Group({x:parseInt((parseInt(ac)*i)),y:parseInt((parseInt(ab)*i)),draggable:true,id:"drag"+an,name:ag});console.log("div group top left"+ak.getX()+"and"+ak.getY());var Z="black";if(getPracticeMode()){Z="red"}if(ai.length){if(ai.toUpperCase()==aj.toUpperCase()){Z="green";am=true}aj=ai}var ad=new Kinetic.Text({fontSize:parseFloat(X)*i,fontFamily:"Calibri",text:aj,fill:Z,padding:5,width:parseInt(ah)*i});var U=new Kinetic.Rect({width:ad.getWidth(),height:ad.getHeight(),fill:"white",stroke:Z,strokeWidth:2,id:"rect"+ag});ak.add(U).add(ad);if(am){ak.children[0].setFill("white");ak.children[0].setStroke("green");ak.children[0].setStrokeWidth(2)}ak.on("dragstart",function(){ak.children[0].setFill("yellow");console.log("drag start"+ak.getX()+"and"+ak.getY());T=ak.getX();Q=ak.getY();console.log(ak.getX());this.moveToTop()});ak.on("dragend",function(){console.log("drag end"+ak.getX()+"and"+ak.getY());findOverLapControl(ak)});V.grpObj=ak;V.id=ak.attrs.id;V.left=ak.getX();V.top=ak.getY();V.width=ah;V.height=af;m.push(V);D.add(ak);D.draw()};randomSelectSliceItem=function(U){if(A.length){randObj=A.splice(Math.floor(Math.random()*A.length),1)[0];U.setWidth(randObj.width);U.setHeight(randObj.height);return U.children[1].setText(randObj.value)}U.hide();return""};getQuestionContainerLayer=function(){return D};findOverLapControl=function(V){setShuffleEdit(true);V.children[0].setFill("white");var W=false;for(prop=0,x=D.children.length;prop<x;prop++){if(D.children[prop].attrs.id!=V.attrs.id){var W=P(V,D.children[prop]);B=D.children[prop];if(W){break}}}if(W){attempCount($("#shuffleNoAttempts"));console.log(V.children[1].attrs.text+"and"+D.children[prop].children[1].attrs.text+"and result "+W);console.log("draw x and y with collision"+T+"and"+Q);var U=D.children[prop].attrs.id.split("drag")[1];isAnsCorrect=checkAnswer(V.children[1].attrs.text,U);isSwapCtrlAnsCorrect=checkAnswer(B.children[1].attrs.text,V.attrs.id.split("drag")[1]);console.log("collision occurs swap the groups");var Y=D.children[prop].children[1].attrs.text;D.children[prop].children[1].setText(V.children[1].attrs.text);V.children[1].setText(Y);setKinectControlTopLeft(V);V.children[0].setWidth(V.children[1].getWidth());V.children[0].setHeight(V.children[1].getHeight());D.children[prop].children[0].setWidth(D.children[prop].children[1].getWidth());D.children[prop].children[0].setHeight(D.children[prop].children[1].getHeight());C++;var X=parseInt(document.getElementById("shuffleQuestTotal").innerText.split("/")[1]);if(isAnsCorrect){count=parseInt(document.getElementById("shuffleResult").innerHTML);if(count<X){document.getElementById("shuffleResult").innerHTML=count+1}if(getPracticeMode()){D.children[prop].children[0].setFill("white");D.children[prop].children[0].setStroke("green");D.children[prop].children[0].setStrokeWidth(2);D.children[prop].children[1].setFill("green")}}setShuffleControl(V.attrs.id,V.children[1].attrs.text,isSwapCtrlAnsCorrect);if(isSwapCtrlAnsCorrect){count=parseInt(document.getElementById("shuffleResult").innerHTML);if(count<X){document.getElementById("shuffleResult").innerHTML=count+1}if(getPracticeMode()){V.children[0].setFill("white");V.children[0].setStroke("green");V.children[0].setStrokeWidth(2);V.children[1].setFill("green")}}setShuffleControl(D.children[prop].attrs.id,D.children[prop].children[1].attrs.text,isAnsCorrect);checkShuffleCounterNeedsStop(C);V.draw();D.draw()}else{console.log("draw x and y withot collision"+T+"and"+Q);setKinectControlTopLeft(V);console.log("draw parent x and y withot collision"+V.getX()+"and"+V.getY())}fixCanvasDrawBug(document.getElementById("container"))};setShuffleControl=function(W,V,U){I={};I.ctrlId=W;I.ctrlValue=V;I.isAnsRight=U;n.push(I)};setKinectControlTopLeft=function(U){for(var V in m){if(U.attrs.id==m[V].id){U.setX(m[V].left);U.setY(m[V].top);break}}U.draw();D.draw()};function P(aa,Y){var W=false;var V=aa.getY();var Z=aa.getY()+aa.children[0].attrs.height;var ae=aa.getX();var X=aa.getX()+aa.children[0].attrs.width;var ad=Y.getY();var U=Y.getY()+Y.children[0].attrs.height;var ac=Y.getX();var ab=Y.getX()+Y.children[0].attrs.width;if(!(Z<ad||V>U||ae>ab||X<ac)){W=true}return W}fixCanvasDrawBug=function(U){var V=$(U).parent();var W=$(U).detach();V.append(W)};creatComboControls=function(U,ac,aa,V,ad,Y,Z,af,W,X,ae){var ab=document.createElement("select");ab.id="cmb"+U;console.log("create select"+ab.id);setControlTopLeft(ab,ac,aa);ab=setControlHeightWidth(ab,V,ad);ab.style.width=V+o;ab.style.height=ad+o;ab.style.background="white";ab.style.color="black";ab.style.fontSize=parseFloat(af)*i+o;ab.addEventListener("change",handleChangeSelection,false);ab.addEventListener("mouseout",cmbMouseOut,true);setRightWrongAnswer(ab,Y,ae);return(ab)};cmbMouseOut=function(U){};handleChangeSelection=function(U){setSelectEdit(true);var X=(this.id);ctrlId=X.split("cmb")[1];lblSelectCtrl=document.getElementById("lblSelect"+ctrlId);var W=document.getElementById(this.id).options[this.selectedIndex].text;console.log("change text"+document.getElementById(this.id).options[this.selectedIndex].text);isAnsCorrect=checkAnswer(document.getElementById(this.id).options[this.selectedIndex].text,X.split("cmb")[1]);var V=document.getElementById(this.id);z++;if(isAnsCorrect){count=parseInt(document.getElementById("multiSelectResult").innerHTML);totalScore=parseInt(document.getElementById("mulQuestTotal").innerText.split("/")[1]);if(count<totalScore){document.getElementById("multiSelectResult").innerHTML=count+1}setRightAnswer(document.getElementById("lblSelect"+ctrlId))}else{setWrongAnswer(document.getElementById("lblSelect"+ctrlId))}lblSelectCtrl.innerHTML=W;$("#lblSelect"+ctrlId).fadeIn();$("#"+X).fadeOut();attempCount($("#multiNoAttempts"));checkMultiCounterNeedsStop(z);k={};k.ctrlId=X;k.ctrlValue=W;k.isAnsRight=isAnsCorrect;d.push(k)};creatTextControls=function(U,ac,aa,V,ad,Y,Z,af,W,X,ae){var ab=document.createElement("input");ab.id=U;ab.type="text";ab.style.background="white";ab=setControlHeightWidth(ab,V,ad);ab=setControlTopLeft(ab,ac,aa);ab.addEventListener("mouseout",handleMouseOut,false);ab.value=ae;ab.style.fontSize=parseFloat(af)*i+o;console.log("font size: "+parseFloat(af)*i+o);setRightWrongAnswer(ab,Y,ae);return(ab)};creatReadOnlyTextControls=function(U,ac,aa,V,ad,W,Z,ae,X,Y){var ab=document.createElement("div");ab.id="lbl"+U;ab.innerHTML=W;ab.style.background="white";ab.style.border="2px solid";ab=setControlHeightWidth(ab,V,ad);ab=setControlTopLeft(ab,ac,aa);ab.style.fontSize=parseFloat(ae)*i+o;return(ab)};creatReadClickControls=function(U,ac,aa,V,ad,Y,Z,af,W,X,ae){$("#cmb"+U).fadeOut();var ab=document.createElement("div");ab.id="lblSelect"+U;ab.innerHTML=ae;ab.style.background="white";ab=setControlHeightWidth(ab,V,ad);ab=setControlTopLeft(ab,ac,aa);ab.style.paddingTop=(parseInt(ad)*i)/4+o;ab.style.textAlign="center";ab.style.fontSize=parseFloat(af)*i+o;ab.addEventListener("click",this.clickReadSelectControl.bind(this,Y),false);setRightWrongAnswer(ab,Y,ae);return(ab)};clickReadSelectControl=function(U,W){var V=W.target.id;ctrlId=V.split("lblSelect")[1];$("#"+V).hide();$("#cmb"+ctrlId).fadeIn();showDropdown("cmb"+ctrlId,U)};showDropdown=function(V,U){var W=document.getElementById(V);var X;X=document.createEvent("MouseEvents");X.initMouseEvent("mousedown",true,true,E);W.dispatchEvent(X)};creatClickControls=function(U,ac,aa,V,ad,Y,Z,af,W,X,ae){var ab=document.createElement("div");ab.id="clk"+U;ab.innerHTML=ae;ab.style.background="white";ab=setControlHeightWidth(ab,V,ad);ab=setControlTopLeft(ab,ac,aa);ab.addEventListener("click",clickAnswerSelect,false);ab.style.fontSize=parseFloat(af)*i+o;setRightWrongAnswer(ab,Y,ae);return(ab)};clickAnswerSelect=function(X){var U=X.target.id;var V=document.getElementById(U);if(V.innerText==S||v.listExcerciseModes){setRandomEdit(true);var W=document.getElementById("randAnswerDiv");V.innerText=W.innerText;isAnsCorrect=checkAnswer(W.innerText,U.split("clk")[1]);q++;if(isAnsCorrect){count=parseInt(document.getElementById("randSelectResult").innerHTML);totalScore=parseInt(document.getElementById("randQuestTotal").innerText.split("/")[1]);if(count<totalScore){document.getElementById("randSelectResult").innerHTML=count+1}V.style.border="2px solid";setRightAnswer(V)}else{setWrongAnswer(V)}attempCount($("#randomNoAttempts"));I={};I.ctrlId=V.id;I.ctrlValue=V.innerText;I.isAnsRight=isAnsCorrect;n.push(I);randomMultiCounterNeedsStop(q);randomSelectSliceDivItem(W)}};randomSelectSliceDivItem=function(U){if(A.length){randObj=A.splice(Math.floor(Math.random()*A.length),1)[0];U.innerText=randObj.value;$("#randAnswerDiv").fadeOut(200);$("#randAnswerDiv").fadeIn(500);return true}$("#randAnswerDiv").fadeOut(200);return""};createRandDivControl=function(U,V){A=V.slice()};setControlHeightWidth=function(V,W,U){W=parseInt(W)*i;U=parseInt(U)*i;V.style.width=W+o;V.style.height=U+o;return V};setControlTopLeft=function(W,U,X){U=parseInt(U)*i;console.log(U+"px");X=parseInt(X)*i;var V=document.getElementById("container");W.style.position="absolute";W.style.color="black";console.log("input left"+U+"container"+V.offsetLeft);W.style.left=s+U+o;W.style.top=a+X+o;W.style.zIndex=10;W.style.fontWeight="Regular";W.style.fontFamily="Microsoft Sans Serif";return W};handleMouseOut=function(V){var X=(V.fromElement.id);if(document.getElementById(X).value.length){setTypeEdit(true);console.log(document.getElementById(X).value);var W=document.getElementById(X);var U=checkAnswer(document.getElementById(X).value,W.id);count=parseInt(document.getElementById("typAnsResult").innerHTML);totalScore=parseInt(document.getElementById("questTotal").innerText.split("/")[1]);g++;attempCount($("#noAttempts"));if(U){if(count<totalScore){document.getElementById("typAnsResult").innerHTML=count+1}setRightAnswer(W);W.readOnly=true;checkAnsCounterNeedsStop(g)}else{setWrongAnswer(W);checkAnsCounterNeedsStop(g)}f={};f.ctrlId=W.id;f.ctrlValue=W.value;f.isAnsRight=U;b.push(f)}};attempCount=function(U){if(U.text().length==0){U.text(1)}else{U.text(parseInt(U.text())+1)}};checkAnswer=function(X,W){var V=false;arrControlObj=getDataSet();for(var Y=0,U=arrControlObj.length;Y<U;Y++){if(arrControlObj[Y].id==W){if(arrControlObj[Y].value.toLowerCase()==X.toLowerCase()){V=true;break}}}return V};setWrongAnswer=function(U){if(getPracticeMode()){U.style.borderColor="red";U.style.border="2px solid";U.style.color="red"}};setRightAnswer=function(U){if(getPracticeMode()){U.style.borderColor="green";U.style.border="2px solid";U.style.color="green"}};setRightWrongAnswer=function(V,U,W){setWrongAnswer(V);if(W.length){if(W.toUpperCase()==U.toUpperCase()){setRightAnswer(V)}}};getExerciseColl=function(U){switch(U){case"typeAns":J.push(b);break;case"shuffleAns":J.push(e);break;case"randSelAns":J.push(n);break;case"multiSelAns":J.push(d);break}return J};getActivity=function(){};setLeft=function(U){console.log("set orientaion controls render "+E.orientation);switch(E.orientation){case 0:case 180:return parseInt(U/2.2-5);break;case -90:case 90:if(U>=200&&U<=300){return parseInt(U)-30}if(U>=301&&U<=400){return parseInt(U)-40}if(U>=401&&U<=450){return parseInt(U)-70}if(U>=451&&U<=501){return parseInt(U)-80}if(U>=501&&U<=850){return parseInt(U)-90}break}return U};setTop=function(U){switch(E.orientation){case 0:case 180:parseInt(U/1.2);break;case -90:case 90:if(U>=150&&U<=200){return parseInt(U)-80}if(U>201&&U<=251){return parseInt(U)-110}if(U>=251&&U<=275){return parseInt(U)-150}if(U>=276&&U<=300){return parseInt(U)-170}if(U>=301&&U<=400){return parseInt(U)-160}if(U>=401&&U<=550){return parseInt(U)-230}return parseInt(U)-50;break}return U};adjustControlsBasedOnViewPort=function(X){for(var V=0;V<=X.length-1;V++){var Z=document.getElementById(X[V].id);if(typeof Z!="undefined"&&Z!=null){setControlTopLeft(Z,X[V].left,X[V].top);setControlHeightWidth(Z,X[V].width,X[V].height);setWrongAnswer(Z)}var W=document.getElementById("lbl"+X[V].id);if(typeof W!="undefined"&&W!=null){setControlTopLeft(W,X[V].left,X[V].top);setControlHeightWidth(W,X[V].width,X[V].height)}var Y=document.getElementById("cmb"+X[V].id);if(typeof Y!="undefined"&&Y!=null){setControlTopLeft(Y,X[V].left,X[V].top);setControlHeightWidth(Y,X[V].width,X[V].height);setWrongAnswer(Y)}var U=document.getElementById("clk"+X[V].id);if(typeof U!="undefined"&&U!=null){setControlTopLeft(U,X[V].left,X[V].top);setControlHeightWidth(U,X[V].width,X[V].height);setWrongAnswer(U)}if(m.length>0){for(prop=0,x=m.length;prop<x;prop++){divGrp=m[prop];if(divGrp.grpObj.children[1].attrs.text==X[V].value){resetQuestionLayers(divGrp,X[V].left,X[V].top);break}}}}};resizeInputControls=function(X,Y){console.log("build item for orientaion change");for(var W=0;W<=Y.length-1;W++){var V=document.getElementById("lbl"+Y[W].id);if(V!=null){console.log("label item name get value "+Y[W].value);V.style.left=setLeft(Y[W].left)+o;V.style.top=setTop(Y[W].top)+o}var U=document.getElementById(Y[W].id);if(U!=null){U.style.left=setLeft(Y[W].left)+o;U.style.top=setTop(Y[W].top)+o}var Z=document.getElementById("cmb"+Y[W].id);if(Z!=null){Z.style.left=setLeft(Y[W].left)+o;Z.style.top=setTop(Y[W].top)+o}divGrp=m[W];resetQuestionLayers(divGrp,Y[W].left,Y[W].top)}}})(window);
var appStorage=function(){this.openLocalDb=function(){try{db=window.sqlitePlugin.openDatabase({name:"attachments"});db.transaction(this.getFiles,this.transaction_error())}catch(a){console.log("db error occured"+a)}};this.getFiles=function(a){alert(a);var b="SELECT _id,filename,content from mail_attachments";a.executeSql(b,[],this.getFile_success())};this.transaction_error=function(a,b){alert("error");$.ui.hideMask();$("#errorMsg").show()};this.getFile_success=function(b,e){$("#errorMsg").hide();objResult=e;var a=objResult.rows.length;while(a>=1){var d=objResult.rows.item(a-1);var c=d.filename;c=c.split(".")[0];var f=parseInt(d._id);$("#fileList").append("<li><a href='#main' onclick='getContents("+f+");' >"+c+"</a></li>");a--}$.ui.hideMask()};this.getTypeData=function(){return"hello"};this.setTypeData=function(){return"true"}};
var clsStopwatch=function(){var a=0;var c=0;var b=function(){return(new Date()).getTime()};this.start=function(){a=a?a:b()};this.stop=function(){c=a?c+b()-a:c;a=0};this.reset=function(){c=a=0};this.time=function(){return c+(a?b()-a:0)}};var x=new clsStopwatch();var $time;var clocktimer;function pad(a,b){var c="0000"+a;return c.substr(c.length-b)}function formatTime(c){var a=m=s=ms=0;var b="";a=Math.floor(c/(60*60*1000));c=c%(60*60*1000);m=Math.floor(c/(60*1000));c=c%(60*1000);s=Math.floor(c/1000);ms=c%1000;b=pad(m,2)+":"+pad(s,2);return b}function show(){$time=document.getElementById("time");update()}function update(){$($time).text(formatTime(x.time()))}function getUpdateTime(){$($time).text(formatTime(x.time()))}function watchStart1(a){$time=a;clocktimer=setInterval("update()",1);x.start()}function watchStop1(){x.stop();clearInterval(clocktimer)}function watchReset(){stop();x.reset();update()}function start(){clocktimer=setInterval("update()",1);x.start()}function stop(){x.stop();clearInterval(clocktimer)}function reset(){stop();x.reset();update()};