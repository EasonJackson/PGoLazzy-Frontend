var map;

map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    credentials: ' AheCiOGSkSuZ-AsuNQoqbbG55QAS74h9R1Oj6pzsWiZBQZifdk7fKX5LaIv3wI07'
});

var pushpin 

pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',});

map.entities.push(pushpin);
