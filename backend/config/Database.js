import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /*mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

export default db;