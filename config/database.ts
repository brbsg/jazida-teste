import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: "mssql",
    define: {
      timestamps: true,
    },
    schema: process.env.DB_SCHEMA,
    dialectOptions: {
      encrypt: true,
    },
  }
);

export default sequelize;
