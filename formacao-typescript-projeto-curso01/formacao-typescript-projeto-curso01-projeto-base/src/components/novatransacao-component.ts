import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import { atualizarSaldo, getSaldo } from "./saldo-component.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", (e) => {
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
  let saldo: number = getSaldo();

  if(tipoTransacao === TipoTransacao.DEPOSITO){
    saldo += valor;
  } else if (tipoTransacao === TipoTransacao.TRANSFERENCIA || tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO){
    saldo -= valor;
  } else {
    alert("tipo de transacão éinvalido")
  };

  atualizarSaldo(saldo);

  
  const novaTransaao: Transacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
  };

  console.log(novaTransaao);
  

  elementoFormulario.reset();
});
