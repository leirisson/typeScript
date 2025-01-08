


// criando interfaces

interface Ponto {
  x: number
  y: number
  z: number
}


function showCordenadas(objetoInt: Ponto){
  console.log(objetoInt.x)
  console.log(objetoInt.y)
  console.log(objetoInt.z)


}
const cord = {
  x: 10,
  y:6548,
  z: 78654123
}
showCordenadas(cord)