"use strict";
// 3. Classificação de Funcionalidades
// Crie um enum chamado FeatureStatus com os valores:
// Active
// Deprecated
// UnderDevelopment
// Implemente uma função que receba um status e retorne uma mensagem explicando o que significa.
var CallFeatureStatus;
(function (CallFeatureStatus) {
    CallFeatureStatus[CallFeatureStatus["ACTIVE"] = 0] = "ACTIVE";
    CallFeatureStatus[CallFeatureStatus["DEPRECATED"] = 1] = "DEPRECATED";
    CallFeatureStatus[CallFeatureStatus["UNDERDEVELOPMENT"] = 2] = "UNDERDEVELOPMENT";
})(CallFeatureStatus || (CallFeatureStatus = {}));
function exibirMensagem(status) {
    switch (status) {
        case CallFeatureStatus.ACTIVE:
            return "O estado é ativo.";
        case CallFeatureStatus.DEPRECATED:
            return "O estado é depreciado.";
        case CallFeatureStatus.UNDERDEVELOPMENT:
            return "O projeto está em desenvolvimento.";
        default:
            return "Não foi possivel estabeler o status.";
    }
}
console.log("resultado das funções: ");
console.log(exibirMensagem(CallFeatureStatus.UNDERDEVELOPMENT));
console.log(exibirMensagem(CallFeatureStatus.DEPRECATED));
