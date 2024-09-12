"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[20015],{3838:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=t(74848),r=t(28453),a=t(11470),o=t(19365);const l={title:"Connect to Mainnet",sidebar_position:2,description:"How to connect to Mainnet",tags:["public networks"]},i="Connect to Mainnet",c={id:"public-networks/get-started/connect/mainnet",title:"Connect to Mainnet",description:"How to connect to Mainnet",source:"@site/versioned_docs/version-24.5.2/public-networks/get-started/connect/mainnet.md",sourceDirName:"public-networks/get-started/connect",slug:"/public-networks/get-started/connect/mainnet",permalink:"/24.5.2/public-networks/get-started/connect/mainnet",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.2/public-networks/get-started/connect/mainnet.md",tags:[{inline:!0,label:"public networks",permalink:"/24.5.2/tags/public-networks"}],version:"24.5.2",lastUpdatedAt:1725984328e3,sidebarPosition:2,frontMatter:{title:"Connect to Mainnet",sidebar_position:2,description:"How to connect to Mainnet",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Sync Besu",permalink:"/24.5.2/public-networks/get-started/connect/sync-node"},next:{title:"Connect to a testnet",permalink:"/24.5.2/public-networks/get-started/connect/testnet"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Generate the shared secret",id:"1-generate-the-shared-secret",level:3},{value:"2. Generate validator keys",id:"2-generate-validator-keys",level:3},{value:"3. Start Besu",id:"3-start-besu",level:3},{value:"4. Start the consensus client",id:"4-start-the-consensus-client",level:3},{value:"5. Wait for the clients to sync",id:"5-wait-for-the-clients-to-sync",level:3},{value:"6. Stake ETH",id:"6-stake-eth",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"connect-to-mainnet",children:"Connect to Mainnet"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/concepts/the-merge",children:"The Merge"})," was executed on ",(0,s.jsx)(n.strong,{children:"September 15, 2022"}),". Ethereum is now a ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/concepts/proof-of-stake/",children:"proof of stake"})," network, and a full Ethereum node requires both ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/concepts/the-merge#execution-and-consensus-clients",children:"an execution client and a consensus client"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Run Besu as an ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/concepts/the-merge#execution-clients",children:"execution client"})," with any consensus client on Ethereum Mainnet."]}),"\n",(0,s.jsxs)(n.p,{children:["If you're using ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/en/stable/",children:"Teku"})," as a consensus client, you can follow the ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/tutorials/besu-teku-mainnet",children:"Besu and Teku Mainnet tutorial"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/get-started/install/binary-distribution",children:"Besu installed"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["A consensus client installed. For example, ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/en/latest/",children:"Teku"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.h3,{id:"1-generate-the-shared-secret",children:"1. Generate the shared secret"}),"\n",(0,s.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'openssl rand -hex 32 | tr -d "\\n" > jwtsecret.hex\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You will specify ",(0,s.jsx)(n.code,{children:"jwtsecret.hex"})," when starting Besu and the consensus client. This is a shared JWT secret the clients use to authenticate each other when using the ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/how-to/use-engine-api",children:"Engine API"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"2-generate-validator-keys",children:"2. Generate validator keys"}),"\n",(0,s.jsxs)(n.p,{children:["If you're running the consensus client as a beacon node only, skip to the ",(0,s.jsx)(n.a,{href:"#3-start-besu",children:"next step"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If you're also running the consensus client as a validator client, have a funded Ethereum address ready (32 ETH and gas fees for each validator)."}),"\n",(0,s.jsxs)(n.p,{children:["Generate validator keys for one or more validators using the ",(0,s.jsx)(n.a,{href:"https://launchpad.ethereum.org/en/",children:"Staking Launchpad"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Save the password you use to generate each key pair in a ",(0,s.jsx)(n.code,{children:".txt"})," file. You should also have a ",(0,s.jsx)(n.code,{children:".json"})," file for each validator key pair."]})}),"\n",(0,s.jsx)(n.h3,{id:"3-start-besu",children:"3. Start Besu"}),"\n",(0,s.jsxs)(n.p,{children:["Run the following command or specify the options in a ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/how-to/use-configuration-file/",children:"configuration file"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu \\\n  --rpc-http-enabled=true      \\\n  --rpc-http-host=0.0.0.0      \\\n  --rpc-ws-enabled=true        \\\n  --rpc-ws-host=0.0.0.0        \\\n  --host-allowlist=<IP of Besu node>,127.0.0.1,localhost        \\\n  --engine-host-allowlist=<IP of Besu node>,127.0.0.1,localhost \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Specify:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The path to the ",(0,s.jsx)(n.code,{children:"jwtsecret.hex"})," file generated in ",(0,s.jsx)(n.a,{href:"#1-generate-the-shared-secret",children:"step 1"})," using the ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#engine-jwt-secret",children:(0,s.jsx)(n.code,{children:"--engine-jwt-secret"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["The IP address of your Besu node using the ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#host-allowlist",children:(0,s.jsx)(n.code,{children:"--host-allowlist"})})," and ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#engine-host-allowlist",children:(0,s.jsx)(n.code,{children:"--engine-host-allowlist"})})," options."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Also, in the command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#rpc-http-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-http-enabled"})})," enables the HTTP JSON-RPC service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#rpc-http-host",children:(0,s.jsx)(n.code,{children:"--rpc-http-host"})})," is set to ",(0,s.jsx)(n.code,{children:"0.0.0.0"})," to allow remote RPC connections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#rpc-ws-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-ws-enabled"})})," enables the WebSocket JSON-RPC service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#rpc-ws-host",children:(0,s.jsx)(n.code,{children:"--rpc-ws-host"})})," is set to ",(0,s.jsx)(n.code,{children:"0.0.0.0"})," to allow remote RPC connections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#engine-rpc-enabled",children:(0,s.jsx)(n.code,{children:"--engine-rpc-enabled"})})," enables the ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/reference/engine-api/",children:"Engine API"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can modify the option values and add other ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options",children:"command line options"})," as needed."]}),"\n",(0,s.jsx)(n.h3,{id:"4-start-the-consensus-client",children:"4. Start the consensus client"}),"\n",(0,s.jsx)(n.p,{children:"Refer to your consensus client documentation to configure and start the consensus client."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"If you're running a validator client, make sure you set a fee recipient address."})}),"\n",(0,s.jsxs)(n.p,{children:["If you're using Teku, follow the ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/tutorials/besu-teku-mainnet#5-start-teku",children:"Besu and Teku Mainnet tutorial"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"5-wait-for-the-clients-to-sync",children:"5. Wait for the clients to sync"}),"\n",(0,s.jsx)(n.p,{children:"After starting Besu and the consensus client, your node starts syncing and connecting to peers."}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(o.A,{value:"Besu logs",label:"Besu logs",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'{"@timestamp":"2023-02-03T04:43:49,555","level":"INFO","thread":"main","class":"DefaultSynchronizer","message":"Starting synchronizer.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,556","level":"INFO","thread":"main","class":"SnapSyncDownloader","message":"Starting sync","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,559","level":"INFO","thread":"main","class":"Runner","message":"Ethereum main loop is up.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:53,106","level":"INFO","thread":"Timer-0","class":"DNSResolver","message":"Resolved 2409 nodes","throwable":""}\n{"@timestamp":"2023-02-03T04:45:04,803","level":"INFO","thread":"nioEventLoopGroup-3-10","class":"SnapWorldStateDownloader","message":"Downloading world state from peers for pivot block 16545859 (0x616ae3c4cf85f95a9bce2814a7282d75dc2eac36\ncb9f0fcc6f16386df70da3c5). State root 0xa7114541f42c62a72c8b6bb9901c2ccf4b424cd7f76570a67b82a183b02f25dc pending requests 0","throwable":""}\n{"@timestamp":"2023-02-03T04:46:04,834","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.08%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:48:01,840","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.23%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:49:09,931","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.41%, Peer count: 11","throwable":""}\n{"@timestamp":"2023-02-03T04:50:12,466","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.61%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:20,977","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.75%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:28,985","level":"INFO","thread":"EthScheduler-Services-29 (importBlock)","class":"ImportBlocksStep","message":"Block import progress: 180400 of 16545859 (1%)","throwable":""}\n'})})}),(0,s.jsx)(o.A,{value:"Teku logs",label:"Teku logs",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"2022-03-21 20:43:24.355 INFO  - Syncing     *** Target slot: 76092, Head slot: 2680, Remaining slots: 73412, Connected peers: 8\n2022-03-21 20:43:36.363 INFO  - Syncing     *** Target slot: 76093, Head slot: 2879, Remaining slots: 73214, Connected peers: 10\n2022-03-21 20:43:48.327 INFO  - Syncing     *** Target slot: 76094, Head slot: 3080, Remaining slots: 73014, Connected peers: 8\n2022-03-21 20:44:00.339 INFO  - Syncing     *** Target slot: 76095, Head slot: 3317, Remaining slots: 72778, Connected peers: 6\n2022-03-21 20:44:12.353 INFO  - Syncing     *** Target slot: 76096, Head slot: 3519, Remaining slots: 72577, Connected peers: 9\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"If you're running the consensus client as a beacon node only, you're all set. If you're also running the consensus client as a validator client, ensure your clients are fully synced before submitting your staking deposit in the next step. Syncing Besu can take several days."}),"\n",(0,s.jsx)(n.h3,{id:"6-stake-eth",children:"6. Stake ETH"}),"\n",(0,s.jsxs)(n.p,{children:["Stake your ETH for one or more validators using the ",(0,s.jsx)(n.a,{href:"https://launchpad.ethereum.org/en/",children:"Staking Launchpad"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can check your validator status by searching your Ethereum address on the ",(0,s.jsx)(n.a,{href:"https://beaconcha.in/",children:"Beacon Chain explorer"}),". It may take up to multiple days for your validator to be activated and start proposing blocks."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(18215);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(96540),r=t(18215),a=t(23104),o=t(56347),l=t(205),i=t(57485),c=t(31682),u=t(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,d]=f({queryString:t,groupId:r}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),g=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==s&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(w,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);