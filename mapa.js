var map = L.map(document.getElementById('mapDIV'), {
    center: [2.81954, -60.6714],
    zoom: 15
    });
    var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        });
        basemap.addTo(map);