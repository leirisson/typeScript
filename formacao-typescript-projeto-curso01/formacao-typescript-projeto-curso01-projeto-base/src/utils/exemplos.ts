// arquivo de teste com tipos primitivos aceitados no typeScript

let valor: number = 300;
let nome: string = "";
let isPago: boolean = false
let qualquerCoisa: any = ""

qualquerCoisa = 100

//arrays
const lista: number[] = [];
lista.push(13,12,53,12,43,56,78)

// tipo personalizado = > (type alias)
// type Transacao = { // criando um tipo de dado
//   tipoTransacao : string,
//   data: Date,
//   valor: number
// }


// ================================================================

// controle de valores fixos atraves de Enum
// enum tipoTransacao{
//   DEPOSITO = "Depósito",
//   TRANSFERENCIA = "Transferência",
//   PAGAMENTO_BOLETO = "Pagamento de Boleto"
// }

// ================================================================
// const novaTransacao: Transacao = {
//   tipoTransacao: tipoTransacao.PAGAMENTO_BOLETO,
//   data: new Date(),
//   valor: 0
// }



