const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const path = require('path')
require('dotenv').config()
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL

const db = mongoose.connect(mongoString).then(() => {
    console.log(`db connected`);
}).catch((err) => { console.log(err) });

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))

app.use('/file', require("./routes/file.routes"))
app.use('/user', require("./routes/user.routes"))

app.listen(3000, () => { console.log("listing on port 3000") });
module.exports = db