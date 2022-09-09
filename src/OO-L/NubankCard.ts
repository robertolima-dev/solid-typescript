import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {

    validate(): void {
        console.log('L => validacao')
    }

    collectPayment(): void {
        console.log('L => pagamento realizado')
    }
}