async function searchCoin() {
    const url = window.location.href;
    console.log(url);
    const urlObj = new URL(url);
    console.log(urlObj);
    const params = new URLSearchParams(urlObj.search);
    console.log(params);
    if (!params.has('q')) {
        return;
    }

    let searchedText = params.get('q');
    document.getElementsByName('q')[0].value = searchedText;
    let request = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${searchedText}`
    );
    let data = await request.json();
    render(data);
    console.log(data);
}


function render(data) {
data.coins.forEach(({thumb,name,symbol,id},idx) => createCard(thumb,name,symbol,id,idx+1))
}

function createCard(logo, name, symbol, coinId,idx) {
    const indexEle = document.createElement("p");
    indexEle.innerText = idx;

    const logoEle = document.createElement("img");
    logoEle.src = logo;
    logoEle.alt = "coin logo"
    
    const nameEle = document.createElement("h3");
    nameEle.innerText = name;

    const shortNameEle = document.createElement("h3");
    shortNameEle.innerText = symbol;

    const moreInfoEle = document.createElement('a');
    moreInfoEle.innerText = 'More Details';
    moreInfoEle.href = `./result.html?id=${coinId}`;

    const container = document.createElement('div');
    //container.classList.add('')
    container.appendChild(indexEle);
    container.appendChild(logoEle);
    container.appendChild(nameEle);
    container.appendChild(shortNameEle);
    container.appendChild(moreInfoEle);
    
    document.getElementById("coin-results").appendChild(container);

}



searchCoin();