const dotenv = require('dotenv').config();
const compression = require('compression');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.APP_PORT || 8000;

// Compress all HTTP responses
app.use(compression());
app.use(cors({ credentials: true, origin: '*'}));
app.use(bodyParser.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//----------------------------
//Endpoint
//----------------------------
const UserRouter = require('./src/api/user/user.router')
app.use("/api/", UserRouter)


app.listen(PORT, () => console.log(`Server started on on ${PORT}`));