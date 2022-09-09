import DbProductFactory from "./factory/DbProductFactory"
import MySQLProduct from "./model/MySQLProduct"

export default class Payment {

    pay(productId: number) {

        const dbProduct = DbProductFactory.create()
        const product = dbProduct.findById(productId)

        console.log(product)

        return product

    }
}