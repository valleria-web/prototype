class Wallet {
  constructor(name, blockchain) {
    this.name = name;
    this.blockchain = blockchain;
    this.publicKey = this.generateRandomPublicKey();
    this.balance = 0;
    this.transactions = [];
  }

  generateRandomPublicKey() {
    return Math.random().toString(36).substr(2, 9);
  }

  getWallet() {
    return {
      name: this.name,
      publicKey: this.publicKey,
      balance: this.balance,
    };
  }

}

export default Wallet;
