const button = document.querySelector("button");
const p = document.querySelector("p");
const aleatorio = document.querySelector("#aleatorio");
const jogador = document.querySelector("input").value.toLowerCase();
const escolhas = ["pedra", "papel", "tesoura"];
const cpu = escolhas[Math.floor(Math.random() * escolhas.length)];

function iniciar() {
  class Jogadas {
    analisar(jogador, cpu) {
      if (jogador === "pedra" || jogador === "tesoura" || jogador === "papel") {
        if (jogador === cpu) {
          p.innerHTML = `
                    <h1>EMPATE</H1>
                    <p>Jogador: ${jogador}</p>
                    <p>CPU: ${cpu}</p>
                    `;
        } else if (
          (jogador === "pedra" && cpu === "tesoura") ||
          (jogador === "papel" && cpu == "pedra") ||
          (jogador === "tesoura" && cpu === "papel")
        ) {
          p.innerHTML = `
                    <h1>VITORIA</h1>
                    <p>Jogador: ${jogador}</p>
                    <p>CPU: ${cpu}</p>
                    `;
        } else {
          p.innerHTML = `
                    <h1>DERROTA</h1>
                    <p>Jogador: ${jogador}</p>
                    <p>CPU: ${cpu}</p>
                    `;
        }
      } else {
        p.innerHTML = "Somente Pedra, Papel ou Tesoura";
      }
    }
  }

  const classe = new Jogadas();
  classe.analisar(jogador, cpu);
}

function spam() {
  setInterval(() => {
    const palavras = [
      "teste1",
      "teste2",
      "teste3",
      "teste4",
      "teste5",
      "teste6",
      "teste7",
      "teste8",
      "teste9",
      "teste10",
    ];
    const random = palavras[Math.floor(Math.random() * palavras.length)];

    aleatorio.innerHTML = random;
  }, 1000);
}

let ativado = false;
button.onclick = () => {
  iniciar();

  // Verificar se foi ativado
  if (ativado) {
    return;
  }
  ativado = true;
  spam();
};




// Aura + Ego
const button2 = document.querySelector("#meme");
const p1 = document.querySelector("#texto1");
const p2 = document.querySelector("#texto2");
const p3 = document.querySelector("#texto3");
const p4 = document.querySelector("#texto4");
const p5 = document.querySelector("#texto5");
const p6 = document.querySelector("#texto6");
const p7 = document.querySelector("#texto7");

let ativado2 = false;
function apagar() {
  setTimeout(() => {
    [p1, p2, p3, p4, p5, p6, p7].forEach((p) => (p.innerHTML = ""));
  }, 3000);
  ativado2 = false;
}

function escrever() {
  if (ativado2) {
    return;
  }
  ativado2 = true;

  setTimeout(() => {
    p1.innerHTML = "nii";
  }, 1000);

  setTimeout(() => {
    p2.innerHTML = "niiii";
  }, 2000);

  setTimeout(() => {
    p3.innerHTML = "niiiiiiiii";
  }, 3000);

  setTimeout(() => {
    p4.innerHTML = "niiiiiiiiiiiiiiii";
  }, 4000);

  setTimeout(() => {
    p5.innerHTML = "niiiiiiiiiiiiiiiiiiiiiii";
  }, 5000);

  setTimeout(() => {
    p6.innerHTML = "niiiiiiiiiiiiiiiiiiiiiiiiiiiii";
  }, 6000);

  setTimeout(() => {
    p7.innerHTML = "niiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiga";
    apagar();
  }, 7000);
}

button2.onclick = escrever;
