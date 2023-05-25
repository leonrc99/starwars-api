import { Router } from "express";
import CharacterController from "./controllers/PersonController";

const router = Router()

router.get('/persons', CharacterController.findPerson)

router.get('/person/:id', CharacterController.findPersonById)

router.post('/person', CharacterController.createPerson)

router.put('/person/:id', CharacterController.updatePerson)

router.delete('/person/:id', CharacterController.deletePerson)

export default router
