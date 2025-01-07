"use strict";
/*
tipo de retorno da função

*/
// essa função retorna um valor numerico: number
function soma(a, b) {
    let soma = a + b;
    return soma;
}
// essa função retorna umastring 
function saudacao(nome) {
    return `olá, ${nome}`;
}
console.log(saudacao("Leirisson!"));
console.log(soma(2, 1));
