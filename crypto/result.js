async function getCoinDetails() {
  const url = window.location.href;
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);

  if (!params.has("id")) {
    window.location.href = "./index.html";
  }

  let request = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.get("id")}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );
  let data = await request.json();
  render(data);

  let req = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.get("id")}/market_chart?vs_currency=inr&days=1&interval=hourly`
  );
    let graphData = await req.json();
    renderGraph(graphData);
}

getCoinDetails();

function render(data) {
  // console.log(data);
  const {
    name,
    symbol,
    image: { large },
    market_data: {
      current_price: { inr, usd, gbp, eur },
    },
  } = data;

  //insert in ui
}

function renderGraph(data) {
    console.log(data);

    const { prices } = data;
    const pricesInInr = [];
    const hournMin = [];
    prices.forEach(([date,price]) => {
        pricesInInr.push(price);
        const dateObj = new Date(date);
        let hours = dateObj.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }

        let min = dateObj.getMinutes();
        if (min < 10) {
          min = "0" + min;
        }

        hournMin.push(`${hours}:${min}`);
    })

    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    const lineChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: hournMin,
            datasets: [{
                label: "Price in INR",
                data: pricesInInr,
                borderColor: 'rgb(75,192,192)',
                tension: 0.4,
            }]
        }
	})
}

