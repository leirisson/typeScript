"use strict";
// 6. Controle de Animais em um Zoológico
// Crie um enum chamado AnimalType com:
// Mammal
// Bird
// Reptile
// Amphibian
// Fish
// Crie uma função que receba um animal e retorne se ele é terrestre ou aquático.
var AnimalType;
(function (AnimalType) {
    AnimalType[AnimalType["Mammal"] = 0] = "Mammal";
    AnimalType[AnimalType["Bird"] = 1] = "Bird";
    AnimalType[AnimalType["Reptile"] = 2] = "Reptile";
    AnimalType[AnimalType["Amphibian"] = 3] = "Amphibian";
    AnimalType[AnimalType["Fish"] = 4] = "Fish";
})(AnimalType || (AnimalType = {}));
function classifyAnimal(animal) {
    switch (animal) {
        case AnimalType.Amphibian:
            return "Este animal é terrestre e aquatico.";
        case AnimalType.Bird:
            return "Este animal é voador.";
        case AnimalType.Fish:
            return "Este animal é aquatico.";
        case AnimalType.Mammal:
            return "Mamiferro é terrestre e aquatico.";
        case AnimalType.Reptile:
            return "Este animal é terrestre";
        default:
            return "nem uma animal encontrado.";
    }
}
console.log(classifyAnimal(AnimalType.Fish));
