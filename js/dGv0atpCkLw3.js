(function(){const config = {"snippetKey":"dGv0atpCkLw3","sendTo":"https://data.debugbear.com","version":7,"sampling":1,"domains":["now.gg"],"includeSubdomains":false,"deployedAt":1727001486355,"privacy":{"text":true,"selectors":true,"queryParams":true,"engagement":true},"hasProxy":false,"mappings":[],"pageGroups":[]};(()=>{var it,wt,x=function(){var t=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(t&&t.responseStart>0&&t.responseStart<performance.now())return t},z=function(t){if(document.readyState==="loading")return"loading";var e=x();if(e){if(t<e.domInteractive)return"loading";if(e.domContentLoadedEventStart===0||t<e.domContentLoadedEventStart)return"dom-interactive";if(e.domComplete===0||t<e.domComplete)return"dom-content-loaded"}return"complete"},De=function(t){var e=t.nodeName;return t.nodeType===1?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},st=function(t,e){var n="";try{for(;t&&t.nodeType!==9;){var r=t,i=r.id?"#"+r.id:De(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+i.length>(e||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;t=r.parentNode}}catch{}return n},At=-1,Dt=function(){return At},B=function(t){addEventListener("pageshow",function(e){e.persisted&&(At=e.timeStamp,t(e))},!0)},X=function(){var t=x();return t&&t.activationStart||0},E=function(t,e){var n=x(),r="navigate";return Dt()>=0?r="back-forward-cache":n&&(document.prerendering||X()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:t,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},q=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver(function(i){Promise.resolve().then(function(){e(i.getEntries())})});return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch{}},b=function(t,e,n,r){var i,a;return function(o){e.value>=0&&(o||r)&&((a=e.value-(i||0))||i===void 0)&&(i=e.value,e.delta=a,e.rating=function(s,u){return s>u[1]?"poor":s>u[0]?"needs-improvement":"good"}(e.value,n),t(e))}},ut=function(t){requestAnimationFrame(function(){return requestAnimationFrame(function(){return t()})})},K=function(t){document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&t()})},ct=function(t){var e=!1;return function(){e||(t(),e=!0)}},A=-1,Lt=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},$=function(t){document.visibilityState==="hidden"&&A>-1&&(A=t.type==="visibilitychange"?t.timeStamp:0,Ne())},Ct=function(){addEventListener("visibilitychange",$,!0),addEventListener("prerenderingchange",$,!0)},Ne=function(){removeEventListener("visibilitychange",$,!0),removeEventListener("prerenderingchange",$,!0)},Nt=function(){return A<0&&(A=Lt(),Ct(),B(function(){setTimeout(function(){A=Lt(),Ct()},0)})),{get firstHiddenTime(){return A}}},Y=function(t){document.prerendering?addEventListener("prerenderingchange",function(){return t()},!0):t()},Mt=[1800,3e3],xt=function(t,e){e=e||{},Y(function(){var n,r=Nt(),i=E("FCP"),a=q("paint",function(o){o.forEach(function(s){s.name==="first-contentful-paint"&&(a.disconnect(),s.startTime<r.firstHiddenTime&&(i.value=Math.max(s.startTime-X(),0),i.entries.push(s),n(!0)))})});a&&(n=b(t,i,Mt,e.reportAllChanges),B(function(o){i=E("FCP"),n=b(t,i,Mt,e.reportAllChanges),ut(function(){i.value=performance.now()-o.timeStamp,n(!0)})}))})},kt=[.1,.25],Bt=function(t,e){(function(n,r){r=r||{},xt(ct(function(){var i,a=E("CLS",0),o=0,s=[],u=function(d){d.forEach(function(p){if(!p.hadRecentInput){var m=s[0],S=s[s.length-1];o&&p.startTime-S.startTime<1e3&&p.startTime-m.startTime<5e3?(o+=p.value,s.push(p)):(o=p.value,s=[p])}}),o>a.value&&(a.value=o,a.entries=s,i())},c=q("layout-shift",u);c&&(i=b(n,a,kt,r.reportAllChanges),K(function(){u(c.takeRecords()),i(!0)}),B(function(){o=0,a=E("CLS",0),i=b(n,a,kt,r.reportAllChanges),ut(function(){return i()})}),setTimeout(i,0))}))})(function(n){var r=function(i){var a,o={};if(i.entries.length){var s=i.entries.reduce(function(c,d){return c&&c.value>d.value?c:d});if(s&&s.sources&&s.sources.length){var u=(a=s.sources).find(function(c){return c.node&&c.node.nodeType===1})||a[0];u&&(o={largestShiftTarget:st(u.node),largestShiftTime:s.startTime,largestShiftValue:s.value,largestShiftSource:u,largestShiftEntry:s,loadState:z(s.startTime)})}}return Object.assign(i,{attribution:o})}(n);t(r)},e)},qt=function(t,e){xt(function(n){var r=function(i){var a={timeToFirstByte:0,firstByteToFCP:i.value,loadState:z(Dt())};if(i.entries.length){var o=x(),s=i.entries[i.entries.length-1];if(o){var u=o.activationStart||0,c=Math.max(0,o.responseStart-u);a={timeToFirstByte:c,firstByteToFCP:i.value-c,loadState:z(i.entries[0].startTime),navigationEntry:o,fcpEntry:s}}}return Object.assign(i,{attribution:a})}(n);t(r)},e)},Ot=0,nt=1/0,G=0,xe=function(t){t.forEach(function(e){e.interactionId&&(nt=Math.min(nt,e.interactionId),G=Math.max(G,e.interactionId),Ot=G?(G-nt)/7+1:0)})},Ft=function(){return it?Ot:performance.interactionCount||0},Be=function(){"interactionCount"in performance||it||(it=q("event",xe,{type:"event",buffered:!0,durationThreshold:0}))},y=[],_=new Map,_t=0,qe=function(){var t=Math.min(y.length-1,Math.floor((Ft()-_t)/50));return y[t]},Ut=[],Oe=function(t){if(Ut.forEach(function(i){return i(t)}),t.interactionId||t.entryType==="first-input"){var e=y[y.length-1],n=_.get(t.interactionId);if(n||y.length<10||t.duration>e.latency){if(n)t.duration>n.latency?(n.entries=[t],n.latency=t.duration):t.duration===n.latency&&t.startTime===n.entries[0].startTime&&n.entries.push(t);else{var r={id:t.interactionId,latency:t.duration,entries:[t]};_.set(r.id,r),y.push(r)}y.sort(function(i,a){return a.latency-i.latency}),y.length>10&&y.splice(10).forEach(function(i){return _.delete(i.id)})}}},lt=function(t){var e=self.requestIdleCallback||self.setTimeout,n=-1;return t=ct(t),document.visibilityState==="hidden"?t():(n=e(t),K(t)),n},Rt=[200,500],Fe=function(t,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},Y(function(){var n;Be();var r,i=E("INP"),a=function(s){lt(function(){s.forEach(Oe);var u=qe();u&&u.latency!==i.value&&(i.value=u.latency,i.entries=u.entries,r())})},o=q("event",a,{durationThreshold:(n=e.durationThreshold)!==null&&n!==void 0?n:40});r=b(t,i,Rt,e.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),K(function(){a(o.takeRecords()),r(!0)}),B(function(){_t=Ft(),y.length=0,_.clear(),i=E("INP"),r=b(t,i,Rt,e.reportAllChanges)}))}))},D=[],L=[],ot=0,ft=new WeakMap,N=new Map,at=-1,_e=function(t){D=D.concat(t),Wt()},Wt=function(){at<0&&(at=lt(Ue))},Ue=function(){N.size>10&&N.forEach(function(o,s){_.has(s)||N.delete(s)});var t=y.map(function(o){return ft.get(o.entries[0])}),e=L.length-50;L=L.filter(function(o,s){return s>=e||t.includes(o)});for(var n=new Set,r=0;r<L.length;r++){var i=L[r];Vt(i.startTime,i.processingEnd).forEach(function(o){n.add(o)})}var a=D.length-1-50;D=D.filter(function(o,s){return o.startTime>ot&&s>a||n.has(o)}),at=-1};Ut.push(function(t){t.interactionId&&t.target&&!N.has(t.interactionId)&&N.set(t.interactionId,t.target)},function(t){var e,n=t.startTime+t.duration;ot=Math.max(ot,t.processingEnd);for(var r=L.length-1;r>=0;r--){var i=L[r];if(Math.abs(n-i.renderTime)<=8){(e=i).startTime=Math.min(t.startTime,e.startTime),e.processingStart=Math.min(t.processingStart,e.processingStart),e.processingEnd=Math.max(t.processingEnd,e.processingEnd),e.entries.push(t);break}}e||(e={startTime:t.startTime,processingStart:t.processingStart,processingEnd:t.processingEnd,renderTime:n,entries:[t]},L.push(e)),(t.interactionId||t.entryType==="first-input")&&ft.set(t,e),Wt()});var Vt=function(t,e){for(var n,r=[],i=0;n=D[i];i++)if(!(n.startTime+n.duration<t)){if(n.startTime>e)break;r.push(n)}return r},jt=function(t,e){wt||(wt=q("long-animation-frame",_e)),Fe(function(n){var r=function(i){var a=i.entries[0],o=ft.get(a),s=a.processingStart,u=o.processingEnd,c=o.entries.sort(function(v,et){return v.processingStart-et.processingStart}),d=Vt(a.startTime,u),p=i.entries.find(function(v){return v.target}),m=p&&p.target||N.get(a.interactionId),S=[a.startTime+a.duration,u].concat(d.map(function(v){return v.startTime+v.duration})),T=Math.max.apply(Math,S),f={interactionTarget:st(m),interactionTargetElement:m,interactionType:a.name.startsWith("key")?"keyboard":"pointer",interactionTime:a.startTime,nextPaintTime:T,processedEventEntries:c,longAnimationFrameEntries:d,inputDelay:s-a.startTime,processingDuration:u-s,presentationDelay:Math.max(T-u,0),loadState:z(a.startTime)};return Object.assign(i,{attribution:f})}(n);t(r)},e)},Pt=[2500,4e3],rt={},Ht=function(t,e){(function(n,r){r=r||{},Y(function(){var i,a=Nt(),o=E("LCP"),s=function(d){r.reportAllChanges||(d=d.slice(-1)),d.forEach(function(p){p.startTime<a.firstHiddenTime&&(o.value=Math.max(p.startTime-X(),0),o.entries=[p],i())})},u=q("largest-contentful-paint",s);if(u){i=b(n,o,Pt,r.reportAllChanges);var c=ct(function(){rt[o.id]||(s(u.takeRecords()),u.disconnect(),rt[o.id]=!0,i(!0))});["keydown","click"].forEach(function(d){addEventListener(d,function(){return lt(c)},!0)}),K(c),B(function(d){o=E("LCP"),i=b(n,o,Pt,r.reportAllChanges),ut(function(){o.value=performance.now()-d.timeStamp,rt[o.id]=!0,i(!0)})})}})})(function(n){var r=function(i){var a={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:i.value};if(i.entries.length){var o=x();if(o){var s=o.activationStart||0,u=i.entries[i.entries.length-1],c=u.url&&performance.getEntriesByType("resource").filter(function(T){return T.name===u.url})[0],d=Math.max(0,o.responseStart-s),p=Math.max(d,c?(c.requestStart||c.startTime)-s:0),m=Math.max(p,c?c.responseEnd-s:0),S=Math.max(m,u.startTime-s);a={element:st(u.element),timeToFirstByte:d,resourceLoadDelay:p-d,resourceLoadDuration:m-p,elementRenderDelay:S-m,navigationEntry:o,lcpEntry:u},u.url&&(a.url=u.url),c&&(a.lcpResourceEntry=c)}}return Object.assign(i,{attribution:a})}(n);t(r)},e)},It=[800,1800],We=function t(e){document.prerendering?Y(function(){return t(e)}):document.readyState!=="complete"?addEventListener("load",function(){return t(e)},!0):setTimeout(e,0)},Ve=function(t,e){e=e||{};var n=E("TTFB"),r=b(t,n,It,e.reportAllChanges);We(function(){var i=x();i&&(n.value=Math.max(i.responseStart-X(),0),n.entries=[i],r(!0),B(function(){n=E("TTFB",0),(r=b(t,n,It,e.reportAllChanges))(!0)}))})},Gt=function(t,e){Ve(function(n){var r=function(i){var a={waitingDuration:0,cacheDuration:0,dnsDuration:0,connectionDuration:0,requestDuration:0};if(i.entries.length){var o=i.entries[0],s=o.activationStart||0,u=Math.max((o.workerStart||o.fetchStart)-s,0),c=Math.max(o.domainLookupStart-s,0),d=Math.max(o.connectStart-s,0),p=Math.max(o.connectEnd-s,0);a={waitingDuration:u,cacheDuration:c-u,dnsDuration:d-c,connectionDuration:p-d,requestDuration:i.value-p,navigationEntry:o}}return Object.assign(i,{attribution:a})}(n);t(r)},e)};var je=typeof config<"u"?config:typeof _dbbRumConfig<"u"?_dbbRumConfig:{},g=je;function dt(t){return Math.round(t*1e3)/1e3}function J(){return Math.round(document.documentElement?.scrollTop??0)}function C(t){window.__dbbRumDebug&&console.log(t)}function h(t,e){return t.slice().sort((n,r)=>e(n)-e(r))}function Q(t){return O(t,200)}function O(t,e){if(!t)return;let n=g.privacy?.queryParams!==!1,r=t.split("?");return n?r[1]&&(t=r[0]+"?"+Z(r[1])):t=r[0],t.startsWith("data:")?t.slice(0,20):t.length<e?t:t.slice(0,e)+"\u2026"}function M(t,e){return t.length<=e?t:t.slice(0,e)+"\u2026"}function Z(t){if(g?.privacy?.queryParams===!1)return"";let e=[];return new URLSearchParams(t).forEach((n,r)=>{let i=r.toLowerCase();["password","token","code","fbclid","twclid","gclid","state"].includes(i)||i.includes("token")||He(n)||e.push(r+(n?"="+n:""))}),e.join("&")}function He(t){return/.*@.*\..*/.test(t)}function $t(t){return`${t.toString(36)}${(Math.random()*Number.MAX_SAFE_INTEGER).toString(36)}`}function U(t){return function(...e){try{t.apply(this,e)}catch(n){reportError(n)}}}var zt=g.sendTo||"https://data.debugbear.com/",Xt=U(function t(e,n){let r=JSON.stringify(e);if(navigator.sendBeacon&&n==="beacon")try{navigator.sendBeacon(zt,r)}catch{t(e,"fetch")}else fetch(zt,{method:"POST",headers:{"Content-Type":"application/json"},mode:"no-cors",body:r})});var Kt=3;function Ge(t){return typeof t=="object"&&t!==null&&"message"in t}function ze(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t=="symbol"||typeof t=="bigint"}function $e(t){let e=Xe(t)?t.error:t.reason;return Ge(e)?e:ze(e)||e==null?{message:String(e),stack:null}:{message:JSON.stringify(e),stack:"stack"in e?e.stack.toString():null}}function Xe(t){return t instanceof ErrorEvent}function Ke(t,e){return[t,M(e.message,80)]}function Yt(t,e){if(e?.length>=Kt)return e.slice(0,Kt);let n=$e(t);return[...e||[],Ke(t.timeStamp,n)]}function Jt(t,e){t=h(t,r=>-r.duration);let n=null;if(e){let r=t.find(i=>{let a=i.startTime+i.duration;return i.startTime<=e&&a>=e});if(r)n=r;else{let i=h(t,a=>Math.abs(e-a.startTime))[0];i&&Math.abs(e-i.startTime)<75&&(n=i)}}return n?[pt(n)]:[]}function pt(t){let e=t.scripts,n=h(e,i=>e.indexOf(i)===e.length-1?-1e6:-i.duration),r=h(n.slice(0,6),i=>i.startTime);return{sT:Math.round(t.startTime),d:t.duration,ui:Math.round(t.firstUIEventTimestamp),rs:Math.round(t.renderStart),sls:Math.round(t.styleAndLayoutStart),scr:r.map(i=>{let a=i.sourceFunctionName;return{sT:Math.round(i.startTime),eS:Math.round(i.executionStart),d:i.duration,p:Math.round(i.pauseDuration),sl:Math.round(i.forcedStyleAndLayoutDuration),n:O(i.invoker,175),l:i.sourceURL?[typeof a=="string"?a.slice(0,80):a,typeof i.sourceURL=="string"?O(i.sourceURL,175):i.sourceURL,i.sourceCharPosition]:i.sourceLocation,t:i.invokerType||i.type}})}}var Zt=3,te=60,ee=1,tt=1e3;function k(t,e){let n=e?.privacy?.text!==!1;if(!t||!n)return null;if(t?.tagName==="BODY")return"(BODY)";let r=Ye(t);return!r&&t?.alt&&(r=t?.alt),r&&r.trim()?r.replace(/[ \n]+/g," ").trim().slice(0,te):t.children?.length>0?ne(t):null}function Ye(t){return mt(t,0).text}function mt(t,e,n=!1){let r=t?.tagName,i="",a=null;try{a=t?.labels?.[0]}catch{}let o="";if(!n&&a){let s=mt(a,e,!0);e+=s.iterations,o=s.text+" "}return r==="SCRIPT"||r==="STYLE"?i="":!n&&r==="TEXTAREA"?i=o+"[textarea]":!n&&r==="INPUT"?i=o+"[input:"+t.type.toLowerCase()+"]":r==="svg"?i="(svg)":t.childNodes.forEach(s=>{if(e++,e>tt||i.trim().length>=te)return;let u=s.nodeType;if(u===Zt)i+=(s.nodeValue||"").replace(/[A-Za-z0-9.+]+@[A-Za-z0-9.]+\.[a-zA-Z]+/g,"[email]");else if(u===ee){let c=mt(s,e,n);e=c.iterations,i+=c.text}}),{text:i,iterations:e}}function ne(t){for(let e of t.children){let n=Qt(e);if(n){let r="";for(let i of e.children){let a=Qt(i);if(a){r=a;break}}return"HTML: "+[n,r].filter(i=>!!i).join(", ")}else{let r=ne(e);if(r)return r}}}function R(t,e){let n=e?.privacy?.selectors!==!1;return!t||!n?null:Je(t).join(">")}function Je(t){let e=[],n=0,r=0,i=0;for(;t&&(n++,!(n>tt));){if(t.tagName==="BODY"){e.length===0&&e.push("body");break}if(e.length>40)break;if(t.nodeType===ee){let a=e.length<8?t.tagName.toLowerCase():"*",o=W(t);t.id&&t.id.length<40?(a+=`#${t.id}`,r++):o&&o.length<25&&(i<3||e.length%3===0)&&(a+=`.${o}`,i++);let s=t.parentNode?.children||[];if(s.length>1&&(a+=`:${Array.from(s).indexOf(t)+1}`),e.push(a),r>=2||r>=1&&i>=3)break}t=t.parentNode}for(e=e.reverse();e[0]==="*"&&(n++,!(n>tt));)e.shift();return e}function Qt(t){if(t.id)return"#"+t.id;let e=W(t);return e?"."+e:null}function W(t){return typeof t.className!="string"?null:t.className.trim().split(" ")[0].slice(0,35)}function P(t,e){let n=e?.privacy?.selectors!==!1;if(!t||!n)return null;t.nodeType===Zt&&(t=t.parentNode);let r=!1,i=t.tagName.toLowerCase();t.id?i+="#"+t.id:W(t)&&(i+="."+W(t),r=!0);let a=t.parentNode,o=[],s=0;for(;a&&(s++,!(s>tt));){let u=W(a);if(a.id){o.push("#"+a.id);break}else if(["HEADER","FOOTER","NAV"].includes(a.tagName)){o.push(a.tagName.toLowerCase());break}else u&&!r&&(o.push("."+u),r=!0);a=a.parentNode}return(o.reverse().join(" ")+" "+i).trim()}var re=null;function ie(t){re=t}function gt(t){return t.renderBlockingStatus==="blocking"}var Qe={img:1,link:2,script:3,css:4,xmlhttprequest:5,fetch:6,other:7};function Ze(t){let e=ht(t),n=t.name,r=t.initiatorType,i=Qe[r]||0,a=gt(t),o=0;a&&(o|=1);let s=n.startsWith(location.origin),u=`="${n}"`;if(s)try{let m=new URL(n);u=`$="${m.pathname}${n.includes("?")?m.search:""}"`}catch(m){C(m)}if(r==="link"){let m=document.querySelector(`link[href${u}]`);m&&(m.rel==="preload"&&(o|=2),m.fetchPriority==="high"&&(o|=8))}if(r==="img"){let m=document.querySelector(`img[src${u}]`);m&&m.fetchPriority==="high"&&(o|=8)}let c=oe(t);c&&(o|=16),t.deliveryType==="cache"&&(o|=32);let d=c,p=n.slice(0,20);try{if(d)p=Q(n);else{let m=new URL(n),S=m.hostname.slice(0,25),T;if(m.pathname.length<30)T=m.pathname;else{let f=m.pathname.split("/").slice(-2),v=f[1]?f[1]:f[0];T="\u2026/"+(v.length<30?v:v.slice(0,10)+"\u2026"+v.slice(-18))}p=S+(T.startsWith("/")?T:"/"+T)}}catch(m){return C(m),null}return{array:[p,e.start,e.sw+e.redirect,e.dns,e.tcp,e.tls,e.req,e.download,o,t.transferSize,i],isBlocking:a,isLcp:c,entry:t}}function ht(t){let e=Math.round(t.domainLookupEnd-t.domainLookupStart),n=t.secureConnectionStart?t.secureConnectionStart:t.connectEnd,r=Math.round(n-t.connectStart),i=t.secureConnectionStart?Math.round(t.connectEnd-t.secureConnectionStart):0,a=Math.round(t.responseStart-(t.connectEnd?t.connectEnd:t.requestStart)),o=Math.round(t.responseEnd-(t.responseStart||t.startTime)),s=Math.round(t.redirectEnd),u=t.redirectEnd?Math.round((t.domainLookupStart||t.fetchStart)-t.redirectEnd-t.startTime):Math.round((t.domainLookupStart||t.fetchStart)-t.startTime);return{start:Math.round(t.startTime),sw:u,redirect:s,dns:e,tcp:r,tls:i,req:a,download:o}}function oe(t){return t.name===re}function ae(t){let e=Array.from(performance.getEntriesByType("resource")).filter(f=>f.name!==""),n=e.filter(f=>{if(f.startTime>8e3)return!1;let v=t.lcp?.value;if(v){let et=f.startTime+f.duration,Ae=v+1e3;return et<Ae}return!0}),r=n.slice(0,4),i=n.find(f=>oe(f)),a=h(n.filter(f=>gt(f)),f=>f.responseEnd).reverse().slice(0,3),o=h(n.filter(f=>gt(f)),f=>f.duration).reverse().slice(0,2),s=h(n,f=>f.duration).reverse().slice(0,2),u=h(n,f=>f.transferSize).reverse().slice(0,2),c=n.find(f=>f.initiatorType==="img"),d=n.find(f=>f.initiatorType==="script"),p=t.inp?.startTime,m=t.inp?.value,S=p?e.filter(f=>f.startTime>p&&f.startTime<p+m+2).slice(0,4):[],T=new Set([...r,i,...a,...o,...s,...u,c,d,...S]);return e.filter(f=>T.has(f)).map(f=>Ze(f)?.array).filter(Boolean)}var ue={ttfb:(t,e,n)=>{e.value=Math.round(t.value);let r=t.entries[0];if(n.navigationType=t.navigationType,r){let{sw:i,redirect:a,dns:o,tcp:s,tls:u,req:c,download:d}=ht(r);e.sw=i,e.redirect=a,e.dns=o,e.tcp=s,e.tls=u,e.req=c,e.download=d,e.transferSize=Math.round(r.transferSize)}return e},cls:(t,e)=>{e.value=dt(t.value);let{attribution:n}=t,{largestShiftSource:r}=n;if(!r)return;let i=r.node;return e.startTime=n.largestShiftTime,e.text=k(i,g),e.selector=P(i,g),e.path=R(i,g),e.shift=se(r.previousRect).join(",")+"-"+se(r.currentRect).join(","),e.mainValue=dt(n.largestShiftValue),e.scrollTop=J(),e},lcp:(t,e)=>{e.value=Math.round(t.value);let n=t.entries[0];if(n){ie(n.url),e.url=Q(n.url);let r=n.element;r&&(e.selector=P(r,g),e.text=k(r,g),e.path=R(r,g))}return e},inp:(t,e)=>{if(e.value=Math.round(t.value),t.entries.length===0)return;let{attribution:n}=t;e.breakdown=[n.inputDelay,n.processingDuration,n.presentationDelay].map(a=>Math.round(a));let r=n.interactionTargetElement;e.name=n.interactionType,e.startTime=Math.round(n.interactionTime),e.selector=P(r,g),e.text=k(r,g),e.path=R(r,g);let i=n.longAnimationFrameEntries;return i.length>0&&(e.loafs=i.map(a=>pt(a))),e},fcp:(t,e)=>(e.value=Math.round(t.value),e)};function se(t){return[t.left,t.top,t.right,t.bottom]}function ce(t,e,n,r,i=null){return r.find(a=>{let{type:o,paths:s,cssSelector:u,urlRegExps:c}=a;if(o==="url")return s.length===0?!1:s.some(d=>tn(d).test(e));if(o==="urlRegExp"){let d=t+e+(n&&"?"+n);return c.some(p=>new RegExp(p).test(d))}else if(o==="selector"&&u&&i)return!!i(u)})}function tn(t){let e="^"+t.replace(/(\*\*?)/g,function(n){return n==="**"?".*":"[^/]*"})+"/?$";return new RegExp(e)}function le(){let t={},e=0;return[...performance.getEntriesByType("navigation"),...performance.getEntriesByType("resource")].forEach(n=>{if(!n.name?.includes(location.origin))return;let i=n.transferSize;e+=i;let a=en(n);t[a]=t[a]||null,t[a]+=i}),["html","css","script","image","media","font","fetch","other"].map(n=>t[n]||0)}function en(t){let{initiatorType:e,contentType:n,name:r}=t;return e==="navigation"||n&&n.includes("html")?"html":n&&n.includes("css")||e==="link"&&r?.includes("css")?"css":n&&n.includes("font")?"font":e==="script"?"script":e==="img"?"image":e==="fetch"||e==="xmlhttprequest"?"fetch":e==="audio"||e==="video"?"media":"other"}var fe=35;function de(t,e){let n=performance.getEntriesByType("mark"),r=performance.getEntriesByType("measure"),i=[];if(t){let o=t+e,s=r.filter(u=>u.startTime+u.duration>=t&&u.startTime<=o);i=h(s,u=>-u.duration).slice(0,4)}let a=h(r,o=>-o.duration).slice(0,3);return[n.slice(0,4).map(o=>[M(o.name,fe),Math.round(o.startTime)]),r.filter(o=>i.includes(o)||a.includes(o)).map(o=>[M(o.name,fe),Math.round(o.startTime),Math.round(o.duration)])]}function pe(t,e){let n=t?.domains;return!Array.isArray(n)||!n.length||!e?!0:n.some(i=>{let a=i.toLowerCase(),o=e.toLowerCase();return!!(o===a||o.endsWith("."+a)&&t.includeSubdomains)})}var F=Math.round(performance.timeOrigin??window.performance?.timing?.connectStart),Ee=80,be=200,V=navigator.connection?.downlink||null;V&&V>1&&(V=Math.round(V/2)*2);var nn=M(location.pathname,be),Se=null;try{Se=new URL(document.referrer).hostname}catch{}var rn=performance.getEntriesByType?performance.getEntriesByType("navigation")[0]:null,on=rn?.notRestoredReasons?.reasons?.[0]?.reason,we=location.search,l={id:$t(F),date:F,origin:location.origin.slice(0,Ee),path:nn,query:Z(we),screenWidth:screen.width,dpr:Math.round(window.devicePixelRatio*100)/100,windowWidth:Math.round(window.outerWidth/10)*10,windowHeight:Math.round(window.outerHeight/10)*10,navigationType:null,nrr:on,visibilityState:document.visibilityState,pageTitle:Ie(),deployedAt:g.deployedAt,snippetVersion:14,configVersion:g.version,sendIndex:0,conn:{bw:V,rtt:navigator.connection?.rtt,type:navigator.connection?.effectiveType},memory:navigator?.deviceMemory||null,cpu:navigator?.hardwareConcurrency||null,rd:Se,userAgent:navigator.userAgent},me=location.hash.slice(1);me&&(l.hash=me.slice(0,100));var bt=g?.privacy?.engagement!==!1,Et=[],j=[];mn();var I=[],vt=location.pathname,Tt=location.search.slice(1);bt&&window.navigation?.addEventListener("navigate",t=>{let e=t.destination.url;try{let n=new URL(e),r=n.pathname,i=Z(n.search);if(r===vt&&i===Tt)return;let a=Date.now()-F;I=I.filter(o=>a-o.ms>100),I.push({ms:a,path:r!==vt?r:void 0,query:i!==Tt?i:void 0,timeStampMs:Math.round(t.timeStamp),navigationType:t.navigationType}),vt=r,Tt=i,l.navigationCount=I.length,l.navigations=I.slice(0,6)}catch{}});var ge=null;function an(){clearTimeout(ge),ge=setTimeout(()=>{j=Re(j)},2e3)}function sn(t){let e=Date.now(),n=[],r=P(t,g);n.push(Date.now()-e),e=Date.now();let i=k(t,g);n.push(Date.now()-e),e=Date.now();let a=R(t,g);return n.push(Date.now()-e),{selector:r,text:i,path:a,_dur:n}}g.snippetKey&&(l.snippetKey=g.snippetKey);var Le=()=>ce(location.hostname,location.pathname,location.search.slice(1),un,document.querySelector.bind(document)),un=g.pageGroups||[],he=Le(),H,Ce=100;if(typeof he?.sampling=="number")H=he.sampling;else{let t=g.sampling;H=typeof t=="number"?t:100}var w={push:function([t,e]){C({action:t,param:e}),t==="sampling"&&(H=e),t==="presampling"&&(Ce=e),["tag1","tag2","tag3","tag4","tag5"].includes(t)&&(l[t]=(e+"").slice(0,140)),["metric1","metric2","metric3","metric4","metric5"].includes(t)&&(l[t]=Math.round(e*100)/100),(t==="error"||t==="unhandledrejection")&&(l.err=Yt(e,l.err))}},ve=window.dbbRum;ve?.forEach&&ve.forEach(t=>{w.push(t)});var cn=H/Ce*100,Me=Math.random()*100>100-cn;C({sampling:H,isIncludedInSample:Me});var ln=U(function(e){C(e);let n=e.name.toLowerCase(),r=e.value;n==="inp"&&e.entries.length===0||(l[n]=ue[n](e,l[n]??{},l))});[Gt,qt,Ht,Bt,jt].map(t=>t(ln,{reportAllChanges:!0}));var fn=pe(g,location.hostname),yt=null,Te=null,St=U(function(e){if(!Me||!["https:","http:"].includes(location.protocol))return;let n=yt&&new Date().valueOf()-yt.valueOf();if(n&&n<80||!fn)return;dn(),ke();let r=JSON.stringify({...l,sendIndex:void 0,sendTrigger:void 0,sentAt:void 0,requests:l.requests?{...l.requests,count:void 0}:l.requests});r!==Te&&(Te=r,yt=new Date,l.sendTrigger=e,Xt(l,e==="SET_TIMEOUT_TRIGGER"?"fetch":"beacon"),l.sendIndex++)});function dn(){if(!g.mappings)return;let t=function(n,r){return performance.getEntriesByType(n).slice(0,1e3).find(i=>i.name.includes(r))},e={urlQueryParam:n=>new URLSearchParams(we).get(n),requestStartTime:n=>t("resource",n)?.startTime,requestEndTime:n=>{let r=t("resource",n);return r?r.startTime+r.duration:null},requestDuration:n=>t("resource",n)?.duration,performanceMark:n=>t("mark",n)?.startTime,performanceMeasure:n=>t("measure",n)?.duration};g.mappings.forEach(n=>{if(l[n.mapping])return;let r=n.autoCollectionType,i=n.autoCollectionParam,a=e[r]?e[r](i):void 0;a&&w.push([n.mapping,a])})}var ye=!1;function ke(){if(l.sentAt=Date.now(),!ye){let r=Le();r&&r.type==="selector"&&(l.pgId=r.id)}l.navigationCount=I.length,l.navigations=I.slice(0,6);let t=performance.getEntriesByType("navigation")[0];l.dcl=Math.round(t?.domContentLoadedEventStart),l.load=Math.round(t?.loadEventStart);let e=Pe(),n=e&&"deliveryType"in e[0]?e.filter(r=>r.deliveryType==="cache").length:null;if(l.requests={blocking:vn(),count:e.length,cache:n},l.reqs||(l.reqs=ae(l)),l.pageTitle||(l.pageTitle=Ie()),l.ut=de(l.inp?.startTime,l.inp?.value),l.inp&&(!l.inp?.loafs||l.inp.loafs.length===0)){let r=Tn();r.length>0&&(l.inp.loafs=r)}l.fppw=le(),l.events=h([...Et,...Re(j)],r=>r.ms),ye=!0}var pn="setTimeout";setTimeout(()=>{St(pn)},8e3);addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&St("visibilitychange")});window.dbbRum=w;w._getNodeText=k;w._getNodePath=R;w._getNodeSelector=P;w._experience=l;w._sendExperience=St;w._prep=ke;function mn(){gn(),hn()}function gn(){let t=null,e=250;if(bt){let n=()=>{clearTimeout(t),t=setTimeout(r,e)},r=()=>{let i=document.documentElement.scrollHeight;if(i<500)return;let a=J()/i;a>.5&&(Et.push({type:"scroll50",ms:Date.now()-F-e}),window.removeEventListener("scroll",n)),a>.9&&(Et.push({type:"scroll90",ms:Date.now()-F-e}),window.removeEventListener("scroll",n))};window.addEventListener("scroll",n)}}function hn(){if(bt){let t=U(function(n){let r=n.target,i=Math.round(n.timeStamp);if(!r.closest)return;let a=r.closest("a,button"),o=a||r,s=a?"click":"oc",u=!j.find(p=>p.type===s),c=l.inp?.value;if(!u&&c){let m=(Date.now()-F-i)*4;if(c>m)return}let d={type:s,ms:i,...sn(o)};j.push(d),an()});window.addEventListener("click",t)}}function Re(t){let e=t.find(o=>o.type==="click"),n=t.find(o=>o.type==="oc"),r=null,i=l.inp?.startTime,a=l.inp?.value;if(i&&a){let o=i+a;r=t.filter(u=>i<u.ms+25&&o+25>u.ms)[0]}return t.filter(o=>o===e||o===n||o===r)}function vn(){let t=Pe().filter(i=>i.renderBlockingStatus==="blocking"),e=0;t.forEach(i=>{i.responseEnd>e&&(e=i.responseEnd)});let n=t.find(i=>i.responseEnd===e),r;return n&&(r={start:Math.round(n.startTime),end:Math.round(n.responseEnd),size:n.decodedBodySize,url:O(n.name,Ee+be),type:n.initiatorType}),{last:r,count:t.length}}function Pe(){return[...performance.getEntriesByType("resource")||[],...performance.getEntriesByType("navigation")||[]]}function Tn(){return Jt(performance.getEntriesByName("long-animation-frame")||[],l.inp?.startTime)}function Ie(){return(document.title||"").slice(0,100)}})();
})();