// Use um type alias chamado StockItem com:

// id (número)
// name (string)
// quantity (número)
// Crie uma função que verifica se o estoque de um item é menor que 5 e retorna um alerta.

type StockItem = {
    id: number;
    name: string;
    quantity: number;
}

function verificarEsroque(listProduct: StockItem[]): StockItem[] {
    const produtosComBaixoEstoque = listProduct.filter(product => product ? product.quantity < 5: product>5)
    return produtosComBaixoEstoque
}


const listProduct: StockItem[] =[
    { id: 1, name: "Apple", quantity: 50 },
    { id: 2, name: "Banana", quantity: 30 },
    { id: 3, name: "Orange", quantity: 0 },
    { id: 4, name: "Pineapple", quantity: 10 },
    { id: 5, name: "Grapes", quantity: 4 },
    { id: 6, name: "Watermelon", quantity: 15 },
    { id: 7, name: "Strawberry", quantity: 2 },
    { id: 8, name: "Blueberry", quantity: 35 },
    { id: 9, name: "Mango", quantity: 3 },
    { id: 10, name: "Peach", quantity: 18 }
]


console.log(verificarEsroque(listProduct))