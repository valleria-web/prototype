class Block{
    constructor(index, nonce, hash, previousBlockHash, transactions = []){
        this.index = index;
        this.timeStamp = Date.now();
        this.nonce = nonce;
        this.hash = hash;
        this.previousBlockHash = previousBlockHash;
        this.transactions = transactions;
    }

    static createBlock(index, nonce, hash, previousBlockHash, transactions){
        return new Block (index, nonce, hash, previousBlockHash, transactions)
    }

    addTransaction(transaction){
        this.transactions.push(transaction);
    }
}

export default Block;

const block = Block.createBlock(1, 123, "gsdgquigwe", "yusdgjha");
const block2 = Block.createBlock(2, 456, "uwghuiebc", block.hash)

const transaction = {
    amount : 1,
    sender : "Alex",
    receiver : "Anna"
};

block.addTransaction(transaction);

console.log(block, block2);