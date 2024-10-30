import Blockchain from "./blockchain.mjs";
import Block from "./block.mjs";
import Transaction from "./transaction.mjs";
import Mempool from "./mempool.mjs";
import Miner from "./miner.mjs";
import Coin from "./coin.mjs";

const blockchain = new Blockchain();
const mempool = new Mempool();
const miner = new Miner(blockchain, mempool);

blockchain.createGenesisBlock();

const transaction = new Transaction(1, "Alex", "Anna");
mempool.addTransaction(transaction);

//const block = miner.mineBlock();
//console.log(block);

const coin = blockchain.coin.getCoin();
console.log(coin)











