var map_manager = {
    "map" : null,
    "map_items": []
}

map_manager.map_items = [
    {
        "pokemon_id" : 12,
        "expire"     : 1482449688,
        "longitude"  : -73.45,
        "latitude"   : 40.75,
    },
    {
        "pokemon_id" : 11,
        "expire"     : 1482449688,
        "longitude"  : -73.46,
        "latitude"   : 40.74,
    }
]

function query_pokemon_data() {
    var bounds = map_manager.map.getBounds();
    
    var apigClient = apigClientFactory.newClient();

    var params = {
        //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest()
    };
    
    apigClient.mapPokemonGet(params, {}, {})
        .then(function(result){
            //This is where you would put a success callback
            console.log(result)
        }).catch( function(result){
            //This is where you would put an error callback
        });
}

function get_count_down_from_timestamp(expire) {
    var now_time = new Date().getTime() / 1000;
    var time_left = expire - now_time;
    var second = Math.floor(time_left % 60);
    var minute = Math.floor(time_left / 60);
    return minute + ":" + second;
}

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AheCiOGSkSuZ-AsuNQoqbbG55QAS74h9R1Oj6pzsWiZBQZifdk7fKX5LaIv3wI07'
    });
    map_manager.map = map;  
    query_pokemon_data();
    window.setInterval(refresh_pokemon, 1000);
}

function refresh_pokemon() {
    // 1. Pushipins (pushpin layer)
    var layer = new Microsoft.Maps.Layer();
    var pushpins = [];
    for (var i in map_manager.map_items) {
        var map_item = map_manager.map_items[i];
        var icon_url = 'https://github.com/EasonJackson/Pgo_map/raw/master/'+map_item["pokemon_id"]+'.png';
        var count_down = get_count_down_from_timestamp(map_item["expire"]);
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), 
                                       {title: count_down, 
                                        icon: icon_url}); 
        pushpins.push(pushpin);
    }
    
    layer.add(pushpins);
    
    // 2. Remove old pushpins
    map_manager.map.layers.clear();
    
    // 3. Add new pushpins
    map_manager.map.layers.insert(layer);
}
