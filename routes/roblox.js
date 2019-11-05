const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

require('dotenv').config();


router.get('/user/:clientId', (req, res) => {
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

router.get('/clearance/:username', (req,res) => {
/* 	fetch('https://api.trello.com/1/boards/2uUwBOrh/lists?fields=name,url&key=4ab69a6f55784a8a21e6f2f154c6fc75&token=5dfea0e2aa20920451e23eb5ac95fca81a2cc8019d02bd7c683b0937b35622d5',
	{
		method: 'GET',
	}).then(res => res.json())
	.then(json => {
		let good = []
		let only = ['Confidential (IC/C)', 'Secret (IC/S)','Top Secret (IC/TS)']
		json.forEach(i => {
			only.forEach(x => {
				if (i.name === x) {
					good.push(i)
				}
			});
		});

		for(let x in good) {
			const request = async () => {
				let array = []
				const response = await fetch(`https://api.trello.com/1/lists/${good[x].id}/cards?fields=name,url&key=4ab69a6f55784a8a21e6f2f154c6fc75&token=5dfea0e2aa20920451e23eb5ac95fca81a2cc8019d02bd7c683b0937b35622d5`);
				const json = await response.json();
				json.forEach(i => {
					if (i.name !== 'Personnel:') {
						array.push(i.name)
					}
				});
				return array
			}
			request();
		}
		res.json(baddada);
	});
 */
res.json({status: 'IN DEVELOPMENT'});
});

module.exports = router;