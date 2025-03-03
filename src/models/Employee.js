const { DataTypes } = require("sequelize")
const sequelize = require("../config/database.js")

// id primary ,name, email unique
const Employee = sequelize.define(
  "Employee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
  },
  {
    timestamps: false,
    tableName: "employees",
  }
)

module.exports = Employee
