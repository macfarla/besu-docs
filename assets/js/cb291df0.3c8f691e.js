"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[15666],{28693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=t(74848),r=t(28453),o=t(11470),s=t(19365);const i={title:"Manage JVM memory",sidebar_position:2,description:"Besu memory management",tags:["public networks","private networks"]},l="Manage JVM memory",u={id:"public-networks/how-to/configure-jvm/manage-memory",title:"Manage JVM memory",description:"Besu memory management",source:"@site/versioned_docs/version-23.7.3/public-networks/how-to/configure-jvm/manage-memory.md",sourceDirName:"public-networks/how-to/configure-jvm",slug:"/public-networks/how-to/configure-jvm/manage-memory",permalink:"/23.7.3/public-networks/how-to/configure-jvm/manage-memory",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/public-networks/how-to/configure-jvm/manage-memory.md",tags:[{inline:!0,label:"public networks",permalink:"/23.7.3/tags/public-networks"},{inline:!0,label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1725984328e3,sidebarPosition:2,frontMatter:{title:"Manage JVM memory",sidebar_position:2,description:"Besu memory management",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Pass JVM options",permalink:"/23.7.3/public-networks/how-to/configure-jvm/pass-jvm-options"},next:{title:"Use Java Flight Recorder",permalink:"/23.7.3/public-networks/how-to/configure-jvm/java-flight-recorder"}},c={},m=[{value:"Manage the heap dump",id:"manage-the-heap-dump",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"manage-jvm-memory",children:"Manage JVM memory"}),"\n",(0,a.jsx)(n.p,{children:"You can manage Java Virtual Machine (JVM) memory usage for Besu by modifying the maximum heap size."}),"\n",(0,a.jsx)(n.p,{children:"By default, the JVM uses 25% of system RAM. For example, if you have 16 GB RAM installed, the JVM uses 4 GB by default."}),"\n",(0,a.jsx)(n.p,{children:"On public networks, we recommend setting the maximum heap size to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"3 GB on an 8 GB RAM system."}),"\n",(0,a.jsx)(n.li,{children:"5 GB on a 16 GB RAM system."}),"\n",(0,a.jsx)(n.li,{children:"8 GB on a system with at least 24 GB RAM."}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Setting a higher maximum heap size speeds up the sync period but doesn't have much impact after sync. Thus, we recommend setting it to 8 GB only when you have available RAM."})}),"\n",(0,a.jsxs)(n.p,{children:["You can set the maximum heap size using the ",(0,a.jsx)(n.code,{children:"BESU_OPTS"})," environment variable and the ",(0,a.jsx)(n.code,{children:"-Xmx"})," option. The following examples set the maximum heap size to 8 GB:"]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsxs)(s.A,{value:"Exported environment variable example",label:"Exported environment variable example",default:!0,children:[(0,a.jsx)(n.p,{children:"Set the variable for the whole shell before running Besu."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export BESU_OPTS=-Xmx8g\n"})})]}),(0,a.jsxs)(s.A,{value:"Inline environment variable example",label:"Inline environment variable example",children:[(0,a.jsx)(n.p,{children:"Set the variable only for the specific Besu command."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_OPTS=-Xmx8g besu [Besu options]\n"})}),(0,a.jsxs)(n.h1,{id:"service-file-example",children:[(0,a.jsx)(n.code,{children:".service"})," file example"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'[Service]\n...\nEnvironment="BESU_OPTS=-Xmx8g"\nExecStart=besu [Besu options]\n...\n'})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"manage-the-heap-dump",children:"Manage the heap dump"}),"\n",(0,a.jsxs)(n.p,{children:["Heap dump file generation is disabled by default. To enable it, set the ",(0,a.jsx)(n.code,{children:"-XX:+HeapDumpOnOutOfMemoryError"})," Java option."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'BESU_OPTS="-XX:+HeapDumpOnOutOfMemoryError"\n'})}),"\n",(0,a.jsx)(n.p,{children:"When heap dump file generation is enabled, and an out-of-memory error occurs, the heap dump file is saved in the Besu runtime directory by default."}),"\n",(0,a.jsxs)(n.p,{children:["The heap dump file might be large and can saturate your drive. It can be up to the size of the allocated memory. For example, for 8 GB heap memory, the file can be up to 8 GB. Specify the directory where you want the dump to be saved using the ",(0,a.jsx)(n.code,{children:"-XX:HeapDumpPath"})," Java option."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'BESU_OPTS="-XX:HeapDumpPath=/<path>/<to>/<directory>"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),r=t(18215),o=t(23104),s=t(56347),i=t(205),l=t(57485),u=t(31682),c=t(70679);function m(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=d(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[u,m]=p({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),v=(()=>{const e=u??b;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),f(e)}),[m,f,o]),tabValues:o}}var f=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(u(n),s(r))},m=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:m,onClick:c,...o,className:(0,r.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,g.jsx)(j,{...e,children:m(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(96540);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);