import Blockchain from "./blockchain.mjs";
import Block from "./block.mjs";
import Transaction from "./transaction.mjs";
import Mempool from "./mempool.mjs";
import Miner from "./miner.mjs";

const blockchain = new Blockchain();
const mempool = new Mempool();
const miner = new Miner();

const block = Block.createBlock(1, 123, "gsdgquigwe", "yusdgjha");
const block2 = Block.createBlock(2, 456, "uwghuiebc", block.hash);

const transaction = new Transaction(1, "Alex", "Anna");
mempool.addTransaction(transaction);

blockchain.addBlock(block);
blockchain.addBlock(block2);

const previousBlockHash = "jsdgcf";
const currentBlockTransactions = mempool.getPendingTransactions();
const nonce = 3;

console.log(miner.proofOfWork(previousBlockHash, currentBlockTransactions));




