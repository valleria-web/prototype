import Block from "./block.mjs";

class Blockchain {
  constructor() {
    this.chain = [];
  }

  createGenesisBlock(){
    const genesisBlock = Block.createBlock(1, "0", "0", "0", []);{
      this.addBlock(genesisBlock);
    }
  }

  getChain() {
    console.log(this.chain);
  }

  addBlock(block) {
    this.chain.push(block);
  }

  getLastBlock(){
    return this.chain[this.chain.length -1]
  }
}

export default Blockchain;
