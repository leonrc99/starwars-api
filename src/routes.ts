import { Router } from "express";
import CarController from "./controllers/PersonController";

const router = Router()

router.get('/persons', CarController.findPerson)

router.get('/person/:id', CarController.findPersonById)

router.post('/person', CarController.createPerson)

router.put('/person/:id', CarController.updatePerson)

router.delete('/person/:id', CarController.deletePerson)

export default router
