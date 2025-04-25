// Conversão de Tipos
// Peça ao usuário para digitar um número como texto (string).
// Converta esse valor para um número (number) e verifique se a conversão foi bem-sucedida.
// Se sim, some 10 ao número e exiba o resultado; caso contrário, exiba uma mensagem de erro.

function converter(valorDigitado: string){
    const newValue = Number(valorDigitado)

    if(isNaN(newValue)){
        return console.log("o valor não é um número ou número não foi convertido.")
    } 
        return console.log("conversão foi bem-sucedida")
    
}

converter("10")

