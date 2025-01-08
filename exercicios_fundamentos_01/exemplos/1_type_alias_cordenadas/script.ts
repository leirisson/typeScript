type Cordenadas = {
  latitude: number;
  longitude: number;
}

const calcularDistancia = (pontoA: Cordenadas, pontoB: Cordenadas): number => {
  return Math.sqrt(
    Math.pow(pontoB.latitude - pontoA.longitude, 2) + 
    Math.pow(pontoB.longitude - pontoA.latitude, 2)
  );
}

// criando os dois pontos 
const pontoA = {latitude: 10, longitude: 65}
const pontoB = {latitude: 100, longitude: 165}

console.log(calcularDistancia(pontoA, pontoB))