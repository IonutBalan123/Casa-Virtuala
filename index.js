const pret = document.querySelector("#pret");
const rezultatPret = document.querySelector("#rezultatPret");
const discount = document.querySelector("#discount");
const tarif = 3;

const calculatePrice = () => {
  let pretValue = pret.value;

  pret.value = "";
  const finalPrice = Math.round(pretValue * tarif);
  if (finalPrice > 1000) {
    finalPrice = 0;
  }
  if (!isNaN(pretValue)) {
    anime({
      targets: "#rezultatPret",
      innerText: `${[(0, finalPrice)]} RON`,
      duration: 3000,
      round: 1,
    });
  }
  setTimeout(() => {
    pret.value = "";
    rezultatPret.innerText = "";
    discount.innerText = "";
  }, 6000);
};
window.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    calculatePrice();
  }
});
document.querySelector("#calculeaza").addEventListener("click", () => {
 calculatePrice();
});
const showNumber = () => {
  document.getElementById("number").innerHTML = "0758 195 714";
  setTimeout(() => {
    document.getElementById("number").innerHTML =
      " &#8592; Contactează-ne &#8594;";
  }, 10000);
};
