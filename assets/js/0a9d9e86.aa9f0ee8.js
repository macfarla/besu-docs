"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[52031],{69502:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>p});var s=i(85893),o=i(11151);const t={title:"Permissioning",sidebar_position:1,description:"Besu permissioning feature",tags:["private networks"]},r="Permissioning",a={id:"private-networks/concepts/permissioning/index",title:"Permissioning",description:"Besu permissioning feature",source:"@site/versioned_docs/version-24.1.0/private-networks/concepts/permissioning/index.md",sourceDirName:"private-networks/concepts/permissioning",slug:"/private-networks/concepts/permissioning/",permalink:"/24.1.0/private-networks/concepts/permissioning/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/private-networks/concepts/permissioning/index.md",tags:[{label:"private networks",permalink:"/24.1.0/tags/private-networks"}],version:"24.1.0",lastUpdatedAt:1716329575,formattedLastUpdatedAt:"May 21, 2024",sidebarPosition:1,frontMatter:{title:"Permissioning",sidebar_position:1,description:"Besu permissioning feature",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Privacy plugin",permalink:"/24.1.0/private-networks/concepts/privacy/plugin"},next:{title:"Onchain permissioning",permalink:"/24.1.0/private-networks/concepts/permissioning/onchain"}},c={},p=[{value:"Node permissioning",id:"node-permissioning",level:2},{value:"Account permissioning",id:"account-permissioning",level:2},{value:"Specify permissioning",id:"specify-permissioning",level:2},{value:"Local",id:"local",level:3},{value:"Onchain",id:"onchain",level:3}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"permissioning",children:"Permissioning"}),"\n",(0,s.jsx)(n.p,{children:"A permissioned network enables node permissioning and account permissioning, allowing only specified nodes and accounts to access the network."}),"\n",(0,s.jsxs)(n.admonition,{title:"Permissioning is not privacy",type:"caution",children:[(0,s.jsx)(n.p,{children:"In peer-to-peer networks, node permissioning enforces rules on nodes you control."}),(0,s.jsx)(n.p,{children:"Permissioning requires a distributed network of trust across the network where participants agree to follow the rules. One bad actor can decide not to follow the rules. Nodes can take action to prevent the bad actor adding to the chain but they cannot prevent the bad actor from allowing access to the chain."}),(0,s.jsxs)(n.p,{children:["Besu also implements ",(0,s.jsx)(n.a,{href:"/24.1.0/private-networks/concepts/privacy/",children:"privacy"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"node-permissioning",children:"Node permissioning"}),"\n",(0,s.jsx)(n.p,{children:"Use node permissioning to restrict access to known participants only."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Node Permissioning",src:i(51316).Z+"",width:"1700",height:"1058"})}),"\n",(0,s.jsx)(n.h2,{id:"account-permissioning",children:"Account permissioning"}),"\n",(0,s.jsx)(n.p,{children:"Use account permissioning to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Enforce onboarding or identity requirements."}),"\n",(0,s.jsx)(n.li,{children:"Suspend accounts."}),"\n",(0,s.jsx)(n.li,{children:"Restrict the actions an account can perform."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Account Permissioning",src:i(95696).Z+"",width:"1700",height:"1170"})}),"\n",(0,s.jsx)(n.h2,{id:"specify-permissioning",children:"Specify permissioning"}),"\n",(0,s.jsxs)(n.p,{children:["You can specify permissioning ",(0,s.jsx)(n.a,{href:"#local",children:"locally"})," or ",(0,s.jsx)(n.a,{href:"#onchain",children:"onchain"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"local",children:"Local"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/24.1.0/private-networks/how-to/use-permissioning/local",children:"Local permissioning"})," works at the node level. Each node in the network has a ",(0,s.jsx)(n.a,{href:"/24.1.0/private-networks/how-to/use-permissioning/local#permissions-configuration-file",children:"permissions configuration file"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Local permissioning affects your node but not the rest of the network. Use local permissioning to restrict use of your node (that is, the resources under your control). For example, customers able to access your node."}),"\n",(0,s.jsx)(n.p,{children:"Local permissioning does not require coordination with the rest of the network and you can act immediately to protect your node. Your rules are not enforced in blocks produced by other nodes."}),"\n",(0,s.jsx)(n.h3,{id:"onchain",children:"Onchain"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/24.1.0/private-networks/concepts/permissioning/onchain",children:"Onchain permissioning"})," works through a smart contract on the network. Specifying permissioning onchain enables all nodes to read and update permissioning configuration from one location."]}),"\n",(0,s.jsx)(n.p,{children:"Onchain permissioning requires coordination to update the rules. The network might not be able to act immediately (for example, the smart contract might enforce a minimum of number of votes before changing permissioning rules)."}),"\n",(0,s.jsx)(n.p,{children:"When you update onchain permissioning, the update applies across the network and new blocks abide by the updated rules. For example, blocked accounts can no longer add transactions to the chain."}),"\n",(0,s.jsx)(n.p,{children:"The following diagram illustrates applying local and onchain permissioning rules."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Permissioning Flow",src:i(28669).Z+"",width:"1656",height:"1134"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28669:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/PermissioningFlow-083dd4871a10fb66a7bf7a0e7de03a1d.png"},95696:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/enterprise-ethereum-account-permissioning-5c19ac3228fd7a89cda25b53f80b890b.png"},51316:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/node-permissioning-bad-actor-a0e342071abf311e9f1f52e96581e6f6.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var s=i(67294);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);