"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[5193],{68952:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=a(74848),r=a(28453),s=a(11470),i=a(19365);const o={title:"Private network subcommands",sidebar_position:2,description:"Besu command line interface subcommands",tags:["private networks"]},l="Private network subcommands",c={id:"private-networks/reference/cli/subcommands",title:"Private network subcommands",description:"Besu command line interface subcommands",source:"@site/docs/private-networks/reference/cli/subcommands.md",sourceDirName:"private-networks/reference/cli",slug:"/private-networks/reference/cli/subcommands",permalink:"/private-networks/reference/cli/subcommands",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/reference/cli/subcommands.md",tags:[{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1741881013e3,sidebarPosition:2,frontMatter:{title:"Private network subcommands",sidebar_position:2,description:"Besu command line interface subcommands",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Private network options",permalink:"/private-networks/reference/cli/options"},next:{title:"Private network API methods",permalink:"/private-networks/reference/api/"}},d={},u=[{value:"<code>operator</code>",id:"operator",level:2},{value:"<code>generate-blockchain-config</code>",id:"generate-blockchain-config",level:3},{value:"<code>rlp</code>",id:"rlp",level:2},{value:"<code>decode</code>",id:"decode",level:3},{value:"<code>encode</code>",id:"encode",level:3},{value:"IBFT 2.0 extra data",id:"ibft-20-extra-data",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"private-network-subcommands",children:"Private network subcommands"})}),"\n",(0,t.jsx)(n.p,{children:"This reference describes the syntax of the Besu private network command line interface (CLI) subcommands."}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,t.jsxs)(n.p,{children:["This reference contains subcommands that apply to only private networks. For subcommands that apply to both private and public networks, see the ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/subcommands",children:"public network subcommands reference"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"To start a Besu node using subcommands, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"besu [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]\n"})}),"\n",(0,t.jsx)(n.p,{children:"If using Bash or Z shell, you can view subcommand suggestions by pressing the Tab key twice."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"besu Tab+Tab\n"})}),"\n",(0,t.jsx)(n.h2,{id:"operator",children:(0,t.jsx)(n.code,{children:"operator"})}),"\n",(0,t.jsx)(n.p,{children:"Provides operator actions."}),"\n",(0,t.jsx)(n.h3,{id:"generate-blockchain-config",children:(0,t.jsx)(n.code,{children:"generate-blockchain-config"})}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"besu operator generate-blockchain-config --config-file=<FILE> --to=<DIRECTORY> [--genesis-file-name=<FILE>] [--private-key-file-name=<FILE>] [--public-key-file-name=<FILE>]\n"})})}),(0,t.jsx)(i.A,{value:"Example",label:"Example",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"besu operator generate-blockchain-config --config-file=config.json --to=myNetworkFiles\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Generates an ",(0,t.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/ibft#genesis-file",children:"IBFT 2.0"})," or ",(0,t.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/qbft#genesis-file",children:"QBFT"})," genesis file."]}),"\n",(0,t.jsxs)(n.p,{children:["The configuration file has two nested JSON nodes. The first is the ",(0,t.jsx)(n.code,{children:"genesis"})," property defining the IBFT 2.0 or QBFT genesis file, except for the ",(0,t.jsx)(n.code,{children:"extraData"})," string. The second is the ",(0,t.jsx)(n.code,{children:"blockchain"})," property defining the number of key pairs to generate."]}),"\n",(0,t.jsx)(n.h2,{id:"rlp",children:(0,t.jsx)(n.code,{children:"rlp"})}),"\n",(0,t.jsx)(n.p,{children:"Provides RLP related actions."}),"\n",(0,t.jsx)(n.h3,{id:"decode",children:(0,t.jsx)(n.code,{children:"decode"})}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"besu rlp decode [--from=<FILE>] [--to=<FILE>] [--type=<TYPE>]\n"})})}),(0,t.jsx)(i.A,{value:"File example",label:"File example",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"besu rlp decode --from=ibft_extra_data.txt --to=decoded_ibft_extra_data.txt --type=IBFT_EXTRA_DATA\n"})})}),(0,t.jsx)(i.A,{value:"Standard input/output example",label:"Standard input/output example",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat ibft_extra_data.txt | besu rlp decode > decoded_ibft_extra_data.txt\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Decodes the RLP hexadecimal string used as ",(0,t.jsx)(n.code,{children:"extraData"})," in an\n",(0,t.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/ibft#extra-data",children:"IBFT 2.0"})," or\n",(0,t.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/qbft#extra-data",children:"QBFT"})," genesis file into a validator list."]}),"\n",(0,t.jsx)(n.p,{children:"This subcommand takes the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"from"})," - The file containing the RLP hexadecimal string to decode.\nThe default is standard input."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"to"})," - The file to write the decoded validator list to.\nThe default is standard output."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"type"})," - ",(0,t.jsx)(n.code,{children:"IBFT_EXTRA_DATA"})," for an IBFT 2.0 ",(0,t.jsx)(n.code,{children:"extraData"})," string, or ",(0,t.jsx)(n.code,{children:"QBFT_EXTRA_DATA"})," for a QBFT\n",(0,t.jsx)(n.code,{children:"extraData"})," string.\nThe default is ",(0,t.jsx)(n.code,{children:"IBFT_EXTRA_DATA"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"encode",children:(0,t.jsx)(n.code,{children:"encode"})}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"besu rlp encode [--from=<FILE>] [--to=<FILE>] [--type=<TYPE>]\n"})})}),(0,t.jsx)(i.A,{value:"File example",label:"File example",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"besu rlp encode --from=ibft_extra_data.json --to=extra_data_for_ibft_genesis.txt --type=IBFT_EXTRA_DATA\n"})})}),(0,t.jsx)(i.A,{value:"Standard input/output example",label:"Standard input/output example",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat extra_data.json | besu rlp encode > rlp.txt\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Encodes a validator list into an RLP hexadecimal string to use as ",(0,t.jsx)(n.code,{children:"extraData"})," in an\n",(0,t.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/ibft#extra-data",children:"IBFT 2.0"})," or\n",(0,t.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/qbft#extra-data",children:"QBFT"})," genesis file."]}),"\n",(0,t.jsx)(n.p,{children:"This subcommand takes the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"from"})," - The file containing the validator list to encode.\nThe default is standard input."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"to"})," - The file to write the RLP-encoded hexadecimal string to.\nThe default is standard output."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"type"})," - ",(0,t.jsx)(n.code,{children:"IBFT_EXTRA_DATA"})," for an IBFT 2.0 ",(0,t.jsx)(n.code,{children:"extraData"})," string, or ",(0,t.jsx)(n.code,{children:"QBFT_EXTRA_DATA"})," for a QBFT\n",(0,t.jsx)(n.code,{children:"extraData"})," string.\nThe default is ",(0,t.jsx)(n.code,{children:"IBFT_EXTRA_DATA"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ibft-20-extra-data",children:"IBFT 2.0 extra data"}),"\n",(0,t.jsxs)(n.p,{children:["To generate the RLP encoded ",(0,t.jsx)(n.code,{children:"extraData"})," string, specify a JSON input that is an array of validator addresses in ascending order."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["JSON schema for ",(0,t.jsx)(n.code,{children:"IBFT_EXTRA_DATA"})]}),(0,t.jsxs)(n.p,{children:["Use the following JSON schema to validate that your JSON data is well-formatted. To validate your JSON content, use an online validation tool, such as ",(0,t.jsx)(n.a,{href:"https://www.jsonschemavalidator.net/",children:"JSON Schema Validator"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "$id": "http://org.hyperledger.besu/cli_rlp_ibft_extra_data.json",\n  "type": "array",\n  "definitions": {},\n  "title": "IBFT extra data",\n  "description": "JSON format used as input to generate an IBFT extra data RLP string",\n  "items": {\n    "$id": "#/address",\n    "type": "string",\n    "title": "Validator address",\n    "description": "The validator node address",\n    "default": "",\n    "examples": [\n      "be068f726a13c8d46c44be6ce9d275600e1735a4",\n      "5ff6f4b66a46a2b2310a6f3a93aaddc0d9a1c193"\n    ],\n    "pattern": "^([0-9a-f]{40})$"\n  }\n}\n'})}),(0,t.jsxs)(n.p,{children:["Example ",(0,t.jsx)(n.code,{children:"IBFT_EXTRA_DATA"})," encoding:"]}),(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"JSON input",label:"JSON input",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  "be068f726a13c8d46c44be6ce9d275600e1735a4",\n  "5ff6f4b66a46a2b2310a6f3a93aaddc0d9a1c193"\n]\n'})})}),(0,t.jsx)(i.A,{value:"RLP output",label:"RLP output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"0xf853a00000000000000000000000000000000000000000000000000000000000000000ea94be068f726a13c8d46c44be6ce9d275600e1735a4945ff6f4b66a46a2b2310a6f3a93aaddc0d9a1c193808400000000c0\n"})})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(18215);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(96540),r=a(18215),s=a(23104),i=a(56347),o=a(205),l=a(57485),c=a(31682),d=a(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=f({queryString:a,groupId:r}),[x,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function g(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),r=o[a].value;r!==t&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:s}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function T(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,j.jsx)(T,{...e,children:u(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);