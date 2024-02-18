"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[81617],{3146:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=s(85893),r=s(11151);const o={description:"Hyperledger Besu high availability",tags:["public networks","private networks"]},t="High availability of JSON-RPC and RPC Pub/Sub APIs",c={id:"public-networks/how-to/configure-ha/index",title:"High availability of JSON-RPC and RPC Pub/Sub APIs",description:"Hyperledger Besu high availability",source:"@site/versioned_docs/version-23.10.3/public-networks/how-to/configure-ha/index.md",sourceDirName:"public-networks/how-to/configure-ha",slug:"/public-networks/how-to/configure-ha/",permalink:"/23.10.3/public-networks/how-to/configure-ha/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.3/public-networks/how-to/configure-ha/index.md",tags:[{label:"public networks",permalink:"/23.10.3/tags/public-networks"},{label:"private networks",permalink:"/23.10.3/tags/private-networks"}],version:"23.10.3",lastUpdatedAt:1708149981,formattedLastUpdatedAt:"Feb 17, 2024",frontMatter:{description:"Hyperledger Besu high availability",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure logging",permalink:"/23.10.3/public-networks/how-to/monitor/logging"},next:{title:"Sample load balancer configurations",permalink:"/23.10.3/public-networks/how-to/configure-ha/sample-configuration"}},a={},d=[{value:"Determine when a node is ready",id:"determine-when-a-node-is-ready",level:2},{value:"Transaction nonces",id:"transaction-nonces",level:2},{value:"Subscriptions",id:"subscriptions",level:2},{value:"Recover from dropped subscriptions",id:"recover-from-dropped-subscriptions",level:2},{value:"New headers",id:"new-headers",level:3},{value:"Logs",id:"logs",level:3},{value:"New pending transactions",id:"new-pending-transactions",level:3},{value:"Dropped pending transactions",id:"dropped-pending-transactions",level:3},{value:"Syncing",id:"syncing",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"high-availability-of-json-rpc-and-rpc-pubsub-apis",children:"High availability of JSON-RPC and RPC Pub/Sub APIs"}),"\n",(0,i.jsxs)(n.p,{children:["To enable high availability to the ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/how-to/use-besu-api/rpc-pubsub",children:"RPC Pub/Sub API over WebSocket"})," or the ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/how-to/use-besu-api/json-rpc",children:"JSON-RPC API"}),", run and synchronize more than one Hyperledger Besu node to the network. Use a load balancer to distribute requests across nodes in the cluster that are ready to receive requests."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Load Balancer",src:s(43215).Z+"",width:"1394",height:"1152"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["We don't recommend putting ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/configure/bootnodes",children:"bootnodes"})," behind a load balancer."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["We recommend using load balancers over WebSockets because WebSockets are persistent connections associated with specific nodes. If you use load balancers configured in sticky mode over HTTP instead, the connection sticks to the associated node even when the node is congested and there is a lower load node available. If you use load balancers not configured in sticky mode over HTTP, the connections may switch from node to node, so some JSON-RPC requests may not provide expected results (for example, ",(0,i.jsxs)(n.a,{href:"/23.10.3/public-networks/reference/api/#admin-methods",children:[(0,i.jsx)(n.code,{children:"admin"})," methods"]}),", ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#net_enode",children:(0,i.jsx)(n.code,{children:"net_enode"})}),", ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#net_peercount",children:(0,i.jsx)(n.code,{children:"net_peerCount"})}),", and ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_syncing",children:(0,i.jsx)(n.code,{children:"eth_syncing"})}),")."]})}),"\n",(0,i.jsx)(n.h2,{id:"determine-when-a-node-is-ready",children:"Determine when a node is ready"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/how-to/use-besu-api/json-rpc#readiness-and-liveness-endpoints",children:"readiness endpoint"})," to determine when a node is ready."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The minimum number of peers and number of blocks from the best known block for determining if a node considered ready is deployment specific."})}),"\n",(0,i.jsx)(n.h2,{id:"transaction-nonces",children:"Transaction nonces"}),"\n",(0,i.jsxs)(n.p,{children:["Besu obtains the nonce for the next transaction using ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_gettransactioncount",children:(0,i.jsx)(n.code,{children:"eth_getTransactionCount"})}),". The nonce depends on the transactions in the ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/concepts/transactions/pool",children:"transaction pool"}),". If sending ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_gettransactioncount",children:(0,i.jsx)(n.code,{children:"eth_getTransactionCount"})})," and ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_sendrawtransaction",children:(0,i.jsx)(n.code,{children:"eth_sendRawTransaction"})})," requests for a specific account to more than one node, the ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_gettransactioncount",children:(0,i.jsx)(n.code,{children:"eth_getTransactionCount"})})," results might be incorrect."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If using ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/private-transactions/",children:"private transactions"}),", retrieve the nonce using ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_gettransactioncount",children:(0,i.jsx)(n.code,{children:"priv_getTransactionCount"})})," or ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_geteeatransactioncount",children:(0,i.jsx)(n.code,{children:"priv_getEeaTransactionCount"})})," and send the private transactions using ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#eea_sendrawtransaction",children:(0,i.jsx)(n.code,{children:"eea_sendRawTransaction"})}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"To get correct nonces when distributing requests across a cluster, either:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Track the next nonce outside of the Besu node (as MetaMask does)."}),"\n",(0,i.jsx)(n.li,{children:"Configure the load balancer in sticky mode to send requests from a specific account to a single node, unless that node is unavailable."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"subscriptions",children:"Subscriptions"}),"\n",(0,i.jsx)(n.p,{children:"You can subscribe to events using:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/how-to/use-besu-api/rpc-pubsub",children:"RPC Pub/Sub over WebSockets"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/how-to/use-besu-api/access-logs",children:"Filters over HTTP"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We recommend using ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/how-to/use-besu-api/rpc-pubsub",children:"RPC Pub/Sub over WebSocket"})," because WebSockets connections associate with a specific node and do not require using the load balancer in sticky mode."]}),"\n",(0,i.jsxs)(n.p,{children:["If using ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/how-to/use-besu-api/access-logs",children:"filters over HTTP"}),", configure the load balancer in sticky mode to associate the subscription with a specific node."]}),"\n",(0,i.jsx)(n.h2,{id:"recover-from-dropped-subscriptions",children:"Recover from dropped subscriptions"}),"\n",(0,i.jsx)(n.p,{children:"Dropped subscriptions can occur because of:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A disconnected WebSockets connection"}),"\n",(0,i.jsx)(n.li,{children:"The removal of the node serving the subscription from the ready pool."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If there is a dropped subscription, missed events might occur while reconnecting to a different node. To recover dropped messages, create another subscription and follow the process for that ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/how-to/use-besu-api/rpc-pubsub#subscribe",children:"subscription type"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#new-headers",children:(0,i.jsx)(n.code,{children:"newHeads"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#logs",children:(0,i.jsx)(n.code,{children:"logs"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#new-pending-transactions",children:(0,i.jsx)(n.code,{children:"newPendingTransactions"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#dropped-pending-transactions",children:(0,i.jsx)(n.code,{children:"droppedPendingTransactions"})})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#syncing",children:(0,i.jsx)(n.code,{children:"syncing"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"new-headers",children:"New headers"}),"\n",(0,i.jsxs)(n.p,{children:["To request information on blocks from the last block before the subscription dropped to the first block received from the new subscription, use ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_getblockbynumber",children:(0,i.jsx)(n.code,{children:"eth_getBlockByNumber"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"logs",children:"Logs"}),"\n",(0,i.jsxs)(n.p,{children:["To request logs from the block number of the last log received before the subscription dropped to the current chain head, use ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_getlogs",children:(0,i.jsx)(n.code,{children:"eth_getLogs"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"new-pending-transactions",children:"New pending transactions"}),"\n",(0,i.jsxs)(n.p,{children:["To request all pending transactions for the new node, use ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#txpool_besutransactions",children:(0,i.jsx)(n.code,{children:"txpool_besuTransactions"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Nodes do not all store the same pending transactions."})}),"\n",(0,i.jsx)(n.h3,{id:"dropped-pending-transactions",children:"Dropped pending transactions"}),"\n",(0,i.jsxs)(n.p,{children:["To request all pending transactions for the new node, use ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#txpool_besutransactions",children:(0,i.jsx)(n.code,{children:"txpool_besuTransactions"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Nodes do not all store the same pending transactions."})}),"\n",(0,i.jsx)(n.h3,{id:"syncing",children:"Syncing"}),"\n",(0,i.jsxs)(n.p,{children:["The syncing state of each node is specific to that node. To retrieve the syncing state of the new node, use ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_syncing",children:(0,i.jsx)(n.code,{children:"eth_syncing"})}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},43215:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/LoadBalancer-826ae74f729e635521c18cce763c439d.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var i=s(67294);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);