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

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AheCiOGSkSuZ-AsuNQoqbbG55QAS74h9R1Oj6pzsWiZBQZifdk7fKX5LaIv3wI07'
    });
    
    for (var i in map_manager.map_items) {
        var map_item = map_manager.map_items[i];
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude:map_item["latitude"], longitude:map_item["longitude"]), 
                                                 { icon: 'https://github.com/EasonJackson/Pgo_map/raw/master/'+map_item["pokemon_id]+'.png'});
        map.entities.push(pushpin);
    }

}
