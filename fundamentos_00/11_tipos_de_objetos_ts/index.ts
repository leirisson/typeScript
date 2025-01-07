

// tipos de objetos
// função que recebe um : objeto com cordenadas x e y
function cordenadas(cord: {x:number, y:number}){
  console.log("x: " + cord.x)
  console.log("y: " + cord.y)
}


const cordenadas_mapa = {x: 46698, y: 79954.658}

cordenadas(cordenadas_mapa)