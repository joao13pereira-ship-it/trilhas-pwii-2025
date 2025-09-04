/*Use switch para criar um menu de opções:


1 = Somar dois números
2 = Subtrair dois números
3 = Multiplicar dois números*/



let opcao=3;

let numero1=10;

let numero2=3;

let resultado;

let operacao; 

switch (opcao){
    case 1:
        resultado= numero1 + numero2;
        break;
    case 2: 
        resultado= numero1 - numero2;
        break;
    case 3:
        resultado= numero1 * numero2;
        break;
    default: 
        console.log("Opção inválida!");
        resultado=null;
        break;
}
console.log("Números: " + numero1 + " e " + numero2);
console.log("A operação escolhida foi: " + opcao);
console.log("O resultado da operação é: " + resultado);
