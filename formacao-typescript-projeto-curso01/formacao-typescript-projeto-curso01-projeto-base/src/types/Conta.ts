import { TipoTransacao } from "./TipoTransacao.js";
import type { Transacao } from "./Transacao.js";

let saldo: number = 3000
const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key:string, value: string) => {
  if(key === "data"){
    return new Date(value)
  }
  
  return value
}) || [];


function debitar(valor: number):void {
  if(valor <=0 ){
    throw new Error("O valor a ser  debitado deve ser maior que zero !")
  } else if (valor > saldo){
    throw new Error("Saldo insuficiente")
  }
  saldo-=valor
}

function depositar(valor: number): void {
  if(valor <= 0){
    throw new Error("O valor para ser depositado deve ser maior que zero !")
  }
  saldo += valor
}

const Conta = {
  getSaldo(){
    return saldo
  },

  getDataDeAcesso(): Date{
    return new Date();
  },

  registrarTransacao(novaTransaCao: Transacao): void {
      if(novaTransaCao.tipoTransacao === TipoTransacao.DEPOSITO){
        depositar(novaTransaCao.valor)
      } 
      else if (novaTransaCao.tipoTransacao === TipoTransacao.TRANSFERENCIA || novaTransaCao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO){
        debitar(novaTransaCao.valor)
      } 
      else {
        throw new Error("tipo de transacão é invalido")
      };

      transacoes.push(novaTransaCao)
      console.log(transacoes)
      localStorage.setItem("transacoes", JSON.stringify(transacoes))
  }
}

export default Conta