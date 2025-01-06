import { formatarMoeda } from "../utils/Formatadores.js";
import { FormatarData } from "../types/FormatoData.js";
import { formatarData } from "../utils/Formatadores.js";
import Conta from "../types/Conta.js";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoDataAcesso !== null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataDeAcesso(), FormatarData.DIA_DA_SEMANDA_DIA_MES_ANO);
}

renderizarSaldo()

function renderizarSaldo(): void {
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }

}

const SaldoComponent = {
    atualizar(){
        renderizarSaldo()
    }
}

export default SaldoComponent