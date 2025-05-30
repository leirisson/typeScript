import { IProfissao } from './interfaces/IProfissao'


function showInfo(usuario: IProfissao){
    console.log(`${usuario.cargo} - ${usuario.salario}`)
}



const user: IProfissao = {
    cargo: "tecnico",
    empresa: "compulab",
    salario: 12345,
    tempoDeCasa: 5
}

showInfo(user)