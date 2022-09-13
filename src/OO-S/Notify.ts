import Customer from "./Customer"


export default class Notify {

    customer: Customer

    constructor(customer) {
        this.customer = customer
    }

    sendEmail(): boolean {

        console.log(`Enviando email para: ${this.customer.name}`)
        console.log(`Email do user: ${this.customer.email}`)

        this.customer.name
        this.customer.email

        return true

    }


}