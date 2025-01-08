"use strict";
/**
 * Conceito de Non-Null em TypeScript
 * Em TypeScript, o operador ! (non-null assertion operator) é usado para dizer ao compilador
 * que uma variável não será null ou undefined, mesmo que a análise de tipo sugira que isso seja possível.
 *
 * Contudo, seu uso deve ser cauteloso, pois pode levar a erros de execução se a suposição estiver errada.
 */
// Obtém o elemento de entrada pelo ID
// const elementoMsg = document.getElementById("msg") as HTMLInputElement;
// Função para atualizar o texto de um elemento
function atualizarTextoDoElemento(idElemento, novoTexto) {
    // Seleciona o elemento pelo seletor CSS
    const elemento = document.querySelector(idElemento);
    // Verifica se o elemento existe antes de alterar o texto
    if (elemento) {
        elemento.textContent = novoTexto;
    }
    else {
        console.error(`Elemento com o seletor "${idElemento}" não foi encontrado.`);
    }
}
// Atualiza o texto do elemento "#texto" com o valor do input "msg"
if (elementoMsg) {
    atualizarTextoDoElemento("#texto", "tetsxytc");
}
else {
    console.error('Elemento de entrada "msg" não foi encontrado.');
}
