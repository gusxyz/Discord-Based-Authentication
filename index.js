const express = require('express');
const path = require('path');
const volleyball = require('volleyball');

require('dotenv').config();

const app = express();

//Middleware
app.use(volleyball);

//Routing
app.use('/', express.static('public'));
app.use('/api/discord', require('./routes/discord'));
app.use('/api/roblox', require('./routes/roblox'));


app.use((err, req, res, next) => {
	switch (err.message) {
		case 'NoCodeProvided':
			return res.status(400).send({
				status: 'ERROR',
				error: err.message,
			});
		default:
			return res.status(500).send({
				status: 'ERROR',
				error: err.message,
			});
	}
});

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}`);
});