import DbProductFactory from "./factory/DbProductFactory"
import MySQLProduct from "./models/MySQLProduct"
import PostgresDbProduct from "./models/PostgresDbProduct"

export default class Payment {

    pay(productId: number) {

        // const dbProduct = new PostgresDbProduct()
        // const dbProduct = new MySQLProduct()
        const dbProduct = DbProductFactory.create()
        const product = dbProduct.findById(productId)

        console.log(product)

        return product

    }

}