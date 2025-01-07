
const elementForm = document.querySelector("form") as HTMLFormElement
const inputElementMsg = document.querySelector("#msg") as HTMLInputElement
const buttoElement = document.querySelector(".btn_magica") as HTMLInputElement
const elementResultado = document.querySelector(".magica") as HTMLInputElement


elementForm.addEventListener("submit", function(e){
  e.preventDefault()

  const txt_mensagem: string = inputElementMsg.value
  
  // adcionando a mensagem no elemento
  elementResultado.textContent = `Voce disse: ${txt_mensagem}`


  this.reset()
})