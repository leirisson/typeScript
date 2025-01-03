import { formatarMoeda } from "../utils/Formatadores.js";
import { FormatarData } from "../types/FormatoData.js";
import { formatarData } from "../utils/Formatadores.js";

let saldo: number = 3000;


const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;


if (elementoDataAcesso !== null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatarData.DIA_DA_SEMANDA_DIA_MES_ANO);
}


export function getSaldo(): number {
    return saldo;
}

atualizarSaldo(saldo)
export function atualizarSaldo(novoSaldo: number): void {
    saldo += novoSaldo;

    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    }

}