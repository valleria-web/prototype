import Transaction from "./transaction.mjs";

class Wallet {
  constructor(name, blockchain, mempool) {
    this.name = name;
    this.blockchain = blockchain;
    this.mempool = mempool;
    this.publicKey = this.generateRandomPublicKey();
    this._balance = 0;
    this.transactions = [];
  }

  sendCoin(coinAmount, receiverPublicKey) {
    //this.updateBalance();

    console.log(
      `\n[sendCoin] ${this.name} is trying to send ${coinAmount} BTC to ${receiverPublicKey}...`
    );

    if (this.getBalance() < coinAmount) {
      console.log("[sendCoin] Insufficient balance");
      return;
    }

    const transaction = new Transaction(
      coinAmount,
      this.publicKey,
      receiverPublicKey
    );

    this.mempool.addTransaction(transaction);

    console.log(
      `[sendCoin] Transaction initiated: ${coinAmount} coin from ${this.publicKey} to ${receiverPublicKey}`
    );
  }

  generateRandomPublicKey() {
    return Math.random().toString(36).substr(2, 9);
  }

  getBalance() {
    this.updateBalance();
    return this._balance;
  }

  getWallet() {
    this.updateBalance();
    return {
      name: this.name,
      publicKey: this.publicKey,
      balance: this.getBalance(),
    };
  }

  updateTransactions() {
    this.transactions = this.blockchain
      .getChain()
      .flatMap((block) => block.transactions)
      .filter(
        (transaction) =>
          transaction.senderPublicKey === this.publicKey ||
          transaction.receiverPublicKey === this.publicKey
      );
    //console.log(`[updateTransactions] ${this.name} received a transaction: `, this.transactions);
  }

  updateBalance() {
    this.updateTransactions();

    this._balance = this.transactions.reduce((balance, transaction) => {
      if (transaction.receiverPublicKey === this.publicKey) {
        balance += transaction.coinAmount;
        console.log(`[updateBalance] +${transaction.coinAmount} BTC received by ${this.name}.`);
      }
      if (transaction.senderPublicKey === this.publicKey) {
        balance -= transaction.coinAmount;
        console.log(
          `[updateBalance] -${transaction.coinAmount} BTC sent by ${this.name}.`
        );
      }
      return balance;
    }, 0);

    //console.log(`[updateBalance] Updated balance of ${this.name}: ${this._balance} BTC`);
    }
}

export default Wallet;
