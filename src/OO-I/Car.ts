import IVehicle from "./interfaces/IVehicle"
import IVehicleCar from "./interfaces/IVehicleCar"

export default class TopCar implements IVehicleCar, IVehicle {

    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number
    ) {
        this.configureCar(color, year, engine, seats)
    }

    startVehicle(): void {
        console.log('I => ligando os motores')
    }

    configureCar(color: string, year: number, engine: number, seats: number): void {
        console.log(`I => carro da cor ${color}, do ano ${year} com motor ${engine} e com ${seats} assentos.`)

        this.startVehicle()

    }

}