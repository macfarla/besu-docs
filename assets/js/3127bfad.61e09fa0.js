"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[51109],{31873:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=r(74848),a=r(28453),s=r(11470),l=r(19365);const i={title:"Use GraphQL over HTTP",sidebar_position:3,description:"How to access the Hyperledger Besu API using GraphQL",tags:["public networks","private networks"]},o="Use GraphQL over HTTP",c={id:"public-networks/how-to/use-besu-api/graphql",title:"Use GraphQL over HTTP",description:"How to access the Hyperledger Besu API using GraphQL",source:"@site/versioned_docs/version-24.7.0/public-networks/how-to/use-besu-api/graphql.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/graphql",permalink:"/24.7.0/public-networks/how-to/use-besu-api/graphql",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.7.0/public-networks/how-to/use-besu-api/graphql.md",tags:[{inline:!0,label:"public networks",permalink:"/24.7.0/tags/public-networks"},{inline:!0,label:"private networks",permalink:"/24.7.0/tags/private-networks"}],version:"24.7.0",lastUpdatedAt:1726521271e3,sidebarPosition:3,frontMatter:{title:"Use GraphQL over HTTP",sidebar_position:3,description:"How to access the Hyperledger Besu API using GraphQL",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use RPC Pub/Sub over WS",permalink:"/24.7.0/public-networks/how-to/use-besu-api/rpc-pubsub"},next:{title:"Authenticate over JSON-RPC requests",permalink:"/24.7.0/public-networks/how-to/use-besu-api/authenticate"}},u={},h=[{value:"GraphQL requests with cURL",id:"graphql-requests-with-curl",level:2},{value:"GraphQL requests with GraphiQL app",id:"graphql-requests-with-graphiql-app",level:2},{value:"Pending",id:"pending",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-graphql-over-http",children:"Use GraphQL over HTTP"}),"\n",(0,t.jsx)(n.p,{children:"GraphQL can reduce the overhead needed for common queries.\nFor example, instead of querying each receipt in a block, GraphQL can get the same result with a\nsingle query for the entire block."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/ethereum/api/src/main/resources/schema.graphqls",children:"Besu GraphQL schema"})," describes the GraphQL implementation for Ethereum.\nEnable the GraphQL service using ",(0,t.jsx)(n.a,{href:"/24.7.0/public-networks/how-to/use-besu-api/#enable-api-access",children:"command line options"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"GraphQL is not supported over WebSocket."})}),"\n",(0,t.jsxs)(n.p,{children:["Access the GraphQL endpoint at ",(0,t.jsx)(n.code,{children:"http://<HOST>:<PORT>/graphql"}),".\nConfigure ",(0,t.jsx)(n.code,{children:"<HOST>"})," and ",(0,t.jsx)(n.code,{children:"<PORT>"})," using ",(0,t.jsx)(n.a,{href:"/24.7.0/public-networks/reference/cli/options#graphql-http-host",children:(0,t.jsx)(n.code,{children:"graphql-http-host"})}),"\nand ",(0,t.jsx)(n.a,{href:"/24.7.0/public-networks/reference/cli/options#graphql-http-port",children:(0,t.jsx)(n.code,{children:"graphql-http-port"})}),".\nThe default endpoint is ",(0,t.jsx)(n.code,{children:"http://127.0.0.1:8547/graphql"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"graphql-requests-with-curl",children:"GraphQL requests with cURL"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/24.7.0/public-networks/reference/api/",children:"Hyperledger Besu JSON-RPC API methods"})," with an equivalent\n",(0,t.jsx)(n.a,{href:"/24.7.0/public-networks/how-to/use-besu-api/graphql",children:"GraphQL"})," query include a GraphQL request and result in the method example."]}),"\n",(0,t.jsx)(n.p,{children:"For example, the following request returns the block number:"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"Request",label:"Request",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{block{number}}"}\' http://localhost:8547/graphql\n'})})}),(0,t.jsx)(l.A,{value:"Response",label:"Response",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data" : {\n    "block" : {\n      "number" : "0x281"\n    }\n  }\n}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"The following request returns the gas price:"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"Request",label:"Request",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{gasPrice}"}\' http://localhost:8547/graphql\n'})})}),(0,t.jsx)(l.A,{value:"Response",label:"Response",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data" : {\n    "gasPrice" : "0x0"\n  }\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The following ",(0,t.jsx)(n.a,{href:"/24.7.0/public-networks/reference/api/#eth_syncing",children:(0,t.jsx)(n.code,{children:"syncing"})})," request returns data about the\nsynchronization status:"]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"Request",label:"Request",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{syncing{startingBlock currentBlock highestBlock}}"}\' http://localhost:8547/graphql\n'})})}),(0,t.jsx)(l.A,{value:"Response",label:"Response",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data" : {\n    "syncing" : {\n      "startingBlock" : 665,\n      "currentBlock" : 3190,\n      "highestBlock" : 26395\n    }\n  }\n}\n'})})})]}),"\n",(0,t.jsxs)(n.admonition,{title:"note",type:"info",children:[(0,t.jsxs)(n.p,{children:["In some cases, for example, when your node is fully synced, the syncing request returns a ",(0,t.jsx)(n.code,{children:"null"})," response:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data" : {\n    "syncing" : null\n  }\n}\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"graphql-requests-with-graphiql-app",children:"GraphQL requests with GraphiQL app"}),"\n",(0,t.jsxs)(n.p,{children:["The third-party tool, ",(0,t.jsx)(n.a,{href:"https://github.com/skevy/graphiql-app",children:"GraphiQL"}),", provides a tabbed interface\nfor editing and testing GraphQL queries and mutations.\nGraphiQL also provides access to the ",(0,t.jsx)(n.a,{href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/ethereum/api/src/main/resources/schema.graphqls",children:"Besu GraphQL schema"})," from within the app."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GraphiQL",src:r(63326).A+"",width:"2002",height:"786"})}),"\n",(0,t.jsx)(n.h2,{id:"pending",children:"Pending"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"transactionCount"})," and ",(0,t.jsx)(n.code,{children:"transactions"})," supports the Pending query."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Besu does not execute pending transactions so results from ",(0,t.jsx)(n.code,{children:"account"}),", ",(0,t.jsx)(n.code,{children:"call"}),", and ",(0,t.jsx)(n.code,{children:"estimateGas"})," for\nPending do not reflect pending transactions."]})}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"Pending transactions",label:"Pending transactions",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{pending {transactionCount}}"}\' http://localhost:8547/graphql\n'})})}),(0,t.jsx)(l.A,{value:"Result",label:"Result",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "pending": {\n      "transactionCount": 2\n    }\n  }\n}\n'})})})]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"Pending transactions",label:"Pending transactions",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{pending {transactions{hash}}}"}\' http://localhost:8547/graphql\n'})})}),(0,t.jsx)(l.A,{value:"Result",label:"Result",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "pending": {\n      "transactions": [\n        {\n          "hash": "0xbb3ab8e2113a4afdde9753782cb0680408c0d5b982572dda117a4c72fafbf3fa"\n        },\n        {\n          "hash": "0xf6bd6b1bccf765024bd482a71c6855428e2903895982090ab5dbb0feda717af6"\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var t=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>q});var t=r(96540),a=r(18215),s=r(23104),l=r(56347),i=r(205),o=r(57485),c=r(31682),u=r(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=d(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,h]=b({queryString:r,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),m=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),a=i[r].value;a!==t&&(c(n),l(a))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:h,onClick:u,...s,className:(0,a.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function q(e){const n=(0,f.A)();return(0,x.jsx)(w,{...e,children:h(e.children)},String(n))}},63326:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/GraphiQL-a6360ff9467a3f33ade0bf00e6eec49e.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(96540);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);