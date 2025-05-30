import { IUser } from '../interfaces/IUser'


const listUsers: IUser[] = []


function cadasTroUSer(user: IUser){
    listUsers.push(user)
    console.log(`${user.nome} cadastrado com sucesso.`)
}


cadasTroUSer({id:"1", nome:"Leirisson", email: "leirisson@example.com", ativo:true})