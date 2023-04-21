async function BtcToInr() {
  let response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr"
  );
  let data = await response.json();
  getTopCoins(data.bitcoin.inr);
}

BtcToInr();

async function getTopCoins(BtcinInr) {
  console.log(BtcinInr);
  let response = await fetch(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  let data = await response.json();
  getCoinDetails(BtcinInr, data.coins);
}

function getCoinDetails(BtcinInr, data) {
  data.forEach((coinObj) => {
    const { price_btc, thumb, name, symbol } = coinObj.item;
    // console.log(name,price_btc,thumb);
    const price = (price_btc * BtcinInr).toFixed(5);
    console.log(price);
    createCoinCard(price, thumb, name, symbol);
  });
}

function createCoinCard(price, logo, name, symbol) {
  //left div
  const leftDiv = document.createElement("div");
  const imgEle = document.createElement("img");
  imgEle.src = logo;
  imgEle.alt = "coin_logo";
  imgEle.classList.add("card-image");
  leftDiv.appendChild(imgEle);

  //right div
  const rightDiv = document.createElement("div");
  // rightDiv.classList.add("");
  //para
  const paraEle = document.createElement("p");
  paraEle.innerText = `₹${price}`;
  //h1
  const h1Ele = document.createElement("h1");
  h1Ele.innerText = `${name} (${symbol})`;
  rightDiv.appendChild(paraEle);
  rightDiv.appendChild(h1Ele);

  const card = document.createElement("div");
  // card.classList.add("");
  card.appendChild(leftDiv);
    card.appendChild(rightDiv);
    
    document.querySelector(".top-coins").appendChild(card);
}
