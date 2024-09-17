"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[1893],{30021:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>a});var s=i(74848),r=i(28453);const o={title:"Permissioning plugin",description:"Plugin based permissioning",sidebar_position:2,tags:["private networks"]},t="Permissioning plugin",p={id:"private-networks/concepts/permissioning/plugin",title:"Permissioning plugin",description:"Plugin based permissioning",source:"@site/versioned_docs/version-24.1.0/private-networks/concepts/permissioning/plugin.md",sourceDirName:"private-networks/concepts/permissioning",slug:"/private-networks/concepts/permissioning/plugin",permalink:"/24.1.0/private-networks/concepts/permissioning/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/private-networks/concepts/permissioning/plugin.md",tags:[{inline:!0,label:"private networks",permalink:"/24.1.0/tags/private-networks"}],version:"24.1.0",lastUpdatedAt:1726521271e3,sidebarPosition:2,frontMatter:{title:"Permissioning plugin",description:"Plugin based permissioning",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Onchain permissioning",permalink:"/24.1.0/private-networks/concepts/permissioning/onchain"},next:{title:"Public key infrastructure",permalink:"/24.1.0/private-networks/concepts/pki"}},c={},a=[{value:"Connection permissioning",id:"connection-permissioning",level:2},{value:"Message permissioning",id:"message-permissioning",level:2},{value:"Register your plugin",id:"register-your-plugin",level:2}];function g(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"permissioning-plugin",children:"Permissioning plugin"}),"\n",(0,s.jsxs)(n.p,{children:["You can define complex ",(0,s.jsx)(n.a,{href:"/24.1.0/private-networks/concepts/permissioning/",children:"permissioning"})," solutions by building a plugin that extends Hyperledger Besu functionality."]}),"\n",(0,s.jsxs)(n.p,{children:["The plugin API provides a ",(0,s.jsx)(n.code,{children:"PermissioningService"})," interface that currently supports connection permissioning and message permissioning."]}),"\n",(0,s.jsx)(n.h2,{id:"connection-permissioning",children:"Connection permissioning"}),"\n",(0,s.jsx)(n.p,{children:"Use connection permissioning when deciding whether to restrict node access to known participants only."}),"\n",(0,s.jsx)(n.h2,{id:"message-permissioning",children:"Message permissioning"}),"\n",(0,s.jsx)(n.p,{children:"Use message permissioning to propagate different types of devP2P messages to particular nodes. For example, this can be used to prevent pending transactions from being forwarded to other nodes."}),"\n",(0,s.jsx)(n.h2,{id:"register-your-plugin",children:"Register your plugin"}),"\n",(0,s.jsxs)(n.p,{children:["To enable permissioning in your plugin, implement the ",(0,s.jsx)(n.code,{children:"PermissioningService"})," interface and register your providers."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"@AutoService(BesuPlugin.class)\npublic class TestPermissioningPlugin implements BesuPlugin {\n    PermissioningService service;\n\n    @Override\n    public void register(final BesuContext context) {\n        service = context.getService(PermissioningService.class).get();\n    }\n\n    @Override\n    public void start() {\n        service.registerNodePermissioningProvider((sourceEnode, destinationEnode) -> {\n            // perform logic for node permissioning\n            return true;\n        });\n\n        service.registerNodeMessagePermissioningProvider((destinationEnode, code) -> {\n            // perform logic for message permissioning\n            return true;\n        });\n    }\n\n    @Override\n    public void stop() {}\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>p});var s=i(96540);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);