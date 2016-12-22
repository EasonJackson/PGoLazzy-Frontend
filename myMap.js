var map_manager = {
    "map" : null,
    "map_items": []
}

map_manager.map_items = [
    {
        "pokemon_id" : 12,
        "expire"     : 1480822665,
        "longitude"  : -73.45,
        "latitude"   : 40.75,
    },
    {
        "pokemon_id" : 11,
        "expire"     : 1480822665,
        "longitude"  : -73.46,
        "latitude"   : 40.74,
    },
]

function get_countdown_from_timestamp(expire) {
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
    
    for (var i in map_manager.map_items) {
        var map_item = map_manager.map_items[i];
        var icon_url = 'https://github.com/EasonJackson/Pgo_map/raw/master/'+map_item["pokemon_id"]+'.png';
        var count_down = get_count_down_from_timestamp(map_item["expire"]);
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), 
                                       {title: count_down, 
                                        icon: icon_url});
        map.entities.push(pushpin);
    }

}
