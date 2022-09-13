import IVehicle from "./interfaces/IVehicle"
import IVehicleCar from "./interfaces/IVehicleCar"

export default class TopCar implements IVehicleCar, IVehicle {

    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number,
        doors: number
    ) {
        this.configureCar(color, year, engine, seats, doors)
    }

    startVehicle(): void {
        console.log('ligando os motores')
    }

    configureCar(color: string, year: number, engine: number, seats: number, doors: number): void {
        console.log(`carro da cor ${color}, do ano ${year} com motor ${engine}, com ${seats} assentos e com ${doors} portas`)

        this.startVehicle()

    }

}