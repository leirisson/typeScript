import Conta from "../types/Conta.js";
import SaldoComponent from "./saldo-component.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", (e) => {
    try {
        e.preventDefault();
        if (!elementoFormulario.checkVisibility()) {
            alert("Por favor, peencha todos os campos da transação!");
            return;
        }
        ;
        const inpuTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        const inputValor = elementoFormulario.querySelector("#valor");
        const inputData = elementoFormulario.querySelector("#data");
        let tipoTransacao = inpuTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value);
        const novaTransaao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
        Conta.registrarTransacao(novaTransaao);
        SaldoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
