import Note from '../model/Note.js';

export async function  getAllNotes (_,res) {
    try {
        const notes =await Note.find().sort({createdAt : -1}) // sort newest 1st
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
       try {
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},  {new: true } )
    

        // if user tries to update invalide notes
        if(!updatedNote) return res.staus(404).json({message: "Note not found"})

        res.status(200).json({updatedNote})
       } catch (error) {
        console.error("Error in update note" , error)
        res.status(500).json({message: "Internal server Error"})
       }
 } 


 export async function  deleteNote  (req,res){
     try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)

        if(!deleteNote) return res.status(404).json({message:"Note not found"})
     res.status(200).json({message: "Note Deleted"})
     } catch (error) {
        console.error("Error in delete note" , error)
        res.status(500).json({message: "Internal server Error"})
     }
}

export async function getNoteById (req,res) {

    try {
           const {title, content} = req.body

    const noteId = await Note.findById(req.params.id)

    if(noteId) return res.status(404).json({message:"Note not found"} )
    res.staus(200).json(noteId)
    }
     catch(error) {
        console.error("Error in NoteId note" , error)
        res.status(500).json({message :"Internal server Error"})
     }

}