

// Require packages
const express = require('express')
const cors = require('cors')

//Start my app instance
const app = express()

// Setup my middleware so that they can go between data and front end
app.use(express.json())
app.use(cors())

//Endpoints
const {createMessage} = require(`./controller`)

app.post(`/api/messages`, createMessage)



//Open the door to the server
app.listen(4004, () => console.log(`Bonjour from port 4004!`))

