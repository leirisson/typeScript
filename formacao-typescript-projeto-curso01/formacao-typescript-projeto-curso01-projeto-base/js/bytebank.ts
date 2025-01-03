let saldo = 3000;


const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLUnknownElement;
if(elementoSaldo !== null){
    elementoSaldo.textContent = saldo.toString();
}


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

  let tipoTransacao = inpuTipoTransacao.value;
  let valor: number = inputValor.valueAsNumber;
  let data: Date = new Date(inputData.value);

  if(tipoTransacao === "Depósito"){
    saldo += valor;
  } else if (tipoTransacao === "Transferência" || tipoTransacao === "Pagamento de Boleto"){
    saldo -= valor;
  } else {
    alert("tipo de transacão éinvalido")
  };

  elementoSaldo.textContent = saldo.toString();

  
  const novaTransaao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
  };

  console.log(novaTransaao);

  elementoFormulario.reset();
});