"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[49183],{66993:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=s(74848),n=s(28453);const o={title:"Use Elastic Stack",sidebar_position:3,description:"Using Elastic Stack (ELK) with Hyperledger Besu",tags:["private networks"]},a="Use Elastic Stack",r={id:"private-networks/how-to/monitor/elastic-stack",title:"Use Elastic Stack",description:"Using Elastic Stack (ELK) with Hyperledger Besu",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/monitor/elastic-stack.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/elastic-stack",permalink:"/23.4.1/private-networks/how-to/monitor/elastic-stack",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/monitor/elastic-stack.md",tags:[{inline:!0,label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1726521271e3,sidebarPosition:3,frontMatter:{title:"Use Elastic Stack",sidebar_position:3,description:"Using Elastic Stack (ELK) with Hyperledger Besu",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Grafana Loki",permalink:"/23.4.1/private-networks/how-to/monitor/loki"},next:{title:"Use Quorum Hibernate",permalink:"/23.4.1/private-networks/how-to/monitor/quorum-hibernate"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"use-elastic-stack",children:"Use Elastic Stack"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.elastic.co/what-is/elk-stack",children:"Elastic Stack"})," (ELK) is an open-source log management platform that is available when using the ",(0,i.jsx)(t.a,{href:"/23.4.1/private-networks/tutorials/quickstart",children:"Developer Quickstart"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/b72a0f64d685c851bf8be399a8e33bbdf0e09982/files/common/filebeat/filebeat.yml",children:"Filebeat"})," configuration ingests logs and the ",(0,i.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/b72a0f64d685c851bf8be399a8e33bbdf0e09982/files/common/metricbeat/metricbeat.yml",children:"Metricbeat"})," configuration collects metrics from the nodes at regular defined intervals and outputs them to Redis for storage. Redis provides a highly available mechanism enabling storage by any of the Elastic Beats and pulled by Logstash as required."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/b72a0f64d685c851bf8be399a8e33bbdf0e09982/files/common/logstash/pipeline/20_besu.conf",children:"pipeline configuration"})," defines the JSON format used for Besu logs and automatically picks up any new log fields."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The pipeline configuration must match the your log format. If using the default log format, you can use the ",(0,i.jsx)(t.a,{href:"https://www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html",children:"grok plugin"})," to extract the log fields."]})}),"\n",(0,i.jsx)(t.p,{children:"To see the Besu Quickstart network logs in Kibana:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/23.4.1/private-networks/tutorials/quickstart",children:"Start the Developer Quickstart with Besu"}),", selecting ELK monitoring."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open the ",(0,i.jsx)(t.a,{href:"http://localhost:5601/app/kibana#/discover",children:(0,i.jsx)(t.code,{children:"Kibana logs address"})})," listed by the sample networks ",(0,i.jsx)(t.code,{children:"list.sh"})," script. The logs display in Kibana."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Kibana",src:s(78648).A+"",width:"1513",height:"737"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},78648:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/KibanaQuickstart-6c27f6f292b9d10869daeddd552aeca0.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var i=s(96540);const n={},o=i.createContext(n);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);