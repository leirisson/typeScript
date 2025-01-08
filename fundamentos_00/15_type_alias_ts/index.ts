

// criando meu type alias
type ID = string | number


function showId(id: ID){
  console.log(`o id é: ${id}`)
  console.log(typeof id + " <- tipo")
}


showId(1)
showId('2')

