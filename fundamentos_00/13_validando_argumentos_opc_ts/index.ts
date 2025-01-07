

// validadndo parametros opcionais de uma função

function nomeCompleto(nome:string, sobreNome?:string){
  if (sobreNome !== undefined){
    return `nome completo: ${nome} ${sobreNome} `
  }
  return `nome: ${nome}`
}

console.log(nomeCompleto("Leirisson", "souza"))
console.log(nomeCompleto("Leirisson"))