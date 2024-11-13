import Blockchain from "./blockchain.mjs";
import Block from "./block.mjs";
import Transaction from "./transaction.mjs";
import Mempool from "./mempool.mjs";
import Miner from "./miner.mjs";
import Coin from "./coin.mjs";
import Wallet from "./wallet.mjs";

class AppStart{
    constructor(){
        this.blockchain = new Blockchain();
        this.mempool = new Mempool();
        this.minerWallet = new Wallet("MinerWallet", this.blockchain, this.mempool);
        this.testWallet = new Wallet("TestWallet", this.blockchain, this.mempool);
        this.miner = new Miner("Miner_One", this.blockchain, this.mempool, this.minerWallet);
    }

    blockchainStart(){
        console.log("[app] Creating Blockchain, creating Coin, creating GenesiWallet, creating GenesisBlock...");
        console.log("[app] Creating Mempool...");
        console.log("[app] Creating MinerWallet/TestWallet and associations with blockchain and mempool...");
        console.log("[app] Creating Miner, giving him a name MinerOne, blockchain, mempool and wallet...");
        console.log("[app] Starting mining session...");

        this.miner.mineBlock();
        this.miner.mineBlock();
        this.sendMoneyToTestWallet();
        this.miner.mineBlock();
        this.showBalanceAndCoinSupply();
    }

    sendMoneyToTestWallet(){
        this.minerWallet.sendCoin(2, this.testWallet.publicKey);
    }

    showBalanceAndCoinSupply(){
        console.log(`[app] Genesis Wallet Balance: ${this.blockchain.genesisWallet.getBalance()} BTC `);
        console.log(`[app] Balance of ${this.miner.name}: ${this.minerWallet.getBalance()} BTC `);        
        console.log(`[app] Balance of ${this.testWallet.name}: ${this.testWallet.getBalance()} BTC `);
        console.log("Bitcoin Actual Suplly:", this.blockchain.coin);
    }
}

const app = new AppStart();
app.blockchainStart();