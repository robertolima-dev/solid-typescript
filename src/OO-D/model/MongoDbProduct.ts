import IDbProduct from "./IDbProduct";

export default class MongoDbProduct implements IDbProduct {

    findById(productId: number): string {
        return `D => MongoDb: exibindo dados do produto: ${productId}`
    }

}