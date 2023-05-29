const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    describtion: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: "General"
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("notes", NotesSchema);