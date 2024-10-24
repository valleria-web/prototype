import Blockchain from "./blockchain.mjs";
import Block from "./block.mjs";
import Transaction from "./transaction.mjs";
import Mempool from "./mempool.mjs";
import Miner from "./miner.mjs";


const blockchain = new Blockchain();
const mempool = new Mempool();
const miner = new Miner(blockchain, mempool);

blockchain.createGenesisBlock();


const transaction = new Transaction(1, "Alex", "Anna");
mempool.addTransaction(transaction);

console.log(mempool);

const block = miner.mineBlock();
const block3 = miner.mineBlock();

console.log(block, block3);









