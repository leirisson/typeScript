import { Produto } from "../types/Produto"




export class Medicamento {
    private nome:string
    private preco:number
    private quantidadeEstoque : number
    private dataValidade: Date
    private precisaDeReceita: boolean
    private lista: Produto[] = []


    constructor(produto:Produto){
        this.nome = produto.nome
        this.preco = produto.preco
        this.quantidadeEstoque = produto.quantidadeEstoque
        this.precisaDeReceita = produto.precisaDeReceita
        this.dataValidade = produto.dataValidade
    }

    cadastrarProduto(){
        const produto: Produto = {
            nome: this.getNome(),
            preco :this.getPreco(),
            quantidadeEstoque : this.getQuantidadeEstoque(),
            precisaDeReceita : this.getPrecisaDeReceita(),
            dataValidade: this.getDataValidade()
        }

        this.lista.push(produto)
    }

    getDataValidade(){
        return this.dataValidade
    }

    setDataValidade(novaDataValidade: Date){
        this.dataValidade = novaDataValidade
    }

    getNome(): string{
        return this.nome
    }

    setNome(novoNome: string): void{
        this.nome = novoNome
    }

    getPreco(): number{
        return this.preco
    }

    setpreco(novopreco:number): void{
        this.preco = novopreco
    }

    getQuantidadeEstoque(): number {
        return this.quantidadeEstoque
    }

    setQuantidadeEstoque(novaQuantidadeEstoque: number): void{
        this.quantidadeEstoque = novaQuantidadeEstoque
    }

    getPrecisaDeReceita(): boolean{
        return this.precisaDeReceita
    }

    setPrecisaDeReceita(novaPrecisaDeReceita: boolean): void{
        this.precisaDeReceita = novaPrecisaDeReceita
    }

    venda(quantidadeProduto: number){

        if(this.getQuantidadeEstoque() < quantidadeProduto){
            throw new Error("Estoque menor que a quanridade solicitada.")
        }

        const estoque: number = this.getQuantidadeEstoque() -  quantidadeProduto

        this.setQuantidadeEstoque(estoque)

        console.log("Venda realizada com sucesso.")

    }

    exibirEstoque(){
        return this.lista
    }

    estoqueBaixo(){
        if(this.getQuantidadeEstoque() < 5){
            return console.log("Estoque do produto em baixa.")
        }
    }

    proximosDeVencer(){
        return this.lista.filter(p => { // p de produto
            if(p.dataValidade.getMonth() < new Date().getMonth()){
                return p
            }
        })
    }
}