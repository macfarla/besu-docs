"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[96670],{67861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(74848),i=t(28453);const r={title:"Transaction pool",sidebar_position:2,description:"Transaction pool overview",tags:["public networks","private networks"]},s="Transaction pool",c={id:"public-networks/concepts/transactions/pool",title:"Transaction pool",description:"Transaction pool overview",source:"@site/versioned_docs/version-24.7.1/public-networks/concepts/transactions/pool.md",sourceDirName:"public-networks/concepts/transactions",slug:"/public-networks/concepts/transactions/pool",permalink:"/24.7.1/public-networks/concepts/transactions/pool",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.7.1/public-networks/concepts/transactions/pool.md",tags:[{inline:!0,label:"public networks",permalink:"/24.7.1/tags/public-networks"},{inline:!0,label:"private networks",permalink:"/24.7.1/tags/private-networks"}],version:"24.7.1",lastUpdatedAt:1726521271e3,sidebarPosition:2,frontMatter:{title:"Transaction pool",sidebar_position:2,description:"Transaction pool overview",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Transaction types",permalink:"/24.7.1/public-networks/concepts/transactions/types"},next:{title:"Transaction validation",permalink:"/24.7.1/public-networks/concepts/transactions/validation"}},a={},l=[{value:"Layered transaction pool",id:"layered-transaction-pool",level:2},{value:"Sequenced transaction pool",id:"sequenced-transaction-pool",level:2},{value:"Dropping transactions when the layered transaction pool is full",id:"dropping-transactions-when-the-layered-transaction-pool-is-full",level:2},{value:"Replacing transactions with the same sender and nonce",id:"replacing-transactions-with-the-same-sender-and-nonce",level:2},{value:"In networks with a base fee and priced gas",id:"in-networks-with-a-base-fee-and-priced-gas",level:3},{value:"In networks with zero base base or free gas",id:"in-networks-with-zero-base-base-or-free-gas",level:3},{value:"Transaction pool methods and options",id:"transaction-pool-methods-and-options",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"transaction-pool",children:"Transaction pool"}),"\n",(0,o.jsx)(n.p,{children:"All nodes maintain a transaction pool to store pending transactions before processing."}),"\n",(0,o.jsx)(n.p,{children:"Transaction pools are categorized into the following two types:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#layered-transaction-pool",children:"Layered"})," - Recommended for public blockchain networks."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#sequenced-transaction-pool",children:"Sequenced"})," - Recommended for private blockchain networks."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can use specific options and methods to ",(0,o.jsx)(n.a,{href:"#transaction-pool-methods-and-options",children:"configure and monitor the transaction pool"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["When submitting ",(0,o.jsx)(n.a,{href:"/24.7.1/private-networks/concepts/privacy/private-transactions/#nonce-validation",children:"private transactions"}),",\nthe ",(0,o.jsx)(n.a,{href:"/24.7.1/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transaction"}),"\nis submitted to the transaction pool, not the private transaction itself."]})}),"\n",(0,o.jsx)(n.h2,{id:"layered-transaction-pool",children:"Layered transaction pool"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://github.com/hyperledger/besu/pull/5290",children:"layered transaction pool"})," is the default\ntransaction pool implementation.\nThe implementation separates the pool into layers according to value and executability of the transactions.\nThe first layer keeps only the highest-value transactions that can feasibly go into the next block.\nThe other two layers ensure Besu always has a backlog of transactions to fill blocks, maximizing the amount of fees."]}),"\n",(0,o.jsx)(n.p,{children:"Layered pools have additional parameters that allow you to limit and configure the number of transactions in different layers, enabling them to handle high volumes and sort transactions at a faster speed."}),"\n",(0,o.jsx)(n.p,{children:"With the layered transaction pool, Besu produces more profitable blocks more quickly, with more\ndenial-of-service protection, and using less CPU than with the legacy transaction pool."}),"\n",(0,o.jsx)(n.p,{children:"If you previously configured transaction pool behavior, upgrade to the layered transaction pool by:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Removing the ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-retention-hours",children:(0,o.jsx)(n.code,{children:"--tx-pool-retention-hours"})}),"\noption, which is not applicable because old transactions will expire when the memory cache is full."]}),"\n",(0,o.jsxs)(n.li,{children:["Replacing the ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-limit-by-account-percentage",children:(0,o.jsx)(n.code,{children:"--tx-pool-limit-by-account-percentage"})}),"\noption with ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-max-future-by-sender",children:(0,o.jsx)(n.code,{children:"--tx-pool-max-future-by-sender"})}),"\nto limit the number of sequential transactions, instead of percentage of transactions, from a single\nsender kept in the pool."]}),"\n",(0,o.jsxs)(n.li,{children:["Removing the ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-max-size",children:(0,o.jsx)(n.code,{children:"--tx-pool-max-size"})})," option,\nwhich is not applicable because the layered pool is limited by memory size instead of the number\nof transactions.\nTo configure the maximum memory capacity, use ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-layer-max-capacity",children:(0,o.jsx)(n.code,{children:"--tx-pool-layer-max-capacity"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can opt out of the layered transaction pool implementation by setting the\n",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool",children:(0,o.jsx)(n.code,{children:"--tx-pool"})})," option to ",(0,o.jsx)(n.code,{children:"sequenced"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"sequenced-transaction-pool",children:"Sequenced transaction pool"}),"\n",(0,o.jsx)(n.p,{children:"In the sequenced transaction pool, transactions are processed strictly in the order they are received.\nAlthough sequenced transaction pools lack the flexibility of layered pools, they help maintain a\nconsistent and transparent transaction order, which is often useful in private blockchains."}),"\n",(0,o.jsxs)(n.p,{children:["You can select the sequenced transaction pool by setting ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool",children:(0,o.jsx)(n.code,{children:"--tx-pool=sequenced"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you set the enterprise configuration profile using ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/how-to/configure-besu/profile#enterpriseprivate-profile",children:(0,o.jsx)(n.code,{children:"--profile=enterprise"})})," or ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/how-to/configure-besu/profile#enterpriseprivate-profile",children:(0,o.jsx)(n.code,{children:"--profile=private"})}),", the ",(0,o.jsx)(n.code,{children:"sequenced"})," transaction pool is set by default."]}),"\n",(0,o.jsx)(n.p,{children:"The sequenced transaction pool suits enterprise environments because it functions like a first-in-first-out (FIFO) queue and processes transactions in the order of submission, regardless of the sender.\nWhen the pool reaches capacity, the newer transactions are evicted first, reducing the likelihood of a nonce gap and avoiding the need to resubmit older transactions."}),"\n",(0,o.jsx)(n.h2,{id:"dropping-transactions-when-the-layered-transaction-pool-is-full",children:"Dropping transactions when the layered transaction pool is full"}),"\n",(0,o.jsx)(n.p,{children:"When the transaction pool is full, it accepts and retains local transactions in preference to remote transactions.\nIf the transaction pool is full of local transactions, Besu drops the oldest local transactions first.\nThat is, a full transaction pool continues to accept new local transactions by first dropping remote transactions and then by dropping the oldest local transactions."}),"\n",(0,o.jsx)(n.h2,{id:"replacing-transactions-with-the-same-sender-and-nonce",children:"Replacing transactions with the same sender and nonce"}),"\n",(0,o.jsx)(n.h3,{id:"in-networks-with-a-base-fee-and-priced-gas",children:"In networks with a base fee and priced gas"}),"\n",(0,o.jsx)(n.p,{children:"You can replace a pending transaction with a transaction that has the same sender and nonce but a higher gas price."}),"\n",(0,o.jsxs)(n.p,{children:["If sending a ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/concepts/transactions/types#frontier-transactions",children:"legacy transaction"}),", the old transaction is replaced if the new transaction has a gas price higher than the existing gas price by the percentage specified by ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If sending an ",(0,o.jsxs)(n.a,{href:"/24.7.1/public-networks/concepts/transactions/types#eip1559-transactions",children:[(0,o.jsx)(n.code,{children:"EIP1559"})," transaction"]}),", the old transaction is replaced if one of the following is true:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The new transaction's effective gas price is higher than the existing gas price by the percentage specified by ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})})," AND the new effective priority fee is greater than or equal to the existing priority fee."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The new transaction's effective gas price is the equal to the existing gas price AND the new effective priority fee is higher than the existing priority fee by the percentage specified by ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The default value for ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})})," is 10%."]}),"\n",(0,o.jsx)(n.h3,{id:"in-networks-with-zero-base-base-or-free-gas",children:"In networks with zero base base or free gas"}),"\n",(0,o.jsx)(n.p,{children:"To enable replacing transactions in the transaction pool for zero base fee networks,\nor free gas networks:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If you set ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/genesis-items",children:(0,o.jsx)(n.code,{children:"zeroBaseFee"})})," to ",(0,o.jsx)(n.code,{children:"true"})," in the genesis file,\nthe transaction pool price bump is set to ",(0,o.jsx)(n.code,{children:"0"}),". Specifying a value for transaction pool price bump using ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})}),"\nwill cause an error."]}),"\n",(0,o.jsxs)(n.li,{children:["If the ",(0,o.jsx)(n.a,{href:"/24.7.1/private-networks/how-to/configure/free-gas",children:"minimum gas price is zero"}),", the transaction pool price bump is set to ",(0,o.jsx)(n.code,{children:"0"}),", unless you specify a different value using ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"transaction-pool-methods-and-options",children:"Transaction pool methods and options"}),"\n",(0,o.jsx)(n.p,{children:"You can configure and monitor the transaction pool using the following methods, subscriptions, and options:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Method"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/api/#txpool_besutransactions",children:(0,o.jsx)(n.code,{children:"txpool_besuTransactions"})})}),(0,o.jsx)(n.td,{children:"API method to list transactions in the transaction pool."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Method"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/api/#txpool_besustatistics",children:(0,o.jsx)(n.code,{children:"txpool_besuStatistics"})})}),(0,o.jsx)(n.td,{children:"API method to list statistics of the transaction pool."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Method"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/api/#txpool_besupendingtransactions",children:(0,o.jsx)(n.code,{children:"txpool_besuPendingTransactions"})})}),(0,o.jsx)(n.td,{children:"API method to list pending transactions in the transaction pool."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Subscription"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/how-to/use-besu-api/rpc-pubsub#pending-transactions",children:(0,o.jsx)(n.code,{children:"newPendingTransactions"})})}),(0,o.jsx)(n.td,{children:"RPC subscription to notify of transactions added to the transaction pool."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Subscription"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/how-to/use-besu-api/rpc-pubsub#dropped-transactions",children:(0,o.jsx)(n.code,{children:"droppedPendingTransactions"})})}),(0,o.jsx)(n.td,{children:"RPC subscription to notify of transactions dropped from the transaction pool."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool",children:(0,o.jsx)(n.code,{children:"--tx-pool"})})}),(0,o.jsx)(n.td,{children:"Option to specify the type of transaction pool to use."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-enable-save-restore",children:(0,o.jsx)(n.code,{children:"--tx-pool-enable-save-restore"})})}),(0,o.jsx)(n.td,{children:"Option to enable save and restore functionality for the transaction pool."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-layer-max-capacity",children:(0,o.jsx)(n.code,{children:"--tx-pool-layer-max-capacity"})})}),(0,o.jsx)(n.td,{children:"Option to specify the maximum memory capacity of the layered transaction pool."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-limit-by-account-percentage",children:(0,o.jsx)(n.code,{children:"--tx-pool-limit-by-account-percentage"})})}),(0,o.jsx)(n.td,{children:"Option to limit the transaction pool by account percentage."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-max-future-by-sender",children:(0,o.jsx)(n.code,{children:"--tx-pool-max-future-by-sender"})})}),(0,o.jsx)(n.td,{children:"Option to specify the maximum number of future transactions by sender."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-max-prioritized",children:(0,o.jsx)(n.code,{children:"--tx-pool-max-prioritized"})})}),(0,o.jsx)(n.td,{children:"Option to specify the maximum number of prioritized transactions."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-max-prioritized-by-type",children:(0,o.jsx)(n.code,{children:"--tx-pool-max-prioritized-by-type"})})}),(0,o.jsx)(n.td,{children:"Option to specify the maximum number of prioritized transactions by type."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-max-size",children:(0,o.jsx)(n.code,{children:"--tx-pool-max-size"})})}),(0,o.jsx)(n.td,{children:"Option to specify the maximum size of the transaction pool."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-min-gas-price",children:(0,o.jsx)(n.code,{children:"--tx-pool-min-gas-price"})})}),(0,o.jsx)(n.td,{children:"Option to specify the minimum gas price for transactions in the pool."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-no-local-priority",children:(0,o.jsx)(n.code,{children:"--tx-pool-no-local-priority"})})}),(0,o.jsx)(n.td,{children:"Option to disable local priority for transactions."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})})}),(0,o.jsx)(n.td,{children:"Option to specify the price bump percentage to replace an existing transaction."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-priority-senders",children:(0,o.jsx)(n.code,{children:"--tx-pool-priority-senders"})})}),(0,o.jsx)(n.td,{children:"Option to specify sender addresses to prioritize in the transaction pool."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-retention-hours",children:(0,o.jsx)(n.code,{children:"--tx-pool-retention-hours"})})}),(0,o.jsx)(n.td,{children:"Option to specify the number of hours to retain transactions in the pool."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Option"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-save-file",children:(0,o.jsx)(n.code,{children:"--tx-pool-save-file"})})}),(0,o.jsx)(n.td,{children:"Option to specify the file for saving the transaction pool state."})]})]})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The option ",(0,o.jsx)(n.a,{href:"/24.7.1/public-networks/reference/cli/options#tx-pool-layer-max-capacity",children:(0,o.jsx)(n.code,{children:"--tx-pool-layer-max-capacity"})})," is applicable only for ",(0,o.jsx)(n.a,{href:"#layered-transaction-pool",children:"layered transaction pools"}),"."]})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);