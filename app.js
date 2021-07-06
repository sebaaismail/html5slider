var commission_percentage;
var price;
const initialPrixVente = 400000;

const liElements = document.querySelectorAll(".commission-item ul li");

const rangeValueElement = document.querySelector("#range-value");

rangeValueElement.textContent = numberWithCommas(400000) + "€";

liElements.forEach((liElement) => {
  liElement.addEventListener("click", () => {
    let prixVenteText = document.querySelector("#range-value").textContent;
    let prixVente = parseInt(
      prixVenteText.substr(0, prixVenteText.length).replace(",", "")
    );

    liElements.forEach((el) => el.classList.remove("active"));
    liElement.classList.add("active");
    commission_percentage = parseInt(
      liElement.innerHTML.substr(0, liElement.innerHTML.length)
    );
    calculate_economie(prixVente, commission_percentage);
    const commissionValue = document.querySelector("#commissionValue");
    commissionValue.innerHTML = commission_percentage + "%";
  });
  if (liElement.classList == "active") {
    commission_percentage = parseInt(
      liElement.innerHTML.substr(0, liElement.innerHTML.length)
    );

    calculate_economie(initialPrixVente, commission_percentage);
  }
});

function calculate_economie(value, commission_percentage) {
  console.log("prixVentes = " + value);
  const specialPrice = document.querySelector(".special-price");
  price = (value * commission_percentage) / 100;
  specialPrice.innerHTML = numberWithoutCommas(price) + "€";
}

// slider listener change
function handleMouseMove(value) {
  const rangeValueElement = document.querySelector("#range-value");

  rangeValueElement.textContent = numberWithCommas(value) + "€";

  calculate_economie(value, commission_percentage);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberWithoutCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
