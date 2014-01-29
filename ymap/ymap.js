    var myMap; 
    var myPlacemark;

    function init(){ 
        myMap = new ymaps.Map ("map", {
            center: [ymaps.geolocation.latitude, ymaps.geolocation.longitude],
            zoom: 12
        });

        //var pointGeometry = new ymaps.geometry.Point;


    	/*var myPlacemark = new ymaps.GeoObject({
			    geometry: {
			    type: "Point",
			   coordinates: [55.76, 37.56]
			}}); 
		*/

		myPlacemark = new ymaps.Placemark();

        myMap.events.add('click', function (e) {
	    	var position = e.get('coordPosition');
			myPlacemark.geometry.setCoordinates(position);

			var latitude = document.getElementById("Latitude");
			var longitude = document.getElementById("Longtitude");

			latitude.value = position[0];
			longitude.value = position[1];
		});

        myMap.geoObjects.add(myPlacemark);

        myMap.controls.add('zoomControl');
		myMap.controls.add('typeSelector');
		myMap.controls.add('scaleLine');
		myMap.controls.add('searchControl');

		myMap.behaviors.enable('scrollZoom');
    }