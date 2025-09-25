/*
Loop usando While
Sintaxe:

1ª declara a variavel de controle

2ª condicao de parada do loop

3ª incremento ou decremento / operaco sobre a variavel de controle usada pra parar o loop


while(condição){

-- bloco de codigoque sera executado repitidas vezes
}

*/
let visitante = 1; // 1ª declara a variavel de controle
while (visitante <= 7) {
  // 2ª condicao de parada do loop
  console.log("Visitante " + visitante);
  visitante++; // 3ª incremento ou decremento / operaco sobre a variavel de controle usada pra parar o loop
}
