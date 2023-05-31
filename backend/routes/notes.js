const express = require("express");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

const router = express.Router();
const fetchUser = require("../middleware/fetchUser");

// GET ALL NOTES OF LOGED IN USER GET"/API/"
router.get("/fetchAllNotes", fetchUser, async (req, res) => {
    try {        
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Some Error Occoured");
    }
});

// ADD NOTES OF LOGED IN USER GET"/API/"
router.post(
  "/addNote",
  fetchUser,
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

module.exports = router;
