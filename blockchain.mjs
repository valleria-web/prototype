import Block from "./block.mjs";

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

const block = Block.createBlock(1, 123, "gsdgquigwe", "yusdgjha");
const block2 = Block.createBlock(2, 456, "uwghuiebc", block.hash)

const transaction = {
    amount : 1,
    sender : "Alex",
    receiver : "Anna"
};

block.addTransaction(transaction);


blockchain.addBlock(block);
blockchain.addBlock(block2);

blockchain.getChain();
block.getTransactions();