require("dotenv").config()
const express = require("express")
const session = require("express-session")

let data = {
    name: "jeremy",
    count: 0
}

const app = express()

const {
    SERVER_PORT,
    SECRET
} = process.env

const port = SERVER_PORT || 3005

app.set("trust proxy", 1)

app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

// endpoints

try {
    app.listen(port, () => console.log(`Listening on port ${port}`))
}
catch(err) {
    throw new Error(err.message)
}