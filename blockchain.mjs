import Block from "./block.mjs";
import Coin from "./coin.mjs"


class Blockchain {
  constructor() {
    this.chain = [];
    this.coin = new Coin("Bitcoin", "BTC", 100);
  }

  createGenesisBlock() {
    const genesisBlock = Block.createBlock(1, "0", "0", "0", []);
    {
      this.addBlock(genesisBlock);
    }
  }

  getChain() {
    console.log(this.chain);
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
