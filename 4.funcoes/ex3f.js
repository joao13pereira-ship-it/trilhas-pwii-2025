//  Crie uma função que receba a idade de uma pessoa e diga se ela pode votar (>= 16).
function verificaIdadeVotacao (){
    const verificaIdadeVotacao = 16;
    if(verificaIdadeVotacao>=16){
        console.log("A pessoa está apta a votar!", + verificaIdadeVotacao);
    }
    else{
        console.log("A idade nao é suficiente para a votação:" + verificaIdadeVotacao);

    }
}
verificaIdadeVotacao();