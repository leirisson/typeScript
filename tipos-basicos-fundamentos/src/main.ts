//  Explicação:
// string → Texto (ex: "Notebook").
// number → Números inteiros ou decimais.
// boolean → true ou false.
// Array → Lista de valores (string[] = lista de textos).
// Objeto → Estrutura com propriedades ({ nome: string, preco: number }).

//  Exemplo: Interface de Produto
interface Produto {
    nome: string
    preco: number
    emEstoque?: boolean
}

const BdProdutos: Produto[] = [
    { nome: "Monitor", preco: 1200 },
    { nome: "Fone de ouvido", preco: 350, emEstoque: false }
]

function fundamentos() {
    // string 
    let nome: string = "Notebook"

    // Number
    let preco: number = 3500.00

    // Boolean
    let EmEstoque: boolean = true

    //array
    let categorias: string[] = ['Eletrônicos', 'informática']

    // objeto - estrutura de dados
    let produto: { nome: string, preco: number } = {
        nome: "Notebook",
        preco: 3500.00
    }

    console.log(`
nome: ${nome},
preço: ${preco},
estoque: ${EmEstoque},
categoria: ${categorias},
nome_produto: ${produto.nome},
preço_produto: ${produto.preco}
`)
}

function interfaces(): void {
    // Para organizar melhor, usamos interfaces para definir a estrutura de um produto.
    // interface → Define um modelo para objetos.
    // emEstoque ?: boolean → O ? significa que o campo é opcional.

    //  Exemplo: Interface de Produto
    interface Produto {
        nome: string
        preco: number
        emEstoque?: boolean
    }

    const meuProduto: Produto = {
        nome: "Teclado",
        preco: 200,
        emEstoque: true
    }


    console.log('produto cadastrado: ', meuProduto)
}


//Funções (Cadastrando Produtos)
// Vamos criar uma função para adicionar produtos a uma lista.

function cadastroDeProduto(produto: Produto): void {
    let listaProdutos: Produto[] = [] // iniciando um array vazio

    listaProdutos.push(produto)
    console.log(`${produto.nome} cadastrado com sucesso!`)

    // Explicação:
    // listaProdutos: Produto[] → Array que só aceita objetos do tipo Produto.
    // cadastrarProduto(produto: Produto): void →
    // Recebe um Produto como parâmetro.
    // : void → Não retorna nada.

}


//  Classes (Sistema de Estoque)
// Para estruturar melhor, podemos usar classes.
// Exemplo: Classe Estoque

class Estoque {
    // Explicação:
    // class Estoque → Define uma classe para gerenciar produtos.
    // private produtos: Produto[] → Só pode ser acessado dentro da classe.
    // adicionarProduto() e listarProdutos() → Métodos da classe.

    private produtos: Produto[] = [] // lista privada

    adcionarProduto(produto: Produto): void {
        this.produtos.push(produto)
        console.log(`${produto.nome} cadastrado com sucesso !`)
    }

    listaProdutos(): void {
        console.log('Produtos em estoque:')
        this.produtos.forEach(produto => {
            console.log(`- ${produto.nome} - ${produto.preco}`)
        })
    }
}


// Tipos Personalizados (Union Types)
// Exemplo: ID pode ser string ou number
type ID = string | number

function buscaProduto(id: ID): void {
    BdProdutos.forEach((element, index) => {
        if (id == index) {
            console.log(element)
        } else {
            console.log('Produto não encontrado.')
        }
    })
}

buscaProduto("1") //id do produto


//  Generics (Funções Reutilizáveis)
//  Para criar funções que funcionam com qualquer tipo.
//  Exemplo: Função Genérica
function pegaOPrimeiroElemento<T>(lista: T[]): T {
    return lista[0]
}

const numeros = [1, 2, 3, 4]
const primeiroNumero = pegaOPrimeiroElemento(numeros)

const listaDeNomes = ["Leirisson","Ana", "Maria", "Carmo"]
const primeiroNome = pegaOPrimeiroElemento(listaDeNomes)

console.log(`
primeiro numero do array de numeros: ${primeiroNumero}
primeiro nome da lista de nomes: ${primeiroNome}
    `)









// CHAMANDO A FUNÇÃO
// fundamentos()
// interfaces()
// cadastroDeProduto({ nome: "Monitor", preco: 1200 })
// cadastroDeProduto({ nome: "Fone de ouvido", preco: 350, emEstoque: false })

// CHAMANDO CLASS
// const estoque = new Estoque()

// estoque.adcionarProduto({nome: "SSD", preco:300})
// estoque.adcionarProduto({ nome: "Memória RAM", preco: 180 })
// estoque.listaProdutos()

