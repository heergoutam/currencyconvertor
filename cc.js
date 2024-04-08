const BASE_URL = "https://v6.exchangerate-api.com/v6/5bd20518f14fedbee668c4af/latest/";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}${fromCurr.value.toLowerCase()}`;
  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let data = await response.json();
    let rate = data.conversion_rates[toCurr.value.toUpperCase()];
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

const updateFlag = (element) => {
  let currCode = element.value;
  let newSrc = `https://www.countryflags.io/${currCode.toLowerCase()}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});


window.addEventListener("load", () => {
  updateExchangeRate();
});



