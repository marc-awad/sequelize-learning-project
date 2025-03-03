const Reservation = require("../models/Reservation");
const Room = require("../models/Room");
const Employee = require("../models/Employee");
const {Sequelize} = require("sequelize")

// Ajouter une réservation
const addReservation = async (req, res) => {
  try {
    const { roomId, employeeId, startTime, endTime } = req.body;

    // Vérifier la disponibilité de la salle
    const existingReservation = await Reservation.findOne({
      where: {
        roomId,
        startTime: { [Sequelize.Op.lt]: endTime },
        endTime: { [Sequelize.Op.gt]: startTime },
      },
    });

    if (existingReservation) {
      return res.status(400).json({
        message: "Cette salle est déjà réservée pendant cette période.",
      });
    }

    // Créer la réservation
    const reservation = await Reservation.create({
      roomId,
      employeeId,
      startTime,
      endTime,
    });

    res.status(201).json(reservation);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur lors de la création de la réservation." });
  }
};

// Récupérer toutes les réservations
const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      include: [
        { model: Room, attributes: ['name', 'capacity', 'location'] },
        { model: Employee, attributes: ['name', 'email'] },
      ],
    });
    res.status(200).json(reservations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur lors de la récupération des réservations." });
  }
};

// Supprimer une réservation
const deleteReservation = async (req, res) => {
  try {
    const { reservationId } = req.params;

    // Vérifier si la réservation existe
    const reservation = await Reservation.findByPk(reservationId);

    if (!reservation) {
      return res.status(404).json({ message: "Réservation non trouvée." });
    }

    await reservation.destroy();

    res.status(200).json({ message: "Réservation supprimée avec succès." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur lors de la suppression de la réservation." });
  }
};

module.exports = { addReservation, getReservations, deleteReservation };
