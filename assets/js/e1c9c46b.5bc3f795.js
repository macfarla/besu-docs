"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[4567],{78242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(74848),r=t(28453);const o={title:"Create and send transactions",sidebar_position:4,description:"Send transactions using eth_call or eth_sendRawTransaction.",tags:["public networks"]},a="Create and send transactions",i={id:"public-networks/how-to/send-transactions",title:"Create and send transactions",description:"Send transactions using eth_call or eth_sendRawTransaction.",source:"@site/docs/public-networks/how-to/send-transactions.md",sourceDirName:"public-networks/how-to",slug:"/public-networks/how-to/send-transactions",permalink:"/public-networks/how-to/send-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/send-transactions.md",tags:[{inline:!0,label:"public networks",permalink:"/tags/public-networks"}],version:"current",lastUpdatedAt:174044936e4,sidebarPosition:4,frontMatter:{title:"Create and send transactions",sidebar_position:4,description:"Send transactions using eth_call or eth_sendRawTransaction.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Use the Engine API",permalink:"/public-networks/how-to/use-engine-api"},next:{title:"Configure static nodes",permalink:"/public-networks/how-to/connect/static-nodes"}},c={},d=[{value:"<code>eth_call</code> vs <code>eth_sendRawTransaction</code>",id:"eth_call-vs-eth_sendrawtransaction",level:2},{value:"Override state values",id:"override-state-values",level:2},{value:"Use wallets for key management",id:"use-wallets-for-key-management",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"create-and-send-transactions",children:"Create and send transactions"})}),"\n",(0,s.jsxs)(n.p,{children:["You can send signed transactions using the ",(0,s.jsx)(n.a,{href:"/public-networks/reference/api/#eth_sendrawtransaction",children:(0,s.jsx)(n.code,{children:"eth_sendRawTransaction"})}),"\nJSON-RPC API method.\nSigned transactions can be simple value transfers, contract creation, or contract invocation. Set the\nmaximum transaction fee for transactions using the ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-tx-feecap",children:(0,s.jsx)(n.code,{children:"--rpc-tx-feecap"})})," CLI option."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/public-networks/how-to/develop/client-libraries",children:"Use client libraries"})," to create and send a signed raw transaction to\ntransfer Ether and create a smart contract."]}),"\n",(0,s.jsxs)(n.p,{children:["To accept signed transactions from remote connections, set the ",(0,s.jsx)(n.a,{href:"/public-networks/how-to/use-besu-api/#service-hosts",children:"API listening host"}),"\nto ",(0,s.jsx)(n.code,{children:"0.0.0.0"}),". Setting the listening host to ",(0,s.jsx)(n.code,{children:"0.0.0.0"})," exposes the API service connection on your node to\nany remote connection. In a production environment, ensure you are using a firewall to avoid exposing\nyour node to the internet."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Private keys",type:"danger",children:[(0,s.jsx)(n.p,{children:"Don't use the accounts from the examples on Mainnet or any public network except for testing. The private keys are displayed which means the accounts are not secure."}),(0,s.jsxs)(n.p,{children:["All accounts and private keys in the examples are from the ",(0,s.jsx)(n.code,{children:"dev.json"})," genesis file in the ",(0,s.jsx)(n.a,{href:"https://github.com/hyperledger/besu/tree/master/config/src/main/resources",children:(0,s.jsx)(n.code,{children:"/besu/config/src/main/resources"})})," directory."]}),(0,s.jsxs)(n.p,{children:["In production environments avoid exposing your private keys by creating signed transactions offline, or use ",(0,s.jsx)(n.a,{href:"https://docs.web3signer.consensys.net/",children:"Web3Signer"})," to isolate your private keys and sign transactions with ",(0,s.jsx)(n.a,{href:"https://docs.web3signer.consensys.net/reference/api/json-rpc#eth_sendtransaction",children:(0,s.jsx)(n.code,{children:"eth_sendTransaction"})}),"."]})]}),"\n",(0,s.jsxs)(n.h2,{id:"eth_call-vs-eth_sendrawtransaction",children:[(0,s.jsx)(n.code,{children:"eth_call"})," vs ",(0,s.jsx)(n.code,{children:"eth_sendRawTransaction"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can interact with contracts using ",(0,s.jsx)(n.a,{href:"/public-networks/reference/api/#eth_call",children:(0,s.jsx)(n.code,{children:"eth_call"})})," or ",(0,s.jsx)(n.a,{href:"/public-networks/reference/api/#eth_sendrawtransaction",children:(0,s.jsx)(n.code,{children:"eth_sendRawTransaction"})}),". The table below compares the characteristics of both calls."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.code,{children:"eth_call"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.code,{children:"eth_sendRawTransaction"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Read-only"}),(0,s.jsx)(n.td,{children:"Write"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Invokes contract function locally"}),(0,s.jsx)(n.td,{children:"Broadcasts to the network"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Does not change state of blockchain"}),(0,s.jsx)(n.td,{children:"Updates the blockchain (for example, transfers ether between accounts)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Does not consume gas"}),(0,s.jsx)(n.td,{children:"Requires gas"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Synchronous"}),(0,s.jsx)(n.td,{children:"Asynchronous"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Returns the value of a contract function available immediately"}),(0,s.jsx)(n.td,{children:"Returns transaction hash only. A block might not include all possible transactions (for example, if the gas price is too low)."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"override-state-values",children:"Override state values"}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"/public-networks/reference/api/#eth_call",children:(0,s.jsx)(n.code,{children:"eth_call"})})," to override an account with temporary state values before\nmaking the call. This allows you to make temporary state changes without affecting the actual\nblockchain state, and provides the following benefits:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Minimizes the amount of contract code required to be deployed onchain. Code that returns\ninternal state or performs predefined validations can be kept offchain and provided to the node on demand."}),"\n",(0,s.jsx)(n.li,{children:"Extends and invokes custom methods on deployed contracts for analysis and debugging, avoiding\nthe need to reconstruct the entire state in a sandbox, and allowing selective state or code\noverrides to observe execution changes."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-wallets-for-key-management",children:"Use wallets for key management"}),"\n",(0,s.jsx)(n.p,{children:"Besu doesn't support key management inside the client. Use:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.web3signer.consensys.net/",children:"Web3Signer"})," with Besu to provide access to your key store and sign transactions."]}),"\n",(0,s.jsxs)(n.li,{children:["Third-party tools (for example, ",(0,s.jsx)(n.a,{href:"https://metamask.io/",children:"MetaMask"})," and ",(0,s.jsx)(n.a,{href:"https://web3j.io/",children:"web3j"}),") for creating accounts."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);