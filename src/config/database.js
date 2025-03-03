require("dotenv").config()
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
)

sequelize
  .sync({ force: false }) // force: true supprime et recrée les tables, force: false préserve les données
  .then(() => {
    console.log("Tables synchronisées avec succès")
  })
  .catch((error) => {
    console.error("Erreur de synchronisation :", error)
  })

module.exports = sequelize
