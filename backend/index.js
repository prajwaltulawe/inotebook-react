const connectToMongo = require('./db');
connectToMongo();

const express = require('express')
const app = express()
const port = 5000
app.use(express.json())

// AVAILABLE ROUTES
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes')); 
app.get('/', (req, res) => {
  res.send('Helloorld!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})