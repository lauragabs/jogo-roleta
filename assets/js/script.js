let saldo = 1000;
const saldoEl = document.getElementById("saldo");
const btnGirar = document.getElementById("btn-girar");
const mensagemEl = document.getElementById("mensagem");
const giroEl = document.getElementById("giro");
const tipoApostaEl = document.getElementById("tipo-aposta");

const roletaEuropeia = [
  { numero: 0, cor: "verde" },
  { numero: 32, cor: "vermelho" },
  { numero: 15, cor: "preto" },
  { numero: 19, cor: "vermelho" },
  { numero: 4, cor: "preto" },
  { numero: 21, cor: "vermelho" },
  { numero: 2, cor: "preto" },
  { numero: 25, cor: "vermelho" },
  { numero: 17, cor: "preto" },
  { numero: 34, cor: "vermelho" },
  { numero: 6, cor: "preto" },
  { numero: 27, cor: "vermelho" },
  { numero: 13, cor: "preto" },
  { numero: 36, cor: "vermelho" },
  { numero: 11, cor: "preto" },
  { numero: 30, cor: "vermelho" },
  { numero: 8, cor: "preto" },
  { numero: 23, cor: "vermelho" },
  { numero: 10, cor: "preto" },
  { numero: 5, cor: "vermelho" },
  { numero: 24, cor: "preto" },
  { numero: 16, cor: "vermelho" },
  { numero: 33, cor: "preto" },
  { numero: 1, cor: "vermelho" },
  { numero: 20, cor: "preto" },
  { numero: 14, cor: "vermelho" },
  { numero: 31, cor: "preto" },
  { numero: 9, cor: "vermelho" },
  { numero: 22, cor: "preto" },
  { numero: 18, cor: "vermelho" },
  { numero: 29, cor: "preto" },
  { numero: 7, cor: "vermelho" },
  { numero: 28, cor: "preto" },
  { numero: 12, cor: "vermelho" },
  { numero: 35, cor: "preto" },
  { numero: 3, cor: "vermelho" },
  { numero: 26, cor: "preto" },
];

function criarRoleta() {
  giroEl.innerHTML = "";

  const totalNumeros = roletaEuropeia.length;
  const anguloSetor = 360 / totalNumeros;

  let gradientStops = [];
  let anguloAtual = 0;

  roletaEuropeia.forEach((item, index) => {
    const cor = item.cor;
    let corHex;

    switch (cor) {
      case "verde":
        corHex = "#00aa00";
        break;
      case "vermelho":
        corHex = "#cc0000";
        break;
      case "preto":
        corHex = "#000000";
        break;
    }

    gradientStops.push(
      `${corHex} ${anguloAtual}deg ${anguloAtual + anguloSetor}deg`
    );
    anguloAtual += anguloSetor;
  });

  giroEl.style.background = `conic-gradient(${gradientStops.join(", ")})`;

  roletaEuropeia.forEach((item, index) => {
    const numeroEl = document.createElement("div");
    numeroEl.className = "numero-pizza";
    numeroEl.textContent = item.numero;

    const anguloMedio = index * anguloSetor + anguloSetor / 2;

    const larguraTela = window.innerWidth;
    let raio, offset;

    if (larguraTela <= 600) {
      raio = 105;
      offset = 8;
    } else if (larguraTela <= 900) {
      raio = 130;
      offset = 9;
    } else {
      raio = 160;
      offset = 11;
    }

    const x = Math.cos(((anguloMedio - 90) * Math.PI) / 180) * raio;
    const y = Math.sin(((anguloMedio - 90) * Math.PI) / 180) * raio;

    numeroEl.style.left = `calc(50% + ${x}px - ${offset}px)`;
    numeroEl.style.top = `calc(50% + ${y}px - ${offset}px)`;

    giroEl.appendChild(numeroEl);
  });

  for (let i = 0; i < totalNumeros; i++) {
    const linha = document.createElement("div");
    linha.className = "linha-setor";

    const angulo = i * anguloSetor;
    linha.style.transform = `rotate(${angulo}deg)`;

    giroEl.appendChild(linha);
  }
}

function atualizarCampoEscolha() {
  const tipoAposta = tipoApostaEl.value;
  const escolhaEl = document.getElementById("escolha");

  escolhaEl.remove();

  let novoElemento;

  if (tipoAposta === "numero") {
    novoElemento = document.createElement("input");
    novoElemento.type = "text";
    novoElemento.id = "escolha";
    novoElemento.placeholder = "Ex: 17";
  } else if (tipoAposta === "cor") {
    novoElemento = document.createElement("select");
    novoElemento.id = "escolha";

    const optionVermelho = document.createElement("option");
    optionVermelho.value = "vermelho";
    optionVermelho.textContent = "Vermelho";

    const optionPreto = document.createElement("option");
    optionPreto.value = "preto";
    optionPreto.textContent = "Preto";

    novoElemento.appendChild(optionVermelho);
    novoElemento.appendChild(optionPreto);
  } else if (tipoAposta === "paridade") {
    novoElemento = document.createElement("select");
    novoElemento.id = "escolha";

    const optionPar = document.createElement("option");
    optionPar.value = "par";
    optionPar.textContent = "Par";

    const optionImpar = document.createElement("option");
    optionImpar.value = "impar";
    optionImpar.textContent = "Ímpar";

    novoElemento.appendChild(optionPar);
    novoElemento.appendChild(optionImpar);
  }

  const labelEscolha =
    document.querySelector('label[for="escolha"]') ||
    Array.from(document.querySelectorAll("label")).find((label) =>
      label.textContent.includes("Escolha")
    );
  labelEscolha.after(novoElemento);
}

criarRoleta();
atualizarCampoEscolha();

tipoApostaEl.addEventListener("change", atualizarCampoEscolha);

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    criarRoleta();
  }, 250);
});

btnGirar.addEventListener("click", () => {
  const tipo = document.getElementById("tipo-aposta").value;
  const escolha = document.getElementById("escolha").value.trim().toLowerCase();
  const valor = parseInt(document.getElementById("valor").value);

  if (isNaN(valor) || valor <= 0) {
    return exibirMensagem("💡 Valor da aposta inválido.");
  }

  if (valor > saldo) {
    return exibirMensagem("❌ Saldo insuficiente.");
  }

  saldo -= valor;
  atualizarSaldo();

  giroEl.style.transition = "none";
  giroEl.style.transform = "rotate(0deg)";

  setTimeout(() => {
    giroEl.style.transition = "transform 5s cubic-bezier(0.25, 1, 0.5, 1)";

    const rotacaoFinal = Math.floor(Math.random() * 360);
    const voltasCompletas = 10 + Math.floor(Math.random() * 5);
    const rotacaoCompleta = 360 * voltasCompletas + rotacaoFinal;
    giroEl.style.transform = `rotate(${rotacaoCompleta}deg)`;

    setTimeout(() => {
      const resultado = calcularResultadoPorPosicao(rotacaoFinal);
      const ganho = calcularResultado(tipo, escolha, valor, resultado);
      saldo += ganho;
      atualizarSaldo();

      exibirMensagem(
        `🎯 Resultado: ${resultado.numero} (${resultado.cor})<br>` +
          `💰 Você ${ganho > 0 ? "ganhou" : "perdeu"} ${Math.abs(
            ganho - valor
          )} créditos.`
      );
    }, 5000);
  }, 10);
});

function atualizarSaldo() {
  saldoEl.textContent = saldo;
}

function exibirMensagem(msg) {
  mensagemEl.innerHTML = msg;
}

function calcularResultadoPorPosicao(anguloFinal) {
  const totalNumeros = roletaEuropeia.length;
  const anguloSetor = 360 / totalNumeros;

  let anguloAjustado = (360 - anguloFinal) % 360;

  const indiceSetor = Math.floor(anguloAjustado / anguloSetor);
  const itemSorteado = roletaEuropeia[indiceSetor];

  return { numero: itemSorteado.numero, cor: itemSorteado.cor };
}

function girarRoleta() {
  const itemSorteado =
    roletaEuropeia[Math.floor(Math.random() * roletaEuropeia.length)];
  return { numero: itemSorteado.numero, cor: itemSorteado.cor };
}

function calcularResultado(tipo, escolha, valor, resultado) {
  let multiplicador = 0;

  if (tipo === "numero" && escolha === String(resultado.numero)) {
    multiplicador = 35;
  } else if (tipo === "cor" && escolha === resultado.cor) {
    multiplicador = 1;
  } else if (tipo === "paridade") {
    let parOuImpar = null;
    if (resultado.numero !== 0) {
      parOuImpar = resultado.numero % 2 === 0 ? "par" : "impar";
    }
    if (parOuImpar && escolha === parOuImpar) {
      multiplicador = 1;
    }
  }

  // Ganho total = valor apostado + (valor apostado * multiplicador)
  // Se multiplicador = 0, perdeu tudo (ganho = 0)
  // Se multiplicador > 0, ganhou: valor original + prêmio
  return multiplicador > 0 ? valor + valor * multiplicador : 0;
}
