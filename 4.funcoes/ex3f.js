//  Crie uma função que receba a idade de uma pessoa e diga se ela pode votar (>= 16).
function voto(){
    const idade = 16;
    if(idade>=16){
        console.log("A pessoa está apta a votar!", + idade);
    }
    else{
        console.log("A idade nao é suficiente para a votação:" + idade);

    }
}
voto();