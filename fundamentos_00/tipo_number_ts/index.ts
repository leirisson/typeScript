let x: number = 10
let y: number = 5
let soma: number 

soma = x + y
console.log(soma)

const inputNumero1 = document.querySelector("#n1") as HTMLInputElement
const inoutNumero2 = document.querySelector("#n2") as HTMLInputElement
const formElement = document.querySelector("form") as HTMLFormElement
const resultadoElement = document.querySelector(".resultado") as HTMLElement 

function somar(a: number, b:number): number {
  return a + b
}

formElement.addEventListener("submit", (e) => {
  e.preventDefault()
  const n1: number =  Number(inputNumero1.value)
  const n2: number = Number(inoutNumero2.value)

  // verificar se os campos foram preenchidos
  if(n1 === 0 && n2 === 0 ){
    alert("Por favor, insira números válidos!")
  }
  const resultado = somar(n1, n2)

  resultadoElement.textContent = `Resultado: ${resultado}`
})



