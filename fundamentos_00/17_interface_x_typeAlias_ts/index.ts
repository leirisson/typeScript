
/**
 * interface é possivel alterar adicionar outros campos na interface
 */
interface Pessoa {
  nome: string
}

interface Pessoa {
  idade: number
}


const pessoa: Pessoa = {
  nome:"Leirisson",
  idade: 18
}

console.log(pessoa)


// criando type
// em via de regra não podemos ter mais de um type com o mesmo nome

type TipoPessoa = {
  nome: string
}

const pessoa2: TipoPessoa = {
  nome:"raimundo"
}


// exemplo, identificador TipoPessoa não pode ser duplicado
// type TipoPessoa = {
// }

console.log(pessoa2)