import { IPessoa } from "./IPessoa";


export interface IFuncionario extends IPessoa {
    cargo: string,
    salario: number,
}

