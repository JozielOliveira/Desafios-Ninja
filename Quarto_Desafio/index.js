let api = "https://pacific-earth-39167.herokuapp.com/codigo/"
var latitude
var longitude

    axios.get(`${api}panqueca`)
    .then(function (response) {
        latitude = response.data.cidade.lat
        longitude = response.data.cidade.long
        longitude = parseFloat(longitude)
        latitude  = parseFloat(latitude)
        initMap()
    })
    .catch(function (error) {
        console.log(error)
    })
    


function initMap() {
    
    let centro = {lat:  latitude, lng: longitude};
    
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: centro
    });
    
    let marker = new google.maps.Marker({
      position: centro,
      map: map
    });

    document.getElementById("ll").innerHTML = `Latitude : ${latitude}, Longitude : ${longitude}`
}
