let url_string = window.location;
let url = new URL(url_string);
let token = url.searchParams.get("token")

if (token && !window.localStorage.getItem('token')) {
	window.localStorage.setItem('token', token)
	window.location.href = "/"
}

if (window.localStorage.getItem('token')) {
	console.log('Fetching User Data...')
	$('#login').remove();
	fetch(`https://discordapp.com/api/users/@me`,
	  {
		method: 'GET',
		headers: {
		  Authorization: `Bearer ${window.localStorage.getItem('token')}`,
		},
	  }) .then(response => response.json())
	  .then(json => {
		let user = json
		console.log(user.id)

		document.getElementById('tagline').innerText = `Welcome to my Website, ${user.username}`
		fetch(`http://discord.gusnetworks.me/api/roblox/${user.id}`,
		{
		  method: 'GET',
		}) .then(response => response.json())
		.then(json => {
		  let user = json
		  let robloxUsername = json.robloxUsername

		  document.getElementById('roblox').innerText = `ROBLOX USERNAME: ${robloxUsername}`;
  
		});
	  });

} else {
	console.log('Not Logged In')
}

function logout() {
	window.localStorage.removeItem('token');
	location.reload();
}