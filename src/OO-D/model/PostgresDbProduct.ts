import IDbProduct from "./IDbProduct";

export default class PostgresDbProduct implements IDbProduct {

    findById(productId: number): string {
        return `PostgresDb: exibindo dados do produto: ${productId}`
    }

    findAll(limit: number, offset: number) {
        return [
            { id: 1, name: 'Produto 1' },
            { id: 2, name: 'Produto 2' },
            { id: 3, name: 'Produto 3' },
            { id: 4, name: 'Produto 4' },
            { id: 5, name: 'Produto 5' },
        ]
    }

    create(data: any) {
        // criando um produto
        return data
    }

    update(id: number, data: any) {
        // atualizando produto 
        return data
    }

    delete(productId: number): void {
        // deletando produto
        return
    }

}