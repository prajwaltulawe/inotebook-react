const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/inote', {useNewUrlParser: true, useUnifiedTopology: true});

const connectToMongo = () =>{
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log("established");
    });
}

module.exports = connectToMongo;