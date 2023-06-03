const express = require("express");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

const router = express.Router();
const fetchUser = require("../middleware/fetchUser");

// GET ALL NOTES OF LOGED IN USER GET "/API/FETCHUSER"
router.get("/fetchAllNotes", fetchUser, async (req, res) => {
    try {        
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Some Error Occoured");
    }
});

// ADD NOTES OF LOGED IN USER GET "/API/ADDNOTE"
router.post("/addNote", fetchUser,
  [
    body("title", "Title length must be more than 3 characters").isLength({
      min: 2,
    }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 3,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
        console.error(error);
        res.status(500).send("Some Error Occoured");
    }
  }
);

// UPDATE NOTE PUT "/API/UPDATE"
router.put("/updateNote/:id", fetchUser, async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // CREATE NEW NOTES OBJECT
      const newNote = {};
      if(title) {newNote.title = title}
      if(description) {newNote.description = description}
      if(tag) {newNote.tag = tag}

      // FINDING NOTE TO BE UPDATED
      let note = await Notes.findById(req.params.id);
      if (!note) { return res.status(500).send("Not Found");   }
    
      if(note.user.toString() != req.user.id){
        return res.status(401).send("Not Allowed")
      }

      note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true});
      res.json({note});

    } catch (error) {
        console.error(error);
        res.status(500).send("Some Error Occoured");
    }
  }
);

// DELETE NOTE DELETE "/API/DELETE"
router.delete("/deleteNote/:id", fetchUser, async (req, res) => {
  try {
    // FINDING NOTE TO BE DELETED
    let note = await Notes.findById(req.params.id);
    if (!note) { return res.status(500).send("Not Found");   }

    // CHECK OWNER OF POST
    if(note.user.toString() != req.user.id){
      return res.status(401).send("Not Allowed")
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({"Sucess": "Note is Deleted", note: note});

  } catch (error) {
      console.error(error);
      res.status(500).send("Some Error Occoured");
  }
}
);


module.exports = router;