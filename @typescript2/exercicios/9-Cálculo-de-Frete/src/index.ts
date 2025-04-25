// Desenvolva uma função que calcule o valor do 
// frete com base no peso do produto (number) 
// e na distância em quilômetros (number). 
// O frete tem um custo fixo de R$ 5,00 
// mais R$ 1,50 por quilo e R$ 0,10 por 
// quilômetro. Retorne o valor total do frete.


function CalcFrete(pesoProduto: number, distancia: number): string{
    const custoFixo = 5.00
    const custoPorKg = 1.50
    const custoPorKm = 0.10

    let custoFrete = custoFixo + (custoPorKg * pesoProduto) + (custoPorKm * distancia)

    const notaFrete = `
==========================
       NOTA FO FRETE
==========================
custo fixo do frete R$ 5,00
Distância em quilômetros: ${distancia}
Peso do produto: ${pesoProduto}
Valor por quilo R$ 1,50  
Valor por quilômetro: R$ 0.10
============================
valor toal: ${custoFrete} R$
============================
    `

    return notaFrete
}

console.log(CalcFrete(360, 20))