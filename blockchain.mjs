class Blockchain {
  constructor() {
    this.chain = [];
  }

  getChain() {
    console.log(this.chain);
  }

  addBlock(block) {
    this.chain.push(block);
  }
}

export default Blockchain;
