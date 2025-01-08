"use strict";
// Exemplo de Status de Pedido
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pendente"] = 0] = "Pendente";
    OrderStatus[OrderStatus["Processado"] = 1] = "Processado";
    OrderStatus[OrderStatus["Enviado"] = 2] = "Enviado";
    OrderStatus[OrderStatus["Entregue"] = 3] = "Entregue";
})(OrderStatus || (OrderStatus = {}));
function getStatusMessage(status) {
    switch (status) {
        case OrderStatus.Pendente:
            return "Seu pedido esta pendente.";
        case OrderStatus.Entregue:
            return "Sua ordem de serviço foi realizada.";
        case OrderStatus.Enviado:
            return "Sua ordem de serviço foi enviada com sucesso.";
        case OrderStatus.Processado:
            return "Sua ordem de serviço kfoi professa com sucesso.";
        default:
            return "Status não foi definido.";
    }
}
console.log("Status da oredem de serviço: " + getStatusMessage(OrderStatus.Enviado));
