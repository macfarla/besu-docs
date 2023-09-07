"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[37830],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),p=a(67392),c=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=b({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var h=a(72389);const f="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==i&&(u(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",g,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},3987:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={title:"Subcommands",description:"Hyperledger Besu command line interface subcommands",sidebar_position:2,tags:["public networks","private networks"]},s="Subcommands",p={unversionedId:"public-networks/reference/cli/subcommands",id:"version-23.7.1/public-networks/reference/cli/subcommands",title:"Subcommands",description:"Hyperledger Besu command line interface subcommands",source:"@site/versioned_docs/version-23.7.1/public-networks/reference/cli/subcommands.md",sourceDirName:"public-networks/reference/cli",slug:"/public-networks/reference/cli/subcommands",permalink:"/public-networks/reference/cli/subcommands",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/public-networks/reference/cli/subcommands.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1694055692,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:2,frontMatter:{title:"Subcommands",description:"Hyperledger Besu command line interface subcommands",sidebar_position:2,tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Options",permalink:"/public-networks/reference/cli/options"},next:{title:"Besu API",permalink:"/public-networks/reference/api/"}},c={},u=[{value:"<code>blocks</code>",id:"blocks",level:2},{value:"<code>import</code>",id:"import",level:3},{value:"<code>export</code>",id:"export",level:3},{value:"<code>public-key</code>",id:"public-key",level:2},{value:"<code>export</code>",id:"export-1",level:3},{value:"<code>export-address</code>",id:"export-address",level:3},{value:"<code>password</code>",id:"password",level:2},{value:"<code>hash</code>",id:"hash",level:3},{value:"<code>operator</code>",id:"operator",level:2},{value:"<code>generate-log-bloom-cache</code>",id:"generate-log-bloom-cache",level:3},{value:"<code>retesteth</code>",id:"retesteth",level:2},{value:"<code>validate-config</code>",id:"validate-config",level:2}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subcommands"},"Subcommands"),(0,r.kt)("p",null,"This reference describes the syntax of the Hyperledger Besu command line interface (CLI) subcommands."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This reference contains subcommands that apply to both public and private networks. For private-network-specific subcommands, see the ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/reference/cli/subcommands"},"private network subcommands reference"),".")),(0,r.kt)("p",null,"To start a Besu node using subcommands, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]\n")),(0,r.kt)("p",null,"If using Bash or Z shell, you can view subcommand suggestions by pressing the Tab key twice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu Tab+Tab\n")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("inlineCode",{parentName:"h2"},"blocks")),(0,r.kt)("p",null,"Provides blocks related actions."),(0,r.kt)("h3",{id:"import"},(0,r.kt)("inlineCode",{parentName:"h3"},"import")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu blocks import [--skip-pow-validation-enabled] [--start-block=<LONG>] [--end-block=<LONG>] --from=<block-file>\n"))),(0,r.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu blocks import --skip-pow-validation-enabled --start-block=100 --end-block=300 --from=/home/me/me_project/mainnet-export1.blocks --from=/home/me/me_project/mainnet-export2.blocks\n")))),(0,r.kt)("p",null,"Imports a block or range of blocks from the specified file into the blockchain database."),(0,r.kt)("p",null,"You can specify the starting index of the block range to import with ",(0,r.kt)("inlineCode",{parentName:"p"},"--start-block"),". If omitted, the default start block is 0 (the beginning of the chain)."),(0,r.kt)("p",null,"You can specify the ending index (exclusive) of the block range to import with ",(0,r.kt)("inlineCode",{parentName:"p"},"--end-block"),". If omitted, all blocks after the start block are imported."),(0,r.kt)("p",null,"You can specify multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"--from")," arguments. This can be useful when blocks have been exported over time to multiple files. If multiple files are provided they are read in the order specified in the command."),(0,r.kt)("p",null,"Including ",(0,r.kt)("inlineCode",{parentName:"p"},"--skip-pow-validation-enabled")," skips validation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"mixHash")," when importing blocks."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--skip-pow-validation-enabled")," when performing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/hive"},"Ethereum Foundation hive testing"),".")),(0,r.kt)("h3",{id:"export"},(0,r.kt)("inlineCode",{parentName:"h3"},"export")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu blocks export [--start-block=<LONG>] [--end-block=<LONG>] --to=<block-file>\n"))),(0,r.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --network=goerli --data-path=/home/data/ blocks export --start-block=100 --end-block=300 --to=/home/exportblock.bin\n")))),(0,r.kt)("p",null,"Exports a block or range of blocks from storage to a file in RLP format."),(0,r.kt)("p",null,"If you omit ",(0,r.kt)("inlineCode",{parentName:"p"},"--start-block"),", the default start block is 0 (the beginning of the chain), and if you omit ",(0,r.kt)("inlineCode",{parentName:"p"},"--end-block"),", the default end block is the current chain head."),(0,r.kt)("p",null,"If you are not running the command against the default network (Mainnet), specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"--network")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--genesis-file")," parameter."),(0,r.kt)("h2",{id:"public-key"},(0,r.kt)("inlineCode",{parentName:"h2"},"public-key")),(0,r.kt)("p",null,"Provides node public key related actions."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To get the public key or address of a node, ensure you use the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," or ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#node-private-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--node-private-key-file"))," option with the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-key")," command. Otherwise, a new ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/concepts/node-keys"},"node key")," is silently generated when starting Besu.")),(0,r.kt)("h3",{id:"export-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"export")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu public-key export [--node-private-key-file=<file>] [--to=<key-file>] [--ec-curve=<ec-curve-name>]\n"))),(0,r.kt)(l.Z,{label:"Example (to standard output)",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --data-path=<node data path> public-key export --node-private-key-file=/home/me/me_node/myPrivateKey --ec-curve=secp256k1\n"))),(0,r.kt)(l.Z,{label:"Example (to file)",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --data-path=<node data path> public-key export --node-private-key-file=/home/me/me_node/myPrivateKey --to=/home/me/me_project/not_precious_pub_key --ec-curve=secp256k1\n")))),(0,r.kt)("p",null,"Outputs the node public key to standard output or to the file specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"--to=<key-file>"),". You can output the public key associated with a specific private key file using the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#node-private-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--node-private-key-file"))," option. The default elliptic curve used for the key is ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1"),". Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ec-curve")," option to choose between ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256r1"),"."),(0,r.kt)("h3",{id:"export-address"},(0,r.kt)("inlineCode",{parentName:"h3"},"export-address")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu public-key export-address [--node-private-key-file=<file>] [--to=<address-file>] [--ec-curve=<ec-curve-name>]\n"))),(0,r.kt)(l.Z,{label:"Example (to standard output)",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --data-path=<node data path> public-key export-address --node-private-key-file=/home/me/me_node/myPrivateKey --ec-curve=secp256k1\n"))),(0,r.kt)(l.Z,{label:"Example (to file)",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --data-path=<node data path> public-key export-address --node-private-key-file=/home/me/me_node/myPrivateKey --to=/home/me/me_project/me_node_address --ec-curve=secp256k1\n")))),(0,r.kt)("p",null,"Outputs the node address to standard output or to the file specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"--to=<address-file>"),". You can output the address associated with a specific private key file using the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#node-private-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--node-private-key-file"))," option. The default elliptic curve used for the key is ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1"),". Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ec-curve")," option to choose between ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256r1"),"."),(0,r.kt)("h2",{id:"password"},(0,r.kt)("inlineCode",{parentName:"h2"},"password")),(0,r.kt)("p",null,"Provides password related actions."),(0,r.kt)("h3",{id:"hash"},(0,r.kt)("inlineCode",{parentName:"h3"},"hash")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu password hash --password=<my-password>\n"))),(0,r.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu password hash --password=myPassword123\n")))),(0,r.kt)("p",null,"Generates the hash of a given password. Include the hash in the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/use-besu-api/authenticate#credentials-file"},"credentials file")," for JSON-RPC API ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/use-besu-api/authenticate"},"authentication"),"."),(0,r.kt)("h2",{id:"operator"},(0,r.kt)("inlineCode",{parentName:"h2"},"operator")),(0,r.kt)("p",null,"Provides operator actions."),(0,r.kt)("h3",{id:"generate-log-bloom-cache"},(0,r.kt)("inlineCode",{parentName:"h3"},"generate-log-bloom-cache")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu operator generate-log-bloom-cache [--start-block=<BLOCK_NUMBER>] [--end-block=<BLOCK_NUMBER>]\n"))),(0,r.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --network=goerli --data-path=/project/goerli operator generate-log-bloom-cache --start-block=0 --end-block=100000\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Manually executing ",(0,r.kt)("inlineCode",{parentName:"p"},"generate-log-bloom-cache")," is not required unless you set the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#auto-log-bloom-caching-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--auto-log-bloom-caching-enabled"))," command line option to false.")),(0,r.kt)("p",null,"Generates cached log bloom indexes for blocks. APIs use the cached indexes for improved log query performance."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Each index file contains 100000 blocks. The last fragment of blocks less that 100000 are not indexed.")),(0,r.kt)("p",null,"To generate cached log bloom indexes while the node is running, use the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#admin_generatelogbloomcache"},(0,r.kt)("inlineCode",{parentName:"a"},"admin_generateLogBloomCache"))," API."),(0,r.kt)("h2",{id:"retesteth"},(0,r.kt)("inlineCode",{parentName:"h2"},"retesteth")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu retesteth [--data-path=<PATH>] [--rpc-http-host=<HOST>] [--rpc-http-port=<PORT>] [-l=<LOG VERBOSITY LEVEL>] [--host-allowlist=<hostname>[,<hostname>\u2026]\u2026 or * or all]\n"))),(0,r.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu retesteth --data-path=/home/me/me_node --rpc-http-port=8590 --host-allowlist=*\n")))),(0,r.kt)("p",null,"Runs a Retesteth-compatible server. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/retesteth/wiki"},"Retesteth")," is a developer tool that can generate and run consensus tests against any Ethereum client running such a server."),(0,r.kt)("p",null,"The command accepts the following command line options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/public-networks/reference/cli/options#host-allowlist"},(0,r.kt)("inlineCode",{parentName:"a"},"--host-allowlist"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/public-networks/reference/cli/options#rpc-http-host"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-host"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/public-networks/reference/cli/options#rpc-http-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-port"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/public-networks/reference/cli/options#logging"},(0,r.kt)("inlineCode",{parentName:"a"},"--logging")))),(0,r.kt)("h2",{id:"validate-config"},(0,r.kt)("inlineCode",{parentName:"h2"},"validate-config")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu validate-config --config-file <PATH-TO-CONFIG-FILE>\n"))),(0,r.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu validate-config --config-file ../besu-local-nodes/config/besu/besu1.conf\n")))),(0,r.kt)("p",null,"Performs basic syntax validation of the specified ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/configuration-file"},"TOML configuration file"),". Checks TOML syntax (for example, valid format and unmatched quotes) and flags unknown options. Doesn't check data types, and doesn't check dependencies between options (this is done at Besu startup)."))}m.isMDXComponent=!0}}]);