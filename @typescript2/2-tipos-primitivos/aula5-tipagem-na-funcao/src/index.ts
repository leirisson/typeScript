
// função sem retorno

function sum(x: number, y: number) {
    const result = x + y
    console.log(`Resultado: ${result}`)
}

sum(5, 15)

// função com retorno
function sub(x: number, y: number): number {

    const result = x - y

    return result
}


console.log(sub(10, 3))