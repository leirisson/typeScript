// Exemplo de Informações de Usuário:
type User = {
  id: number;
  nome: string;
  email: string;
  estaAtivo: boolean;
}


// criando uma função para filtrar os usuarios que estão ativos
const  getUsuarios = (usuario: User[]): User[] => {
  const usuarios_ativos: User[] = usuario.filter(usuarios => usuarios.estaAtivo);
    return usuarios_ativos
}

const mock_usuarios: User[] = [
  { id: 1, nome: "Alice", email: "alice@example.com", estaAtivo: true },
  { id: 2, nome: "Bob", email: "bob@example.com", estaAtivo: false },
  { id: 3, nome: "Charlie", email: "charlie@example.com", estaAtivo: true },
  { id: 4, nome: "Diana", email: "diana@example.com", estaAtivo: true },
  { id: 5, nome: "Eve", email: "eve@example.com", estaAtivo: false },
  { id: 6, nome: "Frank", email: "frank@example.com", estaAtivo: true },
  { id: 7, nome: "Grace", email: "grace@example.com", estaAtivo: true },
  { id: 8, nome: "Hank", email: "hank@example.com", estaAtivo: false },
  { id: 9, nome: "Ivy", email: "ivy@example.com", estaAtivo: true },
  { id: 10, nome: "Jack", email: "jack@example.com", estaAtivo: false }
];


console.log(getUsuarios(mock_usuarios))