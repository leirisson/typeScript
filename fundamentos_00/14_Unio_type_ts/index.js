"use strict";
// union type pode aceitar mais de um tipo de dado para uma variavel
// nesse contexto ele vai aceitar string ou numero 
function showNumbers(numero) {
    console.log(typeof numero + " " + numero);
}
showNumbers(100);
showNumbers("100");
