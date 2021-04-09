const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Fridge extends Model {
 
}

Fridge.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id"
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Fridge",
  }
);

module.exports = Fridge;
