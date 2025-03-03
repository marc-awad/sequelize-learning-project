const Employee = require("../models/Employee")

const addEmployee = async (req, res) => {
  try {
    const { name, email } = req.body
    const employee = await Employee.create({ name, email })
    res.status(201).json(employee)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Erreur lors de l'ajout de l'employé." })
  }
}

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll()
    res.status(200).json(employees)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "Erreur lors de la récuparations des employés" })
  }
}

const deleteEmployees = async (req, res) => {
  try {
    const { email } = req.body

    if (!email) return res.status(400).json({ message: "L'email est recquis." })

    const deletedEmployee = await Employee.destroy({ where: { email } })

    if (deletedEmployee === 0)
      return res
        .status(404)
        .json({ message: "Aucun employé trouvé avec ce mail" })

    res.status(200).json("Employé supprimé avec succés")
  } catch (error) {
    console.log(error)
    res.status(500).json("Erreur lors de la supppresion")
  }
}

module.exports = { addEmployee, getEmployees, deleteEmployees }
