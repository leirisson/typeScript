"use strict";
const nomes = ['leirisson', 'souza', 'dos', 'santos'];
const produtos = ['pão', 'manteiga', 'arroz', 'cerveja'];
nomes.push("francisco");
console.log(nomes);
console.log(produtos);
console.log(`produto: ${produtos[2]}`);
console.log(`Prieironome: ${nomes[0].toUpperCase()}`);
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === "francisco") {
        console.log(nomes[i].toUpperCase());
    }
}
