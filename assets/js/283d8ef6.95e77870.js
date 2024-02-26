"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[32667],{35074:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var t=r(85893),n=r(11151);const a={title:"Privacy groups",sidebar_position:2,description:"Privacy groups"},s="Privacy groups",c={id:"private-networks/concepts/privacy/privacy-groups",title:"Privacy groups",description:"Privacy groups",source:"@site/versioned_docs/version-23.7.3/private-networks/concepts/privacy/privacy-groups.md",sourceDirName:"private-networks/concepts/privacy",slug:"/private-networks/concepts/privacy/privacy-groups",permalink:"/23.7.3/private-networks/concepts/privacy/privacy-groups",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/concepts/privacy/privacy-groups.md",tags:[],version:"23.7.3",lastUpdatedAt:1708545849,formattedLastUpdatedAt:"Feb 21, 2024",sidebarPosition:2,frontMatter:{title:"Privacy groups",sidebar_position:2,description:"Privacy groups"},sidebar:"privateDocSidebar",previous:{title:"Private transaction processing",permalink:"/23.7.3/private-networks/concepts/privacy/private-transactions/processing"},next:{title:"Flexible privacy groups",permalink:"/23.7.3/private-networks/concepts/privacy/flexible-privacy"}},o={},p=[{value:"Privacy types",id:"privacy-types",level:2},{value:"Access between states",id:"access-between-states",level:3},{value:"Enterprise Ethereum Alliance privacy",id:"enterprise-ethereum-alliance-privacy",level:3},{value:"Besu-extended privacy",id:"besu-extended-privacy",level:3},{value:"Multi-tenancy",id:"multi-tenancy",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"privacy-groups",children:"Privacy groups"}),"\n",(0,t.jsx)(i.p,{children:"A privacy group is a group of nodes identified by a unique privacy group ID by Tessera. Tessera stores each private transaction with the privacy group ID."}),"\n",(0,t.jsx)(i.p,{children:"The Besu nodes maintain the public world state for the blockchain and a private state for each privacy group. The private states contain data that is not shared in the globally replicated world state."}),"\n",(0,t.jsxs)(i.admonition,{type:"caution",children:[(0,t.jsx)(i.p,{children:"The privacy group implementations described below are offchain privacy groups and cannot have their group membership updated."}),(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/23.7.3/private-networks/concepts/privacy/flexible-privacy",children:"Flexible privacy groups are an early access feature"}),"."]})]}),"\n",(0,t.jsx)(i.h2,{id:"privacy-types",children:"Privacy types"}),"\n",(0,t.jsx)(i.p,{children:"Besu implements two types of privacy:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Enterprise Ethereum Alliance (EEA) privacy, where private transactions include ",(0,t.jsx)(i.code,{children:"privateFor"})," as the recipient."]}),"\n",(0,t.jsxs)(i.li,{children:["Besu-extended privacy, where private transactions include ",(0,t.jsx)(i.code,{children:"privacyGroupId"})," as the recipient."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Both privacy types create privacy groups and store private transactions with their privacy group in Tessera."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Privacy Groups",src:r(12954).Z+"",width:"631",height:"638"})})}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"For clarity, the Tessera nodes are not shown in the previous diagram. To send private transactions, each Besu node must have an associated Tessera node."})}),"\n",(0,t.jsx)(i.h3,{id:"access-between-states",children:"Access between states"}),"\n",(0,t.jsx)(i.p,{children:"A contract in a privacy group:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Can read or write to a contract in the same privacy group."}),"\n",(0,t.jsx)(i.li,{children:"Can read from the public state including public contracts."}),"\n",(0,t.jsx)(i.li,{children:"Cannot access contracts from a different privacy group."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"A public contract cannot access a private contract."}),"\n",(0,t.jsx)(i.h3,{id:"enterprise-ethereum-alliance-privacy",children:"Enterprise Ethereum Alliance privacy"}),"\n",(0,t.jsxs)(i.p,{children:["In the privacy implementation complying with the ",(0,t.jsx)(i.a,{href:"https://entethalliance.org/technical-documents/",children:"EEA Client Specification"})," the group of nodes specified by ",(0,t.jsx)(i.code,{children:"privateFrom"})," and ",(0,t.jsx)(i.code,{children:"privateFor"})," form a privacy group with a unique privacy group ID provided by Tessera."]}),"\n",(0,t.jsx)(i.p,{children:"The previous diagram illustrates two privacy groups enabling:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A, B, and C to send transactions that are private from D."}),"\n",(0,t.jsx)(i.li,{children:"A, C, and D to send transactions that are private from B."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Using EEA-compliant privacy, to send private transactions between A, B, and C, A initializes a contract in a private transaction with B and C specified as the ",(0,t.jsx)(i.code,{children:"privateFor"})," and A specified as the ",(0,t.jsx)(i.code,{children:"privateFrom"}),". Initializing the contract creates a privacy group consisting of A, B, and C. For the ABC private state to remain consistent, A, B, and C must be included on transactions (as either ",(0,t.jsx)(i.code,{children:"privateFrom"})," or ",(0,t.jsx)(i.code,{children:"privateFor"}),") even if they are between only two of the three parties."]}),"\n",(0,t.jsxs)(i.p,{children:["To send private transactions between A, C, and D, C initializes a different contract in a private transaction with A and D specified as the ",(0,t.jsx)(i.code,{children:"privateFor"})," and C specified as the ",(0,t.jsx)(i.code,{children:"privateFrom"}),". Initializing the contract creates a privacy group consisting of A, C, and D. For the ACD private state to remain consistent, A, C, and D must be included on transactions (as either ",(0,t.jsx)(i.code,{children:"privateFrom"})," or ",(0,t.jsx)(i.code,{children:"privateFor"}),") even if they are between only two of the three parties."]}),"\n",(0,t.jsx)(i.h3,{id:"besu-extended-privacy",children:"Besu-extended privacy"}),"\n",(0,t.jsxs)(i.p,{children:["The Besu-extended privacy implementation creates a privacy group using ",(0,t.jsx)(i.a,{href:"/23.7.3/public-networks/reference/api/#priv_createprivacygroup",children:(0,t.jsx)(i.code,{children:"priv_createPrivacyGroup"})})," with private transactions sent to the privacy group ID."]}),"\n",(0,t.jsx)(i.p,{children:"Using the same privacy groups as in the previous example."}),"\n",(0,t.jsx)(i.p,{children:"Using Besu-extended privacy, to send private transactions between A, B, and C, A creates a privacy group consisting of A, B, and C. The privacy group ID is specified when sending private transactions and A, B, and C are recipients of all private transactions sent to the privacy group."}),"\n",(0,t.jsx)(i.p,{children:"To send private transactions between A, C, and D, A creates a privacy group consisting of A, C, and D. The privacy group ID of this group is specified when sending private transactions with A, C, and D as recipients."}),"\n",(0,t.jsx)(i.h2,{id:"multi-tenancy",children:"Multi-tenancy"}),"\n",(0,t.jsxs)(i.p,{children:["When using ",(0,t.jsx)(i.a,{href:"/23.7.3/private-networks/concepts/privacy/multi-tenancy",children:"multi-tenancy"})," with privacy groups, each user provides a JSON Web Token (JWT) which allows Besu to check that the user has access to functionality and data associated with a privacy group."]})]})}function l(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},12954:(e,i,r)=>{r.d(i,{Z:()=>t});const t=r.p+"assets/images/PrivacyGroups-f8b035c1df4b611ec108a113587611dc.png"},11151:(e,i,r)=>{r.d(i,{Z:()=>c,a:()=>s});var t=r(67294);const n={},a=t.createContext(n);function s(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);