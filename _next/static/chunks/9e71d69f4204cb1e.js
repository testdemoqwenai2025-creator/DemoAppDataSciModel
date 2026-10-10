(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,38155,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(22016),i=e.i(98919),n=e.i(58041),s=e.i(41240),o=e.i(95468),d=e.i(21218),l=e.i(25652),c=e.i(26912),m=e.i(31245),p=e.i(15288),u=e.i(87486),f=e.i(67489),h=e.i(92178),g=e.i(8679),x=e.i(31343),R=e.i(41929),_=e.i(78917),y=e.i(81418),v=e.i(21544);let E=(0,e.i(75254).default)("square-split-horizontal",[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);var I=e.i(59208),N=e.i(70756),A=e.i(30030),b=e.i(75830),T=e.i(20783),C=e.i(81140),S=e.i(69340),j=e.i(48425),k=e.i(34620),w=e.i(96626),L=e.i(10772),M="Collapsible",[D,P]=(0,A.createContextScope)(M),[F,O]=D(M),H=r.forwardRef((e,a)=>{let{__scopeCollapsible:i,open:n,defaultOpen:s,disabled:o,onOpenChange:d,...l}=e,[c,m]=(0,S.useControllableState)({prop:n,defaultProp:s??!1,onChange:d,caller:M});return(0,t.jsx)(F,{scope:i,disabled:o,contentId:(0,L.useId)(),open:c,onOpenToggle:r.useCallback(()=>m(e=>!e),[m]),children:(0,t.jsx)(j.Primitive.div,{"data-state":Y(c),"data-disabled":o?"":void 0,...l,ref:a})})});H.displayName=M;var V="CollapsibleTrigger",U=r.forwardRef((e,r)=>{let{__scopeCollapsible:a,...i}=e,n=O(V,a);return(0,t.jsx)(j.Primitive.button,{type:"button","aria-controls":n.contentId,"aria-expanded":n.open||!1,"data-state":Y(n.open),"data-disabled":n.disabled?"":void 0,disabled:n.disabled,...i,ref:r,onClick:(0,C.composeEventHandlers)(e.onClick,n.onOpenToggle)})});U.displayName=V;var B="CollapsibleContent",G=r.forwardRef((e,r)=>{let{forceMount:a,...i}=e,n=O(B,e.__scopeCollapsible);return(0,t.jsx)(w.Presence,{present:a||n.open,children:({present:e})=>(0,t.jsx)(q,{...i,ref:r,present:e})})});G.displayName=B;var q=r.forwardRef((e,a)=>{let{__scopeCollapsible:i,present:n,children:s,...o}=e,d=O(B,i),[l,c]=r.useState(n),m=r.useRef(null),p=(0,T.useComposedRefs)(a,m),u=r.useRef(0),f=u.current,h=r.useRef(0),g=h.current,x=d.open||l,R=r.useRef(x),_=r.useRef(void 0);return r.useEffect(()=>{let e=requestAnimationFrame(()=>R.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,k.useLayoutEffect)(()=>{let e=m.current;if(e){_.current=_.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();u.current=t.height,h.current=t.width,R.current||(e.style.transitionDuration=_.current.transitionDuration,e.style.animationName=_.current.animationName),c(n)}},[d.open,n]),(0,t.jsx)(j.Primitive.div,{"data-state":Y(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!x,...o,ref:p,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":g?`${g}px`:void 0,...e.style},children:x&&s})});function Y(e){return e?"open":"closed"}var X=e.i(86318),W="Accordion",K=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Q,J,Z]=(0,b.createCollection)(W),[z,$]=(0,A.createContextScope)(W,[Z,P]),ee=P(),et=r.default.forwardRef((e,r)=>{let{type:a,...i}=e;return(0,t.jsx)(Q.Provider,{scope:e.__scopeAccordion,children:"multiple"===a?(0,t.jsx)(eo,{...i,ref:r}):(0,t.jsx)(es,{...i,ref:r})})});et.displayName=W;var[er,ea]=z(W),[ei,en]=z(W,{collapsible:!1}),es=r.default.forwardRef((e,a)=>{let{value:i,defaultValue:n,onValueChange:s=()=>{},collapsible:o=!1,...d}=e,[l,c]=(0,S.useControllableState)({prop:i,defaultProp:n??"",onChange:s,caller:W});return(0,t.jsx)(er,{scope:e.__scopeAccordion,value:r.default.useMemo(()=>l?[l]:[],[l]),onItemOpen:c,onItemClose:r.default.useCallback(()=>o&&c(""),[o,c]),children:(0,t.jsx)(ei,{scope:e.__scopeAccordion,collapsible:o,children:(0,t.jsx)(ec,{...d,ref:a})})})}),eo=r.default.forwardRef((e,a)=>{let{value:i,defaultValue:n,onValueChange:s=()=>{},...o}=e,[d,l]=(0,S.useControllableState)({prop:i,defaultProp:n??[],onChange:s,caller:W}),c=r.default.useCallback(e=>l((t=[])=>[...t,e]),[l]),m=r.default.useCallback(e=>l((t=[])=>t.filter(t=>t!==e)),[l]);return(0,t.jsx)(er,{scope:e.__scopeAccordion,value:d,onItemOpen:c,onItemClose:m,children:(0,t.jsx)(ei,{scope:e.__scopeAccordion,collapsible:!0,children:(0,t.jsx)(ec,{...o,ref:a})})})}),[ed,el]=z(W),ec=r.default.forwardRef((e,a)=>{let{__scopeAccordion:i,disabled:n,dir:s,orientation:o="vertical",...d}=e,l=r.default.useRef(null),c=(0,T.useComposedRefs)(l,a),m=J(i),p="ltr"===(0,X.useDirection)(s),u=(0,C.composeEventHandlers)(e.onKeyDown,e=>{if(!K.includes(e.key))return;let t=e.target,r=m().filter(e=>!e.ref.current?.disabled),a=r.findIndex(e=>e.ref.current===t),i=r.length;if(-1===a)return;e.preventDefault();let n=a,s=i-1,d=()=>{(n=a+1)>s&&(n=0)},l=()=>{(n=a-1)<0&&(n=s)};switch(e.key){case"Home":n=0;break;case"End":n=s;break;case"ArrowRight":"horizontal"===o&&(p?d():l());break;case"ArrowDown":"vertical"===o&&d();break;case"ArrowLeft":"horizontal"===o&&(p?l():d());break;case"ArrowUp":"vertical"===o&&l()}let c=n%i;r[c].ref.current?.focus()});return(0,t.jsx)(ed,{scope:i,disabled:n,direction:s,orientation:o,children:(0,t.jsx)(Q.Slot,{scope:i,children:(0,t.jsx)(j.Primitive.div,{...d,"data-orientation":o,ref:c,onKeyDown:n?void 0:u})})})}),em="AccordionItem",[ep,eu]=z(em),ef=r.default.forwardRef((e,r)=>{let{__scopeAccordion:a,value:i,...n}=e,s=el(em,a),o=ea(em,a),d=ee(a),l=(0,L.useId)(),c=i&&o.value.includes(i)||!1,m=s.disabled||e.disabled;return(0,t.jsx)(ep,{scope:a,open:c,disabled:m,triggerId:l,children:(0,t.jsx)(H,{"data-orientation":s.orientation,"data-state":ev(c),...d,...n,ref:r,disabled:m,open:c,onOpenChange:e=>{e?o.onItemOpen(i):o.onItemClose(i)}})})});ef.displayName=em;var eh="AccordionHeader",eg=r.default.forwardRef((e,r)=>{let{__scopeAccordion:a,...i}=e,n=el(W,a),s=eu(eh,a);return(0,t.jsx)(j.Primitive.h3,{"data-orientation":n.orientation,"data-state":ev(s.open),"data-disabled":s.disabled?"":void 0,...i,ref:r})});eg.displayName=eh;var ex="AccordionTrigger",eR=r.default.forwardRef((e,r)=>{let{__scopeAccordion:a,...i}=e,n=el(W,a),s=eu(ex,a),o=en(ex,a),d=ee(a);return(0,t.jsx)(Q.ItemSlot,{scope:a,children:(0,t.jsx)(U,{"aria-disabled":s.open&&!o.collapsible||void 0,"data-orientation":n.orientation,id:s.triggerId,...d,...i,ref:r})})});eR.displayName=ex;var e_="AccordionContent",ey=r.default.forwardRef((e,r)=>{let{__scopeAccordion:a,...i}=e,n=el(W,a),s=eu(e_,a),o=ee(a);return(0,t.jsx)(G,{role:"region","aria-labelledby":s.triggerId,"data-orientation":n.orientation,...o,...i,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function ev(e){return e?"open":"closed"}ey.displayName=e_;var eE=e.i(9797),eI=e.i(75157);function eN({...e}){return(0,t.jsx)(et,{"data-slot":"accordion",...e})}function eA({className:e,...r}){return(0,t.jsx)(ef,{"data-slot":"accordion-item",className:(0,eI.cn)("border-b last:border-b-0",e),...r})}function eb({className:e,children:r,...a}){return(0,t.jsx)(eg,{className:"flex",children:(0,t.jsxs)(eR,{"data-slot":"accordion-trigger",className:(0,eI.cn)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",e),...a,children:[r,(0,t.jsx)(eE.ChevronDownIcon,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function eT({className:e,children:r,...a}){return(0,t.jsx)(ey,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...a,children:(0,t.jsx)("div",{className:(0,eI.cn)("pt-0 pb-4",e),children:r})})}var eC=e.i(19455);let eS=`# 100% Field Validation — no sampling
import pandas as pd

# In the live page this loads /sample-data/mifir_trades_1000.csv (1,000 trades, ~10% seeded errors)
# REPL sandbox blocks fetch, so we use an inline 6-row frame mirroring the same schema.
df = pd.DataFrame({
    'transaction_id': ['TRX-00000001','TRX-00000002','TRX-00000003','TRX-00000004','TRX-00000005','TRX-00000006'],
    'isin':           ['GB0002374006','INVALID123',   'US0378331005','US02079K3059','DE0007164600','CH0012005267'],
    'quantity':       [100, 250, 50, 1000, 75, 200],
    'price':          [532.10, 0, 178.45, 0, 105.20, 95.40],
    'currency':       ['GBP','Dollar','USD','EUR','EUR','CHF'],
    'venue':          ['XLON','LONDON','XNYS','XPAR','XFRA','XSWX'],
    'counterparty_lei':['213800LBPT1H9WO9ZL78','INVALID','549300JSX0Z4CY0V0P21','529900D6BHCL8WQ7R898','213800LBPT1H9WO9ZL78','5493001ZABYZPD63HV28'],
})

VALID_VENUES = {'XLON','XNYS','XNAS','XPAR','XAMS','XFRA','XMIL','XMAD'}
VALID_CCY = {'GBP','USD','EUR','CHF','JPY'}

RULES = [
    ('ISIN_FORMAT',     'isin',             'CRITICAL', lambda r: len(str(r.get('isin','')))==12),
    ('PRICE_POSITIVE',  'price',            'HIGH',     lambda r: pd.to_numeric(r.get('price',0),errors='coerce')>0),
    ('QUANTITY_POSITIVE','quantity',        'HIGH',     lambda r: pd.to_numeric(r.get('quantity',0),errors='coerce')>0),
    ('VENUE_VALID',     'venue',            'MEDIUM',   lambda r: r.get('venue') in VALID_VENUES),
    ('CPTY_LEI',        'counterparty_lei', 'CRITICAL', lambda r: len(str(r.get('counterparty_lei','')))==20),
    ('CURRENCY_ISO',    'currency',         'MEDIUM',   lambda r: str(r.get('currency','')).upper() in VALID_CCY),
]

errors=[]
for _, row in df.iterrows():
    for name, field, sev, check in RULES:
        if not check(row):
            errors.append({'txn': row.get('transaction_id'), 'rule': name, 'severity': sev, 'field': field})

total = len(df); fields_checked = total * len(df.columns)
print(f'Trades validated:    {total}')
print(f'Fields checked:      {fields_checked}')
print(f'Errors found:        {len(errors)}  ({len(errors)/total*100:.1f}%)')
print(f'Sampling:            NONE — 100% tested')
print()
print('Top errors:')
for e in errors[:5]:
    print(f"  {e['txn']}  {e['rule']:<20}  {e['severity']}")`,ej=`# Real-Time Reconciliation — internal trades vs regulator acknowledgements
import pandas as pd

# Mock data mirroring /sample-data/internal_trades.csv + regulator_acks.csv
# (20 trades, 17 reports → 3 missing; 2 field mismatches injected)
trades = [{'transaction_id': f'TRX-{i:08d}', 'isin':'GB0002374006', 'price': 100.0+i*0.01,
           'quantity': 100+i, 'venue':'XLON', 'counterparty_lei':'213800LBPT1H9WO9ZL78'}
          for i in range(1, 21)]
reports = [{'report_id': f'TRX-{i:08d}', **{k:v for k,v in t.items() if k!='transaction_id'}}
           for i, t in enumerate(trades, start=1) if i not in (5, 12, 18)]
# Inject 2 mismatches
reports[3] = {**reports[3], 'price': 999.99}
reports[10] = {**reports[10], 'venue': 'INVALID'}

trade_map  = {t['transaction_id']: t for t in trades}
report_map = {r['report_id']: r for r in reports}

missing    = [tid for tid in trade_map  if tid not in report_map]
extra      = [rid for rid in report_map if rid not in trade_map]
mismatches = []
for tid in trade_map:
    if tid in report_map:
        for f in ('price','quantity','venue','isin','counterparty_lei'):
            if trade_map[tid].get(f) != report_map[tid].get(f):
                mismatches.append({'txn': tid, 'field': f, 'internal': trade_map[tid].get(f), 'reported': report_map[tid].get(f)})

print(f'Internal trades:    {len(trades)}')
print(f'Regulator reports:  {len(reports)}')
print(f'Missing reports:    {len(missing)}  (CRITICAL)')
print(f'Extra reports:      {len(extra)}    (HIGH)')
print(f'Field mismatches:   {len(mismatches)}  (MEDIUM)')
print()
print('BREAK LIST:')
for tid in missing:
    print(f"  [CRITICAL] {tid}  Trade not reported to regulator")
for rid in extra:
    print(f"  [HIGH]     {rid}  Report without matching trade")
for m in mismatches:
    print(f"  [MEDIUM]   {m['txn']}  {m['field']}: internal={m['internal']} reported={m['reported']}")`,ek=`# Cross-Regime Fan-Out — one trade, three regulatory reports
# Different fields, different deadlines, one conformed fact.

trade = {
    'trade_id': 'TRX-00000001', 'type': 'SECURITIES_LOAN',
    'isin': 'US0378331005', 'quantity': 10000, 'price': 178.45, 'currency': 'USD',
    'counterparty_lei': '549300JSX0Z4CY0V0P21',
    'execution_timestamp': '2026-10-07T10:30:00Z',
    'maturity_date': '2026-10-14', 'collateral_value': 1784500.00, 'repo_rate': 0.0025,
}

REGIMES = {
    'MiFIR': {'deadline':'T+1', 'count':65,
              'fields':['trade_id','isin','quantity','price','currency','counterparty_lei','execution_timestamp','venue']},
    'EMIR':  {'deadline':'T+1', 'count':60,
              'fields':['trade_id','uti','isin','notional','currency','counterparty_lei','clearing_status','product_type']},
    'SFTR':  {'deadline':'T+1', 'count':153,
              'fields':['trade_id','uti','sft_type','isin','quantity','counterparty_lei','maturity_date','collateral_value','repo_rate']},
}

print('SOURCE TRADE:')
for k,v in trade.items():
    print(f'  {k:<22} {v}')
print()
print('FAN-OUT — one trade, three regime reports:')
print(f"{'Regime':<8} {'Fields':>7}  {'Deadline':<10} {'Sample fields required'}")
print('-'*78)
for regime, spec in REGIMES.items():
    print(f"{regime:<8} {spec['count']:>5}   {spec['deadline']:<10} {', '.join(spec['fields'][:6])}...")

shared = set(REGIMES['MiFIR']['fields']) & set(REGIMES['EMIR']['fields']) & set(REGIMES['SFTR']['fields'])
print()
print('CONFORMED DIMENSION WIN:')
print(f'  Fields shared across all 3 regimes: {len(shared)}')
print(f'  -> Modelled once in dim_instrument / dim_counterparty, reused 3x')
print(f'  -> One fact_trade row fans out to 3 fact_regulatory_check rows')
print(f'  Shared: {sorted(shared)}')`,ew=`# Remediation Workflow — error to ticket to SLA (replaces monthly PDF report)
import pandas as pd
import random
random.seed(42)
from datetime import datetime, timedelta

REGIMES = ['MiFIR','EMIR','SFTR']
RULES = {'MiFIR':['ISIN_FORMAT','PRICE_POSITIVE','CPTY_LEI'],
         'EMIR':['UTI_FORMAT','NOTIONAL_POSITIVE','CPTY_LEI'],
         'SFTR':['UTI_FORMAT','SFT_TYPE','CPTY_LEI','COLLATERAL_VALUE']}
SEV = ['CRITICAL','HIGH','MEDIUM']
now = datetime.now()
rows = []
for i in range(50):
    sev = random.choices(SEV, weights=[3,4,3])[0]
    regime = random.choice(REGIMES)
    detected = now - timedelta(hours=random.randint(2,72))
    sla = detected + timedelta(hours=24 if sev=='CRITICAL' else 48 if sev=='HIGH' else 72)
    status = random.choices(['OPEN','IN_PROGRESS','RESOLVED','LATE'], weights=[15,14,12,9])[0]
    if sla < now and status != 'RESOLVED':
        status = 'LATE'
    rows.append({'error_id':f'ERR-{i+1:04d}','regime':regime,'rule':random.choice(RULES[regime]),
                 'severity':sev,'status':status,'sla_due':sla})

df = pd.DataFrame(rows)
print(f'Total errors: {len(df)}')
print(f"  LATE (overdue, red):     {(df['status']=='LATE').sum()}")
print(f"  OPEN / IN_PROGRESS:      {df['status'].isin(['OPEN','IN_PROGRESS']).sum()}")
print(f"  RESOLVED (green):        {(df['status']=='RESOLVED').sum()}")
print()
print('By regime x status:')
print(df.groupby(['regime','status']).size().unstack(fill_value=0))
print()
print('REMEDIATION SLA (replaces monthly PDF):')
for s, h in [('CRITICAL',24),('HIGH',48),('MEDIUM',72)]:
    late = ((df['severity']==s) & (df['status']=='LATE')).sum()
    print(f'  {s:<10} SLA {h}h  |  currently LATE: {late}')`,eL=[{id:"fold-validation",value:"fold-validation",journey:"Practitioner · PoV",icon:y.ShieldCheck,title:"100% Field Validation (no sampling)",summary:"Validate every field of every trade against MiFIR RTS 22 rules. No sampling — every transaction × every field.",py:eS,templateName:"generate_trades.py",stats:[{label:"Trades validated",value:"1,000"},{label:"Fields checked",value:"~7,000"},{label:"Errors found",value:"~9"},{label:"Sampling",value:"NONE"}]},{id:"fold-reconciliation",value:"fold-reconciliation",journey:"Practitioner · PoV",icon:v.GitCompare,title:"Real-Time Reconciliation (internal vs. submitted)",summary:"Reconcile internal trade records against regulator acknowledgements. Flag missing, extra, and mismatched reports in seconds, not months.",py:ej,templateName:"reconciliation.py",stats:[{label:"Internal trades",value:"1,000"},{label:"Regulator acks",value:"980"},{label:"Missing reports",value:"20 (CRITICAL)"},{label:"Mismatches",value:"~33 (MEDIUM)"}]},{id:"fold-fanout",value:"fold-fanout",journey:"Architect · Scoping",icon:E,title:"Cross-Regime Fan-Out (one trade → N reports)",summary:"Show how a single securities-lending trade fans out to MiFIR, EMIR and SFTR — different fields, different deadlines, one conformed fact.",py:ek,templateName:"regulatory_warehouse.sql",stats:[{label:"Source trade",value:"1"},{label:"Regime reports",value:"3"},{label:"MiFIR fields",value:"65"},{label:"Conformed shared",value:"5+"}]},{id:"fold-remediation",value:"fold-remediation",journey:"Executive · Demo",icon:I.CalendarClock,title:"Remediation Workflow (error → ticket → SLA)",summary:"Watch errors move OPEN → IN_PROGRESS → RESOLVED, with SLA clock and overdue flag. This is the live dashboard that replaces the monthly PDF.",py:ew,templateName:"regulatory_warehouse.sql (fact_regulatory_error DDL)",stats:[{label:"Errors tracked",value:"50"},{label:"LATE (red)",value:"~22"},{label:"Due today",value:"~4"},{label:"Resolved",value:"~12"}]}],eM={"Practitioner · PoV":"border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300","Architect · Scoping":"border-blue-500/40 bg-blue-500/10 text-blue-700 dark:text-blue-300","Executive · Demo":"border-purple-500/40 bg-purple-500/10 text-purple-700 dark:text-purple-300"};function eD(){return(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(x.Play,{className:"mr-2 inline h-6 w-6 text-emerald-600 dark:text-emerald-400","aria-hidden":"true"}),"Run it yourself — interactive regulatory notebooks"]}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:["4 folded notebooks. Each opens in the in-browser JupyterLite REPL (Pyodide, no install, no server). Click a fold to preview the code and expected output, then ",(0,t.jsx)("strong",{className:"text-foreground",children:"Open in JupyterLite"})," to run it on synthetic trade data. Deep-links reuse the existing REPL on the ",(0,t.jsx)(a.default,{href:"/notebooks",className:"text-emerald-600 hover:underline",children:"/notebooks"})," page — no second runtime loaded."]})]}),(0,t.jsx)(p.Card,{className:"overflow-hidden",children:(0,t.jsx)(eN,{type:"single",collapsible:!0,defaultValue:"fold-validation",className:"w-full",children:eL.map(e=>{var r;let a=e.icon;return(0,t.jsxs)(eA,{value:e.value,className:"px-4",children:[(0,t.jsx)(eb,{className:"hover:no-underline",children:(0,t.jsxs)("div",{className:"flex w-full flex-col gap-2 pr-4 text-left sm:flex-row sm:items-center sm:gap-4",children:[(0,t.jsx)("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",children:(0,t.jsx)(a,{className:"h-4.5 w-4.5","aria-hidden":"true"})}),(0,t.jsxs)("div",{className:"flex-1 space-y-1",children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,t.jsx)("span",{className:"text-sm font-semibold text-foreground",children:e.title}),(0,t.jsx)(u.Badge,{variant:"outline",className:`text-[9px] ${eM[e.journey]}`,children:e.journey})]}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:e.summary})]})]})}),(0,t.jsx)(eT,{children:(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:e.stats.map(e=>(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/20 px-3 py-2",children:[(0,t.jsx)("div",{className:"text-[10px] uppercase tracking-wide text-muted-foreground",children:e.label}),(0,t.jsx)("div",{className:"text-sm font-semibold text-foreground",children:e.value})]},e.label))}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"mb-1 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground",children:[(0,t.jsx)(R.FileCode,{className:"h-3 w-3","aria-hidden":"true"}),"Python source (preview — runnable in JupyterLite)"]}),(0,t.jsx)("pre",{className:"max-h-72 overflow-auto rounded-md border border-border/60 bg-background p-3 text-[10px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:e.py})})]}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,t.jsx)(eC.Button,{asChild:!0,size:"sm",className:"h-8 gap-1.5 text-xs",children:(0,t.jsxs)("a",{href:(r=e.py,`https://jupyterlite.github.io/demo/repl/index.html?kernel=python&code=${encodeURIComponent(r)}`),target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(x.Play,{className:"h-3.5 w-3.5","aria-hidden":"true"}),"Open in JupyterLite",(0,t.jsx)(_.ExternalLink,{className:"h-3 w-3 opacity-60","aria-hidden":"true"})]})}),(0,t.jsxs)("span",{className:"inline-flex items-center gap-1.5 rounded-md border border-dashed border-border/60 px-2.5 py-1.5 text-[11px] text-muted-foreground",title:"Source templates are IP-protected and live in the private repo only",children:[(0,t.jsx)(N.Lock,{className:"h-3 w-3","aria-hidden":"true"}),"Template: ",(0,t.jsx)("code",{className:"font-mono text-[10px]",children:e.templateName}),(0,t.jsx)("span",{className:"text-[9px] uppercase tracking-wide",children:"(private repo)"})]})]})]})})]},e.id)})})}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground",children:[(0,t.jsx)("span",{className:"font-medium uppercase tracking-wide",children:"Buyer journey:"}),(0,t.jsx)(u.Badge,{variant:"outline",className:`text-[9px] ${eM["Architect · Scoping"]}`,children:"Architect · Scoping"}),(0,t.jsx)("span",{children:"= Cross-Regime Fan-Out (Fold 3)"}),(0,t.jsx)(u.Badge,{variant:"outline",className:`text-[9px] ${eM["Practitioner · PoV"]}`,children:"Practitioner · PoV"}),(0,t.jsx)("span",{children:"= Validation + Reconciliation (Folds 1–2)"}),(0,t.jsx)(u.Badge,{variant:"outline",className:`text-[9px] ${eM["Executive · Demo"]}`,children:"Executive · Demo"}),(0,t.jsx)("span",{children:"= Remediation Workflow (Fold 4)"})]})]})}var eP=e.i(69709),eF=e.i(68633);let eO=[{name:"MiFIR / MiFID II",region:"EU/UK",desc:"Markets in Financial Instruments Regulation — transaction reporting to ESMA/FCA. 65 fields per trade. T+1 deadline.",fields:65,deadline:"T+1"},{name:"EMIR",region:"EU/UK",desc:"European Market Infrastructure Regulation — derivative trade reporting to TRs. 60+ fields per trade. T+1 deadline.",fields:60,deadline:"T+1"},{name:"Dodd-Frank / CFTC Part 45",region:"USA",desc:"Swap dealer reporting to SDRs. 100+ fields. Real-time reporting for cleared swaps.",fields:100,deadline:"Real-time"},{name:"SFTR",region:"EU",desc:"Securities Financing Transactions Regulation — repo and securities lending reporting. 153 fields per SFT.",fields:153,deadline:"T+1"},{name:"CAT (Consolidated Audit Trail)",region:"USA",desc:"SEC Consolidated Audit Trail — order, route, execution, and cancellation reporting for all US equity/options.",fields:50,deadline:"T+0 (real-time)"},{name:"ASIC DER",region:"Australia",desc:"Derivative transaction reporting to ASIC. 50+ fields. T+1 deadline.",fields:50,deadline:"T+1"},{name:"MAS TRR",region:"Singapore",desc:"Monetary Authority of Singapore — derivative reporting. 40+ fields. T+2 deadline.",fields:40,deadline:"T+2"},{name:"HKMA / SFC",region:"Hong Kong",desc:"Hong Kong Monetary Authority — securities and derivative reporting. 45+ fields.",fields:45,deadline:"T+2"}],eH=[{pattern:"100% Transaction Testing",desc:"Every transaction is validated against all regulatory field rules — not a sample. Sample-based reviews miss 2-5% of errors; 100% testing catches them all.",code:`# Python: Validate 100% of transactions against MiFIR rules
import pandas as pd

def validate_all_transactions(df: pd.DataFrame, rules: list) -> dict:
    """Validate every transaction against every rule. No sampling."""
    results = {
        'total_transactions': len(df),
        'total_fields_checked': len(df) * len(df.columns),
        'errors': [],
        'error_rate': 0.0
    }

    for idx, row in df.iterrows():
        for rule in rules:
            if not rule['check'](row):
                results['errors'].append({
                    'transaction_id': row.get('transaction_id'),
                    'rule': rule['name'],
                    'field': rule['field'],
                    'value': row.get(rule['field']),
                    'severity': rule['severity'],
                    'remediation': rule['remediation']
                })

    results['error_rate'] = len(results['errors']) / max(results['total_transactions'], 1) * 100
    return results

# Define MiFIR field validation rules
MIFIR_RULES = [
    {'name': 'ISIN_FORMAT', 'field': 'isin', 'severity': 'CRITICAL',
     'check': lambda r: len(str(r.get('isin', ''))) == 12,
     'remediation': 'ISIN must be 12 characters. Check source system.'},
    {'name': 'PRICE_POSITIVE', 'field': 'price', 'severity': 'HIGH',
     'check': lambda r: float(r.get('price', 0)) > 0,
     'remediation': 'Price must be positive. Check trade capture.'},
    {'name': 'QUANTITY_POSITIVE', 'field': 'quantity', 'severity': 'HIGH',
     'check': lambda r: float(r.get('quantity', 0)) > 0,
     'remediation': 'Quantity must be positive.'},
    {'name': 'TRADING_VENUE_VALID', 'field': 'venue', 'severity': 'MEDIUM',
     'check': lambda r: r.get('venue') in VALID_VENUES,
     'remediation': 'Trading venue not in ESMA approved list.'},
    {'name': 'COUNTERPARTY_LEI', 'field': 'counterparty_lei', 'severity': 'CRITICAL',
     'check': lambda r: len(str(r.get('counterparty_lei', ''))) == 20,
     'remediation': 'LEI must be 20 characters. Register with GLEIF.'},
    {'name': 'TIMESTAMP_FORMAT', 'field': 'execution_timestamp', 'severity': 'HIGH',
     'check': lambda r: bool(pd.to_datetime(r.get('execution_timestamp'), errors='coerce')),
     'remediation': 'Timestamp must be ISO 8601 format.'},
    {'name': 'CURRENCY_ISO', 'field': 'currency', 'severity': 'MEDIUM',
     'check': lambda r: str(r.get('currency', '')).upper() in VALID_CURRENCIES,
     'remediation': 'Currency must be ISO 4217 code (e.g. GBP, USD, EUR).'},
]

# Run 100% validation (no sampling)
results = validate_all_transactions(trades_df, MIFIR_RULES)
print(f"Validated {results['total_transactions']:,} transactions")
print(f"Checked {results['total_fields_checked']:,} fields")
print(f"Found {len(results['errors'])} errors ({results['error_rate']:.2f}%)")`,lang:"Python"},{pattern:"Real-Time Reconciliation",desc:"Reconcile internal trade records against the regulatory report submission in real-time. Discrepancies are flagged within seconds, not months.",code:`# Python: Real-time reconciliation between internal trades and submitted reports
from datetime import datetime

def reconcile_trades_vs_reports(trades: list, reports: list) -> dict:
    """Reconcile internal trade records against regulatory submissions.
    Identifies: missing reports, extra reports, field mismatches.
    """
    trade_map = {t['internal_trade_id']: t for t in trades}
    report_map = {r['report_id']: r for r in reports}

    missing_reports = []  # trades with no corresponding report
    extra_reports = []    # reports with no corresponding trade
    field_mismatches = [] # both exist but fields differ

    for trade_id, trade in trade_map.items():
        if trade_id not in report_map:
            missing_reports.append({
                'trade_id': trade_id,
                'severity': 'CRITICAL',
                'message': 'Trade not reported to regulator',
                'trade': trade
            })
        else:
            report = report_map[trade_id]
            # Compare key fields
            for field in ['isin', 'quantity', 'price', 'currency', 'venue']:
                if trade.get(field) != report.get(field):
                    field_mismatches.append({
                        'trade_id': trade_id,
                        'field': field,
                        'internal_value': trade.get(field),
                        'reported_value': report.get(field),
                        'severity': 'HIGH',
                        'message': f'Field mismatch: {field} differs'
                    })

    for report_id in report_map:
        if report_id not in trade_map:
            extra_reports.append({
                'report_id': report_id,
                'severity': 'MEDIUM',
                'message': 'Report exists but no internal trade found'
            })

    return {
        'reconciliation_time': datetime.now().isoformat(),
        'total_trades': len(trades),
        'total_reports': len(reports),
        'missing_reports': missing_reports,
        'extra_reports': extra_reports,
        'field_mismatches': field_mismatches,
        'total_breaks': len(missing_reports) + len(extra_reports) + len(field_mismatches),
        'reconciliation_rate': 1 - (len(missing_reports) + len(field_mismatches)) / max(len(trades), 1)
    }

# Real-time reconciliation (run every 5 minutes)
result = reconcile_trades_vs_reports(internal_trades, submitted_reports)
if result['total_breaks'] > 0:
    alert_operations_team(result)`,lang:"Python"},{pattern:"Live Actionable Insights (not PDF reports)",desc:"Replace static PDF reports delivered months after the event with live dashboards showing error rates, remediation status, and risk exposure in real-time.",code:`# SQL: Live regulatory reporting dashboard (runs every 5 minutes)

-- 1. Error rate by regime (real-time)
SELECT
    regulatory_regime,
    COUNT(*) AS total_transactions,
    SUM(CASE WHEN validation_status = 'ERROR' THEN 1 ELSE 0 END) AS errors,
    ROUND(AVG(CASE WHEN validation_status = 'ERROR' THEN 1.0 ELSE 0 END) * 100, 2) AS error_rate_pct,
    MAX(checked_at) AS last_checked
FROM fact_regulatory_check
WHERE checked_at >= NOW() - INTERVAL '1 hour'
GROUP BY regulatory_regime
ORDER BY error_rate_pct DESC;

-- 2. Top 10 error types (live, not historical)
SELECT
    error_type,
    COUNT(*) AS occurrence_count,
    COUNT(DISTINCT transaction_id) AS affected_transactions,
    severity,
    STRING_AGG(DISTINCT remediation_action, '; ') AS recommended_actions
FROM fact_regulatory_error
WHERE detected_at >= NOW() - INTERVAL '1 hour'
GROUP BY error_type, severity
ORDER BY occurrence_count DESC
LIMIT 10;

-- 3. Remediation status (are errors being fixed?)
SELECT
    CASE
        WHEN remediated_at IS NULL THEN 'OPEN'
        WHEN remediated_at <= due_at THEN 'ON_TIME'
        ELSE 'LATE'
    END AS remediation_status,
    COUNT(*) AS count,
    AVG(EXTRACT(EPOCH FROM (COALESCE(remediated_at, NOW()) - detected_at))/3600) AS avg_hours_to_remediate
FROM fact_regulatory_error
WHERE detected_at >= NOW() - INTERVAL '24 hours'
GROUP BY remediation_status;`,lang:"SQL"},{pattern:"Cross-Regime Field Mapping",desc:"Map one trade to multiple regulatory regimes. A single derivatives trade might need MiFIR + EMIR + SFTR + Dodd-Frank reports — each with different field requirements.",code:`# Python: Cross-regime field mapping
# One trade → multiple regulatory reports, each with different fields

REGIME_MAPPINGS = {
    'MiFIR': {
        'transaction_id': 'TransactionIdentification',
        'isin': 'InstrumentIdentification',
        'quantity': 'Quantity',
        'price': 'Price',
        'currency': 'Currency',
        'venue': 'TradingVenue',
        'execution_timestamp': 'ExecutionTimeStamp',
        'counterparty_lei': 'Counterparty1',
        'trading_capacity': 'TradingCapacity',
        'side': 'BuySellIndicator',
    },
    'EMIR': {
        'trade_id': 'TradeId',
        'uti': 'UniqueTradeIdentifier',
        'isin': 'InstrumentId',
        'notional': 'NotionalAmount',
        'currency': 'Currency',
        'trade_date': 'TradeDate',
        'counterparty1_lei': 'Counterparty1',
        'counterparty2_lei': 'Counterparty2',
        'clearing_status': 'ClearingStatus',
        'product_type': 'ProductType',
    },
    'Dodd_Frank': {
        'trade_id': 'OriginalSwapIdentifier',
        'udi': 'UniqueSwapIdentifier',
        'product_id': 'ProductId',
        'notional': 'NotionalAmount',
        'currency': 'Currency',
        'execution_time': 'ExecutionTimestamp',
        'counterparty1_lei': 'Counterparty1',
        'counterparty2_lei': 'Counterparty2',
        'action': 'Action',
        'product_type': 'ProductType',
    },
}

def generate_regulatory_reports(trade: dict) -> dict:
    """Generate reports for all applicable regimes from one trade."""
    reports = {}

    for regime, field_map in REGIME_MAPPINGS.items():
        report = {}
        for internal_field, regulatory_field in field_map.items():
            report[regulatory_field] = trade.get(internal_field)

        # Add regime-specific required fields
        if regime == 'MiFIR':
            report['ReportingEntity'] = trade.get('reporting_entity_lei')
            report['SubmissionTimestamp'] = datetime.now().isoformat()
        elif regime == 'EMIR':
            report['ReportingEntity'] = trade.get('reporting_entity_lei')
            report['Action'] = 'NEWT'  # new trade
        elif regime == 'Dodd_Frank':
            report['Submitter'] = trade.get('reporting_entity_lei')
            report['Action'] = 'C'  # create

        reports[regime] = report

    return reports`,lang:"Python"}],eV=`-- Financial regulatory reporting dimensional model
-- Supports En-ACT-style 100% transaction testing + real-time reconciliation

-- Dimension: regulatory regime (MiFIR, EMIR, Dodd-Frank, SFTR, CAT, etc.)
CREATE TABLE dim_regulatory_regime (
    regime_key          INT PRIMARY KEY,
    regime_name         VARCHAR(50),     -- MiFIR, EMIR, Dodd_Frank, SFTR, CAT
    region              VARCHAR(10),     -- EU, UK, USA, AU, SG, HK
    field_count         INT,             -- number of required fields
    deadline            VARCHAR(20),     -- T+0, T+1, T+2
    regulator           VARCHAR(50),     -- ESMA, FCA, CFTC, SEC, ASIC, MAS
    is_active           BOOLEAN
);

-- Dimension: validation rule (each field check)
CREATE TABLE dim_validation_rule (
    rule_key            INT PRIMARY KEY,
    rule_name           VARCHAR(50),     -- ISIN_FORMAT, PRICE_POSITIVE, LEI_LENGTH
    rule_description    VARCHAR(500),
    field_name          VARCHAR(50),     -- which field this rule checks
    severity            VARCHAR(20),     -- CRITICAL, HIGH, MEDIUM, LOW
    remediation_action  VARCHAR(500),    -- what to do when this rule fails
    regime_key          INT REFERENCES dim_regulatory_regime,
    is_active           BOOLEAN
);

-- Dimension: instrument (financial product)
CREATE TABLE dim_instrument (
    instrument_key      INT PRIMARY KEY,
    isin                VARCHAR(12),     -- International Securities Identification Number
    instrument_name     VARCHAR(200),
    instrument_type     VARCHAR(30),     -- equity, bond, derivative, repo, swap
    cfi_code            VARCHAR(6),      -- ISO 10962 Classification of Financial Instruments
    currency            VARCHAR(3),
    issuer_lei          VARCHAR(20),
    maturity_date       DATE
);

-- Dimension: counterparty (legal entity)
CREATE TABLE dim_counterparty (
    counterparty_key    INT PRIMARY KEY,
    lei                 VARCHAR(20),     -- Legal Entity Identifier (20 chars)
    counterparty_name   VARCHAR(200),
    entity_type         VARCHAR(20),     -- bank, fund, corporate, individual
    country             VARCHAR(3),
    is_approved         BOOLEAN          -- approved by compliance?
);

-- Dimension: trading venue
CREATE TABLE dim_trading_venue (
    venue_key           INT PRIMARY KEY,
    venue_code          VARCHAR(20),     -- MIC code (e.g. XLON, XNAS)
    venue_name          VARCHAR(200),
    venue_type          VARCHAR(20),     -- regulated, MTF, OTF, systematic internaliser
    country             VARCHAR(3),
    is_esma_approved    BOOLEAN
);

-- Fact: regulatory check (one row per transaction \xd7 rule checked)
-- This is the 100% testing table — every transaction, every field
CREATE TABLE fact_regulatory_check (
    check_key           BIGINT PRIMARY KEY,
    transaction_id      VARCHAR(50),     -- internal trade ID
    regime_key          INT REFERENCES dim_regulatory_regime,
    rule_key            INT REFERENCES dim_validation_rule,
    instrument_key      INT REFERENCES dim_instrument,
    counterparty_key    INT REFERENCES dim_counterparty,
    venue_key           INT REFERENCES dim_trading_venue,
    date_key            INT,             -- dim_date
    checked_at          TIMESTAMP,
    validation_status   VARCHAR(20),     -- PASS, FAIL, WARNING
    field_value         VARCHAR(500),    -- the actual value checked
    expected_format     VARCHAR(200),    -- what was expected
    is_remediated       BOOLEAN,
    remediated_at       TIMESTAMP,
    remediated_by       VARCHAR(50)
) PARTITIONED BY (date_key INT);

-- Fact: regulatory error (subset of checks that failed)
CREATE TABLE fact_regulatory_error (
    error_key           BIGINT PRIMARY KEY,
    transaction_id      VARCHAR(50),
    regime_key          INT,
    rule_key            INT,
    error_type          VARCHAR(50),
    severity            VARCHAR(20),
    detected_at         TIMESTAMP,
    remediated_at       TIMESTAMP,
    due_at              TIMESTAMP,       -- regulatory deadline for fix
    remediation_action  VARCHAR(500),
    remediation_status  VARCHAR(20)      -- OPEN, IN_PROGRESS, RESOLVED, LATE
);

-- Fact: reconciliation break (trade vs report mismatch)
CREATE TABLE fact_reconciliation_break (
    break_key           BIGINT PRIMARY KEY,
    transaction_id      VARCHAR(50),
    regime_key          INT,
    break_type          VARCHAR(30),     -- MISSING_REPORT, EXTRA_REPORT, FIELD_MISMATCH
    mismatch_field      VARCHAR(50),
    internal_value      VARCHAR(500),
    reported_value      VARCHAR(500),
    detected_at         TIMESTAMP,
    resolved_at         TIMESTAMP,
    severity            VARCHAR(20)
);`,eU=[{id:"mifir_equity",name:"MiFIR Equity Trade Reporting (UK)",desc:"1,000 synthetic equity trades with 65 MiFIR fields. Includes intentional errors (bad ISINs, missing LEIs, wrong venues). Tests 100% validation + reconciliation.",dataset:"Synthetic — generated by pipeline-service",skills:["Python","SQL","MiFIR","pandas"]},{id:"emir_deriv",name:"EMIR Derivative Trade Reporting (EU)",desc:"500 synthetic derivative trades (IRS, CDS, equity options) with 60 EMIR fields. Tests UTI generation, counterparty LEI validation, notional calculation.",dataset:"Synthetic — generated by pipeline-service",skills:["Python","SQL","EMIR","UTI"]},{id:"dodd_frank",name:"Dodd-Frank Swap Reporting (US)",desc:"300 synthetic swap trades with 100+ CFTC Part 45 fields. Tests USI generation, product classification, real-time reporting simulation.",dataset:"Synthetic — generated by pipeline-service",skills:["Python","SQL","Dodd-Frank","CFTC"]},{id:"multi_regime",name:"Cross-Regime Mapping (1 trade → 3 reports)",desc:"100 trades that must be reported to MiFIR + EMIR + SFTR simultaneously. Tests cross-regime field mapping, different deadlines, different field sets.",dataset:"Synthetic — generated by pipeline-service",skills:["Python","SQL","Multi-regime","Mapping"]},{id:"recon",name:"Reconciliation Break Detection",desc:"500 trades + 490 submitted reports (10 missing) + 15 field mismatches. Tests real-time reconciliation, break detection, remediation tracking.",dataset:"Synthetic — generated by pipeline-service",skills:["Python","SQL","Reconciliation","Breaks"]}],eB=[{area:"Strategy & Operations",desc:"Regulatory strategy, operating model design, target state architecture, vendor selection, change management."},{area:"Data & AI",desc:"Data lineage, data quality, entity resolution, AI-powered validation, ML for anomaly detection in trade data."},{area:"Risk & Resilience",desc:"Operational risk, model risk, stress testing, BCBS 239 compliance, resilience testing."},{area:"Compliance",desc:"Regulatory horizon scanning, rule book interpretation, compliance monitoring, regulatory reporting assurance."},{area:"Transaction Reporting",desc:"100% transaction testing, real-time reconciliation, error remediation, regulatory submission oversight."},{area:"ESG",desc:"ESG data collection, SFDR reporting, TCFD alignment, carbon footprint tracking, greenwashing detection."}];function eG(){let[e,x]=r.useState(eU[0]);return(0,t.jsxs)(h.ViewShell,{eyebrow:"Financial Services",title:"Regulatory transaction reporting & reconciliation",description:"Deliver practical solutions to the most complex regulatory, data and operational challenges in financial services. Real-time, independent oversight of transaction reporting across all global regulatory regimes. 100% transaction testing, 100% field testing — replacing sample-based reviews and static PDF reports with live, actionable insights. En-ACT-style assurance platform, scalable to 45+ firms worldwide.",children:[(0,t.jsxs)(p.Card,{className:"border-rose-500/30 bg-rose-500/5",children:[(0,t.jsx)(p.CardHeader,{children:(0,t.jsxs)(p.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(s.Lightbulb,{className:"h-4.5 w-4.5 text-rose-600 dark:text-rose-400"}),"The regulatory reporting problem"]})}),(0,t.jsx)(p.CardContent,{className:"space-y-2 text-sm leading-relaxed text-muted-foreground",children:(0,t.jsxs)("p",{children:["A major bank processes 50,000 trades per day across 5 regulatory regimes (MiFIR, EMIR, SFTR, Dodd-Frank, CAT). Each trade has 50-150 mandatory fields per regime. That is",(0,t.jsx)("strong",{className:"text-foreground",children:" 5-15 million field checks per day"}),". Sample-based reviews (checking 5% of trades) miss 95% of errors. Static PDF reports arrive 2 months after the reporting period — by then, the regulator has already found the errors and fined the firm. The answer: ",(0,t.jsx)("strong",{className:"text-foreground",children:"100% real-time testing"})," ","with live dashboards and automated remediation tracking."]})})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(i.Shield,{className:"mr-2 inline h-6 w-6 text-rose-600"}),"Global regulatory regimes covered"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"8 regimes, 463+ fields, real-time to T+2 deadlines."})]}),(0,t.jsx)(p.Card,{children:(0,t.jsx)(p.CardContent,{className:"p-0",children:(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-sm",children:[(0,t.jsx)("thead",{className:"border-b border-border/60 bg-muted/30",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"p-3 text-left",children:"Regime"}),(0,t.jsx)("th",{className:"p-3 text-left",children:"Region"}),(0,t.jsx)("th",{className:"p-3 text-left",children:"Fields"}),(0,t.jsx)("th",{className:"p-3 text-left",children:"Deadline"}),(0,t.jsx)("th",{className:"p-3 text-left",children:"Description"})]})}),(0,t.jsx)("tbody",{children:eO.map(e=>(0,t.jsxs)("tr",{className:"border-b border-border/40",children:[(0,t.jsx)("td",{className:"p-3 font-medium",children:e.name}),(0,t.jsx)("td",{className:"p-3",children:(0,t.jsx)(u.Badge,{variant:"outline",className:"text-[9px]",children:e.region})}),(0,t.jsx)("td",{className:"p-3",children:(0,t.jsx)(u.Badge,{variant:"secondary",className:"text-[9px]",children:e.fields})}),(0,t.jsx)("td",{className:"p-3",children:(0,t.jsx)(u.Badge,{variant:"Real-time"===e.deadline||"T+0 (real-time)"===e.deadline?"destructive":"outline",className:"text-[9px]",children:e.deadline})}),(0,t.jsx)("td",{className:"p-3 text-xs text-muted-foreground",children:e.desc})]},e.name))})]})})})})]}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-2 text-xs text-muted-foreground",children:[(0,t.jsx)(eP.SamplingDemoButton,{}),(0,t.jsx)(eF.CrossRegimeFanOutDemoButton,{})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(d.Activity,{className:"mr-2 inline h-6 w-6 text-emerald-600"}),"Real-time assurance patterns (En-ACT-style)"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"4 patterns with production-ready Python and SQL code."})]}),(0,t.jsx)("div",{className:"space-y-4",children:eH.map(e=>(0,t.jsxs)(p.Card,{children:[(0,t.jsxs)(p.CardHeader,{children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)(p.CardTitle,{className:"text-sm",children:e.pattern}),(0,t.jsx)(u.Badge,{variant:"outline",className:"text-[9px]",children:e.lang})]}),(0,t.jsx)(p.CardDescription,{className:"text-xs",children:e.desc})]}),(0,t.jsx)(p.CardContent,{children:(0,t.jsx)("pre",{className:"max-h-64 overflow-auto rounded-md border border-border/60 bg-background p-3 text-[9px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:e.code})})})]},e.pattern))})]}),(0,t.jsx)(eD,{}),(0,t.jsxs)(p.Card,{children:[(0,t.jsxs)(p.CardHeader,{children:[(0,t.jsxs)(p.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(n.Database,{className:"h-5 w-5 text-rose-600"}),"Dimensional model for regulatory reporting (SQL DDL)"]}),(0,t.jsx)(p.CardDescription,{className:"text-xs",children:"6 tables: dim_regulatory_regime, dim_validation_rule, dim_instrument, dim_counterparty, dim_trading_venue, fact_regulatory_check (partitioned). Plus fact_regulatory_error and fact_reconciliation_break."})]}),(0,t.jsx)(p.CardContent,{children:(0,t.jsx)("pre",{className:"max-h-96 overflow-auto rounded-md border border-border/60 bg-background p-4 text-[10px] leading-relaxed",children:(0,t.jsx)("code",{className:"font-mono text-muted-foreground",children:eV})})})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(l.TrendingUp,{className:"mr-2 inline h-6 w-6 text-emerald-600"}),"Hypothetical scenario datasets"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"5 scenarios with synthetic datasets. Select one to see the implementation path. Templates are ready — just load the client's raw data."})]}),(0,t.jsx)(p.Card,{children:(0,t.jsxs)(p.CardContent,{className:"p-4 space-y-3",children:[(0,t.jsxs)(f.Select,{value:e.id,onValueChange:e=>x(eU.find(t=>t.id===e)),children:[(0,t.jsx)(f.SelectTrigger,{children:(0,t.jsx)(f.SelectValue,{})}),(0,t.jsx)(f.SelectContent,{children:eU.map(e=>(0,t.jsx)(f.SelectItem,{value:e.id,children:e.name},e.id))})]}),(0,t.jsxs)("div",{className:"rounded-lg border border-border/60 bg-muted/20 p-3 space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-sm font-medium",children:e.name}),e.skills.map(e=>(0,t.jsx)(u.Badge,{variant:"secondary",className:"text-[8px]",children:e},e))]}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:e.desc}),(0,t.jsxs)("p",{className:"text-xs",children:[(0,t.jsx)("span",{className:"font-medium",children:"Dataset:"})," ",e.dataset]}),(0,t.jsxs)("div",{className:"mt-2 rounded border border-emerald-500/20 bg-emerald-500/5 p-2 text-xs text-muted-foreground",children:[(0,t.jsx)("strong",{className:"text-foreground",children:"Ready to go:"})," The warehouse DDL, ETL pipeline, validation rules, and reconciliation code are in ",(0,t.jsx)("code",{className:"text-[10px]",children:"templates/"}),". When a client provides their trade data (CSV/XML/JSON), load it using ",(0,t.jsx)("code",{className:"text-[10px]",children:"templates/warehouse/etl_pipeline_python.py"})," with the regulatory validation rules configured for their applicable regimes."]})]})]})})]}),(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-foreground",children:[(0,t.jsx)(c.FileCheck,{className:"mr-2 inline h-6 w-6 text-purple-600"}),"Consulting services (embedded delivery model)"]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"6 service areas. We embed within client teams to deliver both insight and execution, taking ownership of outcomes."})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",children:eB.map(e=>(0,t.jsxs)(p.Card,{children:[(0,t.jsx)(p.CardHeader,{children:(0,t.jsx)(p.CardTitle,{className:"text-sm",children:e.area})}),(0,t.jsx)(p.CardContent,{children:(0,t.jsx)("p",{className:"text-xs leading-relaxed text-muted-foreground",children:e.desc})})]},e.area))})]}),(0,t.jsx)(p.Card,{className:"border-blue-500/30 bg-blue-500/5",children:(0,t.jsxs)(p.CardContent,{className:"flex items-start gap-3 p-4",children:[(0,t.jsx)(m.Bot,{className:"mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"space-y-1 text-xs text-muted-foreground",children:[(0,t.jsx)("p",{className:"font-semibold text-foreground",children:"Agent-queryable regulatory reporting"}),(0,t.jsxs)("p",{children:["The same agent-queryable data layer pattern applies here. A regulatory-compliance agent can query ",(0,t.jsx)("code",{className:"text-[10px]",children:"fact_regulatory_check"})," via a machine-readable data contract — “show me all trades with ISIN errors in the last 24 hours, with evidence” — and receive a governed, bias-checked, audited answer. The agent never writes SQL; it queries the contract. See the ",(0,t.jsx)(a.default,{href:"/fact-tables",className:"text-blue-600 hover:underline",children:"full pattern on /fact-tables"}),", including an interactive demo."]})]})]})}),(0,t.jsx)(g.DataUploadPanel,{title:"Upload trade data (CSV, XML, FIX, JSON)",description:"Drop a CSV with trade records (transaction_id, isin, quantity, price, venue, counterparty_lei, etc.) to run the full analytics pipeline. The three-agent model debate will propose a dimensional model for your trade data.",formatHint:"CSV (trade records), XML (FIXML/FpML), JSON (trade events)"}),(0,t.jsxs)(p.Card,{children:[(0,t.jsx)(p.CardHeader,{children:(0,t.jsxs)(p.CardTitle,{className:"flex items-center gap-2 text-base",children:[(0,t.jsx)(o.CheckCircle2,{className:"h-5 w-5 text-emerald-600"}),"Requirements coverage"]})}),(0,t.jsx)(p.CardContent,{className:"p-0",children:(0,t.jsxs)("table",{className:"w-full text-sm",children:[(0,t.jsx)("thead",{className:"border-b border-border/60 bg-muted/30",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"p-3 text-left",children:"Requirement"}),(0,t.jsx)("th",{className:"p-3 text-left",children:"Where it's covered"})]})}),(0,t.jsx)("tbody",{children:[["Complex regulatory challenges","8 regulatory regimes with field counts, deadlines, and descriptions. 4 assurance patterns with code."],["Real-time, independent oversight","Real-time reconciliation pattern (Python) + live SQL dashboard queries (error rate, top errors, remediation status)"],["100% transaction testing","100% Transaction Testing pattern (Python) — validates every transaction against every rule, no sampling"],["100% field testing","65-153 fields per regime × every transaction. Validation rules cover ISIN, LEI, price, quantity, venue, timestamp, currency."],["Replace sample-based reviews",'Code explicitly states "no sampling" — validates all transactions × all fields'],["Replace static PDF reports","Live SQL dashboard queries (3 queries) replacing PDF reports — error rate by regime, top 10 errors, remediation status"],["Live, actionable insights","Real-time reconciliation + live dashboard + remediation tracking with due dates and SLA monitoring"],["Remediate quickly","Each error has a remediation_action field. fact_regulatory_error tracks OPEN→IN_PROGRESS→RESOLVED→LATE."],["Reduce risk","Cross-regime mapping (1 trade → 3 reports) ensures no regime is missed. Reconciliation breaks detected in real-time."],["Scalable (45+ firms)","Partitioned fact tables, ClickHouse/BigQuery columnar storage, Kafka streaming — scales to millions of trades/day"],["Business and technical users","Business: live dashboards, remediation tracking. Technical: API endpoints, Kafka topics, ETL pipelines."],["Consulting services","6 service areas: Strategy, Data & AI, Risk, Compliance, Transaction Reporting, ESG"]].map(([e,r])=>(0,t.jsxs)("tr",{className:"border-b border-border/40",children:[(0,t.jsx)("td",{className:"p-3 text-xs font-medium",children:e}),(0,t.jsx)("td",{className:"p-3 text-xs text-muted-foreground",children:r})]},e))})]})})]})]})}e.s(["default",()=>eG],38155)}]);