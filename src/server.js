const express = require('express');
const app = express();
const routes = require('./controller/routes')
require('./models/db.js')

require('dotenv').config()


app.use(routes)

app.use(express.json())

app.listen( process.env.PORT ,() => {
    console.log(`Server is listening...`);
  });



