let numberToFind = 0;
let attempts = 0;

function refresh() {
  const element = document.getElementById("bet");
  element.value = null;

  numberToFind = Math.floor(Math.random() * 100);
  attempts = 0;

  console.log("The number to find: " + numberToFind);
}

refresh();

bet.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    verifyNumber();
  }
});

function verifyNumber() {
  const element = document.getElementById("bet");
  const bet = element.value;

  if (attempts > 7) {
    alert("Acabou suas tentivas!");
    refresh();
  }

  if (bet > 100 || bet < 0) {
    alert("Aposta é inválida");
    return;
  }

  if (bet > numberToFind) {
    attempts++;
    alert("🚨 O número para ser encontrado é MENOR");
  } else if (bet < numberToFind) {
    attempts++;
    alert("🚨 O número para ser encontrado é MAIOR");
  } else {
    alert("✅ Parabéns você acertou!! Com " + attempts + " erros!");
    refresh();
  }
}
