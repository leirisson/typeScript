// 6. Controle de Animais em um Zoológico
// Crie um enum chamado AnimalType com:

// Mammal
// Bird
// Reptile
// Amphibian
// Fish
// Crie uma função que receba um animal e retorne se ele é terrestre ou aquático.

enum AnimalType {
    Mammal,
    Bird ,
    Reptile ,
    Amphibian ,
    Fish 
}


function classifyAnimal(animal: AnimalType):string{
    switch(animal){
        case AnimalType.Amphibian:
            return "Este animal é terrestre e aquatico.";
        case AnimalType.Bird:
            return "Este animal é voador.";
        case AnimalType.Fish:
            return "Este animal é aquatico.";
        case AnimalType.Mammal:
            return "Mamiferro é terrestre e aquatico."
        case AnimalType.Reptile:
            return "Este animal é terrestre"
        default:
            return "nem uma animal encontrado."
    }
}

console.log(classifyAnimal(AnimalType.Fish))