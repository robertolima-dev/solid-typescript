import IVehicle from "./interfaces/IVehicle"
import IVehicleMotorcycle from "./interfaces/IVehicleMotorcycle"

export default class TopMotorcycle implements IVehicleMotorcycle, IVehicle {

    constructor(
        color: string,
        year: number,
        engine: number
    ) {
        this.configureMotorcycle(color, year, engine)
    }

    startVehicle(): void {
        console.log('ligando os motores')
    }

    configureMotorcycle(color: string, year: number, engine: number): void {
        console.log(`moto da cor ${color}, do ano ${year} e com motor ${engine}cc.`)

        this.startVehicle()
    }

}