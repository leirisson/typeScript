"use strict";
let x = 10;
let y = 5;
let soma;
soma = x + y;
console.log(soma);
const inputNumero1 = document.querySelector("#n1");
const inoutNumero2 = document.querySelector("#n2");
const formElement = document.querySelector("form");
const resultadoElement = document.querySelector(".resultado");
function somar(a, b) {
    return a + b;
}
formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const n1 = Number(inputNumero1.value);
    const n2 = Number(inoutNumero2.value);
    // verificar se os campos foram preenchidos
    if (n1 === 0 && n2 === 0) {
        alert("Por favor, insira números válidos!");
    }
    const resultado = somar(n1, n2);
    resultadoElement.textContent = `Resultado: ${resultado}`;
});
