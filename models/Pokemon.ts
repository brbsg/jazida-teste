import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Pokemon = sequelize.define("Pokemon", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});
