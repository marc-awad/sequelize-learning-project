const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

// Importer les routes
const roomRoutes = require("./routes/roomRoutes")
const reservationRoutes = require("./routes/reservationRoutes")
const employeeRoutes = require("./routes/employeeRoutes")

// Middleware pour parser le corps des requêtes JSON
app.use(bodyParser.json())

// Utilisation des routes
app.use("/api", roomRoutes)
app.use("/api", reservationRoutes)
app.use("/api", employeeRoutes)

// Lancer le serveur
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
