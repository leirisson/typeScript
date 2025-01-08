"use strict";
/**
 *  a função recebe um array de livros e retorna o titulo do livro que esta disponivel no momento
 * @param livros
 * @returns
 */
function listarLivrosDisponiveis(livros) {
    const livrosDisponiveis = livros.filter(livro => livro.isAvailable).map(livro => livro.titulo);
    return livrosDisponiveis;
}
const biblioteca = [
    { titulo: "1984", autor: "George Orwell", paginas: 328, isAvailable: true },
    { titulo: "Brave New World", autor: "Aldous Huxley", paginas: 268, isAvailable: false },
    { titulo: "To Kill a Mockingbird", autor: "Harper Lee", paginas: 281, isAvailable: true },
    { titulo: "The Great Gatsby", autor: "F. Scott Fitzgerald", paginas: 180, isAvailable: false },
    { titulo: "Moby Dick", autor: "Herman Melville", paginas: 635, isAvailable: true },
    { titulo: "War and Peace", autor: "Leo Tolstoy", paginas: 1225, isAvailable: false },
    { titulo: "Pride and Prejudice", autor: "Jane Austen", paginas: 279, isAvailable: true },
    { titulo: "The Catcher in the Rye", autor: "J.D. Salinger", paginas: 214, isAvailable: true },
    { titulo: "The Hobbit", autor: "J.R.R. Tolkien", paginas: 310, isAvailable: false }
];
console.log(listarLivrosDisponiveis(biblioteca));
