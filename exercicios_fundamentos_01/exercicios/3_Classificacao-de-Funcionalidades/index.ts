// 3. Classificação de Funcionalidades
// Crie um enum chamado FeatureStatus com os valores:
// Active
// Deprecated
// UnderDevelopment
// Implemente uma função que receba um status e retorne uma mensagem explicando o que significa.


enum CallFeatureStatus{
    ACTIVE,
    DEPRECATED,
    UNDERDEVELOPMENT
}

function exibirMensagem(status: CallFeatureStatus): string {
    switch(status){
        case CallFeatureStatus.ACTIVE:
            return "O estado é ativo."
        case CallFeatureStatus.DEPRECATED:
            return "O estado é depreciado."
        case CallFeatureStatus.UNDERDEVELOPMENT:
            return "O projeto está em desenvolvimento."
        default:
            return "Não foi possivel estabeler o status."
    }
}

console.log("resultado das funções: ")
console.log(exibirMensagem(CallFeatureStatus.UNDERDEVELOPMENT))
console.log(exibirMensagem(CallFeatureStatus.DEPRECATED))
