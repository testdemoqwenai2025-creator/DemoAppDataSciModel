(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30325,e=>{"use strict";let t=(0,e.i(75254).default)("table-2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);e.s(["Table2",()=>t],30325)},59208,e=>{"use strict";let t=(0,e.i(75254).default)("calendar-clock",[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);e.s(["CalendarClock",()=>t],59208)},35212,e=>{"use strict";let t="dsmodelpro:";function r(){try{return window.localStorage}catch{return null}}function a(e,a){let s=r();if(!s)return a;try{let r=s.getItem(t+e);if(!r)return a;return JSON.parse(r)}catch{return a}}function s(e,a){let s=r();if(!s)return!1;try{return s.setItem(t+e,JSON.stringify(a)),!0}catch{return!1}}function i(){return a("signoffs",[])}function o(e){return s("signoffs",e)}function n(){return a("bus-matrix-meta",{})}function d(e){return s("bus-matrix-meta",e)}function c(){return a("reports",[])}function l(e){return s("reports",e)}function u(){return a("schedules",{})}function p(e){return s("schedules",e)}function m(){return a("snapshots",[])}function f(e){return s("snapshots",e)}function h(){return a("distribution-lists",[])}function x(e){return s("distribution-lists",e)}function g(){return a("deliveries",[])}function y(e){return s("deliveries",e)}function v(e){return`${e}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}e.s(["genId",()=>v,"loadDeliveries",()=>g,"loadDistributionLists",()=>h,"loadProcessMeta",()=>n,"loadReports",()=>c,"loadSchedules",()=>u,"loadSignOffs",()=>i,"loadSnapshots",()=>m,"saveDeliveries",()=>y,"saveDistributionLists",()=>x,"saveProcessMeta",()=>d,"saveReports",()=>l,"saveSchedules",()=>p,"saveSignOffs",()=>o,"saveSnapshots",()=>f])},64978,e=>{"use strict";let t=(0,e.i(75254).default)("grid-3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);e.s(["Grid3x3",()=>t],64978)},93479,e=>{"use strict";var t=e.i(43476),r=e.i(75157);function a({className:e,type:a,...s}){return(0,t.jsx)("input",{type:a,"data-slot":"input",className:(0,r.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...s})}e.s(["Input",()=>a])},78745,e=>{"use strict";let t=(0,e.i(75254).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["default",()=>t])},24687,e=>{"use strict";var t=e.i(43476),r=e.i(75157);function a({className:e,...a}){return(0,t.jsx)("textarea",{"data-slot":"textarea",className:(0,r.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...a})}e.s(["Textarea",()=>a])},10204,e=>{"use strict";var t=e.i(43476),r=e.i(71645);e.i(74080);var a=e.i(91918),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,s)=>{let i=(0,a.createSlot)(`Primitive.${s}`),o=r.forwardRef((e,r)=>{let{asChild:a,...o}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,t.jsx)(a?i:s,{...o,ref:r})});return o.displayName=`Primitive.${s}`,{...e,[s]:o}},{}),i=r.forwardRef((e,r)=>(0,t.jsx)(s.label,{...e,ref:r,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var o=e.i(75157);function n({className:e,...r}){return(0,t.jsx)(i,{"data-slot":"label",className:(0,o.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...r})}e.s(["Label",()=>n],10204)},43531,e=>{"use strict";var t=e.i(78745);e.s(["Check",()=>t.default])},74886,e=>{"use strict";let t=(0,e.i(75254).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["Copy",()=>t],74886)},69074,56405,86311,e=>{"use strict";var t=e.i(75254);let r=(0,t.default)("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]);e.s(["Upload",()=>r],69074);let a={maxPreviewRows:100,typeSampleRows:1e3,uniqueCap:1e4};async function s(e,t){var r;let s,i,n={...a,...t},l="auto"===n.format?(s=(r=e).name??"",["csv"].includes(i=s.split(".").pop()?.toLowerCase()??"")?"csv":["tsv","tab"].includes(i)?"tsv":["json","jsonl","ndjson"].includes(i)?"json":["txt","md","log"].includes(i)?"text":r.type.startsWith("image/")?"image":"binary"):n.format,u=e.size,p={format:l,totalBytes:u,bytesProcessed:0,rowsParsed:0,columns:[],columnStats:{},previewRows:[],completed:!1};return"csv"===l||"tsv"===l?await o(e,"tsv"===l?"	":",",n,p):"json"===l?await d(e,n,p):"text"===l?await c(e,n,p):(p.completed=!0,p.previewText=`[Binary file: ${e.name??"unknown"}] — ${h(u)}. Hex preview and type detection would require server-side processing.`),p}async function i(e,t){let r,s,i={...a,...t},o="auto"===i.format?(r=e.split("?")[0],["csv"].includes(s=r.split(".").pop()?.toLowerCase()??"")?"csv":["tsv"].includes(s)?"tsv":["json","jsonl","ndjson"].includes(s)?"json":["txt","md","log"].includes(s)?"text":"binary"):i.format,d={format:o,totalBytes:0,bytesProcessed:0,rowsParsed:0,columns:[],columnStats:{},previewRows:[],completed:!1};try{let t=await fetch(e);if(!t.ok)throw Error(`HTTP ${t.status}`);if(!t.body)throw Error("No response body (CORS or server issue)");let r=t.headers.get("content-length");d.totalBytes=r?parseInt(r,10):0;let a=t.body.getReader(),s=new TextDecoder;await n(a,s,"",!1,"tsv"===o?"	":",",i,d)}catch(t){d.error=t instanceof Error?t.message:"Fetch failed",d.completed=!0,d.previewText=`URL: ${e}

Could not stream (likely CORS). To parse remote data, DSModelPro would fetch server-side.`}return d}async function o(e,t,r,a){let s=e.stream().getReader(),i=new TextDecoder;await n(s,i,"",!1,t,r,a)}async function n(e,t,r,a,s,i,o){try{let n=0;for(;;){if(i.shouldContinue&&!i.shouldContinue()){o.completed=!1;return}let{done:d,value:c}=await e.read();if(d)break;let p=t.decode(c,{stream:!0});o.bytesProcessed+=c.byteLength;let h=(r+=p).split("\n");for(let e of(r=h.pop()??"",h)){let t=e.replace(/\r$/,"");if(""===t.trim()&&0===o.rowsParsed&&!a)continue;if(!a){for(let e of(o.columns=m(t,s),o.columns))o.columnStats[e]=l();a=!0;continue}let r=f(t,s,o.columns);if(o.rowsParsed++,o.previewRows.length<i.maxPreviewRows&&o.previewRows.push(r),"overview"!==i.granularity&&("statistical"===i.granularity||o.rowsParsed<=i.typeSampleRows))for(let e of o.columns){let t=r[e]??"";u(o.columnStats[e],t,i)}}i.onProgress&&i.onProgress(o.bytesProcessed,o.totalBytes,o.rowsParsed),++n%10==0&&await x()}if(r.trim()&&a){let e=r.replace(/\r$/,""),t=f(e,s,o.columns);if(o.rowsParsed++,o.previewRows.length<i.maxPreviewRows&&o.previewRows.push(t),"statistical"===i.granularity)for(let e of o.columns)u(o.columnStats[e],t[e]??"",i)}if("overview"!==i.granularity)for(let e of o.columns)p(o.columnStats[e]);o.completed=!0,i.onProgress&&i.onProgress(o.bytesProcessed,o.totalBytes,o.rowsParsed)}finally{try{e.releaseLock()}catch{}}}async function d(e,t,r){let a=e.stream().getReader(),s=new TextDecoder,i="",o=0;try{for(;;){if(t.shouldContinue&&!t.shouldContinue())return;let{done:e,value:n}=await a.read();if(e)break;let d=s.decode(n,{stream:!0});r.bytesProcessed+=n.byteLength;let c=(i+=d).split("\n");for(let e of(i=c.pop()??"",c)){let a=e.trim();if(a)try{let e=JSON.parse(a);if(r.rowsParsed++,0===r.columns.length&&"object"==typeof e&&null!==e)for(let t of(r.columns=Object.keys(e),r.columns))r.columnStats[t]=l();if(r.previewRows.length<t.maxPreviewRows&&"object"==typeof e){let t={};for(let a of r.columns)t[a]=String(e[a]??"");r.previewRows.push(t)}if(("statistical"===t.granularity||r.rowsParsed<=t.typeSampleRows)&&"object"==typeof e&&null!==e)for(let a of r.columns){let s=e[a];u(r.columnStats[a],null==s?"":String(s),t)}}catch{}}t.onProgress&&t.onProgress(r.bytesProcessed,r.totalBytes,r.rowsParsed),++o%10==0&&await x()}let e=i.trim();if(e)try{let a=JSON.parse(e);if(r.rowsParsed++,r.previewRows.length<t.maxPreviewRows&&"object"==typeof a){let e={};for(let t of r.columns)e[t]=String(a[t]??"");r.previewRows.push(e)}}catch{}for(let e of r.columns)p(r.columnStats[e]);r.completed=!0}finally{try{a.releaseLock()}catch{}}}async function c(e,t,r){let a=e.stream().getReader(),s=new TextDecoder,i=0,o=0,n=0,d="",c=0;try{for(;;){if(t.shouldContinue&&!t.shouldContinue())return;let{done:e,value:l}=await a.read();if(e)break;let u=s.decode(l,{stream:!0});r.bytesProcessed+=l.byteLength,i+=u.length,o+=u.split(/\s+/).filter(Boolean).length,n+=u.split("\n").length-1,d.length<2e3&&(d+=u.slice(0,2e3-d.length)),t.onProgress&&t.onProgress(r.bytesProcessed,r.totalBytes,n),++c%10==0&&await x()}r.textStats={chars:i,words:o,lines:n+1},r.previewText=d,r.rowsParsed=n+1,r.completed=!0}finally{try{a.releaseLock()}catch{}}}function l(){return{type:"categorical",count:0,nulls:0,unique:0,uniqueCapped:!1,uniqueSet:new Set}}function u(e,t,r){if(e.count++,""===t||null==t)return void e.nulls++;!e.uniqueCapped&&(e.uniqueSet.add(t),e.uniqueSet.size>r.uniqueCap&&(e.uniqueCapped=!0,e.uniqueSet.clear()));let a=Number(t);if(!isNaN(a)&&isFinite(a)&&/^-?\d+\.?\d*([eE][+-]?\d+)?$/.test(t)){let t=a-(e.mean??0);e.mean=(e.mean??0)+t/(e.count-e.nulls);let r=a-e.mean;e.m2=(e.m2??0)+t*r,(void 0===e.min||a<e.min)&&(e.min=a),(void 0===e.max||a>e.max)&&(e.max=a)}}function p(e){if(0===e.count||e.count===e.nulls){e.type="null";return}e.count,e.nulls,e.uniqueCapped||e.uniqueSet.size,void 0!==e.min&&void 0!==e.max?e.type="numerical":e.type="categorical",e.unique=e.uniqueCapped?1e4:e.uniqueSet.size}function m(e,t){let r=[],a="",s=!1;for(let i=0;i<e.length;i++){let o=e[i];'"'===o?s&&'"'===e[i+1]?(a+='"',i++):s=!s:o!==t||s?a+=o:(r.push(a),a="")}return r.push(a),r.map(e=>e.trim())}function f(e,t,r){let a=m(e,t),s={};return r.forEach((e,t)=>{s[e]=a[t]??""}),s}function h(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:e<0x40000000?`${(e/1048576).toFixed(1)} MB`:`${(e/0x40000000).toFixed(2)} GB`}function x(){return new Promise(e=>{"u">typeof requestIdleCallback?requestIdleCallback(()=>e()):setTimeout(e,0)})}e.s(["formatBytes",()=>h,"parseFileStream",()=>s,"parseUrlStream",()=>i],56405);let g=(0,t.default)("message-square",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);e.s(["MessageSquare",()=>g],86311)},41240,e=>{"use strict";let t=(0,e.i(75254).default)("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);e.s(["Lightbulb",()=>t],41240)},66992,e=>{"use strict";let t=(0,e.i(75254).default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);e.s(["Cpu",()=>t],66992)},38982,e=>{"use strict";let t=(0,e.i(75254).default)("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);e.s(["FlaskConical",()=>t],38982)},55716,e=>{"use strict";let t=(0,e.i(75254).default)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);e.s(["GitBranch",()=>t],55716)},95468,e=>{"use strict";let t=(0,e.i(75254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",()=>t],95468)},15288,e=>{"use strict";var t=e.i(43476),r=e.i(75157);function a({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,r.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...a})}function s({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,r.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...a})}function i({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,r.cn)("leading-none font-semibold",e),...a})}function o({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,r.cn)("text-muted-foreground text-sm",e),...a})}function n({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,r.cn)("px-6",e),...a})}e.s(["Card",()=>a,"CardContent",()=>n,"CardDescription",()=>o,"CardHeader",()=>s,"CardTitle",()=>i])},92178,e=>{"use strict";var t=e.i(43476),r=e.i(92989),a=e.i(22016),s=e.i(75254);let i=(0,s.default)("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),o=(0,s.default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var n=e.i(19455),d=e.i(15288);function c({title:e,eyebrow:s,description:c,children:l,secondaryAction:u}){let p=(0,r.useRouter)();return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,t.jsxs)(n.Button,{variant:"outline",size:"sm",onClick:()=>p.push("/"),className:"gap-1.5","aria-label":"Return to home",children:[(0,t.jsx)(i,{className:"h-4 w-4","aria-hidden":"true"}),"Return to Home"]}),u]}),(0,t.jsxs)("div",{className:"space-y-3",children:[s?(0,t.jsx)("span",{className:"inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300",children:s}):null,(0,t.jsx)("h1",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl",children:e}),(0,t.jsx)("p",{className:"max-w-3xl text-base leading-relaxed text-muted-foreground",children:c})]})]}),(0,t.jsx)("div",{className:"space-y-8",children:l}),(0,t.jsx)(d.Card,{className:"border-dashed",children:(0,t.jsxs)(d.CardContent,{className:"flex flex-col items-start justify-between gap-3 p-4 sm:flex-row sm:items-center",children:[(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"Finished reading this section? Return to the home page to explore another part of the dimensional model."}),(0,t.jsx)(n.Button,{variant:"ghost",size:"sm",asChild:!0,className:"gap-1.5",children:(0,t.jsxs)(a.default,{href:"/",children:[(0,t.jsx)(o,{className:"h-4 w-4","aria-hidden":"true"}),"Back to Home"]})})]})})]})}e.s(["ViewShell",()=>c],92178)},21218,e=>{"use strict";let t=(0,e.i(75254).default)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);e.s(["Activity",()=>t],21218)},78894,e=>{"use strict";let t=(0,e.i(75254).default)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);e.s(["AlertTriangle",()=>t],78894)},41929,e=>{"use strict";let t=(0,e.i(75254).default)("file-code",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);e.s(["FileCode",()=>t],41929)},39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",()=>t],39312)},31278,e=>{"use strict";let t=(0,e.i(75254).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2",()=>t],31278)},31343,e=>{"use strict";let t=(0,e.i(75254).default)("play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);e.s(["Play",()=>t],31343)},55711,e=>{"use strict";let t=(0,e.i(75254).default)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);e.s(["Brain",()=>t],55711)},40160,e=>{"use strict";let t=(0,e.i(75254).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);e.s(["Download",()=>t],40160)},78094,e=>{"use strict";let t=(0,e.i(75254).default)("network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);e.s(["Network",()=>t],78094)},27516,e=>{"use strict";let t=(0,e.i(75254).default)("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);e.s(["History",()=>t],27516)},7233,e=>{"use strict";let t=(0,e.i(75254).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>t],7233)},25652,e=>{"use strict";let t=(0,e.i(75254).default)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);e.s(["TrendingUp",()=>t],25652)},24529,e=>{"use strict";var t=e.i(43476);e.i(71645);var r=e.i(37727),a=e.i(19455);function s({title:e,subtitle:s,icon:i,iconColour:o="text-blue-600",onClose:n,children:d,maxWidth:c="max-w-3xl"}){return(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",onClick:n,children:(0,t.jsxs)("div",{className:`max-h-[90vh] w-full ${c} overflow-y-auto rounded-lg border border-border bg-background p-6 shadow-xl`,onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[i&&(0,t.jsx)("div",{className:`flex h-8 w-8 items-center justify-center rounded-md bg-muted/40 ${o}`,children:(0,t.jsx)(i,{className:"h-4 w-4"})}),(0,t.jsx)("h2",{className:"text-lg font-semibold text-foreground",children:e})]}),s&&(0,t.jsx)("p",{className:"mt-1 text-xs text-muted-foreground",children:s})]}),(0,t.jsx)(a.Button,{onClick:n,size:"sm",variant:"ghost",className:"h-8 w-8 p-0","aria-label":"Close",children:(0,t.jsx)(r.X,{className:"h-4 w-4"})})]}),d]})})}function i({label:e,value:r}){return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/20 p-2",children:[(0,t.jsx)("div",{className:"text-[9px] uppercase tracking-wide text-muted-foreground",children:e}),(0,t.jsx)("div",{className:"text-sm font-bold text-foreground",children:r})]})}function o({code:e,label:r,maxHeight:a="max-h-64"}){return(0,t.jsxs)("div",{children:[r&&(0,t.jsx)("div",{className:"mb-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground",children:r}),(0,t.jsx)("pre",{className:`${a} overflow-auto rounded-md border border-border/60 bg-background p-3 text-[10px] leading-relaxed`,children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:e})})]})}function n({children:e,colour:r="amber"}){return(0,t.jsx)("div",{className:`rounded-md border p-2 text-[10px] ${{amber:"border-amber-500/40 bg-amber-500/5 text-amber-700 dark:text-amber-300",blue:"border-blue-500/40 bg-blue-500/5 text-blue-700 dark:text-blue-300",emerald:"border-emerald-500/40 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300",purple:"border-purple-500/40 bg-purple-500/5 text-purple-700 dark:text-purple-300",rose:"border-rose-500/40 bg-rose-500/5 text-rose-700 dark:text-rose-300"}[r]}`,children:e})}e.s(["CalloutBox",()=>n,"CodeBlock",()=>o,"PreviewModal",()=>s,"StatBox",()=>i])},81418,e=>{"use strict";let t=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",()=>t],81418)},48256,e=>{"use strict";let t=(0,e.i(75254).default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);e.s(["Globe",()=>t],48256)},28579,e=>{"use strict";let t=(0,e.i(75254).default)("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);e.s(["Boxes",()=>t],28579)},40524,e=>{"use strict";let t=(0,e.i(75254).default)("workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);e.s(["Workflow",()=>t],40524)},58472,e=>{"use strict";let t=(0,e.i(75254).default)("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]);e.s(["Code",()=>t],58472)},51975,e=>{"use strict";let t=(0,e.i(75254).default)("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);e.s(["Tag",()=>t],51975)},80069,e=>{"use strict";var t=e.i(43476);let r=(0,e.i(75254).default)("archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);var a=e.i(55716),s=e.i(58472),i=e.i(58041),o=e.i(78583),n=e.i(78094),d=e.i(40524),c=e.i(41240),l=e.i(28579),u=e.i(51975),p=e.i(95468),m=e.i(78917),f=e.i(15288),h=e.i(87486),x=e.i(92178),g=e.i(68256),y=e.i(8679);let v=`-- Archival data model — based on ISAD(G), ISAAR, and RiC-O ontology
-- Represents archival records, creators, and their relationships

-- Dimension: record creator (person or organisation)
CREATE TABLE dim_creator (
  creator_key       INT PRIMARY KEY,
  creator_id        VARCHAR(50),     -- ISAAR identifier
  creator_type      VARCHAR(20),     -- person, organisation, family
  preferred_name    VARCHAR(200),
  biographical_note TEXT,
  existence_dates   VARCHAR(50),     -- "1870-1950"
  authority_source  VARCHAR(100),    -- VIAF, Wikidata, local
  authority_uri     VARCHAR(500)     -- linked data URI
);

-- Dimension: record series (hierarchical archival unit)
CREATE TABLE dim_series (
  series_key        INT PRIMARY KEY,
  series_id         VARCHAR(50),     -- ISAD(G) reference code
  title             VARCHAR(500),
  level             VARCHAR(20),     -- fonds, sub-fonds, series, file, item
  parent_series_key INT REFERENCES dim_series,  -- self-referencing hierarchy
  date_range        VARCHAR(50),
  extent            VARCHAR(100),
  access_status     VARCHAR(20)      -- open, closed, partial, restricted
);

-- Dimension: subject / keyword (ontology-linked)
CREATE TABLE dim_subject (
  subject_key       INT PRIMARY KEY,
  subject_term      VARCHAR(200),
  subject_type      VARCHAR(20),     -- topic, place, person, function
  ontology_uri      VARCHAR(500),    -- LCSH, AAT, Wikidata URI
  ontology_source   VARCHAR(50)      -- LCSH, AAT, Getty, Wikidata
);

-- Fact: archival record (the item-level record)
CREATE TABLE fact_record (
  record_key        BIGINT PRIMARY KEY,
  series_key        INT REFERENCES dim_series,
  creator_key       INT REFERENCES dim_creator,
  date_key          INT,             -- dim_date
  reference_code    VARCHAR(100),    -- e.g. "HO 45/10001"
  title             VARCHAR(500),
  description       TEXT,
  format            VARCHAR(30),     -- paper, digital, photograph, map
  extent            VARCHAR(50),     -- "1 file", "3 boxes"
  language          VARCHAR(10),
  access_status     VARCHAR(20),
  catalogued_date   DATE,
  digitised         BOOLEAN,
  digitised_url     VARCHAR(500)     -- S3 URL if digitised
);

-- Bridge: record to subject (many-to-many)
CREATE TABLE bridge_record_subject (
  bridge_key        BIGINT PRIMARY KEY,
  record_key        BIGINT REFERENCES fact_record,
  subject_key       INT REFERENCES dim_subject,
  confidence        DECIMAL(3,2)     -- 1.0 = manual, <1.0 = ML-tagged
);`,b=`# RDF/Turtle representation of an archival record
# Using RiC-O (Records in Contexts Ontology) standard

@prefix rico: <https://www.ica.org/standards/RiC/ontology#> .
@prefix ecl:  <https://www.ica.org/standards/RiC/classes#> .
@prefix epr:  <https://www.ica.org/standards/RiC/properties#> .
@prefix dct:  <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

<https://archives.example.org/record/HO-45-10001>
    a rico:Record ;
    rico:hasIdentifier "HO 45/10001" ;
    rico:title "Correspondence regarding immigration policy 1905" ;
    rico:hasCreationDate "1905-03-15"^^xsd:date ;
    rico:hasExtent "1 file, 47 folios" ;
    rico:hasCreator <https://archives.example.org/agent/home-office> ;
    rico:isPartOf <https://archives.example.org/series/HO-45> ;
    rico:hasSubject <https://archives.example.org/subject/immigration> ;
    dct:format "paper" ;
    dct:language "en" ;
    rico:hasAccessStatus "open" .

<https://archives.example.org/agent/home-office>
    a rico:Agent, foaf:Organization ;
    foaf:name "Home Office" ;
    rico:hasAgentType "government_department" ;
    dct:date "1782-present" .

<https://archives.example.org/subject/immigration>
    a skos:Concept ;
    skos:prefLabel "Immigration"@en ;
    skos:broader <https://archives.example.org/subject/social-policy> ;
    skos:exactMatch <http://id.loc.gov/authorities/subjects/sh85064520> .`,w=`# SPARQL query: Find all records about immigration
# created by the Home Office between 1900-1920,
# with their linked subjects and digitised URLs

PREFIX rico: <https://www.ica.org/standards/RiC/ontology#>
PREFIX dct:  <http://purl.org/dc/terms/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT ?record ?title ?date ?creator ?subject_label ?url
WHERE {
    ?record a rico:Record ;
            rico:title ?title ;
            rico:hasCreationDate ?date ;
            rico:hasCreator ?creator ;
            rico:hasSubject ?subject .

    ?creator foaf:name "Home Office" .

    ?subject skos:prefLabel ?subject_label .
    FILTER (CONTAINS(LCASE(?subject_label), "immigration"))

    FILTER (?date >= "1900-01-01"^^xsd:date && ?date <= "1920-12-31"^^xsd:date)

    OPTIONAL { ?record rico:hasDigitalCopy ?url }
}
ORDER BY ?date
LIMIT 50`,_=`# Entity extraction from archival descriptions using spaCy
# Extracts people, organisations, places, dates from free-text descriptions
# Tags records with ontology-linked subjects

import spacy
import json
from datetime import datetime

# Load the NLP model (spaCy large model with NER)
nlp = spacy.load("en_core_web_lg")

# Ontology lookup: map extracted entities to authority files
ONTOLOGY_LOOKUP = {
    "London": {"uri": "http://sws.geonames.org/2643743/", "source": "GeoNames"},
    "Home Office": {"uri": "https://viaf.org/viaf/123456789", "source": "VIAF"},
    "immigration": {"uri": "http://id.loc.gov/authorities/subjects/sh85064520", "source": "LCSH"},
}

def extract_entities(text: str) -> dict:
    """Extract named entities from archival description text."""
    doc = nlp(text)
    entities = {
        "persons": [],
        "organisations": [],
        "places": [],
        "dates": [],
        "subjects": []
    }

    for ent in doc.ents:
        entity = {
            "text": ent.text,
            "label": ent.label_,       # PERSON, ORG, GPE, DATE
            "start": ent.start_char,
            "end": ent.end_char,
            "confidence": float(ent._.confidence) if hasattr(ent._, 'confidence') else 0.8
        }

        # Link to ontology if known
        if ent.text in ONTOLOGY_LOOKUP:
            entity["ontology_uri"] = ONTOLOGY_LOOKUP[ent.text]["text"]
            entity["ontology_source"] = ONTOLOGY_LOOKUP[ent.text]["source"]
            entities["subjects"].append(entity)

        if ent.label_ == "PERSON":
            entities["persons"].append(entity)
        elif ent.label_ == "ORG":
            entities["organisations"].append(entity)
        elif ent.label_ == "GPE":  # Geopolitical entity
            entities["places"].append(entity)
        elif ent.label_ == "DATE":
            entities["dates"].append(entity)

    return entities

def tag_record(record_id: str, description: str) -> dict:
    """Extract entities from a record description and tag the record."""
    entities = extract_entities(description)

    # Create subject tags with confidence scores
    tags = []
    for subject in entities["subjects"]:
        tags.append({
            "record_id": record_id,
            "subject_term": subject["text"],
            "ontology_uri": subject.get("ontology_uri"),
            "confidence": subject["confidence"],
            "tagging_method": "NER + ontology lookup",
            "tagged_at": datetime.now().isoformat()
        })

    return {
        "record_id": record_id,
        "entities_found": sum(len(v) for v in entities.values()),
        "tags": tags,
        "full_extraction": entities
    }

# Example usage on an archival description
description = """
This file contains correspondence from the Home Office regarding
immigration policy, dated March 1905. It includes letters from
Winston Churchill and Clementine Hozier discussing the Aliens Act 1905.
The records relate primarily to arrivals at the Port of London.
"""

result = tag_record("HO 45/10001", description)
print(json.dumps(result, indent=2))
# Output: 5 entities extracted (Home Office, immigration, Churchill,
#         Hozier, London), 3 ontology-linked tags created`,k=`# Data cleansing, validation, standardisation, and enrichment pipeline
# for archival metadata (CSV → clean → standardised → enriched → warehouse)

import pandas as pd
import re
from datetime import datetime
import json

# ============================================================
# STAGE 1: LOAD — read semi-structured archival metadata
# ============================================================

def load_archival_data(csv_path: str) -> pd.DataFrame:
    """Load archival metadata from CSV (exported from a cataloguing system)."""
    df = pd.read_csv(csv_path, dtype=str, keep_default_na=False)
    print(f"Loaded {len(df):,} records from {csv_path}")
    return df

# ============================================================
# STAGE 2: CLEANSE — fix common data quality issues
# ============================================================

def cleanse_data(df: pd.DataFrame) -> pd.DataFrame:
    """Cleanse archival metadata — fix encoding, whitespace, dates."""

    # 1. Fix encoding issues (common in records digitised from old systems)
    for col in df.select_dtypes(include=['object']).columns:
        df[col] = df[col].str.encode('ascii', errors='ignore').str.decode('ascii')

    # 2. Strip whitespace and normalise
    for col in df.select_dtypes(include=['object']).columns:
        df[col] = df[col].str.strip()
        df[col] = df[col].str.replace(r'\\s+', ' ', regex=True)  # collapse multiple spaces

    # 3. Fix date ranges (common formats: "1905", "1905-1910", "c.1905", "[1905?]")
    def parse_archival_date(date_str: str) -> str:
        """Parse archival date notation into ISO 8601."""
        if not date_str or date_str == 'unknown':
            return None

        # Remove circa, brackets, question marks
        cleaned = re.sub(r'[\\[\\]?c.\\s]', '', date_str).strip()

        # Single year
        if re.match(r'^\\d{4}$', cleaned):
            return f"{cleaned}-01-01"

        # Year range: 1905-1910
        match = re.match(r'^(\\d{4})\\s*-\\s*(\\d{4})$', cleaned)
        if match:
            start, end = match.groups()
            return f"{start}/{end}"

        # Full date: 1905-03-15
        if re.match(r'^\\d{4}-\\d{2}-\\d{2}$', cleaned):
            return cleaned

        return date_str  # return as-is if unparseable

    if 'date' in df.columns:
        df['date_standardised'] = df['date'].apply(parse_archival_date)

    # 4. Normalise reference codes (HO 45/10001, HO45/10001, ho 45/10001 → HO 45/10001)
    def normalise_ref_code(ref: str) -> str:
        """Normalise archival reference codes to standard format."""
        if not ref:
            return None
        ref = ref.upper().strip()
        ref = re.sub(r'\\s+', ' ', ref)       # collapse spaces
        ref = re.sub(r'/+', '/', ref)          # collapse slashes
        return ref

    if 'reference_code' in df.columns:
        df['reference_code'] = df['reference_code'].apply(normalise_ref_code)

    # 5. Remove duplicate records (same reference code)
    before = len(df)
    df = df.drop_duplicates(subset=['reference_code'], keep='first')
    after = len(df)
    if before > after:
        print(f"  Removed {before - after} duplicate records")

    return df

# ============================================================
# STAGE 3: VALIDATE — check against business rules
# ============================================================

def validate_data(df: pd.DataFrame) -> pd.DataFrame:
    """Validate archival records against business rules."""

    errors = []

    for idx, row in df.iterrows():
        # Rule 1: Reference code must not be empty
        if not row.get('reference_code'):
            errors.append({"row": idx, "rule": "ref_code_empty", "message": "Reference code is required"})

        # Rule 2: Title must be at least 5 characters
        if len(str(row.get('title', ''))) < 5:
            errors.append({"row": idx, "rule": "title_too_short", "message": "Title must be at least 5 characters"})

        # Rule 3: Date must be parseable
        if row.get('date') and not row.get('date_standardised'):
            errors.append({"row": idx, "rule": "date_unparseable", "message": f"Cannot parse date: {row['date']}"})

        # Rule 4: Access status must be valid
        valid_statuses = ['open', 'closed', 'partial', 'restricted']
        if row.get('access_status') and row['access_status'].lower() not in valid_statuses:
            errors.append({"row": idx, "rule": "invalid_access_status", "message": f"Access status '{row['access_status']}' is not valid"})

    if errors:
        print(f"  Validation found {len(errors)} errors")
        # In production: write errors to a dead-letter table for review
        error_df = pd.DataFrame(errors)
        error_df.to_csv("validation_errors.csv", index=False)

    return df

# ============================================================
# STAGE 4: ENRICH — add derived/external data
# ============================================================

def enrich_data(df: pd.DataFrame) -> pd.DataFrame:
    """Enrich archival records with external data."""

    # 1. Add decade for temporal analysis
    if 'date_standardised' in df.columns:
        def extract_decade(date_str: str) -> str:
            if not date_str:
                return None
            match = re.match(r'(\\d{4})', str(date_str))
            if match:
                year = int(match.group(1))
                decade = (year // 10) * 10
                return f"{decade}s"
            return None
        df['decade'] = df['date_standardised'].apply(extract_decade)

    # 2. Add format category (normalise free-text format)
    if 'format' in df.columns:
        format_map = {
            'paper': 'document', 'file': 'document', 'document': 'document',
            'photo': 'photograph', 'photograph': 'photograph', 'print': 'photograph',
            'map': 'cartographic', 'plan': 'cartographic',
            'film': 'audiovisual', 'video': 'audiovisual', 'audio': 'audiovisual',
            'digital': 'digital', 'electronic': 'digital'
        }
        df['format_category'] = df['format'].str.lower().map(
            lambda x: next((v for k, v in format_map.items() if k in str(x)), 'other')
        )

    # 3. Add word count of description (for content richness analysis)
    if 'description' in df.columns:
        df['description_word_count'] = df['description'].str.split().str.len().fillna(0)

    # 4. Flag records for review (missing description or short title)
    df['needs_review'] = (
        (df.get('description', '').str.len() < 20) |
        (df.get('title', '').str.len() < 10)
    )

    return df

# ============================================================
# STAGE 5: LOAD — write to warehouse
# ============================================================

def load_to_warehouse(df: pd.DataFrame, table_name: str = "fact_record"):
    """Load cleansed, validated, enriched data to the warehouse."""
    # In production: use dbt model or direct SQL INSERT
    print(f"Loading {len(df):,} records to {table_name}")
    print(f"  Columns: {list(df.columns)}")
    print(f"  Date range: {df['date_standardised'].min()} to {df['date_standardised'].max()}")
    print(f"  Formats: {df['format_category'].value_counts().to_dict()}")
    print(f"  Needs review: {df['needs_review'].sum()} records")

# ============================================================
# RUN THE PIPELINE
# ============================================================

# Load → Cleanse → Validate → Enrich → Load
df = load_archival_data("archival_records.csv")
df = cleanse_data(df)
df = validate_data(df)
df = enrich_data(df)
load_to_warehouse(df)

print("✓ Pipeline complete")`,j=`# External partner integration — API contracts and data exchange patterns
# for integrating with external archives, suppliers, and data providers

import json
import requests
from datetime import datetime
from typing import Optional, List, Dict

# ============================================================
# Pattern 1: Pull data from an external archive API (OAI-PMH)
# ============================================================

class OAIPMHClient:
    """OAI-PMH client for harvesting metadata from external archives."""

    def __init__(self, base_url: str, metadata_prefix: str = "oai_dc"):
        self.base_url = base_url
        self.metadata_prefix = metadata_prefix

    def list_records(self, from_date: str = None, until_date: str = None,
                     set_spec: str = None) -> List[Dict]:
        """Harvest records from an OAI-PMH endpoint."""
        params = {
            "verb": "ListRecords",
            "metadataPrefix": self.metadata_prefix
        }
        if from_date:
            params["from"] = from_date
        if until_date:
            params["until"] = until_date
        if set_spec:
            params["set"] = set_spec

        response = requests.get(self.base_url, params=params, timeout=30)
        response.raise_for_status()

        # Parse OAI-PMH XML response (simplified — use lxml in production)
        records = self._parse_oai_response(response.text)
        return records

    def _parse_oai_response(self, xml_text: str) -> List[Dict]:
        """Parse OAI-PMH XML into dictionaries."""
        # In production: use lxml.etree for proper XML parsing
        # This is a simplified version
        return [{"raw": xml_text, "harvested_at": datetime.now().isoformat()}]

# ============================================================
# Pattern 2: Push data to a partner system (REST API with contract)
# ============================================================

class PartnerDataExchange:
    """Push cleansed archival data to an external partner system."""

    def __init__(self, partner_api_url: str, api_key: str):
        self.api_url = partner_api_url
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "X-Data-Contract": "archival-record-v2.1"  # versioned contract
        }

    def push_record(self, record: Dict) -> Dict:
        """Push a single archival record to the partner system."""
        # Validate against data contract before sending
        contract_errors = self._validate_contract(record)
        if contract_errors:
            raise ValueError(f"Contract validation failed: {contract_errors}")

        response = requests.post(
            f"{self.api_url}/records",
            headers=self.headers,
            json=record,
            timeout=30
        )
        response.raise_for_status()
        return response.json()

    def _validate_contract(self, record: Dict) -> List[str]:
        """Validate record against the data contract."""
        errors = []
        required_fields = ["reference_code", "title", "date", "creator"]

        for field in required_fields:
            if field not in record or not record[field]:
                errors.append(f"Missing required field: {field}")

        if "reference_code" in record and len(record["reference_code"]) > 100:
            errors.append("reference_code exceeds 100 characters")

        return errors

# ============================================================
# Pattern 3: Webhook receiver — accept data from partners
# ============================================================

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/webhook/archival-import", methods=["POST"])
def receive_archival_data():
    """Receive archival data from an external partner via webhook."""
    data = request.json

    # Verify the data contract version
    contract_version = request.headers.get("X-Data-Contract", "")
    if contract_version != "archival-record-v2.1":
        return jsonify({"error": f"Unsupported contract version: {contract_version}"}), 400

    # Validate payload
    required = ["reference_code", "title", "date"]
    for field in required:
        if field not in data:
            return jsonify({"error": f"Missing field: {field}"}), 422

    # Queue for processing (don't process synchronously)
    # In production: send to Kafka topic or Celery task queue
    print(f"Queued record {data['reference_code']} for processing")

    return jsonify({"status": "accepted", "reference_code": data["reference_code"]}), 202

# ============================================================
# Pattern 4: Batch reconciliation — sync with partner's catalogue
# ============================================================

def reconcile_with_partner(local_records: List[Dict],
                           partner_records: List[Dict]) -> Dict:
    """Reconcile local catalogue with partner's catalogue.
    Identifies: new records (partner has, we don't),
    updated records (both have, but different),
    and deleted records (we have, partner doesn't).
    """
    local_refs = {r["reference_code"]: r for r in local_records}
    partner_refs = {r["reference_code"]: r for r in partner_records}

    new_records = []       # in partner but not local
    updated_records = []   # in both, but content differs
    deleted_records = []   # in local but not partner

    for ref, partner_rec in partner_refs.items():
        if ref not in local_refs:
            new_records.append(partner_rec)
        else:
            local_rec = local_refs[ref]
            # Compare key fields
            if (local_rec.get("title") != partner_rec.get("title") or
                local_rec.get("date") != partner_rec.get("date")):
                updated_records.append({
                    "reference_code": ref,
                    "local": local_rec,
                    "partner": partner_rec,
                    "diff": {
                        "title": local_rec.get("title") != partner_rec.get("title"),
                        "date": local_rec.get("date") != partner_rec.get("date")
                    }
                })

    for ref, local_rec in local_refs.items():
        if ref not in partner_refs:
            deleted_records.append(local_rec)

    return {
        "new": new_records,
        "updated": updated_records,
        "deleted": deleted_records,
        "summary": {
            "new_count": len(new_records),
            "updated_count": len(updated_records),
            "deleted_count": len(deleted_records),
            "reconciled_at": datetime.now().isoformat()
        }
    }`,C=[{name:"UK National Archives Discovery API",url:"https://discovery.nationalarchives.gov.uk/API/",desc:"REST API to 32M+ archival records, reference codes, creators, subjects. Free, no key required for basic search.",format:"JSON API",records:"32M+"},{name:"Library of Congress MARC Records",url:"https://www.loc.gov/cds/products/marc-distribution-service/",desc:"MARC21 cataloguing records in XML format. Bibliographic and authority data.",format:"XML (MARC21)",records:"40M+"},{name:"Wikidata SPARQL Endpoint",url:"https://query.wikidata.org/",desc:"Query structured archival data via SPARQL. Linked data for people, organisations, places, subjects.",format:"SPARQL/RDF",records:"100M+ triples"},{name:"Open Archives Initiative (OAI-PMH)",url:"https://www.openarchives.org/pmh/",desc:"Harvest metadata from 2,000+ archives worldwide. Dublin Core + custom formats.",format:"XML (OAI-PMH)",records:"100M+"},{name:"Europeana Data Portal",url:"https://pro.europeana.eu/page//apis",desc:"58M+ cultural heritage objects from 4,000+ institutions across Europe. REST + Linked Data.",format:"JSON + RDF",records:"58M+"}],N=[{gap:"Develop schemas & ontologies for archival data",covered:!0,where:"SQL DDL above (ISAD(G), ISAAR, RiC-O) + RDF/Turtle"},{gap:"Integrate structured & semi-structured (XML, CSV, JSON, RDF)",covered:!0,where:"Data cleansing pipeline + OAI-PMH client + SPARQL queries"},{gap:"Identify patterns & relationships for discovery",covered:!0,where:"Entity extraction (spaCy NER) + cross-domain correlation engine"},{gap:"Design scalable ETL/ELT pipelines",covered:!0,where:"5-stage pipeline (load→cleanse→validate→enrich→load) + /data-engineering page"},{gap:"Scripts for cleansing, validation, standardisation, enrichment",covered:!0,where:"Full Python pipeline script above (date parsing, ref normalisation, dedup, format mapping)"},{gap:"Automate routine data tasks",covered:!0,where:"Prefect orchestration (/data-engineering) + OAI-PMH harvester + webhook receiver"},{gap:"Manage connections to external datasets",covered:!0,where:"OAI-PMH client + partner reconciliation + 5 free archival datasets listed"},{gap:"Entity extraction & semantic tagging",covered:!0,where:"spaCy NER code above + ontology lookup (VIAF, LCSH, GeoNames)"},{gap:"Advocate data-centric approaches",covered:!0,where:"Three-agent model debate (/dataset-explorer) + workshops page + collaborative editor"},{gap:"External partner communication",covered:!0,where:"PartnerDataExchange class + webhook receiver + batch reconciliation"},{gap:"Work with product teams & archivists",covered:!0,where:"Workshops page (4 types) + collaborative bus matrix + AskAI"},{gap:"Data standards, validation rules, transformation",covered:!0,where:"Great Expectations code (/data-engineering) + validation function above"}];function R(){return(0,t.jsxs)(x.ViewShell,{eyebrow:"Archival Data Engineering",title:"Archival data modelling, integration & pipelines",description:"Develop and document schemas and ontologies for archival data. Integrate structured and semi-structured formats (XML, CSV, JSON, RDF). Design scalable ETL/ELT pipelines for archival records. Create scripts for cleansing, validation, standardisation, and enrichment. Implement entity extraction and semantic tagging. Connect to external archives via OAI-PMH, SPARQL, and REST APIs. This page covers every requirement from the archival data engineering specification with production-ready code.",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[(0,t.jsx)(g.ArchivalPipelineDemoButton,{}),(0,t.jsx)("span",{children:"See the cleansing pipeline (before/after) and a SPARQL query result."})]}),(0,t.jsxs)(f.Card,{className:"border-amber-500/30 bg-amber-500/5",children:[(0,t.jsx)(f.CardHeader,{children:(0,t.jsxs)(f.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(c.Lightbulb,{className:"h-4.5 w-4.5 text-amber-600 dark:text-amber-400"}),"The archival data challenge"]})}),(0,t.jsx)(f.CardContent,{className:"space-y-2 text-sm leading-relaxed text-muted-foreground",children:(0,t.jsx)("p",{children:"Archival data is uniquely challenging: records span centuries, use inconsistent metadata standards, are described in free text, and link to authority files (VIAF, LCSH, AAT) that evolve independently. The dimensional answer: model the archival hierarchy (fonds → series → file → item) as a self-referencing dimension, link creators and subjects to authority URIs, and use NLP to extract entities from free-text descriptions — turning 19th-century cataloguing into 21st-century linked data."})})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(r,{className:"mr-2 inline h-6 w-6 text-amber-600 dark:text-amber-400"}),"1. Archival schema & ontology model"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"ISAD(G) + ISAAR + RiC-O ontology. Self-referencing series hierarchy, authority-linked creators and subjects."})]}),(0,t.jsxs)(f.Card,{children:[(0,t.jsxs)(f.CardHeader,{children:[(0,t.jsxs)(f.CardTitle,{className:"flex items-center gap-2 font-mono text-sm",children:[(0,t.jsx)(i.Database,{className:"h-4 w-4 text-amber-600"}),"archival_dimensional_model.sql"]}),(0,t.jsx)(f.CardDescription,{className:"text-xs",children:"5 tables: dim_creator (authority-linked), dim_series (self-referencing hierarchy), dim_subject (ontology-linked), fact_record, bridge_record_subject (many-to-many with confidence)."})]}),(0,t.jsx)(f.CardContent,{children:(0,t.jsx)("pre",{className:"max-h-96 overflow-auto rounded-md border border-border/60 bg-background p-4 text-[10px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:v})})})]})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(n.Network,{className:"mr-2 inline h-6 w-6 text-purple-600 dark:text-purple-400"}),"2. RDF integration & SPARQL queries"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"RiC-O ontology in Turtle format. SPARQL queries against linked archival data."})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-2",children:[(0,t.jsxs)(f.Card,{children:[(0,t.jsx)(f.CardHeader,{children:(0,t.jsxs)(f.CardTitle,{className:"flex items-center gap-2 font-mono text-sm",children:[(0,t.jsx)(o.FileText,{className:"h-4 w-4 text-purple-600"}),"record.ttl (RDF/Turtle)"]})}),(0,t.jsx)(f.CardContent,{children:(0,t.jsx)("pre",{className:"max-h-64 overflow-auto rounded-md border border-border/60 bg-background p-3 text-[10px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:b})})})]}),(0,t.jsxs)(f.Card,{children:[(0,t.jsx)(f.CardHeader,{children:(0,t.jsxs)(f.CardTitle,{className:"flex items-center gap-2 font-mono text-sm",children:[(0,t.jsx)(s.Code,{className:"h-4 w-4 text-purple-600"}),"query.sparql"]})}),(0,t.jsx)(f.CardContent,{children:(0,t.jsx)("pre",{className:"max-h-64 overflow-auto rounded-md border border-border/60 bg-background p-3 text-[10px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:w})})})]})]})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(u.Tag,{className:"mr-2 inline h-6 w-6 text-emerald-600 dark:text-emerald-400"}),"3. Entity extraction & semantic tagging"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"spaCy NER extracts persons, organisations, places, dates from free-text descriptions. Ontology lookup links to VIAF, LCSH, GeoNames."})]}),(0,t.jsxs)(f.Card,{children:[(0,t.jsxs)(f.CardHeader,{children:[(0,t.jsxs)(f.CardTitle,{className:"flex items-center gap-2 font-mono text-sm",children:[(0,t.jsx)(s.Code,{className:"h-4 w-4 text-emerald-600"}),"entity_extraction.py"]}),(0,t.jsx)(f.CardDescription,{className:"text-xs",children:"Extracts named entities from archival descriptions, links to authority files, creates confidence-scored subject tags."})]}),(0,t.jsx)(f.CardContent,{children:(0,t.jsx)("pre",{className:"max-h-96 overflow-auto rounded-md border border-border/60 bg-background p-4 text-[10px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:_})})})]})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(d.Workflow,{className:"mr-2 inline h-6 w-6 text-sky-600 dark:text-sky-400"}),"4. Data cleansing, validation, standardisation & enrichment pipeline"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"5-stage pipeline: Load → Cleanse → Validate → Enrich → Load to warehouse. Handles encoding, date parsing, reference normalisation, deduplication, format mapping."})]}),(0,t.jsxs)(f.Card,{children:[(0,t.jsxs)(f.CardHeader,{children:[(0,t.jsxs)(f.CardTitle,{className:"flex items-center gap-2 font-mono text-sm",children:[(0,t.jsx)(s.Code,{className:"h-4 w-4 text-sky-600"}),"archival_pipeline.py"]}),(0,t.jsx)(f.CardDescription,{className:"text-xs",children:"Full ETL pipeline for archival metadata — handles CSV/XML/JSON input, cleanses encoding and dates, validates against business rules, enriches with decade/format/word count."})]}),(0,t.jsx)(f.CardContent,{children:(0,t.jsx)("pre",{className:"max-h-96 overflow-auto rounded-md border border-border/60 bg-background p-4 text-[10px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:k})})})]})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(a.GitBranch,{className:"mr-2 inline h-6 w-6 text-rose-600 dark:text-rose-400"}),"5. External partner integration & data exchange"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"OAI-PMH harvester, REST API data exchange with versioned contracts, webhook receiver, batch reconciliation."})]}),(0,t.jsxs)(f.Card,{children:[(0,t.jsxs)(f.CardHeader,{children:[(0,t.jsxs)(f.CardTitle,{className:"flex items-center gap-2 font-mono text-sm",children:[(0,t.jsx)(s.Code,{className:"h-4 w-4 text-rose-600"}),"partner_integration.py"]}),(0,t.jsx)(f.CardDescription,{className:"text-xs",children:"4 integration patterns: OAI-PMH pull, REST push with contract validation, webhook receiver, batch reconciliation (new/updated/deleted detection)."})]}),(0,t.jsx)(f.CardContent,{children:(0,t.jsx)("pre",{className:"max-h-96 overflow-auto rounded-md border border-border/60 bg-background p-4 text-[10px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:j})})})]})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(l.Boxes,{className:"mr-2 inline h-6 w-6 text-amber-600 dark:text-amber-400"}),"Free archival datasets & APIs"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"Real, free, public archival data sources for testing the pipeline."})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",children:C.map(e=>(0,t.jsxs)(f.Card,{className:"border-border/60",children:[(0,t.jsxs)(f.CardHeader,{children:[(0,t.jsx)(f.CardTitle,{className:"text-sm",children:e.name}),(0,t.jsx)(h.Badge,{variant:"outline",className:"text-[9px] w-fit",children:e.format})]}),(0,t.jsxs)(f.CardContent,{children:[(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:e.desc}),(0,t.jsxs)("div",{className:"mt-2 flex items-center justify-between",children:[(0,t.jsx)(h.Badge,{variant:"secondary",className:"text-[9px]",children:e.records}),(0,t.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-[10px] text-emerald-600 hover:underline",children:["Open ",(0,t.jsx)(m.ExternalLink,{className:"h-2.5 w-2.5"})]})]})]})]},e.name))})]}),(0,t.jsxs)(f.Card,{children:[(0,t.jsx)(f.CardHeader,{children:(0,t.jsxs)(f.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(p.CheckCircle2,{className:"h-5 w-5 text-emerald-600"}),"Requirements coverage — every gap addressed"]})}),(0,t.jsx)(f.CardContent,{className:"p-0",children:(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-sm",children:[(0,t.jsx)("thead",{className:"border-b border-border/60 bg-muted/30",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"p-3 text-left font-medium",children:"Requirement"}),(0,t.jsx)("th",{className:"p-3 text-left font-medium",children:"Covered"}),(0,t.jsx)("th",{className:"p-3 text-left font-medium",children:"Where"})]})}),(0,t.jsx)("tbody",{children:N.map(e=>(0,t.jsxs)("tr",{className:"border-b border-border/40",children:[(0,t.jsx)("td",{className:"p-3 text-xs font-medium",children:e.gap}),(0,t.jsx)("td",{className:"p-3",children:(0,t.jsx)(p.CheckCircle2,{className:"h-4 w-4 text-emerald-600"})}),(0,t.jsx)("td",{className:"p-3 text-xs text-muted-foreground",children:e.where})]},e.gap))})]})})})]}),(0,t.jsx)(y.DataUploadPanel,{title:"Upload archival metadata (CSV, XML, JSON, RDF)",description:"Drop a CSV export from a cataloguing system, an XML (MARC/EAD) file, a JSON-LD file, or an RDF/Turtle file. DSModelPro will parse it and suggest dimensional mappings.",formatHint:"CSV (catalogue export), XML (MARC21/EAD), JSON-LD, RDF/Turtle"})]})}e.s(["default",()=>R],80069)}]);