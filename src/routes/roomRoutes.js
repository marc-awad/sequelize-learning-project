const express = require("express")
const router = express.Router()
const {
  addRoom,
  getRooms,
  deleteRoom,
} = require("../controllers/RoomController")

// Route pour ajouter une salle
router.post("/rooms", addRoom)

// Route pour obtenir toutes les salles
router.get("/rooms", getRooms)

// Route pour supprimer une salle
router.delete("/rooms/:roomId", deleteRoom)

module.exports = router
