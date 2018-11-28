
var start_year = 1560;
var end_year = 1730;

$('.range-slider').jRange({
    from: 1560,
    to: 1730,
    step: 10,
    scale: [1560,1645,1730],
    format: '%s',
    width: 300,
    showLabels: true,
    isRange : true,
    onstatechange: function(value){
    	var year_range = value.split(',');
    	start_year = year_range[0];
    	end_year = year_range[1];
    	console.log(start_year);

    }
});

// "156,3247" -> "156"
// "3247"
// stringtoint

	var mymap = L.map('mapid').setView([57, -4], 6.5);
	L.tileLayer
	('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	// ('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
// 

var WitchIcon = L.icon({
    iconUrl: 'img/icon.png',
    iconSize: [13, 20]
}); 
var emptyIcon = L.icon({
    iconUrl: 'img/empty.png',
    iconSize: [13, 20]
}); 


// var geojsonLayerIncidents = new L.GeoJSON.AJAX("data/accusedlocations.geojson",{
//                                 onEachFeature:function(data){
//                                    return L.geoJson(data, {

//                                       onEachFeature: function (feature, layer) {
//                                       	year = feature.properties.year;
//                                       	if(year>start_year && year < end_year){
//                                       		console.log(year);
//                                       	}
//                                         layer.setIcon(WitchIcon);
//                                       }
//                                     }).addTo(mymap);


//                                 }
//                             });



var geojsonLayerIncidents = new L.GeoJSON.AJAX("data/accusedlocations.geojson",{
                                onEachFeature:function(data){
                                   return L.geoJson(data, {

                                      onEachFeature: function (feature, layer) {
                                      	year = feature.properties.year;
                                      	if(year>start_year && year < end_year){
                                      		// console.log(year);
                                        layer.setIcon(WitchIcon);
                                      	}else{
                                      		layer.setIcon(emptyIcon)
                                      	}
                                      }
                                    }).addTo(mymap);
                                }
                            });

$("#updateMap").click(function(){

// on click
resetMap();


var geojsonLayerIncidents = new L.GeoJSON.AJAX("data/accusedlocations.geojson",{
                                onEachFeature:function(data){
                                   return L.geoJson(data, {

                                      onEachFeature: function (feature, layer) {
                                      	year = feature.properties.year;
                                      	if(year>start_year && year < end_year){
                                      		// console.log(year);
                                        layer.setIcon(WitchIcon);
                                      	}else{
                                      		layer.setIcon(emptyIcon)
                                      	}
                                      }
                                    }).addTo(mymap);
                                }
                            });

});


var resetMap = function(){
	mymap.eachLayer(function (layer) {
    mymap.removeLayer(layer);
});
	L.tileLayer
	('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	// ('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
};



    $("#testbutton").click(function(){
    	resetMap();
     });





