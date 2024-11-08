import Blockchain from "./blockchain.mjs";
import Block from "./block.mjs";
import Transaction from "./transaction.mjs";
import Mempool from "./mempool.mjs";
import Miner from "./miner.mjs";
import Coin from "./coin.mjs";
import Wallet from "./wallet.mjs";

const blockchain = new Blockchain();

console.log(blockchain.genesisWallet.getWallet())

console.log(blockchain.genesisWallet.updateTransactions());


