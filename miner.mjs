import sha256 from "sha256";

class Miner{
    constructor(){

    }

    hashBlock(previousBlockHash, currentBlockTransactions, nonce){
        const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockTransactions);
        const hash = sha256(dataAsString);
        return hash;
    }
}

export default Miner;