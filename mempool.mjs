class Mempool{
    constructor(){
        this.pendingTransactions = [];
    }

    addTransaction(transaction){
        this.pendingTransactions.push(transaction)

    }
}

export default Mempool;