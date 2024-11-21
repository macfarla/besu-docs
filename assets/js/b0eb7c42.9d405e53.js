"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[5580],{2414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(74848),o=t(28453);const i={title:"Node clients",sidebar_position:1,description:"Learn about execution and consensus clients.",tags:["public networks"]},c="Node clients",r={id:"public-networks/concepts/node-clients",title:"Node clients",description:"Learn about execution and consensus clients.",source:"@site/docs/public-networks/concepts/node-clients.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/node-clients",permalink:"/public-networks/concepts/node-clients",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/concepts/node-clients.md",tags:[{inline:!0,label:"public networks",permalink:"/tags/public-networks"}],version:"current",lastUpdatedAt:1730695412e3,sidebarPosition:1,frontMatter:{title:"Node clients",sidebar_position:1,description:"Learn about execution and consensus clients.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Concepts",permalink:"/public-networks/concepts"},next:{title:"Proof of stake consensus",permalink:"/public-networks/concepts/proof-of-stake/"}},a={},l=[{value:"Execution and consensus clients",id:"execution-and-consensus-clients",level:2},{value:"Execution clients",id:"execution-clients",level:3},{value:"Consensus clients",id:"consensus-clients",level:3},{value:"Validator clients",id:"validator-clients",level:4}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"node-clients",children:"Node clients"})}),"\n",(0,s.jsxs)(n.p,{children:["Ethereum's Proof of Stake (PoS) protocol leverages two separate P2P networks supporting\nseparate clients. Execution clients gossip transactions over their network, enabling them to manage\ntheir local transaction pool. Consensus clients gossip blocks over their network, enabling consensus\nand chain growth. A validator node also runs the ",(0,s.jsx)(n.a,{href:"#validator-clients",children:"validator client"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["As as result of ",(0,s.jsx)(n.a,{href:"https://ethereum.org/en/upgrades/merge/",children:"the 2022 Merge"}),", Ethereum Mainnet\ntransitioned from Proof of Work (PoW) to ",(0,s.jsx)(n.a,{href:"/public-networks/concepts/proof-of-stake/",children:"PoS"})," consensus."]})}),"\n",(0,s.jsx)(n.h2,{id:"execution-and-consensus-clients",children:"Execution and consensus clients"}),"\n",(0,s.jsxs)(n.p,{children:["Under PoS, a full Ethereum Mainnet node is a combination of an execution client (previously called\nan ",(0,s.jsx)(n.a,{href:"https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/",children:"Eth1 client"})," client) and a\nconsensus client (previously called an\n",(0,s.jsx)(n.a,{href:"https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/",children:"Eth2 client"}),"). The consensus client\nuses the ",(0,s.jsx)(n.a,{href:"/public-networks/how-to/use-engine-api",children:"Engine API"})," to communicate with the execution client."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Ethereum Merge node",src:t(12573).A+"",width:"1542",height:"1134"})}),"\n",(0,s.jsx)(n.h3,{id:"execution-clients",children:"Execution clients"}),"\n",(0,s.jsxs)(n.p,{children:["Execution clients, such as Besu, manage the execution layer, including executing transactions and\nupdating the world state. Execution clients serve ",(0,s.jsx)(n.a,{href:"/public-networks/reference/engine-api/",children:"JSON-RPC API"}),"\nrequests and communicate with each other P2P."]}),"\n",(0,s.jsx)(n.p,{children:"Besu is an execution client that you can run with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/public-networks/get-started/connect/mainnet",children:"Any consensus client on Mainnet"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/public-networks/get-started/connect/testnet",children:"Any consensus client on a testnet"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/public-networks/tutorials/besu-teku-mainnet",children:"Teku on Mainnet"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/public-networks/tutorials/besu-teku-testnet",children:"Teku on a testnet"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"consensus-clients",children:"Consensus clients"}),"\n",(0,s.jsxs)(n.p,{children:["The consensus client (also known as the beacon node, CL client or, formerly, the Eth2 client)\nimplements the PoS consensus algorithm, which enables the network to achieve agreement based on\nvalidated data from the execution client. Consensus clients serve\n",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/reference/rest",children:"REST API"})," requests and\ncommunicate with each other P2P."]}),"\n",(0,s.jsxs)(n.p,{children:["Consensus clients, such as ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/en/latest/",children:"Teku"})," contain beacon node\nimplementations. The beacon node is the primary link to the ",(0,s.jsx)(n.a,{href:"https://ethereum.org/en/upgrades/beacon-chain/",children:"Beacon Chain"})," (i.e. the consensus layer).\nA consensus client can run without the (bundled) validator to keep up with the head of the chain,\nallowing the node to stay synced."]}),"\n",(0,s.jsx)(n.h4,{id:"validator-clients",children:"Validator clients"}),"\n",(0,s.jsxs)(n.p,{children:["To operate a validator node, node operators must also run a validator client and deposit the\n",(0,s.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/#validators",children:"required ETH"})," into the\ndeposit contract. The validator client handles attestations and block proposal \u2014 i.e. performs\n",(0,s.jsx)(n.a,{href:"/public-networks/concepts/proof-of-stake/",children:"validator duties"})," on the consensus layer.\nThe validator client may either be run\n",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/get-started/start-teku#start-the-clients-in-a-single-process",children:"in the same process"}),"\nas the beacon node or ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/get-started/start-teku#run-the-clients-separately",children:"separately"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Validators earn ",(0,s.jsx)(n.a,{href:"https://www.blocknative.com/ethereum-staking-calculator",children:"rewards"})," for performing\n",(0,s.jsx)(n.a,{href:"/public-networks/concepts/proof-of-stake/",children:"validator duties"}),", and\n",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/reference/cli#validators-proposer-default-fee-recipient",children:"fee recipients"}),"\nalso earn rewards for the inclusion of execution layer transactions."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},12573:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Execution-Consensus-Clients-EngineAPI-92aa028e4d500a83a7887cdcf7724db8.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(96540);const o={},i=s.createContext(o);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);