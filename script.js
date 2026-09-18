//==homepage
//elementlarni topish
const valueE1 = document.querySelector(".counter_val");
const btnMinus = document.querySelector(".btn_minus");
const btnPlus = document.querySelector(".btn_plus");
const btnReset = document.querySelector(".btn_reset");

let count = 12;

//===funksiyalar
function updateDisplay() {
  valueE1.textContent = count;
}

btnPlus.addEventListener("click", () => {
  count++;
  updateDisplay();
});

btnMinus.addEventListener("click", () => {
  count--;
  updateDisplay();
});

btnReset.addEventListener("click", () => {
  count = 12;
  updateDisplay();
});
