import Block from "./block.mjs";
import Coin from "./coin.mjs";
import Transaction from "./transaction.mjs";
import Wallet from "./wallet.mjs";

class Blockchain {
  constructor() {
    this.chain = [];
    this.coin = new Coin("Bitcoin", "BTC", 100);
    this.genesisWallet = new Wallet("Genesis Wallet", this);
    this.createGenesisBlock();
  }

  createGenesisBlock() {
    const coinbase = this.coin.mintCoinbase();
    const rewardTransaction = new Transaction(coinbase, "SYSTEM", this.genesisWallet.publicKey);

    const genesisBlock = Block.createBlock(1, "0", "0", "0", [rewardTransaction]);
    {
      this.addBlock(genesisBlock);
      this.genesisWallet.updateBalance();
    }
  }

  getChain() {
    return this.chain;
  }

  addBlock(block) {
    this.chain.push(block);
    this.confirmTransactions(block.transactions);
    console.log(`[addBlock] Block added to chain:`, block);
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
