// primeira funcionalidade
type Adress = {
    street: string,
    number: number
}

type User = {
    name?: string
    age: number
    address: Adress
}

type UserPrpriedade = keyof User // o keyof retorna todas as chaves de um objeto

function pegarPropriedade(user: User, propriedade: UserPrpriedade){

    return user[propriedade]
}


const usuario: User = {
    name: 'Leirisson',
    age: 28,
     address: {
        street:'em casa',
        number:12
     }
}




console.log(pegarPropriedade(usuario, 'address'))


