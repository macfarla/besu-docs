"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[28727],{59271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(74848),r=n(28453);const i={title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Besu",sidebar_position:6,tags:["private networks"]},s="Access private and privacy marker transactions",c={id:"private-networks/how-to/use-privacy/access-private-transactions",title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Besu",source:"@site/versioned_docs/version-24.9.1/private-networks/how-to/use-privacy/access-private-transactions.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/access-private-transactions",permalink:"/private-networks/how-to/use-privacy/access-private-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.9.1/private-networks/how-to/use-privacy/access-private-transactions.md",tags:[{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"24.9.1",lastUpdatedAt:1726521271e3,sidebarPosition:6,frontMatter:{title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Besu",sidebar_position:6,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use flexible privacy groups",permalink:"/private-networks/how-to/use-privacy/flexible"},next:{title:"Sign privacy marker transactions",permalink:"/private-networks/how-to/use-privacy/sign-pmts"}},o={},p=[{value:"Transaction receipts",id:"transaction-receipts",level:2},{value:"Transactions",id:"transactions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"access-private-and-privacy-marker-transactions",children:"Access private and privacy marker transactions"}),"\n",(0,a.jsxs)(t.p,{children:["A Besu private transaction creates a ",(0,a.jsx)(t.a,{href:"/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transaction"})," and the private transaction itself."]}),"\n",(0,a.jsx)(t.h2,{id:"transaction-receipts",children:"Transaction receipts"}),"\n",(0,a.jsx)(t.p,{children:"With the transaction hash returned when submitting the private transaction, to get the transaction receipt for the:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Private transaction, use ",(0,a.jsx)(t.a,{href:"/private-networks/reference/api/#priv_gettransactionreceipt",children:(0,a.jsx)(t.code,{children:"priv_getTransactionReceipt"})}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Privacy marker transaction, use ",(0,a.jsx)(t.a,{href:"/public-networks/reference/api/#eth_gettransactionreceipt",children:(0,a.jsx)(t.code,{children:"eth_getTransactionReceipt"})}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The transaction receipt includes a ",(0,a.jsx)(t.code,{children:"status"})," indicating if the transaction failed (",(0,a.jsx)(t.code,{children:"0x0"}),"), succeeded (",(0,a.jsx)(t.code,{children:"0x1"}),"), or was invalid (",(0,a.jsx)(t.code,{children:"0x2"}),")."]}),"\n",(0,a.jsx)(t.admonition,{title:"Private transaction failure example",type:"note",children:(0,a.jsxs)(t.p,{children:["To deploy a private contract, you submit a transaction using ",(0,a.jsx)(t.a,{href:"/private-networks/how-to/send-transactions/private-transactions",children:(0,a.jsx)(t.code,{children:"eea_sendRawTransaction"})}),". If contract deployment fails because of insufficient gas, the privacy marker transaction receipt has a status of success and the private transaction receipt has a status of failure."]})}),"\n",(0,a.jsx)(t.h2,{id:"transactions",children:"Transactions"}),"\n",(0,a.jsx)(t.p,{children:"With the transaction hash returned when submitting the private transaction, to get the:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Private transaction, use ",(0,a.jsx)(t.a,{href:"/private-networks/reference/api/#priv_getprivatetransaction",children:(0,a.jsx)(t.code,{children:"priv_getPrivateTransaction"})}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Privacy marker transaction, use ",(0,a.jsx)(t.a,{href:"/public-networks/reference/api/#eth_gettransactionbyhash",children:(0,a.jsx)(t.code,{children:"eth_getTransactionByHash"})}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var a=n(96540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);