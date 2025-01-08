"use strict";
// 4. Sistema de Pagamento
// Crie um type alias chamado PaymentMethod que pode ser:
function typePayment(payment) {
    if (payment.method === "CreditCard" || payment.method == "DebitCard" || payment.method == "Pix") {
        return "Metodo de pagamento eletrônico.";
    }
    else {
        return "Metodo de pagamento físico.";
    }
}
const pagamento = { method: "CreditCard" };
console.log(typePayment(pagamento));
