// 8. Gestão de Biblioteca
// Crie uma interface LibraryBook com:

// id (número)
// title (string)
// author (string)
// genre (string)
// Crie uma função que filtra os livros por gênero.

interface LibraryBook {
    id: number;
    title: string;
    author: string;
    genre: string;
}


const filterBook = (books: LibraryBook[], genre: string): LibraryBook[] => {
    const booksFilter = books.filter(book => book.genre === genre ? book : '')
    return booksFilter
}

const mockBooks = [
    { id: 1, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { id: 4, title: "Moby Dick", author: "Herman Melville", genre: "Adventure" },
    { id: 5, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
    { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Coming-of-Age" },
    { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
    { id: 8, title: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction" },
    { id: 9, title: "War and Peace", author: "Leo Tolstoy", genre: "Historical" },
    { id: 10, title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Psychological" }
]


console.log(filterBook(mockBooks, "Psychological"))
console.log(filterBook(mockBooks, "Fantasy"))