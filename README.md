# Blockchain Prototype Application🚀

A **JavaScript-based blockchain simulation** featuring mining, wallet management, transactions, and cryptocurrency supply tracking. This project is designed for learning purposes and mimics the behavior of a simplified cryptocurrency system like Bitcoin.

---

## 🌟 Features

- **Blockchain Initialization**: Create a blockchain with a genesis block and wallet.
- **Mempool Management**: Manage unconfirmed transactions in a mempool.
- **Mining Simulation**: Mine blocks and reward miners.
- **Wallets and Transactions**: Send and receive coins with wallets.
- **Supply Tracking**: Monitor the total cryptocurrency (Bitcoin) supply.

---

## ⚙️ How It Works

1. **Setup**:
   - Initializes the blockchain with a genesis block and wallet.
   - Creates two wallets: `MinerWallet` and `TestWallet`.
   - Configures a miner (`Miner_One`) to handle mining.

2. **Mining**:
   - Mines new blocks to add transactions to the blockchain.

3. **Transactions**:
   - Simulates sending coins between wallets.

4. **Display Results**:
   - Outputs wallet balances and total Bitcoin supply.

---

## 🖥️ Usage

1. Clone the repository and ensure the following files are available:
   - `blockchain.mjs`
   - `block.mjs`
   - `transaction.mjs`
   - `mempool.mjs`
   - `miner.mjs`
   - `coin.mjs`
   - `wallet.mjs`

2. Run the application using Node.js:

   ```bash
   node app.js


---

## 🚀 What the Application Does

The application will:

1. ⚙️ **Initialize the Blockchain and Wallets**:
   - Sets up the blockchain with a genesis block and wallets for transactions.

2. ⛏️ **Mine Multiple Blocks**:
   - Simulates mining to add blocks to the blockchain.

3. 💸 **Process a Transaction**:
   - Transfers coins between wallets, showcasing transaction functionality.

4. 📊 **Display Results**:
   - Outputs wallet balances and the current Bitcoin supply.

---

## 🛠️ Project Structure

The application will:

- ✅ **Initialize the blockchain and wallets.**
- ✅ **Mine multiple blocks.**
- ✅ **Process a transaction.**
- ✅ **Display the resulting wallet balances and total coin supply.**

---

### 📂 File Breakdown

| **File**           | **Description**                                |
|---------------------|-----------------------------------------------|
| `blockchain.mjs`    | Manages the blockchain and its operations.     |
| `block.mjs`         | Represents a single block in the blockchain.   |
| `transaction.mjs`   | Handles transactions between wallets.          |
| `mempool.mjs`       | Stores unconfirmed transactions.               |
| `miner.mjs`         | Simulates mining blocks.                       |
| `coin.mjs`          | Represents the cryptocurrency (Bitcoin).       |
| `wallet.mjs`        | Manages user funds and transaction signing.    |

---

### 🧩 Components Overview

- **`Blockchain`**: Core system that manages the chain of blocks.
- **`Block`**: Individual unit of the blockchain storing data and transactions.
- **`Transaction`**: Facilitates sending/receiving coins.
- **`Mempool`**: Temporary storage for pending transactions.
- **`Miner`**: Adds blocks to the blockchain via proof-of-work.
- **`Coin`**: Tracks and represents the cryptocurrency supply.
- **`Wallet`**: Manages user balances and signs transactions securely.

---

# Blockchain Project Overview

[app] Creating Blockchain, creating Coin, creating GenesisWallet, creating GenesisBlock...  
[app] Creating Mempool...  
[app] Creating MinerWallet/TestWallet and associations with blockchain and mempool...  
[app] Creating Miner, giving him a name MinerOne, blockchain, mempool and wallet...  
[app] Starting mining session...  
[app] Genesis Wallet Balance: 1 BTC  
[app] Balance of Miner_One: 1 BTC  
[app] Balance of TestWallet: 2 BTC  
Bitcoin Actual Supply: 100 BTC  

---

## 🌟 Future Enhancements

Here are some ideas to expand this project:

- 🔒 **Cryptographic Verification**: Implement cryptographic algorithms to verify transactions and ensure security.  
- 🌐 **Network Simulation**: Create a decentralized network with multiple miners and blockchain nodes.  
- 🖥️ **User Interface**: Develop a user-friendly GUI for easier interaction with the blockchain.  

---

## 📜 License

This project is **open-source** and available under the [MIT License](LICENSE).  
Contributions are welcome! Feel free to fork, improve, or suggest new features.

---
