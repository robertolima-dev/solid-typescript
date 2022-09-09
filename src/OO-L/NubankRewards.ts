import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {

    validate(): void {
        console.log('L => verigicar a pontuacao no rewrds')
    }

    collectPayment(): void {
        console.log('L => pagamento com a pontuacao do rewards')
    }
}