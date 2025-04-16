"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[8088],{28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>c});var n=a(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}},80869:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"private-networks/how-to/use-privacy/access-private-transactions","title":"Access private and privacy marker transactions","description":"Methods for accessing and managing private transactions and privacy groups in Besu","source":"@site/docs/private-networks/how-to/use-privacy/access-private-transactions.md","sourceDirName":"private-networks/how-to/use-privacy","slug":"/private-networks/how-to/use-privacy/access-private-transactions","permalink":"/private-networks/how-to/use-privacy/access-private-transactions","draft":false,"unlisted":false,"editUrl":"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/use-privacy/access-private-transactions.md","tags":[{"inline":true,"label":"private networks","permalink":"/tags/private-networks"}],"version":"current","lastUpdatedAt":1744783165000,"sidebarPosition":6,"frontMatter":{"title":"Access private and privacy marker transactions","description":"Methods for accessing and managing private transactions and privacy groups in Besu","sidebar_position":6,"tags":["private networks"]},"sidebar":"privateDocSidebar","previous":{"title":"Use flexible privacy groups","permalink":"/private-networks/how-to/use-privacy/flexible"},"next":{"title":"Sign privacy marker transactions","permalink":"/private-networks/how-to/use-privacy/sign-pmts"}}');var r=a(74848),s=a(28453);const i={title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Besu",sidebar_position:6,tags:["private networks"]},c="Access private and privacy marker transactions (Deprecated)",o={},p=[{value:"Transaction receipts",id:"transaction-receipts",level:2},{value:"Transactions",id:"transactions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"access-private-and-privacy-marker-transactions-deprecated",children:"Access private and privacy marker transactions (Deprecated)"})}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Tessera-based privacy is deprecated in Besu version 24.12.0 and later. Please read this ",(0,r.jsx)(t.a,{href:"https://www.lfdecentralizedtrust.org/blog/sunsetting-tessera-and-simplifying-hyperledger-besu",children:"blog post"})," for more context on the rationale behind this decision as well as alternative options."]})}),"\n",(0,r.jsxs)(t.p,{children:["A Besu private transaction creates a ",(0,r.jsx)(t.a,{href:"/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transaction"})," and the private transaction itself."]}),"\n",(0,r.jsx)(t.h2,{id:"transaction-receipts",children:"Transaction receipts"}),"\n",(0,r.jsx)(t.p,{children:"With the transaction hash returned when submitting the private transaction, to get the transaction receipt for the:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Private transaction, use ",(0,r.jsx)(t.a,{href:"/private-networks/reference/api/#priv_gettransactionreceipt",children:(0,r.jsx)(t.code,{children:"priv_getTransactionReceipt"})}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Privacy marker transaction, use ",(0,r.jsx)(t.a,{href:"/public-networks/reference/api/#eth_gettransactionreceipt",children:(0,r.jsx)(t.code,{children:"eth_getTransactionReceipt"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The transaction receipt includes a ",(0,r.jsx)(t.code,{children:"status"})," indicating if the transaction failed (",(0,r.jsx)(t.code,{children:"0x0"}),"), succeeded (",(0,r.jsx)(t.code,{children:"0x1"}),"), or was invalid (",(0,r.jsx)(t.code,{children:"0x2"}),")."]}),"\n",(0,r.jsx)(t.admonition,{title:"Private transaction failure example",type:"note",children:(0,r.jsxs)(t.p,{children:["To deploy a private contract, you submit a transaction using ",(0,r.jsx)(t.a,{href:"/private-networks/how-to/send-transactions/private-transactions",children:(0,r.jsx)(t.code,{children:"eea_sendRawTransaction"})}),". If contract deployment fails because of insufficient gas, the privacy marker transaction receipt has a status of success and the private transaction receipt has a status of failure."]})}),"\n",(0,r.jsx)(t.h2,{id:"transactions",children:"Transactions"}),"\n",(0,r.jsx)(t.p,{children:"With the transaction hash returned when submitting the private transaction, to get the:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Private transaction, use ",(0,r.jsx)(t.a,{href:"/private-networks/reference/api/#priv_getprivatetransaction",children:(0,r.jsx)(t.code,{children:"priv_getPrivateTransaction"})}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Privacy marker transaction, use ",(0,r.jsx)(t.a,{href:"/public-networks/reference/api/#eth_gettransactionbyhash",children:(0,r.jsx)(t.code,{children:"eth_getTransactionByHash"})}),"."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);