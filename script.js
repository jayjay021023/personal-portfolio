//==homepage
//elementlarni topish
const valueE1 = document.querySelector(".counter_val");

if (valueE1) {
  const btnMinus = document.querySelector(".btn_minus");
  const btnPlus = document.querySelector(".btn_plus");
  const btnReset = document.querySelector(".btn_reset");

  let count = 12;

  //===funksiyalar
  function updateDisplay() {
    valueE1.textContent = count;
  }

  btnMinus.addEventListener("click", () => {
    count--;
    updateDisplay();
  });
  btnPlus.addEventListener("click", () => {
    count++;
    updateDisplay();
  });

  btnReset.addEventListener("click", () => {
    count = 12;
    updateDisplay();
  });
}

//=====about page===belgilarni sanash===
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

if (textInput) {
  textInput.addEventListener("input", () => {
    charCount.textContent = textInput.value.length;
  });
}
