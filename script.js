//==homepage
//elementlarni topish
const valueE1 = document.querySelector(".counter_val");

if (valueE1) {
  const btnMinus = document.querySelector(".btn_minus");
  const btnPlus = document.querySelector(".btn_plus");
  const btnReset = document.querySelector(".btn_reset");

  let count = 0;

  //===funksiyalar
  const updateDisplay = () => {
    valueE1.textContent = count;

    //==0 bolish kerak
    if (count === 0) {
      btnMinus.disabled = true;
      btnReset.disabled = true;
    } else {
      btnMinus.disabled = false;
      btnReset.disabled = false;
    }
  };

  btnMinus.addEventListener("click", () => {
    if (count > 0) {
      count--;
      updateDisplay();
    }
  });
  btnPlus.addEventListener("click", () => {
    count++;
    updateDisplay();
  });

  btnReset.addEventListener("click", () => {
    if (count > 0) {
      count = 0;
      updateDisplay();
    }
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

//==form==//
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Iltmos, barcha maydonlarni to'ldiring!!!");
      return;
    }

    if (!email.includes("@")) {
      alert("Iltimos, to'g'ri email kiriting!!!");
      return;
    }

    alert("Xabaringiz yuborildi!!!");
    contactForm.reset();
  });
}
