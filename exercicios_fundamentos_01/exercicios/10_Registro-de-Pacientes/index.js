"use strict";
// 10. Registro de Pacientes
// Crie uma interface Patient com:
function getPlusAge60(patines) {
    const listPatientes = patines.filter(patient => patient.age > 60 ? patient : '');
    return listPatientes;
}
const mockPatients = [
    { id: 1, name: "Alice Johnson", age: 34, conditional: "Hypertension" },
    { id: 2, name: "Bob Smith", age: 45, conditional: "Diabetes" },
    { id: 3, name: "Charlie Brown", age: 29, conditional: "Asthma" },
    { id: 4, name: "Diana Prince", age: 38, conditional: "Arthritis" },
    { id: 5, name: "Edward Cullen", age: 50, conditional: "High Cholesterol" },
    { id: 6, name: "Fiona Gallagher", age: 64, conditional: "Thyroid Disorder" },
    { id: 7, name: "George Michael", age: 73, conditional: "Depression" },
    { id: 8, name: "Hannah Baker", age: 27, conditional: "Migraine" },
    { id: 9, name: "Ian Somerhalder", age: 36, conditional: "Obesity" },
    { id: 10, name: "Jasmine Carter", age: 22, conditional: "Anemia" },
    { id: 11, name: "Kyle Anderson", age: 40, conditional: "Hypertension" },
    { id: 12, name: "Liam Neeson", age: 55, conditional: "Diabetes" },
    { id: 13, name: "Megan Fox", age: 33, conditional: "Asthma" },
    { id: 14, name: "Nina Dobrev", age: 42, conditional: "Arthritis" },
    { id: 15, name: "Oliver Queen", age: 60, conditional: "High Cholesterol" },
    { id: 16, name: "Penelope Cruz", age: 19, conditional: "Anemia" },
    { id: 17, name: "Quentin Tarantino", age: 48, conditional: "Depression" },
    { id: 18, name: "Rachel Green", age: 30, conditional: "Migraine" },
    { id: 19, name: "Steven Tyler", age: 82, conditional: "Thyroid Disorder" },
    { id: 20, name: "Tina Turner", age: 100, conditional: "Arthritis" }
];
console.log(getPlusAge60(mockPatients));
