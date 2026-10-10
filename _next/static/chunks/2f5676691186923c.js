(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30325,e=>{"use strict";let t=(0,e.i(75254).default)("table-2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);e.s(["Table2",()=>t],30325)},59208,e=>{"use strict";let t=(0,e.i(75254).default)("calendar-clock",[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);e.s(["CalendarClock",()=>t],59208)},35212,e=>{"use strict";let t="dsmodelpro:";function a(){try{return window.localStorage}catch{return null}}function s(e,s){let r=a();if(!r)return s;try{let a=r.getItem(t+e);if(!a)return s;return JSON.parse(a)}catch{return s}}function r(e,s){let r=a();if(!r)return!1;try{return r.setItem(t+e,JSON.stringify(s)),!0}catch{return!1}}function o(){return s("signoffs",[])}function i(e){return r("signoffs",e)}function n(){return s("bus-matrix-meta",{})}function l(e){return r("bus-matrix-meta",e)}function d(){return s("reports",[])}function c(e){return r("reports",e)}function u(){return s("schedules",{})}function m(e){return r("schedules",e)}function p(){return s("snapshots",[])}function h(e){return r("snapshots",e)}function x(){return s("distribution-lists",[])}function g(e){return r("distribution-lists",e)}function f(){return s("deliveries",[])}function y(e){return r("deliveries",e)}function b(e){return`${e}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}e.s(["genId",()=>b,"loadDeliveries",()=>f,"loadDistributionLists",()=>x,"loadProcessMeta",()=>n,"loadReports",()=>d,"loadSchedules",()=>u,"loadSignOffs",()=>o,"loadSnapshots",()=>p,"saveDeliveries",()=>y,"saveDistributionLists",()=>g,"saveProcessMeta",()=>l,"saveReports",()=>c,"saveSchedules",()=>m,"saveSignOffs",()=>i,"saveSnapshots",()=>h])},64978,e=>{"use strict";let t=(0,e.i(75254).default)("grid-3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);e.s(["Grid3x3",()=>t],64978)},93479,e=>{"use strict";var t=e.i(43476),a=e.i(75157);function s({className:e,type:s,...r}){return(0,t.jsx)("input",{type:s,"data-slot":"input",className:(0,a.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...r})}e.s(["Input",()=>s])},78745,e=>{"use strict";let t=(0,e.i(75254).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["default",()=>t])},24687,e=>{"use strict";var t=e.i(43476),a=e.i(75157);function s({className:e,...s}){return(0,t.jsx)("textarea",{"data-slot":"textarea",className:(0,a.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...s})}e.s(["Textarea",()=>s])},10204,e=>{"use strict";var t=e.i(43476),a=e.i(71645);e.i(74080);var s=e.i(91918),r=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,r)=>{let o=(0,s.createSlot)(`Primitive.${r}`),i=a.forwardRef((e,a)=>{let{asChild:s,...i}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,t.jsx)(s?o:r,{...i,ref:a})});return i.displayName=`Primitive.${r}`,{...e,[r]:i}},{}),o=a.forwardRef((e,a)=>(0,t.jsx)(r.label,{...e,ref:a,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));o.displayName="Label";var i=e.i(75157);function n({className:e,...a}){return(0,t.jsx)(o,{"data-slot":"label",className:(0,i.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...a})}e.s(["Label",()=>n],10204)},43531,e=>{"use strict";var t=e.i(78745);e.s(["Check",()=>t.default])},74886,e=>{"use strict";let t=(0,e.i(75254).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["Copy",()=>t],74886)},69074,56405,86311,e=>{"use strict";var t=e.i(75254);let a=(0,t.default)("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]);e.s(["Upload",()=>a],69074);let s={maxPreviewRows:100,typeSampleRows:1e3,uniqueCap:1e4};async function r(e,t){var a;let r,o,n={...s,...t},c="auto"===n.format?(r=(a=e).name??"",["csv"].includes(o=r.split(".").pop()?.toLowerCase()??"")?"csv":["tsv","tab"].includes(o)?"tsv":["json","jsonl","ndjson"].includes(o)?"json":["txt","md","log"].includes(o)?"text":a.type.startsWith("image/")?"image":"binary"):n.format,u=e.size,m={format:c,totalBytes:u,bytesProcessed:0,rowsParsed:0,columns:[],columnStats:{},previewRows:[],completed:!1};return"csv"===c||"tsv"===c?await i(e,"tsv"===c?"	":",",n,m):"json"===c?await l(e,n,m):"text"===c?await d(e,n,m):(m.completed=!0,m.previewText=`[Binary file: ${e.name??"unknown"}] — ${x(u)}. Hex preview and type detection would require server-side processing.`),m}async function o(e,t){let a,r,o={...s,...t},i="auto"===o.format?(a=e.split("?")[0],["csv"].includes(r=a.split(".").pop()?.toLowerCase()??"")?"csv":["tsv"].includes(r)?"tsv":["json","jsonl","ndjson"].includes(r)?"json":["txt","md","log"].includes(r)?"text":"binary"):o.format,l={format:i,totalBytes:0,bytesProcessed:0,rowsParsed:0,columns:[],columnStats:{},previewRows:[],completed:!1};try{let t=await fetch(e);if(!t.ok)throw Error(`HTTP ${t.status}`);if(!t.body)throw Error("No response body (CORS or server issue)");let a=t.headers.get("content-length");l.totalBytes=a?parseInt(a,10):0;let s=t.body.getReader(),r=new TextDecoder;await n(s,r,"",!1,"tsv"===i?"	":",",o,l)}catch(t){l.error=t instanceof Error?t.message:"Fetch failed",l.completed=!0,l.previewText=`URL: ${e}

Could not stream (likely CORS). To parse remote data, DSModelPro would fetch server-side.`}return l}async function i(e,t,a,s){let r=e.stream().getReader(),o=new TextDecoder;await n(r,o,"",!1,t,a,s)}async function n(e,t,a,s,r,o,i){try{let n=0;for(;;){if(o.shouldContinue&&!o.shouldContinue()){i.completed=!1;return}let{done:l,value:d}=await e.read();if(l)break;let m=t.decode(d,{stream:!0});i.bytesProcessed+=d.byteLength;let x=(a+=m).split("\n");for(let e of(a=x.pop()??"",x)){let t=e.replace(/\r$/,"");if(""===t.trim()&&0===i.rowsParsed&&!s)continue;if(!s){for(let e of(i.columns=p(t,r),i.columns))i.columnStats[e]=c();s=!0;continue}let a=h(t,r,i.columns);if(i.rowsParsed++,i.previewRows.length<o.maxPreviewRows&&i.previewRows.push(a),"overview"!==o.granularity&&("statistical"===o.granularity||i.rowsParsed<=o.typeSampleRows))for(let e of i.columns){let t=a[e]??"";u(i.columnStats[e],t,o)}}o.onProgress&&o.onProgress(i.bytesProcessed,i.totalBytes,i.rowsParsed),++n%10==0&&await g()}if(a.trim()&&s){let e=a.replace(/\r$/,""),t=h(e,r,i.columns);if(i.rowsParsed++,i.previewRows.length<o.maxPreviewRows&&i.previewRows.push(t),"statistical"===o.granularity)for(let e of i.columns)u(i.columnStats[e],t[e]??"",o)}if("overview"!==o.granularity)for(let e of i.columns)m(i.columnStats[e]);i.completed=!0,o.onProgress&&o.onProgress(i.bytesProcessed,i.totalBytes,i.rowsParsed)}finally{try{e.releaseLock()}catch{}}}async function l(e,t,a){let s=e.stream().getReader(),r=new TextDecoder,o="",i=0;try{for(;;){if(t.shouldContinue&&!t.shouldContinue())return;let{done:e,value:n}=await s.read();if(e)break;let l=r.decode(n,{stream:!0});a.bytesProcessed+=n.byteLength;let d=(o+=l).split("\n");for(let e of(o=d.pop()??"",d)){let s=e.trim();if(s)try{let e=JSON.parse(s);if(a.rowsParsed++,0===a.columns.length&&"object"==typeof e&&null!==e)for(let t of(a.columns=Object.keys(e),a.columns))a.columnStats[t]=c();if(a.previewRows.length<t.maxPreviewRows&&"object"==typeof e){let t={};for(let s of a.columns)t[s]=String(e[s]??"");a.previewRows.push(t)}if(("statistical"===t.granularity||a.rowsParsed<=t.typeSampleRows)&&"object"==typeof e&&null!==e)for(let s of a.columns){let r=e[s];u(a.columnStats[s],null==r?"":String(r),t)}}catch{}}t.onProgress&&t.onProgress(a.bytesProcessed,a.totalBytes,a.rowsParsed),++i%10==0&&await g()}let e=o.trim();if(e)try{let s=JSON.parse(e);if(a.rowsParsed++,a.previewRows.length<t.maxPreviewRows&&"object"==typeof s){let e={};for(let t of a.columns)e[t]=String(s[t]??"");a.previewRows.push(e)}}catch{}for(let e of a.columns)m(a.columnStats[e]);a.completed=!0}finally{try{s.releaseLock()}catch{}}}async function d(e,t,a){let s=e.stream().getReader(),r=new TextDecoder,o=0,i=0,n=0,l="",d=0;try{for(;;){if(t.shouldContinue&&!t.shouldContinue())return;let{done:e,value:c}=await s.read();if(e)break;let u=r.decode(c,{stream:!0});a.bytesProcessed+=c.byteLength,o+=u.length,i+=u.split(/\s+/).filter(Boolean).length,n+=u.split("\n").length-1,l.length<2e3&&(l+=u.slice(0,2e3-l.length)),t.onProgress&&t.onProgress(a.bytesProcessed,a.totalBytes,n),++d%10==0&&await g()}a.textStats={chars:o,words:i,lines:n+1},a.previewText=l,a.rowsParsed=n+1,a.completed=!0}finally{try{s.releaseLock()}catch{}}}function c(){return{type:"categorical",count:0,nulls:0,unique:0,uniqueCapped:!1,uniqueSet:new Set}}function u(e,t,a){if(e.count++,""===t||null==t)return void e.nulls++;!e.uniqueCapped&&(e.uniqueSet.add(t),e.uniqueSet.size>a.uniqueCap&&(e.uniqueCapped=!0,e.uniqueSet.clear()));let s=Number(t);if(!isNaN(s)&&isFinite(s)&&/^-?\d+\.?\d*([eE][+-]?\d+)?$/.test(t)){let t=s-(e.mean??0);e.mean=(e.mean??0)+t/(e.count-e.nulls);let a=s-e.mean;e.m2=(e.m2??0)+t*a,(void 0===e.min||s<e.min)&&(e.min=s),(void 0===e.max||s>e.max)&&(e.max=s)}}function m(e){if(0===e.count||e.count===e.nulls){e.type="null";return}e.count,e.nulls,e.uniqueCapped||e.uniqueSet.size,void 0!==e.min&&void 0!==e.max?e.type="numerical":e.type="categorical",e.unique=e.uniqueCapped?1e4:e.uniqueSet.size}function p(e,t){let a=[],s="",r=!1;for(let o=0;o<e.length;o++){let i=e[o];'"'===i?r&&'"'===e[o+1]?(s+='"',o++):r=!r:i!==t||r?s+=i:(a.push(s),s="")}return a.push(s),a.map(e=>e.trim())}function h(e,t,a){let s=p(e,t),r={};return a.forEach((e,t)=>{r[e]=s[t]??""}),r}function x(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:e<0x40000000?`${(e/1048576).toFixed(1)} MB`:`${(e/0x40000000).toFixed(2)} GB`}function g(){return new Promise(e=>{"u">typeof requestIdleCallback?requestIdleCallback(()=>e()):setTimeout(e,0)})}e.s(["formatBytes",()=>x,"parseFileStream",()=>r,"parseUrlStream",()=>o],56405);let f=(0,t.default)("message-square",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);e.s(["MessageSquare",()=>f],86311)},41240,e=>{"use strict";let t=(0,e.i(75254).default)("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);e.s(["Lightbulb",()=>t],41240)},66992,e=>{"use strict";let t=(0,e.i(75254).default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);e.s(["Cpu",()=>t],66992)},38982,e=>{"use strict";let t=(0,e.i(75254).default)("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);e.s(["FlaskConical",()=>t],38982)},55716,e=>{"use strict";let t=(0,e.i(75254).default)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);e.s(["GitBranch",()=>t],55716)},95468,e=>{"use strict";let t=(0,e.i(75254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",()=>t],95468)},15288,e=>{"use strict";var t=e.i(43476),a=e.i(75157);function s({className:e,...s}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,a.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...s})}function r({className:e,...s}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,a.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...s})}function o({className:e,...s}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,a.cn)("leading-none font-semibold",e),...s})}function i({className:e,...s}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,a.cn)("text-muted-foreground text-sm",e),...s})}function n({className:e,...s}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,a.cn)("px-6",e),...s})}e.s(["Card",()=>s,"CardContent",()=>n,"CardDescription",()=>i,"CardHeader",()=>r,"CardTitle",()=>o])},92178,e=>{"use strict";var t=e.i(43476),a=e.i(92989),s=e.i(22016),r=e.i(75254);let o=(0,r.default)("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),i=(0,r.default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var n=e.i(19455),l=e.i(15288);function d({title:e,eyebrow:r,description:d,children:c,secondaryAction:u}){let m=(0,a.useRouter)();return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,t.jsxs)(n.Button,{variant:"outline",size:"sm",onClick:()=>m.push("/"),className:"gap-1.5","aria-label":"Return to home",children:[(0,t.jsx)(o,{className:"h-4 w-4","aria-hidden":"true"}),"Return to Home"]}),u]}),(0,t.jsxs)("div",{className:"space-y-3",children:[r?(0,t.jsx)("span",{className:"inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300",children:r}):null,(0,t.jsx)("h1",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl",children:e}),(0,t.jsx)("p",{className:"max-w-3xl text-base leading-relaxed text-muted-foreground",children:d})]})]}),(0,t.jsx)("div",{className:"space-y-8",children:c}),(0,t.jsx)(l.Card,{className:"border-dashed",children:(0,t.jsxs)(l.CardContent,{className:"flex flex-col items-start justify-between gap-3 p-4 sm:flex-row sm:items-center",children:[(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"Finished reading this section? Return to the home page to explore another part of the dimensional model."}),(0,t.jsx)(n.Button,{variant:"ghost",size:"sm",asChild:!0,className:"gap-1.5",children:(0,t.jsxs)(s.default,{href:"/",children:[(0,t.jsx)(i,{className:"h-4 w-4","aria-hidden":"true"}),"Back to Home"]})})]})})]})}e.s(["ViewShell",()=>d],92178)},21218,e=>{"use strict";let t=(0,e.i(75254).default)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);e.s(["Activity",()=>t],21218)},78894,e=>{"use strict";let t=(0,e.i(75254).default)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);e.s(["AlertTriangle",()=>t],78894)},41929,e=>{"use strict";let t=(0,e.i(75254).default)("file-code",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);e.s(["FileCode",()=>t],41929)},39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",()=>t],39312)},31278,e=>{"use strict";let t=(0,e.i(75254).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2",()=>t],31278)},31343,e=>{"use strict";let t=(0,e.i(75254).default)("play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);e.s(["Play",()=>t],31343)},55711,e=>{"use strict";let t=(0,e.i(75254).default)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);e.s(["Brain",()=>t],55711)},40160,e=>{"use strict";let t=(0,e.i(75254).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);e.s(["Download",()=>t],40160)},27516,e=>{"use strict";let t=(0,e.i(75254).default)("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);e.s(["History",()=>t],27516)},7233,e=>{"use strict";let t=(0,e.i(75254).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>t],7233)},25652,e=>{"use strict";let t=(0,e.i(75254).default)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);e.s(["TrendingUp",()=>t],25652)},24529,e=>{"use strict";var t=e.i(43476);e.i(71645);var a=e.i(37727),s=e.i(19455);function r({title:e,subtitle:r,icon:o,iconColour:i="text-blue-600",onClose:n,children:l,maxWidth:d="max-w-3xl"}){return(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",onClick:n,children:(0,t.jsxs)("div",{className:`max-h-[90vh] w-full ${d} overflow-y-auto rounded-lg border border-border bg-background p-6 shadow-xl`,onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[o&&(0,t.jsx)("div",{className:`flex h-8 w-8 items-center justify-center rounded-md bg-muted/40 ${i}`,children:(0,t.jsx)(o,{className:"h-4 w-4"})}),(0,t.jsx)("h2",{className:"text-lg font-semibold text-foreground",children:e})]}),r&&(0,t.jsx)("p",{className:"mt-1 text-xs text-muted-foreground",children:r})]}),(0,t.jsx)(s.Button,{onClick:n,size:"sm",variant:"ghost",className:"h-8 w-8 p-0","aria-label":"Close",children:(0,t.jsx)(a.X,{className:"h-4 w-4"})})]}),l]})})}function o({label:e,value:a}){return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/20 p-2",children:[(0,t.jsx)("div",{className:"text-[9px] uppercase tracking-wide text-muted-foreground",children:e}),(0,t.jsx)("div",{className:"text-sm font-bold text-foreground",children:a})]})}function i({code:e,label:a,maxHeight:s="max-h-64"}){return(0,t.jsxs)("div",{children:[a&&(0,t.jsx)("div",{className:"mb-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground",children:a}),(0,t.jsx)("pre",{className:`${s} overflow-auto rounded-md border border-border/60 bg-background p-3 text-[10px] leading-relaxed`,children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:e})})]})}function n({children:e,colour:a="amber"}){return(0,t.jsx)("div",{className:`rounded-md border p-2 text-[10px] ${{amber:"border-amber-500/40 bg-amber-500/5 text-amber-700 dark:text-amber-300",blue:"border-blue-500/40 bg-blue-500/5 text-blue-700 dark:text-blue-300",emerald:"border-emerald-500/40 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300",purple:"border-purple-500/40 bg-purple-500/5 text-purple-700 dark:text-purple-300",rose:"border-rose-500/40 bg-rose-500/5 text-rose-700 dark:text-rose-300"}[a]}`,children:e})}e.s(["CalloutBox",()=>n,"CodeBlock",()=>i,"PreviewModal",()=>r,"StatBox",()=>o])},81418,e=>{"use strict";let t=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",()=>t],81418)},48256,e=>{"use strict";let t=(0,e.i(75254).default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);e.s(["Globe",()=>t],48256)},61911,e=>{"use strict";let t=(0,e.i(75254).default)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);e.s(["Users",()=>t],61911)},40524,e=>{"use strict";let t=(0,e.i(75254).default)("workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);e.s(["Workflow",()=>t],40524)},18393,e=>{"use strict";let t=(0,e.i(75254).default)("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);e.s(["Server",()=>t],18393)},23575,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(22016),r=e.i(58041),o=e.i(27927),i=e.i(40524),n=e.i(98919),l=e.i(41240),d=e.i(95468),c=e.i(18393),u=e.i(21218),m=e.i(61911),p=e.i(15288),h=e.i(87486),x=e.i(67489),g=e.i(92178),f=e.i(8679),y=e.i(68256);let b=[{pattern:"CQRS (Command Query Responsibility Segregation)",desc:"Separate write model (commands → events) from read model (projections → warehouse). The warehouse is a read-side projection of event streams, not a separate truth.",code:`// Write side: command handler
@PostMapping("/commands/pick-order")
public Result handle(@RequestBody PickOrderCommand cmd) {
    var events = orderService.pick(cmd.orderId(), cmd.warehouseId());
    eventStore.append("order.events", events);
    return Result.ok(events);
}

// Read side: projection (consumes events, updates warehouse)
@KafkaListener(topics = "order.events")
public void project(OrderPickedEvent evt) {
    warehouse.insert("fact_pick", Map.of(
        "pick_key", nextSeq(),
        "order_key", evt.orderId(),
        "warehouse_key", evt.warehouseId(),
        "timestamp", evt.timestamp()
    ));
}`,lang:"Java (Spring Boot + Kafka)"},{pattern:"Saga (distributed transactions)",desc:"A sequence of local transactions, each emitting an event that triggers the next. Compensating actions roll back on failure. No distributed two-phase commit.",code:`// Saga orchestrator (Python)
class PickPackShipSaga:
    def execute(self, order_id):
        try:
            self.pick_service.pick(order_id)      # local tx
            self.pack_service.pack(order_id)      # local tx
            self.ship_service.ship(order_id)      # local tx
            self.mark_complete(order_id)
        except PackFailed:
            self.pick_service.compensate(order_id)  # undo pick
        except ShipFailed:
            self.pack_service.compensate(order_id)
            self.pick_service.compensate(order_id)`,lang:"Python"},{pattern:"Outbox Pattern (reliable event publishing)",desc:"Write business change + event in one DB transaction. A separate process polls the outbox and publishes to Kafka. At-least-once delivery with idempotent consumers.",code:`// Same transaction: business write + outbox
@Transactional
public void updateInventory(String sku, int qty) {
    repo.update("inventory", sku, qty);
    repo.insert("outbox", new OutboxEvent(
        "inventory.changed",
        Map.of("sku", sku, "qty", qty)
    ));
}

// Separate process: poll outbox → publish to Kafka
@Scheduled(fixedRate = 1000)
public void publishOutbox() {
    var events = repo.findUnpublishedOutbox();
    for (var evt : events) {
        kafka.send(evt.topic(), evt.payload());
        repo.markPublished(evt.id());
    }
}`,lang:"Java (Spring)"},{pattern:"Event Sourcing (SCD2 at scale)",desc:"The event log IS the source of truth. Current state is a fold over events. SCD Type 2 dimensions fall out naturally — every change is an event.",code:`// Scala (Akka Persistence — event sourcing)
object InventoryActor extends PersistentActor {
  var state = Map.empty[String, Int]

  override def receiveCommand: Receive = {
    case AdjustQty(sku, delta) =>
      persist(QtyAdjusted(sku, delta, Instant.now())) { evt =>
        state = state.updated(sku, state.getOrElse(sku, 0) + delta)
      }
  }

  override def receiveRecover: Receive = {
    case QtyAdjusted(sku, delta, _) =>
      state = state.updated(sku, state.getOrElse(sku, 0) + delta)
  }
}`,lang:"Scala (Akka)"},{pattern:"Materialised View (warehouse as projection)",desc:"The warehouse is a materialised view of the event stream. Rebuildable from the log. Multiple views (warehouse, feature store, search index) from one event source.",code:`-- ClickHouse materialised view from Kafka
CREATE MATERIALIZED VIEW fact_sales_mv
TO fact_sales AS
SELECT
    JSONExtractString(payload, 'order_id')  AS order_key,
    JSONExtractString(payload, 'sku')       AS product_key,
    JSONExtractFloat(payload, 'amount')     AS net_amount,
    JSONExtractString(payload, 'timestamp') AS event_time
FROM kafka_sales
WHERE JSONExtractString(payload, 'event_type') = 'order.completed';`,lang:"SQL (ClickHouse)"}],v=[{cloud:"AWS",icon:o.Cloud,colour:"amber",template:`# AWS — Terraform template for DSModelPro deployment
# Provisions: S3 (raw + warehouse), Redshift (OLAP), Glue (ETL),
# MSK (Kafka), Lambda (stream processing), CloudWatch (monitoring)

terraform {
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}

# S3 buckets for data lake
resource "aws_s3_bucket" "raw_data" {
  bucket = "dsmodpro-raw-data"
}
resource "aws_s3_bucket" "warehouse" {
  bucket = "dsmodpro-warehouse"
}

# Redshift cluster (columnar warehouse)
resource "aws_redshift_cluster" "warehouse" {
  cluster_identifier  = "dsmodpro-wh"
  database_name       = "dsmodpro"
  master_username     = "admin"
  master_password     = var.redshift_password
  node_type           = "ra3.xlplus"
  cluster_type        = "multi-node"
  number_of_nodes     = 3
  publicly_accessible = false
}

# MSK (Managed Kafka)
resource "aws_msk_cluster" "event_broker" {
  cluster_name           = "dsmodpro-kafka"
  kafka_version          = "3.6.0"
  number_of_broker_nodes = 3
  broker_node_group_info {
    instance_type   = "kafka.m5.large"
    ebs_volume_size = 100
    client_subnets  = aws_subnet.private[*].id
  }
}

# Glue ETL job
resource "aws_glue_job" "etl_pipeline" {
  name     = "dsmodpro-etl"
  role_arn = aws_iam_role.glue.arn
  command {
    script_location = "s3://\${aws_s3_bucket.raw_data.bucket}/etl/pipeline.py"
    python_version  = "3"
  }
}

# Lambda for stream processing
resource "aws_lambda_function" "stream_processor" {
  filename         = "stream_processor.zip"
  function_name    = "dsmodpro-stream"
  role             = aws_iam_role.lambda.arn
  handler          = "handler.process"
  runtime          = "python3.12"
  source_code_hash = filebase64sha256("stream_processor.zip")
}`,services:["S3","Redshift","MSK (Kafka)","Glue","Lambda","CloudWatch"]},{cloud:"Azure",icon:o.Cloud,colour:"sky",template:`# Azure — Terraform template for DSModelPro deployment
# Provisions: ADLS Gen2 (data lake), Synapse Analytics (OLAP),
# Event Hubs (Kafka), Azure Databricks (ETL), Azure Functions

terraform {
  required_providers {
    azurerm = { source = "hashicorp/azurerm", version = "~> 3.0" }
  }
}

# Resource group
resource "azurerm_resource_group" "dsmodpro" {
  name     = "dsmodpro-rg"
  location = "West Europe"
}

# ADLS Gen2 (data lake)
resource "azurerm_storage_account" "datalake" {
  name                     = "dsmodprodl"
  resource_group_name      = azurerm_resource_group.dsmodpro.name
  location                 = azurerm_resource_group.dsmodpro.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  is_hns_enabled           = true  # hierarchical namespace = data lake
}

# Synapse Analytics (columnar warehouse)
resource "azurerm_synapse_workspace" "warehouse" {
  name                 = "dsmodpro-synapse"
  resource_group_name  = azurerm_resource_group.dsmodpro.name
  location             = azurerm_resource_group.dsmodpro.location
  storage_data_lake_gen2_filesystem_id = azurerm_storage_account.datalake.id
  sql_administrator_login    = "admin"
  sql_administrator_password = var.synapse_password
}

# Event Hubs (Kafka-compatible)
resource "azurerm_eventhub_namespace" "broker" {
  name                = "dsmodpro-eh"
  location            = azurerm_resource_group.dsmodpro.location
  resource_group_name = azurerm_resource_group.dsmodpro.name
  sku                 = "Standard"
  capacity            = 2
  kafka_enabled       = true
}

# Azure Databricks workspace (ETL + ML)
resource "azurerm_databricks_workspace" "etl" {
  name                = "dsmodpro-databricks"
  resource_group_name = azurerm_resource_group.dsmodpro.name
  location            = azurerm_resource_group.dsmodpro.location
  sku                 = "premium"
}`,services:["ADLS Gen2","Synapse Analytics","Event Hubs","Databricks","Azure Functions"]},{cloud:"GCP",icon:o.Cloud,colour:"emerald",template:`# GCP — Terraform template for DSModelPro deployment
# Provisions: GCS (data lake), BigQuery (OLAP), Pub/Sub (messaging),
# Dataflow (stream ETL), Cloud Functions, Vertex AI (ML)

terraform {
  required_providers {
    google = { source = "hashicorp/google", version = "~> 5.0" }
  }
}

# GCS buckets
resource "google_storage_bucket" "raw_data" {
  name     = "dsmodpro-raw-data"
  location = "EU"
}
resource "google_storage_bucket" "warehouse" {
  name     = "dsmodpro-warehouse"
  location = "EU"
}

# BigQuery dataset (columnar warehouse — serverless)
resource "google_bigquery_dataset" "warehouse" {
  dataset_id = "dsmodpro"
  location   = "EU"
}

# BigQuery tables (dimensional model)
resource "google_bigquery_table" "fact_sales" {
  dataset_id = google_bigquery_dataset.warehouse.dataset_id
  table_id   = "fact_sales"
  schema     = <<EOF
[
    {"name": "sales_key", "type": "INT64"},
    {"name": "date_key", "type": "INT64"},
    {"name": "customer_key", "type": "INT64"},
    {"name": "product_key", "type": "INT64"},
    {"name": "net_amount", "type": "NUMERIC"},
    {"name": "quantity", "type": "INT64"}
  ]
  EOF
  partitioning {
    type = "DAY"
    field = "date_key"
  }
}

# Pub/Sub topic (event streaming)
resource "google_pubsub_topic" "events" {
  name = "observation-raw"
}

# Dataflow job (stream processing)
resource "google_dataflow_job" "stream_etl" {
  name              = "dsmodpro-stream-etl"
  template_gcs_path = "gs://dsmodpro-templates/stream_etl"
  temp_gcs_location = "gs://dsmodpro-raw-data/temp"
  region            = "europe-west1"
}

# Vertex AI dataset (ML features)
resource "google_vertex_ai_dataset" "features" {
  display_name = "dsmodpro-features"
  metadata_schema_uri = "gs://google-cloud-aiplatform/schema/dataset/tabular/metadata.yaml"
}`,services:["GCS","BigQuery","Pub/Sub","Dataflow","Cloud Functions","Vertex AI"]}],k=[{area:"CI/CD Pipeline",items:["GitHub Actions: lint → test → build → deploy","Automated PR checks on every commit","Staging environment mirrors production","Blue-green deployment for zero-downtime"]},{area:"Data Pipeline Automation",items:["Prefect/Airflow DAGs scheduled and monitored","Retry logic with exponential backoff","Dead-letter queue for poison messages","SLA alerts: freshness, volume, quality"]},{area:"Infrastructure as Code",items:["Terraform for all cloud resources","Version-controlled infrastructure","Environment parity (dev = staging = prod)","Drift detection + automated remediation"]},{area:"Observability",items:["OpenTelemetry distributed tracing","Prometheus metrics (RED + USE)","Loki structured logs with trace_id","Grafana dashboards per data product"]},{area:"Data Quality",items:["Great Expectations validation on every load","Automated schema drift detection","Data quality scorecard (completeness, conformity, accuracy)","Anomaly detection on row counts"]},{area:"Security",items:["Row-level security on warehouse tables","Secrets in Vault/Secret Manager (never in code)","Audit log for every query","GDPR/HIPAA compliance flags on dimensions"]}],w=[{title:"Technical Design Documentation",desc:"Every data-intensive component has an RFC (Request for Comments) document. The RFC describes the problem, options considered, the chosen approach, trade-offs, and an implementation plan. Team members review and comment before implementation begins.",artifact:"RFC template"},{title:"Style Guides",desc:"SQL style guide (dbt), Python style guide (black + ruff), TypeScript style guide (ESLint). Enforced in CI — no PR merges without passing lint. Consistent naming: fact_*, dim_*, bridge_*.",artifact:"CI-enforced"},{title:"Design Pattern Reviews",desc:"Monthly architecture review. Each new component is evaluated against the pattern catalogue (CQRS, Saga, Outbox, Event Sourcing, Materialised View). The team votes: adopt, adapt, or reject.",artifact:"Pattern catalogue"},{title:"Knowledge Sharing",desc:'Bi-weekly "Lunch & Learn" sessions. Each engineer presents a data pattern, a new tool, or a production incident. Recorded and shared. Builds collective ownership.',artifact:"Lunch & Learn"},{title:"Community Participation",desc:"Contributing to open-source (dbt, Great Expectations, Prefect). Writing blog posts. Speaking at Data Council, DataOps Summit. The team represents the organisation externally.",artifact:"Blog + talks"},{title:"Continuous Improvement",desc:"Quarterly retrospectives on data practices. What patterns worked? What caused incidents? What should we stop doing? The output is a prioritised improvement backlog.",artifact:"Retro backlog"}],j=[{store:"ClickHouse",type:"Columnar OLAP",use:"Fact tables, real-time analytics",scale:"Petabyte-scale, 1B+ rows/sec scan",code:`-- ClickHouse: create fact table with partitioning
CREATE TABLE fact_sales (
    sales_key UInt64,
    date_key UInt32,
    customer_key UInt32,
    product_key UInt32,
    net_amount Decimal(18,4),
    quantity UInt32
) ENGINE = MergeTree()
PARTITION BY toYYYYMM(toDate(date_key))
ORDER BY (date_key, customer_key);`},{store:"Apache Kafka",type:"Distributed log",use:"Event streaming, CDC, pub-sub",scale:"Millions of msgs/sec, petabyte retention",code:`# Kafka: create topic with 12 partitions
kafka-topics --bootstrap-server kafka:9092 \\
  --create --topic observation.raw \\
  --partitions 12 --replication-factor 3 \\
  --config retention.ms=604800000 \\
  --config cleanup.policy=delete`},{store:"Apache Spark",type:"Distributed compute",use:"Batch ETL, ML training, graph processing",scale:"Thousands of nodes, petabyte-scale",code:`# PySpark: distributed join + aggregation
result = (spark.read.parquet("s3://raw/sales/")
    .join(dim_product, "product_key")
    .groupBy("category", "date_key")
    .agg(sum("net_amount").alias("revenue"),
         count("*").alias("transactions"))
    .write.mode("overwrite")
    .parquet("s3://warehouse/agg_sales/"))`},{store:"Apache Flink",type:"Stream processor",use:"Real-time projections, windowed aggregation",scale:"Millions of events/sec, stateful",code:`// Flink: tumbling window aggregation
DataStream<Agg> result = env
    .addSource(kafkaSource("observation.raw"))
    .keyBy(evt -> evt.domain)
    .window(TumblingEventTimeWindows.of(Time.minutes(5)))
    .aggregate(new CountAndSumAggregator());`},{store:"Apache Iceberg",type:"Lakehouse table format",use:"ACID on S3, time travel, schema evolution",scale:"Petabyte-scale, cross-engine",code:`-- Iceberg: create table on S3 (works with Spark, Trino, Flink)
CREATE TABLE warehouse.fact_sales (
    sales_key bigint,
    date_key int,
    customer_key int,
    net_amount decimal(18,4)
) USING iceberg
PARTITIONED BY (days(to_date(date_key)))
LOCATION 's3://dsmodpro-warehouse/fact_sales';`}],S=[{id:"retail",name:"Retail Sales Analytics",dataset:"Diamonds (53,940 rows)",desc:"Load diamond pricing data → design star schema → run ETL → deploy to AWS Redshift",skills:["SQL","Python","AWS Redshift","dbt"]},{id:"healthcare",name:"Healthcare Patient Data",dataset:"Custom (upload CSV)",desc:"Cleanse patient records → resolve duplicate patients → extract clinical entities → build healthcare warehouse",skills:["Python","spaCy","rapidfuzz","Snowflake"]},{id:"climate",name:"Climate Model Ensemble",dataset:"Gapminder (1,704 rows)",desc:"Process multi-country time series → build conformed dim_country → deploy to BigQuery → streaming analytics",skills:["Python","GCP BigQuery","Dataflow","SQL"]},{id:"archival",name:"Archival Records Processing",dataset:"Titanic (891 rows)",desc:"Cleansing pipeline → entity extraction → ontology linking → Azure Synapse deployment",skills:["Python","Azure Synapse","RDF/SPARQL","BeautifulSoup"]},{id:"robotics",name:"Robotics Fleet Telemetry",dataset:"Auto MPG (398 rows)",desc:"Streaming ingest → Kafka topics → Flink windowed aggregation → ClickHouse materialised views",skills:["Scala","Kafka","Flink","ClickHouse"]}];function _(){let[e,_]=a.useState(S[0]);return(0,t.jsxs)(g.ViewShell,{eyebrow:"Engineering Leadership",title:"Leading data-intensive system engineering",description:"Lead a team of engineers in implementing data-intensive system components. Apply standards for design (patterns), development (style guides), and operational readiness (automation, deployment). Expert in SQL, Python/Java/Scala, distributed data stores, and cloud platforms (AWS/Azure/GCP). This page covers every requirement with code, templates, and a live use-case explorer with synthetic datasets.",children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-2 text-xs text-muted-foreground",children:[(0,t.jsx)(y.EventSourcingDemoButton,{}),(0,t.jsx)(y.StreamingWindowsDemoButton,{}),(0,t.jsx)("span",{children:"See design patterns and streaming windows with sample data."})]}),(0,t.jsxs)(p.Card,{className:"border-emerald-500/30 bg-emerald-500/5",children:[(0,t.jsx)(p.CardHeader,{children:(0,t.jsxs)(p.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(l.Lightbulb,{className:"h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400"}),"The leadership challenge"]})}),(0,t.jsx)(p.CardContent,{className:"space-y-2 text-sm leading-relaxed text-muted-foreground",children:(0,t.jsxs)("p",{children:["Leading a data-intensive engineering team is not about writing the most code — it is about ",(0,t.jsx)("strong",{className:"text-foreground",children:"choosing the right patterns, enforcing standards, and making the team autonomous"}),". A team that knows the pattern catalogue (CQRS, Saga, Outbox, Event Sourcing), follows the style guides (SQL/Python/ TypeScript), and has CI/CD automation will build better systems than a team of brilliant individuals without standards. This page provides the templates, the patterns, and the cloud deployment recipes."]})})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(i.Workflow,{className:"mr-2 inline h-6 w-6 text-emerald-600"}),"Design patterns for data-intensive systems"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"5 patterns with code in Java, Scala, Python, and SQL. Each team member should know these."})]}),(0,t.jsx)("div",{className:"space-y-4",children:b.map(e=>(0,t.jsxs)(p.Card,{children:[(0,t.jsxs)(p.CardHeader,{children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)(p.CardTitle,{className:"text-sm",children:e.pattern}),(0,t.jsx)(h.Badge,{variant:"outline",className:"text-[9px]",children:e.lang})]}),(0,t.jsx)(p.CardDescription,{className:"text-xs",children:e.desc})]}),(0,t.jsx)(p.CardContent,{children:(0,t.jsx)("pre",{className:"max-h-48 overflow-auto rounded-md border border-border/60 bg-background p-3 text-[9px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:e.code})})})]},e.pattern))})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(o.Cloud,{className:"mr-2 inline h-6 w-6 text-amber-600"}),"Cloud integration templates (Terraform — AWS, Azure, GCP)"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"Copy-paste-ready Terraform templates. Deploy DSModelPro to any cloud with one command."})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-3",children:v.map(e=>(0,t.jsxs)(p.Card,{className:`border-${e.colour}-500/30`,children:[(0,t.jsxs)(p.CardHeader,{children:[(0,t.jsxs)(p.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(e.icon,{className:`h-5 w-5 text-${e.colour}-600`}),e.cloud]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1",children:e.services.map(e=>(0,t.jsx)(h.Badge,{variant:"secondary",className:"text-[8px]",children:e},e))})]}),(0,t.jsx)(p.CardContent,{children:(0,t.jsx)("pre",{className:"max-h-64 overflow-auto rounded-md border border-border/60 bg-background p-3 text-[8px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:e.template})})})]},e.cloud))})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(r.Database,{className:"mr-2 inline h-6 w-6 text-purple-600"}),"Distributed data stores & processing frameworks"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"Expert-level coverage of 5 distributed systems with code."})]}),(0,t.jsx)(p.Card,{children:(0,t.jsx)(p.CardContent,{className:"p-0",children:(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-sm",children:[(0,t.jsx)("thead",{className:"border-b border-border/60 bg-muted/30",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"p-3 text-left",children:"Store"}),(0,t.jsx)("th",{className:"p-3 text-left",children:"Type"}),(0,t.jsx)("th",{className:"p-3 text-left",children:"Use Case"}),(0,t.jsx)("th",{className:"p-3 text-left",children:"Scale"})]})}),(0,t.jsx)("tbody",{children:j.map(e=>(0,t.jsxs)("tr",{className:"border-b border-border/40",children:[(0,t.jsx)("td",{className:"p-3 font-medium",children:e.store}),(0,t.jsx)("td",{className:"p-3 text-xs text-muted-foreground",children:e.type}),(0,t.jsx)("td",{className:"p-3 text-xs text-muted-foreground",children:e.use}),(0,t.jsx)("td",{className:"p-3 text-xs text-muted-foreground",children:e.scale})]},e.store))})]})})})}),j.map(e=>(0,t.jsxs)(p.Card,{children:[(0,t.jsx)(p.CardHeader,{children:(0,t.jsxs)(p.CardTitle,{className:"flex items-center gap-2 text-sm",children:[(0,t.jsx)(c.Server,{className:"h-4 w-4 text-purple-600"}),e.store," — ",e.type]})}),(0,t.jsx)(p.CardContent,{children:(0,t.jsx)("pre",{className:"max-h-32 overflow-auto rounded-md border border-border/60 bg-background p-3 text-[9px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:e.code})})})]},e.store))]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(n.Shield,{className:"mr-2 inline h-6 w-6 text-emerald-600"}),"Operational readiness (automation, deployment, monitoring)"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"6 areas, each with 4 concrete items. This is the checklist for production readiness."})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",children:k.map(e=>(0,t.jsxs)(p.Card,{children:[(0,t.jsx)(p.CardHeader,{children:(0,t.jsx)(p.CardTitle,{className:"text-sm",children:e.area})}),(0,t.jsx)(p.CardContent,{children:(0,t.jsx)("ul",{className:"space-y-1",children:e.items.map(e=>(0,t.jsxs)("li",{className:"flex items-start gap-1.5 text-xs text-muted-foreground",children:[(0,t.jsx)(d.CheckCircle2,{className:"mt-0.5 h-3 w-3 shrink-0 text-emerald-600"}),e]},e))})})]},e.area))})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(m.Users,{className:"mr-2 inline h-6 w-6 text-rose-600"}),"Leadership, communication & community"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"How to lead, share knowledge, and participate in the data community."})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",children:w.map(e=>(0,t.jsxs)(p.Card,{children:[(0,t.jsxs)(p.CardHeader,{children:[(0,t.jsx)(p.CardTitle,{className:"text-sm",children:e.title}),(0,t.jsx)(h.Badge,{variant:"outline",className:"text-[8px] w-fit",children:e.artifact})]}),(0,t.jsx)(p.CardContent,{children:(0,t.jsx)("p",{className:"text-xs leading-relaxed text-muted-foreground",children:e.desc})})]},e.title))})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(u.Activity,{className:"mr-2 inline h-6 w-6 text-emerald-600"}),"Use case explorer — select a scenario"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"5 use cases with synthetic datasets. Select one to see the end-to-end implementation path."})]}),(0,t.jsx)(p.Card,{children:(0,t.jsxs)(p.CardContent,{className:"p-4 space-y-3",children:[(0,t.jsxs)(x.Select,{value:e.id,onValueChange:e=>_(S.find(t=>t.id===e)),children:[(0,t.jsx)(x.SelectTrigger,{children:(0,t.jsx)(x.SelectValue,{})}),(0,t.jsx)(x.SelectContent,{children:S.map(e=>(0,t.jsxs)(x.SelectItem,{value:e.id,children:[e.name," — ",e.dataset]},e.id))})]}),(0,t.jsxs)("div",{className:"rounded-lg border border-border/60 bg-muted/20 p-3 space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-sm font-medium",children:e.name}),e.skills.map(e=>(0,t.jsx)(h.Badge,{variant:"secondary",className:"text-[8px]",children:e},e))]}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:e.desc}),(0,t.jsxs)("p",{className:"text-xs",children:[(0,t.jsx)("span",{className:"font-medium",children:"Dataset:"})," ",e.dataset]})]})]})})]}),(0,t.jsxs)(p.Card,{className:"border-emerald-500/20",children:[(0,t.jsxs)(p.CardHeader,{children:[(0,t.jsxs)(p.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(r.Database,{className:"h-5 w-5 text-emerald-600"}),"Live data analytics — upload your dataset"]}),(0,t.jsxs)(p.CardDescription,{className:"text-xs",children:["Upload a CSV/TSV/JSON file → lazy streaming → 10 analytics activities → export → three-agent model debate. Or visit the ",(0,t.jsx)(s.default,{href:"/dataset-explorer",className:"text-emerald-600 hover:underline",children:"Dataset Explorer"})," for 15 free pre-loaded datasets."]})]}),(0,t.jsx)(p.CardContent,{children:(0,t.jsx)(f.DataUploadPanel,{title:"Upload data for analytics",description:"Drop a CSV file to run the full analytics pipeline: lazy streaming, 10 analytics activities, export, and three-agent model debate.",formatHint:"CSV, TSV, JSON — any size (lazy evaluation)"})})]}),(0,t.jsxs)(p.Card,{children:[(0,t.jsx)(p.CardHeader,{children:(0,t.jsxs)(p.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(d.CheckCircle2,{className:"h-5 w-5 text-emerald-600"}),"Requirements coverage"]})}),(0,t.jsx)(p.CardContent,{className:"p-0",children:(0,t.jsxs)("table",{className:"w-full text-sm",children:[(0,t.jsx)("thead",{className:"border-b border-border/60 bg-muted/30",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"p-3 text-left",children:"Requirement"}),(0,t.jsx)("th",{className:"p-3 text-left",children:"Where it's covered"})]})}),(0,t.jsx)("tbody",{children:[["Lead a team of engineers","Leadership section: RFC process, style guides, pattern reviews, knowledge sharing, community participation"],["Design patterns & standards","5 design patterns with code (CQRS, Saga, Outbox, Event Sourcing, Materialised View) + CI-enforced style guides"],["Operational readiness (automation, deployment)","6-area ops checklist: CI/CD, data pipeline automation, IaC, observability, data quality, security"],["Python / Java / Scala","Python (pipeline-service, ETL, NER), Java (CQRS + Outbox Spring code), Scala (Akka event sourcing code)"],["Global databases & datasets","15 free datasets (Dataset Explorer), 26 sample projects (notebooks), 5 distributed data stores (ClickHouse, Kafka, Spark, Flink, Iceberg)"],["AWS / Azure / GCP / Databricks","3 Terraform templates (AWS Redshift+MSK+Glue, Azure Synapse+Event Hubs+Databricks, GCP BigQuery+Pub/Sub+Dataflow)"],["Expert SQL","15+ SQL DDL blocks, NLQ text-to-SQL, ClickHouse/BigQuery/Synapse/Iceberg SQL code, SQL style guide"],["Distributed data stores & processing","5 systems with code: ClickHouse (columnar), Kafka (log), Spark (batch), Flink (stream), Iceberg (lakehouse)"],["Communicate technical design","RFC process, style guides, lunch & learn, blog posts, community talks"],["Data Warehouse methods & techniques","Entire DSModelPro platform: star schema, bus matrix, SCD types, conformed dimensions, 50+ pages"],["Cloud integration templates","3 ready-to-deploy Terraform templates (AWS, Azure, GCP) — copy-paste-ready"],["Continuous improvement & best practice","Quarterly retrospectives, pattern reviews, community participation, blog posts"],["Participation in tech communities","Open-source contributions (dbt, Great Expectations, Prefect), Data Council talks, blog posts"]].map(([e,a])=>(0,t.jsxs)("tr",{className:"border-b border-border/40",children:[(0,t.jsx)("td",{className:"p-3 text-xs font-medium",children:e}),(0,t.jsx)("td",{className:"p-3 text-xs text-muted-foreground",children:a})]},e))})]})})]})]})}e.s(["default",()=>_])}]);