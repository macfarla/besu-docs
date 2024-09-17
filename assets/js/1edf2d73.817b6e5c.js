"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[6699],{65415:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(74848),t=n(28453);const i={title:"Validators",description:"Configuring validators in production networks",sidebar_position:4,tags:["private networks"]},s="Configure validators in a production network",a={id:"private-networks/how-to/configure/validators",title:"Validators",description:"Configuring validators in production networks",source:"@site/versioned_docs/version-23.7.3/private-networks/how-to/configure/validators.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/validators",permalink:"/23.7.3/private-networks/how-to/configure/validators",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/how-to/configure/validators.md",tags:[{inline:!0,label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1726521271e3,sidebarPosition:4,frontMatter:{title:"Validators",description:"Configuring validators in production networks",sidebar_position:4,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Bootnodes",permalink:"/23.7.3/private-networks/how-to/configure/bootnodes"},next:{title:"Pre-deploy a contract",permalink:"/23.7.3/private-networks/how-to/configure/contracts"}},d={},l=[{value:"Number of validators required",id:"number-of-validators-required",level:2},{value:"Adding and removing validators",id:"adding-and-removing-validators",level:2},{value:"Validators as bootnodes",id:"validators-as-bootnodes",level:2}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"configure-validators-in-a-production-network",children:"Configure validators in a production network"}),"\n",(0,r.jsxs)(o.p,{children:["As when ",(0,r.jsx)(o.a,{href:"/23.7.3/private-networks/how-to/configure/bootnodes",children:"configuring bootnodes"}),":"]}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Create the ",(0,r.jsx)(o.a,{href:"/23.7.3/public-networks/concepts/node-keys",children:"node key pair"})," (that is, the private and public key) before starting the validator."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"When creating validators in the cloud (for example, AWS or Azure), attempt to assign static IP addresses to them. If your network is:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Publicly accessible, assign an elastic IP address."}),"\n",(0,r.jsx)(o.li,{children:"Internal only, specify a private IP address when you create the instance and record this IP address."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"We recommend storing validator configuration under source control."}),"\n",(0,r.jsx)(o.h2,{id:"number-of-validators-required",children:"Number of validators required"}),"\n",(0,r.jsxs)(o.p,{children:["Ensure you configure enough validators to allow for redundancy. IBFT 2.0 tolerates ",(0,r.jsx)(o.code,{children:"f = (n-1)/3"})," faulty validators, where:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"f"})," is the number of faulty validators"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"n"})," is the number of validators."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"adding-and-removing-validators",children:"Adding and removing validators"}),"\n",(0,r.jsxs)(o.p,{children:["You can ",(0,r.jsx)(o.a,{href:"/23.7.3/private-networks/how-to/configure/consensus/ibft#add-and-remove-validators",children:"vote validators in or out of the validator pool"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"validators-as-bootnodes",children:"Validators as bootnodes"}),"\n",(0,r.jsxs)(o.p,{children:["Validators can also be bootnodes. Other than the ",(0,r.jsx)(o.a,{href:"/23.7.3/private-networks/how-to/configure/bootnodes",children:"usual configuration for bootnodes"}),", you do not need to specify any extra configuration when a validator is also a bootnode."]}),"\n",(0,r.jsx)(o.p,{children:"If you remove a validator that is also a bootnode, ensure there are enough remaining bootnodes on the network."})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>a});var r=n(96540);const t={},i=r.createContext(t);function s(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);