import { ITemBiblioteca } from '../interfaces/ItemBiblioteca'


export class Livro implements ITemBiblioteca {
    constructor(
        public titulo: string,
        public autor: string
    ) { }

    emprestar(): void {
        console.log(`Livro "${this.titulo}" emprestado!`)
    }

    devolver(): void {
        console.log(`Livro "${this.titulo}" devolvido`)
    }
}