const API_KEY = "tzC9aOhxYEC1EX63N2qav9m9N08ghE8M";

async function getInrToMultiCurr() {
    let response = await fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&base=INR&symbols=GBP,USD,EUR`);
    let data = await response.json();
    console.log(data); 
}

getInrToMultiCurr();