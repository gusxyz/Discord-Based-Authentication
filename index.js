const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const errorhandler = require('errorhandler');

require('dotenv').config();

const app = express();

//Middleware
app.use(volleyball);

//Routing
app.use('/', express.static('public'));
app.use('/api/discord', require('./routes/discord'));
app.use('/api/roblox', require('./routes/roblox'));

//Errors
app.use(errorhandler());


app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}`);
});