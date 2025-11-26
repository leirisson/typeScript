

import { Produto } from "./types/Produto"
import { Medicamento } from "./classes/Medicamento"

const produto1: Produto = {
    nome: "Paracetamol 500mg",
    preco: 15.90,
    precisaDeReceita: true,
    quantidadeEstoque: 50,
    dataValidade: new Date("2025-12-31")
  }


  const produto2 = {
    nome: "Shampoo Anticaspa",
    preco: 25.50,
    precisaDeReceita: false,
    quantidadeEstoque: 120,
    dataValidade: new Date("2026-06-15")
  }

const p1 = new Medicamento(produto1)
const p2 = new Medicamento(produto2)

p1.cadastrarProduto()
p2.cadastrarProduto()


console.log(p1.exibirEstoque())
// console.log(p2.exibirEstoque())
console.log(p2.proximosDeVencer())