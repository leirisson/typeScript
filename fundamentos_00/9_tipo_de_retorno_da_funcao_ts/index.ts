/*
tipo de retorno da função

*/

// essa função retorna um valor numerico: number
function soma(a:number, b:number): number {
  let soma: number = a + b
  return soma
}


// essa função retorna umastring 
function saudacao(nome: string):string{
  return `olá, ${nome}`
}

console.log(saudacao("Leirisson!"))
console.log(soma(2,1))
