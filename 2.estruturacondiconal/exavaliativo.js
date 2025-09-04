//Receba 2 numero e imprima na tela qual deles é o maior
/*
let numero1=5;
let numero2=10;
if (numero1>numero2){
    console.log("O maior número é o 1: " + numero1);
}
else if(numero1 === numero2 ){
    console.log("Eles sao iguais");
}else{
    console.log("Numero 2 é maior:" + numero2);
}

*/

//programa que le idade eleicao

let idade=21;

if(idade <=16){
    console.log("O voto é facultativo!")
}
else if( idade <=17 ){
    console.log("O voto é facultativo!")
}
else if( idade >=18 || idade <=69){
    console.log("O VOTO É OBRIGATORIO!!")
}
else if( idade >=70){
    console.log("O voto é facultativo!")
}
else if(idade <16) {
    console.log("Sua idade é menor que a necessario para o voto!")
}
else(idade >110);{
    console.log("Idade inaválida!")
}