// Exemplo de Status de Pedido

enum OrderStatus {
  Pendente,
  Processado,
  Enviado,
  Entregue,
}


function getStatusMessage(status: OrderStatus): string {

    switch(status){
        case OrderStatus.Pendente:
            return "Seu pedido esta pendente."
        case OrderStatus.Entregue:
            return "Sua ordem de serviço foi realizada."
        case OrderStatus.Enviado:
            return "Sua ordem de serviço foi enviada com sucesso."
        case OrderStatus.Processado:
            return "Sua ordem de serviço kfoi professa com sucesso."
        default:
            return "Status não foi definido."
    }
}

console.log("Status da oredem de serviço: " + getStatusMessage(OrderStatus.Enviado))