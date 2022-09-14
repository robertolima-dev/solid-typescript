import Uber from "./Uber"

export default class UberBag extends Uber {

    constructor(username: string, from: string, to: string, bagSize: string) {
        super(username, from, to)
        this.selectBagSize(bagSize)
    }

    selectBagSize(bagSize: string): void {

        console.log(`O tamanho do bagageiro tem que ser: ${bagSize}`)

    }
}