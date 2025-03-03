const express = require("express")
const router = express.Router()
const {
  addReservation,
  getReservations,
  deleteReservation,
} = require("../controllers/ReservationController")

// Route pour ajouter une réservation
router.post("/reservations", addReservation)

// Route pour obtenir toutes les réservations
router.get("/reservations", getReservations)

// Route pour supprimer une réservation
router.delete("/reservations/:reservationId", deleteReservation)

module.exports = router
