<a href="https://github.com/arweaveTeam/smartweave" class="text-blue-600 hover:text-blue-500 transition ease-in-out duration-150" target="_blank">Smartweave</a>
is a system & interface to run smart contracts inside the <a href="https://github.com/ArweaveTeam/arweave" target="_blank">Arweave ecosystem</a>.
Smartweave solution to execute smart contracts is rather elegant & straightforward, I think, for any developer who knows about blockchain, Smartweave is a brilliant solution. Unfortunately, Smartweave might not be as reliable as we might think.
<br>
<br>
### How Smartweave Operates
Smartweave allows developers to execute smart contracts that are written in Javascript. This, in itself, is a massive game changer. Javascript growth has been increasing exponentially in the last few years, and with the addition of <a href="https://webassembly.org/" class="text-blue-600 hover:text-blue-500 transition ease-in-out duration-150" target="_blank">Web Assembly</a>, we could run our compiled code from languages such as C++ and Rust, or even C#, in the form of a smart contract.
All Smartweave really needs is a Javascript engine, this means, it can run in: your browser, NodeJS, or even Deno.<br>
For Smartweave to work, the source code of the contract needs to be stored inside the Arweave blockchain, and the inputs of the contract are also stored in the blockchain in form of transactions which will be later calculated.

<br>

Even though Smartweave is an astute solution for assumptions that everything will go well, Smartweave can be catastrophic when our assumptions of good faith goes away. 

<br>

### The Hybrid Problem
By some, Smartweave could be considered a hybrid smart contract solution. The reality is, it isn't. In order for a smart contract to be hybrid, it needs some sort of consensus on its latest state which would be retrieved by a distributed network that protects the smart contract calculations for the latest result.
<br>Smartweave fails to do this, in fact, since Smartweave contracts are calculated on the client side, its latest state is something calculated on-the-fly and not something a blockchain keeps guarantees of. This flaw is by definition, a non-blockchain solution.<br>
Many could argue that by storing the inputs of the contract inside the blockchain Smartweave could be hybrid, but this is just contradictory because running the contracts and getting their latest states is still something done on the client side and not by automatic distributed processes which is what blockchain praises. Failing to do this is nothing more than still having a middleman who you will need to trust.
<br>
Defeating Smartweave trustworthiness is not that difficult:
- NPM package which contains the smartweave execution algorithm gets hacked and polluted. Now your calculations will go wrong until this is solved.
- Since most systems that run Smartweave run inside a NodeJS environment, hacking smartweave is actually quiet simple:
    - 1) Crete a smartcontract that modifies `node_modules/smartweave` and pollutes it with a faulty version.
    - 2) This imaginary faulty version has a different smartweave execution algorithm that only benefits your arweave address.
    - 3) Boom, you have successfully hacked the Smartweave execution system inside a server that runs these contracts.

<br>

### Conclusion
Smartweave failing to guarantee consensus on contract execution makes it a dangerous solution for real situations. What Smartweave has accomplished is great, but there's so much work left to do before it can be considered trustworthy.
<br> The concept Smartweave uses for smart contracts is far from being one, some would argue it's only a wrapper with added functionalities to the javascript function `eval` and it's easy to see why.<br>
Also as we might now, `eval` comes with a lot of danger for untrusted code, infinite loops, file system access, and more.<br>
In order for Smartweave to succeed, it needs:
- A virtual machine that can isolate potential dangers from untrusted code
- A gas system (like Ethereum) that can stop the execution of contracts that might be faulty
- A consensus system where the Virtual Machine executes and keeps track and guarantees of the latest states.


Until then, real world solutions involving Smartweave will need to come up with their own patches and being aware of the fact that at the end, it is only a blockchain based solution to a certain extend.
