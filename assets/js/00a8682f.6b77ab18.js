"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[34155],{64733:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var t=o(85893),s=o(11151);const i={title:"Configure static nodes",sidebar_position:1,description:"Configuring static nodes",tags:["public networks","private networks"]},c="Static nodes",r={id:"public-networks/how-to/connect/static-nodes",title:"Configure static nodes",description:"Configuring static nodes",source:"@site/versioned_docs/version-24.1.0/public-networks/how-to/connect/static-nodes.md",sourceDirName:"public-networks/how-to/connect",slug:"/public-networks/how-to/connect/static-nodes",permalink:"/24.1.0/public-networks/how-to/connect/static-nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/public-networks/how-to/connect/static-nodes.md",tags:[{label:"public networks",permalink:"/24.1.0/tags/public-networks"},{label:"private networks",permalink:"/24.1.0/tags/private-networks"}],version:"24.1.0",lastUpdatedAt:1716329575,formattedLastUpdatedAt:"May 21, 2024",sidebarPosition:1,frontMatter:{title:"Configure static nodes",sidebar_position:1,description:"Configuring static nodes",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Create and send transactions",permalink:"/24.1.0/public-networks/how-to/send-transactions"},next:{title:"Configure ports",permalink:"/24.1.0/public-networks/how-to/connect/configure-ports"}},d={},a=[{value:"Configure static nodes",id:"configure-static-nodes",level:2},{value:"<code>static-nodes.json</code> file",id:"static-nodesjson-file",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"static-nodes",children:"Static nodes"}),"\n",(0,t.jsxs)(n.p,{children:["Static nodes are a configured set of trusted nodes. Static nodes are exempt from ",(0,t.jsx)(n.a,{href:"/24.1.0/public-networks/how-to/connect/manage-peers#limit-peers",children:"maximum peer"})," and ",(0,t.jsx)(n.a,{href:"/24.1.0/public-networks/how-to/connect/manage-peers#limit-remote-connections",children:"remote connection"})," limits."]}),"\n",(0,t.jsx)(n.p,{children:"Besu periodically initiates a connection to any unconnected static node. To mitigate low peer count issues in small networks, we recommend using static nodes, or static nodes and bootnodes."}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"Bootnodes and static nodes are both methods for finding peers. Depending on your use case, you can use only bootnodes, only static nodes, or both bootnodes and static nodes."}),(0,t.jsx)(n.p,{children:"For example:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You run multiple nodes on Mainnet, using bootnodes for discovery, but want to ensure your nodes are always connected to each other, using static nodes."}),"\n",(0,t.jsx)(n.li,{children:"You run a small network and want your nodes to reconnect if disconnected, using static nodes."}),"\n"]}),(0,t.jsxs)(n.p,{children:["To find peers, configure one or more ",(0,t.jsx)(n.a,{href:"/24.1.0/private-networks/how-to/configure/bootnodes",children:"bootnodes"}),". To configure a specific set of peer connections, use static nodes."]})]}),"\n",(0,t.jsx)(n.h2,{id:"configure-static-nodes",children:"Configure static nodes"}),"\n",(0,t.jsx)(n.p,{children:"To configure a network of static nodes:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["List the ",(0,t.jsx)(n.a,{href:"/24.1.0/public-networks/concepts/node-keys#enode-url",children:"enode URLs"})," of the nodes in the ",(0,t.jsxs)(n.a,{href:"#static-nodesjson-file",children:[(0,t.jsx)(n.code,{children:"static-nodes.json"})," file"]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Save the ",(0,t.jsx)(n.code,{children:"static-nodes.json"})," file in the data directory (specified by ",(0,t.jsx)(n.a,{href:"/24.1.0/public-networks/reference/cli/options#data-path",children:(0,t.jsx)(n.code,{children:"--data-path"})}),") of each node. Alternatively, you can explicitly specify the static nodes file on the command line using ",(0,t.jsx)(n.a,{href:"/24.1.0/public-networks/reference/cli/options#static-nodes-file",children:(0,t.jsx)(n.code,{children:"--static-nodes-file"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start Besu with discovery disabled using ",(0,t.jsx)(n.a,{href:"/24.1.0/public-networks/reference/cli/options#discovery-enabled",children:(0,t.jsx)(n.code,{children:"--discovery-enabled=false"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To update the list of static peers at run time, use the ",(0,t.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#admin_addpeer",children:(0,t.jsx)(n.code,{children:"admin_addPeer"})})," and ",(0,t.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#admin_removepeer",children:(0,t.jsx)(n.code,{children:"admin_removePeer"})})," JSON-RPC API methods."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Runtime modifications of static nodes are not persisted between runs. The ",(0,t.jsx)(n.code,{children:"static-nodes.json"})," file is not updated by the ",(0,t.jsx)(n.code,{children:"admin_addPeer"})," and ",(0,t.jsx)(n.code,{children:"admin_removePeer"})," methods."]}),(0,t.jsxs)(n.p,{children:["Nodes not in the list of the static nodes are not prevented from connecting. To prevent nodes from connecting, use ",(0,t.jsx)(n.a,{href:"/24.1.0/private-networks/concepts/permissioning/",children:"Permissioning"}),"."]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If the added peer does not appear in the peer list (returned by ",(0,t.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#admin_peers",children:(0,t.jsx)(n.code,{children:"admin_peers"})}),"), check the the supplied ",(0,t.jsx)(n.a,{href:"/24.1.0/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," is correct, the node is running, and the node is listening for TCP connections on the endpoint."]})}),"\n",(0,t.jsxs)(n.h3,{id:"static-nodesjson-file",children:[(0,t.jsx)(n.code,{children:"static-nodes.json"})," file"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"static-nodes.json"})," file must be in the data directory (specified by ",(0,t.jsx)(n.a,{href:"/24.1.0/public-networks/reference/cli/options#data-path",children:(0,t.jsx)(n.code,{children:"--data-path"})}),") and contain a JSON array of ",(0,t.jsx)(n.a,{href:"/24.1.0/public-networks/concepts/node-keys#enode-url",children:"enode URLs"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Example"',children:'[\n  "enode://cea71cb65a471037e01508cebcc178f176f9d5267bf29507ea1f6431eb6a5dc67d086dc8dc54358a72299dab1161febc5d7af49d1609c69b42b5e54544145d4f@127.0.0.1:30303",\n  "enode://ca05e940488614402705a6b6836288ea902169ecc67a89e1bd5ef94bc0d1933f20be16bc881ffb4be59f521afa8718fc26eec2b0e90f2cd0f44f99bc8103e60f@127.0.0.1:30304"\n]\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Each node has a ",(0,t.jsx)(n.code,{children:"static-nodes.json"})," file. We recommend each node in the network has the same ",(0,t.jsx)(n.code,{children:"static-nodes.json"})," file."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>c});var t=o(67294);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);