import { Request, Response } from "express";
import PersonModel from "../database/PersonModel";


const PersonController = {
    async findPerson( req: Request, res: Response): Promise<Response> {
        let persons = await PersonModel.find()
        return res.json(persons)
    },

    async findPersonById( req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        let person = await PersonModel.findById(id)
        return res.json(person)
    },

    async createPerson( req: Request, res: Response): Promise<Response> {
        let person = await PersonModel.create(req.body)
        return res.json(person)
    },

    async updatePerson( req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        let person = await PersonModel.findByIdAndUpdate(id, req.body)
        return res.json(person)
    },

    async deletePerson( req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        let person = await PersonModel.findByIdAndDelete(id)
        return res.json(person)
    },
}

export default PersonController

