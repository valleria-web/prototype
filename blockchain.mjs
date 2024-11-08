import Block from "./block.mjs";
import Coin from "./coin.mjs";
import Transaction from "./transaction.mjs";
import Wallet from "./wallet.mjs";

class Blockchain {
  constructor() {
    this.chain = [];
    this.coin = new Coin("Bitcoin", "BTC", 100);
    this.createGenesisBlock();
    this.genesisWallet = new Wallet("Genesis Wallet", this);
  }

  createGenesisBlock() {
    const coinbase = this.coin.mintCoinbase();
    const rewardTransaction = new Transaction(coinbase, "", this.genesisWallet);

    const genesisBlock = Block.createBlock(1, "0", "0", "0", [rewardTransaction]);
    {
      this.addBlock(genesisBlock);
    }
  }

  getChain() {
    return this.chain;
  }

  addBlock(block) {
    this.chain.push(block);
    this.confirmTransactions(block.transactions);
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  confirmTransactions(currentBlockTransactions) {
    for (const transaction of currentBlockTransactions) {
      transaction.isConfirmed = true;
    }
  }
}

export default Blockchain;
