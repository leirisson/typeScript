import { formatarMoeda } from "../utils/Formatadores.js";
import { FormatarData } from "../types/FormatoData.js";
import { formatarData } from "../utils/Formatadores.js";
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatarData.DIA_DA_SEMANDA_DIA_MES_ANO);
}
export function getSaldo() {
    return saldo;
}
atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo) {
    saldo += novoSaldo;
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}
