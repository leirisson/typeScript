// Crie um programa que receba dois números (number)
// como entrada e exiba o resultado das seguintes operações:

// Soma
// Subtração
// Multiplicação
// Divisão
// Resto da divisão

function operation(a:number, b:number){
    let soma: number = a + b
    let sub: number = a - b
    let mult: number = a * b
    let div: number = a / b
    let rest: number = a % b

    const result = `
resultados
Soma: ${a} + ${b} = ${soma}
Subtração: ${a} - ${b} = ${sub}
Multiplicação: ${a} * ${b} = ${mult}
Divisão: ${a} / ${b} = ${div}
Resto da divisão: ${a} % ${b} = ${rest}
    `

    return console.log(result)
}

operation(5,2)