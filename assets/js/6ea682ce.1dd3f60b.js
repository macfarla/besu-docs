"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[7019],{28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}},41081:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/CliqueOneIntialSigner-3b59001d390fc935c2852c8506507a5a.png"},51154:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"private-networks/how-to/configure/consensus/clique","title":"Clique","description":"Besu Clique Proof-of-Authority (PoA) consensus protocol implementation","source":"@site/docs/private-networks/how-to/configure/consensus/clique.md","sourceDirName":"private-networks/how-to/configure/consensus","slug":"/private-networks/how-to/configure/consensus/clique","permalink":"/private-networks/how-to/configure/consensus/clique","draft":false,"unlisted":false,"editUrl":"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/configure/consensus/clique.md","tags":[{"inline":true,"label":"private networks","permalink":"/tags/private-networks"}],"version":"current","lastUpdatedAt":1744783165000,"sidebarPosition":4,"frontMatter":{"title":"Clique","description":"Besu Clique Proof-of-Authority (PoA) consensus protocol implementation","sidebar_position":4,"path":"blob/master/config/src/main/resources/","source":"rinkeby.json","tags":["private networks"]},"sidebar":"privateDocSidebar","previous":{"title":"IBFT 2.0","permalink":"/private-networks/how-to/configure/consensus/ibft"},"next":{"title":"Add and remove validators without voting","permalink":"/private-networks/how-to/configure/consensus/add-validators-without-voting"}}');var r=i(74848),t=i(28453),o=i(65537),l=i(79329);const c={title:"Clique",description:"Besu Clique Proof-of-Authority (PoA) consensus protocol implementation",sidebar_position:4,path:"blob/master/config/src/main/resources/",source:"rinkeby.json",tags:["private networks"]},a="Configure Clique consensus",d={},h=[{value:"Genesis file",id:"genesis-file",level:2},{value:"Skip empty blocks",id:"skip-empty-blocks",level:3},{value:"Extra data",id:"extra-data",level:3},{value:"One initial signer",id:"one-initial-signer",level:3},{value:"Two initial signers",id:"two-initial-signers",level:3},{value:"Post-Merge configuration",id:"post-merge-configuration",level:3},{value:"Connect to a Clique network",id:"connect-to-a-clique-network",level:2},{value:"Add and remove signers",id:"add-and-remove-signers",level:2},{value:"Add a signer",id:"add-a-signer",level:3},{value:"Remove a signer",id:"remove-a-signer",level:3},{value:"Epoch transition",id:"epoch-transition",level:3},{value:"Transitions",id:"transitions",level:2},{value:"Configure block time on an existing network",id:"configure-block-time-on-an-existing-network",level:3},{value:"Configure empty blocks on an existing network",id:"configure-empty-blocks-on-an-existing-network",level:3},{value:"Limitations",id:"limitations",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"configure-clique-consensus",children:"Configure Clique consensus"})}),"\n",(0,r.jsxs)(n.p,{children:["Besu implements the ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-225",children:"Clique"})," proof of authority (PoA) ",(0,r.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/",children:"consensus protocol"}),". Private networks can use Clique."]}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Clique is not suitable for production environments. Use only in development environments."})}),"\n",(0,r.jsxs)(n.p,{children:["In Clique networks, approved accounts, known as signers, validate transactions and blocks. Signers take turns to create the next block. Existing signers propose and vote to ",(0,r.jsx)(n.a,{href:"#add-and-remove-signers",children:"add or remove signers"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can ",(0,r.jsx)(n.a,{href:"/private-networks/tutorials/clique",children:"create a private network using Clique"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"genesis-file",children:"Genesis file"}),"\n",(0,r.jsxs)(n.p,{children:["To use Clique in a private network, Besu requires a Clique ",(0,r.jsx)(n.a,{href:"/public-networks/concepts/genesis-file",children:"genesis file"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"A Clique genesis file defines properties specific to Clique."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="Example Clique genesis file"',children:'{\n  "config": {\n    "chainId": 1981,\n    "berlinBlock": 0,\n    "clique": {\n      "blockperiodseconds": 15,\n      "epochlength": 30000,\n      "createemptyblocks": true\n    }\n  },\n  "coinbase": "0x0000000000000000000000000000000000000000",\n  "difficulty": "0x1",\n  "extraData": "0x000000000000000000000000000000000000000000000000000000000000000001a54556254bfa3db2daa7673435ec63649925c50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  "gasLimit": "0x1fffffffffffff",\n  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n  "nonce": "0x0",\n  "timestamp": "0x5c51a607",\n  "alloc": {},\n  "number": "0x0",\n  "gasUsed": "0x0",\n  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The properties specific to Clique are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockperiodseconds"})," - The block time, in seconds."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"epochlength"})," - The number of blocks after which to reset all votes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"createemptyblocks"})," - Set to false to ",(0,r.jsx)(n.a,{href:"#skip-empty-blocks",children:"skip creating empty blocks"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"extraData"})," - ",(0,r.jsx)(n.a,{href:"#extra-data",children:"Extra data"})," including the initial signers."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"skip-empty-blocks",children:"Skip empty blocks"}),"\n",(0,r.jsx)(n.p,{children:"By default, Clique creates empty blocks. For large private networks using Clique, skipping empty blocks can reduce the storage needed."}),"\n",(0,r.jsxs)(n.p,{children:["To skip creating empty blocks, set ",(0,r.jsx)(n.code,{children:"createemptyblocks"})," to ",(0,r.jsx)(n.code,{children:"false"})," in the genesis file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    "londonBlock": 0,\n    "clique": {\n      "blockperiodseconds": 10,\n      "epochlength": 30000,\n      "createemptyblocks": false\n    }\n  },\n...\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["All validators must have the same value for ",(0,r.jsx)(n.code,{children:"createemptyblocks"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"extra-data",children:"Extra data"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"extraData"})," property consists of:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"0x prefix."}),"\n",(0,r.jsx)(n.li,{children:"32 bytes of vanity data."}),"\n",(0,r.jsx)(n.li,{children:"A list of initial signer addresses (at least one initial signer is required). 20 bytes for each signer."}),"\n",(0,r.jsx)(n.li,{children:"65 bytes for the proposer signature. In the genesis block there is no initial proposer, so the proposer signature is all zeros."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"one-initial-signer",children:"One initial signer"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"One Initial Signer",src:i(41081).A+"",width:"1376",height:"586"})}),"\n",(0,r.jsx)(n.h3,{id:"two-initial-signers",children:"Two initial signers"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Two Initial Signers",src:i(55500).A+"",width:"1376",height:"678"})}),"\n",(0,r.jsx)(n.h3,{id:"post-merge-configuration",children:"Post-Merge configuration"}),"\n",(0,r.jsxs)(n.p,{children:["After ",(0,r.jsx)(n.a,{href:"https://ethereum.org/en/upgrades/merge/",children:"The Merge"}),", the following block fields are modified or deprecated. Their fields ",(0,r.jsx)(n.strong,{children:"must"})," contain only the constant values from the following chart."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Constant value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ommersHash"})})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"= Keccak256(RLP([]))"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"difficulty"})})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"0"})}),(0,r.jsxs)(n.td,{children:["Replaced with ",(0,r.jsx)(n.code,{children:"prevrandao"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"mixHash"})})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"0x0000000000000000000000000000000000000000000000000000000000000000"})}),(0,r.jsxs)(n.td,{children:["Replaced with ",(0,r.jsx)(n.code,{children:"prevrandao"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"nonce"})})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"0x0000000000000000"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ommers"})})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RLP([]) = 0xc0"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, ",(0,r.jsx)(n.a,{href:"#extra-data",children:(0,r.jsx)(n.code,{children:"extraData"})})," is limited to 32 bytes of vanity data after The Merge."]}),"\n",(0,r.jsx)(n.h2,{id:"connect-to-a-clique-network",children:"Connect to a Clique network"}),"\n",(0,r.jsxs)(n.p,{children:["To start a node on a Clique private network, use the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#genesis-file",children:(0,r.jsx)(n.code,{children:"--genesis-file"})})," option to specify the custom genesis file."]}),"\n",(0,r.jsx)(n.h2,{id:"add-and-remove-signers",children:"Add and remove signers"}),"\n",(0,r.jsxs)(n.p,{children:["Existing signers propose and vote to add or remove validators using the Clique JSON-RPC API methods. Enable the HTTP interface with ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-enabled",children:(0,r.jsx)(n.code,{children:"--rpc-http-enabled"})})," or the WebSocket interface with ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-ws-enabled",children:(0,r.jsx)(n.code,{children:"--rpc-ws-enabled"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The Clique API methods are disabled by default. To enable them, specify the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-api",children:(0,r.jsx)(n.code,{children:"--rpc-http-api"})})," or ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-ws-api",children:(0,r.jsx)(n.code,{children:"--rpc-ws-api"})})," option and include ",(0,r.jsx)(n.code,{children:"CLIQUE"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The methods to add or remove signers are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/private-networks/reference/api/#clique_propose",children:(0,r.jsx)(n.code,{children:"clique_propose"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/private-networks/reference/api/#clique_getsigners",children:(0,r.jsx)(n.code,{children:"clique_getSigners"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/private-networks/reference/api/#clique_discard",children:(0,r.jsx)(n.code,{children:"clique_discard"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To view signer metrics for a specified block range, call ",(0,r.jsx)(n.a,{href:"/private-networks/reference/api/#clique_getsignermetrics",children:(0,r.jsx)(n.code,{children:"clique_getSignerMetrics"})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"add-a-signer",children:"Add a signer"}),"\n",(0,r.jsxs)(n.p,{children:["To propose adding a signer to a Clique network, call ",(0,r.jsx)(n.a,{href:"/private-networks/reference/api/#clique_propose",children:(0,r.jsx)(n.code,{children:"clique_propose"})}),", specifying the address of the proposed signer and ",(0,r.jsx)(n.code,{children:"true"}),". A majority of signers must execute the call."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="JSON-RPC clique_propose request example"',children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"clique_propose","params":["0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73", true], "id":1}\' <JSON-RPC-endpoint:port>\n'})}),"\n",(0,r.jsx)(n.p,{children:"When the signer creates the next block, the signer adds a vote to the block for the proposed signer."}),"\n",(0,r.jsx)(n.p,{children:"When more than 50% of the existing signers propose adding the signer, with their votes distributed in blocks, the signer can begin signing blocks."}),"\n",(0,r.jsxs)(n.p,{children:["To return a list of signers and confirm the addition of a proposed signer, call ",(0,r.jsx)(n.a,{href:"/private-networks/reference/api/#clique_getsigners",children:(0,r.jsx)(n.code,{children:"clique_getSigners"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="JSON-RPC clique_getSigners request example"',children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"clique_getSigners","params":["latest"], "id":1}\' <JSON-RPC-endpoint:port>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To discard your proposal after confirming the addition of a signer, call ",(0,r.jsx)(n.a,{href:"/private-networks/reference/api/#clique_discard",children:(0,r.jsx)(n.code,{children:"clique_discard"})})," specifying the address of the proposed signer."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="JSON-RPC clique_discard request example"',children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"clique_discard","params":["0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73"], "id":1}\' <JSON-RPC-endpoint:port>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"remove-a-signer",children:"Remove a signer"}),"\n",(0,r.jsxs)(n.p,{children:["The process for removing a signer from a Clique network is the same as ",(0,r.jsx)(n.a,{href:"#add-a-signer",children:"adding a signer"}),", except you specify ",(0,r.jsx)(n.code,{children:"false"})," as the second parameter of ",(0,r.jsx)(n.a,{href:"/private-networks/reference/api/#clique_propose",children:(0,r.jsx)(n.code,{children:"clique_propose"})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"epoch-transition",children:"Epoch transition"}),"\n",(0,r.jsx)(n.p,{children:"At each epoch transition, Clique discards all pending votes collected from received blocks. Existing proposals remain in effect and signers re-add their vote the next time they create a block."}),"\n",(0,r.jsxs)(n.p,{children:["Define the number of blocks between epoch transitions in the ",(0,r.jsx)(n.a,{href:"#genesis-file",children:"Clique genesis file"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"transitions",children:"Transitions"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"transitions"})," genesis configuration item allows you to specify a future block number at which to\nchange the Clique network configuration in an existing network.\nFor example, you can update the ",(0,r.jsx)(n.a,{href:"#configure-block-time-on-an-existing-network",children:"block time"})," and\nwhether to ",(0,r.jsx)(n.a,{href:"#configure-empty-blocks-on-an-existing-network",children:"create empty blocks"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Do not specify a transition block in the past.\nSpecifying a transition block in the past can result in unexpected behavior, such as causing the\nnetwork to fork."})}),"\n",(0,r.jsx)(n.h3,{id:"configure-block-time-on-an-existing-network",children:"Configure block time on an existing network"}),"\n",(0,r.jsxs)(n.p,{children:["To update an existing network with a new ",(0,r.jsx)(n.code,{children:"blockperiodseconds"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Stop all nodes in the network."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.a,{href:"#genesis-file",children:"genesis file"}),", add the ",(0,r.jsx)(n.code,{children:"transitions"})," configuration item where:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<FutureBlockNumber>"})," is the upcoming block at which to change ",(0,r.jsx)(n.code,{children:"blockperiodseconds"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<NewValue>"})," is the updated value for ",(0,r.jsx)(n.code,{children:"blockperiodseconds"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(l.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "clique": {\n      "blockperiodseconds": 3,\n      "epochlength": 30,\n      "requesttimeoutseconds": 6,\n      "createemptyblocks": true\n    },\n    "transitions": {\n      "clique": [\n        {\n          "block": <FutureBlockNumber>,\n          "blockperiodseconds": <NewValue>\n        }\n      ]\n    }\n  },\n  ...\n}\n'})})}),(0,r.jsx)(l.A,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "clique": {\n      "blockperiodseconds": 3,\n      "epochlength": 30,\n      "requesttimeoutseconds": 6,\n      "createemptyblocks": true\n    },\n    "transitions": {\n      "clique": [\n        {\n          "block": 3,\n          "blockperiodseconds": 1\n        },\n        {\n          "block": 6,\n          "blockperiodseconds": 2\n        },\n      ]\n    }\n  },\n  ...\n}\n'})})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Restart all nodes in the network using the updated genesis file."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To verify the changes after the transition block, view the Besu logs and check that the time\ndifference between each block matches the updated block period."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"configure-empty-blocks-on-an-existing-network",children:"Configure empty blocks on an existing network"}),"\n",(0,r.jsxs)(n.p,{children:["To update an existing network with a new ",(0,r.jsx)(n.a,{href:"#skip-empty-blocks",children:(0,r.jsx)(n.code,{children:"createemptyblocks"})}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Stop all nodes in the network."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.a,{href:"#genesis-file",children:"genesis file"}),", add the ",(0,r.jsx)(n.code,{children:"transitions"})," configuration item where:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<FutureBlockNumber>"})," is the upcoming block at which to change ",(0,r.jsx)(n.code,{children:"createemptyblocks"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<NewValue>"})," is the updated value for ",(0,r.jsx)(n.code,{children:"createemptyblocks"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(l.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "clique": {\n      "blockperiodseconds": 3,\n      "epochlength": 30,\n      "requesttimeoutseconds": 6,\n      "createemptyblocks": true\n    },\n    "transitions": {\n      "clique": [\n        {\n          "block": <FutureBlockNumber>,\n          "createemptyblocks": <NewValue>\n        }\n      ]\n    }\n  },\n  ...\n}\n'})})}),(0,r.jsx)(l.A,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "clique": {\n      "blockperiodseconds": 3,\n      "epochlength": 30,\n      "requesttimeoutseconds": 6,\n      "createemptyblocks": true\n    },\n    "transitions": {\n      "clique": [\n        {\n          "block": 10,\n          "createemptyblocks": false\n        }\n      ]\n    }\n  },\n  ...\n}\n'})})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Restart all nodes in the network using the updated genesis file."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsx)(n.p,{children:"In Clique, blocks created by in-turn validators are published immediately. Out-of-turn validators create blocks that are published after a short delay. In-turn blocks have a higher difficulty than out-of-turn blocks, which allows small forks to resolve to the chain with more in-turn blocks."}),"\n",(0,r.jsx)(n.p,{children:"However, when the out-of-turn delay is shorter than the block propagation delay, out-of-turn blocks may be published before in-turn blocks. This may cause large, irresolvable forks in a network."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["We recommend using a more updated consensus protocol such as ",(0,r.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0"})," or ",(0,r.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/qbft",children:"QBFT"}),"."]})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},55500:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/CliqueTwoIntialSigners-a347015db38fec2d68ff5e188b66deaa.png"},65537:(e,n,i)=>{i.d(n,{A:()=>w});var s=i(96540),r=i(18215),t=i(65627),o=i(56347),l=i(50372),c=i(30604),a=i(11861),d=i(78749);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:s,default:r}}=e;return{value:n,label:i,attributes:s,default:r}}))}(i);return function(e){const n=(0,a.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:i}=e;const r=(0,o.W6)(),t=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,c.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function f(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,t=u(e),[o,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[a,h]=x({queryString:i,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,d.Dv)(i);return[r,(0,s.useCallback)((e=>{i&&t.set(e)}),[i,t])]}({groupId:r}),j=(()=>{const e=a??f;return p({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{j&&c(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),g(e)}),[h,g,t]),tabValues:t}}var g=i(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=i(74848);function b(e){let{className:n,block:i,selectedValue:s,selectValue:o,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,t.a_)(),d=e=>{const n=e.currentTarget,i=c.indexOf(n),r=l[i].value;r!==s&&(a(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=c.indexOf(e.currentTarget)+1;n=c[i]??c[0];break}case"ArrowLeft":{const i=c.indexOf(e.currentTarget)-1;n=c[i]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},n),children:l.map((e=>{let{value:n,label:i,attributes:t}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...t,className:(0,r.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":s===n}),children:i??n},n)}))})}function k(e){let{lazy:n,children:i,selectedValue:t}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=f(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,m.jsx)(b,{...n,...e}),(0,m.jsx)(k,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,m.jsx)(v,{...e,children:h(e.children)},String(n))}},79329:(e,n,i)=>{i.d(n,{A:()=>o});i(96540);var s=i(18215);const r={tabItem:"tabItem_Ymn6"};var t=i(74848);function o(e){let{children:n,hidden:i,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:i,children:n})}}}]);