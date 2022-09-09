import IDbProduct from "./IDbProduct";

export default class PostgresDbProduct implements IDbProduct {

    findById(productId: number): string {
        return `D => PostgresDb: exibindo dados do produto: ${productId}`
    }

}