(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30325,e=>{"use strict";let t=(0,e.i(75254).default)("table-2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);e.s(["Table2",()=>t],30325)},59208,e=>{"use strict";let t=(0,e.i(75254).default)("calendar-clock",[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);e.s(["CalendarClock",()=>t],59208)},35212,e=>{"use strict";let t="dsmodelpro:";function r(){try{return window.localStorage}catch{return null}}function a(e,a){let s=r();if(!s)return a;try{let r=s.getItem(t+e);if(!r)return a;return JSON.parse(r)}catch{return a}}function s(e,a){let s=r();if(!s)return!1;try{return s.setItem(t+e,JSON.stringify(a)),!0}catch{return!1}}function o(){return a("signoffs",[])}function n(e){return s("signoffs",e)}function i(){return a("bus-matrix-meta",{})}function l(e){return s("bus-matrix-meta",e)}function c(){return a("reports",[])}function d(e){return s("reports",e)}function u(){return a("schedules",{})}function p(e){return s("schedules",e)}function m(){return a("snapshots",[])}function h(e){return s("snapshots",e)}function f(){return a("distribution-lists",[])}function g(e){return s("distribution-lists",e)}function y(){return a("deliveries",[])}function x(e){return s("deliveries",e)}function k(e){return`${e}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}e.s(["genId",()=>k,"loadDeliveries",()=>y,"loadDistributionLists",()=>f,"loadProcessMeta",()=>i,"loadReports",()=>c,"loadSchedules",()=>u,"loadSignOffs",()=>o,"loadSnapshots",()=>m,"saveDeliveries",()=>x,"saveDistributionLists",()=>g,"saveProcessMeta",()=>l,"saveReports",()=>d,"saveSchedules",()=>p,"saveSignOffs",()=>n,"saveSnapshots",()=>h])},64978,e=>{"use strict";let t=(0,e.i(75254).default)("grid-3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);e.s(["Grid3x3",()=>t],64978)},93479,e=>{"use strict";var t=e.i(43476),r=e.i(75157);function a({className:e,type:a,...s}){return(0,t.jsx)("input",{type:a,"data-slot":"input",className:(0,r.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...s})}e.s(["Input",()=>a])},78745,e=>{"use strict";let t=(0,e.i(75254).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["default",()=>t])},24687,e=>{"use strict";var t=e.i(43476),r=e.i(75157);function a({className:e,...a}){return(0,t.jsx)("textarea",{"data-slot":"textarea",className:(0,r.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...a})}e.s(["Textarea",()=>a])},10204,e=>{"use strict";var t=e.i(43476),r=e.i(71645);e.i(74080);var a=e.i(91918),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,s)=>{let o=(0,a.createSlot)(`Primitive.${s}`),n=r.forwardRef((e,r)=>{let{asChild:a,...n}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,t.jsx)(a?o:s,{...n,ref:r})});return n.displayName=`Primitive.${s}`,{...e,[s]:n}},{}),o=r.forwardRef((e,r)=>(0,t.jsx)(s.label,{...e,ref:r,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));o.displayName="Label";var n=e.i(75157);function i({className:e,...r}){return(0,t.jsx)(o,{"data-slot":"label",className:(0,n.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...r})}e.s(["Label",()=>i],10204)},43531,e=>{"use strict";var t=e.i(78745);e.s(["Check",()=>t.default])},74886,e=>{"use strict";let t=(0,e.i(75254).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["Copy",()=>t],74886)},69074,56405,86311,e=>{"use strict";var t=e.i(75254);let r=(0,t.default)("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]);e.s(["Upload",()=>r],69074);let a={maxPreviewRows:100,typeSampleRows:1e3,uniqueCap:1e4};async function s(e,t){var r;let s,o,i={...a,...t},d="auto"===i.format?(s=(r=e).name??"",["csv"].includes(o=s.split(".").pop()?.toLowerCase()??"")?"csv":["tsv","tab"].includes(o)?"tsv":["json","jsonl","ndjson"].includes(o)?"json":["txt","md","log"].includes(o)?"text":r.type.startsWith("image/")?"image":"binary"):i.format,u=e.size,p={format:d,totalBytes:u,bytesProcessed:0,rowsParsed:0,columns:[],columnStats:{},previewRows:[],completed:!1};return"csv"===d||"tsv"===d?await n(e,"tsv"===d?"	":",",i,p):"json"===d?await l(e,i,p):"text"===d?await c(e,i,p):(p.completed=!0,p.previewText=`[Binary file: ${e.name??"unknown"}] — ${f(u)}. Hex preview and type detection would require server-side processing.`),p}async function o(e,t){let r,s,o={...a,...t},n="auto"===o.format?(r=e.split("?")[0],["csv"].includes(s=r.split(".").pop()?.toLowerCase()??"")?"csv":["tsv"].includes(s)?"tsv":["json","jsonl","ndjson"].includes(s)?"json":["txt","md","log"].includes(s)?"text":"binary"):o.format,l={format:n,totalBytes:0,bytesProcessed:0,rowsParsed:0,columns:[],columnStats:{},previewRows:[],completed:!1};try{let t=await fetch(e);if(!t.ok)throw Error(`HTTP ${t.status}`);if(!t.body)throw Error("No response body (CORS or server issue)");let r=t.headers.get("content-length");l.totalBytes=r?parseInt(r,10):0;let a=t.body.getReader(),s=new TextDecoder;await i(a,s,"",!1,"tsv"===n?"	":",",o,l)}catch(t){l.error=t instanceof Error?t.message:"Fetch failed",l.completed=!0,l.previewText=`URL: ${e}

Could not stream (likely CORS). To parse remote data, DSModelPro would fetch server-side.`}return l}async function n(e,t,r,a){let s=e.stream().getReader(),o=new TextDecoder;await i(s,o,"",!1,t,r,a)}async function i(e,t,r,a,s,o,n){try{let i=0;for(;;){if(o.shouldContinue&&!o.shouldContinue()){n.completed=!1;return}let{done:l,value:c}=await e.read();if(l)break;let p=t.decode(c,{stream:!0});n.bytesProcessed+=c.byteLength;let f=(r+=p).split("\n");for(let e of(r=f.pop()??"",f)){let t=e.replace(/\r$/,"");if(""===t.trim()&&0===n.rowsParsed&&!a)continue;if(!a){for(let e of(n.columns=m(t,s),n.columns))n.columnStats[e]=d();a=!0;continue}let r=h(t,s,n.columns);if(n.rowsParsed++,n.previewRows.length<o.maxPreviewRows&&n.previewRows.push(r),"overview"!==o.granularity&&("statistical"===o.granularity||n.rowsParsed<=o.typeSampleRows))for(let e of n.columns){let t=r[e]??"";u(n.columnStats[e],t,o)}}o.onProgress&&o.onProgress(n.bytesProcessed,n.totalBytes,n.rowsParsed),++i%10==0&&await g()}if(r.trim()&&a){let e=r.replace(/\r$/,""),t=h(e,s,n.columns);if(n.rowsParsed++,n.previewRows.length<o.maxPreviewRows&&n.previewRows.push(t),"statistical"===o.granularity)for(let e of n.columns)u(n.columnStats[e],t[e]??"",o)}if("overview"!==o.granularity)for(let e of n.columns)p(n.columnStats[e]);n.completed=!0,o.onProgress&&o.onProgress(n.bytesProcessed,n.totalBytes,n.rowsParsed)}finally{try{e.releaseLock()}catch{}}}async function l(e,t,r){let a=e.stream().getReader(),s=new TextDecoder,o="",n=0;try{for(;;){if(t.shouldContinue&&!t.shouldContinue())return;let{done:e,value:i}=await a.read();if(e)break;let l=s.decode(i,{stream:!0});r.bytesProcessed+=i.byteLength;let c=(o+=l).split("\n");for(let e of(o=c.pop()??"",c)){let a=e.trim();if(a)try{let e=JSON.parse(a);if(r.rowsParsed++,0===r.columns.length&&"object"==typeof e&&null!==e)for(let t of(r.columns=Object.keys(e),r.columns))r.columnStats[t]=d();if(r.previewRows.length<t.maxPreviewRows&&"object"==typeof e){let t={};for(let a of r.columns)t[a]=String(e[a]??"");r.previewRows.push(t)}if(("statistical"===t.granularity||r.rowsParsed<=t.typeSampleRows)&&"object"==typeof e&&null!==e)for(let a of r.columns){let s=e[a];u(r.columnStats[a],null==s?"":String(s),t)}}catch{}}t.onProgress&&t.onProgress(r.bytesProcessed,r.totalBytes,r.rowsParsed),++n%10==0&&await g()}let e=o.trim();if(e)try{let a=JSON.parse(e);if(r.rowsParsed++,r.previewRows.length<t.maxPreviewRows&&"object"==typeof a){let e={};for(let t of r.columns)e[t]=String(a[t]??"");r.previewRows.push(e)}}catch{}for(let e of r.columns)p(r.columnStats[e]);r.completed=!0}finally{try{a.releaseLock()}catch{}}}async function c(e,t,r){let a=e.stream().getReader(),s=new TextDecoder,o=0,n=0,i=0,l="",c=0;try{for(;;){if(t.shouldContinue&&!t.shouldContinue())return;let{done:e,value:d}=await a.read();if(e)break;let u=s.decode(d,{stream:!0});r.bytesProcessed+=d.byteLength,o+=u.length,n+=u.split(/\s+/).filter(Boolean).length,i+=u.split("\n").length-1,l.length<2e3&&(l+=u.slice(0,2e3-l.length)),t.onProgress&&t.onProgress(r.bytesProcessed,r.totalBytes,i),++c%10==0&&await g()}r.textStats={chars:o,words:n,lines:i+1},r.previewText=l,r.rowsParsed=i+1,r.completed=!0}finally{try{a.releaseLock()}catch{}}}function d(){return{type:"categorical",count:0,nulls:0,unique:0,uniqueCapped:!1,uniqueSet:new Set}}function u(e,t,r){if(e.count++,""===t||null==t)return void e.nulls++;!e.uniqueCapped&&(e.uniqueSet.add(t),e.uniqueSet.size>r.uniqueCap&&(e.uniqueCapped=!0,e.uniqueSet.clear()));let a=Number(t);if(!isNaN(a)&&isFinite(a)&&/^-?\d+\.?\d*([eE][+-]?\d+)?$/.test(t)){let t=a-(e.mean??0);e.mean=(e.mean??0)+t/(e.count-e.nulls);let r=a-e.mean;e.m2=(e.m2??0)+t*r,(void 0===e.min||a<e.min)&&(e.min=a),(void 0===e.max||a>e.max)&&(e.max=a)}}function p(e){if(0===e.count||e.count===e.nulls){e.type="null";return}e.count,e.nulls,e.uniqueCapped||e.uniqueSet.size,void 0!==e.min&&void 0!==e.max?e.type="numerical":e.type="categorical",e.unique=e.uniqueCapped?1e4:e.uniqueSet.size}function m(e,t){let r=[],a="",s=!1;for(let o=0;o<e.length;o++){let n=e[o];'"'===n?s&&'"'===e[o+1]?(a+='"',o++):s=!s:n!==t||s?a+=n:(r.push(a),a="")}return r.push(a),r.map(e=>e.trim())}function h(e,t,r){let a=m(e,t),s={};return r.forEach((e,t)=>{s[e]=a[t]??""}),s}function f(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:e<0x40000000?`${(e/1048576).toFixed(1)} MB`:`${(e/0x40000000).toFixed(2)} GB`}function g(){return new Promise(e=>{"u">typeof requestIdleCallback?requestIdleCallback(()=>e()):setTimeout(e,0)})}e.s(["formatBytes",()=>f,"parseFileStream",()=>s,"parseUrlStream",()=>o],56405);let y=(0,t.default)("message-square",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);e.s(["MessageSquare",()=>y],86311)},41240,e=>{"use strict";let t=(0,e.i(75254).default)("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);e.s(["Lightbulb",()=>t],41240)},66992,e=>{"use strict";let t=(0,e.i(75254).default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);e.s(["Cpu",()=>t],66992)},38982,e=>{"use strict";let t=(0,e.i(75254).default)("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);e.s(["FlaskConical",()=>t],38982)},55716,e=>{"use strict";let t=(0,e.i(75254).default)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);e.s(["GitBranch",()=>t],55716)},95468,e=>{"use strict";let t=(0,e.i(75254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",()=>t],95468)},15288,e=>{"use strict";var t=e.i(43476),r=e.i(75157);function a({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,r.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...a})}function s({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,r.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...a})}function o({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,r.cn)("leading-none font-semibold",e),...a})}function n({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,r.cn)("text-muted-foreground text-sm",e),...a})}function i({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,r.cn)("px-6",e),...a})}e.s(["Card",()=>a,"CardContent",()=>i,"CardDescription",()=>n,"CardHeader",()=>s,"CardTitle",()=>o])},92178,e=>{"use strict";var t=e.i(43476),r=e.i(92989),a=e.i(22016),s=e.i(75254);let o=(0,s.default)("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),n=(0,s.default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var i=e.i(19455),l=e.i(15288);function c({title:e,eyebrow:s,description:c,children:d,secondaryAction:u}){let p=(0,r.useRouter)();return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,t.jsxs)(i.Button,{variant:"outline",size:"sm",onClick:()=>p.push("/"),className:"gap-1.5","aria-label":"Return to home",children:[(0,t.jsx)(o,{className:"h-4 w-4","aria-hidden":"true"}),"Return to Home"]}),u]}),(0,t.jsxs)("div",{className:"space-y-3",children:[s?(0,t.jsx)("span",{className:"inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300",children:s}):null,(0,t.jsx)("h1",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl",children:e}),(0,t.jsx)("p",{className:"max-w-3xl text-base leading-relaxed text-muted-foreground",children:c})]})]}),(0,t.jsx)("div",{className:"space-y-8",children:d}),(0,t.jsx)(l.Card,{className:"border-dashed",children:(0,t.jsxs)(l.CardContent,{className:"flex flex-col items-start justify-between gap-3 p-4 sm:flex-row sm:items-center",children:[(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"Finished reading this section? Return to the home page to explore another part of the dimensional model."}),(0,t.jsx)(i.Button,{variant:"ghost",size:"sm",asChild:!0,className:"gap-1.5",children:(0,t.jsxs)(a.default,{href:"/",children:[(0,t.jsx)(n,{className:"h-4 w-4","aria-hidden":"true"}),"Back to Home"]})})]})})]})}e.s(["ViewShell",()=>c],92178)},21218,e=>{"use strict";let t=(0,e.i(75254).default)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);e.s(["Activity",()=>t],21218)},78894,e=>{"use strict";let t=(0,e.i(75254).default)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);e.s(["AlertTriangle",()=>t],78894)},41929,e=>{"use strict";let t=(0,e.i(75254).default)("file-code",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);e.s(["FileCode",()=>t],41929)},39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",()=>t],39312)},31278,e=>{"use strict";let t=(0,e.i(75254).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2",()=>t],31278)},31343,e=>{"use strict";let t=(0,e.i(75254).default)("play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);e.s(["Play",()=>t],31343)},55711,e=>{"use strict";let t=(0,e.i(75254).default)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);e.s(["Brain",()=>t],55711)},40160,e=>{"use strict";let t=(0,e.i(75254).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);e.s(["Download",()=>t],40160)},27516,e=>{"use strict";let t=(0,e.i(75254).default)("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);e.s(["History",()=>t],27516)},7233,e=>{"use strict";let t=(0,e.i(75254).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>t],7233)},25652,e=>{"use strict";let t=(0,e.i(75254).default)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);e.s(["TrendingUp",()=>t],25652)},24529,e=>{"use strict";var t=e.i(43476);e.i(71645);var r=e.i(37727),a=e.i(19455);function s({title:e,subtitle:s,icon:o,iconColour:n="text-blue-600",onClose:i,children:l,maxWidth:c="max-w-3xl"}){return(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",onClick:i,children:(0,t.jsxs)("div",{className:`max-h-[90vh] w-full ${c} overflow-y-auto rounded-lg border border-border bg-background p-6 shadow-xl`,onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[o&&(0,t.jsx)("div",{className:`flex h-8 w-8 items-center justify-center rounded-md bg-muted/40 ${n}`,children:(0,t.jsx)(o,{className:"h-4 w-4"})}),(0,t.jsx)("h2",{className:"text-lg font-semibold text-foreground",children:e})]}),s&&(0,t.jsx)("p",{className:"mt-1 text-xs text-muted-foreground",children:s})]}),(0,t.jsx)(a.Button,{onClick:i,size:"sm",variant:"ghost",className:"h-8 w-8 p-0","aria-label":"Close",children:(0,t.jsx)(r.X,{className:"h-4 w-4"})})]}),l]})})}function o({label:e,value:r}){return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/20 p-2",children:[(0,t.jsx)("div",{className:"text-[9px] uppercase tracking-wide text-muted-foreground",children:e}),(0,t.jsx)("div",{className:"text-sm font-bold text-foreground",children:r})]})}function n({code:e,label:r,maxHeight:a="max-h-64"}){return(0,t.jsxs)("div",{children:[r&&(0,t.jsx)("div",{className:"mb-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground",children:r}),(0,t.jsx)("pre",{className:`${a} overflow-auto rounded-md border border-border/60 bg-background p-3 text-[10px] leading-relaxed`,children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:e})})]})}function i({children:e,colour:r="amber"}){return(0,t.jsx)("div",{className:`rounded-md border p-2 text-[10px] ${{amber:"border-amber-500/40 bg-amber-500/5 text-amber-700 dark:text-amber-300",blue:"border-blue-500/40 bg-blue-500/5 text-blue-700 dark:text-blue-300",emerald:"border-emerald-500/40 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300",purple:"border-purple-500/40 bg-purple-500/5 text-purple-700 dark:text-purple-300",rose:"border-rose-500/40 bg-rose-500/5 text-rose-700 dark:text-rose-300"}[r]}`,children:e})}e.s(["CalloutBox",()=>i,"CodeBlock",()=>n,"PreviewModal",()=>s,"StatBox",()=>o])},81418,e=>{"use strict";let t=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",()=>t],81418)},48256,e=>{"use strict";let t=(0,e.i(75254).default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);e.s(["Globe",()=>t],48256)},28579,e=>{"use strict";let t=(0,e.i(75254).default)("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);e.s(["Boxes",()=>t],28579)},63639,e=>{"use strict";let t=(0,e.i(75254).default)("radio",[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);e.s(["Radio",()=>t],63639)},40524,e=>{"use strict";let t=(0,e.i(75254).default)("workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);e.s(["Workflow",()=>t],40524)},18393,e=>{"use strict";let t=(0,e.i(75254).default)("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);e.s(["Server",()=>t],18393)},86536,e=>{"use strict";let t=(0,e.i(75254).default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["Eye",()=>t],86536)},66261,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-right-left",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);e.s(["ArrowRightLeft",()=>t],66261)},13604,e=>{"use strict";var t=e.i(43476),r=e.i(28579),a=e.i(58041),s=e.i(63639),o=e.i(21218),n=e.i(18393),i=e.i(52786),l=e.i(55716),c=e.i(86536),d=e.i(17923),u=e.i(78583),p=e.i(40524),m=e.i(41240),h=e.i(95468),f=e.i(66261),g=e.i(15288),y=e.i(87486),x=e.i(92178),k=e.i(68256),v=e.i(8679);let b=[{component:"Event broker",icon:s.Radio,current:"event-stream-service (Bun, in-process WebSocket simulation)",targets:[{name:"Apache Kafka",note:"Industry standard. KRaft mode (no Zookeeper). Use confluentinc/cp-kafka."},{name:"Redpanda",note:"Kafka-compatible, no JVM, lower latency. Single binary."},{name:"Apache Pulsar",note:"Multi-tenant, geo-replication. Higher ops overhead."}],interfaceContract:"Producer: publish(topic, key, EventEnvelope) → void. Consumer: subscribe(topic, group, handler) → void. Must support at-least-once delivery + idempotent sinks.",configVar:"KAFKA_BOOTSTRAP_SERVERS",placeholder:`// src/lib/event-broker.ts
// Current: in-process emitter (event-stream-service)
// Swap: implement the same interface with kafkajs

export interface EventBroker {
  publish(topic: string, key: string, event: EventEnvelope): Promise<void>
  subscribe(topic: string, group: string, handler: (e: EventEnvelope) => Promise<void>): Promise<void>
}

// --- IN-PROCESS (current) ---
import { inProcessBroker } from './brokers/in-process'
export const broker: EventBroker = inProcessBroker

// --- KAFKA (swap target) ---
// import { kafkaBroker } from './brokers/kafka'
// export const broker: EventBroker = kafkaBroker({
//   brokers: process.env.KAFKA_BOOTSTRAP_SERVERS!.split(','),
//   clientId: 'dsmodpro',
// })`,checklist:["Set KAFKA_BOOTSTRAP_SERVERS env var","Run infra/kafka/create-topics.sh to create all 6 topics","Verify consumer group offsets commit correctly","Test idempotent consumer (INSERT ... ON CONFLICT DO NOTHING)","Monitor consumer lag in kafka-ui (port 9090)"]},{component:"Stream processor",icon:o.Activity,current:"Client-side simulated streaming (Live Demo event stream)",targets:[{name:"Apache Flink",note:"Java/Scala. True streaming, exactly-once, stateful. Best for complex event processing."},{name:"Spark Structured Streaming",note:"Micro-batch. Good if you already run Spark. Lower latency floor."},{name:"Kafka Streams",note:"Java library. No separate cluster. Good for simple transformations."},{name:"RisingWave",note:"Postgres-compatible streaming SQL. Newer but compelling."}],interfaceContract:"StreamProcessor: consume(topic) → window(key, size) → aggregate(fn) → sink(target). Must support tumbling windows aligned to dim_date and watermarking on event_time.",configVar:"FLINK_JOBMANAGER_URL",placeholder:`// src/lib/stream-processor.ts
// Current: client-side simulation
// Swap: deploy a Flink job that implements the same projection

export interface StreamProjection {
  topic: string
  windowSize: '1m' | '5m' | '1h' | '1d'
  groupBy: string[]
  aggregate: string  // SQL expression
  sinkTable: string  // warehouse table to upsert into
}

// --- FLINK SQL (swap target) ---
/*
INSERT INTO fact_observation_realtime
SELECT
  TUMBLE_START(event_time, INTERVAL '5' MINUTE) AS window_start,
  domain,
  COUNT(*) AS event_count,
  SUM(CAST(payload->>'value' AS DOUBLE)) AS value_sum
FROM observation.raw
GROUP BY TUMBLE(event_time, INTERVAL '5' MINUTE), domain;
*/`,checklist:["Deploy Flink JobManager + TaskManagers","Configure Flink Kafka connector","Set watermark strategy on event_time","Verify checkpointing (exactly-once)","Monitor backpressure and checkpoint duration"]},{component:"Batch processor",icon:n.Server,current:"synthetic-data-service (Bun, in-memory PRNG generation)",targets:[{name:"Apache Spark",note:"Industry standard for large-scale batch. DataFrame API + Spark SQL."},{name:"Databricks",note:"Managed Spark + Delta Lake + MLflow. Pay per DBU."},{name:"Google Dataflow",note:"Unified batch+streaming. Good if you are on GCP."},{name:"DuckDB",note:"Single-process, fast. Good for smaller datasets."}],interfaceContract:"BatchProcessor: read(source) → transform(df, fn) → write(target, mode). Must support partitioned writes and idempotent sinks (MERGE / ON CONFLICT).",configVar:"SPARK_MASTER_URL",placeholder:`// src/lib/batch-processor.ts
// Current: synthetic-data-service generates rows in-process
// Swap: submit a Spark job that reads from object storage

export interface BatchJob {
  name: string
  source: { type: 'parquet' | 'jdbc' | 'delta'; path: string }
  transform: string  // SQL or DataFrame expression
  target: { table: string; mode: 'overwrite' | 'merge'; partitionBy?: string[] }
}

// --- SPARK (swap target) ---
/*
val df = spark.read.parquet("s3://raw/observations/")
  .filter($"domain" === "neuroimaging")
  .join(dimWorkflowRun, $"workflow_run_key" === dimWorkflowRun("key"))
  .select($"scan_key", $"subject_key", $"motion_fd_mean", ...)

df.write
  .format("delta")
  .mode("merge")
  .partitionBy("date_key")
  .saveAsTable("fact_neuroimaging_scan")
*/`,checklist:["Provision Spark cluster (or use Databricks)","Configure object storage access (S3/GCS)","Set up Delta Lake for ACID + time travel","Verify MERGE operation for idempotent loads","Schedule via Airflow / Argo / Prefect"]},{component:"Warehouse (OLAP)",icon:a.Database,current:"SQLite (Prisma) for dim_workflow_run; client-side for facts",targets:[{name:"ClickHouse",note:"Open-source columnar. Best price/performance for analytics. DSModelPro default."},{name:"Google BigQuery",note:"Serverless columnar. Pay per query. Good if you are on GCP."},{name:"Snowflake",note:"Managed, separates compute + storage. Enterprise standard."},{name:"Databricks SQL",note:"Lakehouse on Delta Lake. Good if you already use Databricks."}],interfaceContract:"Warehouse: query(sql) → rows. Must support INSERT ... ON CONFLICT DO NOTHING (idempotent), columnar storage, and partitioning by date_key.",configVar:"WAREHOUSE_URL + WAREHOUSE_DRIVER",placeholder:`// src/lib/warehouse.ts
// Current: Prisma + SQLite (provenance only)
// Swap: ClickHouse / BigQuery / Snowflake for fact tables

export interface Warehouse {
  query(sql: string, params?: unknown[]): Promise<Record<string, unknown>[]>
  insert(table: string, rows: Record<string, unknown>[]): Promise<number>
  merge(table: string, rows: Record<string, unknown>[], key: string): Promise<number>
}

// --- CLICKHOUSE (swap target) ---
/*
import { createClient } from '@clickhouse/client'
export const wh: Warehouse = clickhouseWarehouse({
  url: process.env.WAREHOUSE_URL!,
  database: 'dsmodpro',
})
// INSERT INTO fact_neuroimaging_scan FORMAT JSONEachRow
// OPTIMIZE TABLE fact_neuroimaging_scan FINAL
*/`,checklist:["Provision warehouse (or use managed service)","Create fact + dimension tables with correct partition keys","Verify INSERT ... ON CONFLICT works (or use ClickHouse ReplacingMergeTree)","Set up materialized views for common aggregates","Monitor query latency + storage growth"]},{component:"Feature store",icon:r.Boxes,current:"feature-store-service (Bun, in-memory cache + on-demand generation)",targets:[{name:"Feast",note:"Open-source. Offline (Parquet/BigQuery) + online (Redis/DynamoDB). Good default."},{name:"Tecton",note:"Managed. Enterprise. Strong on streaming features."},{name:"AWS SageMaker Feature Store",note:"Managed on AWS. Good if you are already there."},{name:"Hopsworks",note:"Open-source. Includes training pipeline integration."}],interfaceContract:"FeatureStore: getOfflineFeatures(features, entityRows, asOf) → DataFrame. getOnlineFeatures(features, entityRows) → vector. Must support point-in-time joins via SCD2.",configVar:"FEATURE_STORE_PROVIDER + FEATURE_STORE_REGISTRY",placeholder:`// src/lib/feature-store.ts
// Current: feature-store-service generates features in-process
// Swap: Feast with offline (Parquet) + online (Redis) stores

export interface FeatureStore {
  getOffline(features: string[], entities: Record<string, unknown>[], asOf: string): Promise<Record<string, unknown>[]>
  getOnline(features: string[], entityKey: Record<string, unknown>): Promise<Record<string, unknown>>
}

// --- FEAST (swap target) ---
/*
from feast import FeatureStore
store = FeatureStore(repo_path="./feature_repo")
features = store.get_online_features(
    features=["customer_clv:total_revenue_30d", "customer_clv:segment"],
    entity_rows=[{"customer_id": "12345"}],
).to_dict()
*/`,checklist:["Define feature views in Feast registry","Configure offline store (Parquet on S3 / BigQuery)","Configure online store (Redis / DynamoDB)","Set up materialization schedule (offline → online)","Verify point-in-time correctness for training data"]},{component:"Object storage",icon:i.HardDrive,current:"Local filesystem (/home/z/my-project/db/, /home/z/my-project/download/)",targets:[{name:"AWS S3",note:"Industry standard. Use with presigned URLs for secure access."},{name:"Google Cloud Storage",note:"Good if on GCP. Nearline/Coldline for archival."},{name:"Azure Blob Storage",note:"Good if on Azure. Hot/Cool/Archive tiers."},{name:"MinIO",note:"Self-hosted S3-compatible. Good for on-prem or air-gapped."}],interfaceContract:"ObjectStore: put(key, data) → url. get(key) → stream. list(prefix) → keys. Must support multipart upload for large files and presigned URLs for secure download.",configVar:"S3_ENDPOINT + S3_BUCKET + S3_ACCESS_KEY + S3_SECRET_KEY",placeholder:`// src/lib/object-store.ts
// Current: local filesystem
// Swap: S3 / GCS / MinIO

export interface ObjectStore {
  put(key: string, data: Buffer | Stream): Promise<string>
  get(key: string): Promise<ReadableStream>
  list(prefix: string): Promise<string[]>
  presign(key: string, ttl: number): Promise<string>
}

// --- S3 (swap target) ---
/*
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
export const store: ObjectStore = s3Store({
  bucket: process.env.S3_BUCKET!,
  region: process.env.S3_REGION!,
})
*/`,checklist:["Provision bucket with correct region + lifecycle policies","Set up IAM roles / presigned URLs for access control","Configure multipart upload for files > 100MB","Set up cross-region replication if needed","Monitor storage costs + lifecycle transitions"]},{component:"Workflow orchestrator",icon:p.Workflow,current:"Shell script (.zscripts/start-mini-services.sh)",targets:[{name:"Apache Airflow",note:"Industry standard. DAGs in Python. Huge ecosystem."},{name:"Argo Workflows",note:"Kubernetes-native. Good if you are already on k8s."},{name:"Prefect",note:"Python. Good DX. Hybrid deployment model."},{name:"Dagster",note:"Python. Strong asset-based model. Good for data pipelines."}],interfaceContract:"Orchestrator: defineDAG(tasks, deps) → schedule(cron) → run. Must support retries, dependencies, and emit workflow.completed events to the event broker.",configVar:"ORCHESTRATOR_URL + ORCHESTRATOR_API_KEY",placeholder:`# infra/orchestrator/airflow/dags/fmriprep_dag.py
# Current: shell script
# Swap: Airflow DAG

from airflow import DAG
from airflow.operators.bash import BashOperator
from datetime import datetime

with DAG('fmriprep_pipeline', start_date=datetime(2026, 1, 1), schedule='0 2 * * *') as dag:
    run_fmriprep = BashOperator(
        task_id='run_fmriprep',
        bash_command='docker run --rm poldracklab/fmriprep:23.1.0 '
                     '{{ dag_run.conf["bids_dir"] }} {{ dag_run.conf["output_dir"] }} '
                     'participant --participant-label {{ dag_run.conf["subject"] }}',
    )
    emit_event = BashOperator(
        task_id='emit_workflow_completed',
        bash_command='curl -X POST http://event-stream:3003/api/emit '
                     '-d '{"topic":"workflow.completed","domain":"neuroimaging"}'',
    )
    run_fmriprep >> emit_event`,checklist:["Deploy orchestrator (Airflow / Argo / Prefect)","Define DAGs for each pipeline (fMRIPrep, GATK, CESM2, Rubin)","Configure retries + SLA + alerting","Verify workflow.completed events reach the event broker","Set up backfill capability for historical data"]},{component:"Catalog & discovery",icon:c.Eye,current:"Static navigation.ts + hardcoded descriptions",targets:[{name:"DataHub",note:"LinkedIn open-source. Good metadata ingestion. Popular."},{name:"OpenMetadata",note:"Open-source. Good UI. Strong on lineage."},{name:"Amundsen",note:"Lyft open-source. Good search. Less active."},{name:"Collibra",note:"Enterprise. Strong governance + stewardship workflows."}],interfaceContract:"Catalog: register(dataset, schema, owner, sla) → id. search(query) → datasets. Must ingest schemas from the warehouse and emit lineage to OpenLineage.",configVar:"CATALOG_URL + CATALOG_API_KEY",placeholder:`// src/lib/catalog.ts
// Current: static NAV_ITEMS + descriptions
// Swap: DataHub / OpenMetadata with auto-ingestion

export interface Catalog {
  register(dataset: DatasetSpec): Promise<string>
  search(query: string): Promise<DatasetSpec[]>
  getLineage(datasetId: string): Promise<LineageGraph>
}

// --- DATAHUB (swap target) ---
/*
from datahub.emitter.mce_builder import make_dataset_urn
from datahub.emitter.rest_emitter import DatahubRestEmitter
emitter = DatahubRestEmitter(gms_server=process.env.CATALOG_URL)
emitter.emit_mce(MetadataChangeProposalWrapper(
    entityUrn=make_dataset_urn("clickhouse", "fact_neuroimaging_scan"),
    aspect=SchemaMetadata(...)
))
*/`,checklist:["Deploy catalog (DataHub / OpenMetadata)","Configure ingestion from warehouse (ClickHouse / BigQuery)","Configure ingestion from object storage (S3 bucket listing)","Set up lineage ingestion from OpenLineage events","Verify search + browse UX for data products"]},{component:"Lineage tracking",icon:l.GitBranch,current:"Described in prose (dim_workflow_run, NIDM models)",targets:[{name:"OpenLineage",note:"Open standard. Emit from Airflow / Spark / dbt. Consumed by Marquez / DataHub."},{name:"Marquez",note:"Open-source lineage backend. Good with OpenLineage."},{name:"Apache Egeria",note:"Enterprise-grade metadata + lineage. Heavier."},{name:"Spline",note:"Spark-specific lineage. Good if Spark is your main engine."}],interfaceContract:"Lineage: emit(run, inputs, outputs) → void. Must emit on every workflow start + complete, with OpenLineage RunEvent format.",configVar:"OPENLINEAGE_URL",placeholder:`// src/lib/lineage.ts
// Current: dim_workflow_run rows persisted via Prisma
// Swap: emit OpenLineage events to Marquez / DataHub

export interface LineageEmitter {
  emitStart(runId: string, jobName: string, inputs: string[], outputs: string[]): Promise<void>
  emitComplete(runId: string, status: 'ok' | 'fail'): Promise<void>
}

// --- OPENLINEAGE (swap target) ---
/*
import { OpenLineageClient } from '@openlineage/client'
export const lineage: LineageEmitter = openLineage({
  url: process.env.OPENLINEAGE_URL!,
  apiKey: process.env.OPENLINEAGE_API_KEY!,
})
// Emits RunEvent { eventType: 'START' | 'COMPLETE', run, job, inputs, outputs }
*/`,checklist:["Deploy Marquez or configure DataHub lineage","Set OPENLINEAGE_URL in orchestrator env","Configure Airflow / Spark / dbt to emit OpenLineage","Verify lineage graph renders in catalog UI","Set up lineage-based impact analysis"]},{component:"Metrics (RED + USE)",icon:d.BarChart3,current:"Described in prose (SLOs by data product)",targets:[{name:"Prometheus + Grafana",note:"Open-source standard. Pull model. Huge dashboard ecosystem."},{name:"Datadog",note:"Managed. Expensive but excellent DX. Good if budget allows."},{name:"New Relic",note:"Managed. Good APM + metrics integration."},{name:"VictoriaMetrics",note:"Open-source. Prometheus-compatible. Lower resource usage."}],interfaceContract:"Metrics: counter(name, labels) → void. gauge(name, labels, value) → void. histogram(name, labels, value) → void. Must expose /metrics in Prometheus format.",configVar:"PROMETHEUS_URL + GRAFANA_URL",placeholder:`// src/lib/metrics.ts
// Current: described in prose
// Swap: prom-client in every service + Grafana dashboards

export interface Metrics {
  counter(name: string, labels: Record<string, string>): void
  gauge(name: string, labels: Record<string, string>, value: number): void
  histogram(name: string, labels: Record<string, string>, value: number): void
}

// --- PROMETHEUS (swap target) ---
/*
import promClient from 'prom-client'
const requestCounter = new promClient.Counter({
  name: 'dsmodpro_requests_total',
  help: 'Total requests',
  labelNames: ['service', 'method', 'status'],
})
// Expose /metrics endpoint in every service
*/`,checklist:["Deploy Prometheus + Grafana","Add prom-client to every service","Define RED metrics (Rate, Errors, Duration) for every endpoint","Build Grafana dashboards per data product","Set up alerting (Alertmanager) for SLO breaches"]},{component:"Distributed tracing",icon:o.Activity,current:"Described in prose (OpenTelemetry, trace_id in events)",targets:[{name:"Jaeger",note:"Open-source. CNCF graduated. Good with OpenTelemetry."},{name:"Zipkin",note:"Open-source. Simpler than Jaeger. Good for small deployments."},{name:"Tempo",note:"Grafana Labs. Good with Grafana + Loki. Object storage backend."},{name:"Datadog APM",note:"Managed. Excellent UX. Expensive."}],interfaceContract:"Tracer: startSpan(name) → Span. Span: setAttribute(k, v) → void. end() → void. Must propagate trace context across HTTP, gRPC and Kafka message headers.",configVar:"OTEL_EXPORTER_OTLP_ENDPOINT",placeholder:`// src/lib/tracing.ts
// Current: trace_id generated in events but not propagated
// Swap: @opentelemetry/sdk-node with auto-instrumentation

// --- OPENTELEMETRY (swap target) ---
/*
import { NodeSDK } from '@opentelemetry/sdk-node'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({ url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT }),
  instrumentations: [new HttpInstrumentation(), new KafkaJsInstrumentation()],
})
sdk.start()
// trace_id now propagates across service boundaries + Kafka headers
*/`,checklist:["Deploy Jaeger / Tempo / Zipkin","Set OTEL_EXPORTER_OTLP_ENDPOINT in every service","Add @opentelemetry/auto-instrumentations-node","Verify trace context propagates through Kafka headers","Build trace-based SLO dashboards"]},{component:"Log aggregation",icon:u.FileText,current:"console.log + per-service .log files",targets:[{name:"Loki + Grafana",note:"Open-source. Label-based. Good with Prometheus + Grafana."},{name:"Elasticsearch + Kibana",note:"Classic ELK. Powerful but resource-heavy."},{name:"Splunk",note:"Enterprise. Expensive. Strong on searching + alerting."},{name:"OpenSearch",note:"Open-source ELK fork. Good if you want to avoid Elastic license."}],interfaceContract:"Logger: info(msg, ctx) → void. error(msg, err, ctx) → void. Must emit structured JSON with trace_id, span_id, service, event_id.",configVar:"LOKI_URL or ELASTICSEARCH_URL",placeholder:`// src/lib/logger.ts
// Current: console.log
// Swap: pino with Loki transport

export interface Logger {
  info(msg: string, ctx?: Record<string, unknown>): void
  error(msg: string, err?: Error, ctx?: Record<string, unknown>): void
}

// --- LOKI (swap target) ---
/*
import pino from 'pino'
export const logger: Logger = pino({
  transport: {
    target: 'pino-loki',
    options: { host: process.env.LOKI_URL!, labels: { service: process.env.SERVICE_NAME! } },
  },
})
// All logs carry trace_id from OpenTelemetry context automatically
*/`,checklist:["Deploy Loki / Elasticsearch","Replace console.log with pino (structured JSON)","Configure log shipping (Promtail / Fluent Bit / Filebeat)","Verify trace_id appears in every log line","Build log-based alerts for error spikes"]}];function w(){return(0,t.jsxs)(x.ViewShell,{eyebrow:"Distributed Platform",title:"Ecosystem integration: technology swap points",description:"DSModelPro ships with in-process simulations for every infrastructure component. When you are ready to go to production, each component has a typed interface contract and a swap point — implement the interface, set one env var, and the simulation is replaced by the real thing. This page is the swap matrix: 12 components, their current simulations, their production targets, and the exact code to change.",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[(0,t.jsx)(k.SwapPointDemoButton,{}),(0,t.jsx)("span",{children:"See simulation vs production code for each swap point."})]}),(0,t.jsxs)(g.Card,{className:"border-emerald-500/30 bg-emerald-500/5",children:[(0,t.jsx)(g.CardHeader,{children:(0,t.jsxs)(g.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(m.Lightbulb,{className:"h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400","aria-hidden":"true"}),"The design principle: typed interfaces, one env var to swap"]})}),(0,t.jsxs)(g.CardContent,{className:"space-y-2 text-sm leading-relaxed text-muted-foreground",children:[(0,t.jsxs)("p",{children:["Every infrastructure component in DSModelPro — the event broker, stream processor, batch processor, warehouse, feature store, object storage, orchestrator, catalog, lineage, metrics, tracing and logs — is behind a ",(0,t.jsx)("strong",{className:"text-foreground",children:"typed interface"}),". The simulation implements the interface; the production technology implements the same interface. Swapping is not a rewrite — it is implementing the interface for the new technology and changing one environment variable."]}),(0,t.jsx)("p",{children:"This is what lets the platform start as a demo and grow into a production scientific data platform without architectural rework. The dimensional model, the bus matrix, the conformed dimensions — those stay constant. Only the plumbing changes."})]})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:"The 12 swap points"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"Each card shows the current simulation, the production targets, the interface contract, the env var to flip, a code placeholder, and a swap checklist."})]}),(0,t.jsx)("div",{className:"space-y-6",children:b.map(e=>(0,t.jsxs)(g.Card,{className:"border-border/60",children:[(0,t.jsx)(g.CardHeader,{children:(0,t.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",children:(0,t.jsx)(e.icon,{className:"h-5 w-5","aria-hidden":"true"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)(g.CardTitle,{className:"text-base",children:e.component}),(0,t.jsxs)(g.CardDescription,{className:"text-xs",children:["Current: ",e.current]})]})]}),(0,t.jsxs)(y.Badge,{variant:"outline",className:"gap-1 text-[10px]",children:[(0,t.jsx)(f.ArrowRightLeft,{className:"h-3 w-3","aria-hidden":"true"}),"swap point"]})]})}),(0,t.jsxs)(g.CardContent,{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground",children:"Production targets"}),(0,t.jsx)("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4",children:e.targets.map(e=>(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-2",children:[(0,t.jsx)("div",{className:"text-xs font-medium text-foreground",children:e.name}),(0,t.jsx)("div",{className:"mt-0.5 text-[10px] leading-relaxed text-muted-foreground",children:e.note})]},e.name))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground",children:"Interface contract"}),(0,t.jsx)("p",{className:"rounded-md border border-border/60 bg-muted/30 p-2 text-xs text-foreground",children:e.interfaceContract})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-xs font-semibold uppercase tracking-wide text-muted-foreground",children:"Env var:"}),(0,t.jsx)("code",{className:"rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-700 dark:text-emerald-300",children:e.configVar})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground",children:"Code placeholder"}),(0,t.jsx)("pre",{className:"max-h-64 overflow-auto rounded-md border border-border/60 bg-background p-3 text-[10px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:e.placeholder})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground",children:"Swap checklist"}),(0,t.jsx)("ul",{className:"space-y-1",children:e.checklist.map((e,r)=>(0,t.jsxs)("li",{className:"flex items-start gap-2 text-xs text-muted-foreground",children:[(0,t.jsx)(h.CheckCircle2,{className:"mt-0.5 h-3 w-3 shrink-0 text-emerald-600 dark:text-emerald-400","aria-hidden":"true"}),e]},r))})]})]})]},e.component))})]}),(0,t.jsxs)(g.Card,{className:"border-emerald-500/30 bg-emerald-500/5",children:[(0,t.jsxs)(g.CardHeader,{children:[(0,t.jsxs)(g.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(n.Server,{className:"h-5 w-5 text-emerald-600 dark:text-emerald-400","aria-hidden":"true"}),"Production .env — all swap vars"]}),(0,t.jsx)(g.CardDescription,{children:"One .env file flips the entire platform from simulation to production."})]}),(0,t.jsx)(g.CardContent,{children:(0,t.jsx)("pre",{className:"overflow-x-auto rounded-md border border-border/60 bg-background p-4 text-xs leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:`# DSModelPro production .env — set these to swap simulations for real infrastructure

# Event broker
KAFKA_BOOTSTRAP_SERVERS=kafka-1:9092,kafka-2:9092,kafka-3:9092

# Stream processor
FLINK_JOBMANAGER_URL=http://flink-jobmanager:8081

# Batch processor
SPARK_MASTER_URL=spark://spark-master:7077

# Warehouse (OLAP)
WAREHOUSE_URL=clickhouse://clickhouse:9000
WAREHOUSE_DRIVER=clickhouse

# Feature store
FEATURE_STORE_PROVIDER=feast
FEATURE_STORE_REGISTRY=s3://dsmodpro/feature_repo

# Object storage
S3_ENDPOINT=https://s3.amazonaws.com
S3_BUCKET=dsmodpro-prod
S3_ACCESS_KEY=...
S3_SECRET_KEY=...

# Workflow orchestrator
ORCHESTRATOR_URL=http://airflow:8080
ORCHESTRATOR_API_KEY=...

# Catalog
CATALOG_URL=http://datahub-gms:8080
CATALOG_API_KEY=...

# Lineage
OPENLINEAGE_URL=http://marquez:5000

# Metrics
PROMETHEUS_URL=http://prometheus:9090
GRAFANA_URL=http://grafana:3000

# Tracing
OTEL_EXPORTER_OTLP_ENDPOINT=http://otel-collector:4318

# Logs
LOKI_URL=http://loki:3100`})})})]}),(0,t.jsx)(v.DataUploadPanel,{title:"Upload an infrastructure config or terraform plan",description:"Drop a terraform.tfplan, values.yaml, or docker-compose.yml. DSModelPro will parse it and map each resource to a swap point above.",formatHint:"YAML, JSON, HCL, or text"}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-3",children:[(0,t.jsxs)(y.Badge,{variant:"outline",className:"gap-1",children:[(0,t.jsx)(n.Server,{className:"h-3 w-3","aria-hidden":"true"}),"Related: Microservices"]}),(0,t.jsxs)(y.Badge,{variant:"outline",className:"gap-1",children:[(0,t.jsx)(s.Radio,{className:"h-3 w-3","aria-hidden":"true"}),"Related: Event-Driven Pipelines"]}),(0,t.jsxs)(y.Badge,{variant:"outline",className:"gap-1",children:[(0,t.jsx)(a.Database,{className:"h-3 w-3","aria-hidden":"true"}),"Related: Streaming Analytics"]}),(0,t.jsxs)(y.Badge,{variant:"outline",className:"gap-1",children:[(0,t.jsx)(o.Activity,{className:"h-3 w-3","aria-hidden":"true"}),"Related: Observability & Provenance"]})]})]})}e.s(["default",()=>w])}]);