function maps(lat, long, name){

    let map = L.map('map').setView([lat, long], 15);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
    }).addTo(map);

    L.circle([lat, long], {
        color: '#5882FA',
        fillColor: '#A9D0F5',
        fillOpacity: 0.5,
        radius: 350
    }).addTo(map);

    // L.marker([lat, long],{
    //     draggable: true
    // }).addTo(map).bindPopup(name).openPopup();
}