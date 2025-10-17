//Crie quatro funções para realizar as operações aritméticas básicas (soma, subtração, multiplicação e divisão)
function soma(x, y) {
  let resultado = x + y;
  console.log("O valor da soma é:" + resultado);
}

function sub(x, y) {
  let resultado = x - y;
  console.log("O valor da subtração é:" + resultado);
}
function multi(x, y) {
  let resultado = x * y;
  console.log("O valor da multiplicação é:" + resultado);
}
function div(x, y) {
  let resultado = x / y;
  y;
  console.log("O valor da divisão é:" + resultado);
}

function verificaOperacao(operacao, x, y) {
  switch (operacao) {
    case "1":
      soma(x, y);
      break;
    case "2":
      sub(x, y);
      break;

    case "3":
      multi(x, y);
      break;
    case "4":
      div(x, y);
      break;
    default:
      console.log("Operação inválida!");
      break;
  }
}
verificaOperacao("1", 7, 8);
