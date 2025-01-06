import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import SaldoComponent from "./saldo-component.js";


const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", (e) => {
  try {

    e.preventDefault();

    if(!elementoFormulario.checkVisibility()){
      alert("Por favor, peencha todos os campos da transação!");
      return;
    };
  
    const inpuTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;
  
    let tipoTransacao: TipoTransacao = inpuTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);
  
    
    const novaTransaao: Transacao = {
      tipoTransacao: tipoTransacao,
      valor: valor,
      data: data
    };
  
    Conta.registrarTransacao(novaTransaao);
    SaldoComponent.atualizar();
    elementoFormulario.reset();
    
  } catch (error) {
    alert(error.message)
  }
 
});
