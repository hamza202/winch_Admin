function initAutocomplete() {
    (function (A) {

        if (!Array.prototype.forEach)
            A.forEach = A.forEach || function (action, that) {
                for (var i = 0, l = this.length; i < l; i++)
                    if (i in this)
                        action.call(that, this[i], i, this);
            };

    })(Array.prototype);

    var
        mapObject,
        markers = [],
        markersData = {
            'Marker': [
                {
                    location_latitude: 48.865633,
                    location_longitude: 2.321236,
                    name: 'hamza abo aitah',
                    user_link: '#',
                    user_image: 'images/img2.png',
                    phone: '+966 560010002',
                    services_image: 'images/img1.svg',
                    services_type: 'Car services',
                    services_name: 'Repair Tire',
                    category: 'active'
                },
                {
                    name: 'ahmed mahmoud',
                    location_latitude: 48.854183,
                    location_longitude: 2.354808,
                    user_link: '#',
                    user_image: 'images/img2.png',
                    phone: '+966 560010002',
                    services_image: 'images/img1.svg',
                    services_type: 'Car services',
                    services_name: 'Repair Tire',
                    category: 'active'
                },
                {
                    name: 'waseem barzaq',
                    location_latitude: 48.863893,
                    location_longitude: 2.342348,
                    user_link: '#',
                    user_image: 'images/img2.png',
                    phone: '+966 560010002',
                    services_image: 'images/img1.svg',
                    services_type: 'Car services',
                    services_name: 'Repair Tire',
                    category: 'active'

                },
                {
                    name: 'saeed ahmed',
                    location_latitude: 48.860642,
                    location_longitude: 2.352245,
                    user_link: '#',
                    user_image: 'images/img2.png',
                    phone: '+966 560010002',
                    services_image: 'images/img1.svg',
                    services_type: 'Car services',
                    services_name: 'Repair Tire',
                    category: 'active'
                },
                {
                    name: 'mahmoud shabat',
                    location_latitude: 48.858370,
                    location_longitude: 2.294481,
                    user_link: '#',
                    user_image: 'images/img2.png',
                    phone: '+966 560010002',
                    services_image: 'images/img1.svg',
                    services_type: 'Car services',
                    services_name: 'Repair Tire',
                    category: 'active'
                },
                {
                    name: 'mahmoud abo zyara',
                    location_latitude: 48.837273,
                    location_longitude: 2.335387,
                    user_link: '#',
                    user_image: 'images/img2.png',
                    phone: '+966 560010002',
                    services_image: 'images/img1.svg',
                    services_type: 'Car services',
                    services_name: 'Repair Tire',
                    category: 'active'
                },
                {
                    name: 'khaled saeed',
                    location_latitude: 48.860819,
                    location_longitude: 2.354507,
                    user_link: '#',
                    user_image: 'images/img2.png',
                    phone: '+966 560010002',
                    services_image: 'images/img1.svg',
                    services_type: 'Car services',
                    services_name: 'Repair Tire',
                    category: 'NotActive'
                },
                {
                    name: 'moammer al swafere',
                    location_latitude: 48.853798,
                    location_longitude: 2.333328,
                    user_link: '#',
                    user_image: 'images/img2.png',
                    phone: '+966 560010002',
                    services_image: 'images/img1.svg',
                    services_type: 'Car services',
                    services_name: 'Repair Tire',
                    category: 'NotActive'
                },
                {
                    name: 'abdalazeez ahmed',
                    location_latitude: 48.862880,
                    location_longitude: 2.287205,
                    user_link: '#',
                    user_image: 'images/img2.png',
                    phone: '+966 560010002',
                    services_image: 'images/img1.svg',
                    services_type: 'Car services',
                    services_name: 'Repair Tire',
                    category: 'NotActive'
                },
                {
                    name: 'hamza hamza',
                    location_latitude: 48.865784,
                    location_longitude: 2.307314,
                    user_link: '#',
                    user_image: 'images/img2.png',
                    phone: '+966 560010002',
                    services_image: 'images/img1.svg',
                    services_type: 'Car services',
                    services_name: 'Repair Tire',
                    category: 'NotActive'
                },
                {
                    name: 'fayeq melad',
                    location_latitude: 48.852729,
                    location_longitude: 2.350564,
                    user_link: '#',
                    user_image: 'images/img2.png',
                    phone: '+966 560010002',
                    services_image: 'images/img1.svg',
                    services_type: 'Car services',
                    services_name: 'Repair Tire',
                    category: 'NotActive'
                },
                {
                    name: 'saleh habosh',
                    location_latitude: 48.870587,
                    location_longitude: 2.318943,
                    user_link: '#',
                    user_image: 'images/img2.png',
                    phone: '+966 560010002',
                    services_image: 'images/img1.svg',
                    services_type: 'Car services',
                    services_name: 'Repair Tire',
                    category: 'active'
                }
            ]

        };

    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(48.865633, 2.321236),

        mapTypeControl: true,
        mapTypeControlOptions: {
            // style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            // mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.ROADMAP],
            position: google.maps.ControlPosition.LEFT_TOP
        },
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.BOTTM_LEFT
        },
        scrollwheel: false,
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },

    };
    var marker;
    mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
    for (var key in markersData)

        filterMarkers = function (category) {
            markersData[key].forEach(function (item) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
                    map: mapObject,
                    mapTypeId: 'satellite',
                    icon: 'images/pins/' + item.category + '.png',
                    // visible: false
                });


                // var controlUI = document.getElementById('#div');
                //
                // // Setup the click event listeners to geolocate user
                // google.maps.event.addDomListener(controlUI, 'click', geolocate);


                // console.log(item.category);
                console.log(category);
                if (item.category === category || category === 0) {
                    marker.setMap(mapObject);
                }
                // Categories don't match
                else {
                    marker.setMap(null);
                }

                // console.log(item.category);

                // If is same category or category not picked


                if ('undefined' === typeof markers[key])
                    markers[key] = [];
                markers[key].push(marker);
                google.maps.event.addListener(marker, 'click', (function () {
                    closeInfoBox();
                    getInfoBox(item).open(mapObject, this);
                    mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
                }));
                // clearMarkers = function () {
                //     marker.setMap(null);
                //     console.log(item)
                // };

            });

        };
    filterMarkers(0);
    var MyLocation = document.getElementById('myLocation');
    mapObject.controls[google.maps.ControlPosition.TOP_RIGHT].push(MyLocation);
    geolocate = function geolocate() {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function (position) {

                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                // Create a marker and center map on user location
                marker.setMap(null);
                marker = new google.maps.Marker({
                    position: pos,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    icon: 'images/pins/marker.png',
                    map: mapObject,

                });
                // marker.setMap(mapObject);
                mapObject.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
                mapObject.setZoom(16);
            });
        }
    };
    // filterMarkers(0)
    // new MarkerClusterer(mapObject, markers[key]);
    // mapObject.addListener('bounds_changed', function () {
    //     searchBox.setBounds(mapObject.getBounds());
    // });
    hideAllMarkers = function hideAllMarkers() {
        for (var key in markers)
            markers[key].forEach(function (marker) {
                marker.setMap(null);
            });
    };

    function closeInfoBox() {
        $('div.infoBox').remove();
    };
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    // mapObject.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    // mapObject.addListener('bounds_changed', function () {
    //     searchBox.setBounds(mapObject.getBounds());
    // });
    var markerss = [];
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        // Clear out the old markers.
        markerss.forEach(function (marker) {
            marker.setMap(null);
        });
        markerss = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markerss.push(new google.maps.Marker({
                map: mapObject,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        mapObject.fitBounds(bounds);
    });

    function getInfoBox(item) {
        return new InfoBox({
            content:
                '<div class="marker_info bg-grayF" id="marker_info">' +
                '<span>' +
                '<div class="media driver-details-card">' +
                '<img class="mr-2 user-img" src="' + item.user_image + '" alt="no image">' +
                '<div class="media-body">' +
                '<h5 class="mt-0">' +
                '<a href="' + item.user_link + '" class="driver-name link-one">' + item.name + '' +
                '<img src="images/verified.svg" alt="">' +
                '</a>' +
                '</h5>' +
                '<a class="link-one driver-phone fw-500" href="tel:' + item.phone + '">' + item.phone + '</a>' +
                '</div>' +
                '</div>' +
                '<div class="media service-details-card mt-2">' +
                '<img class="mr-2 user-img" src="' + item.services_image + '" alt="no image">' +
                '<div class="media-body">' +
                '<p class="fs-14 mb-2 mt-1">' + item.services_type + '</p>' +
                '<p class="fs-14 fw-500 mb-0">' + item.services_name + '</p>' +
                '</div>' +
                '</div>' +
                '</span>' +
                '</div>',
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(1, 101),
            closeBoxMargin: '',
            closeBoxURL: "images/close_infobox.png",
            isHidden: false,
            alignBottom: true,
            pane: 'floatPane',
            enableEventPropagation: true
        });

    }

}
