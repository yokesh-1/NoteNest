import Note from '../model/Note.js';

export async function  getAllNotes (req,res) {
    try {
        const notes =await Note.find()
        res.status(200).json({notes})
    } catch (error) {
        console.error("Error in getAllNotes" , error)
        res.status(500).json({message: "Internal server Error"})
    }
}

export async function  createNote(req, res) {
  try {
    const {title , content} = req.body
    const note = new Note({title , content})

    const savedNote = await note.save()
    res.status(201).json(savedNote)
  } catch (error) {
        console.error("Error in createNote" , error)
        res.status(500).json({message: "Internal server Error"})
  } 
};

export async function  updateNote  (req,res) { 
     res.status(200).json({message:"Note Updated"})
     cons
 } 


 export async function  deleteNote  (req,res){
     res.status(200).json({message : "Note Deleted"})
}

