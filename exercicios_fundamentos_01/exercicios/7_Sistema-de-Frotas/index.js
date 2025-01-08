"use strict";
// 7. Sistema de Frotas
// Use uma interface FleetVehicle com:
// plate (string)
// type (usando o enum VehicleType do exemplo acima)
// year (número)
// Crie uma função que retorna todos os veículos do tipo Truck.
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Motorcycle"] = 1] = "Motorcycle";
    VehicleType[VehicleType["Bicycle"] = 2] = "Bicycle";
    VehicleType[VehicleType["Truck"] = 3] = "Truck";
    VehicleType[VehicleType["Bus"] = 4] = "Bus";
    VehicleType[VehicleType["Van"] = 5] = "Van";
    VehicleType[VehicleType["ElectricScooter"] = 6] = "ElectricScooter";
    VehicleType[VehicleType["Tractor"] = 7] = "Tractor";
    VehicleType[VehicleType["Train"] = 8] = "Train";
    VehicleType[VehicleType["Boat"] = 9] = "Boat";
})(VehicleType || (VehicleType = {}));
function Vehicles(vehicles) {
    const trucks = vehicles.filter(vehicle => vehicle.type === VehicleType.Truck ? vehicle : '');
    return trucks;
}
const mockVehicles = [
    { id: 1, plate: "ABR465", type: VehicleType.Car, year: 2015 },
    { id: 2, plate: "BCF789", type: VehicleType.Motorcycle, year: 2018 },
    { id: 3, plate: "CDE123", type: VehicleType.Bicycle, year: 2022 },
    { id: 4, plate: "DEF456", type: VehicleType.Truck, year: 2010 },
    { id: 5, plate: "EFG789", type: VehicleType.Bus, year: 2017 },
    { id: 6, plate: "FGH012", type: VehicleType.Van, year: 2019 },
    { id: 7, plate: "GHI345", type: VehicleType.Truck, year: 2021 },
    { id: 8, plate: "HIJ678", type: VehicleType.Tractor, year: 2012 },
    { id: 9, plate: "IJK901", type: VehicleType.Truck, year: 2016 },
    { id: 10, plate: "JKL234", type: VehicleType.Boat, year: 2020 }
];
console.log("Trucks encontrados");
console.log(Vehicles(mockVehicles));
