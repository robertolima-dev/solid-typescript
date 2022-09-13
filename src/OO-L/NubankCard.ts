import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {

    validate(): void {
        console.log('validacao')
    }

    collectPayment(): void {
        console.log('pagamento realizado')
    }
}