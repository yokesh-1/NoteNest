import mongoose from "mongoose";

// Create a Schema
// Create a Model based on Schema

const noteSchema = new mongoose.Schema({
    tittle :{
        type:String,
        require: true,
    } ,
    content :{
        type:String,
        require :true,
    } ,
},{
    timestamps: true  // By default givees created and update stamps
})

// Created a Note model with noteSchema
const Note = mongoose.model("Note" , noteSchema)

export default Note ;