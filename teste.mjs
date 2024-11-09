import Blockchain from "./blockchain.mjs";
import Block from "./block.mjs";
import Transaction from "./transaction.mjs";
import Mempool from "./mempool.mjs";
import Miner from "./miner.mjs";
import Coin from "./coin.mjs";
import Wallet from "./wallet.mjs";

const blockchain = new Blockchain();

const genesisWallet = blockchain.genesisWallet;

genesisWallet.updateTransactions();

console.log(genesisWallet.getWallet())
