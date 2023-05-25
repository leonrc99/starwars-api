import { Schema } from "mongoose";
import mongoose from "mongoose";

const CharacterModel = new Schema({
    name: String,
    height: Number,
    mass: Number,
    hair_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: String,
    profile_image: String
}, { timestamps: true })

export default mongoose.model('Characters', CharacterModel)
