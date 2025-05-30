import { IFuncionario } from '../src/interfaces/IFuncionario'

function showFuncionario(funcionario: IFuncionario){
    console.log(funcionario)
}


const funcionario: IFuncionario = {
    nome: "Leirisson",
    idade: 15,
    cargo: "tecnico",
    salario: 2500,

}
showFuncionario(funcionario)