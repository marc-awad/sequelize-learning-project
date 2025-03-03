const { DataTypes } = require("sequelize")
const sequelize = require("../config/database.js")
const Room = require("./Room")
const Employee = require("./Employee")

const Reservation = sequelize.define(
  "Reservation",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Room, key: "id" },
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Employee, key: "id" },
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "reservations",
    timestamps: false,
  }
)

Room.hasMany(Reservation, { foreignKey: "roomId", onDelete: "CASCADE" })
Employee.hasMany(Reservation, { foreignKey: "employeeId", onDelete: "CASCADE" })
Reservation.belongsTo(Room, { foreignKey: "roomId" })
Reservation.belongsTo(Employee, { foreignKey: "employeeId" })

module.exports = Reservation
