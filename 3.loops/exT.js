/*Exiba números de 1 a 10 usando for.

for(let i=1; i<=10;i++){
    console.log("Número:" + i);
}
*/

/*Exiba números de 10 a 1 usando while.
let i =10;
while(i>=1){
    console.log("Número: " + i);
    i--;
}*/

/*Some todos os números de 1 a 100 usando um for.
 let soma = 0;
    for(let i=1; i<=100;i++){
        soma += i; // soma = soma + i
        console.log("Soma atual: " + soma);
            }
*/

//Exiba apenas os números pares entre 1 e 20 usando for.
let numero;
for (numero = 1; numero < 20; numero++) {
  if (numero % 2 === 0) {
    console.log("Número par: " + numero);
  }
}
