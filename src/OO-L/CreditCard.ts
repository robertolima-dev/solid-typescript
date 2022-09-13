import NubankCard from "./NubankCard";

export default class CreditCard extends NubankCard {

    validate(): void {
        console.log('verificando limite...')
    }
}