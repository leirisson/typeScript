"use strict";
// 5. Agenda de Consultas
// Crie uma interface Appointment com as propriedades:
function getConsultasConfirmadas(consultas) {
    const consultasConfirmadas = consultas.filter(consultas => consultas.isConfirmed ? consultas : '');
    return consultasConfirmadas;
}
const mock_consultas = [
    { id: 1, patienteName: "Alice Johnson", date: new Date("2025-01-10"), isConfirmed: true, type: "Checkup" },
    { id: 2, patienteName: "Bob Smith", date: new Date("2025-01-11"), isConfirmed: false, type: "Dental" },
    { id: 3, patienteName: "Charlie Brown", date: new Date("2025-01-12"), isConfirmed: true, type: "Cardiology" },
    { id: 4, patienteName: "Diana Prince", date: new Date("2025-01-13"), isConfirmed: false, type: "Neurology" },
    { id: 5, patienteName: "Edward Cullen", date: new Date("2025-01-14"), isConfirmed: true, type: "Checkup" },
    { id: 6, patienteName: "Fiona Gallagher", date: new Date("2025-01-15"), isConfirmed: true, type: "Orthopedics" },
    { id: 7, patienteName: "George Michael", date: new Date("2025-01-16"), isConfirmed: false, type: "Pediatrics" },
    { id: 8, patienteName: "Hannah Baker", date: new Date("2025-01-17"), isConfirmed: true, type: "Psychology" },
    { id: 9, patienteName: "Ian Somerhalder", date: new Date("2025-01-18"), isConfirmed: false, type: "Dermatology" },
    { id: 10, patienteName: "Jasmine Carter", date: new Date("2025-01-19"), isConfirmed: true, type: "Checkup" }
];
console.log("consultas confirmadas");
console.log(getConsultasConfirmadas(mock_consultas));
