/* Operadores logicos e de comparação em javascript
== (igualdade)- compara valores, ignorando o tipo
=== (igualdade estrita)- compara valores e tipos
!= (diferente)- compara valores, ignorando o tipo
!== (diferença estrita)- compara valores e tipos

&& (E)- retorna true se abas as expressoes forem verdadeiras
|| (OU) - retorna true se pelo manos uma das expressoes forem verdadeiras
! (NÃO) - inverte o valor da expressão



//console.log(1==1);
//console.log(1 ==="1");

let x = 5;

if (x % 2 == 0) {
  console.log(" x é par");
} else {
  console.log(" x ímpar");
}

let salario = 7500;

if (salario <= 2000) {
  console.log("Salario até R$2000,00");
} else if (salario > 2000 && salario <= 5000) {
  console.log("Salario entre R$2000,01 e R$5000,00");
} else {
  console.log("Salario acima de R$5000,00");
}
*/