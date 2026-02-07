async function getBitcoinPrice() {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );

        const data = await response.json();
        const price = data.bitcoin.usd;

        document.getElementById("btcPrice").textContent =
            `${price.toLocaleString()}`;
    } catch (error) {
        document.getElementById("btcPrice").textContent =
            "Error fetching price";
        console.error(error);
    }
}

getBitcoinPrice();
