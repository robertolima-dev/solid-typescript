import Customer from "./Customer"


export default class Notify {

    customer: Customer

    constructor(customer) {
        this.customer = customer
    }

    sendEmail(): boolean {

        console.log(`S => Enviando email para: ${this.customer.name}`)
        console.log(`S => Email do user: ${this.customer.email}`)

        this.customer.name
        this.customer.email

        return true

    }


}