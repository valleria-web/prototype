import Block from "./block.mjs";
import Transaction from "./transaction.mjs";
import Mempool from "./mempool.mjs";

class Blockchain{
    constructor(){
        this.chain = [];
    }

    getChain(){
        console.log(this.chain);
    }

    addBlock(block){
        this.chain.push(block)
    }

}

export default Blockchain;


const blockchain = new Blockchain();
const mempool = new Mempool();

const block = Block.createBlock(1, 123, "gsdgquigwe", "yusdgjha");
const block2 = Block.createBlock(2, 456, "uwghuiebc", block.hash)

const transaction = new Transaction(1, "Alex", "Anna");
mempool.addTransaction(transaction);

blockchain.addBlock(block);
blockchain.addBlock(block2);

console.log(mempool)