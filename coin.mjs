class Coin{
    constructor(name, ticker, maxSupply){
        this.name = name;
        this.ticker = ticker;
        this.initialSupply = 0;
        this.actualSupply = this.initialSupply;
        this.maxSupply = maxSupply
    }


    mintCoinbase(){
        const amount = 1;
        if(amount <= this.maxSupply && this.actualSupply + amount <= this.maxSupply){
            this.actualSupply += amount;
            return amount;
        } else {
            console.log("Mint exceeded max supply, mint rejected.");
        }
        return null;
    }


    getCoin(){
        return{
            name: this.name,
            ticker: this.ticker,
            maxSupply: this.maxSupply,
            initialSupply: this.initialSupply,
            actualSUpply: this.actualSupply
        }
    }
}

export default Coin;