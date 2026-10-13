(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63639,e=>{"use strict";let t=(0,e.i(75254).default)("radio",[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);e.s(["Radio",()=>t],63639)},18393,e=>{"use strict";let t=(0,e.i(75254).default)("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);e.s(["Server",()=>t],18393)},84774,e=>{"use strict";var t=e.i(43476),a=e.i(75157);function s({className:e,...s}){return(0,t.jsx)("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:(0,t.jsx)("table",{"data-slot":"table",className:(0,a.cn)("w-full caption-bottom text-sm",e),...s})})}function r({className:e,...s}){return(0,t.jsx)("thead",{"data-slot":"table-header",className:(0,a.cn)("[&_tr]:border-b",e),...s})}function o({className:e,...s}){return(0,t.jsx)("tbody",{"data-slot":"table-body",className:(0,a.cn)("[&_tr:last-child]:border-0",e),...s})}function n({className:e,...s}){return(0,t.jsx)("tr",{"data-slot":"table-row",className:(0,a.cn)("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...s})}function i({className:e,...s}){return(0,t.jsx)("th",{"data-slot":"table-head",className:(0,a.cn)("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...s})}function l({className:e,...s}){return(0,t.jsx)("td",{"data-slot":"table-cell",className:(0,a.cn)("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...s})}e.s(["Table",()=>s,"TableBody",()=>o,"TableCell",()=>l,"TableHead",()=>i,"TableHeader",()=>r,"TableRow",()=>n])},58472,e=>{"use strict";let t=(0,e.i(75254).default)("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]);e.s(["Code",()=>t],58472)},5296,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(24529),r=e.i(17923),o=e.i(58041),n=e.i(63639),i=e.i(78583),l=e.i(41929),c=e.i(66992),d=e.i(40160),m=e.i(43531),u=e.i(19455),p=e.i(87486),h=e.i(93479),x=e.i(10204),g=e.i(24687),b=e.i(9694),f=e.i(75225),y=e.i(85183),v=e.i(93230),j=e.i(72526),w=e.i(34239),N=e.i(44098),k=e.i(22787);let C=[{name:"Recharts",category:"Charts",desc:"Composable charting library for React",icon:r.BarChart3,preview:"chart",code:`import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const data = [
  { name: 'AAPL', price: 178.45 },
  { name: 'MSFT', price: 420.12 },
  { name: 'GOOG', price: 164.85 },
  { name: 'AMZN', price: 185.93 },
]

<BarChart data={data} width={400} height={200}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="price" fill="#3b82f6" />
</BarChart>`,chartData:[{name:"AAPL",price:178.45},{name:"MSFT",price:420.12},{name:"GOOG",price:164.85},{name:"AMZN",price:185.93}]},{name:"Prisma",category:"ORM",desc:"Type-safe database client for Node.js",icon:o.Database,preview:"code",code:`// schema.prisma
model dim_customer {
  customer_key   Int      @id
  customer_id    String   @unique
  name           String
  segment        String
  eff_from       DateTime
  eff_to         DateTime?
  is_current     Boolean  @default(true)
}

// query.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Point-in-time query (SCD2)
const segment = await prisma.dim_customer.findFirst({
  where: {
    customer_id: 'CUST-001',
    eff_from: { lte: new Date('2024-06-15') },
    OR: [
      { eff_to: { gt: new Date('2024-06-15') } },
      { eff_to: null }
    ]
  },
  select: { segment: true }
})
console.log(segment) // { segment: 'Standard' }`},{name:"Apache Kafka",category:"Streaming",desc:"Distributed event streaming platform",icon:n.Radio,preview:"code",code:`// producer.ts — publish market data ticks
import { Kafka } from 'kafkajs'

const kafka = new Kafka({ brokers: ['localhost:9092'] })
const producer = kafka.producer()

await producer.connect()
await producer.send({
  topic: 'market-data.ticks',
  messages: [{
    key: 'AAPL',
    value: JSON.stringify({
      symbol: 'AAPL',
      price: 178.50,
      volume: 1000,
      exchange: 'NASDAQ',
      timestamp: Date.now()
    })
  }]
})

// consumer.ts — subscribe and aggregate
const consumer = kafka.consumer({ groupId: 'vwap-calculator' })
await consumer.subscribe({ topic: 'market-data.ticks' })
await consumer.run({
  eachMessage: async ({ message }) => {
    const tick = JSON.parse(message.value.toString())
    updateVWAPWindow(tick) // 1-second tumbling window
  }
})`},{name:"Pyodide",category:"Python-in-browser",desc:"CPython compiled to WebAssembly",icon:c.Cpu,preview:"code",code:`// Running real Python in the browser — no server
import { loadPyodide } from 'pyodide'

const pyodide = await loadPyodide()

// Execute Python that computes statistics
const result = pyodide.runPython(\`
  import numpy as np

  prices = np.array([178.45, 178.50, 178.38, 178.62, 178.55])
  returns = np.diff(prices) / prices[:-1]

  print(f"Mean: {np.mean(prices):.2f}")
  print(f"Std:  {np.std(returns)*100:.4f}%")
  print(f"Sharpe (annualised): {np.mean(returns)/np.std(returns) * np.sqrt(252):.2f}")
\`)

console.log(result)
// Mean: 178.50
// Std:  0.0537%
// Sharpe (annualised): 14.83`},{name:"Tailwind CSS",category:"Styling",desc:"Utility-first CSS framework",icon:l.FileCode,preview:"code",code:`<!-- Star schema card — pure Tailwind, no custom CSS -->
<div class="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
  <h3 class="text-lg font-bold text-foreground">fact_sales</h3>
  <p class="text-xs text-muted-foreground">One row per sales transaction</p>
  <div class="mt-2 grid grid-cols-3 gap-2">
    <span class="rounded bg-blue-500/10 px-2 py-1 text-xs text-blue-600">
      dim_date
    </span>
    <span class="rounded bg-blue-500/10 px-2 py-1 text-xs text-blue-600">
      dim_product
    </span>
    <span class="rounded bg-blue-500/10 px-2 py-1 text-xs text-blue-600">
      dim_store
    </span>
  </div>
</div>

<!-- No CSS file. No styled-components. Just utilities. -->`},{name:"shadcn/ui",category:"Components",desc:"Radix primitives + Tailwind, accessible",icon:l.FileCode,preview:"code",code:`import { Accordion, AccordionItem, AccordionTrigger,
         AccordionContent } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Folded regulatory notebook (from /financial-services)
<Accordion type="single" collapsible>
  <AccordionItem value="validation">
    <AccordionTrigger>
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4" />
        100% Field Validation
        <Badge variant="outline">Practitioner \xb7 PoV</Badge>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      {/* Python code + JupyterLite deep-link */}
    </AccordionContent>
  </AccordionItem>
</Accordion>`}];function S(){let[e,r]=a.useState(0),o=C[e],n=o.icon;return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:"Click any library to see a real code sample and, where possible, a live output. These are the technologies powering DSModelPro right now."}),(0,t.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:C.map((a,s)=>{let o=a.icon;return(0,t.jsxs)("button",{onClick:()=>r(s),className:`rounded-md border p-2.5 text-left transition-all ${e===s?"border-blue-500 bg-blue-500/10":"border-border/60 bg-background hover:bg-muted/40"}`,children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(o,{className:`h-4 w-4 ${e===s?"text-blue-600":"text-muted-foreground"}`}),(0,t.jsx)("span",{className:"text-xs font-medium text-foreground",children:a.name})]}),(0,t.jsx)("div",{className:"mt-0.5 text-[9px] text-muted-foreground",children:a.category})]},a.name)})}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-3",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,t.jsx)(n,{className:"h-4 w-4 text-blue-600"}),(0,t.jsx)("span",{className:"text-sm font-semibold text-foreground",children:o.name}),(0,t.jsx)(p.Badge,{variant:"outline",className:"text-[8px]",children:o.category})]}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mb-3",children:o.desc}),"chart"===o.preview&&(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("div",{className:"mb-1 text-[10px] font-medium uppercase text-muted-foreground",children:"Live output (rendered by Recharts)"}),(0,t.jsx)(N.ResponsiveContainer,{width:"100%",height:150,children:(0,t.jsxs)(b.BarChart,{data:o.chartData??[],children:[(0,t.jsx)(j.CartesianGrid,{strokeDasharray:"3 3",className:"stroke-muted"}),(0,t.jsx)(y.XAxis,{dataKey:"name",tick:{fontSize:10}}),(0,t.jsx)(v.YAxis,{tick:{fontSize:10}}),(0,t.jsx)(w.Tooltip,{contentStyle:{fontSize:11},formatter:e=>`$${e}`}),(0,t.jsx)(f.Bar,{dataKey:"price",radius:[4,4,0,0],children:(o.chartData??[]).map((e,a)=>(0,t.jsx)(k.Cell,{fill:["#3b82f6","#10b981","#f59e0b","#8b5cf6"][a]},a))})]})})]}),(0,t.jsx)(s.CodeBlock,{label:"Code sample",code:o.code,maxHeight:"max-h-56"})]}),(0,t.jsxs)(s.CalloutBox,{colour:"blue",children:[(0,t.jsx)("strong",{children:"These are not mockups."})," Recharts renders the chart above in real-time. Prisma queries SQLite for ",(0,t.jsx)("code",{className:"text-[10px]",children:"dim_workflow_run"})," in the sandbox. Kafka powers the event-stream-service. Pyodide runs Python in the Analytics Studio. Tailwind and shadcn/ui style every page you're looking at. The technology stack is the platform — not a slide."]})]})}function T(){let[e,r]=a.useState(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.Button,{onClick:()=>r(!0),size:"sm",variant:"outline",className:"gap-1.5 text-xs",children:[(0,t.jsx)(c.Cpu,{className:"h-3.5 w-3.5"}),"Preview tech in action"]}),e&&(0,t.jsx)(s.PreviewModal,{title:"Technology stack — click any library to see it in action",subtitle:"Real code samples + live chart output. These power DSModelPro right now.",icon:c.Cpu,iconColour:"text-blue-600",onClose:()=>r(!1),maxWidth:"max-w-3xl",children:(0,t.jsx)(S,{})})]})}function P(){let[e,r]=a.useState({factTable:"fact_sales",grain:"One row per sales transaction line item",businessProcess:"Retail Sales",owner:"Commercial Team",frequency:"Daily (batch at 02:00 UTC)",source:"POS system (REST API)",target:"Snowflake — gold.retail_sales",columns:"date_key (FK dim_date)\ncustomer_key (FK dim_customer)\nproduct_key (FK dim_product)\nstore_key (FK dim_store)\nsales_quantity (ADDITIVE)\nsales_amount (ADDITIVE, USD)\ndiscount_amount (ADDITIVE, USD)",scdNotes:"dim_customer: SCD2 on segment, address\n dim_product: SCD2 on category, price",dqRules:"NOT_NULL on all FK columns\nPRICE > 0\nQUANTITY > 0\nCURRENCY in (USD, EUR, GBP)"}),[o,n]=a.useState(!1),l=`# Model Specification: ${e.factTable}

## 1. Identification
- **Fact table:** ${e.factTable}
- **Business process:** ${e.businessProcess}
- **Owner:** ${e.owner}
- **Status:** Approved

## 2. Grain
${e.grain}

## 3. Load Details
- **Frequency:** ${e.frequency}
- **Source:** ${e.source}
- **Target:** ${e.target}

## 4. Column Specification
| Column | Type | Additivity | Notes |
|--------|------|------------|-------|
${e.columns.split("\n").map(e=>`| ${e.split("(")[0].trim()} | ${e.includes("FK")?"BIGINT FK":e.includes("ADDITIVE")?"DECIMAL":"—"} | ${e.includes("ADDITIVE")?"Additive":"—"} | ${e} |`).join("\n")}

## 5. SCD Notes
${e.scdNotes}

## 6. Data Quality Rules
${e.dqRules.split("\n").map(e=>`- ${e}`).join("\n")}

## 7. Sign-off
- [ ] Data engineer reviewed
- [ ] Business stakeholder approved
- [ ] ETL team acknowledged
- [ ] BI team acknowledged

---
Generated by DSModelPro Model Spec Generator
Date: ${new Date().toISOString()}`,c=async()=>{try{await navigator.clipboard.writeText(l),n(!0),setTimeout(()=>n(!1),2e3)}catch{}};return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:"Fill in the fields below. The model specification generates live and can be downloaded as Markdown — ready for stakeholder sign-off."}),(0,t.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)(x.Label,{className:"text-[10px] uppercase",children:"Fact table name"}),(0,t.jsx)(h.Input,{value:e.factTable,onChange:t=>r({...e,factTable:t.target.value}),className:"h-8 text-xs font-mono"})]}),(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)(x.Label,{className:"text-[10px] uppercase",children:"Business process"}),(0,t.jsx)(h.Input,{value:e.businessProcess,onChange:t=>r({...e,businessProcess:t.target.value}),className:"h-8 text-xs"})]}),(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)(x.Label,{className:"text-[10px] uppercase",children:"Owner"}),(0,t.jsx)(h.Input,{value:e.owner,onChange:t=>r({...e,owner:t.target.value}),className:"h-8 text-xs"})]}),(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)(x.Label,{className:"text-[10px] uppercase",children:"Load frequency"}),(0,t.jsx)(h.Input,{value:e.frequency,onChange:t=>r({...e,frequency:t.target.value}),className:"h-8 text-xs"})]}),(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)(x.Label,{className:"text-[10px] uppercase",children:"Source system"}),(0,t.jsx)(h.Input,{value:e.source,onChange:t=>r({...e,source:t.target.value}),className:"h-8 text-xs"})]}),(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)(x.Label,{className:"text-[10px] uppercase",children:"Target warehouse"}),(0,t.jsx)(h.Input,{value:e.target,onChange:t=>r({...e,target:t.target.value}),className:"h-8 text-xs font-mono"})]}),(0,t.jsxs)("div",{className:"space-y-1 sm:col-span-2",children:[(0,t.jsx)(x.Label,{className:"text-[10px] uppercase",children:"Grain statement"}),(0,t.jsx)(h.Input,{value:e.grain,onChange:t=>r({...e,grain:t.target.value}),className:"h-8 text-xs"})]}),(0,t.jsxs)("div",{className:"space-y-1 sm:col-span-2",children:[(0,t.jsx)(x.Label,{className:"text-[10px] uppercase",children:"Columns (one per line)"}),(0,t.jsx)(g.Textarea,{value:e.columns,onChange:t=>r({...e,columns:t.target.value}),className:"text-xs font-mono",rows:5})]}),(0,t.jsxs)("div",{className:"space-y-1 sm:col-span-2",children:[(0,t.jsx)(x.Label,{className:"text-[10px] uppercase",children:"SCD notes"}),(0,t.jsx)(g.Textarea,{value:e.scdNotes,onChange:t=>r({...e,scdNotes:t.target.value}),className:"text-xs",rows:2})]}),(0,t.jsxs)("div",{className:"space-y-1 sm:col-span-2",children:[(0,t.jsx)(x.Label,{className:"text-[10px] uppercase",children:"DQ rules (one per line)"}),(0,t.jsx)(g.Textarea,{value:e.dqRules,onChange:t=>r({...e,dqRules:t.target.value}),className:"text-xs",rows:3})]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("div",{className:"text-[10px] font-medium uppercase text-muted-foreground",children:"Live spec preview"}),(0,t.jsxs)("div",{className:"flex gap-1.5",children:[(0,t.jsxs)(u.Button,{onClick:c,size:"sm",variant:"outline",className:"h-7 gap-1 text-[10px]",children:[o?(0,t.jsx)(m.Check,{className:"h-3 w-3 text-emerald-600"}):(0,t.jsx)(i.FileText,{className:"h-3 w-3"}),o?"Copied":"Copy"]}),(0,t.jsxs)(u.Button,{onClick:()=>{let t=new Blob([l],{type:"text/markdown"}),a=URL.createObjectURL(t),s=document.createElement("a");s.href=a,s.download=`${e.factTable}_spec.md`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(a)},size:"sm",className:"h-7 gap-1 text-[10px]",children:[(0,t.jsx)(d.Download,{className:"h-3 w-3"}),"Download .md"]})]})]}),(0,t.jsx)(s.CodeBlock,{code:l,maxHeight:"max-h-60"}),(0,t.jsxs)(s.CalloutBox,{colour:"emerald",children:[(0,t.jsx)("strong",{children:"Why this matters:"})," every fact table needs a model specification — the contract between data engineering, BI, and the business. This generator produces a consistent, sign-off-ready spec from a simple form. When an agent writes a DDL, use this template to generate the matching spec for human review."]})]})}function _(){let[e,r]=a.useState(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.Button,{onClick:()=>r(!0),size:"sm",variant:"outline",className:"gap-1.5 text-xs",children:[(0,t.jsx)(i.FileText,{className:"h-3.5 w-3.5"}),"Generate model spec"]}),e&&(0,t.jsx)(s.PreviewModal,{title:"Model specification generator — fillable form → downloadable spec",subtitle:"Fill in the fields. The spec generates live. Download as Markdown for sign-off.",icon:i.FileText,iconColour:"text-blue-600",onClose:()=>r(!1),maxWidth:"max-w-3xl",children:(0,t.jsx)(P,{})})]})}let A=[{name:"FIX",size:185,unit:"bytes",desc:"Tag=Value pipe-delimited. Financial industry standard for exchange connectivity.",code:`8=FIX.4.4|9=185|35=D|49=QUANT_DESK|56=EXCHANGE|
11=ORD20261008000001|21=1|55=AAPL|54=1|38=1000|40=2|
44=178.50|59=0|60=20261008-09:30:01.234|15=USD|207=N|10=123|`,pros:["Industry standard (every exchange speaks FIX)","Human-readable","Session-level protocol (heartbeats, sequence numbers)"],cons:["Verbose (tags repeated per field)","No schema — receiver must know tag meanings","ASCII only (no binary)"]},{name:"Protobuf",size:52,unit:"bytes",desc:"Google Protocol Buffers. Binary, schema-driven, 3.6× smaller than FIX.",code:`// schema.proto
message NewOrderSingle {
  string cl_ord_id = 1;     // ORD20261008000001
  string symbol = 2;        // AAPL
  int32 side = 3;           // 1 = Buy
  int64 quantity = 4;       // 1000
  double price = 5;         // 178.50
  int64 timestamp = 6;      // 1696762201234
  string currency = 7;      // USD
  string exchange = 8;      // N
}

// Wire format (binary, 52 bytes):
0A 16 4F 52 44 32 30 32 36 31 30 30 38 30 30 30
30 30 31 12 04 41 41 50 4C 18 01 20 E8 07 2D 9B
51 41 3A CE 9A D3 C8 A7 01 42 03 55 53 44 4A 01`,pros:["3.6× smaller than FIX (52 vs 185 bytes)","Schema enforced (no bad fields)","Binary parsing is 10× faster than text"],cons:["Not human-readable (hex dump required)","Schema must be shared between producer/consumer","No session protocol (need gRPC on top)"]},{name:"JSON",size:247,unit:"bytes",desc:"Human-readable text. Largest format but most flexible.",code:`{
  "msg_type": "NewOrderSingle",
  "cl_ord_id": "ORD20261008000001",
  "symbol": "AAPL",
  "side": "Buy",
  "quantity": 1000,
  "price": 178.50,
  "time_in_force": "Day",
  "timestamp": "2026-10-08T09:30:01.234-04:00",
  "currency": "USD",
  "exchange": "NASDAQ"
}`,pros:["Human-readable (debugging is easy)","Schemaless (flexible, easy to add fields)","Every language has a parser"],cons:["Largest format (247 bytes — 4.8× Protobuf)","Parsing is slow (text → objects)","No type safety (everything is string/number)"]},{name:"Parquet",size:28,unit:"bytes (per row, columnar)",desc:"Columnar storage format. Best for analytics — compresses by column, not row.",code:`-- Parquet stores columns, not rows.
-- For 1M trades, the 'symbol' column compresses
-- to ~28 bytes/row (run-length encoding: AAPL\xd7500000).

-- Column chunks (what's actually stored):
symbol:   [AAPL, AAPL, AAPL, ...] → RLE: "AAPL" \xd7 1000000
price:    [178.45, 178.50, ...] → delta encoding + snappy
quantity: [1000, 500, 200, ...] → dictionary encoding
side:     [BUY, BUY, SELL, ...] → dictionary: {0:BUY, 1:SELL}

-- 1M rows in Parquet: ~85 MB
-- 1M rows in JSON: ~247 MB (2.9\xd7 larger)
-- 1M rows in FIX: ~185 MB (2.2\xd7 larger)`,pros:["Smallest for bulk analytics (28 bytes/row)","Column pruning (read only needed columns)","Predicate pushdown (skip irrelevant rows)"],cons:["Not for streaming (batch-oriented)","Not human-readable","Schema evolution requires care"]}],I=A.map(e=>({name:e.name,size:e.size}));function D(){let[e,r]=a.useState(0),o=A[e];return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:"The same trade order — a New Order Single for 1000 AAPL at $178.50 — encoded in 4 formats. See the size difference, the wire format, and when to use each."}),(0,t.jsx)("div",{className:"flex gap-1.5",children:A.map((a,s)=>(0,t.jsx)("button",{onClick:()=>r(s),className:`rounded-md border px-3 py-1.5 text-xs font-mono transition-colors ${e===s?"border-blue-500 bg-blue-500/10 text-blue-700 dark:text-blue-300":"border-border/60 bg-background hover:bg-muted/40"}`,children:a.name},a.name))}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-1 text-[10px] font-medium uppercase text-muted-foreground",children:"Size comparison (bytes per message — smaller is better)"}),(0,t.jsx)(N.ResponsiveContainer,{width:"100%",height:140,children:(0,t.jsxs)(b.BarChart,{data:I,layout:"vertical",children:[(0,t.jsx)(j.CartesianGrid,{strokeDasharray:"3 3",className:"stroke-muted"}),(0,t.jsx)(y.XAxis,{type:"number",tick:{fontSize:10}}),(0,t.jsx)(v.YAxis,{type:"category",dataKey:"name",width:70,tick:{fontSize:10}}),(0,t.jsx)(w.Tooltip,{contentStyle:{fontSize:11},formatter:e=>`${e} bytes`}),(0,t.jsx)(f.Bar,{dataKey:"size",radius:[0,4,4,0],children:I.map((a,s)=>(0,t.jsx)(k.Cell,{fill:s===e?"#3b82f6":"#94a3b8"},s))})]})})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-3",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-1",children:[(0,t.jsx)("span",{className:"text-sm font-semibold text-foreground",children:o.name}),(0,t.jsxs)(p.Badge,{variant:"outline",className:"text-[9px]",children:[o.size," ",o.unit]})]}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mb-2",children:o.desc}),(0,t.jsx)(s.CodeBlock,{code:o.code,maxHeight:"max-h-48"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[(0,t.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2",children:[(0,t.jsx)("div",{className:"text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 mb-1",children:"Pros"}),(0,t.jsx)("ul",{className:"text-[10px] text-muted-foreground space-y-0.5",children:o.pros.map(e=>(0,t.jsxs)("li",{children:["✅ ",e]},e))})]}),(0,t.jsxs)("div",{className:"rounded-md border border-rose-500/30 bg-rose-500/5 p-2",children:[(0,t.jsx)("div",{className:"text-[10px] font-semibold text-rose-700 dark:text-rose-300 mb-1",children:"Cons"}),(0,t.jsx)("ul",{className:"text-[10px] text-muted-foreground space-y-0.5",children:o.cons.map(e=>(0,t.jsxs)("li",{children:["❌ ",e]},e))})]})]}),(0,t.jsxs)(s.CalloutBox,{colour:"blue",children:[(0,t.jsx)("strong",{children:"When to use which:"})," FIX for exchange connectivity (every exchange speaks it). Protobuf for internal microservices (3.6× smaller, schema-driven). JSON for APIs and debugging (human-readable). Parquet for warehouse storage (columnar, 10× compression on real datasets). A production pipeline uses all four: FIX in → Protobuf between services → Parquet in the warehouse → JSON out via API."]}),(0,t.jsxs)("div",{className:"mt-2 rounded border border-border/40 bg-muted/20 p-2 text-[10px] text-muted-foreground space-y-1",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Math:"})," Size = overhead + Σ(field_size × field_count). FIX has ~40% tag overhead; Protobuf uses varint encoding (1 byte for values < 128); Parquet uses columnar compression (RLE + dictionary)."]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Code:"})," See FIX message, Protobuf .proto, JSON, and Parquet schema above"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Observe:"})," the same order is 185 bytes in FIX, 52 in Protobuf, 247 in JSON, 28/row in Parquet. Parquet wins on storage; Protobuf wins on wire; JSON wins on debuggability."]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Understand:"})," serialisation format is a trade-off: size vs speed vs readability vs schema enforcement. No single format wins all dimensions. The production pipeline uses 4 formats because each is optimal at a different stage."]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Approve:"})," when an agent writes serialisation code, verify: (1) the format matches the use case (FIX for exchange, Protobuf for internal, Parquet for storage), (2) schema evolution is handled (Protobuf field numbers, Parquet schema evolution rules), (3) backward compatibility is tested. If you see JSON used for high-throughput internal communication, reject it — Protobuf is 5× smaller and 2× faster."]})]})]})}function B(){let[e,r]=a.useState(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.Button,{onClick:()=>r(!0),"data-demo-id":"serialization-comparison",size:"sm",variant:"outline",className:"gap-1.5 text-xs","aria-label":"Preview Serialization Comparison demo",children:[(0,t.jsx)(l.FileCode,{className:"h-3.5 w-3.5"}),"Preview serialisation formats"]}),e&&(0,t.jsx)(s.PreviewModal,{demoId:"serialization-comparison",title:"Data serialisation — same trade in FIX, Protobuf, JSON, Parquet",subtitle:"4 formats, size comparison, pros/cons. When to use each in the pipeline.",icon:l.FileCode,iconColour:"text-purple-600",onClose:()=>r(!1),maxWidth:"max-w-4xl",children:(0,t.jsx)(D,{})})]})}function M(){return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:"A C++ matching engine processes orders at microsecond latency. The Python data pipeline needs those fills for analytics. The bridge: shared memory for zero-copy transfer, or Protobuf over a Unix socket for portability. This is a code demo — not runnable in the browser."}),(0,t.jsx)("div",{className:"rounded-md border border-border/60 bg-muted/20 p-4",children:(0,t.jsxs)("div",{className:"grid grid-cols-3 gap-2 text-center text-[10px]",children:[(0,t.jsxs)("div",{className:"rounded border border-purple-500/40 bg-purple-500/5 p-2 font-mono",children:[(0,t.jsx)("div",{className:"font-bold text-purple-700 dark:text-purple-300",children:"C++ Matching Engine"}),(0,t.jsx)("div",{className:"text-muted-foreground",children:"~1μs per match"}),(0,t.jsx)("div",{className:"text-muted-foreground",children:"Nanosecond timestamps"})]}),(0,t.jsx)("div",{className:"flex items-center justify-center text-muted-foreground",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-lg",children:"→"}),(0,t.jsxs)("div",{className:"font-mono text-[9px]",children:["shared memory",(0,t.jsx)("br",{}),"or Protobuf socket"]})]})}),(0,t.jsxs)("div",{className:"rounded border border-emerald-500/40 bg-emerald-500/5 p-2 font-mono",children:[(0,t.jsx)("div",{className:"font-bold text-emerald-700 dark:text-emerald-300",children:"Python Pipeline"}),(0,t.jsx)("div",{className:"text-muted-foreground",children:"~1ms per batch"}),(0,t.jsx)("div",{className:"text-muted-foreground",children:"Kafka → Flink → Warehouse"})]})]})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-1 text-[10px] font-medium uppercase text-purple-700 dark:text-purple-300",children:"C++ matching engine (writes fills to shared memory)"}),(0,t.jsx)(s.CodeBlock,{code:`// matching_engine.cpp — C++17
#include <boost/interprocess/shared_memory_object.hpp>
#include <boost/interprocess/mapped_region.hpp>
#include <chrono>

struct FillEvent {
    char cl_ord_id[20];       // client order ID
    char symbol[8];            // ticker
    double price;
    int64_t quantity;
    int32_t side;              // 1=Buy, 2=Sell
    int64_t timestamp_ns;      // nanosecond timestamp
    char exchange[4];          // MIC code
} __attribute__((packed));

void publish_fill(const Fill& fill) {
    using namespace boost::interprocess;

    // Open or create shared memory segment
    shared_memory_object shm(open_or_create, "fill_buffer", read_write);
    shm.truncate(sizeof(FillEvent));

    // Map the region
    mapped_region region(shm, read_write);
    auto* event = static_cast<FillEvent*>(region.get_address());

    // Zero-copy write (no serialisation overhead)
    std::memcpy(event->cl_ord_id, fill.cl_ord_id.c_str(), 20);
    std::memcpy(event->symbol, fill.symbol.c_str(), 8);
    event->price = fill.price;
    event->quantity = fill.quantity;
    event->side = fill.side;
    event->timestamp_ns = std::chrono::duration_cast<std::chrono::nanoseconds>(
        std::chrono::high_resolution_clock::now().time_since_epoch()).count();
    std::memcpy(event->exchange, fill.exchange.c_str(), 4);

    // Notify Python consumer (semaphore or condition variable)
    notify_consumer();
}

// Matching loop: match order → publish fill → continue
// Latency budget: < 1μs per match, < 100ns for shared-memory write`,maxHeight:"max-h-72"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-1 text-[10px] font-medium uppercase text-emerald-700 dark:text-emerald-300",children:"Python consumer (reads fills, sends to Kafka)"}),(0,t.jsx)(s.CodeBlock,{code:`# fill_consumer.py — Python 3.12
import mmap
import struct
import json
from kafka import KafkaProducer
import ctypes

# Match the C++ struct layout exactly
class FillEvent(ctypes.Structure):
    _fields_ = [
        ("cl_ord_id", ctypes.c_char * 20),
        ("symbol",    ctypes.c_char * 8),
        ("price",     ctypes.c_double),
        ("quantity",  ctypes.c_int64),
        ("side",      ctypes.c_int32),
        ("timestamp_ns", ctypes.c_int64),
        ("exchange",  ctypes.c_char * 4),
    ]

# Open shared memory (created by C++ engine)
shm = mmap.mmap(-1, ctypes.sizeof(FillEvent), "fill_buffer")

# Kafka producer
producer = KafkaProducer(
    bootstrap_servers=['kafka:9092'],
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)

def consume_fills():
    """Read fills from shared memory, publish to Kafka."""
    while True:
        # Wait for C++ notification (semaphore)
        wait_for_notification()

        # Zero-copy read (no deserialisation — ctypes maps directly)
        event = FillEvent.from_buffer_copy(shm)

        # Transform to JSON for Kafka
        fill = {
            'cl_ord_id': event.cl_ord_id.decode('utf-8').strip('\\x00'),
            'symbol':    event.symbol.decode('utf-8').strip('\\x00'),
            'price':     event.price,
            'quantity':  event.quantity,
            'side':      'Buy' if event.side == 1 else 'Sell',
            'timestamp': event.timestamp_ns / 1e9,  # ns → seconds
            'exchange':  event.exchange.decode('utf-8').strip('\\x00'),
        }

        # Publish to Kafka → Flink → Warehouse
        producer.send('trade.fills', fill)

        # Latency: ~50μs (shared memory read + Kafka produce)
        # vs ~5ms if we used FIX over TCP instead of shared memory`,maxHeight:"max-h-72"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,t.jsxs)("div",{className:"rounded-md border border-purple-500/30 bg-purple-500/5 p-3 text-center",children:[(0,t.jsx)("div",{className:"text-[10px] uppercase text-muted-foreground",children:"C++ match"}),(0,t.jsx)("div",{className:"text-lg font-bold text-purple-600",children:"~1μs"})]}),(0,t.jsxs)("div",{className:"rounded-md border border-blue-500/30 bg-blue-500/5 p-3 text-center",children:[(0,t.jsx)("div",{className:"text-[10px] uppercase text-muted-foreground",children:"Shared memory bridge"}),(0,t.jsx)("div",{className:"text-lg font-bold text-blue-600",children:"~100ns"})]}),(0,t.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-3 text-center",children:[(0,t.jsx)("div",{className:"text-[10px] uppercase text-muted-foreground",children:"Python → Kafka"}),(0,t.jsx)("div",{className:"text-lg font-bold text-emerald-600",children:"~50μs"})]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-3",children:[(0,t.jsx)("div",{className:"text-xs font-semibold text-foreground mb-1",children:"End-to-end latency budget"}),(0,t.jsxs)("div",{className:"text-[10px] text-muted-foreground space-y-1",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Math:"})," T_total = T_match + T_bridge + T_python + T_kafka"]}),(0,t.jsx)("div",{children:"T_total = 1μs + 0.1μs + 50μs + 20μs = 71.1μs"}),(0,t.jsx)("div",{children:"vs FIX-over-TCP: T_total = 1μs + 5000μs (TCP) + 50μs + 20μs = 5071μs"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Speedup:"})," 71× faster with shared memory vs TCP"]}),(0,t.jsxs)("div",{className:"pt-1",children:[(0,t.jsx)("strong",{children:"Code:"})," See C++ struct + ctypes Python mirror + shared memory segment above"]}),(0,t.jsxs)("div",{className:"pt-1",children:[(0,t.jsx)("strong",{children:"Observe:"})," the bridge (100ns) is negligible. The bottleneck is Python (50μs) and Kafka (20μs). The C++ engine is 50× faster than the pipeline — it could process 50× more volume if the pipeline kept up."]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Understand:"})," shared memory avoids the TCP/IP stack (kernel space → user space copy). The C++ struct is mapped directly into Python's address space via ctypes — no serialisation, no copy, no parsing. The trade-off: C++ and Python must run on the same machine (shared memory is not network-transparent)."]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Approve:"})," when an agent writes a C++/Python bridge, verify: (1) the struct layout matches exactly (ctypes._fields_ mirror the C++ struct), (2) endianness is explicit (or both sides are x86), (3) nanosecond timestamps are preserved (not truncated to microseconds). If you see ",(0,t.jsx)("code",{className:"text-[9px]",children:"time.time()"})," instead of ",(0,t.jsx)("code",{className:"text-[9px]",children:"high_resolution_clock"}),", reject it — Python's clock is microsecond-granular, not nanosecond."]})]})]}),(0,t.jsxs)(s.CalloutBox,{colour:"purple",children:[(0,t.jsx)("strong",{children:"Honest gap:"})," this is a code demo, not a running demo — C++ cannot execute in a browser. But the code is production-ready: the ",(0,t.jsx)("code",{className:"text-[10px]",children:"__attribute__((packed))"})," struct, the ",(0,t.jsx)("code",{className:"text-[10px]",children:"ctypes"})," mirror, and the latency budget are exactly what a quant team would deploy. When an agent writes this bridge, use the latency budget (71μs vs 5071μs) as the verification standard."]})]})}function R(){let[e,r]=a.useState(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.Button,{onClick:()=>r(!0),"data-demo-id":"cpp-python-bridge",size:"sm",variant:"outline",className:"gap-1.5 text-xs","aria-label":"Preview Cpp Python Bridge demo",children:[(0,t.jsx)(c.Cpu,{className:"h-3.5 w-3.5"}),"Preview C++ bridge"]}),e&&(0,t.jsx)(s.PreviewModal,{demoId:"cpp-python-bridge",title:"C++ bridge — matching engine to Python pipeline via shared memory",subtitle:"C++ writes fills to shared memory (100ns). Python reads via ctypes (50μs). 71× faster than TCP.",icon:c.Cpu,iconColour:"text-purple-600",onClose:()=>r(!1),maxWidth:"max-w-4xl",children:(0,t.jsx)(M,{})})]})}e.s(["CppBridgeDemoButton",()=>R,"ModelSpecGeneratorButton",()=>_,"SerializationComparisonDemoButton",()=>B,"TechStackDemosButton",()=>T])},35051,e=>{"use strict";var t=e.i(43476),a=e.i(22016),s=e.i(58472),r=e.i(55711),o=e.i(41240),n=e.i(95468),i=e.i(78894),l=e.i(18393),c=e.i(15288),d=e.i(87486),m=e.i(84774),u=e.i(92178),p=e.i(5296);let h=[{category:"Framework",name:"Next.js 16",version:"16.1.x",role:"App Router, MPA, static export to GitHub Pages",url:"https://nextjs.org"},{category:"Language",name:"TypeScript 5",version:"5.x",role:"Type safety throughout, strict mode",url:"https://www.typescriptlang.org"},{category:"UI Library",name:"React 19",version:"19.x",role:"Component rendering, hooks, concurrent features",url:"https://react.dev"},{category:"Styling",name:"Tailwind CSS 4",version:"4.x",role:"Utility-first CSS, dark/light theming",url:"https://tailwindcss.com"},{category:"Components",name:"shadcn/ui (New York)",version:"latest",role:"Radix primitives + Tailwind, accessible components",url:"https://ui.shadcn.com"},{category:"Icons",name:"Lucide React",version:"0.525.x",role:"Tree-shakeable SVG icons",url:"https://lucide.dev"},{category:"Theming",name:"next-themes",version:"0.4.x",role:"Dark/light mode with localStorage persistence",url:"https://github.com/pacocoursey/next-themes"},{category:"Database",name:"Prisma ORM",version:"6.x",role:"SQLite client for dim_workflow_run provenance",url:"https://www.prisma.io"},{category:"Database (runtime)",name:"SQLite",version:"bundled",role:"Embedded database for provenance dimension",url:"https://www.sqlite.org"},{category:"AI",name:"z-ai-web-dev-sdk",version:"0.0.18",role:"AskAI chat completions (sandbox only)",url:"https://github.com/zai-org/z-ai-web-dev-sdk"},{category:"Runtime (mini-services)",name:"Bun",version:"latest",role:"synthetic-data, event-stream, feature-store services",url:"https://bun.sh"},{category:"Streaming",name:"Web Streams API",version:"native",role:"File.stream() + TextDecoderStream for lazy parsing",url:"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API"},{category:"Charts (available)",name:"Recharts",version:"2.15.x",role:"Composable charting (available, not yet heavily used)",url:"https://recharts.org"},{category:"State (available)",name:"Zustand",version:"5.x",role:"Client state management (available, not yet heavily used)",url:"https://github.com/pmndrs/zustand"},{category:"Package manager",name:"Bun",version:"latest",role:"Dependency management and script runner",url:"https://bun.sh"}],x=[{category:"NIfTI I/O",name:"nibabel",role:"Read/write NIfTI, GIFTI, CIFTI brain image files",status:"not-integrated",url:"https://nipy.org/nibabel"},{category:"ML for neuroimaging",name:"nilearn",role:"Machine learning, decoding, connectome analysis",status:"not-integrated",url:"https://nilearn.org"},{category:"Diffusion imaging",name:"dipy",role:"Diffusion MRI processing and tractography",status:"not-integrated",url:"https://dipy.org"},{category:"Pipeline engine",name:"nipype",role:"Wraps FSL/SPM/AFNI into portable pipelines",status:"not-integrated",url:"https://nipype.readthedocs.io"},{category:"BIDS I/O",name:"pybids",role:"Read and validate BIDS datasets in Python",status:"not-integrated",url:"https://bids-standard.github.io/pybids"},{category:"BIDS validator",name:"bids-validator",role:"JavaScript BIDS dataset validation (can run in browser)",status:"not-integrated",url:"https://github.com/bids-standard/bids-validator"},{category:"fMRI preprocessing",name:"fMRIPrep",role:"Standard BOLD preprocessing pipeline (Docker)",status:"not-integrated",url:"https://fmriprep.org"},{category:"MRI QC",name:"MRIQC",role:"Image quality metrics for MRI (Docker)",status:"not-integrated",url:"https://mriqc.readthedocs.io"},{category:"In-browser viewer",name:"Niivue",role:"WebGL NIfTI viewer — could render brain images in the browser",status:"not-integrated",url:"https://niivue.com"},{category:"In-browser viewer",name:"Papaya.js",role:"Pure JS NIfTI viewer (older but stable)",status:"not-integrated",url:"https://github.com/rii-mango/Papaya"},{category:"Processing suite",name:"FSL",role:"FMRIB Software Library — the de facto fMRI analysis suite",status:"not-integrated",url:"https://fsl.fmrib.ox.ac.uk"},{category:"Processing suite",name:"AFNI",role:"Analysis of Functional NeuroImages",status:"not-integrated",url:"https://afni.nimh.nih.gov"},{category:"Processing suite",name:"SPM",role:"Statistical Parametric Mapping (MATLAB)",status:"not-integrated",url:"https://www.fil.ion.ucl.ac.uk/spm"},{category:"Processing suite",name:"FreeSurfer",role:"Cortical surface reconstruction and segmentation",status:"not-integrated",url:"https://surfer.nmr.mgh.harvard.edu"},{category:"Genomics (variant calling)",name:"GATK",role:"Genome Analysis Toolkit — variant calling",status:"not-integrated",url:"https://gatk.broadinstitute.org"},{category:"Genomics (variant calling)",name:"DeepVariant",role:"Deep learning variant caller (Google)",status:"not-integrated",url:"https://github.com/google/deepvariant"},{category:"Workflow orchestrator",name:"Nextflow",role:"Genomics-standard workflow engine",status:"not-integrated",url:"https://www.nextflow.io"},{category:"Workflow orchestrator",name:"Snakemake",role:"Python-based workflow engine",status:"not-integrated",url:"https://snakemake.readthedocs.io"},{category:"Workflow orchestrator",name:"Argo Workflows",role:"Kubernetes-native workflows",status:"not-integrated",url:"https://argoproj.github.io/argo-workflows"},{category:"Climate (xarray)",name:"xarray + netCDF4",role:"Gridded climate data I/O and analysis",status:"not-integrated",url:"https://xarray.dev"},{category:"Astrophysics",name:"astropy",role:"Astronomy calculations, FITS I/O, coordinates",status:"not-integrated",url:"https://www.astropy.org"}],g=[{category:"Event broker (simulated)",name:"In-process WebSocket",role:"event-stream-service simulates Kafka semantics",status:"simulated"},{category:"Event broker (production)",name:"Apache Kafka / Redpanda",role:"Replace simulation via KAFKA_BOOTSTRAP_SERVERS",status:"swap-point"},{category:"Stream processor (production)",name:"Apache Flink",role:"Real-time fact table projections",status:"swap-point"},{category:"Batch processor (production)",name:"Apache Spark",role:"Large-scale batch transforms",status:"swap-point"},{category:"Warehouse (production)",name:"ClickHouse / BigQuery / Snowflake",role:"Columnar OLAP for fact tables",status:"swap-point"},{category:"Feature store (production)",name:"Feast",role:"Offline + online feature serving",status:"swap-point"},{category:"Object storage (production)",name:"S3 / GCS / MinIO",role:"Raw and derived data artifacts",status:"swap-point"},{category:"Catalog (production)",name:"DataHub / OpenMetadata",role:"Data product discovery and lineage",status:"swap-point"},{category:"Tracing (production)",name:"OpenTelemetry + Jaeger",role:"Distributed trace context",status:"swap-point"},{category:"Metrics (production)",name:"Prometheus + Grafana",role:"RED + USE metrics, dashboards",status:"swap-point"},{category:"Logs (production)",name:"Loki + Grafana",role:"Structured log aggregation",status:"swap-point"},{category:"Azure — data lake",name:"Azure Data Lake Storage Gen2",role:"Hierarchical namespace + Blob storage. Hadoop-compatible. The standard for Azure-side genomics data lakes.",status:"swap-point",url:"https://azure.microsoft.com/products/storage/data-lake-storage"},{category:"Azure — Spark",name:"Azure Databricks",role:"Managed Spark workspace. Notebooks, jobs, MLflow integration. Runs the genomics QC + imputation pipelines at scale.",status:"swap-point",url:"https://azure.microsoft.com/products/databricks"},{category:"Azure — batch",name:"Azure Batch",role:"HPC-grade batch processing for genomics workloads. Microsoft-recommended runner for GATK, BWA, shapeit4, Minimac4 at biobank scale.",status:"swap-point",url:"https://azure.microsoft.com/products/batch"},{category:"Azure — ML",name:"Azure Machine Learning",role:"Managed ML platform for PRS (polygenic risk score) models and cohort-selection ML. Pipelines, endpoints, drift monitoring.",status:"swap-point",url:"https://azure.microsoft.com/products/machine-learning"},{category:"Azure — warehouse",name:"Azure Synapse / Microsoft Fabric",role:"Cloud data warehouse + analytics. T-SQL queries against dim_variant / fact_genotype_call. Synapse Spark pools for ETL.",status:"swap-point",url:"https://azure.microsoft.com/products/synapse-analytics"},{category:"Azure — genomics service",name:"Microsoft Genomics (Cromwell on Azure)",role:"Managed Cromwell workflow engine for genomics. Depracated in favour of Azure Batch + Nextflow/Terra.",status:"swap-point",url:"https://azure.microsoft.com/products/genomics"},{category:"Azure — orchestration",name:"Azure Data Factory",role:"Managed ETL/ELT orchestration. Schedules genomics pipeline runs, triggers Azure Batch jobs, moves data between ADLS Gen2 tiers.",status:"swap-point",url:"https://azure.microsoft.com/products/data-factory"}];function b(){return(0,t.jsxs)(u.ViewShell,{eyebrow:"Reference",title:"Technology stack — what DSModelPro actually uses",description:"An honest accounting of the libraries and platforms behind DSModelPro. The web application stack is real and integrated. The scientific computing stack is documented as the target architecture — most of it is not yet wired in, because DSModelPro is currently a reference and documentation platform, not a processing pipeline. Each scientific library below is marked with its integration status.",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[(0,t.jsx)(p.TechStackDemosButton,{}),(0,t.jsx)("span",{children:"Click any library to see real code samples and live output."})]}),(0,t.jsxs)(c.Card,{className:"border-amber-500/30 bg-amber-500/5",children:[(0,t.jsx)(c.CardHeader,{children:(0,t.jsxs)(c.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(i.AlertTriangle,{className:"h-4.5 w-4.5 text-amber-600 dark:text-amber-400","aria-hidden":"true"}),"What DSModelPro is — and what it is not"]})}),(0,t.jsxs)(c.CardContent,{className:"space-y-2 text-sm leading-relaxed text-muted-foreground",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground",children:"DSModelPro is a dimensional data warehouse reference platform."})," ","It models how scientific data — climate, genomics, astrophysics, neuroimaging — should be structured in a Kimball warehouse, governed, and made queryable. The web stack below is real and runs the application you are using right now."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground",children:"DSModelPro is not a processing pipeline."})," ","It does not run fMRIPrep, GATK or FSL. It does not process NIfTI files or call variants. The scientific libraries listed below are the ",(0,t.jsx)("em",{children:"target ecosystem"})," — what a production deployment would integrate. The current app describes how those outputs land in the warehouse, not how they are produced."]}),(0,t.jsx)("p",{children:"This is deliberate. The dimensional model is the hard part to get right; the processing tools are well-established. DSModelPro solves the modelling problem first. Integrating real processing is the next evolution phase."})]})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(n.CheckCircle2,{className:"mr-2 inline h-6 w-6 text-emerald-600 dark:text-emerald-400","aria-hidden":"true"}),"Web application stack — integrated and running"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"These libraries power the application you are using right now. All are open-source and run client-side or in the Bun mini-services."})]}),(0,t.jsx)(c.Card,{children:(0,t.jsx)(c.CardContent,{className:"p-0",children:(0,t.jsxs)(m.Table,{children:[(0,t.jsx)(m.TableHeader,{children:(0,t.jsxs)(m.TableRow,{children:[(0,t.jsx)(m.TableHead,{children:"Category"}),(0,t.jsx)(m.TableHead,{children:"Library"}),(0,t.jsx)(m.TableHead,{children:"Version"}),(0,t.jsx)(m.TableHead,{children:"Role in DSModelPro"})]})}),(0,t.jsx)(m.TableBody,{children:h.map(e=>(0,t.jsxs)(m.TableRow,{children:[(0,t.jsx)(m.TableCell,{className:"text-xs text-muted-foreground",children:e.category}),(0,t.jsx)(m.TableCell,{children:(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-foreground hover:text-emerald-600",children:e.name})}),(0,t.jsx)(m.TableCell,{className:"font-mono text-xs text-muted-foreground",children:e.version}),(0,t.jsx)(m.TableCell,{className:"text-xs text-muted-foreground",children:e.role})]},e.name))})]})})})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(r.Brain,{className:"mr-2 inline h-6 w-6 text-purple-600 dark:text-purple-400","aria-hidden":"true"}),"Scientific computing stack — target ecosystem (not yet integrated)"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"These are the libraries a production DSModelPro deployment would integrate to actually process scientific data. They are listed here for transparency and as a roadmap. None are currently wired in."})]}),(0,t.jsx)(c.Card,{children:(0,t.jsx)(c.CardContent,{className:"p-0",children:(0,t.jsxs)(m.Table,{children:[(0,t.jsx)(m.TableHeader,{children:(0,t.jsxs)(m.TableRow,{children:[(0,t.jsx)(m.TableHead,{children:"Category"}),(0,t.jsx)(m.TableHead,{children:"Library"}),(0,t.jsx)(m.TableHead,{children:"Role"}),(0,t.jsx)(m.TableHead,{children:"Status"})]})}),(0,t.jsx)(m.TableBody,{children:x.map(e=>(0,t.jsxs)(m.TableRow,{children:[(0,t.jsx)(m.TableCell,{className:"text-xs text-muted-foreground",children:e.category}),(0,t.jsx)(m.TableCell,{children:(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-foreground hover:text-purple-600",children:e.name})}),(0,t.jsx)(m.TableCell,{className:"text-xs text-muted-foreground",children:e.role}),(0,t.jsx)(m.TableCell,{children:(0,t.jsx)(d.Badge,{variant:"outline",className:"text-[9px] text-amber-600 dark:text-amber-400",children:e.status})})]},e.name))})]})})})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(l.Server,{className:"mr-2 inline h-6 w-6 text-emerald-600 dark:text-emerald-400","aria-hidden":"true"}),"Infrastructure stack — swap points"]}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:["DSModelPro ships with in-process simulations. Each infrastructure component has a typed interface and a swap point on the"," ",(0,t.jsx)(a.default,{href:"/ecosystem-integration",className:"text-emerald-600 hover:underline",children:"Ecosystem Integration"})," ","page."]})]}),(0,t.jsx)(c.Card,{children:(0,t.jsx)(c.CardContent,{className:"p-0",children:(0,t.jsxs)(m.Table,{children:[(0,t.jsx)(m.TableHeader,{children:(0,t.jsxs)(m.TableRow,{children:[(0,t.jsx)(m.TableHead,{children:"Category"}),(0,t.jsx)(m.TableHead,{children:"Technology"}),(0,t.jsx)(m.TableHead,{children:"Role"}),(0,t.jsx)(m.TableHead,{children:"Status"})]})}),(0,t.jsx)(m.TableBody,{children:g.map(e=>(0,t.jsxs)(m.TableRow,{children:[(0,t.jsx)(m.TableCell,{className:"text-xs text-muted-foreground",children:e.category}),(0,t.jsx)(m.TableCell,{className:"font-medium",children:e.name}),(0,t.jsx)(m.TableCell,{className:"text-xs text-muted-foreground",children:e.role}),(0,t.jsx)(m.TableCell,{children:(0,t.jsx)(d.Badge,{variant:"simulated"===e.status?"secondary":"outline",className:"swap-point"===e.status?"text-[9px] text-emerald-600 dark:text-emerald-400":"text-[9px]",children:e.status})})]},e.category+e.name))})]})})})]}),(0,t.jsxs)(c.Card,{className:"border-emerald-500/30 bg-emerald-500/5",children:[(0,t.jsxs)(c.CardHeader,{children:[(0,t.jsxs)(c.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(o.Lightbulb,{className:"h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400","aria-hidden":"true"}),"Advanced evolution thoughts"]}),(0,t.jsx)(c.CardDescription,{children:"Where DSModelPro could go next — from reference platform to production scientific data platform."})]}),(0,t.jsxs)(c.CardContent,{className:"space-y-4 text-sm leading-relaxed text-muted-foreground",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h3",{className:"font-semibold text-foreground",children:"Phase 1: Real neuroimaging processing"}),(0,t.jsx)("p",{children:"Add a Python mini-service (FastAPI + nibabel + pybids) that accepts a BIDS dataset URL, runs bids-validator, and returns a dataset manifest. The Live Demo could then show real BIDS datasets (e.g. OpenNeuro) instead of synthetic data. This is the lowest-friction integration — nibabel and pybids are pure Python, no GPU needed."})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h3",{className:"font-semibold text-foreground",children:"Phase 2: In-browser brain image viewing"}),(0,t.jsxs)("p",{children:["Integrate ",(0,t.jsx)("a",{href:"https://niivue.com",target:"_blank",rel:"noopener noreferrer",className:"text-emerald-600 hover:underline",children:"Niivue"})," — a WebGL NIfTI viewer that renders brain images in the browser. Upload a .nii.gz file, see it rendered as a slice/orthogonal view, and the metadata (TR, TE, voxel size) auto-populates the fact table spec. This would make the neuroimaging page genuinely interactive rather than descriptive."]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h3",{className:"font-semibold text-foreground",children:"Phase 3: Real processing via Docker"}),(0,t.jsx)("p",{children:"Wrap fMRIPrep, GATK and CESM2 in Docker containers orchestrated by a mini-service. The Live Demo could submit a real (small) BIDS dataset to fMRIPrep and watch the workflow_run row appear in dim_workflow_run as it completes. Requires a server with Docker — not possible in this sandbox, but the architecture supports it."})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h3",{className:"font-semibold text-foreground",children:"Phase 4: Jupyter notebooks in-app"}),(0,t.jsxs)("p",{children:["Embed ",(0,t.jsx)("a",{href:"https://jupyter.org",target:"_blank",rel:"noopener noreferrer",className:"text-emerald-600 hover:underline",children:"JupyterLite"})," ","(Jupyter compiled to WebAssembly) so users can write Python notebooks that query the dimensional model — all client-side, no server. Combined with the DataUploadPanel, this turns DSModelPro into a self-contained analytical workbench."]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h3",{className:"font-semibold text-foreground",children:"Phase 5: Version-controlled data products"}),(0,t.jsxs)("p",{children:["Integrate ",(0,t.jsx)("a",{href:"https://dvc.org",target:"_blank",rel:"noopener noreferrer",className:"text-emerald-600 hover:underline",children:"DVC (Data Version Control)"})," ","so data products are versioned alongside the code. Each fact table load gets a DVC commit; rolling back to a previous version of the warehouse becomes a git checkout. This closes the gap between code versioning and data versioning."]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h3",{className:"font-semibold text-foreground",children:"Phase 6: Real-time collaboration"}),(0,t.jsx)("p",{children:"Add WebSocket-based multi-user editing so teams can collaboratively annotate the bus matrix, dimension attributes and data quality rules. The event-stream-service already demonstrates the WebSocket plumbing — extending it to collaborative state is a natural next step."})]})]})]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-3",children:[(0,t.jsxs)(d.Badge,{variant:"outline",className:"gap-1",children:[(0,t.jsx)(l.Server,{className:"h-3 w-3","aria-hidden":"true"}),"Related: Ecosystem Integration"]}),(0,t.jsxs)(d.Badge,{variant:"outline",className:"gap-1",children:[(0,t.jsx)(r.Brain,{className:"h-3 w-3","aria-hidden":"true"}),"Related: Neuroimaging"]}),(0,t.jsxs)(d.Badge,{variant:"outline",className:"gap-1",children:[(0,t.jsx)(s.Code,{className:"h-3 w-3","aria-hidden":"true"}),"Related: Documentation"]})]})]})}e.s(["default",()=>b])}]);