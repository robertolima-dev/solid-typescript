import Uber from "./Uber"

export default class UberConfort extends Uber {

    constructor(username: string, from: string, to: string, color: string, leatherSeat: boolean = true) {
        super(username, from, to)
        this.selectConfortType(color, leatherSeat)
    }

    selectConfortType(color: string, leatherSeat: boolean): void {

        console.log(`O => A cor do carro tem que ser: ${color}. Banco de couro: ${leatherSeat ? 'sim' : 'não'}`)

    }
}