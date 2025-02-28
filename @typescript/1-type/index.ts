

type Usuario = {
    nome: string,
    anoQueNasceu : number
}


function calcularIdade(usuario: Usuario){
    if (usuario.anoQueNasceu >= 2025){
        return 'Ano de nascimento invalido'
    }

    return 2025 - usuario.anoQueNasceu

}


const idade = calcularIdade({anoQueNasceu: 1999, nome:'Leirisson'})