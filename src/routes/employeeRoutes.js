const express = require("express")
const router = express.Router()
const {
  addEmployee,
  getEmployees,
  deleteEmployees,
} = require("../controllers/EmployeeController")

router.post("/employees", addEmployee)

router.get("/employees", getEmployees)

router.delete("/employees", deleteEmployees)

module.exports = router
