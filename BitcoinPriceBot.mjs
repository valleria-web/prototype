class BitcoinPriceBot {
  constructor() {
    this.apiUrl =
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
  }

  async fetchBitcoinPrice() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      return data.bitcoin.usd;
    } catch (error) {
      console.error("Error al obtener el precio de Bitcoin:", error);
    }
  }

  async displayPrice() {
    const price = await this.fetchBitcoinPrice();
    if (price) {
      console.log(`El precio actual de Bitcoin es: $${price}`);
    } else {
      console.log("No se pudo obtener el precio de Bitcoin");
    }
  }

  start(interval = 10000) {
    setInterval(() => {
      this.displayPrice();
    }, interval);
  }
}

const bitcoinBot = new BitcoinPriceBot();

// Llama automaticamente a displayPrice() a cada 10 segundos
bitcoinBot.start(10000);