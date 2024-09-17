"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[3592],{32710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(74848),r=t(28453);const s={title:"Alternative elliptic curves",description:"Using alternative elliptic curves in Besu",sidebar_position:8,tags:["private networks"]},o="Configure alternative elliptic curves",c={id:"private-networks/how-to/configure/curves",title:"Alternative elliptic curves",description:"Using alternative elliptic curves in Besu",source:"@site/versioned_docs/version-24.5.0/private-networks/how-to/configure/curves.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/curves",permalink:"/24.5.0/private-networks/how-to/configure/curves",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.0/private-networks/how-to/configure/curves.md",tags:[{inline:!0,label:"private networks",permalink:"/24.5.0/tags/private-networks"}],version:"24.5.0",lastUpdatedAt:1726521271e3,sidebarPosition:8,frontMatter:{title:"Alternative elliptic curves",description:"Using alternative elliptic curves in Besu",sidebar_position:8,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Block proposal permissioning",permalink:"/24.5.0/private-networks/how-to/configure/block-proposal-permissioning"},next:{title:"Create and send transactions",permalink:"/24.5.0/private-networks/how-to/send-transactions/"}},l={},a=[];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configure-alternative-elliptic-curves",children:"Configure alternative elliptic curves"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Configuring alternative elliptic curves is an early access feature."})}),"\n",(0,i.jsxs)(n.p,{children:["By default, Besu uses the Ethereum standard ",(0,i.jsx)(n.code,{children:"secp256k1"})," elliptic curve (EC). However, when running nodes in a private network, it is possible to configure an alternative elliptic curve."]}),"\n",(0,i.jsxs)(n.p,{children:["The configuration for what elliptic curve Besu will use is done in the network configuration section of genesis file, using the ",(0,i.jsx)(n.a,{href:"/24.5.0/public-networks/reference/genesis-items#Configuration_Items",children:(0,i.jsx)(n.code,{children:"ecCurve"})})," key:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'{\n  "genesis": {\n    "config": {\n      "ecCurve": "secp256k1",\n    [...]\n  },\n  [...]\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"danger",children:(0,i.jsxs)(n.p,{children:["All nodes in the network ",(0,i.jsx)(n.strong,{children:"MUST"})," use the same elliptic curve. Nodes with different EC configuration from the network won't be able to send messages to other nodes or verify transactions and blocks."]})}),"\n",(0,i.jsx)(n.p,{children:"Besu supports the following elliptic curves:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"secp256k1"})," (Ethereum default)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"secp256r1"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);