// 4. Sistema de Pagamento
// Crie um type alias chamado PaymentMethod que pode ser:

// "CreditCard"
// "DebitCard"
// "Cash"
// "Pix"
// Crie uma função que receba um método de pagamento e retorne se é um método eletrônico ou físico.

type PaymentMethod = {
    method: string;
}

function typePayment(payment: PaymentMethod): string{
    if (payment.method === "CreditCard" || payment.method == "DebitCard" || payment.method == "Pix"){
        return "Metodo de pagamento eletrônico."
    } else {
        return "Metodo de pagamento físico."
    }
}

const pagamento = {method: "CreditCard"}
console.log(typePayment(pagamento))