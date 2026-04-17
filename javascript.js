const display = document.getElementById("display");
const botoes = document.querySelectorAll("button");

let expressao = "";

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const valor = botao.value;

    if (botao.classList.contains("limpar")) {
      expressao = "";
      display.value = "0";
      return;
    }

    if (botao.classList.contains("igual")) {
      try {
        expressao = eval(expressao).toString();
        display.value = expressao;
      } catch {
        display.value = "Erro";
        expressao = "";
      }
      return;
    }

    //ATUALIZA O DISPLAY
    if (expressao === "0" && valor !== ".") {
      expressao = valor;
    } else {
      expressao += valor;
    }

    display.value = expressao;
  });
});
