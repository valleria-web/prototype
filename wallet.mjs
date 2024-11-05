import Blockchain from "./blockchain.mjs"


class Wallet{
    constructor(name = "", blockchain = null){
        this.name = name;
        this.publicKey = this.generateRandomPublicKey();
        this.balance = 0;
        this.transactions = [];
    }

    generateRandomPublicKey() {
        return Math.random().toString(36).substr(2, 9); 
    }

    getWallet(){
        return{
            name: this.name,
            publicKey: this.publicKey,
            balance: this.balance
        }
    }
}

export default Wallet;

const blockchain = new Blockchain();
const wallet1 = new Wallet("Wallet1", blockchain);
console.log(wallet1.getWallet());
