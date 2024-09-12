"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[17593],{90999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(74848),a=n(28453);const s={title:"Interact with a deployed contract",sidebar_position:2,description:"calling smart contracts functions",tags:["private networks"]},o="Interact with deployed smart contracts",c={id:"private-networks/tutorials/contracts/interact",title:"Interact with a deployed contract",description:"calling smart contracts functions",source:"@site/versioned_docs/version-23.10.2/private-networks/tutorials/contracts/interact.md",sourceDirName:"private-networks/tutorials/contracts",slug:"/private-networks/tutorials/contracts/interact",permalink:"/23.10.2/private-networks/tutorials/contracts/interact",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/private-networks/tutorials/contracts/interact.md",tags:[{inline:!0,label:"private networks",permalink:"/23.10.2/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1725984328e3,sidebarPosition:2,frontMatter:{title:"Interact with a deployed contract",sidebar_position:2,description:"calling smart contracts functions",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Transfer account funds",permalink:"/23.10.2/private-networks/tutorials/contracts/transfer-funds"},next:{title:"Deploy a Hyperledger Besu private network with Kubernetes",permalink:"/23.10.2/private-networks/tutorials/kubernetes/"}},i={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Interact with public contracts",id:"interact-with-public-contracts",level:2},{value:"1. Perform a read operation",id:"1-perform-a-read-operation",level:3},{value:"2. Perform a write operation",id:"2-perform-a-write-operation",level:3},{value:"3. Verify an updated value",id:"3-verify-an-updated-value",level:3},{value:"Interact with private contracts",id:"interact-with-private-contracts",level:2},{value:"1. Perform a read operation",id:"1-perform-a-read-operation-1",level:3},{value:"2. Perform a write operation",id:"2-perform-a-write-operation-1",level:3},{value:"3. Verify an updated value",id:"3-verify-an-updated-value-1",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"interact-with-deployed-smart-contracts",children:"Interact with deployed smart contracts"}),"\n",(0,r.jsxs)(t.p,{children:["You can get started with the ",(0,r.jsx)(t.a,{href:"/23.10.2/private-networks/tutorials/quickstart",children:"Developer Quickstart"})," to rapidly generate local blockchain networks."]}),"\n",(0,r.jsx)(t.p,{children:"This tutorial shows you how to interact with smart contracts that have been deployed to a network."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A network with a deployed smart contract as in the ",(0,r.jsx)(t.a,{href:"/23.10.2/private-networks/tutorials/contracts/",children:"deploying smart contracts tutorial"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"interact-with-public-contracts",children:"Interact with public contracts"}),"\n",(0,r.jsxs)(t.p,{children:["This tutorial uses the ",(0,r.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/common/smart_contracts/privacy/contracts/SimpleStorage.sol",children:(0,r.jsx)(t.code,{children:"SimpleStorage.sol"})})," contract:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"pragma solidity ^0.7.0;\n\ncontract SimpleStorage {\n  uint public storedData;\n\n  constructor(uint initVal) public {\n    storedData = initVal;\n  }\n\n  function set(uint x) public {\n    storedData = x;\n  }\n\n  function get() view public returns (uint retVal) {\n    return storedData;\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once the contract is deployed, you can perform a read operation using the ",(0,r.jsx)(t.code,{children:"get"})," function call and a write operation using the ",(0,r.jsx)(t.code,{children:"set"})," function call. This tutorial uses the ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/web3",children:"web3js"})," library to interact with the contract. A ",(0,r.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/besu/smart_contracts/privacy/scripts/public_tx.js",children:"full example"})," of these calls can be found in the ",(0,r.jsx)(t.a,{href:"/23.10.2/private-networks/tutorials/quickstart",children:"Developer Quickstart"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"1-perform-a-read-operation",children:"1. Perform a read operation"}),"\n",(0,r.jsxs)(t.p,{children:["To perform a read operation, you need the address that the contract was deployed to and the contract's ABI. The contract's ABI can be obtained from compiling the contract; see the ",(0,r.jsx)(t.a,{href:"/23.10.2/private-networks/tutorials/contracts/",children:"deploying smart contracts tutorial"})," for an example."]}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.a,{href:"https://web3js.readthedocs.io/en/v1.3.4/web3-eth-contract.html",children:(0,r.jsx)(t.code,{children:"web3.eth.Contract"})})," object to create a new instance of the smart contract, then make the ",(0,r.jsx)(t.code,{children:"get"})," function call from the contract's list of methods, which will return the value stored:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'async function getValueAtAddress(\n  host,\n  deployedContractAbi,\n  deployedContractAddress,\n) {\n  const web3 = new Web3(host);\n  const contractInstance = new web3.eth.Contract(\n    deployedContractAbi,\n    deployedContractAddress,\n  );\n  const res = await contractInstance.methods.get().call();\n  console.log("Obtained value at deployed contract is: " + res);\n  return res;\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"2-perform-a-write-operation",children:"2. Perform a write operation"}),"\n",(0,r.jsxs)(t.p,{children:["To perform a write operation, send a transaction to update the stored value. As with the ",(0,r.jsxs)(t.a,{href:"#1-perform-a-read-operation",children:[(0,r.jsx)(t.code,{children:"get"})," call"]}),", you need to use the address that the contract was deployed to and the contract's ABI. The account address must correspond to an actual account with some ETH in it to perform the transaction. Because Besu doesn't manage accounts, this address is the address you use in ",(0,r.jsx)(t.a,{href:"https://docs.ethsigner.consensys.net/en/stable/",children:"EthSigner"})," (or equivalent) to manage your accounts."]}),"\n",(0,r.jsxs)(t.p,{children:["Make the ",(0,r.jsx)(t.code,{children:"set"})," call passing in your account address, ",(0,r.jsx)(t.code,{children:"value"})," as the updated value of the contract, and the amount of gas you are willing to spend for the transaction:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'// You need to use the accountAddress details provided to Besu to send/interact with contracts\nasync function setValueAtAddress(\n  host,\n  accountAddress,\n  value,\n  deployedContractAbi,\n  deployedContractAddress,\n) {\n  const web3 = new Web3(host);\n  const contractInstance = new web3.eth.Contract(\n    deployedContractAbi,\n    deployedContractAddress,\n  );\n  const res = await contractInstance.methods\n    .set(value)\n    .send({ from: accountAddress, gasPrice: "0xFF", gasLimit: "0x24A22" });\n  return res;\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"3-verify-an-updated-value",children:"3. Verify an updated value"}),"\n",(0,r.jsxs)(t.p,{children:["To verify that a value has been updated, perform a ",(0,r.jsx)(t.code,{children:"get"})," call after a ",(0,r.jsx)(t.code,{children:"set"})," update call."]}),"\n",(0,r.jsx)(t.h2,{id:"interact-with-private-contracts",children:"Interact with private contracts"}),"\n",(0,r.jsxs)(t.p,{children:["This private contracts example uses the same ",(0,r.jsx)(t.code,{children:"SimpleStorage.sol"})," contract as in the ",(0,r.jsx)(t.a,{href:"#interact-with-public-contracts",children:"public contracts example"}),", but it uses the ",(0,r.jsx)(t.a,{href:"https://consensys.github.io/web3js-quorum/latest/index.html",children:"web3js-quorum"})," library and the ",(0,r.jsx)(t.a,{href:"https://consensys.github.io/web3js-quorum/latest/module-priv.html#~generateAndSendRawTransaction",children:(0,r.jsx)(t.code,{children:"generateAndSendRawTransaction"})})," method to interact with the contract. Both read and write operations are performed using the ",(0,r.jsx)(t.code,{children:"generateAndSendRawTransaction"})," API call. A ",(0,r.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/besu/smart_contracts/privacy/scripts/private_tx.js",children:"full example"})," can be found in the ",(0,r.jsx)(t.a,{href:"/23.10.2/private-networks/tutorials/quickstart",children:"Developer Quickstart"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"1-perform-a-read-operation-1",children:"1. Perform a read operation"}),"\n",(0,r.jsx)(t.p,{children:"As in the public contracts example, to perform a read operation, you need the address that the contract was deployed to and the contract's ABI. You also need your private and public keys and the recipient's public key."}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.a,{href:"https://web3js.readthedocs.io/en/v1.3.4/web3-eth-contract.html",children:(0,r.jsx)(t.code,{children:"web3.eth.Contract"})})," object to create a new instance of the smart contract, extract the signature of function's ABI for the ",(0,r.jsx)(t.code,{children:"get"})," method, and then use this value as the ",(0,r.jsx)(t.code,{children:"data"})," parameter for the ",(0,r.jsx)(t.code,{children:"generateAndSendRawTransaction"})," transaction."]}),"\n",(0,r.jsxs)(t.p,{children:["The keys remain the same for the sender and recipient, and the ",(0,r.jsx)(t.code,{children:"to"})," field is the contract's address. Once you make the request, you receive a ",(0,r.jsx)(t.code,{children:"transactionHash"}),", which you can use to get a ",(0,r.jsx)(t.code,{children:"transactionReceipt"})," containing the value stored:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'async function getValueAtAddress(\n  clientUrl,\n  address,\n  contractAbi,\n  fromPrivateKey,\n  fromPublicKey,\n  toPublicKey,\n) {\n  const Web3 = require("web3");\n  const Web3Quorum = require("web3js-quorum");\n  const web3 = new Web3Quorum(new Web3("http://localhost:22000"));\n  // eslint-disable-next-line no-underscore-dangle\n  const functionAbi = contract._jsonInterface.find((e) => {\n    return e.name === "get";\n  });\n  const functionParams = {\n    to: address,\n    data: functionAbi.signature,\n    privateKey: fromPrivateKey,\n    privateFrom: fromPublicKey,\n    privateFor: [toPublicKey],\n  };\n  const transactionHash = await web3quorum.priv.generateAndSendRawTransaction(\n    functionParams,\n  );\n  // console.log(`Transaction hash: ${transactionHash}`);\n  const result = await web3quorum.priv.waitForTransactionReceipt(\n    transactionHash,\n  );\n  console.log(\n    "" + nodeName + " value from deployed contract is: " + result.output,\n  );\n  return result;\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"2-perform-a-write-operation-1",children:"2. Perform a write operation"}),"\n",(0,r.jsxs)(t.p,{children:["Performing a write operation is almost the same process as the read operation, except that you encode the new value to the ",(0,r.jsx)(t.code,{children:"set"})," function's ABI, and then append these arguments to the ",(0,r.jsx)(t.code,{children:"set"})," function's ABI and use this as the ",(0,r.jsx)(t.code,{children:"data"})," field:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'async function setValueAtAddress(\n  clientUrl,\n  address,\n  value,\n  contractAbi,\n  fromPrivateKey,\n  fromPublicKey,\n  toPublicKey,\n) {\n  const Web3 = require("web3");\n  const Web3Quorum = require("web3js-quorum");\n  const web3 = new Web3Quorum(new Web3("http://localhost:22000"));\n  // eslint-disable-next-line no-underscore-dangle\n  const functionAbi = contract._jsonInterface.find((e) => {\n    return e.name === "set";\n  });\n  const functionArgs = web3quorum.eth.abi\n    .encodeParameters(functionAbi.inputs, [value])\n    .slice(2);\n  const functionParams = {\n    to: address,\n    data: functionAbi.signature + functionArgs,\n    privateKey: fromPrivateKey,\n    privateFrom: fromPublicKey,\n    privateFor: [toPublicKey],\n  };\n  const transactionHash = await web3quorum.priv.generateAndSendRawTransaction(\n    functionParams,\n  );\n  console.log(`Transaction hash: ${transactionHash}`);\n  const result = await web3quorum.priv.waitForTransactionReceipt(\n    transactionHash,\n  );\n  return result;\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"3-verify-an-updated-value-1",children:"3. Verify an updated value"}),"\n",(0,r.jsxs)(t.p,{children:["To verify that a value has been updated, perform a ",(0,r.jsx)(t.code,{children:"get"})," call after a ",(0,r.jsx)(t.code,{children:"set"})," update call."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);