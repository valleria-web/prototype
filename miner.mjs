import sha256 from "sha256";

class Miner {
  constructor() {}

  hashBlock(previousBlockHash, currentBlockTransactions, nonce) {
    const dataAsString =
      previousBlockHash +
      nonce.toString() +
      JSON.stringify(currentBlockTransactions);
    const hash = sha256(dataAsString);
    return hash;
  }

  proofOfWork(previousBlockHash, currentBlockTransactions){
    let nonce = 0;
    let hash = this.hashBlock(
        previousBlockHash,
        currentBlockTransactions,
        nonce
    );
    while(hash.substring(0, 6) !== "000000"){
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockTransactions, nonce);
        console.log(hash);
    }
    return nonce;
  }
}

export default Miner;
