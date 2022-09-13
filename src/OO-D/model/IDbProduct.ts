export default interface IDbProduct {

    findById(productId: number): string
    findAll(limit: number, offset: number): any
    create(data: any): any
    update(id: number, data: any): any
    delete(productId: number): void

}