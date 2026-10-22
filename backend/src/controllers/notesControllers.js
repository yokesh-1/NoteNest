export const getAllNotes =(req,res) =>{
    res.status(201).send("Fetched Your Notes")
}

export const createNote = (req, res) => {
  res.status(201).json({ message: "Note created" });
};

export const updateNote =  (req,res) =>{
     res.status(200).json({message:"Note Updated"})
 } 


 export const deleteNote = (req,res) =>{
     res.status(200).json({message : "Note Deleted"})
}

