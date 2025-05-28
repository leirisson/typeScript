import { Item } from './classes/Item'
import { Livro } from './classes/Livro'

const livro1 = new Livro("Typescript Básico", "Ana silva")
const itemLivro = new Item(livro1)

itemLivro.mudarStatus('reservado')
livro1.emprestar


// Pontos Chave:
// interface ItemBiblioteca → Define métodos comuns (emprestar, devolver).
// type Status → Union Type para status possíveis.
// class Item<T> → Classe genérica que aceita qualquer ItemBiblioteca.
// class Livro → Implementa a interface.