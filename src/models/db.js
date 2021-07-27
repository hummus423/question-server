const mongoose = require('mongoose')
require('dotenv').config()

const DATABASE_URL = `mongodb+srv://Groo_user:${process.env.DB_PASSWORD}@cluster0.8pkjx.mongodb.net/Groo?retryWrites=true&w=majority`

mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{console.log('connected to DB')})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))