const exchangeRates = {
  USD : {
    USD : 1,
    EUR : 0.85,
    GBP : 0.75,
    INR : 85.53,
    CAD : 1.36,
  },

  EUR : {
    USD : 1.17,
    EUR : 1,
    GBP : 0.87,
    INR : 100.31,
    CAD : 1.60
  },

  GBP : {
    USD : 1.37,
    EUR : 1.17,
    GBP : 1,
    INR : 117.27,
    CAD : 1.87,
  },

  INR : {
    USD : 0.012,
    EUR : 0.0100,
    GBP : 0.0085,
    INR : 1,
    CAD : 0.016,
  },

  CAD : {
    USD : 0.73,
    EUR : 0.62,
    GBP : 0.53,
    INR : 62.92,
    CAD : 1
  },
};

const convert = document
.querySelector(".convert")
.addEventListener("click", () => {
  const input = parseFloat(document.querySelector("input").value);
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;

  if(isNaN(input) || input <= 0) {
    alert("please enter a valid value");
  }
  const convertedAmount = input * exchangeRates[from][to];
  document.querySelector("p").innerText = `${convertedAmount.toFixed(2)} ${to}`;
});