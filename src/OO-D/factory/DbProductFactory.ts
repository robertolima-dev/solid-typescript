import Db from "../model/Db";
import IDbProduct from "../model/IDbProduct";
import MongoDbProduct from "../model/MongoDbProduct";
import MySQLProduct from "../model/MySQLProduct";
import PostgresDbProduct from "../model/PostgresDbProduct";

export default class DbProductFactory {

    private static type: Db = Db.MYSQL

    public static create(): IDbProduct {

        if (DbProductFactory.type === Db.MYSQL) {

            return new MySQLProduct()

        } else if (DbProductFactory.type === Db.POSTGRESQL) {

            return new PostgresDbProduct()

        } else {

            return new MongoDbProduct()

        }

    }
}