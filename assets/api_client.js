var POKEMON_SERVER_URL = "http://localhost"
var PORT = "8000"

var api_client = {}

api_client.GetPokemon = function(param, response) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			response(JSON.parse(xhr.responseText));
		}
	}
	var req =  "?north=" + param.north +"south=" + param.south + "east=" + param.east + "west=" + param.west;
	console.log(req);
	xhr.open('GET', POKEMON_SERVER_URL + PORT + req, true);
	xhr.send();
	response();
};

// Test
api_client.GetPokemonTest = function(param, response) {
	response({"status":1,
			  "data": [ {"pokemon_id" : 62,
		  				 "expire" : 1520392423352,
		  				 "longitude" : -71.9063355,
		  				 "latitude" : 42.2746621}, 
		  				 {"pokemon_id" : 28,
		  				 "expire" : 1520392423356,
		  				 "longitude" : -71.8063397,
		  				 "latitude" : 42.2846678},
		  				 {"pokemon_id" : 18,
		  				 "expire" : 1520392423356,
		  				 "longitude" : -71.8563397,
		  				 "latitude" : 42.2846678},
		  				 {"pokemon_id" : 1,
		  				 "expire" : 1520392423356,
		  				 "longitude" : -71.7063397,
		  				 "latitude" : 42.2546678},
		  				 {"pokemon_id" : 90,
		  				 "expire" : 1520392423356,
		  				 "longitude" : -71.8107397,
		  				 "latitude" : 42.1846678},
		  				 {"pokemon_id" : 105,
		  				 "expire" : 1520392423356,
		  				 "longitude" : -71.8363397,
		  				 "latitude" : 41.2846678},
		  				 {"pokemon_id" : 125,
		  				 "expire" : 1520392423356,
		  				 "longitude" : -71.8563397,
		  				 "latitude" : 41.2846678},
		  				 {"pokemon_id" : 155,
		  				 "expire" : 1520392423356,
		  				 "longitude" : -71.2063397,
		  				 "latitude" : 41.2846678},
		  				 {"pokemon_id" : 457,
		  				 "expire" : 1520392423356,
		  				 "longitude" : -71.8063397,
		  				 "latitude" : 42.3046678} ]
  				});
};