let valor = 300;
let nome = "";
let isPago = false;
let qualquerCoisa = "";
qualquerCoisa = 100;
//arrays
const lista = [];
lista.push(13, 12, 53, 12, 43, 56, 78);
// controle de valores fixos atraves de Enum
var tipoTransacao;
(function (tipoTransacao) {
    tipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    tipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    tipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(tipoTransacao || (tipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: tipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
};
