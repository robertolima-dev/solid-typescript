import IDbProduct from "./IDbProduct";

export default class MySQLProduct implements IDbProduct {

    findById(productId: number): string {
        return `D => MySQL: exibindo dados do produto: ${productId}`
    }
}