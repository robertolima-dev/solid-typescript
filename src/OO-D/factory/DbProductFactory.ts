import Db from "../models/Db";
import IDbProduct from "../models/IDbProduct";
import MongoDbProduct from "../models/MongoDbProduct";
import MySQLProduct from "../models/MySQLProduct";
import PostgresDbProduct from "../models/PostgresDbProduct";

export default class DbProductFactory {

    private static type: Db = Db.MONGODB

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