const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

require('dotenv').config();


router.get('/:clientId', (req, res) => {
  let id = req.params.clientId
  fetch(`https://verify.eryn.io/api/user/${id}`,
  {
	method: 'GET',
  }) .then(response => response.json())
  .then(json => {
	let user = json
	res.json(user)
  });
});

module.exports = router;