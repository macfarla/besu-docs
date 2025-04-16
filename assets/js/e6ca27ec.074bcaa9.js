"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[231],{28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(96540);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}},54633:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"private-networks/how-to/use-privacy/performance-best-practices","title":"Privacy best practices","description":"Privacy best practices","source":"@site/docs/private-networks/how-to/use-privacy/performance-best-practices.md","sourceDirName":"private-networks/how-to/use-privacy","slug":"/private-networks/how-to/use-privacy/performance-best-practices","permalink":"/private-networks/how-to/use-privacy/performance-best-practices","draft":false,"unlisted":false,"editUrl":"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/use-privacy/performance-best-practices.md","tags":[{"inline":true,"label":"private networks","permalink":"/tags/private-networks"}],"version":"current","lastUpdatedAt":1744783165000,"sidebarPosition":9,"frontMatter":{"title":"Privacy best practices","description":"Privacy best practices","sidebar_position":9,"tags":["private networks"]},"sidebar":"privateDocSidebar","previous":{"title":"Use the web3js-quorum library","permalink":"/private-networks/how-to/use-privacy/web3js-quorum"},"next":{"title":"Use local permissioning","permalink":"/private-networks/how-to/use-permissioning/local"}}');var a=t(74848),i=t(28453);const r={title:"Privacy best practices",description:"Privacy best practices",sidebar_position:9,tags:["private networks"]},o="Privacy best practices (Deprecated)",c={},l=[{value:"General performance",id:"general-performance",level:2},{value:"Use fast, local, solid state storage",id:"use-fast-local-solid-state-storage",level:3},{value:"Private transaction performance",id:"private-transaction-performance",level:2},{value:"Use concurrent submission",id:"use-concurrent-submission",level:3},{value:"Co-locate Besu and Tessera",id:"co-locate-besu-and-tessera",level:3},{value:"Optimize worst-case latency between Tessera nodes",id:"optimize-worst-case-latency-between-tessera-nodes",level:3},{value:"Use stateful nonce management",id:"use-stateful-nonce-management",level:3},{value:"Use random senders for privacy marker transactions",id:"use-random-senders-for-privacy-marker-transactions",level:3},{value:"Avoid queuing transactions in Tessera",id:"avoid-queuing-transactions-in-tessera",level:3},{value:"Limit the group size to reduce communication overhead",id:"limit-the-group-size-to-reduce-communication-overhead",level:3},{value:"Limit group membership changes and make them quick",id:"limit-group-membership-changes-and-make-them-quick",level:3}];function d(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"privacy-best-practices-deprecated",children:"Privacy best practices (Deprecated)"})}),"\n",(0,a.jsx)(s.admonition,{type:"caution",children:(0,a.jsxs)(s.p,{children:["Tessera-based privacy is deprecated in Besu version 24.12.0 and later. Please read this ",(0,a.jsx)(s.a,{href:"https://www.lfdecentralizedtrust.org/blog/sunsetting-tessera-and-simplifying-hyperledger-besu",children:"blog post"})," for more context on the rationale behind this decision as well as alternative options."]})}),"\n",(0,a.jsx)(s.p,{children:"This document collects deployment and usage tips to help you achieve high performance for private transactions. If transaction throughput or latency is not meeting your expectations, please consider the following before raising an issue."}),"\n",(0,a.jsx)(s.h2,{id:"general-performance",children:"General performance"}),"\n",(0,a.jsx)(s.p,{children:"Private transactions use the same facilities as public ones. General Besu performance tunings apply. Specific approaches are out of scope of this document, except for the following, which strongly impacts performance:"}),"\n",(0,a.jsx)(s.h3,{id:"use-fast-local-solid-state-storage",children:"Use fast, local, solid state storage"}),"\n",(0,a.jsx)(s.p,{children:"Running EVM transactions creates a lot of random reads that are executed sequentially. The Besu data folder for high throughput nodes should be located on the fastest possible storage media."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Prefer ",(0,a.jsx)(s.a,{href:"https://cloud.google.com/compute/docs/disks/local-ssd#performance",children:"NVMe"})," attached SLC flash or Intel Optane."]}),"\n",(0,a.jsx)(s.li,{children:"Avoid network attached SSDs or cloud storage with limited input/output operations per second."}),"\n",(0,a.jsx)(s.li,{children:"Do not use spinning disks under any circumstances."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"private-transaction-performance",children:"Private transaction performance"}),"\n",(0,a.jsx)(s.h3,{id:"use-concurrent-submission",children:"Use concurrent submission"}),"\n",(0,a.jsxs)(s.p,{children:["When submitting a private transaction using ",(0,a.jsx)(s.a,{href:"https://github.com/ConsenSys/web3js-quorum",children:"web3js-quorum"}),", the submit call will only return once the privacy marker transaction has been included in a block. This limits the throughput to at most one private transaction per block when submitting from a single thread. To increase throughput, use web3js-quorum from multiple concurrent threads or processes."]}),"\n",(0,a.jsx)(s.h3,{id:"co-locate-besu-and-tessera",children:"Co-locate Besu and Tessera"}),"\n",(0,a.jsx)(s.p,{children:"Besu has to talk to its local Tessera node frequently while handling a block. While we do not recommend running them on the same node, minimizing the latency between Besu and Tessera will improve block processing times. Besu and Tessera should not be hosted in geographically distributed locations."}),"\n",(0,a.jsx)(s.h3,{id:"optimize-worst-case-latency-between-tessera-nodes",children:"Optimize worst-case latency between Tessera nodes"}),"\n",(0,a.jsx)(s.p,{children:"When distributing a new private transaction between Tessera nodes, the overall throughput is determined by the slowest Tessera nodes. Try to minimize network latency between Tessera nodes and do not mix different machine types when hosting Tessera."}),"\n",(0,a.jsx)(s.h3,{id:"use-stateful-nonce-management",children:"Use stateful nonce management"}),"\n",(0,a.jsx)(s.p,{children:"Management of public and private nonces in web3js-quorum is stateless: before a transaction is sent, web3js-quorum has to query for those nonces. This is increasing latency, the node's load, and is a source of fragility due to nonce collision when multiple senders try to use the same account concurrently."}),"\n",(0,a.jsx)(s.p,{children:"For performance and reliability it is advantageous to manage nonces in a stateful manner on the client side instead of querying them for every transaction."}),"\n",(0,a.jsx)(s.h3,{id:"use-random-senders-for-privacy-marker-transactions",children:"Use random senders for privacy marker transactions"}),"\n",(0,a.jsxs)(s.p,{children:["To avoid public nonce management, privacy marker transactions can be sent using a ",(0,a.jsx)(s.a,{href:"/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file-deprecated",children:"random account per transaction"}),". This option is only available for zero gas networks."]}),"\n",(0,a.jsx)(s.h3,{id:"avoid-queuing-transactions-in-tessera",children:"Avoid queuing transactions in Tessera"}),"\n",(0,a.jsx)(s.p,{children:"When Tessera is overloaded with transactions, the performance breaks down catastrophically due to unbounded growth of the request queue. Avoid sending more transactions to Tessera than it can handle. Sudden jumps in submission latency and submission failure rate should be answered with a load reduction on the client side, for example using a back-off scheme."}),"\n",(0,a.jsx)(s.p,{children:"Please note that this is not Tessera specific but a general issue in distributed systems. It just happens that if queueing discipline is not maintained, Tessera tends to be the first component to fail."}),"\n",(0,a.jsx)(s.h3,{id:"limit-the-group-size-to-reduce-communication-overhead",children:"Limit the group size to reduce communication overhead"}),"\n",(0,a.jsx)(s.p,{children:"Smaller groups need fewer communication for transaction propagation. If reducing the number of Tessera nodes involved in a transaction is an option, it will lead to slightly better tail latencies. Multi-tenancy Tessera can be used to have large groups with a small number of Tessera nodes (possibly only one)."}),"\n",(0,a.jsx)(s.h3,{id:"limit-group-membership-changes-and-make-them-quick",children:"Limit group membership changes and make them quick"}),"\n",(0,a.jsx)(s.p,{children:"Groups are locked (prevented from executing transactions) during membership changes. Try to minimize the number of times the membership changes. When possible, spread load across multiple groups to always have some groups available while others are locked. Consider batching group membership changes if possible. Note however that this does not work with the default management contract, yet."})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);