export default interface IPaymentInstrument {

    validate(): void
    collectPayment(): void
}