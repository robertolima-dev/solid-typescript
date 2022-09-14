import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {

    validate(): void {
        console.log('validacao nubank card!')
    }

    collectPayment(): void {
        console.log('pagamento realizado com sucesso')
    }
}