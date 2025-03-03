const Room = require("../models/Room")

// Ajouter une salle
const addRoom = async (req, res) => {
  try {
    const { name, capacity, location } = req.body

    const existingRoom = await Room.findOne({ where: { name } })

    if (existingRoom) {
      return res.status(400).json({ message: "Cette salle existe déjà." })
    }

    const room = await Room.create({ name, capacity, location })

    res.status(201).json(room)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Erreur lors de l'ajout de la salle." })
  }
}

// Récupérer toutes les salles
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll()
    res.status(200).json(rooms)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des salles." })
  }
}

// Supprimer une salle
const deleteRoom = async (req, res) => {
  try {
    const { roomId } = req.params

    const room = await Room.findByPk(roomId)

    if (!room) {
      return res.status(404).json({ message: "Salle non trouvée." })
    }

    // Vérifier s'il y a des réservations pour cette salle avant de la supprimer
    const reservations = await Reservation.findAll({ where: { roomId } })

    if (reservations.length > 0) {
      return res
        .status(400)
        .json({ message: "Il y a des réservations pour cette salle." })
    }

    await room.destroy()
    res.status(200).json({ message: "Salle supprimée avec succès." })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de la salle." })
  }
}

module.exports = { addRoom, getRooms, deleteRoom }
