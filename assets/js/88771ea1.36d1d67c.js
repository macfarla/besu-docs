"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[4265],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}},55614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"private-networks/how-to/monitor/quorum-hibernate","title":"Use Quorum Hibernate","description":"Use Quorum Hibernate with Besu","source":"@site/docs/private-networks/how-to/monitor/quorum-hibernate.md","sourceDirName":"private-networks/how-to/monitor","slug":"/private-networks/how-to/monitor/quorum-hibernate","permalink":"/private-networks/how-to/monitor/quorum-hibernate","draft":false,"unlisted":false,"editUrl":"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/monitor/quorum-hibernate.md","tags":[{"inline":true,"label":"private networks","permalink":"/tags/private-networks"}],"version":"current","lastUpdatedAt":1744783165000,"sidebarPosition":4,"frontMatter":{"title":"Use Quorum Hibernate","sidebar_position":4,"description":"Use Quorum Hibernate with Besu","tags":["private networks"]},"sidebar":"privateDocSidebar","previous":{"title":"Use Elastic Stack","permalink":"/private-networks/how-to/monitor/elastic-stack"},"next":{"title":"Use Splunk","permalink":"/private-networks/how-to/monitor/splunk"}}');var o=r(74848),i=r(28453);const s={title:"Use Quorum Hibernate",sidebar_position:4,description:"Use Quorum Hibernate with Besu",tags:["private networks"]},a="Use Quorum Hibernate (Deprecated)",u={},c=[];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"use-quorum-hibernate-deprecated",children:"Use Quorum Hibernate (Deprecated)"})}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["Tessera-based privacy is deprecated in Besu version 24.12.0 and later. Please read this ",(0,o.jsx)(t.a,{href:"https://www.lfdecentralizedtrust.org/blog/sunsetting-tessera-and-simplifying-hyperledger-besu",children:"blog post"})," for more context on the rationale behind this decision as well as alternative options."]})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-hibernate",children:"Quorum Hibernate"})," is a proxy that monitors a node's API traffic and hibernates the node when inactive. This reduces infrastructure costs by ensuring only nodes receiving API requests or nodes required to establish consensus are running."]}),"\n",(0,o.jsx)(t.p,{children:"Quorum Hibernate wakes up hibernating nodes:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"When a new transaction or API request is received."}),"\n",(0,o.jsx)(t.li,{children:"To allow it to periodically sync with the network."}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);